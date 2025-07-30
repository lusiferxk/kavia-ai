import { Smartphone,AppWindow,MonitorSmartphone,SquareCode } from "lucide-react";
import { TfiApple, TfiAndroid } from "react-icons/tfi";
import Image from "next/image";

import VueImage from "../assets/images/vuedotjs.svg"
import NextJSImage from "../assets/images/next.svg"
import AngularImage from "../assets/images/angular.svg"
import NuxtImage from "../assets/images/nuxt.svg"
import RemixImage from "../assets/images/remix.svg"
import RemotionImage from "../assets/images/remotion.svg"
import SlidevImage from "../assets/images/slidev_logo.svg"
import SvelteImage from "../assets/images/svelte.svg"
import TypescriptImage from "../assets/images/typescript.svg"
import ViteImage from "../assets/images/vite.svg"
import QwikImage from "../assets/images/qwik.svg"
import AstroImage from "../assets/images/astro.svg"
import DjangoImage from "../assets/images/django.svg"
import FlaskImage from "../assets/images/flask.svg"
import ExpressImage from "../assets/images/express.svg"
import FastAPIImage from "../assets/images/fastapi.svg"

export const Flutter = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-5 h-5">
        <path
        d="M429.5 236.3L291.7 374.1 429.5 512H272l-59.1-59.1-78.8-78.8L272 236.3H429.5zM272 0L16 256l78.8 78.8L429.5 0H272z"
        fill="white"
        stroke="black"
        strokeWidth="30"
        stroke-linejoin="round"
        stroke-linecap="round"
        />
    </svg>
);

export const Kotlin = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="w-5 h-5">
        <path
        d="M0 256L128.427 127.573L256 256H0ZM0 0H128.427L0 138.667V0ZM128.427 0L0 135.253V256L128.427 127.573L256 0H128.427Z"
        fill="white"
        stroke="black"
        strokeWidth="15"
        strokeLinejoin="round"
        strokeLinecap="round"
        />
    </svg>
);

export const Java = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5">
        <path
        d="M16.0497 8.44062C22.6378 3.32607 19.2566 0 19.2566 0C19.7598 5.28738 13.813 6.53583 12.2189 10.1692C11.1312 12.6485 12.9638 14.8193 16.0475 17.5554C15.7749 16.9494 15.3544 16.3606 14.9288 15.7645C13.4769 13.7313 11.9645 11.6132 16.0497 8.44062ZM17.1015 18.677C17.1015 18.677 19.0835 17.0779 17.5139 15.3008C12.1931 9.27186 23.3333 6.53583 23.3333 6.53583C16.5317 9.8125 17.5471 11.7574 19.2567 14.1202C21.0871 16.6538 17.1015 18.677 17.1015 18.677ZM22.937 23.4456C29.0423 20.3258 26.2195 17.3278 24.2492 17.7317C23.7662 17.8305 23.5509 17.9162 23.5509 17.9162C23.5509 17.9162 23.7302 17.64 24.0726 17.5204C27.9705 16.1729 30.9682 21.4949 22.8143 23.6028C22.8143 23.6029 22.9088 23.5198 22.937 23.4456ZM10.233 19.4969C6.41312 18.9953 12.3275 17.6139 12.3275 17.6139C12.3275 17.6139 10.0307 17.4616 7.20592 18.8043C3.86577 20.3932 15.4681 21.1158 21.474 19.5625C22.0984 19.1432 22.9614 18.7798 22.9614 18.7798C22.9614 18.7798 20.5037 19.2114 18.0561 19.4145C15.0612 19.6612 11.8459 19.7093 10.233 19.4969ZM11.6864 22.4758C9.55624 22.2592 10.951 21.2439 10.951 21.2439C5.43898 23.0429 14.0178 25.083 21.7199 22.8682C20.9012 22.5844 20.3806 22.0653 20.3806 22.0653C16.6163 22.7781 14.441 22.7553 11.6864 22.4758ZM12.6145 25.6991C10.486 25.4585 11.7295 24.7474 11.7295 24.7474C6.72594 26.1222 14.7729 28.9625 21.1433 26.2777C20.0999 25.8787 19.3528 25.4181 19.3528 25.4181C16.5111 25.9469 15.1931 25.9884 12.6145 25.6991ZM25.9387 27.3388C25.9387 27.3388 26.8589 28.0844 24.9252 28.6612C21.2481 29.7566 9.62093 30.0874 6.39094 28.7049C5.22984 28.2082 7.40723 27.5189 8.09215 27.3742C8.80646 27.2219 9.21466 27.2503 9.21466 27.2503C7.9234 26.3558 0.868489 29.0067 5.63111 29.7659C18.6195 31.8372 29.3077 28.8331 25.9387 27.3388ZM28 28.9679C27.7869 31.6947 18.7877 32.2683 12.9274 31.8994C9.10432 31.6583 8.33812 31.0558 8.32691 31.047C11.9859 31.6402 18.1549 31.7482 23.1568 30.8225C27.5903 30.0016 28 28.9679 28 28.9679Z"
        fill="white"
        stroke="black"
        strokeWidth="1"
        strokeLinejoin="round"
        strokeLinecap="round"
        />
    </svg>
);

