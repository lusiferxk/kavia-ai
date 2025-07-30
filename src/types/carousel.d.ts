export interface CarouselSlide {
  id: number;
  url: string;
  title: string;
  description: string;
}

export interface CarouselProps {
  slides: CarouselSlide[];
  autoPlay?: boolean;
  interval?: number;
  onSlideClick?: (slideId: number) => void;
}

export interface CarouselNavigationProps {
  currentSlide: number;
  slideCount: number;
  onPrevClick: () => void;
  onNextClick: () => void;
}

export interface CarouselIndicatorsProps {
  slides: CarouselSlide[];
  currentSlide: number;
  onClick: (index: number) => void;
}