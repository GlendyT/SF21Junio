"use client";
import Image from "next/image";
import React from "react";
import { useGSAP } from "@gsap/react";
import { animateWithGsap } from "@/utils/Animations";

const Inicio = () => {
  useGSAP(() => {
    animateWithGsap(
      "#cta",
      { scale: 6, opacity: 1, ease: "power2.Inout", duration: 1.5 },
      { scrub: 1}
    );
    animateWithGsap(
      "#hero",
      { scale: 8, opacity: 1, ease: "power2.Inout", duration: 3 },
      { scrub: 5.5 }
    );
    // animateWithGsap("#logo", {
    //   y: 0,
    //   opacity: 1,
    //   ease: "power2.Inout",
    //   duration: 1,
    // });
  }, []);

  return (
    <section className="flex items-center justify-center w-full bg-gradient-to-b from-[#1bb092] via-[#da6c13] to-[#9a430a] to-99%">
      <div className=" flex items-center justify-center min-h-screen p-4">
        <Image
          id="hero"
          src="/bglogo.webp"
          width={100}
          height={100}
          alt="Logo"
          className="absolute "
        />
        <Image
          id="cta"
          src="/bglogo.webp"
          width={100}
          height={100}
          alt="Logo"
          className="absolute"
        />
        <Image
          id="logo"
          src="/main logo.webp"
          width={500}
          height={500}
          alt="Logo"
          className="relative"
        />
      </div>
    </section>
  );
};

export default Inicio;
