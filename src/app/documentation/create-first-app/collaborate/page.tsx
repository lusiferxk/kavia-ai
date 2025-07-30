import Breadcrumb from "@/app/documentation/integrations/components/Breadcrumb"
import Image from "next/image";
import { NotificationPanel } from "../../integrations/components/NotificationPanel";
import Recent from "../../components/Recent";

const recentData = [
    { name: "Start Implementation and Workspace Setup", link: "/documentation/create-first-app/implementation" },
    { name: "Enable Edit Mode", link: "/documentation/create-first-app/enable-edit-mode" },
]

export default function StepOne() {
    return (
        <div className="space-y-6">
            <Breadcrumb
                items={[
                    { label: 'Home', href: '/documentation/home' },
                    { label: 'Build your first App', href: '/documentation/create-first-app' },
                    { label: 'Build With the Chat and See the Preview', active: true },
                ]}
            />

            <div className="space-y-8">
                <div className="space-y-4">
                    <h1 className="text-3xl sm:text-4xl font-medium text-white">Build With the Chat and See the Preview</h1>
                    <p className="text-gray-300 text-lg leading-relaxed">
                        In the chat panel, Kavia suggests options like coding, planning, testing, or answering questions. Reply with <strong>“Yes, please start the implementation”</strong> to continue.
                    </p>
                </div>
                <div className="shadow-2xl border border-gray-900 rounded-xl p-8 space-y-8">
                    <div className="relative p-1 rounded-xl overflow-hidden border border-gray-800">
                        <Image
                            src="/images/implementation/img1.png"
                            alt="Integration preview"
                            width={800}
                            height={400}
                            className="w-full h-auto object-cover rounded-xl"
                        />
                    </div>
                    <p>Kavia will proceed step-by-step. When it asks if it should move on to the next development stage (e.g., Step Two and Step Three), respond accordingly:</p>

                    <NotificationPanel message={`Please proceed to step two\nYes, please proceed (for the next step)`} />

                    <p>This step-by-step chat guidance helps you stay in control of the development process while letting Kavia handle the heavy lifting.</p>

                    <h2 className="text-2xl sm:text-3xl font-medium text-white">Preview</h2>
                    <p className="text-gray-300 text-lg leading-relaxed">
                        To preview the app you're building, simply click the Preview button located at the top-left corner of the right panel. This will open a live preview of your application so you can see the current state of your build.
                    </p>

                    <div className="relative p-1 rounded-xl overflow-hidden border border-gray-800">
                        <Image
                            src="/images/preview/img1.png"
                            alt="Integration preview"
                            width={800}
                            height={400}
                            className="w-full h-auto object-cover rounded-xl"
                        />
                    </div>
                </div>
            </div>

            <Recent data={recentData} />
        </div>
    )
}