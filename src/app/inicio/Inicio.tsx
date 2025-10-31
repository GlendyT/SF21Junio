"use client";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { useLogic } from "@/hooks/useLogic";
import { cherry, playball, poppins } from "@/utils/Fonts";

gsap.registerPlugin(ScrollTrigger);

const Inicio = () => {
  const { isTablet, isMobile } = useLogic() || {
    isTablet: false,
    isMobile: false,
  };

  const heroBgRef = useRef<HTMLImageElement>({} as HTMLImageElement);
  const heroSectionRef = useRef<HTMLElement>({} as HTMLElement);
  const heroTitleRef = useRef<HTMLDivElement>({} as HTMLDivElement);

  useGSAP(() => {
    if (heroBgRef.current && heroSectionRef.current) {
      gsap.set(heroBgRef.current, {
        scale: 0,
        opacity: 0,
        transformOrigin: "center center",
      });

      gsap.to(heroBgRef.current, {
        scale: 1.3,
        opacity: 1,
        duration: 2.5,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: heroSectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play reverse play reverse",
        },
      });
    }
  }, []);

  useGSAP(() => {
    if (heroTitleRef.current) {
      gsap.set(".hero-title h1", {
        y: 50,
        opacity: 0,
      });

      gsap.to(".hero-title h1", {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: heroTitleRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play reverse play reverse",
        },
      });
    }
  }, []);



  return (
    <section
      ref={heroSectionRef}
      id="inicio"
      className="flex items-center justify-center w-full min-h-screen bg-gradient-to-b from-[#5ae9cc]/60 via-[#ed9146]/30 to-[#f99c5e]/60 to-99%"
    >
      <div className="flex flex-row w-full items-center justify-center gap-6 max-sm:flex-col">
        <div
          id="hero-key"
          className="flex items-center justify-center relative"
        >
          <Image
            ref={heroBgRef}
            src="/bglogo.webp"
            width={isMobile ? 500 : isTablet ? 700 : 950}
            height={isMobile ? 500 : isTablet ? 700 : 950}
            alt="Background Logo"
            className="absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          />
          <Image
            id="hero-logo"
            src="/main logo.webp"
            width={isMobile ? 250 : isTablet ? 320 : 400}
            height={isMobile ? 125 : isTablet ? 160 : 200}
            alt="Main Logo"
            className="relative z-20"
          />
        </div>
        <div
          ref={heroTitleRef}
          className="space-y-0 text-center w-1/2 items-center justify-center px-8 hero-title max-sm:w-full"
        >
          <h1
            className={`text-9xl max-sm:text-7xl  max-sm:w-full  max-sm:text-center inline-block bg-gradient-to-b from-red-600 via-red-500 to-orange-400 bg-clip-text  font-extrabold text-transparent  ${cherry.className} `}
            style={{
              textShadow: "  4px 8px 4px rgba(0, 0, 0, 0.3)",
            }}
          >
            SOCIEDAD

          </h1>
          <h1
            className={`text-7xl font-extrabold max-sm:text-5xl  max-sm:w-full  max-sm:text-center text-red-600 ${playball.className} `}
            style={{
              textShadow: "  10px 8px 6px rgba(59, 3, 3, 0.3)",
            }}
          >
            Femenina
          </h1>
          <h1
            className={`text-[#1d4116] text-md max-sm:text-xs  max-sm:w-full font-extrabold  max-sm:text-center ${poppins.className}`}
          >
            21 de Junio
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Inicio;
