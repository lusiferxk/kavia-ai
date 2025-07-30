'use client'
import React from 'react';
import Image from 'next/image';
import { X, ChevronRight, ChevronLeft } from 'lucide-react';
import type { Project } from '@/types/project';

interface FixedOverlayModalProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  hasPrev: boolean;
  hasNext: boolean;
}

const FixedOverlayModal = ({
  project,
  isOpen,
  onClose,
  onPrev,
  onNext,
  hasPrev,
  hasNext
}: FixedOverlayModalProps) => {
  // Don't return null when closed, just change visibility
  return (
    <div 
      style={{
        position: 'fixed',
        top: '82px', // Header height
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 999999,
        visibility: isOpen ? 'visible' : 'hidden',
        opacity: isOpen ? 1 : 0,
        transition: 'opacity 0.2s ease, visibility 0.2s ease',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        pointerEvents: isOpen ? 'auto' : 'none',
      }}
    >
      {/* Overlay background */}
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        }}
        onClick={onClose}
      />

      {/* Modal Content */}
      <div 
        className="w-[90%] max-w-[990px] my-4 relative"
        style={{
          transform: isOpen ? 'translateY(0)' : 'translateY(-20px)',
          opacity: isOpen ? 1 : 0,
          transition: 'transform 0.3s ease, opacity 0.3s ease',
        }}
      >
        <div className="bg-[#fff1ea] rounded-[9px] shadow-[4px_4px_28px_2px_rgba(0,0,0,0.24)] border border-[#c9c6c6] overflow-hidden flex flex-col relative">
          {/* Your existing modal content here */}
          {/* Header */}
          <div className="px-6 sm:px-12 pt-6 sm:pt-8 bg-[#fff1ea]">
            <h2 className="text-2xl sm:text-[28px] font-semibold text-[#231f20] font-['Inter'] leading-[36px] sm:leading-[42px]">
              {project.title}
            </h2>
            <p className="text-[#111928] text-[13px] font-medium font-['Inter'] leading-tight">
              Built with KAVIA
            </p>
          </div>

          {/* Content */}
          <div className="flex-1 px-6 sm:px-12 pt-5 pb-[88px] overflow-y-auto">
            {/* Rest of your modal content... */}
            {/* Keep all your existing content sections */}
          </div>

          {/* Footer */}
          <div className="absolute bottom-0 left-0 right-0 h-[72px] px-6 sm:px-12 py-4 shadow-[0px_-1px_3px_0px_rgba(0,0,0,0.12)] border-t border-black/10 flex justify-between items-center bg-[#fff1ea]">
            <button 
              onClick={onPrev}
              className={`flex items-center gap-1.5 ${!hasPrev ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={!hasPrev}
            >
              <ChevronLeft className="w-4 sm:w-[18px] h-4 sm:h-[18px] text-[#231f20]" />
              <div className="self-stretch flex-col justify-center items-start inline-flex">
                <div className="self-stretch text-[#231f20] text-sm sm:text-base font-bold font-['Urbanist'] leading-snug">Prev</div>
              </div>
            </button>
            <button 
              onClick={onNext}
              className={`flex items-center gap-1.5 ${!hasNext ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={!hasNext}
            >
              <div className="self-stretch flex-col justify-center items-start inline-flex">
                <div className="self-stretch text-[#231f20] text-sm sm:text-base font-bold font-['Urbanist'] leading-snug">Next</div>
              </div>
              <ChevronRight className="w-4 sm:w-[18px] h-4 sm:h-[18px] text-[#231f20]" />
            </button>
          </div>

          {/* Close Button */}
          <button 
            onClick={onClose}
            className="absolute right-4 top-4 sm:right-auto sm:left-[calc(100%+8px)] sm:top-0 h-9 bg-white rounded-[36px] p-2 flex items-center justify-center hover:bg-gray-100 transition-colors shadow-sm"
          >
            <X className="w-5 h-5 text-[#231f20]" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FixedOverlayModal;