import React from "react";
import { events } from "./data/events";
import GlowCard from "@/components/GlowCard";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Experencia = () => {
  useGSAP(() => {
    gsap.utils.toArray(".timeline-card").forEach((card) => {
      gsap.from(card as Element, {
        xPercent: -100,
        opacity: 0,
        transformOrigin: "left left",
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: card as Element,
          start: "top 80%",
        },
      });
    });

    gsap.to(".timeline", {
      transformOrigin: "bottom bottom",
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: ".timeline",
        start: "top center",
        end: "70% center",
        onUpdate: (self) => {
          gsap.to(".timeline", {
            scaleY: 1 - self.progress,
          });
        },
      },
    });

    gsap.utils.toArray(".expText").forEach((text) => {
      gsap.from(text as Element, {
        xPercent: 0,
        opacity: 0,
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: text as Element,
          start: "top 60%",
        },
      });
    });
  }, []);
  return (
    <section className="w-full md:mt-4 xl:px-0 px-5 md:px-10  mt-10">
      <div className=" w-full h-full md:px-20 px-5">
        <h1 className="text-4xl font-extrabold text-center">Eventos</h1>

        <div className="mt-24 relative">
          <div className="relative z-40 xl:space-y-32 space-y-10">
            {events.map((card, index) => (
              <div
                className="flex flex-col-reverse xl:flex-row xl:gap-20 gap-10 justify-between"
                key={card.id}
              >
                <div className="xl:w-2/6">
                  <GlowCard card={card} index={index}>
                    <div className="">
                      <Image
                        src={card.image}
                        alt={card.title}
                        width={400}
                        height={200}
                        className="rounded-lg"
                      />
                    </div>
                  </GlowCard>
                </div>

                <div className=" xl:w-4/6">
                  <div className="flex items-start">
                    <div className="timeline-wrapper absolute top-0 xl:left-[35.5vw] md:left-10 left-5 h-full flex justify-center">
                      <div className=" timeline absolute z-30 h-[110%] -top-10 w-14 md:w-28 bg-white"/>
                      <div className="gradient-line w-2 h-full" />
                    </div>

                    <div className="expText flex xl:gap-20 md:gap-10 gap-5 relative z-20">
                      <div className="md:size-20 size-10 flex-none rounded-full flex justify-center items-center md:-translate-y-7 border border-black-50 bg-white">
                        <Image
                          src="/logo2.png"
                          alt="logo"
                          width={50}
                          height={50}
                        />
                      </div>

                      <div>
                        <h1 className="font-semibold text-3xl">{card.title}</h1>
                        <p className="my-5 text-white-50">{card.date}</p>
                        <p className="text-[#839cb5] italic">
                          
                        </p>
                        <ul className="list-disc ms-5 mt-5 flex flex-col gap-5 text-white-50">
                          {card.story}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experencia;
