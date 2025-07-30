'use client'

import Breadcrumb from "../components/Breadcrumb"
import { useRef, useState } from 'react'
import { PlayCircle, StopCircle } from 'lucide-react'
import FeatureList from '../components/FeatureList'
import { NotificationPanel } from '../components/NotificationPanel'
import Link from "next/link"
import Recent from "../../components/Recent"

const recentData = [
    {name: "Integrations", link: "/documentation/integrations-v2"},
    {name: "Custom API Integration", link: "/documentation/integrations/api-integration"},
]

const supabaseFeatures1 = [
    {
        number: 1,
        title: "PostgreSQL Database",
        description:
            "Store and query your application data with full SQL support. Kavia can auto-generate your schema and tables based on prompts and UI actions—no manual setup needed.",
    },
    {
        number: 2,
        title: "User Authentication",
        description:
            "Add secure sign-up, login, and role-based access control. Kavia can implement ready-to-use authentication flows (e.g., email/password) with a single prompt.",
    },
    {
        number: 3,
        title: "File Storage",
        description:
            "Upload and manage static files like images, documents, or media using Supabase Storage. Ideal for handling user profile photos, uploads, or public assets.",
    },
    {
        number: 4,
        title: "Real-time Updates",
        description:
            "Supabase enables real-time data streaming. You can build dynamic features like live chat, real-time dashboards, or collaborative interfaces that update instantly for all users",
    },
    {
        number: 5,
        title: "Edge Functions (Serverless)",
        description:
            "Write and deploy custom backend logic in JavaScript or TypeScript via Supabase’s Edge Functions. Kavia can generate and connect these automatically for tasks such as sending notifications, processing payments, or working with third-party APIs.",
    },
]

const supabaseFeatures2 = [
    {
        number: 1,
        title: "Navigate to your Supabase Dashboard",
        description:
            "",
    },
    {
        number: 2,
        title: "Click + New Project",
        description:
            "",
    },
    {
        number: 3,
        title: "Fill in the required details:",
        description:
            "",
        points: [
            "Organization",
            "Project Name",
            "Database Password",
            "Region",
        ],
    },
    {
        number: 4,
        title: "Wait a few minutes while Supabase sets up your project",
        description:
            "",
    },
]

const supabaseFeatures3 = [
    {
        number: 1,
        title: "Build your frontend as usual using the Kavia editor or chat interface",
        description:
            "",
    },
    {
        number: 2,
        title: "When you're ready to integrate the backend, simply ask Kavia in the chat",
        description:
            "(e.g.,“Integrate Supabase with user authentication” or “Connect Supabase as my backend”)",
    },
    {
        number: 3,
        title: "Kavia will respond with a Connect to Supabase button",
        description:
            "",
    },
    {
        number: 4,
        title: "Click the button — a configuration window will appear asking for:",
        description:
            "",
        points: [
            "Project URL",
            "API Key",
        ],
    },
]

export default function SupabaseIntegration() {

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
                    { label: "Supabase Integration", active: true },
                ]}
            />
            <div className="space-y-6">
                <h1 className="text-3xl sm:text-4xl  font-medium text-white">Supabase Integration</h1>
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

                <div className="shadow-2xl border border-gray-900 rounded-xl p-8 space-y-8">
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
                        <h2 className="text-lg text-white font-semibold">Key Features Unlocked by Supabase Integration in Kavia</h2>
                        <FeatureList features={supabaseFeatures1} />
                    </div>

                    <div className="space-y-5">
                        <h2 className="text-2xl sm:text-3xl text-white font-semibold">Why Use Supabase with Kavia?</h2>
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
                        <h2 className="text-2xl sm:text-3xl text-white font-semibold">Getting Started: Connecting Supabase to Kavia</h2>
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
            </div>

            < Recent data={recentData} />

        </main>
    )
}
