// src/components/analytics/google-analytics.tsx
'use client';

import Script from 'next/script';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { getLocalStorage } from '@/lib/storageHelper';

const NEXT_PUBLIC_GA_ID = 'G-14S5FZB356';

export function GoogleAnalytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Initialize dataLayer if it doesn't exist
    window.dataLayer = window.dataLayer || [];
    window.gtag = function() { window.dataLayer.push(arguments); };

    // Check initial consent state
    const cookieConsent = getLocalStorage("cookie_consent", null);
    
    // Set initial consent state
    window.gtag('consent', 'default', {
      'analytics_storage': cookieConsent ? 'granted' : 'denied',
      'functionality_storage': cookieConsent ? 'granted' : 'denied',
      'security_storage': 'granted', // Always granted for security purposes
    });

    // Only track pageview if consent is granted
    if (pathname && cookieConsent === true) {
      pageview(pathname);
    }
  }, [pathname, searchParams]);

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${NEXT_PUBLIC_GA_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}

            // Initialize gtag
            gtag('js', new Date());

            // Set default consent state
            gtag('consent', 'default', {
              'analytics_storage': 'denied',
              'functionality_storage': 'denied',
              'security_storage': 'granted'
            });

            // Configure GA with consent mode
            gtag('config', '${NEXT_PUBLIC_GA_ID}', {
              page_path: window.location.pathname,
              'consent': 'default'
            });
          `,
        }}
      />
    </>
  );
}

// Utility function to check consent state
export const getConsentState = () => {
  if (typeof window !== 'undefined' && window.dataLayer) {
    // Find the consent state in dataLayer
    const consentState = window.dataLayer.find(
      (item: any) => item[0] === 'consent' && item[1] === 'default'
    );
    return consentState ? consentState[2] : null;
  }
  return null;
};

// Updated utility function for page views with consent check
export const pageview = (url: string) => {
  const hasConsent = getLocalStorage("cookie_consent", null);
  if (typeof window.gtag !== 'undefined' && hasConsent === true) {
    window.gtag('config', NEXT_PUBLIC_GA_ID, {
      page_path: url,
    });
  }
};

// Updated utility function for events with consent check
export const event = ({ action, category, label, value }: {
  action: string;
  category: string;
  label: string;
  value?: number;
}) => {
  const hasConsent = getLocalStorage("cookie_consent", null);
  if (typeof window.gtag !== 'undefined' && hasConsent === true) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Updated type declarations
declare global {
  interface Window {
    gtag: (
      command: string,
      action: any,
      params?: any
    ) => void;
    dataLayer: any[];
  }
}