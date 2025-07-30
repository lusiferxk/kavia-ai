'use client'

import React, { useState } from 'react'
import Breadcrumb from '../integrations/components/Breadcrumb'
import { NotificationPanel } from '../integrations/components/NotificationPanel'

const faqItems = [
  {
    title: 'How should I structure prompts for best results?',
    content: (
      <>
        <ul className="list-disc text-gray-300 pl-6 space-y-1">
          <li>Be clear and detailed about what you want. For example:</li>
        </ul>
        <NotificationPanel message='Create a dashboard page showing sales metrics with role-based access control.' />
        <ul className="list-disc text-gray-300 pl-6 space-y-1">
          <li>
            Avoid vague or overly broad prompts. Always specify pages, roles, and expected behaviors when possible.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: 'What does the chat interface do?',
    content: (
      <ul className="list-disc text-gray-300 pl-6 space-y-1">
        <li>
          Kavia’s chat is your AI development assistant — you can ask it to build features, fix bugs, analyze code,
          and guide you through project workflows all via natural language.
        </li>
      </ul>
    ),
  },
  {
    title: 'Can I see the code that Kavia generates?',
    content: (
      <ul className="list-disc text-gray-300 pl-6 space-y-1">
        <li>
          Yes, Kavia provides a full-featured VS Code environment inside the platform for you to inspect and edit
          your project’s frontend and backend code.
        </li>
      </ul>
    ),
  },
  {
    title: 'Can I edit the code directly?',
    content: (
      <ul className="list-disc text-gray-300 pl-6 space-y-1">
        <li>
          Absolutely. Use the Code Mode to make advanced customizations or debug your app. For quick UI fixes, you
          can also use Edit Mode for instant visual updates.
        </li>
      </ul>
    ),
  },
  {
    title: 'How do I start building a web or mobile app?',
    content: (
      <>
        <ul className="list-disc text-gray-300 pl-6 space-y-1">
          <li>
            On the Kavia home page, select the type of application (web or mobile) and choose the technology stack you
            want to use. Then, simply describe the app or the specific page you want to build in the chat, for example:
          </li>
        </ul>
        <NotificationPanel message='I want a user signup page with email verification and an admin dashboard.' />
        <ul className="list-disc text-gray-300 pl-6 space-y-1">
          <li>
            Kavia’s AI will automatically generate both the frontend UI and backend logic to get you started quickly.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: 'Can I import designs from tools like Figma?',
    content: (
      <ul className="list-disc text-gray-300 pl-6 space-y-1">
        <li>Yes, Kavia supports Figma import to jumpstart your app design.</li>
      </ul>
    ),
  },
  {
    title: 'How do I deploy my app?',
    content: (
      <ul className="list-disc text-gray-300 pl-6 space-y-1">
        <li>
          Use the Deploy button in your project dashboard to publish your app instantly with a shareable URL.
        </li>
      </ul>
    ),
  },
  {
    title: 'How do I connect my project to GitHub?',
    content: (
      <ul className="list-disc text-gray-300 pl-6 space-y-1">
        <li>
          In your project dashboard, go to Settings &gt; SCM and connect your GitHub account to sync code
          repositories, track changes, and enable version control.
        </li>
      </ul>
    ),
  },
  {
    title: 'Can I add backend functionality like databases and authentication?',
    content: (
      <ul className="list-disc text-gray-300 pl-6 space-y-1">
        <li>
          Yes, Kavia integrates with Supabase for backend services including databases, user authentication,
          file storage, and serverless functions. Just ask the AI to add these features.
        </li>
      </ul>
    ),
  },
]

// AccordionItem now uses props from parent to manage open/close state
function AccordionItem({
  title,
  children,
  isOpen,
  onToggle,
}: {
  title: string
  children: React.ReactNode
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <div className="rounded-xl border border-[#2a2a2a] overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full text-left p-4 bg-[#1c1b1c] hover:bg-[#2a292a] transition duration-200 text-white font-medium text-lg flex justify-between items-center"
      >
        {title}
        <span className="text-gray-300">{isOpen ? '-' : '+'}</span>
      </button>
      {isOpen && (
        <div className="px-5 py-5 bg-[#231f20] space-y-6">
          {children}
        </div>
      )}
    </div>
  )
}

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const handleToggle = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index))
  }

  return (
    <div className="space-y-8 text-gray-300">
      <Breadcrumb
        items={[
          { label: "Home", href: "/documentation/home" },
          { label: "FAQ", active: true },
        ]}
      />

      <div className="space-y-6">
        <h1 className="text-3xl sm:text-4xl font-semibold text-white">FAQ</h1>
        <div className="shadow-2xl border border-gray-900 rounded-xl p-8 space-y-8">
          <h2 className="text-xl sm:text-2xl font-medium text-white">Frequently Asked Questions about Kavia AI</h2>
          <div className="space-y-4">
            {faqItems.map((faq, idx) => (
              <AccordionItem
                key={idx}
                title={faq.title}
                isOpen={openIndex === idx}
                onToggle={() => handleToggle(idx)}
              >
                {faq.content}
              </AccordionItem>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
