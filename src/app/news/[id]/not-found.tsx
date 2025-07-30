// src/app/news/[id]/not-found.tsx
import Link from 'next/link'

export default function NewsNotFound() {
  return (
    <div className="min-h-screen flex items-center">
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
        <p className="text-xl mb-8">
          The article you're looking for doesn't exist or has been removed.
        </p>
        <Link
          href="/news"
          className="inline-block px-6 py-3 bg-[#F26A1B] rounded-[8px] text-white font-medium text-base sm:text-lg md:text-xl leading-[30px] tracking-[0.4px] transition-colors hover:bg-[#e15e0d]"
        >
          Back to News
        </Link>
      </div>
    </div>
  )
}