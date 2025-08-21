"use client";
import React from "react";
import { musicians } from "./Data/musicians";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import Link from "next/link";
import { YouTubeEmbed } from "@next/third-parties/google";
import { useLogic } from "@/hooks/useLogic";

const Musicos = () => {
  useGSAP(() => {
    const titleSplit = SplitText.create("#musicos h2", {
      type: "words",
    });

    const scrollTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#musicos",
        start: "-50% center",
        end: "bottom",
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

      .from(
        ".top-grid div",
        {
          opacity: 0,
          duration: 1,
          ease: "power1.inOut",
          stagger: 0.04,
        },
        "-=0.5"
      );
  });
  const { isMobile, isTablet } = useLogic();

  return (
    <section
      id="musicos"
      className="flex flex-col items-center justify-center min-h-screen gap-2"
    >
      <h2 className="text-4xl font-extrabold text-[#0c2601]">Musicos</h2>
      <div className="flex flex-row  px-4  gap-4 items-center justify-center top-grid ">
        {musicians.map((musicos) => (
          <div
            key={musicos.id}
            className=" flex flex-col justify-center items-center text-center gap-0 px-2 rounded-lg"
          >
            <YouTubeEmbed
              videoid={musicos.music}
              height={isMobile ? 200 : isTablet ? 350 : 350}
              width={isMobile ? 350 : isTablet ? 600 : 600}
              params="controls=1&autoplay=1&mute=0&playsinline=1&loop=0"
            />
            <div className="flex flex-col items-center w-full justify-between">
              <h1 className="text-2xl max-sm:text-base">{musicos.name}</h1>
              <div className="flex flex-row gap-2 ">
                {musicos.socialMedia.map((social) => (
                  <Link
                    href={social.url}
                    key={social.id}
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" text-3xl max-sm:text-base"
                  >
                    <social.icon />
                  </Link>
                ))}
              </div>
              <p>{musicos.history}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Musicos;
