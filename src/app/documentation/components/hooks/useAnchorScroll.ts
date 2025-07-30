'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export function useAnchorScroll(highlightColor = '#facc15') {
  const pathname = usePathname()

  useEffect(() => {
    const contentArea = document.querySelector('main')
    if (!contentArea) return

    // Auto-generate ID from heading text if missing
    const headings = contentArea.querySelectorAll('h1, h2, h3, h4, h5, h6')
    headings.forEach((el) => {
      if (!el.id) {
        const slug = el.textContent
          ?.toLowerCase()
          .trim()
          .replace(/\s+/g, '-')
          .replace(/[^\w\-]+/g, '')
        if (slug) el.id = slug
      }
    })

    const scrollToAnchor = () => {
      const hash = window.location.hash
      if (!hash) return

      const target = document.getElementById(hash.slice(1))
      if (target) {
        const topOffset = 100
        const elementPosition = target.getBoundingClientRect().top + window.pageYOffset
        const offsetPosition = elementPosition - topOffset

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        })

        const originalBg = target.style.backgroundColor
        target.style.transition = 'background-color 1s ease'
        target.style.backgroundColor = highlightColor

        setTimeout(() => {
          target.style.backgroundColor = originalBg || 'transparent'
        }, 1200)
      }
    }

    setTimeout(scrollToAnchor, 150)
  }, [pathname])
}