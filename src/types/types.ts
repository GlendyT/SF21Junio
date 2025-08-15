import { ReactNode } from "react";

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

export interface musiciansinterfaces {
  id: number;
  name: string;
  image: string;
  history: string;
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
