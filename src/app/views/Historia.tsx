"use client";

import { information } from "@/constants/information";
import Image from "next/image";

export default function Historia() {
  return (
    <section
      id="historia"
      className="flex flex-col h-full items-center justify-center sm:min-h-screen px-8 max-sm:px-0 gap-8 sm:gap-12"
    >
      {" "}
      <h1 className="text-2xl text-[#551f12] font-extrabold uppercase">historia</h1>
      <div className="flex flex-col w-full max-w-screen-lg h-auto items-center justify-center">
        <div className="h-full w-full">
          {information.map((info) => (
            <div key={info.id} className="relative w-full ">
              <Image
                src={info.image}
                alt=""
                width={600}
                height={500}
                className="rounded-xl h-[450px] object-cover max-sm:rounded-sm"
              />

              <div className="relative md:absolute md:left-[75%] md:transform md:-translate-x-1/2 h-auto bottom-4 w-[60%] max-sm:w-[90%] max-sm:h-50 mx-auto -mt-40  text-black rounded-xl p-10 shadow-xl backdrop-blur-lg bg-gradient-to-b from-[#65d3bd]/90 via-[#da6c13]/50 to-[#9a430a]/70">
                <p className="text-sm text-center">{info.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
