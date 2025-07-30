import type { NavItem } from './types'

export const quickLinks: NavItem[] = [
  { title: 'Overview', href: '/documentation', icon: 'Home' },
  { title: 'Quickstart', href: '/documentation/getting-started/quick-start', icon: 'Code2' },
  { title: 'Templates', href: '/documentation/templates', icon: 'FileText' }
]

export const navigation: NavItem[] = [
  {
    title: 'Getting Started',
    items: [
      {
        title: 'Platform Overview',
        href: '/documentation'
      },
      {
        title: 'Account Setup',
        href: '/documentation/getting-started/account-setup'
       
      },
      {
        title: 'Your First App',
        href: '/documentation/kavia-overview'
      },
      {
        title: 'Basic Concepts',
        href: '/documentation/getting-started/basic-concepts'
      }
    ]
  },
  {
    title: 'Guides & Tutorials',
    items: [
      {
        title: 'Best Practices',
        href: '/documentation/guides/best-practices'
      },
      {
        title: 'Performance Tips',
        href: '/documentation/guides/performance-tips'
      },
      {
        title: 'Security Guide',
        href: '/documentation/guides/security-guide'
      },
      {
        title: 'Error Handling',
        href: '/documentation/guides/error-handling'
      },
      {
        title: 'Use Cases',
        href: '/documentation/guides/use-cases'
      }
    ]
  },
  {
    title: 'Accounts and subscriptions',
    items: [
      {
        title: 'Overview',
        href: '/documentation/accounts/overview'
      },
      {
        title: 'Billing',
        href: '/documentation/accounts/billing'
      },
      {
        title: 'Tokens',
        href: '/documentation/accounts/tokens'
      },
      {
        title: 'Accounts',
        href: '/documentation/accounts/accounts'
      },
      {
        title: 'Team Plans',
        href: '/documentation/accounts/team-plans'
      }
    ]
  }
]