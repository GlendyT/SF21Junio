"use client";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import React from "react";
import { useGSAP } from "@gsap/react";
//import { animateWithGsap } from "@/utils/Animations";

gsap.registerPlugin(ScrollTrigger)

const Inicio = () => {

  useGSAP(() => {
    const tl = gsap.timeline({
      ease: "power2.out",
      scrollTrigger: {

        scrub: 1,
      },
    });

    tl.to("#hero-key", { duration: 1 })
      .to("#hero-logo", { scale: -0.2, duration: 1 }, "<")
      .to("#hero-cta", { opacity: 0, scale: 2 }, "<");
  }, []);


  return (
    <section className="flex items-center justify-center w-full bg-gradient-to-b from-[#1bb092]/100 via-[#da6c13]/40 to-[#9a430a]/60 to-99%">
      <picture id="hero-key" className=" flex items-center justify-center min-h-screen scale-125">
        {/* <Image
          id="hero"
          src="/bglogo.webp"
          width={100}
          height={100}
          alt="Logo"
          className="absolute "
        />*/}
        <Image
          id="hero-logo"
          src="/main logo.webp"
          width={300}
          height={100}
          alt="Logo"
          className=""
        />
        <Image
          id="hero-cta"
          src="/bglogo.webp"
          width={50}
          height={50}
          alt="Logo"
          className=" absolute"
        />

      </picture>
    </section>
  );
};

export default Inicio;
