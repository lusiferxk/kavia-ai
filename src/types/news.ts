// src/types/news.ts
export interface NewsArticle {
    id: string;
    title: string;
    description: string;
    content: string;
    publishedAt: string;
    author: string;
    image: string;
    slug: string;
    tags: string[];
  }