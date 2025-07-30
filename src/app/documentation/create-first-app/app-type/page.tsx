import Breadcrumb from "@/app/documentation/integrations/components/Breadcrumb"
import Image from "next/image";
import Recent from "../../components/Recent";

const recentData = [
    { name: "Build Your First App", link: "/documentation/create-first-app" },
    { name: "Describe Your App", link: "/documentation/create-first-app/describe" },
]

export default function StepOne() {
    return (
        <div className="space-y-6">
            <Breadcrumb
                items={[
                    { label: "Home", href: "/documentation/home" },
                    { label: 'Build your first App', href: '/documentation/create-first-app' },
                    { label: 'Web App', href: '/documentation/create-first-app' },
                    { label: "Choose App Type and Framework", active: true },
                ]}
            />

            <div className="space-y-8">
                <div className="space-y-4">
                    <h1 className="text-3xl sm:text-4xl font-medium text-white">Choose App Type and Framework</h1>
                    <p className="text-gray-300 text-lg leading-relaxed">
                        From the Home screen, select the <span className="font-bold">Apps</span> tab. Scroll down and choose <span className="font-bold">Web</span> as the app type and
                        <span className="font-bold"> React</span> as the framework.
                    </p>
                </div>
                <div className="shadow-2xl border border-gray-900 rounded-xl p-8 space-y-8">
                    <div className="relative p-1 rounded-xl overflow-hidden border border-gray-800">
                        <Image
                            src="/images/app-type/img1.png"
                            alt="Integration preview"
                            width={800}
                            height={400}
                            className="w-full h-auto object-cover rounded-xl"
                        />
                    </div>
                    <p className="text-gray-300 text-lg leading-relaxed">
                        If you are building a <span className="font-bold">mobile app</span> you need to select <span className="font-bold">Mobile</span> and then <span className="font-bold">framework</span>.
                    </p>
                    <div className="relative p-1 rounded-xl overflow-hidden border border-gray-800">
                        <Image
                            src="/images/app-type/img2.png"
                            alt="Integration preview"
                            width={800}
                            height={400}
                            className="w-full h-auto object-cover rounded-xl"
                        />
                    </div>
                    <p className="text-gray-300 text-lg leading-relaxed">
                        If you are building a <span className="font-bold">backend</span> for an application you need to select <span className="font-bold">Backend</span> and then <span className="font-bold">framework</span>.
                    </p>
                    <div className="relative p-1 rounded-xl overflow-hidden border border-gray-800">
                        <Image
                            src="/images/app-type/img3.png"
                            alt="Integration preview"
                            width={800}
                            height={400}
                            className="w-full h-auto object-cover rounded-xl"
                        />
                    </div>
                    <p className="text-gray-300 text-lg leading-relaxed">
                        If you are building a <span className="font-bold">full stack application</span>, You need to select <span className="font-bold">Full stack</span> and the relevant <span className="font-bold">Frameworks</span> for the project. Please follow this link for the tutorial or scroll down to topic 5.2.                    </p>
                    <div className="relative p-1 rounded-xl overflow-hidden border border-gray-800">
                        <Image
                            src="/images/app-type/img4.png"
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