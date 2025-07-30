// src/config/site.ts
export const siteConfig = {
  name: 'KAVIA AI',
  description: 'Launch your product faster with our AI-powered development platform that streamlines your workflow and enhances productivity.',
  url: 'https://kavia.ai',
  ogImage: '/assets/images/og-image.jpg',
  links: {
    x: 'https://x.com/kaviaai',
    github: 'https://github.com/kaviaai',
    linkedin: 'https://www.linkedin.com/company/kavia-ai/'
  },
  author: 'KAVIA AI',
  keywords: [
    'AI Development Platform',
    'Software Development Automation',
    'AI-Powered Development',
    'Developer Productivity Tools',
    'AI Software Solutions',
    'Automated Code Generation',
    'Development Workflow Optimization'
  ],
  xHandle: '@kaviaai',
  linkedinHandle: 'kavia-ai',
  locale: 'en_US',
  type: 'website',
  themeColor: '#F26A1B',
  authors: [
    {
      name: 'KAVIA AI',
      url: 'https://kavia.ai',
    }
  ],
}

export type SiteConfig = typeof siteConfig