'use client'
import { usePathname } from 'next/navigation';
import type { Project } from '@/types/project';
import LandingPageModal from './LandingPageModal';
import RegularModal from './RegularModal'; // Your existing modal implementation

interface ProjectModalProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  hasPrev: boolean;
  hasNext: boolean;
}

const ProjectModal = (props: ProjectModalProps) => {
  const pathname = usePathname();
  const isLandingPage = pathname === '/';

  if (isLandingPage) {
    return <LandingPageModal {...props} />;
  }

  return <RegularModal {...props} />;
};

export default ProjectModal;