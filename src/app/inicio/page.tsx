"use client";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Inicio = () => {
  const heroBgRef = useRef<HTMLImageElement>(null);
  const heroSectionRef = useRef<HTMLElement>(null);
  const heroTitleRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (heroBgRef.current && heroSectionRef.current) {
      // Set initial state
      gsap.set(heroBgRef.current, {
        scale: 0,
        opacity: 0,
        transformOrigin: "center center",
      });

      // Create ScrollTrigger animation
      ScrollTrigger.create({
        trigger: heroSectionRef.current,
        start: "top 80%",
        end: "bottom 20%",
        onEnter: () => {
          gsap.to(heroBgRef.current, {
            scale: 1.3,
            opacity: 1,
            duration: 2.5,
            ease: "back.out(1.7)",
          });
        },
        onLeave: () => {
          gsap.to(heroBgRef.current, {
            scale: 0,
            opacity: 0,
            duration: 1,
            ease: "power2.inOut",
          });
        },
        onEnterBack: () => {
          gsap.to(heroBgRef.current, {
            scale: 1.3,
            opacity: 1,
            duration: 2.5,
            ease: "back.out(1.7)",
          });
        },
        onLeaveBack: () => {
          gsap.to(heroBgRef.current, {
            scale: 0,
            opacity: 0,
            duration: 1,
            ease: "power2.inOut",
          });
        },
      });
    }
  }, []);

  useGSAP(() => {
    if (heroTitleRef.current) {
      // Set initial state for titles
      gsap.set(".hero-title h1", {
        y: 50,
        opacity: 0,
      });

      // Create ScrollTrigger animation
      ScrollTrigger.create({
        trigger: heroTitleRef.current,
        start: "top 80%",
        end: "bottom 20%",
        onEnter: () => {
          gsap.to(".hero-title h1", {
            y: 0,
            opacity: 1,
            stagger: 0.2,
            duration: 1,
            ease: "power2.inOut",
          });
        },
        onLeave: () => {
          gsap.to(".hero-title h1", {
            y: -50,
            opacity: 0,
            stagger: 0.1,
            duration: 0.8,
            ease: "power2.inOut",
          });
        },
        onEnterBack: () => {
          gsap.to(".hero-title h1", {
            y: 0,
            opacity: 1,
            stagger: 0.2,
            duration: 1,
            ease: "power2.inOut",
          });
        },
        onLeaveBack: () => {
          gsap.to(".hero-title h1", {
            y: 50,
            opacity: 0,
            stagger: 0.1,
            duration: 0.8,
            ease: "power2.inOut",
          });
        },
      });
    }
  }, []);

  return (
    <section
      ref={heroSectionRef} 
      id="inicio"
      className="flex items-center justify-center w-full min-h-screen bg-gradient-to-b from-[#1bb092]/100 via-[#da6c13]/40 to-[#9a430a]/60 to-99%"
    >
      <div className="flex flex-row w-full items-center justify-center gap-6 max-sm:flex-col">
        <div
          id="hero-key"
          className="flex items-center justify-center relative"
        >
          <Image
            ref={heroBgRef}
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
        <div
          ref={heroTitleRef}
          className="flex flex-col w-1/2 items-start justify-center px-8 hero-title max-sm:w-full"
        >
          <h1 className="text-5xl font-semibold max-sm:text-2xl  max-sm:w-full  max-sm:text-center">
            Sociedad Femenina
          </h1>
          <h1 className="text-[#1d4116] text-8xl max-sm:text-6xl  max-sm:w-full font-extrabold  max-sm:text-center">
            {" "}
            21 de Junio
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Inicio;
