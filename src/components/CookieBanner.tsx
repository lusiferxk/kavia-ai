// src/components/CookieBanner.tsx
"use client";
import { useState, useEffect } from "react";
import { getLocalStorage, setLocalStorage } from "@/lib/storageHelper";

const CookieBanner = () => {
    // Initialize with undefined to prevent initial render
    const [cookieConsent, setCookieConsent] = useState<boolean | null | undefined>(undefined);

    useEffect(() => {
        // Get stored consent
        const storedConsent = getLocalStorage("cookie_consent", null);
        setCookieConsent(storedConsent);
    }, []);

    const handleConsent = (consent: boolean) => {
        setCookieConsent(consent);
        setLocalStorage("cookie_consent", consent);

        if (typeof window !== "undefined" && window.gtag) {
            window.gtag("consent", "update", {
                analytics_storage: consent ? "granted" : "denied",
                functionality_storage: consent ? "granted" : "denied"
            });
        }
    };

    // Don't render anything while checking initial state
    if (cookieConsent === undefined) {
        return null;
    }

    // Don't render if consent has been given or denied
    if (cookieConsent === true || cookieConsent === false) {
        return null;
    }

    return (
        <div className="fixed bottom-4 left-4 max-w-xs bg-[#2A2627] rounded-lg shadow-xl overflow-hidden z-50 border border-gray-700">
            <div className="relative">
                <div className="absolute top-0 left-0 px-4 py-4 rounded-br-lg">
                    <h2 className="text-lg font-semibold text-white">Cookie settings</h2>
                </div>
                <div className="flex justify-end">
                    <img src="/assets/icons/cookie.png" alt="Cookie icon" width={48} height={48} />
                </div>
            </div>
            <div className="p-4 pt-2">
                <p className="text-sm text-gray-300 mb-4">
                    We use our own cookies so that we can show you this website and understand how you use them to improve the services we offer.
                </p>
                <div className="flex space-x-2">
                    <button
                        onClick={() => handleConsent(false)}
                        className="flex-1 px-4 py-2 text-sm font-medium text-gray-300 bg-[#3A3637] rounded-md hover:bg-[#4A4647] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                    >
                        Deny
                    </button>
                    <button
                        onClick={() => handleConsent(true)}
                        className="flex-1 px-4 py-2 text-sm font-medium text-white bg-[rgb(244,104,44)] rounded-md hover:bg-[rgb(220,93,39)] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[rgb(244,104,44)]"
                    >
                        Accept All
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CookieBanner;