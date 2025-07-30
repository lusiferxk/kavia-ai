export interface Video {
  id: string;
  title: string;
  description: string;
  youtubeUrl?: string;
  videoUrl: string;
  thumbnail?: string;  // Made optional to allow fallback to Vimeo thumbnail
  duration?: string;
  publishDate?: string;
  views?: number;
}

export const videos: Video[] = [
  {
    id: '1',
    title: 'KAVIA Workflow Manager',
    description: 'KAVIA combines AI-powered collaborative workflow management with AI-driven software development automation, by creating a powerful, AI-generated enterprise knowledge graph for each customer.',
    videoUrl: 'https://vimeo.com/1052276087',
    thumbnail: '/assets/videos/thumbnail/MH1.png',  
  },
  {
    id: '2',
    title: 'KAVIA Founder Labeeb Ismail on AI for Enterprise',
    description: 'Labeeb Ismail describes KAVIA, the future of product development, and the holistic role for KAVIA AI.',
    videoUrl: 'https://vimeo.com/1052276189',
    thumbnail: '/assets/videos/thumbnail/LI1.png', 
  },
  {
    id: '3',
    title: 'Knowledge Graph',
    description: 'Labeeb Ismail describes the central role of customized knowledge graph technology in AI software development automation.',
    videoUrl: 'https://vimeo.com/1052421946',
    thumbnail: '/assets/videos/thumbnail/KG.png',  
  },
];