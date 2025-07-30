'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { AlignLeft, Search } from 'lucide-react'
import SearchBar from './SearchBar'

interface TOCItem {
  id: string
  text: string
  level: number
}

export default function PageTOC() {
  const [headings, setHeadings] = useState<TOCItem[]>([])
  const [activeId, setActiveId] = useState<string>('')
  const pathname = usePathname()

  useEffect(() => {
    const contentArea = document.querySelector('main')
    if (!contentArea) return

    const headingElements = Array.from(contentArea.querySelectorAll('h1, h2'))

    const items: TOCItem[] = headingElements.map((el) => {
      const id =
        el.id ||
        el.textContent?.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '') ||
        ''
      el.id = id
      return {
        id,
        text: el.textContent || '',
        level: Number(el.tagName[1]),
      }
    })

    setHeadings(items)
  }, [pathname])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: '-20% 0% -70% 0%', threshold: 1 }
    )

    headings.forEach((heading) => {
      const el = document.getElementById(heading.id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [headings])

  if (!headings.length) return null

  return (
    <aside className="w-full max-w-md">
      {/* Search Bar */}
      <SearchBar />

      {/* TOC Title */}
      <p className="text-sm text-white flex items-center my-5 gap-2">
        <span className="text-md"><AlignLeft size={20} /></span> On this page
      </p>

      {/* TOC Links */}
      <ul className="space-y-1">
        {headings.map((heading) => (
          <li key={heading.id}>
            <a
              href={`#${heading.id}`}
              onClick={(e) => {
                e.preventDefault()
                const el = document.getElementById(heading.id)
                if (el) {
                  const offset = el.getBoundingClientRect().top + window.scrollY - 80
                  window.scrollTo({ top: offset, behavior: 'smooth' })
                }
              }}
              className={`block text-sm hover:text-orange-400 my-3 transition ${activeId === heading.id
                ? 'text-orange-500 font-medium'
                : 'text-gray-400'
                }`}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  )
}