export const Generic = ({ color = "black", size = { width: 24, height: 22 } }) => (
    <svg width={size.width} height={size.height} viewBox="0 0 32 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.91602 15.7464H8.94102V15.7214V13.8231H10.2693V18.9977H8.94102V17.0993V17.0743H8.91602H6.44102V15.7464H8.91602ZM23.0827 10.9206H23.0577V10.9456V12.8439H21.7293V7.66933H23.0577V9.56766V9.59266H23.0827H25.5577V10.9206H23.0827ZM21.5031 25.8335V29.1418H10.4956V25.8335V25.8085H10.4706H2.56977C1.92298 25.8085 1.36526 25.574 0.89536 25.1042C0.425465 24.6343 0.191016 24.0765 0.191016 23.4297V3.23725C0.191016 2.59046 0.425465 2.03274 0.89536 1.56284C1.36526 1.09295 1.92298 0.858496 2.56977 0.858496H29.4289C30.0757 0.858496 30.6334 1.09295 31.1033 1.56284C31.5732 2.03274 31.8077 2.59046 31.8077 3.23725V23.4297C31.8077 24.0765 31.5732 24.6343 31.1033 25.1042C30.6334 25.574 30.0757 25.8085 29.4289 25.8085H21.5281H21.5031V25.8335ZM29.7991 23.7999L29.7991 23.7999C29.9096 23.6892 29.9664 23.5656 29.9664 23.4297V3.23725C29.9664 3.10139 29.9096 2.97782 29.7991 2.86709L29.7991 2.86704C29.6884 2.75661 29.5648 2.69975 29.4289 2.69975H2.56977C2.43391 2.69975 2.31034 2.75661 2.19961 2.86704L2.19956 2.86709C2.08913 2.97782 2.03227 3.10139 2.03227 3.23725V23.4297C2.03227 23.5656 2.08913 23.6892 2.19956 23.7999L2.19961 23.7999C2.31034 23.9104 2.43391 23.9672 2.56977 23.9672H29.4289C29.5648 23.9672 29.6884 23.9104 29.7991 23.7999ZM25.5577 15.7464V17.0743H12.5948V15.7464H25.5577ZM19.4039 10.9206H6.44102V9.59266H19.4039V10.9206Z" fill={color} stroke={color} strokeWidth="0.05"/>
    </svg>
);

export const ReactIcon = () => (
    <svg
        width="24"
        height="24"
        viewBox="0 0 841.9 595.3"
        xmlns="http://www.w3.org/2000/svg"
        fill="#61DAFB"
    >
        <g>
            <circle cx="420.9" cy="296.5" r="50" fill="#61DAFB" />
            <g stroke="#61DAFB" strokeWidth="30" fill="none">
                <ellipse rx="300" ry="115" cx="420.9" cy="296.5" transform="rotate(0 420.9 296.5)" />
                <ellipse rx="300" ry="115" cx="420.9" cy="296.5" transform="rotate(60 420.9 296.5)" />
                <ellipse rx="300" ry="115" cx="420.9" cy="296.5" transform="rotate(120 420.9 296.5)" />
            </g>
        </g>
    </svg>
);

