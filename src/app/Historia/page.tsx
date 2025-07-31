"use client";

import Image from "next/image";
import { information } from "./data/information";

export default function Historia() {
  return (
    <section
      id="historia"
      className="flex flex-col items-center justify-center min-h-screen gap-2 px-8"
    >
      <div className="flex flex-row max-sm:flex max-sm:flex-wrap px-4 gap-2 items-center justify-center">
        {information.map((info) => (
          <div
            key={info.id}
            className="grid grid-cols md:grid-cols-2 sm:grid-cols-1 px-8 gap-6 w-full"
          >
            <h1 className="text-orange-4 text-base sm:text-xl rounded-2xl w-full h-full p-6 bg-gradient-to-b from-[#a1e7d9]/100 to-[#9a430a]/60 text-center">
              {" "}
              {info.description}{" "}
            </h1>

            <Image
              src={info.image}
              alt="image"
              className="w-full h-auto rounded-2xl object-cover md:col-start-2 md:row-start-2"
              width={600}
              height={600}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
