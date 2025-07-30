// src/app/news/[id]/components/ShareSection.tsx
import React from 'react'
import ShareButton from './ShareButton'
import { toast } from 'sonner'

export default function ShareSection() {
  return (
    <div className="bg-[#161314] rounded-[10px] h-[70px] relative w-full overflow-hidden">
      {/* Background SVG Groups */}
      <div className="absolute inset-0">
        <div className="absolute inset-0" style={{ opacity: 0.2 }}>
          {/* Your existing SVG code remains the same */}
          <svg width="393" height="70" viewBox="0 0 393 70" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute">
            {/* Your existing SVG paths remain the same */}
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="relative px-6 md:px-8 w-full h-full flex justify-between items-center">
        <p className="flex-1 text-white text-base md:text-xl font-['Inter'] font-semibold leading-[1.7] pr-4">
          Like what you see? Share with a friend.
        </p>
        <div className="flex justify-center items-center gap-4 md:gap-8">
          <ShareButton
            platform="twitter"
            icon={
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="mask0_3036_15899" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                  <rect width="24" height="24" fill="white"/>
                </mask>
                <g mask="url(#mask0_3036_15899)">
                  <path fillRule="evenodd" clipRule="evenodd" d="M16.0601 22.332H23.2294L7.34943 1.33203H-0.00390625L9.03076 13.1427L0.841427 22.4987H4.40543L10.6934 15.3187L16.0601 22.332ZM19.0174 20.1987H17.0441L4.15743 3.35336H6.27609L19.0174 20.1987ZM12.7854 8.2387L18.6788 1.4987H22.2414L14.4361 10.4254L12.7854 8.2387Z" fill="white"/>
                </g>
              </svg>
            }
          />

          <ShareButton
            platform="linkedin"
            icon={
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="mask0_3036_15904" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                  <rect width="24" height="24" fill="white"/>
                </mask>
                <g mask="url(#mask0_3036_15904)">
                  <path d="M21.8992 1.19922H2.09922C1.55922 1.19922 1.19922 1.55922 1.19922 2.09922V21.8992C1.19922 22.4392 1.55922 22.7992 2.09922 22.7992H21.8992C22.4392 22.7992 22.7992 22.4392 22.7992 21.8992V2.09922C22.7992 1.55922 22.4392 1.19922 21.8992 1.19922ZM7.58988 19.6486H4.43922V9.29922H7.67922V19.6486H7.58988ZM5.96988 7.85922C5.46931 7.85642 4.99004 7.65632 4.63608 7.30236C4.28211 6.9484 4.08202 6.46912 4.07922 5.96855C4.07922 4.97922 4.88988 4.07922 5.96988 4.07922C6.95922 4.07922 7.85922 4.88855 7.85922 5.96855C7.85922 7.04855 7.04988 7.85922 5.96988 7.85922ZM19.6499 19.6486H16.4099V14.6086C16.4099 13.4392 16.4099 11.9086 14.7899 11.9086C13.0792 11.9086 12.8992 13.1686 12.8992 14.5192V19.6486H9.65922V9.29922H12.7192V10.7392C13.1699 9.92855 14.1592 9.11922 15.7792 9.11922C19.0192 9.11922 19.6499 11.2792 19.6499 14.0686V19.6486Z" fill="white"/>
                </g>
              </svg>
            }
          />

          <ShareButton
            platform="youtube"
            icon={
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.7 7.2C23.4 5.24933 22.5 3.9 20.4 3.6C17.1 3 12 3 12 3C12 3 6.9 3 3.6 3.6C1.5 3.9 0.449333 5.24933 0.3 7.2C0 9.14933 0 12 0 12C0 12 0 14.8493 0.3 16.8C0.6 18.7507 1.5 20.1 3.6 20.4C6.9 21 12 21 12 21C12 21 17.1 21 20.4 20.4C22.5 19.9493 23.4 18.7493 23.7 16.8C24 14.8507 24 12 24 12C24 12 24 9.15067 23.7 7.2ZM9 16.5V7.5L16.5 12L9 16.5Z" fill="white"/>
              </svg>
            }
          />

          {/* <ShareButton
            platform="slack"
            icon={
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="mask0_3036_15912" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                  <path d="M0 0H24V24H0V0Z" fill="white" />
                </mask>
                <g mask="url(#mask0_3036_15912)">
                  <path fillRule="evenodd" clipRule="evenodd" d="M7.59717 1.83255C7.89918 1.53029 8.28405 1.32439 8.70309 1.24089C9.12214 1.1574 9.55653 1.20006 9.95133 1.36349C10.3461 1.52692 10.6836 1.80376 10.921 2.15901C11.1584 2.51425 11.2852 2.93194 11.2852 3.35922V5.51922H9.12517C8.69805 5.51921 8.28052 5.39257 7.92535 5.15531C7.57019 4.91805 7.29334 4.58082 7.1298 4.18625C6.96627 3.79167 6.92338 3.35747 7.00657 2.93853C7.08976 2.51958 7.29529 2.13471 7.59717 1.83255ZM3.36117 6.96055H9.12117C9.69404 6.96055 10.2434 7.18812 10.6485 7.5932C11.0536 7.99828 11.2812 8.54768 11.2812 9.12055C11.2812 9.69342 11.0536 10.2428 10.6485 10.6479C10.2434 11.053 9.69404 11.2806 9.12117 11.2806H3.36117C2.7883 11.2806 2.2389 11.053 1.83382 10.6479C1.42874 10.2428 1.20117 9.69342 1.20117 9.12055C1.20117 8.54768 1.42874 7.99828 1.83382 7.5932C2.2389 7.18812 2.7883 6.96055 3.36117 6.96055Z" fill="white"/>
                </g>
              </svg>
            }
          /> */}

          <ShareButton
            platform="copy"
            icon={
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 2H10C8.897 2 8 2.897 8 4V8H4C2.897 8 2 8.897 2 10V20C2 21.103 2.897 22 4 22H14C15.103 22 16 21.103 16 20V16H20C21.103 16 22 15.103 22 14V4C22 2.897 21.103 2 20 2ZM14 20H4V10H14V20ZM20 14H16V10C16 8.897 15.103 8 14 8H10V4H20V14Z" fill="white"/>
              </svg>
            }
          />
        </div>
      </div>
    </div>
  )
}

