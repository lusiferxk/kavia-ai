const fs = require('fs-extra');
const path = require('path');
const cheerio = require('cheerio');
const TurndownService = require('turndown');

console.log('🚀 Starting simple migration...\n');

// Configuration
const INPUT_DIR = './confluence-export';
const OUTPUT_DIR = './src/app/documentation';

// Check if input directory exists
if (!fs.existsSync(INPUT_DIR)) {
    console.error('❌ Error: confluence-export folder not found!');
    console.log('📁 Current directory:', process.cwd());
    console.log('\nPlease create a folder called "confluence-export" and put your HTML files there.');
    process.exit(1);
}

// Create output directory
fs.ensureDirSync(OUTPUT_DIR);
console.log('✅ Output directory ready:', OUTPUT_DIR);

// Initialize Turndown
const turndownService = new TurndownService({
    headingStyle: 'atx',
    codeBlockStyle: 'fenced'
});

// Get all HTML files
const files = fs.readdirSync(INPUT_DIR).filter(f => f.endsWith('.html'));
console.log(`\n📄 Found ${files.length} HTML files to process\n`);

// Process each file
files.forEach((filename, index) => {
    console.log(`Processing ${index + 1}/${files.length}: ${filename}`);
    
    try {
        // Read HTML file
        const htmlPath = path.join(INPUT_DIR, filename);
        const html = fs.readFileSync(htmlPath, 'utf-8');
        
        // Parse HTML
        const $ = cheerio.load(html);
        
        // Extract title
        const title = $('#title-text').text().trim() || 
                     $('h1').first().text().trim() || 
                     filename.replace('.html', '');
        
        // Extract main content
        let content = $('#main-content').html() || 
                     $('.wiki-content').html() || 
                     $('body').html() || '';
        
        // Remove unnecessary elements
        const $content = cheerio.load(content);
        $content('.page-metadata').remove();
        $content('#footer').remove();
        $content('.pageSection.group').remove();
        
        // Convert to markdown
        const markdown = turndownService.turndown($content.html());
        
        // Create MDX content
        const mdxContent = `---
title: "${title}"
description: "Migrated from Confluence"
---

${markdown}
`;
        
        // Create output filename
        const outputName = filename
            .replace('.html', '')
            .replace(/_/g, '-')
            .toLowerCase();
        
        const outputPath = path.join(OUTPUT_DIR, outputName, 'page.mdx');
        
        // Create directory and write file
        fs.ensureDirSync(path.dirname(outputPath));
        fs.writeFileSync(outputPath, mdxContent);
        
        console.log(`   ✅ Created: ${outputPath}`);
        
    } catch (error) {
        console.error(`   ❌ Error processing ${filename}:`, error.message);
    }
});

console.log('\n✨ Migration complete!');
console.log('\nNext steps:');
console.log('1. Check your files in:', OUTPUT_DIR);
console.log('2. Run: npm run dev');
console.log('3. Visit: http://localhost:3000/documentation');