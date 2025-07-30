import Breadcrumb from "@/app/documentation/integrations/components/Breadcrumb"
import Image from "next/image";
import Recent from "../../components/Recent";
import { NotificationPanel } from "../../integrations/components/NotificationPanel";
import FeatureList from "../../integrations/components/FeatureList";

const corefeature = [
    {
        number: 1,
        title: "Review all the listed features thoroughly.",
        description: ""
    },
    {
        number: 2,
        title: "You can edit, delete, or add new features using the provided controls.",
        description: ""
    },
]

const techstack = [
    {
        number: 1,
        title: "Choose your preferred frameworks and libraries.",
        description: ""
    },
    {
        number: 2,
        title: "Under Style Guidelines, define your app's primary colors, theme, and page layout to match your brand or design preferences.",
        description: ""
    },
]

const github = [
    {
        number: 1,
        title: "Select your GitHub account from the dropdown.",
        description: ""
    },
    {
        number: 2,
        title: "If your account is not listed, click “Add Account” to connect it.",
        description: ""
    },
    {
        number: 3,
        title: "Once connected, select the account before proceeding with project implementation.",
        description: ""
    },
]

const supabase = [
    {
        number: 1,
        title: "Click “Connect” in the Supabase section.",
        image: "/images/fullstack/review/img4.png",
        description:
            "",
    },
    {
        number: 2,
        title: "A popup will appear—click “Continue to Supabase” and complete the authentication process.",
        image: "/images/fullstack/review/img5.png",
        description:
            "",
    },
    {
        number: 3,
        title: "Once connected, create a Supabase project by assigning a name and password.",
        image: "/images/fullstack/review/img6.png",
        description:
            "",
    },
]

const recentData = [
    { name: "Describe Your App", link: "/documentation/full-stack/describe" },
    { name: "Start Implementation and Workspace Setup", link: "/documentation/full-stack/implementation" },
]

export default function StepOne() {
    return (
        <div className="space-y-6">
            <Breadcrumb
                items={[
                    { label: "Home", href: "/documentation/home" },
                    { label: 'Build your first App', href: '/documentation/create-first-app' },
                    { label: 'Full-Stack App', href: '/documentation/create-first-app' },
                    { label: "Review Project Overview", active: true },
                ]}
            />

            <div className="space-y-8">
                <div className="space-y-4">
                    <h1 className="text-3xl sm:text-4xl font-medium text-white">Review Project Overview</h1>
                    <p className="text-gray-300 text-lg leading-relaxed">
                        Kavia shows a summary of your app based on your prompt. Review it carefully, and use <strong>Edit</strong> to update or correct any details.
                    </p>
                </div>
                <div className="shadow-2xl border border-gray-900 rounded-xl p-8 space-y-8">
                    <div className="relative p-1 rounded-xl overflow-hidden border border-gray-800">
                        <Image
                            src="/images/fullstack/review/img1.png"
                            alt="Integration preview"
                            width={800}
                            height={400}
                            className="w-full h-auto object-cover rounded-xl"
                        />
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-medium text-white">Configure Core Features</h2>
                    <p className="text-gray-300 text-lg leading-relaxed">
                        In the <strong>Core Features</strong> section, Kavia breaks down your requirements into individual features.
                    </p>

                    <FeatureList features={corefeature} />

                    <NotificationPanel message="Note: It is highly recommended to validate and finalize your feature list at this stage. Later development relies on prompt-based commands. Ensuring your requirements are clear now helps Kavia build a more accurate and complete application." />

                    <div className="relative p-1 rounded-xl overflow-hidden border border-gray-800">
                        <Image
                            src="/images/fullstack/review/img2.png"
                            alt="Integration preview"
                            width={800}
                            height={400}
                            className="w-full h-auto object-cover rounded-xl"
                        />
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-medium text-white">Select Your Tech Stack and Style</h2>

                    <p className="text-gray-300 text-lg leading-relaxed">
                        In the <strong>Tech Stack</strong> section, you can customize the technologies Kavia will use to build your app.
                    </p>
                    <FeatureList features={techstack} />

                    <div className="relative p-1 rounded-xl overflow-hidden border border-gray-800">
                        <Image
                            src="/images/fullstack/review/img3.png"
                            alt="Integration preview"
                            width={800}
                            height={400}
                            className="w-full h-auto object-cover rounded-xl"
                        />
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-medium text-white">Connect Your GitHub Account</h2>

                    <p className="text-gray-300 text-lg leading-relaxed">
                        In the <strong>Third-Party Integrations</strong> section:
                    </p>
                    <FeatureList features={github} />

                    <div className="relative p-1 rounded-xl overflow-hidden border border-gray-800">
                        <Image
                            src="/images/fullstack/review/img4.png"
                            alt="Integration preview"
                            width={800}
                            height={400}
                            className="w-full h-auto object-cover rounded-xl"
                        />
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-medium text-white">Connect Your Supabase Account</h2>

                    <p className="text-gray-300 text-lg leading-relaxed">
                        Supabase will be used to provision the database for your application.
                    </p>

                    <h4 className="text-lg text-white font-semibold">To connect Supabase:</h4>

                    <FeatureList features={supabase} />

                    <h2 className="text-2xl sm:text-3xl font-medium text-white">Start Implementation</h2>

                    <p>
                        After connecting both your GitHub and Supabase accounts, click <strong>Start Implementation</strong> to begin building your application with Kavia.
                    </p>
                </div>
            </div>
            <Recent data={recentData} />
        </div>
    )
}