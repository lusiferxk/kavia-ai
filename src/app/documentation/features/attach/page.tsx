'use client'

import Breadcrumb from '../../integrations/components/Breadcrumb'
import Recent from "../../components/Recent"
import FeatureList from '../../integrations/components/FeatureList'

const steps = [
    {
        number: 1,
        title: "Start a Project",
        description:
            "Click the '+' Icon & Select 'Attach Files'",
        image: '/images/features/attach/img1.png',
    },
    {
        number: 2,
        title: "Choose Your Files",
        image: '/images/features/attach/img2.png',
        description:
            "Select the images or documents you want to upload and click Open. You can upload multiple files at once.",
    },
    {
        number: 3,
        title: "Add Context for Kavia",
        image: '/images/features/attach/img3.png',
        description:
            "After uploading, you can send a message along with the files to tell Kavia what to do with them. For example:",
        points: [
            "Use this image as the logo in the header.",
            "Reference this document for the user roles.",
        ],
    },
]

const recentData = [
    { name: "Project Welcome Screen", link: "/documentation/features/welcome" },
    { name: "Figma to Kavia", link: "/documentation/features/figma" },
]

export default function Attach() {

    return (
        <main className="space-y-6 text-gray-300">
            <Breadcrumb
                items={[
                    { label: "Home", href: "/documentation/home" },
                    { label: "Features", href: "/documentation/features" },
                    { label: "Attach Files", active: true },
                ]}
            />

            <h1 className="text-4xl sm:text-4xl font-medium text-white">Attach Files</h1>

            <p>
                Kavia allows you to attach images and documents directly to your project,
                helping you provide important resources such as <strong>logos, reference documents, or design assets</strong>.
            </p>

            <div className="shadow-2xl border border-gray-900 rounded-xl p-8 space-y-8">
                <div className='space-y-6'>
                    <h4 className="text-lg font-semibold text-white">How to Attach Files</h4>

                    <FeatureList features={steps} />

                    <p>
                        Once uploaded, Kavia will incorporate your assets into the project according to your instructions.
                    </p>
                </div>
            </div>

            <Recent data={recentData} />
        </main>
    )
}