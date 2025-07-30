'use client'

import Breadcrumb from '../../integrations/components/Breadcrumb'
import Recent from '../../components/Recent'
import FeatureList from '../../integrations/components/FeatureList'
import { NotificationPanel } from '../../integrations/components/NotificationPanel'
import { title } from 'process'

const WhatToDo = [
  {
    number: 1,
    title: 'Copy the full error message shown in the preview.',
    description: '',
  },
  {
    number: 2,
    title:
      'Paste it into the Kavia chat and ask: "Please fix this error:" followed by the message.',
    description: '',
  },
  {
    number: 3,
    title: 'Kavia will attempt to diagnose and repair the underlying problem.',
    description: '',
  },
]

const TipsforCatching = [
  {
    number: 1,
    title: 'Interact with each feature yourself after asking the AI to implement it.',
    description: '',
  },
  {
    number: 2,
    title: 'Think like a QA tester: click buttons, switch roles, and input edge cases.',
    description: '',
  },
  {
    number: 3,
    title:
      'If something doesn’t work, describe exactly what went wrong and ask Kavia to fix or update the logic.',
    description: '',
  },
]

const RefineYourPrompt = [
  {
    number: 1,
    title: 'Review what you originally asked.',
    description: '',
  },
  {
    number: 2,
    title: 'Clarify what the expected behavior should have been.',
    description: '',
  },
  {
    number: 3,
    title: 'Ask the AI to revise rather than restart the task.',
    description: '',
  },
]

const OrganizePrompts = [
  {
    number: 1,
    title: 'UI tweaks',
    description: '',
  },
  {
    number: 2,
    title: 'Logic problems',
    description: '',
  },
  {
    number: 3,
    title: 'Data connection issues',
    description: '',
  },
]

const StayInChatMode = [
  {
    number: 1,
    title: 'Ask for a summary of recent changes',
    description: '',
  },
  {
    number: 2,
    title: "Confirm what's implemented",
    description: '',
  },
  {
    number: 3,
    title: 'Request changes or enhancements',
    description: '',
  },
]

const ReallyStuck = [
  {
    number: 1,
    title: 'Be more specific in your description of the bug',
    description: '',
  },
  {
    number: 2,
    title: 'Include screenshots, error logs, or expected outcomes',
    description: '',
  },
  {
    number: 3,
    title: 'Ask: “Can you recheck the logic in this feature step by step?”',
    description: '',
  },
  {
    number: 4,
    title: 'Revert to a previous working version using the History panel and rebuild incrementally',
    description: '',
  },
]

const CommonTroubleshooting = [
  {
    number: 1,
    title: 'UI or Layout Errors – Components not rendering, broken styling',
    description: '',
  },
  {
    number: 2,
    title: 'Logic Failures – Buttons don’t trigger actions, data isn’t saved',
    description: '',
  },
  {
    number: 3,
    title: 'Backend/API Integration Issues – Database not connected, missing Supabase config',
    description: '',
  },
  {
    number: 4,
    title: 'Prompt Misinterpretation – AI misunderstood your request',
    description: '',
  },
  {
    number: 5,
    title: 'Security Rules or Role Logic Bugs – Wrong access permissions for certain users',
    description: '',
  },
  {
    number: 6,
    title: 'Theme or Page Structure Conflicts – Confusion between layouts and routes',
    description: '',
  },
]

const recentData = [
  { name: 'Best Practices', link: '/documentation/tips-tricks/best-practices' },
  { name: 'SEO', link: '/documentation/tips-tricks/seo' },
]

export default function TroubleShooting() {
  return (
    <main className="space-y-6 text-gray-300">
      <Breadcrumb
        items={[
          { label: 'Home', href: '/documentation/home' },
          { label: 'Tips & Tricks', href: '/documentation/tips-tricks' },
          { label: 'Troubleshooting', active: true },
        ]}
      />
      <h1 className="text-4xl sm:text-4xl font-medium text-white">Trouble Shooting</h1>
      <p>Actionable steps to identify and fix issues while building with Kavia.</p>

      <div className="shadow-2xl border border-gray-900 rounded-xl p-8 space-y-8">
        <div className="space-y-6">
          <p>
            Kavia gives you powerful tools to build apps with just natural language, but errors can
            still happen—either through incorrect logic, unexpected behavior, or broken code. Since
            there’s no “auto-fix” button, resolving problems is a hands-on process using the chat
            interface.
          </p>
          <p>Here’s how to handle issues effectively:</p>
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-semibold text-white">
              Spot Errors in the Preview
            </h2>

            <p>
              Most obvious issues will show up in the live preview as error messages. These could
              include missing variables, failed imports, or runtime errors.
            </p>
            <h4 className="text-lg font-medium text-white">What to do:</h4>

            <FeatureList features={WhatToDo} />
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-semibold text-white">
              Manually Test What You Build
            </h2>
            <p>
              Sometimes, there won’t be a visible error—but the functionality may still be broken or
              behave differently from what you intended. This is called silent failure or unexpected
              behavior.
            </p>

            <h4 className="text-lg font-medium text-white">Tips for catching it:</h4>
            <FeatureList features={TipsforCatching} />

            <h4 className="text-lg font-medium text-white">Prompt example:</h4>
            <NotificationPanel message="The submit button is not updating the database as expected. Can you check the logic for this component?" />
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-semibold text-white">
              Refine Your Prompt If Something Was Misinterpreted
            </h2>
            <p>
              KIf Kavia didn’t build what you asked for—or added something you didn’t want—it’s
              often a prompt issue.
            </p>

            <FeatureList features={RefineYourPrompt} />
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-semibold text-white">
              Organize Prompts into Smaller Tasks
            </h2>
            <p>
              If the problem spans multiple parts of your app (UI, logic, roles), try isolating each
              issue. Avoid fixing everything at once. Break it down into:
            </p>

            <FeatureList features={OrganizePrompts} />

            <p>Then test each one before moving to the next.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-semibold text-white">
              Stay in Chat Mode and Iterate
            </h2>
            <p>
              Since Kavia doesn't have a visual debugger yet, think of the AI as your engineering
              teammate. Use the chat to:
            </p>

            <FeatureList features={StayInChatMode} />

            <p>Always test after each round of interaction.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-semibold text-white">
              If You're Really Stuck…
            </h2>
            <p>Here are fallback strategies:</p>

            <FeatureList features={ReallyStuck} />
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-semibold text-white">
              Common Troubleshooting Areas in Kavia
            </h2>
            <p>These are the most frequent categories where issues may arise:</p>

            <FeatureList features={CommonTroubleshooting} />
          </div>
        </div>
      </div>

      <p>
        If something feels off—test it, prompt it, and don’t hesitate to ask again. Kavia gets
        better the more precisely you engage.
      </p>

      <Recent data={recentData} />
    </main>
  )
}
