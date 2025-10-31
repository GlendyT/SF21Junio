"use client";
import { videos } from "@/constants/photos";
import { AllProviderProps, PageContextType } from "@/types/types";
import { useEffect, useMemo, useRef, useState } from "react";
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

  //TODO: VIDEO CARRUSEL LOGIC

  // Carousel 1
  const carousel1Ref = useRef<HTMLDivElement>(null);
  const [scrollPosition1, setScrollPosition1] = useState(0);
  const [isScrolling1, setIsScrolling1] = useState(false);
  
  // Carousel 2
  const carousel2Ref = useRef<HTMLDivElement>(null);
  const [scrollPosition2, setScrollPosition2] = useState(0);
  const [isScrolling2, setIsScrolling2] = useState(false);
  
  // Common modal state for both carousels
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentVideoData, setCurrentVideoData] = useState<{
    id: number;
    name: string;
  } | null>(null);

  // Videos en orden normal para el primer carrusel
  const infiniteVideos1 = useMemo(() => {
    return [...videos, ...videos, ...videos];
  }, []);

  // Videos en orden inverso para el segundo carrusel
  const infiniteVideos2 = useMemo(() => {
    const reversedVideos = [...videos].reverse();
    return [...reversedVideos, ...reversedVideos, ...reversedVideos];
  }, []);

  // Function to scroll the carousel
  const scroll = (direction: "left" | "right", carouselId: 1 | 2) => {
    const carouselRef = carouselId === 1 ? carousel1Ref : carousel2Ref;
    const isScrolling = carouselId === 1 ? isScrolling1 : isScrolling2;
    const setIsScrolling = carouselId === 1 ? setIsScrolling1 : setIsScrolling2;
    const setScrollPosition = carouselId === 1 ? setScrollPosition1 : setScrollPosition2;

    if (!carouselRef.current || isScrolling) return;

    setIsScrolling(true);

    const { scrollLeft, clientWidth, scrollWidth } = carouselRef.current;
    const scrollAmount = clientWidth * 0.8; // Scroll by 80% of the visible width

    let newScrollPosition =
      direction === "left"
        ? scrollLeft - scrollAmount
        : scrollLeft + scrollAmount;

    // Handle the infinite scrolling effect
    if (newScrollPosition < 0) {
      // If we're trying to scroll before the beginning, jump to the equivalent position in the middle set
      newScrollPosition = scrollWidth / 3 + newScrollPosition;
      carouselRef.current.scrollLeft = newScrollPosition;
    } else if (newScrollPosition > (scrollWidth * 2) / 3) {
      // If we're trying to scroll past the end of the middle set, jump to the equivalent position in the first set
      newScrollPosition = newScrollPosition - scrollWidth / 3;
      carouselRef.current.scrollLeft = newScrollPosition;
    } else {
      // Normal scrolling within the middle set
      carouselRef.current.scrollTo({
        left: newScrollPosition,
        behavior: "smooth",
      });
    }

    setScrollPosition(newScrollPosition);

    // Reset isScrolling after animation completes
    setTimeout(() => {
      setIsScrolling(false);
    }, 500);
  };

  // Initialize scroll position to the middle set for both carousels
  useEffect(() => {
    // Necesitamos un pequeño retraso para asegurar que los elementos estén completamente cargados
    setTimeout(() => {
      // Carousel 1 - Mostrar el 25% del primer video
      if (carousel1Ref.current) {
        const initialScrollPosition = carousel1Ref.current.scrollWidth / 3;
        // Ancho estimado de un video (370px para desktop) + margen (gap de 6)
        const videoWidth = 370 + 24; // Ancho del video + gap aproximado
        
        // Calculamos cuánto necesitamos desplazar para mostrar solo el 25% del primer video
        // Queremos que el 75% del primer video esté fuera de la vista (a la izquierda)
        const offset = videoWidth * 0.75;
        
        // Aplicamos la posición inicial ajustada
        carousel1Ref.current.scrollLeft = initialScrollPosition - offset;
        setScrollPosition1(initialScrollPosition - offset);
      }

      // Carousel 2 - Mostrar el 75% del primer video
      if (carousel2Ref.current) {
        const initialScrollPosition = carousel2Ref.current.scrollWidth / 3;
        // Ancho estimado de un video (370px para desktop) + margen (gap de 6)
        const videoWidth = 370 + 24; // Ancho del video + gap aproximado
        
        // Calculamos cuánto necesitamos desplazar para mostrar el 75% del primer video
        // Queremos que el 25% del primer video esté fuera de la vista (a la izquierda)
        const offset = videoWidth * 0.25;
        
        // Aplicamos la posición inicial ajustada
        carousel2Ref.current.scrollLeft = initialScrollPosition - offset;
        setScrollPosition2(initialScrollPosition - offset);
      }
    }, 200); // Pequeño retraso para asegurar que todo esté renderizado
  }, []);

  // Update scroll position state when scrolling for Carousel 1
  useEffect(() => {
    const handleScroll = () => {
      if (carousel1Ref.current) {
        setScrollPosition1(carousel1Ref.current.scrollLeft);
      }
    };

    const carousel = carousel1Ref.current;
    if (carousel) {
      carousel.addEventListener("scroll", handleScroll);
      return () => carousel.removeEventListener("scroll", handleScroll);
    }
  }, []);

  // Update scroll position state when scrolling for Carousel 2
  useEffect(() => {
    const handleScroll = () => {
      if (carousel2Ref.current) {
        setScrollPosition2(carousel2Ref.current.scrollLeft);
      }
    };

    const carousel = carousel2Ref.current;
    if (carousel) {
      carousel.addEventListener("scroll", handleScroll);
      return () => carousel.removeEventListener("scroll", handleScroll);
    }
  }, []);

  // Handle infinite scroll repositioning for Carousel 1
  useEffect(() => {
    if (!carousel1Ref.current || isScrolling1) return;

    const { scrollWidth } = carousel1Ref.current;
    const oneThird = scrollWidth / 3;
    const twoThirds = (scrollWidth * 2) / 3;

    // If we've scrolled to the end of the first set or the beginning of the third set,
    // instantly reposition to the equivalent spot in the middle set
    if (scrollPosition1 < oneThird * 0.1) {
      carousel1Ref.current.scrollLeft = oneThird + scrollPosition1;
      setScrollPosition1(oneThird + scrollPosition1);
    } else if (scrollPosition1 > twoThirds * 0.9) {
      carousel1Ref.current.scrollLeft = scrollPosition1 - oneThird;
      setScrollPosition1(scrollPosition1 - oneThird);
    }
  }, [scrollPosition1, isScrolling1]);

  // Handle infinite scroll repositioning for Carousel 2
  useEffect(() => {
    if (!carousel2Ref.current || isScrolling2) return;

    const { scrollWidth } = carousel2Ref.current;
    const oneThird = scrollWidth / 3;
    const twoThirds = (scrollWidth * 2) / 3;

    // If we've scrolled to the end of the first set or the beginning of the third set,
    // instantly reposition to the equivalent spot in the middle set
    if (scrollPosition2 < oneThird * 0.1) {
      carousel2Ref.current.scrollLeft = oneThird + scrollPosition2;
      setScrollPosition2(oneThird + scrollPosition2);
    } else if (scrollPosition2 > twoThirds * 0.9) {
      carousel2Ref.current.scrollLeft = scrollPosition2 - oneThird;
      setScrollPosition2(scrollPosition2 - oneThird);
    }
  }, [scrollPosition2, isScrolling2]);

  // Handle video click
  const handleVideoClick = (
    videoId: string,
    videoData: { id: number; name: string }
  ) => {
    setActiveVideo(videoId);
    setCurrentVideoData(videoData);
    setModalOpen(true);
    // Prevent scrolling when modal is open
    document.body.style.overflow = 'hidden';
  };

  // Close modal
  const closeModal = () => {
    setModalOpen(false);
    setActiveVideo(null);
    setCurrentVideoData(null);
    // Restore scrolling when modal is closed
    document.body.style.overflow = 'auto';
  };

  // Ensure scrolling is restored when component unmounts
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <PageContext.Provider
      value={{
        scrollToSection,
        isScrolled,
        carousel1Ref,
        carousel2Ref,
        activeVideo,
        setActiveVideo,
        scroll,
        infiniteVideos1,
        infiniteVideos2,
        handleVideoClick,
        modalOpen,
        closeModal,
        currentVideoData,
        setCurrentVideoData,
        scrollPosition1,
        setScrollPosition1,
        scrollPosition2,
        setScrollPosition2,
        isScrolling1,
        setIsScrolling1,
        isScrolling2,
        setIsScrolling2,
      }}
    >
      {children}
    </PageContext.Provider>
  );
};

export { PageProvider };
export default PageContext;
