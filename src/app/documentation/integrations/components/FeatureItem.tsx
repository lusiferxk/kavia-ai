import React from 'react'

export type FeatureContentBlock =
  | { type: 'description'; value: string }
  | { type: 'image'; value: string }
  | { type: 'points'; value: string[] }

interface FeatureItemProps {
  number: number
  title: string
  description?: string
  image?: string
  points?: string[]
  content?: FeatureContentBlock[] | undefined
  isLast?: boolean
}

const FeatureItem = ({
  number,
  title,
  description,
  image,
  points = [],
  content,
  isLast = false,
}: FeatureItemProps) => {
  return (
    <div className="relative">
      <div className="flex gap-6">
        <div className="flex-shrink-0 relative">
          {!isLast && (
            <div className="absolute top-5 left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-[#4f4c4d] z-0"></div>
          )}
          <div className="flex items-center justify-center w-7 h-7 rounded-full bg-[#4f4c4d] text-white border border-gray-700 relative z-10">
            {number}
          </div>
        </div>

        <div className="flex flex-col gap-2 pb-8">
          <h3 className="text-white font-medium">{title}</h3>

          {/* Render content blocks first if present */}
          {content?.map((block, idx) => {
            if (block.type === 'description') {
              return (
                <p key={idx} className="text-gray-300">
                  {block.value}
                </p>
              )
            }
            if (block.type === 'image') {
              return (
                <div key={idx} className="relative p-1 rounded-xl overflow-hidden border">
                  <img
                    src={block.value}
                    alt={`Illustration for ${title}`}
                    className="w-full h-auto object-cover rounded-xl"
                  />
                </div>
              )
            }
            if (block.type === 'points') {
              return (
                <ul key={idx} className="list-disc pl-5 space-y-2 text-gray-300">
                  {block.value.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              )
            }
            return null
          })}

          {/* Fallbacks — render if content is not duplicating them */}
          {description && <p className="text-gray-300">{description}</p>}

          {points.length > 0 && (
            <ul className="list-disc pl-5 space-y-2 text-gray-300">
              {points.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          )}

          {image && (
            <div className="relative p-1 rounded-xl overflow-hidden border">
              <img
                src={image}
                alt={`Illustration for ${title}`}
                className="w-full h-auto object-cover rounded-xl"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default FeatureItem