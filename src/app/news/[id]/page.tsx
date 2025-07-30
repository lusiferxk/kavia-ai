// src/app/news/[id]/page.tsx
import React from 'react'
import Image from 'next/image'
import { newsData } from '@/data/news'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import ShareSection from './components/ShareSection'
import BackButton from './components/BackButton'
import BackgroundGlow from './components/BackgroundGlow'
import { siteConfig } from '@/config/site' // Make sure this is imported

// Generate static params for all news articles
export async function generateStaticParams() {
  return newsData.map((news) => ({
    id: news.id,
  }))
}

// Enhanced metadata generation with SEO, OpenGraph, and social media previews
export async function generateMetadata(
  { params }: { params: { id: string } }
): Promise<Metadata> {
  const id = params.id
  const newsItem = newsData.find(item => item.id === id)
  
  if (!newsItem) {
    return {
      title: 'News Article Not Found | KAVIA AI',
      description: 'The requested news article could not be found.',
    }
  }

  // Strip HTML tags for description
  const plainTextContent = newsItem.content?.replace(/<[^>]+>/g, '') || ''
  const description = plainTextContent.slice(0, 160) + (plainTextContent.length > 160 ? '...' : '')

  const url = `https://kavia.ai/news/${id}`

  return {
    title: `${newsItem.title} | KAVIA AI`,
    description: description,
    authors: [{ name: newsItem.author || 'KAVIA AI Team' }],
    publisher: 'KAVIA AI',
    keywords: [
      'KAVIA AI',
      'Software Development',
      'AI Technology',
      'Tech News',
      ...newsItem.title.split(' ').filter(word => word.length > 3)
    ],
    robots: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
    openGraph: {
      title: newsItem.title,
      description: description,
      url: url,
      siteName: 'KAVIA AI',
      locale: 'en_US',
      type: 'article',
      publishedTime: newsItem.date,
      authors: [newsItem.author || 'KAVIA AI Team'],
      images: [
        {
          url: newsItem.image,
          width: 1200,
          height: 630,
          alt: newsItem.title,
        }
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: newsItem.title,
      description: description,
      images: [newsItem.image],
      creator: '@kaviaai',
      site: '@kaviaai',
    },
    alternates: {
      canonical: url,
    },
    other: {
      'linkedin:author': 'kavia-ai',
      'linkedin:company': 'kavia-ai',
      'article:published_time': newsItem.date,
      'article:author': newsItem.author || 'KAVIA AI Team',
      'article:section': 'Technology',
    },
  }
}

// Main component remains the same
export default async function NewsDetailPage({ params }: { params: { id: string } }) {
  const id = params.id
  const newsItem = newsData.find((item) => item.id === id)
  
  if (!newsItem) {
    notFound()
  }

  return (
    <main className="relative w-full bg-[#231F20] overflow-hidden pt-28">
      <BackgroundGlow />
      
      {/* Content */}
      <div className="relative z-10">
        <div className="max-w-[1440px] mx-auto px-4 md:px-[92px] pt-[60px] pb-[132px] flex flex-col items-center gap-[50px]">
          {/* Header Section */}
          <div className="flex flex-col items-center gap-3 w-full max-w-4xl">
            <BackButton />

            {/* Date Badge */}
            <div className="self-stretch h-6 flex flex-col items-center gap-3">
              <time 
                dateTime={newsItem.date}
                className="px-2.5 bg-[#37322f] rounded-[999px] shadow-[0px_3px_3px_0px_rgba(12,9,8,0.10),0px_1px_2px_0px_rgba(12,9,8,0.32),inset_0px_1px_0px_0px_rgba(214,207,194,0.12)] inline-flex items-center"
              >
                <span className="text-white text-xs font-medium font-['Inter'] capitalize leading-normal tracking-wide">
                  {newsItem.date}
                </span>
              </time>
            </div>

            {/* Title */}
            <h1 className="self-stretch text-center text-white text-[40px] font-bold font-['Inter'] leading-[52px]">
              {newsItem.title}
            </h1>
          </div>

          {/* Main Image */}
          <div className="relative w-full max-w-[900px] rounded-[9px] overflow-hidden">
            <Image 
              src={newsItem.image} 
              alt={newsItem.title}
              width={900}
              height={500}
              className="w-full h-auto" 
              sizes="(max-width: 900px) 100vw, 900px"
              priority
            />
          </div>

          {/* Content Sections */}
          <div className="flex flex-col gap-[50px] w-full max-w-[900px]">
            {/* Main Content */}
            <div className="flex flex-col gap-10">
              <div 
                className="text-[#dedcdd] text-lg font-normal font-['Inter'] leading-[30.60px]"
                dangerouslySetInnerHTML={{ __html: newsItem.content || '' }}
              />
            </div>

            {/* About Section */}
            <div className="p-4 flex flex-col gap-6">
              <h2 className="text-white text-[40px] font-semibold font-['Inter'] leading-[52px]">
                About KAVIA
              </h2>
              <p className="text-[#dedcdd] text-lg font-normal font-['Inter'] leading-[30.60px]">
                KAVIA is an AI-powered company focused on improving Business Agility, Staff
                productivity and creativity across the software development lifecycle. Through its
                Workflow Management Platform, KAVIA integrates AI solutions into every phase of
                product development, enabling teams to optimize performance from design to
                deployment.
              </p>
              <div className="flex items-center gap-4">
                <p>
                  <span className="text-white text-xl font-bold font-['Inter'] leading-normal">
                    For media inquiries, please contact:{' '}
                  </span>
                  <a
                    href="mailto:info@kavia.ai"
                    className="text-[#f26a1b] text-xl font-bold font-['Inter'] leading-normal hover:text-[#f58849]"
                  >
                    info@kavia.ai
                  </a>
                </p>
              </div>
            </div>
            
            {/* Share Section */}
            <ShareSection />
          </div>
        </div>
      </div>
    </main>
  )
}