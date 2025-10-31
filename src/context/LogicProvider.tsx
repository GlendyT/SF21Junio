"use client";
import { photos } from "@/app/album/Data/photos";
import { AllProviderProps, LogicContextType } from "@/types/types";
import useMediaQuery from "@mui/material/useMediaQuery";
import { createContext, useState } from "react";

const LogicContext = createContext<LogicContextType>(null!);

const LogicProvider = ({ children }: AllProviderProps) => {
  const isTablet = useMediaQuery("(max-width: 1024px)");
  const isMobile = useMediaQuery("(max-width: 600px)");
  const defaultTab = photos.find((tab) => tab.id === 1) || photos[0];
  const [activeTab, setActiveTab] = useState(defaultTab.name);
  const activeContent =
    photos.find((tab) => tab.name === activeTab) || defaultTab;
  const getConsistentHeight = (photoId: number) => {
    const seed = photoId * 31; // Usar el ID como key
    const normalized = (seed % 100) / 100; // Normalizar entre 0-1

    if (isMobile) {
      return Math.floor(150 + normalized * (300 - 150));
    } else if (isTablet) {
      return Math.floor(175 + normalized * (350 - 175));
    } else {
      return Math.floor(200 + normalized * (400 - 200));
    }
  };

    const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <LogicContext.Provider
      value={{
        isMobile,
        isTablet,
        activeTab,
        setActiveTab,
        activeContent,
        getConsistentHeight,
        expanded, 
        handleChange,
      
      }}
    >
      {children}
    </LogicContext.Provider>
  );
};

export { LogicProvider };
export default LogicContext;
// Aquí puedes definir la lógica que quieras compartir
