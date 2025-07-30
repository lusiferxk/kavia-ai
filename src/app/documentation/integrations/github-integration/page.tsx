'use client'

import Breadcrumb from "../components/Breadcrumb"
import { useRef, useState } from 'react'
import { PlayCircle, StopCircle } from 'lucide-react'
import FeatureList from '../components/FeatureList'
import { NotificationPanel } from '../components/NotificationPanel'
import Link from "next/link"
import Recent from "../../components/Recent"

const recentData= [
    {name: "Integrations", link: "/documentation/integrations-v2"},
    {name: "Supabase Integration", link: "/documentation/integrations/supabase-integration"},
] 

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

const integrations1 = [
    {
        number: 1,
        title: "From the Kavia Home, go to your Dashboard.",
        description:
            "",
    },
    {
        number: 2,
        title: "Navigate to Settings in the left sidebar.",
        description:
            "",
    },
    {
        number: 3,
        title: "Select the SCM (Source Control Management) tab.",
        description:
            "",
    },
    {
        number: 4,
        title: "Choose GitHub as your integration option.",
        description:
            "",
    },
    {
        number: 5,
        title: "You will see a list of previously connected GitHub accounts (if any).",
        description:
            "",
    },
    {
        number: 6,
        title: "In the top-right corner, click the Connect to GitHub button.",
        description:
            "",
    },
    {
        number: 7,
        title: "A dialog will appear—click Connect with GitHub.",
        description:
            "",
    },
    {
        number: 8,
        title: "Follow the GitHub login and authorization steps to link your account.",
        description:
            "",
    },
]

const integrations2 = [
    {
        number: 1,
        title: "On the Project Welcome Screen, scroll to the Third-Party Integrations section.",
        description:
            "",
    },
    {
        number: 2,
        title: "Locate the GitHub integration card.",
        description:
            "",
    },
    {
        number: 3,
        title: "From the dropdown, select your GitHub account.",
        description:
            "If it’s not listed, click Add Account and follow the authorization flow to connect your GitHub profile.",
    },
    {
        number: 4,
        title: "Choose an existing repository or create a new one to store your project’s code",
        description:
            "",
    },
]

export default function GithubIntegration() {

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
        <main className="space-y-6">
            <Breadcrumb
                items={[
                    { label: "Home", href: "/documentation/home" },
                    { label: "Integrations", href: "/documentation/integrations-v2" },
                    { label: "Github Integration", active: true },
                ]}
            />
            <div className="space-y-6">
                <h1 className="text-3xl sm:text-4xl font-medium text-white">GitHub Integration</h1>

                <p className="text-gray-300">
                    Integrating <strong>GitHub</strong> into your Kavia project gives you complete{" "}
                    <span className="text-white font-semibold">version control</span>,{" "}
                    <span className="text-white font-semibold">collaborative workflows</span>, and{" "}
                    <span className="text-white font-semibold">deployment flexibility</span> throughout the development lifecycle.
                </p>

                <div className="shadow-2xl border border-gray-900 rounded-xl p-8 space-y-8">
                    <div className="space-y-5">
                        {/* <h2 className="text-2xl sm:text-3xl  text-white font-semibold"></h2> */}
                        <ul className="list-disc pl-5 text-gray-300 space-y-2">
                            <li><strong>Git</strong> is a version control system that tracks code changes.</li>
                            <li><strong>GitHub</strong> is the industry-standard platform for hosting Git repositories.</li>
                            <li>
                                By connecting GitHub to your Kavia project, every change you make is backed up in real time, ensuring full transparency, safe collaboration, and the freedom to host your code wherever you choose.
                            </li>
                        </ul>
                    </div>

                    <div className="space-y-5">
                        <h2 className="text-xl text-white font-semibold">Why Connect GitHub to Kavia?</h2>
                        <p className="text-gray-300">
                            When you link your project to GitHub, Kavia keeps both frontend and backend codebases always synced,
                            backed up, and ready for team collaboration or external deployment.
                        </p>
                    </div>

                    <div className="space-y-5">
                        <h2 className="text-lg text-white font-semibold">Key Benefits of GitHub Integration</h2>

                        <FeatureList features={keybenifits} />
                    </div>

                    <div className="space-y-5">
                        <p className="text-gray-300">
                            <strong>Kavia’s GitHub integration</strong> gives you the best of both worlds: intelligent, AI-assisted development inside the platform, and full professional-grade control outside of it.
                        </p>
                    </div>

                    <NotificationPanel message="Let us know if you'd like a visual version or a simplified summary for onboarding guides!" />

                    <div className="space-y-5">
                        <h2 className="text-2xl sm:text-3xl  text-white font-semibold">Connecting Kavia to your GITHUB account</h2>
                        <p className="text-gray-300">
                            To start using <strong>GitHub</strong> with your Kavia project, you’ll need to <strong>connect your GitHub account</strong> and <strong>create or link a repository.</strong> This enables version control, team collaboration, and real-time syncing of your project’s code.
                        </p>

                        <p className="text-gray-300">Kavia offers two ways to set it up:</p>
                    </div>

                    <div className="space-y-5">
                        <h3 className="text-lg text-white font-semibold">Method 1: Connect from the admin dashboard</h3>

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
                        <h3 className="text-lg text-white font-semibold">Method 2: Connect During Project Setup</h3>

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
            </div>

            <Recent data={recentData}/>

        </main>
    )
}
