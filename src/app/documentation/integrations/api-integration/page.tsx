'use client'

import Breadcrumb from "../components/Breadcrumb"
import { useRef, useState } from 'react'
import FeatureList from '../components/FeatureList'
import CodeBlock from "../components/CodeBlock"

const ApiIntegration = [
    {
        number: 1,
        title: "Make authenticated API requests (REST, GraphQL, or RPC)",
        description:
            "Supabase integration is ideal for projects that require full-stack functionality but prefer a serverless or low-maintenance backend solution.",
    },
    {
        number: 2,
        title: "Parse and render external data in the frontend",
        description:
            "Supabase integration is ideal for projects that require full-stack functionality but prefer a serverless or low-maintenance backend solution.",
    },
    {
        number: 3,
        title: "Trigger server-side actions via webhooks or serverless functions",
        description:
            "Supabase integration is ideal for projects that require full-stack functionality but prefer a serverless or low-maintenance backend solution.",
    },
    {
        number: 4,
        title: "Securely store API keys using Kavia's environment variable support",
        description:
            "Supabase integration is ideal for projects that require full-stack functionality but prefer a serverless or low-maintenance backend solution.",
    },
]

const code = `// Import
import mongoose, { Schema } from 'mongoose'

// Collection name
export const collection = 'Product'

// Schema
const schema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String
  }
}, {timestamps: true})

// Model
export default mongoose.model(collection, schema, collection)`

export default function APIIntegration() {

    const videoRef = useRef<HTMLVideoElement>(null)
    const [isPlaying, setIsPlaying] = useState(false)

    const handleTogglePlay = () => {
        if (!videoRef.current) return

        if (videoRef.current.paused) {
            videoRef.current.play()
            setIsPlaying(true)
        } else {
            videoRef.current.pause()
            setIsPlaying(false)
        }
    }

    return (
        <div className="space-y-6">
            <Breadcrumb
                items={[
                    { label: "Home", href: "/documentation/home" },
                    { label: "Integrations", href: "/documentation/integrations-v2" },
                    { label: "API Integration", active: true },
                ]}
            />
            <div className="space-y-6">
                <h1 className="text-3xl sm:text-4xl font-medium text-white">Custom API Integration</h1>
                <p className="text-gray-300">
                    Beyond native and verified integrations, Kavia allows developers to connect any external API.
                </p>
                <div className="shadow-2xl border border-gray-900 rounded-xl p-8 space-y-8">
                    <CodeBlock code={code} language="javascript" />
                    <FeatureList features={ApiIntegration} />
                </div>
            </div>
        </div>
    )
}
