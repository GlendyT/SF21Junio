"use client";

import Image from "next/image";
import { information } from "./data/information";

export default function Historia() {
  return (
      <section id="historia" className="flex flex-col items-center justify-center min-h-screen px-8 sm:px-8">
       
          <div className="flex flex-col w-full max-w-screen-lg md:px-8">
            {information.map((info) => (
              <div key={info.id} className="relative w-full ">
                <Image
                  src={info.image}
                  alt=""
                  width={600}
                  height={500}
                  className="rounded-xl h-[500px]"
                />
                 
                <div className="relative md:absolute md:left-[75%] md:transform md:-translate-x-1/2 h-[250px] md:h-[550px] bottom-4 w-[80%] md:w-[50%] mx-auto -mt-40  text-black rounded-xl p-10 shadow-xl backdrop-blur-xl bg-gradient-to-b from-[#65d3bd]/90 via-[#da6c13]/50 to-[#9a430a]/70">
                  <p className="text-sm text-center">{info.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
  );
}
