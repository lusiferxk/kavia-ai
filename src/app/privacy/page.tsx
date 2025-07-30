'use client'

import { GradientBackground } from './GradientBackground'
import { privacyContent } from '@/data/privacy-content'

export default function PrivacyPage() {
  return (
    <div className="relative">
      <GradientBackground />
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="relative pt-28 pb-20 md:py-32">
          {/* Content Wrapper - No prose classes to preserve Word formatting */}
          <div className="mx-auto max-w-4xl">
            <div 
              className="legal-content"
              dangerouslySetInnerHTML={{ __html: privacyContent }}
            />
          </div>
        </div>
      </div>
    </div>
  )
} 