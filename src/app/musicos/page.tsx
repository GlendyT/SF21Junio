"use client"
import React from "react";
import { musicians } from "./Data/musicians";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";


const Musicos = () => {

    useGSAP(() => {
    const titleSplit = SplitText.create("#musicos h2", {
      type: "words",
    });

    const scrollTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#musicos",
        start: "top center",
        toggleActions: "play pause resume reset",
      },
    });

    scrollTimeline
      .from(titleSplit.words, {
        opacity: 0,
        duration: 1,
        yPercent: 100,
        ease: "expo.out",
        stagger: 0.02,
      })

      .from(".top-grid div", {
        opacity: 0,
        duration: 1,
        ease: "power1.inOut",
        stagger: 0.04,
      }, "-=0.5");
  });




  return (
    <section id="musicos" className="flex flex-col items-center justify-center min-h-screen gap-2">
      <h2 className="text-4xl font-extrabold text-[#0c2601]">Musicos</h2>
      <div className="flex flex-row max-sm:flex max-sm:flex-wrap px-4  gap-2 items-center justify-center top-grid ">
        {musicians.map((musicos) => (
          <div key={musicos.id} className=" flex flex-col justify-center items-center text-center gap-2 px-2">
            <Image
              src={musicos.image}
              alt={musicos.name}
              width={600}
              height={600}
              className="rounded-xl"
            />
            <h1 className="text-2xl">{musicos.name}</h1>
            <p className="text-sm">{musicos.history}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Musicos;
