'use client'

import Breadcrumb from '../../integrations/components/Breadcrumb'
import Recent from "../../components/Recent"
import { useRef, useState } from 'react'
import { PlayCircle, StopCircle } from 'lucide-react'
import { NotificationPanel } from '../../integrations/components/NotificationPanel'

const recentData = [
    { name: "Code Editor", link: "/documentation/features/code-editor" },
    { name: "Deploy", link: "/documentation/features/deploy" },
]

export default function Edit() {

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
                    { label: "Edit Mode", active: true },
                ]}
            />

            <h1 className="text-4xl sm:text-4xl font-medium text-white">Edit Mode</h1>

            <p>
                Kavia’s <strong>Edit Mode</strong> enables you to click on elements in your live preview and modify them instantly.
                You can update text, change colors, rearrange layout components, or adjust functionality using either direct edits or natural language prompts.
                This mode is ideal for making fast, precise updates without switching to the code view or invoking AI assistance.
            </p>

            <div className="shadow-2xl border border-gray-900 rounded-xl p-8 space-y-8">
                <div className='space-y-6'>
                    <p>
                        <strong>Edit Mode</strong> gives you full control over the visual structure of your app, helping you fine-tune design and behavior on the spot,
                        right within the canvas.Edit Mode gives you full control over the visual structure of your app, helping you fine-tune design and behavior on the spot, right within the canvas.
                    </p>

                    <div className="relative p-1 rounded-xl overflow-hidden border border-gray-800">
                        <video
                            ref={videoRef}
                            src="/images/features/edit/vid1.mov"
                            width={800}
                            height={400}
                            className="w-full h-auto object-cover rounded-xl"
                            poster="/images/features/edit/vid1.png"
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

                    <h4 className="text-lg font-semibold text-white">When to Use Edit Mode</h4>

                    <p>
                        Use <strong>Edit Mode</strong> in Kavia when you want to make quick, precise changes to your app’s interface without diving into the code.
                        It's especially helpful for fine-tuning visuals and content directly on the canvas.
                    </p>

                    <h4 className="text-lg font-semibold text-white">You can use Edit Mode to:</h4>

                    <ul className="list-disc pl-6 space-y-2 text-gray-300">
                        <li>Change static text content within your application</li>
                        <li>Update fonts, font sizes, or styling</li>
                        <li>Modify colors of text, buttons, or other elements</li>
                        <li>Select a specific element and use prompts to adjust its appearance or functionality</li>
                    </ul>

                </div>
                <NotificationPanel message='Note: Using prompts within Edit Mode will deduct credits, just like standard prompt-based actions.' />
            </div>

            <Recent data={recentData} />
        </main>
    )
}