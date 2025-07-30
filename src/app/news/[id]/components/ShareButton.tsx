// src/app/news/[id]/components/ShareButton.tsx
'use client'

import React from 'react'
import { toast } from 'sonner'

interface ShareButtonProps {
  platform: 'twitter' | 'linkedin' | 'youtube' | 'copy' | 'slack'
  icon: React.ReactNode
  newsData?: {
    title: string
    description: string
    url: string
    image: string
  }
}

export default function ShareButton({ platform, icon, newsData }: ShareButtonProps) {
  const handleShare = () => {
    // Get current URL and title if newsData is not provided
    const shareUrl = newsData?.url || window.location.href
    const shareTitle = newsData?.title || document.title
    const description = newsData?.description || document.querySelector('meta[name="description"]')?.getAttribute('content') || ''

    // Properly encode all share data
    const encodedUrl = encodeURIComponent(shareUrl)
    const encodedTitle = encodeURIComponent(shareTitle)
    const encodedDescription = encodeURIComponent(description)

    switch (platform) {
      case 'twitter':
        const twitterUrl = new URL('https://twitter.com/intent/tweet')
        twitterUrl.searchParams.set('text', shareTitle)
        twitterUrl.searchParams.set('url', shareUrl)
        twitterUrl.searchParams.set('via', 'kaviaai')
        
        window.open(
          twitterUrl.toString(),
          'ShareOnTwitter',
          'width=550,height=450,toolbar=0,location=0,menubar=0'
        )
        break

      case 'linkedin':
        const linkedinUrl = new URL('https://www.linkedin.com/sharing/share-offsite/')
        linkedinUrl.searchParams.set('url', shareUrl)
        linkedinUrl.searchParams.set('title', shareTitle)
        linkedinUrl.searchParams.set('summary', description)
        linkedinUrl.searchParams.set('source', 'KAVIA AI')
        
        window.open(
          linkedinUrl.toString(),
          'ShareOnLinkedIn',
          'width=550,height=550,toolbar=0,location=0,menubar=0'
        )
        break

      case 'youtube':
        window.open(
          'https://www.youtube.com/@kaviaai',
          '_blank',
          'noopener,noreferrer'
        )
        break

      case 'slack':
        const slackUrl = new URL('https://slack.com/share/url')
        slackUrl.searchParams.set('url', shareUrl)
        slackUrl.searchParams.set('text', `${shareTitle}\n${description}`)
        
        window.open(
          slackUrl.toString(),
          'ShareOnSlack',
          'width=550,height=450,toolbar=0,location=0,menubar=0'
        )
        break

      case 'copy':
        navigator.clipboard.writeText(shareUrl)
          .then(() => toast.success('Link copied to clipboard!'))
          .catch(() => toast.error('Failed to copy link'))
        break
    }

    // Analytics tracking
    try {
      if (typeof window.gtag !== 'undefined') {
        window.gtag('event', 'share', {
          method: platform,
          content_type: 'article',
          item_id: shareUrl,
          title: shareTitle
        })
      }
    } catch (error) {
      console.error('Analytics error:', error)
    }
  }

  return (
    <button
      onClick={handleShare}
      className="w-6 h-6 hover:opacity-80 transition-opacity"
      aria-label={`Share on ${platform}`}
    >
      {icon}
    </button>
  )
}