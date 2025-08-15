"use client";
import { AllProviderProps, PageContextType } from "@/types/types";
import {  useEffect, useState } from "react";
import { createContext } from "react";


const PageContext = createContext<PageContextType>(null!);

const PageProvider = ({ children }: AllProviderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
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
