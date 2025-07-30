// src/types/news.d.ts
export interface NewsItem {
    id: string;
    date: string;
    title: string;
    image: string;
    content?: string;
    author?: string;
  }