import { ReactNode } from "react";
import { IconType } from "react-icons/lib";

export interface NavLinksinterfaces {
  id: number;
  name: string;
  href: string;
}

export interface Photointerfaces {
  id: number;
  photo: string;
}

export interface Photosinterfaces {
  id: number;
  name: string;
  album: Photointerfaces[];
}

export interface Videointerfaces {
  id: number;
  name: string;
  video: string;
}

export interface informationinterfaces {
  id: number;
  image: string;
  description: string;
}

export interface SocialMediainterfaces {
  id: number;
  name: string;
  url: string;
  icon: IconType;
}
export interface musiciansinterfaces {
  id: number;
  name: string;
  image: string;
  history: string;
  music: string;
  socialMedia: SocialMediainterfaces[];
}

export interface aboutinterfaces {
  id: number;
  title: string;
  content: string;
}

export interface participantsinterfaces {
  id: number;
  name: string;
  image: string;
}

export interface sponsorsinterfaces {
  id: number;
  name: string;
  image: string;
}

export interface Sobrenosotrasinterfaces {
  sobrenosotras: {
    id: number;
    title: string;
    content: string;
  };
  expanded: string | false;
  handleChange: (
    panel: string
  ) => (event: React.SyntheticEvent, isExpanded: boolean) => void;
}

export type PageContextType = {
  scrollToSection: (sectionId: string) => void;
  isScrolled: boolean;
  //TODO: VIDEO STYLES
  carousel1Ref: React.RefObject<HTMLDivElement | null>;
  carousel2Ref: React.RefObject<HTMLDivElement | null>;
  activeVideo: string | null;
  setActiveVideo: React.Dispatch<React.SetStateAction<string | null>>;
  scroll: (direction: "left" | "right", carouselId: 1 | 2) => void;
  infiniteVideos1: Videointerfaces[];
  infiniteVideos2: Videointerfaces[];
  handleVideoClick: (
    videoId: string,
    videoData: { id: number; name: string }
  ) => void;
  modalOpen: boolean;
  closeModal: () => void;
  currentVideoData: { id: number; name: string } | null;
  setCurrentVideoData: React.Dispatch<
    React.SetStateAction<{ id: number; name: string } | null>
  >;
  scrollPosition1: number;
  setScrollPosition1: React.Dispatch<React.SetStateAction<number>>;
  isScrolling1: boolean;
  setIsScrolling1: React.Dispatch<React.SetStateAction<boolean>>;
  scrollPosition2: number;
  setScrollPosition2: React.Dispatch<React.SetStateAction<number>>;
  isScrolling2: boolean;
  setIsScrolling2: React.Dispatch<React.SetStateAction<boolean>>;
};

export type AllProviderProps = {
  children: ReactNode;
};

export type LogicContextType = {
  isMobile: boolean;
  isTablet: boolean;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  activeContent: Photosinterfaces;
  getConsistentHeight: (photoId: number) => number;
  expanded: string | false;
  handleChange: (
    panel: string
  ) => (event: React.SyntheticEvent, isExpanded: boolean) => void;
};

export type BotonesProps = {
  label?: string;
  className?: string;
  onClick?: () => void;
  icon?: ReactNode;
};
