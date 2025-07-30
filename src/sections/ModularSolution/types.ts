export interface StepItem {
  title: string;
  description?: string;
  videoUrl?: string;
  thumbnail?: string;
}

export interface StepCardProps {
  variant: 'inspect' | 'plan' | 'build';
  icon: string;
  title: string;
  description: string;
  steps: StepItem[];
  videoUrl: string;
  thumbnail: string;
  className?: string;
}

export const variants = {
  inspect: {
    iconColor: '#f4682c',
    cardGradient: 'linear-gradient(135deg, #f4682c 0%, #D35A1B 100%)',
    bgGradient: 'linear-gradient(118deg, rgba(0, 212, 255, 0.04) 0%, rgba(35, 31, 32, 0.04) 96%)',
    circleGradient: 'linear-gradient(225deg, #f4682c 0%, #6d1d00 150%)',
    circleBorder: '1px solid #f17070',
    circlePosition: { left: '383px', top: '18px' },
  },
  plan: {
    iconColor: '#009CA6',
    cardGradient: 'linear-gradient(54deg, #0F88A1 0%, #00D4FF 100%)',
    bgGradient: 'linear-gradient(118deg, rgba(0, 212, 255, 0.04) 0%, rgba(35, 31, 32, 0.04) 96%)',
    circleGradient: 'linear-gradient(241deg, rgba(13.78, 202.97, 242.38, 0.30) 0%, rgba(2.24, 18.51, 21.87, 0.30) 100%)',
    circleBorder: '1px solid rgba(112.40, 223.99, 246.16, 0.70)',
    circlePosition: { left: '-338px', top: '-347px' },
  },
  build: {
    iconColor: '#F1B434',
    cardGradient: 'linear-gradient(54deg, #996B0B 0%, #F1B434 100%)',
    bgGradient: 'linear-gradient(118deg, rgba(241, 180, 52, 0.04) 0%, rgba(35, 31, 32, 0.04) 96%)',
    circleGradient: 'linear-gradient(241deg, rgba(241, 180, 52, 0.30) 0%, rgba(2, 19, 22, 0.30) 100%)',
    circleBorder: '1px solid rgba(241, 180, 52, 0.70)',
    hasDoubleCircle: true,
    circlePositions: [
      { left: '283px', top: '328px' },
      { left: '-389px', top: '-418px' },
    ],
  },
} as const;