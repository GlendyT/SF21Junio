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
        ".musician-card",
        {
          opacity: 0,
          y: 50,
          duration: 1,
          ease: "power1.inOut",
          stagger: 0.2,
        },
        "-=0.5"
      );
  });
  const { isMobile, isTablet } = useLogic();

  return (
    <section
      id="musicos"
      className="flex flex-col items-center justify-center min-h-screen px-8 max-sm:px-0 pt-20 max-lg:px-0 "
    >
      <h2 className="text-4xl font-extrabold text-[#0c2601]">Musicos</h2>
      <div className="flex flex-col w-full px-8 max-sm:px-0 max-lg:px-0   h-auto items-center justify-center">
        <div className="h-full w-full px-2 max-sm:px-0 max-lg:px-0">
          {musicians.map((musicos, index) => (
            <div key={musicos.id} className="musician-card relative w-full ">
              <div className="hidden md:block w-full relative h-[450px]">
                {index % 2 === 0 ? (
                  <>
                    <div className="absolute left-0 top-10 w-3/5 z-10">
                      <div className="rounded-xl py-6 pr-60 max-lg:pr-28 pl-6 h-auto object-cover shadow-xl backdrop-blur-lg bg-gradient-to-b from-[#65d3bd]/90 via-[#da6c13]/50 to-[#9a430a]/70 overflow-auto max-h-[400px]">
                        <h1 className="text-2xl mb-2 font-black">
                          {musicos.name}
                        </h1>
                        <p className="text-base leading-relaxed">
                          {musicos.history}
                        </p>
                        <div className="flex flex-row gap-2 mb-4">
                          {musicos.socialMedia.map((social) => (
                            <Link
                              href={social.url}
                              key={social.id}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-2xl"
                            >
                              <social.icon />
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="absolute right-10 top-0 w-3/6  z-20  ">
                      <YouTubeEmbed
                        videoid={musicos.music}
                        height={isMobile ? 200 : isTablet ? 200 : 400}
                        width={isMobile ? 400 : isTablet ? 470 : 700}
                        params="controls=1&autoplay=0&mute=0&playsinline=1&loop=0"
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="absolute left-0 top-0 w-1/2 z-20  ">
                      <YouTubeEmbed
                        videoid={musicos.music}
                        height={isMobile ? 200 : isTablet ? 200 : 400}
                        width={isMobile ? 400 : isTablet ? 470 : 700}
                        params="controls=1&autoplay=0&mute=0&playsinline=1&loop=0"
                      />
                    </div>
                    {/* Tarjeta de información - Z-index más bajo para que esté "atrás" */}
                    <div className="absolute right-0 top-10 w-3/5 z-10">
                      <div className="rounded-xl py-6 text-end pl-60 pr-6  h-auto object-cover shadow-xl backdrop-blur-lg bg-gradient-to-b from-[#65d3bd]/90 via-[#da6c13]/50 to-[#9a430a]/70 overflow-auto max-h-[400px]">
                        <h1 className="text-2xl mb-2 font-extrabold">
                          {musicos.name}
                        </h1>
                        <p className="text-base leading-relaxed">
                          {musicos.history}
                        </p>
                        <div className="flex flex-row  w-full justify-end gap-2 mb-4">
                          {musicos.socialMedia.map((social) => (
                            <Link
                              href={social.url}
                              key={social.id}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-2xl"
                            >
                              <social.icon />
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>

              {/* Layout para móvil - siempre información arriba y video abajo */}
              <div className="md:hidden w-full mb-40">
                <div className="rounded-xl px-6 pb-10 pt-6 h-auto object-cover max-sm:rounded-sm shadow-xl backdrop-blur-lg bg-gradient-to-b from-[#65d3bd]/90 via-[#da6c13]/50 to-[#9a430a]/70 mb-4 overflow-auto max-h-[400px]">
                  <h1 className="text-2xl max-sm:text-base mb-2">
                    {musicos.name}
                  </h1>
                  <div className="flex flex-row gap-2 mb-4">
                    {musicos.socialMedia.map((social) => (
                      <Link
                        href={social.url}
                        key={social.id}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-3xl max-sm:text-base"
                      >
                        <social.icon />
                      </Link>
                    ))}
                  </div>
                  <p className="text-base leading-relaxed">{musicos.history}</p>
                </div>
                <div className="relative md:absolute md:left-[75%] md:transform md:-translate-x-1/2 h-[480px] top-28 w-[60%] max-sm:w-[90%] max-sm:h-50 mx-auto -mt-40">
                  <div className="rounded-xl h-auto">
                    <YouTubeEmbed
                      videoid={musicos.music}
                      height={isMobile ? 200 : 300}
                      width={isMobile ? 350 : 400}
                      params="controls=1&autoplay=0&mute=0&playsinline=1&loop=0"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Musicos;
