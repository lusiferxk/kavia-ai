// src/app/news/[id]/components/BackgroundGlow.tsx
export default function BackgroundGlow() {
    return (
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2">
          <div className="w-[1323px] h-[752px]">
            <svg
              className="w-full h-full"
              viewBox="0 0 1323 752"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_f_2878_14155)">
                <circle cx="661.5" cy="90.5" r="147.5" fill="#FF9358" />
              </g>
              <defs>
                <filter
                  id="filter0_f_2878_14155"
                  x="0"
                  y="-571"
                  width="1323"
                  height="1323"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    stdDeviation="257"
                    result="effect1_foregroundBlur_2878_14155"
                  />
                </filter>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    )
  }