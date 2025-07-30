// src/types/global.d.ts
interface Window {
    gtag: (
      command: string,
      action: string,
      params: {
        method?: string;
        content_type?: string;
        item_id?: string;
      }
    ) => void;
  }