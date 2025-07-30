'use client'

import Breadcrumb from '../../integrations/components/Breadcrumb'
import Recent from "../../components/Recent"
import { useRef, useState } from 'react'
import { PlayCircle, StopCircle } from 'lucide-react'
import FeatureList from '../../integrations/components/FeatureList'

const steps = [
    {
        number: 1,
        title: "Step1",
        description:
            "In the top-right corner of the Project Workspace, click the “+” icon next to Deploy button.",
    },
    {
        number: 2,
        title: "Step2",
        description:
            "A publish dialog will appear with deployment options. Select the environment that you want the app to be deployed.",
    },
    {
        number: 3,
        title: "Step3",
        description:
            "Click the Publish button to begin deployment. While the app is publishing, you’ll see a loading indicator and a status update.",
    },
    {
        number: 4,
        title: "Step4",
        description:
            "Once deployment is complete, you’ll see an Update Deployment button in place of Publish. You can use this to redeploy anytime you make changes to your app.",
    },
    {
        number: 5,
        title: "Step5",
        description:
            "Your application is now live and accessible via the generated public URL. Deployment typically completes in under a minute, and you’ll receive a confirmation once it’s done.",
    },
]

const recentData = [
    { name: "Code Editor", link: "/documentation/features/code-editor" },
    { name: "Import", link: "/documentation/features/import" },
]

export default function Deploy() {

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
        <main className="space-y-6 text-gray-300">
            <Breadcrumb
                items={[
                    { label: "Home", href: "/documentation/home" },
                    { label: "Features", href: "/documentation/features" },
                    { label: "Deploy", active: true },
                ]}
            />

            <h1 className="text-4xl sm:text-4xl font-medium text-white">Deploy</h1>

            <p>
                Learn how to deploy your web applications with Kavia.
            </p>

            <div className="shadow-2xl border border-gray-900 rounded-xl p-8 space-y-8">
                <div className='space-y-6'>
                    <p>
                        Once your application is complete, you can deploy it directly from the Kavia interface and share it with the world.
                        You also have the option to share a preview link during development to gather feedback before going live.
                        Kavia makes it simple to publish, iterate, and distribute your applications with just a few clicks.
                    </p>
                    <p>
                        Your deployed app will be accessible via a unique shareable link. Be sure to finalize your changes before publishing.
                    </p>

                    <h2 className="text-2xl sm:text-3xl font-semibold text-white">Publishing Your App</h2>

                    <h4 className="text-lg font-semibold text-white">How to Publish Your App</h4>

                    <div className="relative p-1 rounded-xl overflow-hidden border border-gray-800">
                        <video
                            ref={videoRef}
                            src="/images/features/deploy/vid1.mov"
                            width={800}
                            height={400}
                            className="w-full h-auto object-cover rounded-xl"
                            poster="/images/features/deploy/vid1.png"
                        />

                        <div className="absolute inset-0 flex items-center justify-center">
                            <button
                                onClick={handleTogglePlay}
                                className="flex items-center gap-2 bg-white text-gray-800 font-medium text-sm px-4 py-3 rounded-full shadow-2xl hover:bg-[#fff5f0] hover:text-[#f97316] transition-all duration-200"
                            >
                                 {isPlaying ? (
                                    <>
                                        <StopCircle className="w-6 h-6" />
                                        <span className="sm:inline hidden hover:underline">Stop Video</span>
                                    </>
                                ) : (
                                    <>
                                        <PlayCircle className="w-6 h-6" />
                                        <span className="sm:inline hidden hover:underline">Play Video</span>
                                    </>
                                )}
                            </button>
                        </div>
                    </div>

                    <FeatureList features={steps} />
                </div>
            </div>

            <Recent data={recentData} />
        </main>
    )
}