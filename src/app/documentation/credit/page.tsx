'use client';

import React from 'react';
import Breadcrumb from '../integrations/components/Breadcrumb';
import FeatureList from '../integrations/components/FeatureList';

const models = [
    {
        number: 1,
        title: "GPT-4.1",
        description:
            "A reliable, cost-efficient model ideal for general coding tasks, UI improvements, and refactoring. It offers a strong balance between performance and credit efficiency—perfect for most workflows.",
    },
    {
        number: 2,
        title: "Claude 4.0",
        description:
            "Known for excellent reasoning and natural language understanding. Ideal for generating detailed documentation, handling complex instructions, and interpreting ambiguous input.",
    },
    {
        number: 3,
        title: "O3",
        description:
            "Lightweight and fast—great for quick prototyping and simpler automation tasks. Prioritizes speed and responsiveness over depth.",
    },
    {
        number: 4,
        title: "Gemini 2.5-Pro",
        description:
            "Kavia’s most advanced model. Designed for AI-heavy applications requiring deep reasoning, high accuracy, or advanced multi-modal capabilities. Ideal for full-page generation, complex flows, and intelligent automation.",
    },
]

export default function KaviaCreditsPage() {
    return (
        <div className="space-y-8 text-gray-300">
            <Breadcrumb
                items={[
                    { label: "Home", href: "/documentation/home" },
                    { label: "Overview", active: true },
                ]}
            />

            <div className='space-y-6'>
                <h1 className="text-3xl sm:text-4xl font-semibold text-white">Overview</h1>
                <p>
                    Kavia AI offers flexible, subscription-based plans tailored for individuals and teams of all sizes. Each plan includes a monthly allocation of credits, which are used whenever you interact with the AI models—either through prompts or API calls.                </p>
                <p>
                    Credit consumption varies by model, depending on its complexity and capabilities. You can select the AI model that best suits your development goals and switch between them as needed.                </p>
            </div>

            <div className="shadow-2xl border border-gray-900 rounded-xl p-8 space-y-8">

                <div className='space-y-6'>
                    <h2 className="text-3xl font-semibold text-white mb-4">Understanding AI Models</h2>
                    <p>
                        Kavia supports a range of cutting-edge AI models, each optimized for specific use cases:
                    </p>

                    <FeatureList features={models} />

                    <p>
                        You can switch models at any time to align with your project’s complexity and credit budget.
                    </p>
                </div>

                <div className='space-y-6'>
                    <h2 className="text-3xl font-semibold text-white">Getting Started</h2>
                    <p>
                        Begin with 50,000 free credits to explore Kavia’s features and capabilities.
                        Upgrade your plan whenever you need more power, higher credit limits, or team collaboration features to accelerate your development.                    </p>
                </div>
            </div>
        </div>
    );
}
