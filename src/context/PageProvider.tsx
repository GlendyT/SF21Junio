"use client";
import { ReactNode, useEffect, useState } from "react";
import { createContext } from "react";

type PageContextType = {
  scrollToSection: (sectionId: string) => void;
  isScrolled: boolean;
};

type PageProviderProps = {
  children: ReactNode;
};

const PageContext = createContext<PageContextType>(null!);

const PageProvider = ({ children }: PageProviderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <PageContext.Provider value={{ scrollToSection, isScrolled }}>
      {children}
    </PageContext.Provider>
  );
};

export { PageProvider };
export default PageContext;
