import type { MDXComponents } from 'mdx/types'
import { ReactNode } from 'react'

// Helper function to create ID from text
function createId(text: ReactNode): string {
  if (typeof text === 'string') {
    return text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '')
  }
  return ''
}

// Custom heading components that auto-generate IDs
const createHeading = (level: 1 | 2 | 3 | 4 | 5 | 6) => {
  return ({ children, id, ...props }: any) => {
    const autoId = id || createId(children)
    const Tag = `h${level}` as keyof JSX.IntrinsicElements
    
    return (
      <Tag id={autoId} {...props}>
        {children}
      </Tag>
    )
  }
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Auto-ID headings
    h1: createHeading(1),
    h2: createHeading(2),
    h3: createHeading(3),
    h4: createHeading(4),
    h5: createHeading(5),
    h6: createHeading(6),
    
    // Custom components for better styling
    pre: ({ children, ...props }: any) => (
      <pre className="code-block" {...props}>
        {children}
      </pre>
    ),
    
    code: ({ children, ...props }: any) => (
      <code className="inline-code" {...props}>
        {children}
      </code>
    ),
    
    // Tables with proper styling
    table: ({ children, ...props }: any) => (
      <div className="table-wrapper">
        <table className="data-table" {...props}>
          {children}
        </table>
      </div>
    ),
    
    // Blockquotes
    blockquote: ({ children, ...props }: any) => (
      <blockquote className="callout" {...props}>
        {children}
      </blockquote>
    ),
    
    // Links that open external URLs in new tabs
    a: ({ href, children, ...props }: any) => {
      const isExternal = href?.startsWith('http') && !href.includes(process.env.NEXT_PUBLIC_SITE_URL || '')
      
      return (
        <a 
          href={href}
          target={isExternal ? '_blank' : undefined}
          rel={isExternal ? 'noopener noreferrer' : undefined}
          {...props}
        >
          {children}
        </a>
      )
    },
    
    ...components,
  }
}