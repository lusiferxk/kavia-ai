"use client"

import { NotificationPanel } from "../integrations/components/NotificationPanel"
import FeatureList from "../integrations/components/FeatureList"
import Breadcrumb from "../integrations/components/Breadcrumb"

const organize = [
  {
    number: 1,
    title: "Create a registration form with fields for name, email, and password.",
    description:
      "",
  },
  {
    number: 2,
    title: "Implement form validation on the client side.",
    description:
      "",
  },
  {
    number: 3,
    title: "Connect the form to Supabase for user registration.",
    description:
      "",
  },
  {
    number: 4,
    title: "After successful signup, redirect to /dashboard.",
    description:
      "",
  },
]

export default function PromptingGuidePage() {
  return (
    <div className="space-y-6 text-gray-300">

      <Breadcrumb
        items={[
          { label: "Home", href: "/documentation/home" },
          { label: "Prompting Guide for Kavia", active: true },
        ]}
      />

      <h1 className="text-3xl sm:text-4xl font-medium text-white">Prompting Guide for Kavia</h1>
      <h4 className="text-white text-lg font-medium leading-relaxed">
        Best Practices for Communicating Effectively with Kavia
      </h4>

      <p>
        Kavia is a sophisticated AI platform purpose-built to streamline the development of web and mobile applications. As with any intelligent system, the quality of its outputs depends heavily on the clarity and structure of your inputs. This guide outlines foundational and advanced prompting strategies to help users—both technical and non-technical—communicate effectively with Kavia and maximize its capabilities.
      </p>

      <div className="shadow-2xl border border-gray-900 rounded-xl p-8 space-y-8">
        <div className="space-y-6">
          <h2 className="text-3xl font-medium text-white">Introduction to Prompting</h2>
          <p className="text-gray-300 leading-relaxed">
            Prompting is the practice of instructing the AI using natural language. In Kavia, prompts are used to generate UI components, configure logic, scaffold backend services, automate workflows, and more. A prompt serves as both a directive and a design brief, ensuring that the AI understands exactly what needs to be done.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Well-structured prompting leads to better results, reduced iteration, and faster development.
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-3xl font-medium text-white">Why Prompting Matters</h2>
          <p className="text-gray-300 leading-relaxed">
            Prompting is not a passive activity. The difference between a vague request and a well-specified instruction can result in dramatically different outputs. Effective prompting allows users to:
          </p>
          <ul className="list-disc text-gray-300 pl-6 space-y-1">
            <li>Build and iterate faster</li>
            <li>Generate consistent, production-ready outputs</li>
            <li>Reduce bugs and misunderstandings</li>
            <li>Leverage AI capabilities even without writing code</li>
            <li>Align outputs with specific business or technical requirements</li>
          </ul>
          <p className="text-gray-300 leading-relaxed">
            By mastering prompt design, you unlock the full potential of Kavia’s AI engine.
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-3xl font-medium text-white">Understanding How Kavia Interprets Prompts</h2>
          <p className="text-gray-300 leading-relaxed">
            Kavia is powered by large language models (LLMs), which generate responses based on statistical patterns from their training data. These models are powerful but literal—they do not inherently understand your goals unless you state them explicitly. Consider the following key characteristics:
          </p>
          <ul className="list-disc text-gray-300 pl-6 space-y-1">
            <li><strong>No implicit understanding:</strong> If a detail isn’t specified, it may be ignored or guessed incorrectly.</li>
            <li><strong>Context limitations:</strong> AI models operate within a finite memory window. Long sessions or prompts may lose earlier context unless restated.</li>
            <li><strong>Literal interpretation:</strong> The AI will follow instructions precisely. Ambiguity often leads to undesired results.</li>
            <li><strong>Risk of hallucination:</strong> When uncertain, the AI may generate plausible-sounding—but incorrect—information.</li>
          </ul>
          <p className="text-gray-300 leading-relaxed">
            Prompting should be approached as you would instruct a junior developer or assistant—clear, thorough, and with minimal assumptions.
          </p>
        </div>

        <h2 className="text-3xl font-medium text-white">Structuring a High-Quality Prompt</h2>

        <p>
          An effective prompt typically consists of four key components:
        </p>

        <div className="rounded-xl border border-[#2a2a2a] bg-[#231f20] text-white overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left table-auto text-sm text-gray-300">
              <thead className="bg-[#2a2a2a] text-gray-400">
                <tr>
                  <th className="p-4 border border-[#302c2d]">Section</th>
                  <th className="p-4 border border-[#302c2d]">Purpose</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-4 border border-[#302c2d] font-semibold">Context</td>
                  <td className="p-4 border border-[#302c2d]">Provide background about the app, technologies in use, or the current stage of development.</td>
                </tr>
                <tr>
                  <td className="p-4 border border-[#302c2d] font-semibold">Task</td>
                  <td className="p-4 border border-[#302c2d]">Clearly state the action the AI should take.</td>
                </tr>
                <tr>
                  <td className="p-4 border border-[#302c2d] font-semibold">Guidelines</td>
                  <td className="p-4 border border-[#302c2d]">Specify formatting, tone, coding conventions, or any other expectations.</td>
                </tr>
                <tr>
                  <td className="p-4 border border-[#302c2d] font-semibold">Constraints</td>
                  <td className="p-4 border border-[#302c2d]">Include limitations, exclusions, or dependencies the AI must consider.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <h4 className="text-white text-lg font-medium leading-relaxed">Example Prompt:</h4>

        <NotificationPanel message={`Create a login page using React. Include email and password fields. Use Supabase for authentication with JWT support. The layout should follow a minimalist design using Tailwind CSS. Ensure the component is responsive and written in TypeScript.`} />

        <p>
          This format minimizes ambiguity and ensures the AI has everything it needs to generate high-quality results.
        </p>

        <h2 className="text-3xl font-medium text-white">The SCOPE Framework for Prompting in Kavia</h2>

        <p>
          To help users consistently write effective prompts, we introduce the <strong>SCOPE Framework</strong>—a practical and robust guideline tailored specifically for application development with AI.
        </p>

        <div className="rounded-xl border border-[#2a2a2a] bg-[#231f20] text-white overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left table-auto text-sm text-gray-300">
              <thead className="bg-[#2a2a2a] text-gray-400">
                <tr>
                  <th className="p-4 border border-[#302c2d]">Principle</th>
                  <th className="p-4 border border-[#302c2d]">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="p-4 border border-[#302c2d] font-semibold">Specific</td><td className="p-4 border border-[#302c2d]">Define clear, narrow objectives. Avoid vague or generalized requests.</td></tr>
                <tr><td className="p-4 border border-[#302c2d] font-semibold">Contextual</td><td className="p-4 border border-[#302c2d]">Supply relevant background information, including the tech stack, use case, or user scenario.</td></tr>
                <tr><td className="p-4 border border-[#302c2d] font-semibold">Organized</td><td className="p-4 border border-[#302c2d]">Structure the prompt using steps or sections. Logical sequencing improves comprehension.</td></tr>
                <tr><td className="p-4 border border-[#302c2d] font-semibold">Precise</td><td className="p-4 border border-[#302c2d]">Specify expected formats, constraints, naming conventions, or implementation rules.</td></tr>
                <tr><td className="p-4 border border-[#302c2d] font-semibold">Evolving</td><td className="p-4 border border-[#302c2d]">Use feedback and iteration to refine prompts and improve results over time.</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-3xl font-medium text-white">Specific</h2>

          <p>
            Avoid vague objectives.
          </p>

          <h4 className="text-white text-lg font-medium leading-relaxed">Instead of:</h4>

          <NotificationPanel message="Build a dashboard." />

          <h4 className="text-white text-lg font-medium leading-relaxed">Use:</h4>

          <NotificationPanel message="Create a dashboard in React that shows real-time user activity, displays last login timestamps, and integrates with Supabase for fetching analytics data." />
        </div>

        <div className="space-y-4">
          <h2 className="text-3xl font-medium text-white">Contextual</h2>

          <p>
            Supply relevant background to inform the AI.
          </p>

          <h4 className="text-white text-lg font-medium leading-relaxed">Example:</h4>

          <NotificationPanel message="This is a Next.js application using Supabase for authentication and PostgreSQL as the database. The user is an admin managing internal employee data." />
        </div>

        <div className="space-y-4">
          <h2 className="text-3xl font-medium text-white">Organized</h2>

          <p>
            Break down complex instructions into clear, logical steps.
          </p>

          <h4 className="text-white text-lg font-medium leading-relaxed">Example:</h4>

          <FeatureList features={organize} />
        </div>

        <div className="space-y-4">
          <h2 className="text-3xl font-medium text-white">Precise</h2>

          <p>
            Indicate formatting requirements and constraints.
          </p>

          <h4 className="text-white text-lg font-medium leading-relaxed">Example:</h4>

          <NotificationPanel message="Use Tailwind CSS for layout and styling. Return a single functional component in TypeScript. Do not use any external state management libraries." />
        </div>

        <div className="space-y-4">
          <h2 className="text-3xl font-medium text-white">Evolving</h2>

          <p>
            Prompting is an iterative process. Refine based on results.
          </p>

          <h4 className="text-white text-lg font-medium leading-relaxed">Examples:</h4>

          <ul className="list-disc text-gray-300 pl-6 space-y-1">
            <li>“The generated component is missing error handling. Please update the code to include form-level error messages.”</li>
            <li>“This output lacks responsiveness. Please adapt the layout for mobile using Tailwind’s responsive classes.”</li>
            <li>“Summarize the current state of the app after all updates.”</li>
          </ul>

          <p>
            Kavia also supports <strong>Meta Prompting</strong>, where you can ask the AI how to improve your prompt itself:
          </p>
          <NotificationPanel message="How could I improve my prompt to get more specific output?" />
        </div>

        <div className="space-y-6">
          <h2 className="text-3xl sm:text-3xl font-medium text-white">Prompting Best Practices for Kavia</h2>
          <p>
            To ensure optimal interaction with Kavia's AI engine, apply the following guidelines:
          </p>

          <ul className="list-disc text-gray-300 pl-6 space-y-1">
            <li>Clearly state the <strong>goal</strong> of each prompt.</li>
            <li>Always include <strong>technical context</strong>, such as the programming language or frameworks involved.</li>
            <li>Use <strong>bullet points or numbered steps</strong> to break down multi-part tasks.</li>
            <li>Reiterate <strong>important constraints</strong> when working with long prompts or conversations.</li>
            <li>Avoid open-ended or subjective language unless followed by clarification.</li>
            <li>When in doubt, <strong>ask the AI for a summary or clarification</strong> before proceeding.</li>
          </ul>

        </div>
      </div>
    </div>
  )
}
