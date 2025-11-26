"use client";
import React from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { sociedadFemenina } from "@/utils/data/sf21junio";

const Participantes = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".participant-card",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
        stagger: 0.2,
        scrollTrigger: {
          trigger: "#participantes",
          start: "-50% center",
          end: "bottom 20%",
          toggleActions: "play pause resume reset",
         
        },
      }
    );
  });

  const participants = sociedadFemenina?.participants || [];


  return (
    <section
      id="participantes"
      className="flex items-center justify-center min-h-screen px-3  "
    >
      <div className="flex flex-row ">
        <div className=" flex flex-wrap items-center justify-center">
          {participants.map((solos) => (
            <div
              key={solos.id}
              className="flex flex-col items-center justify-center participant-card"
            >
              <Image
                src={solos.image}
                alt={solos.name}
                width={200}
                height={200}
              />
              {solos.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Participantes;
