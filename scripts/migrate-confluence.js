const fs = require('fs-extra');
const path = require('path');
const cheerio = require('cheerio');
const TurndownService = require('turndown');
const { gfm } = require('turndown-plugin-gfm');

// Initialize Turndown with GitHub Flavored Markdown
const turndownService = new TurndownService({
  headingStyle: 'atx',
  codeBlockStyle: 'fenced',
  bulletListMarker: '-'
});

// Add GFM support for tables
turndownService.use(gfm);

// Custom rules for Confluence-specific elements
turndownService.addRule('confluenceImage', {
  filter: function (node) {
    return node.nodeName === 'IMG' && node.getAttribute('class')?.includes('confluence-embedded-image');
  },
  replacement: function (content, node) {
    const alt = node.getAttribute('alt') || 'image';
    const src = node.getAttribute('src');
    
    // Extract just the filename from the src
    const filename = src?.split('/').pop()?.split('?')[0] || 'image';
    
    return `![${alt}](/images/confluence/${filename})`;
  }
});

// Configuration
const config = {
  confluenceExportPath: './confluence-export', // Your HTML export folder
  outputPath: './src/app/documentation',
  imagesPath: './public/images/confluence',
  
  // Page mapping for proper structure
  pageMapping: {
    'Kavia-Documentation-v2.3_57344004.html': {
      output: 'kavia-overview/page.mdx',
      title: 'Kavia Documentation v2.3'
    },
    'Quick-Start-to-Creating-a-web-application_57573377.html': {
      output: 'getting-started/quick-start/page.mdx',
      title: 'Quick Start to Creating a Web Application'
    },
    'Overview_3212537.html': {
      output: 'overview/page.mdx',
      title: 'Overview'
    }
  }
};

// Helper function to clean HTML content
function cleanHtml(html) {
  const $ = cheerio.load(html);
  
  // Remove Confluence-specific elements
  $('.page-metadata').remove();
  $('.pageSection.group').remove(); // Attachments section
  $('#footer').remove();
  $('#breadcrumb-section').remove();
  $('.hidden').remove();
  
  // Extract main content
  const mainContent = $('#main-content').html() || $('.wiki-content').html() || $('body').html();
  
  return mainContent;
}

// Helper function to extract and process sections
function processContent(html, title) {
  const $ = cheerio.load(html);
  
  // Extract sections with IDs for table of contents
  const sections = [];
  $('h1, h2, h3').each((i, elem) => {
    const $elem = $(elem);
    const id = $elem.attr('id') || $elem.text().toLowerCase().replace(/\s+/g, '-');
    const text = $elem.text();
    const level = parseInt(elem.tagName[1]);
    
    sections.push({ id, text, level });
  });
  
  // Clean the HTML
  const cleanedHtml = cleanHtml(html);
  
  // Convert to Markdown
  let markdown = turndownService.turndown(cleanedHtml);
  
  // Post-process the markdown
  markdown = postProcessMarkdown(markdown);
  
  // Create MDX content with frontmatter
  const mdxContent = `---
title: "${title}"
description: "Migrated from Confluence"
---

${markdown}
`;
  
  return { mdxContent, sections };
}

// Post-process markdown to fix common issues
function postProcessMarkdown(markdown) {
  // Fix multiple line breaks
  markdown = markdown.replace(/\n{3,}/g, '\n\n');
  
  // Fix code blocks
  markdown = markdown.replace(/```\n\n/g, '```\n');
  markdown = markdown.replace(/\n\n```/g, '\n```');
  
  // Fix list formatting
  markdown = markdown.replace(/\n\n-/g, '\n-');
  
  // Remove empty links
  markdown = markdown.replace(/\[([^\]]+)\]\(\)/g, '$1');
  
  // Fix table formatting
  markdown = markdown.replace(/\|\s*\n\s*\|/g, '|\n|');
  
  return markdown;
}

// Helper to copy images
async function copyImages(confluenceExportPath, outputImagesPath) {
  const attachmentsPath = path.join(confluenceExportPath, 'attachments');
  const imagesPath = path.join(confluenceExportPath, 'images');
  
  // Create output directory
  await fs.ensureDir(outputImagesPath);
  
  // Copy from attachments folder
  if (await fs.pathExists(attachmentsPath)) {
    const files = await fs.readdir(attachmentsPath);
    for (const file of files) {
      // Look for image files in subdirectories
      const filePath = path.join(attachmentsPath, file);
      const stat = await fs.stat(filePath);
      
      if (stat.isDirectory()) {
        const subFiles = await fs.readdir(filePath);
        for (const subFile of subFiles) {
          if (subFile.match(/\.(png|jpg|jpeg|gif|svg)$/i)) {
            await fs.copy(
              path.join(filePath, subFile),
              path.join(outputImagesPath, subFile)
            );
            console.log(`✅ Copied image: ${subFile}`);
          }
        }
      }
    }
  }
  
  // Copy from images folder
  if (await fs.pathExists(imagesPath)) {
    await fs.copy(imagesPath, outputImagesPath, {
      filter: (src) => {
        return src.match(/\.(png|jpg|jpeg|gif|svg)$/i) || fs.statSync(src).isDirectory();
      }
    });
  }
}

// Main migration function
async function migrateConfluence() {
  console.log('🚀 Starting Confluence migration...\n');
  
  try {
    // Copy images first
    console.log('📸 Copying images...');
    await copyImages(config.confluenceExportPath, config.imagesPath);
    
    // Process each HTML file
    for (const [filename, mapping] of Object.entries(config.pageMapping)) {
      const filePath = path.join(config.confluenceExportPath, filename);
      
      if (await fs.pathExists(filePath)) {
        console.log(`\n📄 Processing: ${filename}`);
        
        // Read HTML file
        const html = await fs.readFile(filePath, 'utf-8');
        
        // Process content
        const { mdxContent, sections } = processContent(html, mapping.title);
        
        // Create output directory
        const outputPath = path.join(config.outputPath, mapping.output);
        await fs.ensureDir(path.dirname(outputPath));
        
        // Write MDX file
        await fs.writeFile(outputPath, mdxContent);
        
        console.log(`✅ Created: ${mapping.output}`);
        console.log(`   Found ${sections.length} sections`);
      } else {
        console.log(`⚠️  File not found: ${filename}`);
      }
    }
    
    // Create navigation structure based on migrated content
    await createNavigationStructure();
    
    console.log('\n✨ Migration complete!');
    console.log('\n📝 Next steps:');
    console.log('1. Review the migrated content in src/app/documentation/');
    console.log('2. Update the _navigation.tsx file if needed');
    console.log('3. Check images in public/images/confluence/');
    console.log('4. Run npm run dev to see your migrated documentation');
    
  } catch (error) {
    console.error('❌ Migration error:', error);
  }
}

// Create navigation structure
async function createNavigationStructure() {
  const navStructure = `import type { NavItem } from './types'

export const navigation: NavItem[] = [
  {
    title: 'Overview',
    href: '/documentation',
  },
  {
    title: 'Kavia Documentation',
    href: '/documentation/kavia-overview',
  },
  {
    title: 'Getting Started',
    items: [
      {
        title: 'Quick Start',
        href: '/documentation/getting-started/quick-start'
      }
    ]
  }
]
`;

  const navPath = path.join(config.outputPath, '_navigation.tsx');
  await fs.writeFile(navPath, navStructure);
  console.log('\n✅ Created navigation structure');
}

// Run the migration
migrateConfluence();