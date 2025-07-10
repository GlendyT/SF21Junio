"use client";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Inicio = () => {
  useGSAP(() => {
    const animateElements = () => {
      const heroBg = document.getElementById("hero-bg");
      if (heroBg) {
        gsap.set([heroBg], {
          scale: 0,
          opacity: 0,
          transformOrigin: "center center",
        });
        const tl = gsap.timeline({
          delay: 1,
          onStart: () => console.log("Timeline iniciado"),
          onComplete: () => console.log("Animaciones completadas"),
        });
        tl.to(heroBg, {
          scale: 1.3,
          opacity: 1,
          duration: 3,
          ease: "back.out(1.7)",
          onStart: () => console.log("Animando hero-bg"),
          onComplete: () => console.log("hero-bg completado"),
        });
      }
    };
    const timeoutId = setTimeout(animateElements, 500);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <section className="flex items-center justify-center w-full min-h-screen bg-gradient-to-b from-[#1bb092]/100 via-[#da6c13]/40 to-[#9a430a]/60 to-99%">
      <div className="flex flex-row w-full items-center justify-center gap-2">
        <div
          id="hero-key"
          className="flex items-center justify-center relative"
        >
          <Image
            id="hero-bg"
            src="/bglogo.webp"
            width={950}
            height={950}
            alt="Background Logo"
            className="absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          />
          <Image
            id="hero-logo"
            src="/main logo.webp"
            width={400}
            height={200}
            alt="Main Logo"
            className="relative z-20"
          />
        </div>
        <div className="flex w-1/2 items-center justify-center px-8">
          <h1 className="flex flex-col items-start text-4xl">
            Sociedad Femenina
            <span className="text-[#1d4116] text-8xl"> 21 de Junio</span>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Inicio;
