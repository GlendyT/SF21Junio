"use client";
import { useLayoutEffect, useRef } from "react";
import { OriginGallery, photos } from "./Data/photos";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Flip } from "gsap/Flip";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

const Album = () => {
  const GalleryRef = useRef(null);
  const tl = useRef<gsap.core.Timeline | null>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger, Flip);
    ScrollTrigger.normalizeScroll(true);

    const ctx = gsap.context(() => {
      if (tl.current) {
        tl.current.kill();
        gsap.set(GalleryRef.current, { clearProps: "all" });
      }

      tl.current = gsap.timeline({
        scrollTrigger: {
          trigger: GalleryRef.current,
          endTrigger: GalleryRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
      });
      tl.current.add(
        tl.current.from(".center-text", {
          opacity: 0.2,
          scale: 0.8,
          y: 80,
          stagger: {
            amount: 0.1,
            from: "start",
          },
        })
      );
    }, GalleryRef);
    OriginGallery.forEach((item) => {
      const state = Flip.getState(`.${item.flipId}-origin`);

      if (tl.current) {
        tl.current.add(
          Flip.from(state, {
            targets: `.${item.flipId}-target`,
            scale: false,
            stagger: {
              amount: 0,
              from: "start",
            },
            duration: 0.3,
          }),
          "-=80%"
        );
      }
    });
    return () => ctx.revert();
  }, []);
  return (
    <section
      ref={GalleryRef}
      className="w-full h-[300vh] relative  "
      id="album"
    >
      <div className="sticky top-0 flex flex-col items-center justify-center w-full h-screen ">
        <div className="origin-wrapper absolute w-[48%] border-green-500">
          <div className="relative pt-[84%] w-full  border-blue-400">
            {OriginGallery.map((item) => {
              return (
                <div
                  key={item.flipId}
                  data-flip-id={item.flipId}
                  className={twMerge(
                    "origin-div absolute aspect-auto w-[34%] h-1/2 border-white",
                    item.props,
                    `${item.flipId}-origin`
                  )}
                />
              );
            })}
          </div>
        </div>
        <div
          id="origin wrapper"
          className="w-full h-full border-red-500 origin-wrapper"
        >
          {photos.map((item) => {
            return (
              <div
                key={item.flipId}
                data-flip-id={item.flipId}
                className={twMerge(
                  "origin-div absolute aspect-auto ",
                  item.props,
                  `${item.flipId}-target`
                )}
              >
                <Image
                  src={item.image}
                  alt="Gallery Image"
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 20vw"
                  className="object-cover"
                />
                <p className="text-xs text-white absolute bottom-0 left-0 p-2">
                  {item.creditos}
                </p>
              </div>
            );
          })}
        </div>
        <div className="absolute ">
          <h3 className="text-5xl font-extrabold center-text  ">
            Sociedad Femenina
          </h3>
          <p className="text-lg text-center text-black center-text font-semibold">
            21 de Junio 2025
          </p>
        </div>
      </div>
    </section>
  );
};

export default Album;
