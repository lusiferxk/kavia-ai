'use client'

import React, { useState } from 'react';
import { Header } from '../../../components/layout/header';
import Footer from '../../../components/layout/footer';
import { projects } from '../../../data/projects';
import type { Project } from '../../../types/project';
import GradientBackground from '../../enterprise/GradientBackground';

// Add PreviewProject type for modal
interface PreviewProject {
  image: string;
  title: string;
  author: string;
  demoLink?: string;
}

export default function BuiltWithKaviaCommunityPage() {
  const [previewProject, setPreviewProject] = useState<PreviewProject | null>(null);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const handlePreviewClick = (project: Project) => {
    setPreviewProject({
      image: project.imageUrl,
      title: project.title,
      author: project.author,
      demoLink: project.demoLink,
    });
    setIsPreviewOpen(true);
  };

  const handleClosePreview = () => {
    setIsPreviewOpen(false);
    setPreviewProject(null);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#231F20] text-white relative overflow-hidden">
      <GradientBackground />
      {/* Background Pattern Container (copied from EnterpriseHero) */}
      <div
        className="absolute hidden md:block"
        style={{
          width: 'clamp(400px, 50vw, 647.089px)',
          height: 'clamp(600px, 70vh, 950px)',
          left: 'calc(50% - min(947.089px, 90vw)/2)',
          top: '50px',
          transformOrigin: 'center',
          zIndex: 0,
        }}
      >
        {[302.91, 266.91, 233.56, 200.17, 166.83, 133.46, 100.09, 66.74, 33.35, 0].map((leftPosition, index) => (
          <div
            key={index}
            style={{
              position: 'absolute',
              width: 'clamp(400px, 45vw, 647.09px)',
              height: 'clamp(400px, 45vw, 647.09px)',
              left: `${leftPosition}px`,
              top: '0px',
              transform: 'rotate(0deg)',
              transformOrigin: 'top left',
              borderRadius: '50%',
              border: '0.7px solid rgba(242,106,27,0.2)',
              mask: 'linear-gradient(to bottom, transparent, black 35%, black 65%, transparent)',
              WebkitMask:
                'linear-gradient(to bottom, transparent, black 35%, black 65%, transparent)',
              padding: '0.7px',
            }}
          />
        ))}
      </div>
      <Header />
      <main className="flex-1 flex flex-col items-center w-full px-4 py-12 pt-16 sm:pt-20 md:pt-32 lg:pt-48">
        <div className="inline-flex items-center mb-4">
          <div className="h-6 px-2.5 bg-[#37322f] rounded-[999px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.50),0px_0px_0px_1px_rgba(55,50,47,1.00),inset_0px_-1.5px_0px_0px_rgba(0,0,0,0.50)] inline-flex items-center gap-[5px]">
            {/* <div className="w-[17px] h-4 relative">
              <img src="/assets/icons/rocket.svg" alt="rocket icon" width={17} height={16} className="object-contain" />
            </div> */}
            <div className="text-white text-xs font-medium tracking-[0.672px] leading-6">
              Key Builds
            </div>
          </div>
        </div>
        <h2 className="text-white text-3xl md:text-5xl font-semibold leading-tight md:leading-[56px] tracking-wide text-center mb-4">
          Built with KAVIA
        </h2>
        <div className="text-white text-base sm:text-lg font-normal text-center mb-10">
          Applications built rapidly with KAVIA AI
        </div>
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((card, idx) => (
            <div key={idx} className="rounded-xl overflow-hidden bg-[#231F20] shadow-lg flex flex-col h-full border border-[#3a3533] group relative cursor-pointer" onClick={() => handlePreviewClick(card)}>
              <div className="relative w-full h-48 sm:h-56 md:h-60 lg:h-56 xl:h-60">
                <img
                  src={card.imageUrl}
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-[#231F20] bg-opacity-90 p-4 border-t border-[#3a3533] flex flex-col flex-1 justify-end">
                <div className="text-white text-lg font-medium leading-tight mb-1">{card.title}</div>
                <div className="text-[#b0aead] text-sm font-normal">by {card.author}</div>
              </div>
            </div>
          ))}
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
                  {previewProject.demoLink && previewProject.demoLink !== '-' && (
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
                      <span className="text-[#231F20] text-sm font-semibold leading-tight">
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
                  )}
                  <button
                    onClick={handleClosePreview}
                    className="p-2 hover:bg-[#e5e3df] rounded-full transition-colors"
                  >
                    <span className="text-[#231F20] text-2xl">&times;</span>
                  </button>
                </div>
              </div>
              {/* Modal Content */}
              <div className="flex-1 overflow-auto bg-white flex items-center justify-center">
                {previewProject.demoLink && previewProject.demoLink !== '-' ? (
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
      </main>
      <Footer />
    </div>
  );
} 