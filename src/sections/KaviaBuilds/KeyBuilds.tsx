'use client'

import { useState } from 'react'
import { X } from 'lucide-react'
import Link from 'next/link'
// Types for the preview modal
interface PreviewProject {
  image: string
  title: string
  author: string
  description?: string
  techStack?: string
  timeTaken?: string
  demoLink?: string
}

// Sample project data for Key Builds
const keyBuildsProjects: PreviewProject[] = [
  {
    image: "https://wycneutglyqklbussmuo.supabase.co/storage/v1/object/public/app-images/0654f190-940e-4a10-ba2a-724a54241860/21d02412-749b-4289-8734-aa0567732c7b.png?_cb=1750405444624",
    title: "Vistrata - AI Travel Planner",
    author: "Harish",
    demoLink: "https://kavia-main.d147scrde1ux58.amplifyapp.com/",
  },
  {
    image: "https://wycneutglyqklbussmuo.supabase.co/storage/v1/object/public/app-images/7fc47b83-f419-4f7d-9d59-9de02c0ca3d7/f974a7b3-d7bb-4953-b317-a4d6e02033e2.png?_cb=1751874104946",
    title: "TradeFusion",
    author: "NithyashreeS",
    demoLink: "https://kavia-main.d378mocfq2hvzo.amplifyapp.com/",
  },
  {
    image: "https://wycneutglyqklbussmuo.supabase.co/storage/v1/object/public/app-images/d06036af-78ff-46f7-92f1-aac721d84467/0605a866-35ac-477a-8040-d1b647e5c5e4.png?_cb=1751871417616",
    title: "WordGrid",
    author: "Keerthana S",
    demoLink: "https://105404-kavia-main.kavia.app",
  },
  {
    image: "https://wycneutglyqklbussmuo.supabase.co/storage/v1/object/public/app-images/0654f190-940e-4a10-ba2a-724a54241860/aa1630e2-b0fd-48b1-84a4-b098b2c64a16.png?_cb=1748964093446",
    title: "Cyber Recon: Surface Intelligence",
    author: "Harish",
    demoLink: "https://kavia-main.dnxu5cqmol9zf.amplifyapp.com/",
  },
  {
    image: "https://wycneutglyqklbussmuo.supabase.co/storage/v1/object/public/app-images/d2eaf2cc-d1e0-4664-bcac-8677aa45b0b2/dc31df26-c7ff-4a91-9f14-6a68a258d78f.png?_cb=1748963242135",
    title: "FinanceFlow",
    author: "Martin ",
    demoLink: "https://kavia-main.d1anm9tm7hz0wb.amplifyapp.com/",
  },
  {
    image: "https://wycneutglyqklbussmuo.supabase.co/storage/v1/object/public/app-images/d2eaf2cc-d1e0-4664-bcac-8677aa45b0b2/71a2b5bb-7fa6-48e1-b04f-d4668f13df3e.png?_cb=1750180191707",
    title: "GlowSkin",
    author: "Martin ",
    demoLink: "https://kavia-main.d2izqa12re2l2h.amplifyapp.com/",
  },
  // {
  //   image: "https://wycneutglyqklbussmuo.supabase.co/storage/v1/object/public/app-images/4785fd1d-aa57-40ce-a7cf-ef895b93aacf/09fa718c-7fa8-4524-9911-4045c9f79b65.png?_cb=1750184352394",
  //   title: "Kollywood QuizHub",
  //   author: "Ruban Gunasekaran",
  //   demoLink: "https://kavia-main.dylfxkkfjb6gk.amplifyapp.com/",
  // },
  // {
  //   image: "https://wycneutglyqklbussmuo.supabase.co/storage/v1/object/public/app-images/f4cc8a47-622b-469a-9fe6-e386c3246d2a/57764027-8cc6-4c23-8114-ef7bcfa200c5.png?_cb=1750418254714",
  //   title: "MiniMayhem Arcade",
  //   author: "Anto jones E",
  //   demoLink: "https://kavia-main.d3flp2m8pda1zz.amplifyapp.com/",
  // },
  // {
  //   image: "https://wycneutglyqklbussmuo.supabase.co/storage/v1/object/public/app-images/a1382610-c1ba-40eb-9df6-35b829a894e9/4567d16b-e7dc-4664-98e7-68819587d593.png?_cb=1748960920424",
  //   title: "MoodMelody",
  //   author: "23BCS1021",
  //   demoLink: "https://kavia-main.d3jurz3xo84enb.amplifyapp.com/",
  // },


]
export function KeyBuilds() {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false)
  const [previewProject, setPreviewProject] = useState<PreviewProject | null>(null)
  // Preview modal handlers
  const handlePreviewClick = (project: PreviewProject) => {
    setPreviewProject(project)
    setIsPreviewOpen(true)
  }

  const handleClosePreview = () => {
    setIsPreviewOpen(false)
    setPreviewProject(null)
  }

  return (
    <section className="relative">
      {/* Title */}
      <div className="container mx-auto max-w-[900px] mb-24 pt-[68px]">
        <h2 className="text-center text-[48px] font-semibold font-['Inter'] leading-[62px] tracking-[0.96px] text-white">
          Built for Enterprise. Simplified
          <br />
          for Software Creators
        </h2>
      </div>

      {/* Key Builds Section - Dark Mode */}

      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center gap-4 mb-8 md:mb-16">
          {/* Key Builds Cards Grid */}
          <div className="w-full max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Project cards */}
            {keyBuildsProjects.map((card, idx) => (
              <div
                key={idx}
                className="rounded-xl overflow-hidden bg-[#231F20] shadow-lg flex flex-col h-full border border-[#3a3533] group relative"
              >
                <div className="relative w-full h-48 sm:h-56 md:h-60 lg:h-56 xl:h-60">
                  <img src={card.image} alt={card.title} className="w-full h-full object-cover" />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 hidden group-hover:flex items-center justify-center transition-opacity duration-200 bg-gradient-to-b from-[#231F20]/60 via-[#231F20]/80 to-[#231F20]/90 z-10">
                    <button
                      onClick={() => handlePreviewClick(card)}
                      data-icon="false"
                      data-state="Default"
                      className="w-[120px] h-10 px-5 py-1.5 bg-[#f26a1b] rounded-md inline-flex justify-center items-center gap-2 hover:bg-[#e15e0d] transition-colors"
                      style={{ borderRadius: '6px' }}

                      >
                      <div className="justify-center text-white text-sm font-semibold font-['Inter'] leading-tight">
                        Preview
                      </div>
                    </button>
                  </div>
                </div>
                <div className="bg-[#231F20] bg-opacity-90 p-4 border-t border-[#3a3533] flex flex-col flex-1 justify-end">
                  <div className="text-white text-lg font-medium font-['Inter'] leading-tight mb-1">
                    {card.title}
                  </div>
                  <div className="text-[#b0aead] text-sm font-normal font-['Inter']">
                    by {card.author}
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* View All Button */}
          {/* View All Videos Button - Figma Design */}
          <div className="mt-12">
            <Link href="/community/built-with-kavia">
              <div
                className="inline-flex justify-center items-center gap-2 cursor-pointer transition-all duration-200 hover:opacity-80"
                style={{
                  height: '40px',
                  padding: '6px 20px',
                  borderRadius: '8px',
                  border: '1px solid rgba(233, 233, 233, 0.25)',
                }}
              >
                <span className="text-[#f4f3f3] text-sm font-semibold font-['Inter'] leading-tight">
                  View More
                </span>
                <div className="w-1.5 h-3 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="6"
                    height="12"
                    viewBox="0 0 6 12"
                    fill="none"
                  >
                    <path
                      d="M0.7665 11.2404L-0.00390625 10.47L4.466 6.00008L-0.00390625 1.53017L0.7665 0.759766L6.00681 6.00008L0.7665 11.2404Z"
                      fill="#F4F3F3"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Preview Modal */}
      {isPreviewOpen && previewProject && (
        <div className="fixed inset-0 bg-black/50 z-[999999] flex items-center justify-center p-4">
          <div className="bg-[#F8F6F3] rounded-[12px] shadow-2xl border border-[#e5e3df] w-[90vw] h-[90vh] max-w-[1200px] max-h-[900px] flex flex-col overflow-hidden">
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#e5e3df] bg-[#F8F6F3]">
              <div>
                <div className="text-lg font-semibold text-[#231F20]">{previewProject.title}</div>
                <div className="text-xs text-[#7c7c7c]">by {previewProject.author}</div>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={previewProject.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex justify-center items-center gap-2 cursor-pointer transition-all duration-200 hover:opacity-80"
                  style={{
                    height: '40px',
                    padding: '6px 20px',
                    borderRadius: '8px',
                    border: '1px solid rgba(35, 31, 32, 0.25)',
                  }}
                >
                  <span className="text-[#231F20] text-sm font-semibold font-['Inter'] leading-tight">
                    View Full Page
                  </span>
                  <div className="w-1.5 h-3 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="6"
                      height="12"
                      viewBox="0 0 6 12"
                      fill="none"
                    >
                      <path
                        d="M0.7665 11.2404L-0.00390625 10.47L4.466 6.00008L-0.00390625 1.53017L0.7665 0.759766L6.00681 6.00008L0.7665 11.2404Z"
                        fill="#231F20"
                      />
                    </svg>
                  </div>
                </a>
                <button
                  onClick={handleClosePreview}
                  className="p-2 hover:bg-[#e5e3df] rounded-full transition-colors"
                >
                  <X className="w-6 h-6 text-[#231F20]" />
                </button>
              </div>
            </div>
            {/* Modal Content */}
            <div className="flex-1 overflow-auto bg-white flex items-center justify-center">
              {previewProject.demoLink && previewProject.demoLink !== '-' ? (
                <div
                  style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <iframe
                    src={previewProject.demoLink}
                    title={previewProject.title}
                    className="border-0"
                    style={{
                      width: '100%',
                      height: '100%',
                      maxWidth: '100%',
                      maxHeight: '100%',
                      background: 'white',
                      pointerEvents: 'auto',
                      borderRadius: '8px',
                      boxShadow: '0 2px 16px rgba(0,0,0,0.08)',
                    }}
                    sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
                  />
                </div>
              ) : (
                <img
                  src={previewProject.image}
                  alt={previewProject.title}
                  className="object-contain max-h-full max-w-full"
                  style={{ display: 'block', margin: '0 auto' }}
                />
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
