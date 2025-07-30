'use client'

import Breadcrumb from '../../integrations/components/Breadcrumb'
import Recent from '../../components/Recent'
import FeatureList from '../../integrations/components/FeatureList'
import { NotificationPanel } from '../../integrations/components/NotificationPanel'
import { title } from 'process'

const AddCustomMetadata = [
  {
    number: 1,
    title: 'Title Tag ',
    description: ' Keep it concise, relevant, and unique per page',
  },
  {
    number: 2,
    title: 'Meta Description  ',
    description: 'Summarize the page in 1–2 lines to improve click-through',
  },
  {
    number: 3,
    title: 'Keywords ',
    description: 'Choose 3–5 focused keywords related to your page content',
  },
]

const CreatingaSitemapManually = [
  {
    number: 1,
    title: 'Ask Kavia:',
    description: ' "Create a sitemap.xml file listing all routes on this site."',
  },
  {
    number: 2,
    title: 'Place the file under your project’s public directory.',
    description: '',
  },
  {
    number: 3,
    title: 'After publishing, access it via https://yourdomain.com/sitemap.xml.',
    description: '',
  },
  {
    number: 4,
    title: 'Submit the link to Google Search Console under "Sitemaps"',
    description: '',
  },
]

const Configure = [
  {
    number: 1,
    title: 'Prompt:  ',
    description: '"Generate a robots.txt file that allows all pages except /admin to be indexed."',
  },
  {
    number: 2,
    title: 'Insert it in the public folder of your project.',
    description: '',
  },
  {
    number: 3,
    title: 'ATest your robots file by visiting: https://yourdomain.com/robots.txt.',
    description: '',
  },
]

const UseProperHeadingStructure = [
  {
    number: 1,
    title: 'Use only one H1 per page',
    description: '',
  },
  {
    number: 2,
    title: 'Use H2 and H3 for section and subsection headers',
    description: '',
  },
  {
    number: 3,
    title: 'Include relevant keywords in headings when possible',
    description: '',
  },
]

const AddInternalLinksBetweenPages = [
  {
    number: 1,
    title: 'Identify related pages within your project',
    description: '',
  },
  {
    number: 2,
    title: 'Link them contextually using clear, descriptive anchor text',
    description: '',
  },
  {
    number: 3,
    title: 'Keep links user-friendly (avoid “click here”)',
    description: '',
  },
]

const AddSchemaMarkup = [
  {
    number: 1,
    title: 'Prompt: ',
    description: '"Generate JSON-LD schema markup for a product page."',
  },
  {
    number: 2,
    title:
      'Insert the schema in the <head> of the page (or in a <script type="application/ld+json"> tag).',
    description: '',
  },
  {
    number: 3,
    title: 'ATest using Google’s Rich Results Test',
    description: '',
  },
]

const AdvancedSEOTips = [
  {
    number: 1,
    title: 'Alt Text for Images ',
    description: 'Always describe images meaningfully',
  },
  {
    number: 2,
    title: 'Descriptive URLs  ',
    description: 'Use clean, hyphenated page slugs like /about-us instead of /page1',
  },
  {
    number: 3,
    title: 'Avoid Duplicate Content ',
    description: 'Ensure each page has a unique value',
  },
  {
    number: 4,
    title: 'Use Long-Tail Keywords ',
    description: 'Focus on specific, low-competition phrases',
  },
  {
    number: 5,
    title: 'Keep Content Fresh ',
    description: 'Update your pages regularly, especially blog-style content',
  },
]

const recentData = [
  { name: 'Troubleshooting', link: '/documentation/tips-tricks/troubleshooting' },
  { name: 'Tips & Tricks', link: '/documentation/tips-tricks' },
]

