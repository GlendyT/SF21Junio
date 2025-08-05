"use client";
import { useGSAP } from "@gsap/react";
import gsap, { SplitText } from "gsap/all";
import * as React from "react";
import { about } from "./Data/aboutus";
import Image from "next/image";
import Acordion from "@/components/Acordion";

export default function Nosotras() {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  useGSAP(() => {
    const titleSplit = SplitText.create("#nosotras h1", {
      type: " words",
    });

    const scrollTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#nosotras",
        start: "top center",
      },
    });

    scrollTimeline.from(titleSplit.words, {
      opacity: 0,
      duration: 1,
      yPercent: 100,
      ease: "expo.out",
      stagger: 0.02,
    });
  });

  useGSAP(() => {
    const heroSplit = new SplitText(".title", { type: "chars, words" });
    const paragraphSplit = new SplitText(".subtitle", { type: "lines" });

    heroSplit.chars.forEach((char) => char.classList.add("text-gradient"));
    gsap.from(heroSplit.chars, {
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.04,
    });

    gsap.from(paragraphSplit.lines, {
      opacity: 0,
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.06,
      delay: 1,
      
    });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#nosotras",
          start: "-30% top",
          end: "bottom top",
          scrub: true,
          toggleActions: "play reverse play reverse",
        },
      })

      .to("#right-leaf", { y: 300 }, 0)
      .to("#left-leaf", { y: -200 }, 0);
  }, []);

  return (
    <section
      className="flex flex-col items-center px-8 h-full justify-center min-h-screen   "
      id="nosotras"
    >
      <div className="w-full overflow-none h-auto flex flex-row items-center justify-center max-sm:px-2 px-10 ">
        <div className="flex flex-row items-center w-full justify-between gap-5 overflow-none">
          <h1 className="text-[#551f12] font-bold  text-4xl max-sm:text-xs flex flex-col w-full  ">
            <span className="text-5xl font-extrabold max-sm:text-2xl text-[#24511c]">
              {" "}
              Sociedad Femenina <br /> 21 de Junio
            </span>{" "}
            Comalapa
          </h1>

          <Image
            src="/logo2.png"
            alt="logo"
            width={90}
            height={90}
            className="max-sm:w-14"
          />
        </div>
      </div>

      <div className="flex flex-row flex-wrap px-8 max-sm:px-1 items-center justify-center ">
        {about.map((sobrenosotras) => (
          <div
            key={sobrenosotras.id}
            className="w-1/2 max-sm:w-full px-2 max-md:px-1 max-sm:px-0.5 p-0.5"
          >
            <Acordion sobrenosotras={sobrenosotras} handleChange={handleChange} expanded={expanded} />
          </div>
        ))}
      </div>

      <Image
        id="right-leaf"
        src="/bglogo.webp"
        width={300}
        height={300}
        alt="Background Logo"
        className=" absolute left-0 -z-10  w-1/4  opacity-60  "
      />
      <Image
        id="left-leaf"
        src="/bglogo.webp"
        width={200}
        height={200}
        alt="Background Logo"
        className="absolute right-0 -z-10 opacity-40 "
      />
    </section>
  );
}
