"use client"

import Breadcrumb from "../integrations/components/Breadcrumb"
import { ArrowUpRight } from "lucide-react"
import { useState } from "react"
import Link from "next/link";

export default function TipsTricksPage() {


    const [selected, setSelected] = useState<null | 'github' | 'supabase' | 'api'>(null)

    const cards = [
        {
            key: 'bestpractices',
            title: 'Best Practices',
            path: '/best-practices',
        },
        {
            key: 'troubleshooting',
            title: 'Troubleshooting',
            path: 'troubleshooting',
        },
        {
            key: 'seo',
            title: 'SEO',
            path: 'seo',
        },
    ]

    return (
        <div className="space-y-6 text-gray-300">
            <Breadcrumb
                items={[
                    { label: "Home", href: "/documentation/home" },
                    { label: "Tips & Tricks", active: true },
                ]}
            />

            <div className="space-y-8">
                <div className="space-y-4">
                    <h1 className="text-3xl sm:text-4xl font-medium text-white">Tips & Tricks</h1>
                    <p className="text-gray-300 leading-relaxed">
                        Kavia is a powerful and intelligent platform designed to accelerate the way modern software is built. Whether you're creating full-stack web apps,
                        mobile applications, or analyzing and improving existing codebases, Kavia allows you to do it all with natural language prompts and real-time feedback.
                    </p>
                </div>

                <div className="shadow-2xl border border-gray-900 rounded-xl p-8 space-y-8">
                    <p>
                        Its unified workspace and AI-first workflow dramatically reduce the need for context switching or manual setup.
                        To help you get the most out of everything Kavia offers, this section covers useful tips, best practices,
                        and common pitfalls—whether you’re just getting started or looking to level up your workflow.
                    </p>
                    <div className="space-y-12">
                        {/* Selector Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {cards.map((card) => (
                                <Link
                                    href={`/documentation/tips-tricks/${card.path}`}
                                    key={card.key}
                                    onClick={() => setSelected(card.key as any)}
                                    className='group relative flex flex-col justify-between h-40 p-5 rounded-2xl border border-[#2a2a2a] text-left overflow-hidden transition-all'
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
                                    <div className="relative z-10">
                                        <h3 className="text-xl font-medium text-white">{card.title}</h3>
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
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
