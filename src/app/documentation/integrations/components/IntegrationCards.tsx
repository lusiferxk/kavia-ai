'use client'
import { useRef, useState } from 'react'
import { ArrowUpRight, PlayCircle, StopCircle } from 'lucide-react'
import FeatureList from './FeatureList'
import CodeBlock from './CodeBlock'
import Image from "next/image"
import { NotificationPanel } from './NotificationPanel'

type FeatureItem = {
    number: number
    title: string
    description: string
    image?: string
}

const keybenifits = [
    {
        number: 1,
        title: "Version History & Backup",
        description:
            "Kavia automatically tracks your code with Git. Every update is committed and synced to GitHub, allowing you to review changes, revert to previous versions, or recover lost work with ease.",
    },
    {
        number: 2,
        title: "Seamless Collaboration",
        description:
            "Code stored on GitHub makes it easy for other developers to view, comment, and contribute via pull requests. Non-developers can also view the commit history for complete visibility into progress.",
    },
    {
        number: 3,
        title: "Real-Time Sync",
        description:
            "Kavia maintains two-way sync with GitHub:",
        points: [
            "Edit in Kavia → Auto-pushes to GitHub",
            "Push to GitHub → Auto-pulls into Kavia",
        ]
    },
    {
        number: 4,
        title: "Powerful Workflow Integration",
        description:
            "Leverage GitHub’s features—like branches, pull requests, issues, or CI/CD pipelines—alongside Kavia’s AI-driven tools. For example, you can use GitHub Actions to deploy your app automatically when a feature is merged.",
    },
    {
        number: 5,
        title: "Flexible Deployment",
        description:
            "Connecting to GitHub allows you to export and host your app anywhere—on your own infrastructure or a third-party platform. Even if you choose to deploy outside of Kavia, the editor continues to sync changes, so you never lose access to AI features or the development environment.",
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

export default function IntegrationCards({
    keybenifits,
    integrations1,
    integrations2,
    supabaseFeatures1,
    supabaseFeatures2,
    supabaseFeatures3,
    ApiIntegration,
}: {
    keybenifits: FeatureItem[]
    integrations1: FeatureItem[]
    integrations2: FeatureItem[]
    supabaseFeatures1: FeatureItem[]
    supabaseFeatures2: FeatureItem[]
    supabaseFeatures3: FeatureItem[]
    ApiIntegration: FeatureItem[]
}) {
    const [selected, setSelected] = useState<null | 'github' | 'supabase' | 'api'>(null)

    const cards = [
        {
            key: 'github',
            title: 'GitHub Integration',
            description: 'Speed up repo creation, branching, and commit flows automatically.',
        },
        {
            key: 'supabase',
            title: 'Supabase Integration',
            description: 'Serverless-ready native DB and auth integration with Supabase.',
        },
        {
            key: 'api',
            title: 'Custom API Integration',
            description: 'Connect to any external API through prompt or code access.',
        },
    ]

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
        <div className="space-y-12">
            {/* Selector Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {cards.map((card) => (
                    <button
                        key={card.key}
                        onClick={() => setSelected(card.key as any)}
                        className='group relative flex flex-col justify-between h-72 p-5 rounded-2xl border border-[#2a2a2a] text-left overflow-hidden transition-all'
                        style={{ backgroundColor: '#231f20' }}
                        onMouseMove={(e) => {
                            const target = e.currentTarget as HTMLElement
                            const rect = target.getBoundingClientRect()
                            const x = e.clientX - rect.left
                            const y = e.clientY - rect.top
                            target.style.setProperty('--x', `${x}px`)
                            target.style.setProperty('--y', `${y}px`)
                        }}
                    >
                        {/* Glow effect */}
                        <div className="pointer-events-none absolute inset-0 before:content-[''] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_var(--x)_var(--y),rgba(255,123,0,0.25),transparent_65%)] before:transition-opacity before:duration-500 group-hover:before:opacity-100 before:opacity-0 z-0" />

                        {/* Main Content */}
                        <div className="relative z-10 flex flex-col mt-5 flex-grow">
                            <h3 className="text-xl font-medium text-white">{card.title}</h3>
                            <p className="text-sm text-gray-300 mt-3">{card.description}</p>
                        </div>

                        {/* Fixed Bottom Arrow */}
                        <div className="absolute bottom-5 left-5 z-10">
                            <div
                                className={`w-8 h-8 flex items-center justify-center rounded-full ${selected === card.key ? 'bg-orange-500' : 'bg-[#333]'
                                    } group-hover:bg-orange-500 transition-all`}
                            >
                                <ArrowUpRight size={14} className="text-white" />
                            </div>
                        </div>
                    </button>
                ))}
            </div>

            {/* Conditional Content */}
            {selected === 'github' && (
                <div className="space-y-6 p-5 rounded-2xl border border-[#2a2a2a]">
                    <h3 className="text-2xl font-medium text-white">GitHub Integration</h3>

                    <p className="text-gray-300">
                        Integrating <strong>GitHub</strong> into your Kavia project gives you complete{" "}
                        <span className="text-white font-semibold">version control</span>,{" "}
                        <span className="text-white font-semibold">collaborative workflows</span>, and{" "}
                        <span className="text-white font-semibold">deployment flexibility</span> throughout the development lifecycle.
                    </p>

                    <div className="space-y-5">
                        {/* <h4 className="text-lg text-white font-semibold">TL;DR</h4> */}
                        <ul className="list-disc pl-5 text-gray-300 space-y-2">
                            <li><strong>Git</strong> is a version control system that tracks code changes.</li>
                            <li><strong>GitHub</strong> is the industry-standard platform for hosting Git repositories.</li>
                            <li>
                                By connecting GitHub to your Kavia project, every change you make is backed up in real time, ensuring full transparency, safe collaboration, and the freedom to host your code wherever you choose.
                            </li>
                        </ul>
                    </div>

                    <div className="space-y-5">
                        <h4 className="text-lg text-white font-semibold">Why Connect GitHub to Kavia?</h4>
                        <p className="text-gray-300">
                            When you link your project to GitHub, Kavia keeps both frontend and backend codebases always synced,
                            backed up, and ready for team collaboration or external deployment.
                        </p>
                    </div>

                    <div className="space-y-5">
                        <div className="space-y-5">
                            <h4 className="text-lg text-white font-semibold">Key Benefits of GitHub Integration</h4>
                            
                            <FeatureList features={keybenifits} />
                        </div>
                        
                        {/* <h3 className="text-md text-white font-semibold">Version History & Backup:</h3>
                        <p className="text-gray-300">
                            Kavia automatically tracks your code with Git. Every update is committed and synced to GitHub, allowing you to review changes, revert to previous versions, or recover lost work with ease.
                        </p>

                        <h3 className="text-md text-white font-semibold">Seamless Collaboration:</h3>
                        <p className="text-gray-300">
                            Code stored on GitHub makes it easy for other developers to view, comment, and contribute via pull requests. Non-developers can also view the commit history for complete visibility into progress.
                        </p>

                        <h3 className="text-md text-white font-semibold">Real-Time Sync:</h3>
                        <p className="text-gray-300">
                            Kavia maintains two-way sync with GitHub:
                        </p>
                        <ul className="list-disc pl-5 text-gray-300 space-y-2">
                            <li>Edit in Kavia → Auto-pushes to GitHub</li>
                            <li>Push to GitHub → Auto-pulls into Kavia</li>
                        </ul>
                        <p className="text-gray-300">
                            Your project always stays up-to-date in both environments—no manual syncing needed.
                        </p>

                        <h3 className="text-md text-white font-semibold">Powerful Workflow Integration:</h3>
                        <p className="text-gray-300">
                            Leverage GitHub’s features—like <strong>branches, pull requests, issues,</strong> or <strong>CI/CD pipelines</strong>—alongside Kavia’s AI-driven tools.
                            For example, you can use <strong>GitHub Actions</strong> to deploy your app automatically when a feature is merged.
                        </p>

                        <h3 className="text-md text-white font-semibold">Flexible Deployment:</h3>
                        <p className="text-gray-300">
                            Connecting to GitHub allows you to export and host your app anywhere—on your own infrastructure or a third-party platform.
                            Even if you choose to deploy outside of Kavia, the editor continues to sync changes, so you never lose access to AI features or the development environment.
                        </p> */}
                    </div>

                    <div className="space-y-5">
                        <p className="text-gray-300">
                            <strong>Kavia’s GitHub integration</strong> gives you the best of both worlds: intelligent, AI-assisted development inside the platform, and full professional-grade control outside of it.
                        </p>
                    </div>

                    <NotificationPanel message="Let us know if you'd like a visual version or a simplified summary for onboarding guides!" />

                    <div className="space-y-5">
                        <h4 className="text-lg text-white font-semibold">Connecting Kavia to your GITHUB account</h4>
                        <p className="text-gray-300">
                            To start using <strong>GitHub</strong> with your Kavia project, you’ll need to <strong>connect your GitHub account</strong> and <strong>create or link a repository.</strong> This enables version control, team collaboration, and real-time syncing of your project’s code.
                        </p>

                        <p className="text-gray-300">Kavia offers two ways to set it up:</p>
                    </div>

                    <div className="space-y-5">
                        <h4 className="text-lg text-white font-semibold">Method 1: Connect from the admin dashboard</h4>

                        <div className="relative p-1 rounded-xl overflow-hidden border border-gray-800">
                            <video
                                ref={videoRef}
                                src="/images/integrations/vid1.mov"
                                width={800}
                                height={400}
                                className="w-full h-auto object-cover rounded-xl"
                                poster="/images/integrations/vid1.png"
                            />

                            <div className="absolute inset-0 flex items-center justify-center">
                                <button
                                    onClick={handleTogglePlay}
                                    className="flex items-center gap-2 bg-white text-gray-800 font-medium text-sm px-4 py-3 rounded-full shadow-2xl hover:bg-[#fff5f0] hover:text-[#f97316] transition-all duration-200"
                                >
                                    {isPlaying ? (
                                        <>
                                            <StopCircle className="w-6 h-6" />
                                            <span className="hover:underline">Stop Video</span>
                                        </>
                                    ) : (
                                        <>
                                            <PlayCircle className="w-6 h-6" />
                                            <span className="hover:underline">Play Video</span>
                                        </>
                                    )}
                                </button>
                            </div>
                        </div>

                        <FeatureList features={integrations1} />
                    </div>

                    <div className="space-y-5">
                        <h4 className="text-lg text-white font-semibold">Method 2: Connect During Project Setup</h4>

                        <div className="relative p-1 rounded-xl overflow-hidden border border-gray-800">
                            <video
                                ref={videoRef}
                                src="/images/integrations/vid2.mov"
                                width={800}
                                height={400}
                                className="w-full h-auto object-cover rounded-xl"
                                poster="/images/integrations/vid2.png"
                            />

                            <div className="absolute inset-0 flex items-center justify-center">
                                <button
                                    onClick={handleTogglePlay}
                                    className="flex items-center gap-2 bg-white text-gray-800 font-medium text-sm px-4 py-3 rounded-full shadow-2xl hover:bg-[#fff5f0] hover:text-[#f97316] transition-all duration-200"
                                >
                                    {isPlaying ? (
                                        <>
                                            <StopCircle className="w-6 h-6" />
                                            <span className="hover:underline">Stop Video</span>
                                        </>
                                    ) : (
                                        <>
                                            <PlayCircle className="w-6 h-6" />
                                            <span className="hover:underline">Play Video</span>
                                        </>
                                    )}
                                </button>
                            </div>
                        </div>

                        <FeatureList features={integrations2} />

                        <p className="text-gray-300">
                            Once connected, your GitHub account will be available across all projects in Kavia, and you can easily link repositories as needed during project setup or from individual project settings.
                        </p>
                    </div>
                </div>
            )}

            {/* {selected === 'supabase' && (
                <div className="space-y-6 p-5 rounded-2xl border border-[#2a2a2a]">
                    <h3 className="text-2xl font-medium text-white">Supabase Integration</h3>
                    <p className="text-gray-300">Integrate Supabase with ease using Kavia’s native support.</p>
                    <div className="relative p-1 rounded-xl overflow-hidden border border-gray-800">
                        <Image
                            src="/images/quickstart/img1.png"
                            alt="Integration preview"
                            width={800}
                            height={400}
                            className="w-full h-auto object-cover rounded-xl"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <button className="flex items-center gap-2 bg-white text-gray-800 font-medium text-sm px-4 py-3 rounded-full shadow-2xl hover:bg-[#fff5f0] hover:text-[#f97316] transition-all duration-200">
                                <PlayCircle className="w-6 h-6" />
                                <span className='hover:underline'>Play Video</span>
                            </button>
                        </div>
                    </div>
                    <FeatureList features={supabaseFeatures} />
                </div>
            )} */}

            {selected === 'supabase' && (
                <div className="space-y-6  p-5 rounded-2xl border border-[#2a2a2a]">
                    <h3 className="text-2xl font-medium text-white">Supabase Integration</h3>
                    <p className="text-gray-300">
                        Integrate a powerful backend into your Kavia application with built-in <strong>Supabase</strong> support.
                    </p>
                    <p className="text-gray-300">
                        Kavia’s native Supabase integration allows you to manage both your frontend interface and backend database from a single, unified workspace.
                        Without switching tools, you can design your app’s UI and configure a fully functional <strong>cloud-hosted PostgreSQL</strong> database—making full-stack development seamless and accessible.
                    </p>
                    <p className="text-gray-300">
                        Whether you're a non-technical user relying on Kavia's intelligent guidance or an experienced developer leveraging Supabase's advanced capabilities,
                        this integration offers the flexibility and depth needed to build production-ready apps with ease.
                    </p>

                    <div className="space-y-5">
                        <h4 className="text-lg text-white font-semibold">With Supabase, you can:</h4>
                        <ul className="list-disc pl-6 text-gray-300 space-y-2">
                            <li>Set up and connect your database in just a few clicks</li>
                            <li>Automatically generate and manage tables, fields, and relations</li>
                            <li>Use Supabase Auth, Storage, and APIs to enhance your app functionality</li>
                            <li>View, query, and update data directly through Kavia’s interface</li>
                        </ul>
                        <p className="text-gray-300">
                            Kavia streamlines backend setup so you can focus on building great experiences—without worrying about infrastructure.
                        </p>
                    </div>

                    <div className="space-y-5">
                        <h4 className="text-lg text-white font-semibold">Key Features Unlocked by Supabase Integration in Kavia</h4>
                        <FeatureList features={supabaseFeatures1} />
                    </div>

                    <div className="space-y-5">
                        <h4 className="text-lg text-white font-semibold">Why Use Supabase with Kavia?</h4>
                        <p className="text-gray-300">
                            With Kavia, you don’t need to juggle separate tools for frontend and backend development.
                            By simply interacting with the AI interface, you can build responsive UIs and have the underlying database and logic configured automatically.
                        </p>

                        <p className="text-white font-semibold">For example, if you prompt Kavia with:</p>

                        <NotificationPanel message="Create a feedback form and store responses in the database" />

                        <p className="text-gray-300">
                            Kavia will generate the UI for the form, connect it to Supabase,
                            and create the appropriate table to store submissions—all in one seamless flow.
                        </p>

                        <p className="text-gray-300">
                            This <strong>end-to-end integration</strong> is what makes Kavia powerful:
                            it speeds up development, reduces friction, and makes full-stack app building accessible for everyone—from beginners to experienced developers.
                        </p>
                    </div>

                    <div className="space-y-5">
                        <h4 className="text-lg text-white font-semibold">Getting Started: Connecting Supabase to Kavia</h4>
                        <p className="text-gray-300">
                            Connecting a <strong>Supabase</strong> backend to your <strong>Kavia</strong> project is simple and fast. All you need is an existing <strong>Supabase account</strong> (the free tier works perfectly) and an active project in Kavia.
                            If you don't have a Supabase account yet, you can sign up at{" "}
                            <a
                                href="https://supabase.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-orange-500 hover:underline"
                            >
                                Supabase | The Postgres Development Platform
                            </a>
                            {" "}— no credit card required.
                        </p>
                    </div>

                    <div className="space-y-5">
                        <h4 className="text-lg text-white font-semibold">Step 1: Create a Supabase Account</h4>
                        <div className="relative p-1 rounded-xl overflow-hidden border border-gray-800">
                            <video
                                ref={videoRef}
                                src="/images/integrations/vid3.mov"
                                width={800}
                                height={400}
                                className="w-full h-auto object-cover rounded-xl"
                                poster="/images/integrations/vid3.png"
                            />

                            <div className="absolute inset-0 flex items-center justify-center">
                                <button
                                    onClick={handleTogglePlay}
                                    className="flex items-center gap-2 bg-white text-gray-800 font-medium text-sm px-4 py-3 rounded-full shadow-2xl hover:bg-[#fff5f0] hover:text-[#f97316] transition-all duration-200"
                                >
                                    {isPlaying ? (
                                        <>
                                            <StopCircle className="w-6 h-6" />
                                            <span className="hover:underline">Stop Video</span>
                                        </>
                                    ) : (
                                        <>
                                            <PlayCircle className="w-6 h-6" />
                                            <span className="hover:underline">Play Video</span>
                                        </>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>

                    <p className="text-gray-300">
                        If you don’t already have one, go to{" "}
                        <a
                            href="http://supabase.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-orange-500 hover:underline"
                        >
                            Supabase | The Postgres Development Platform
                        </a>
                        {" "} and register for a free account. If you already have an account, simply sign in.
                    </p>

                    <h4 className="text-lg text-white font-semibold">Step 2: Create a New Project in Supabase</h4>
                    <p className="text-gray-300 font-semibold">
                        Once you're signed in to Supabase:
                    </p>

                    <FeatureList features={supabaseFeatures2} />

                    <p className="text-gray-300">
                        After the setup is complete, your Supabase project is ready to connect with Kavia.
                    </p>

                    <h4 className="text-lg text-white font-semibold">Step 3: Connect Your Kavia Project to Supabase</h4>
                    <p className="text-gray-300 font-semibold">
                        Once your application is ready in Kavia:
                    </p>

                    <FeatureList features={supabaseFeatures3} />

                    <p className="text-gray-300">
                        You can find both these values in your <strong>Supabase Project Settings {'>'} API</strong> section.
                    </p>

                    <p className="text-gray-300">
                        Once entered, Kavia will automatically link your app to Supabase and set up the necessary backend functionality based on your prompt — including authentication, database tables, and more.                    </p>
                </div>
            )}

            {selected === 'api' && (
                <div className="space-y-6 p-5 rounded-2xl border border-[#2a2a2a]">
                    <h3 className="text-2xl font-medium text-white">Custom API Integration</h3>
                    <p className="text-gray-300">
                        Beyond native and verified integrations, Kavia allows developers to connect any external API.
                    </p>
                    <CodeBlock code={code} language="javascript" />
                    <FeatureList features={ApiIntegration} />
                </div>
            )}
        </div>
    )
}
