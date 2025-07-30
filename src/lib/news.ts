// src/lib/news.ts
import { NewsArticle } from '@/types/news'

export async function getNewsArticle(id: string): Promise<NewsArticle | null> {
  try {
    // Implement your data fetching logic here
    // This could be an API call, database query, etc.
    const response = await fetch(`/api/news/${id}`)
    if (!response.ok) {
      throw new Error('Article not found')
    }
    const article = await response.json()
    return article
  } catch (error) {
    console.error('Error fetching article:', error)
    return null
  }
}