export default function SEO() {
  return (
    <main className="space-y-6 text-gray-300">
      <Breadcrumb
        items={[
          { label: 'Home', href: '/documentation/home' },
          { label: 'Tips & Tricks', href: '/documentation/tips-tricks' },
          { label: 'SEO', active: true },
        ]}
      />
      <h1 className="text-4xl sm:text-4xl font-medium text-white">SEO</h1>
      <p>Make your Kavia-built websites more discoverable on search engines like Google.</p>

      <div className="shadow-2xl border border-gray-900 rounded-xl p-8 space-y-8">
        <div className="space-y-6">
          <p>
            Search Engine Optimization (SEO) increases your site’s visibility by improving how
            search engines index and rank your content. While Kavia doesn’t yet include automated
            SEO features, you can easily guide the AI through structured prompts and manual edits to
            ensure best practices are followed.
          </p>
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-semibold text-white">
              SEO Fundamentals in Kavia
            </h2>

            <p>
              Kavia helps you control SEO manually by prompting for the right metadata, page
              structure, and linking strategy. Here’s how to approach SEO with your Kavia projects:{' '}
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-semibold text-white">
              Add Custom Metadata (Titles, Descriptions, Keywords)
            </h2>
            <p>
              Metadata helps search engines understand your content before rendering it. You can
              generate and edit metadata in your Kavia project through prompts.
            </p>

            <h4 className="text-lg font-medium text-white">Prompt example:</h4>

            <NotificationPanel message="Add SEO metadata to this page including title, meta description, and relevant keywords." />
            <h4 className="text-lg font-medium text-white">What to include:</h4>
            <FeatureList features={AddCustomMetadata} />
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-semibold text-white">
              Creating a Sitemap Manually
            </h2>
            <p>
              A sitemap lists all the important pages of your site for Google to crawl. Kavia does
              not auto-generate sitemaps yet, but you can create one yourself:
            </p>
            <h4 className="text-lg font-medium text-white">
              How to create and submit a sitemap in Kavia:
            </h4>

            <FeatureList features={CreatingaSitemapManually} />

            <NotificationPanel
              message="Tip: Whenever you add or remove pages, update the sitemap manually or
              ask Kavia to do it."
            />
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-semibold text-white">
              Configure robots.txt to Control Crawling
            </h2>
            <p>
              The robots.txt file lets you tell search engines what to index and what to ignore.{' '}
            </p>
            <h4 className="text-lg font-medium text-white">To add this in Kavia:</h4>

            <FeatureList features={Configure} />
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-semibold text-white">
              Use Proper Heading Structure
            </h2>
            <p>
              Search engines look at headings (H1–H6) to understand the structure of your content.
              You should:
            </p>

            <FeatureList features={UseProperHeadingStructure} />
            <h4 className="text-lg font-medium text-white">Prompt example:</h4>
            <NotificationPanel message="Rewrite the headings on this page using SEO best practices: one H1, logical H2/H3 subheadings, and keyword-rich phrasing." />
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-semibold text-white">
              Add Internal Links Between Pages
            </h2>
            <p>Internal links improve navigation and distribute page authority.</p>
            <h4 className="text-lg font-medium text-white">Steps:</h4>

            <FeatureList features={AddInternalLinksBetweenPages} />
            <h4 className="text-lg font-medium text-white">Prompt example:</h4>
            <NotificationPanel message="Suggest internal links for this article based on existing pages in the project." />
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-semibold text-white">
              Add Schema Markup (Structured Data)
            </h2>
            <p>
              Schema helps Google display rich snippets like FAQs, reviews, or events. Though not
              automatic, you can ask Kavia to generate schema for specific pages.
            </p>
            <h4 className="text-lg font-medium text-white">Steps:</h4>
            <FeatureList features={AddSchemaMarkup} />
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-semibold text-white">
              Advanced SEO Tips for Kavia Projects
            </h2>

            <h4 className="text-lg font-medium text-white">Steps:</h4>
            <FeatureList features={AdvancedSEOTips} />
          </div>
        </div>
      </div>

      <Recent data={recentData} />
    </main>
  )
}
