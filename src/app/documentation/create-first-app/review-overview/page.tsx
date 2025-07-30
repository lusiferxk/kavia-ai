import Breadcrumb from "@/app/documentation/integrations/components/Breadcrumb"
import Image from "next/image";
import Recent from "../../components/Recent";

const recentData = [
    { name: "Describe Your App", link: "/documentation/create-first-app/describe" },
    { name: "Start Implementation and Workspace Setup", link: "/documentation/create-first-app/implementation" },
]

export default function StepOne() {
    return (
        <div className="space-y-6">
            <Breadcrumb
                items={[
                    { label: "Home", href: "/documentation/home" },
                    { label: 'Build your first App', href: '/documentation/create-first-app' },
                    { label: 'Web App', href: '/documentation/create-first-app' },
                    { label: "Review Project Overview", active: true },
                ]}
            />

            <div className="space-y-8">
                <div className="space-y-4">
                    <h1 className="text-3xl sm:text-4xl font-medium text-white">Review Project Overview</h1>
                    <p className="text-gray-300 text-lg leading-relaxed">
                        Kavia shows a summary of your app based on your prompt. Review it carefully. If anything is missing or incorrect, click Edit to make changes.
                    </p>
                </div>
                <div className="shadow-2xl border border-gray-900 rounded-xl p-8 space-y-8">
                    <div className="relative p-1 rounded-xl overflow-hidden border border-gray-800">
                        <Image
                            src="/images/overview/img1.png"
                            alt="Integration preview"
                            width={800}
                            height={400}
                            className="w-full h-auto object-cover rounded-xl"
                        />
                    </div>
                    <p className="text-gray-300 text-lg leading-relaxed">
                        Kavia automatically converts your prompt into a list of core features. Review each one carefully. You can edit, delete, or add features as needed. Finalizing this list early is important, as it directly influences how Kavia builds your application.
                    </p>
                    <div className="relative p-1 rounded-xl overflow-hidden border border-gray-800">
                        <Image
                            src="/images/overview/img2.png"
                            alt="Integration preview"
                            width={800}
                            height={400}
                            className="w-full h-auto object-cover rounded-xl"
                        />
                    </div>
                    <p className="text-gray-300 text-lg leading-relaxed">
                        Customize your app by choosing the frameworks and libraries you prefer in the Tech Stack section. In Style Guidelines, set your app’s colors, theme, and layout to match your brand or design preferences.
                    </p>
                    <div className="relative p-1 rounded-xl overflow-hidden border border-gray-800">
                        <Image
                            src="/images/overview/img3.png"
                            alt="Integration preview"
                            width={800}
                            height={400}
                            className="w-full h-auto object-cover rounded-xl"
                        />
                    </div>
                    <p className="text-gray-300 text-lg leading-relaxed">
                        Connect your GitHub account by selecting it from the dropdown. If it’s not available, click “Add Account” to link it. Make sure the correct account is selected before continuing.
                    </p>
                    <div className="relative p-1 rounded-xl overflow-hidden border border-gray-800">
                        <Image
                            src="/images/overview/img4.png"
                            alt="Integration preview"
                            width={800}
                            height={400}
                            className="w-full h-auto object-cover rounded-xl"
                        />
                    </div>
                    <p className="text-gray-300 text-lg leading-relaxed">
                        To provision your app’s database, connect your Supabase account by clicking the “Connect” button in the Supabase section. Supabase will handle database setup and management for your application.
                    </p>
                    <div className="relative p-1 rounded-xl overflow-hidden border border-gray-800">
                        <Image
                            src="/images/overview/img4.png"
                            alt="Integration preview"
                            width={800}
                            height={400}
                            className="w-full h-auto object-cover rounded-xl"
                        />
                    </div>
                    <ul className="list-disc pl-6 text-gray-300 space-y-2">
                        <li>A popup will appear—click “Continue to Supabase” and complete the authentication process. Completing the process will Open another popup from kavia to select a project from Supabase.</li>
                        <div className="relative p-1 rounded-xl overflow-hidden border border-gray-800">
                            <Image
                                src="/images/overview/img5.png"
                                alt="Integration preview"
                                width={800}
                                height={400}
                                className="w-full h-auto object-cover rounded-xl"
                            />
                        </div>
                        <li>Once connected, create a Supabase project by assigning a name and password.</li>
                        <div className="relative p-1 rounded-xl overflow-hidden border border-gray-800">
                            <Image
                                src="/images/overview/img6.png"
                                alt="Integration preview"
                                width={800}
                                height={400}
                                className="w-full h-auto object-cover rounded-xl"
                            />
                        </div>
                    </ul>
                    <p className="text-gray-300 text-lg leading-relaxed">
                        After connecting both your GitHub and Supabase accounts, click Start Implementation to begin building your application with Kavia.
                    </p>
                </div>
            </div>
            <Recent data={recentData} />
        </div>
    )
}