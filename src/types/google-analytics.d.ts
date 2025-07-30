// src/types/google-analytics.d.ts
export interface Window {
  gtag: (
    option: string,
    gaTrackingId: string,
    options: Record<string, unknown>
  ) => void;
  dataLayer: Record<string, any>[];
}