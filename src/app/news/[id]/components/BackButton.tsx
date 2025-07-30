// src/app/news/[id]/components/BackButton.tsx
'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function BackButton() {
  return (
    <div className="self-stretch h-[52px] py-2 flex flex-col items-center gap-3">
      <Link
        href="/news"
        className="px-3 py-1.5 rounded-xl inline-flex items-center gap-2 text-white hover:text-[#f26a1b] transition-colors"
      >
        <ArrowLeft className="w-5 h-5" />
        <span className="text-base font-medium font-['Inter'] uppercase tracking-wide">
          Back
        </span>
      </Link>
    </div>
  )
}