export const PLATFORMS = [
    { key: "web", label: "Web", icon: <AppWindow className="w-5 h-5" color="#6e7580" /> ,text:"Use this to generate code for browser-based applications."},
    { key: "mobile", label: "Mobile", icon: <Smartphone className="w-5 h-5" color="#6e7580" />,text:"Use this to generate code for mobile apps (iOS or Android)." },
    { key: "backend", label: "Backend", icon: <SquareCode className="w-5 h-5" color="#6e7580" />,text:"Use this to generate backend/server-side application code." },
    { key: "fullstack", label: "Fullstack", icon: <MonitorSmartphone className="w-5 h-5" color="#6e7580" />,text:"Use this to generate complete fullstack applications with web, mobile, and backend components." },
];

export const mobileFrameworks = [
    { key: "flutter", label: "Flutter", icon: <Flutter /> },
    { key: "android", label: "Android - Java", icon: <TfiAndroid className="w-5 h-5" /> },
    { key: "kotlin", label: "Android - Kotlin", icon: <Kotlin /> },
    { key: "ios", label: "IOS", icon: <TfiApple className="w-5 h-5" /> },
];

export const backendFrameworks = [
    { key: "django", label: 'Django', icon: <Image src={DjangoImage} alt="Django" width={24} height={24} />, },
    { key: "fastapi", label: 'FastAPI', icon: <Image src={FastAPIImage} alt="FastAPI" width={24} height={24} />, },
    { key: "flask", label: 'Flask', icon: <Image src={FlaskImage} alt="Flask" width={24} height={24} />, },
    { key: "express", label: 'Express', icon: <Image src={ExpressImage} alt="Express" width={24} height={24} /> ,},
  ]

export const frameworks = [
    { key: "react", label: 'React JS', icon: <ReactIcon />, isDefault: true },
    { key: "angular", label: 'Angular', icon: <Image src={AngularImage} alt="Angular" width={24} height={24} />, },
    { key: "astro", label: 'Astro', icon: <Image src={AstroImage} alt="Astro" width={24} height={24} />, },
    { key: "nextjs", label: 'Next JS', icon: <Image src={NextJSImage} alt="Next JS" width={24} height={24} />, },
    { key: "qwik", label: 'Qwik', icon: <Image src={QwikImage} alt="Qwik" width={24} height={24} />, },
    { key: "nuxt", label: 'Nuxt', icon: <Image src={NuxtImage} alt="Nuxt" width={24} height={24} />, },
    { key: "remix", label: 'Remix', icon: <Image src={RemixImage} alt="Remix" width={24} height={24} />, },
    { key: "remotion", label: 'Remotion', icon: <Image src={RemotionImage} alt="Remotion" width={24} height={24} />, },
    { key: "slidev", label: 'Slidev', icon: <Image src={SlidevImage} alt="Slidev" width={24} height={24} />, },
    { key: "svelte", label: 'Svelte', icon: <Image src={SvelteImage} alt="Svelte" width={24} height={24} />, },
    { key: "vite", label: 'Vite', icon: <Image src={ViteImage} alt="Vite" width={24} height={24} />, },
    { key: "vue", label: 'Vue', icon: <Image src={VueImage} alt="Vue" width={24} height={24} />, },
  ]

  export const models = [
    { id: 'Claude 3.5', name: 'Claude 3.5 Sonnet', description: 'Advanced reasoning and multi-modal capabilities' },
    { id: 'Claude 3.7', name: 'Claude 3.7 Sonnet', description: 'Most powerful model for code generation' },
    { id: 'GPT-4o', name: 'GPT-4o', description: 'Reasoning and multi-modal capabilities' },
    { id: 'GPT-4.1', name: 'GPT-4.1', description: 'Fast and efficient code generation' }
  ];
