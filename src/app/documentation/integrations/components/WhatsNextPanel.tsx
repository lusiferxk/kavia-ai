'use client'

import { ArrowUpRight, ExternalLink } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'

interface Step {
    title: string
    href: string
    active?: boolean
}

const steps: Step[] = [
    {
        title: 'Choose App Type and Framework',
        href: '/step1',
        active: true,
    },
    {
        title: 'Describe Your App',
        href: '/step2',
    },
    {
        title: 'Choose App Type and Frameworks',
        href: '/step3',
    },
    {
        title: 'Start Implementation and Setup Workspace',
        href: '/step4',
    },
]

export default function WhatsNextPanel() {
    const [hoverIndex, setHoverIndex] = useState<number | null>(null);

    return (
        <div className="rounded-xl border border-[#2a2a2a] bg-[#231f20] text-white overflow-hidden">
            <div className="px-5 py-3 border-b border-[#302c2d] text-lg text-gray-300" style={{backgroundColor: '#302c2d'}}>
                What’s Next?
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 p-3">
                {/* {steps.map((step, index) => (
                    <Link
                        key={index}
                        href={step.href}
                        className={`flex justify-between items-center px-4 py-3 rounded-xl transition-all text-gray-300 ${step.active
                            ? 'bg-[#302c2d]'
                            : 'hover:bg-[#302c2d]'
                            }`}
                    >
                        <span>{step.title}</span>
                        <div className={`flex items-center rounded-full p-1 ${step.active ? 'bg-[#f97316]' : ''}`}>
                            <ArrowUpRight
                                size={14}
                                className='shrink-0 text-white'
                            />
                        </div>
                    </Link>
                ))} */}
                {steps.map((step, index) => {
                    const isActive = index === hoverIndex;

                    return (
                    <Link
                        key={index}
                        href={step.href}
                        onMouseEnter={() => setHoverIndex(index)}
                        onMouseLeave={() => setHoverIndex(null)}
                        className={`flex justify-between items-center px-4 py-3 rounded-xl transition-all text-gray-300 ${
                        isActive ? 'bg-[#302c2d]' : 'hover:bg-[#302c2d]'
                        }`}
                    >
                        <span>{step.title}</span>
                        <div
                        className={`flex items-center rounded-full p-1 ${
                            isActive ? 'bg-[#f97316]' : 'bg-gray-500/20'
                        }`}
                        >
                        <ArrowUpRight size={14} className="shrink-0 text-white" />
                        </div>
                    </Link>
                    );
                })}
            </div>
        </div>
    )
}
