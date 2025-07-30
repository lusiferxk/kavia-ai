import React from 'react'
import FeatureItem, { FeatureContentBlock } from './FeatureItem'

export interface Feature {
  number: number
  title: string
  description?: string
  image?: string
  points?: string[]
  content?: FeatureContentBlock[];
}

interface FeatureListProps {
  features: Feature[]
}

const FeatureList: React.FC<FeatureListProps> = ({ features }) => {
  return (
    <div className="max-w-4xl w-full space-y-0">
      {features.map((feature, index) => (
        <FeatureItem
          key={feature.number}
          number={feature.number}
          title={feature.title}
          description={feature.description}
          image={feature.image}
          points={feature.points}
          content={feature.content ?? []}
          isLast={index === features.length - 1}
        />
      ))}
    </div>
  )
}

export default FeatureList
