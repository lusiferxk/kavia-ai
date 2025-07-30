'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Search } from 'lucide-react'
import Fuse from 'fuse.js'

interface SearchResult {
  title: string
  content: string
  path: string
  anchors?: string[]
}

function highlightMatch(text: string, query: string) {
  const regex = new RegExp(`(${query})`, 'gi')
  return text.split(regex).map((part, i) =>
    part.toLowerCase() === query.toLowerCase() ? (
      <mark key={i} className="bg-yellow-300 text-black rounded-sm px-1">
        {part}
      </mark>
    ) : (
      part
    )
  )
}

export default function SearchBar() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchResult[]>([])
  const [loading, setLoading] = useState(false)
  const [debounceTimer, setDebounceTimer] = useState<NodeJS.Timeout | null>(null)
  const router = useRouter()

  const fetchResults = async (q: string) => {
    setLoading(true)
    try {
      const res = await fetch('/searchIndex.json')
      const data: SearchResult[] = await res.json()
      const fuse = new Fuse<SearchResult>(data, {
        keys: ['title', 'content'],
        threshold: 0.3,
        ignoreLocation: true,
      })
      const results = fuse.search(q).slice(0, 5).map((r) => r.item)
      setResults(results)
    } catch (err) {
      console.error('Search failed:', err)
      setResults([])
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (!query.trim()) {
      setResults([])
      return
    }

    if (debounceTimer) clearTimeout(debounceTimer)

    const timer = setTimeout(() => {
      fetchResults(query)
    }, 300)

    setDebounceTimer(timer)
    return () => clearTimeout(timer)
  }, [query])

  const handleGo = async (path: string, anchors?: string[]) => {
    setLoading(true)
    const fullPath = anchors?.length ? `${path}#${anchors[0]}` : path
    router.push(fullPath)
    setResults([])
  }

  return (
    <div className="relative w-full">
      <div className="relative mb-4">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white" size={16} />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Quick Search"
          className="px-10 pr-10 w-full bg-[#393536] text-sm text-white py-3 rounded-xl placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        {loading && (
          <span className="absolute right-3 top-1/2 -translate-y-1/2 flex gap-1">
            <span className="w-1 h-1 rounded-full bg-white animate-bounce [animation-delay:-0.2s]"></span>
            <span className="w-1 h-1 rounded-full bg-white animate-bounce [animation-delay:-0.1s]"></span>
            <span className="w-1 h-1 rounded-full bg-white animate-bounce"></span>
          </span>
        )}
      </div>

      {results.length > 0 && (
        <div className="absolute top-full mt-2 w-full bg-[#1e1e1e] rounded-xl shadow-xl z-50 border border-neutral-700 max-h-72 overflow-y-auto">
          {results.map((item, i) => (
            <div
              key={i}
              className="p-4 border-b border-[#2a2a2a] hover:bg-[#2b2b2b] cursor-pointer"
              onClick={() => handleGo(item.path, item.anchors)}
            >
              <p className="text-white font-semibold text-sm mb-1">
                {highlightMatch(item.title, query)}
              </p>
              <p className="text-gray-400 text-xs line-clamp-2">
                {highlightMatch(item.content.slice(0, 150), query)}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}