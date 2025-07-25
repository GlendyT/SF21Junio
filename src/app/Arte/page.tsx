"use client";
import gsap from "gsap/all";
import { useGSAP } from "@gsap/react";
import { useMediaQuery } from "react-responsive";
import Image from "next/image";

const Arte = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  useGSAP(() => {
    const start = isMobile ? "top 20%" : "top top";

    const maskTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#arte",
        start,
        end: "bottom center",
        scrub: 1.5,
        pin: true,
      },
    });

    maskTimeline
      .to(".will-fade", {
        opacity: 0,
        stagger: 0.2,
        ease: "power1.inOut",
      })
      .to(".masked-img", {
        scale: 1.3,
        maskPosition: "center",
        maskSize: "400%",
        duration: 1,
        ease: "power1.inOut",
      })
      .to("#masked-content", { opacity: 1, duration: 1, ease: "power1.inOut" });
  });
  return (
    <div id="arte">
      <div className="min-h-screen mx-auto h-full pt-20">
        <h2 className="will-fade text-black text-center w-full">The ART</h2>
        <div className="flex w-full gap-10 justify-between items-center  content">
          <div className=" w-full h-[60vh]  rounded-4xl overflow-hidden absolute top-0  left-1/2 -translate-x-1/2">
            <Image
              src="/sf21junio.png"
              alt="cocktail"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 masked-img size-full object-contain"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Arte;
