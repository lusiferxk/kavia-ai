// src/types/project.d.ts

export interface Project {
    id: number;
    title: string;
    author: string;
    description: string;
    imageUrl: string;
    videoUrl: string;  
    bgGradient?: boolean;
    darkFooter?: boolean;
    techStack: string;
    timeTaken: string;
    demoLink: string;
    about: string;
    scope?: {
      items: string[];
    };
    coreFeatures?: {
      items: string[];
    };
    objective?: string;
    deploymentDetails?: string;
  }