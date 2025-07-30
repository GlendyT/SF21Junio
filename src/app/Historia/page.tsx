"use client";

import Image from "next/image";
import { information } from "./data/information";

export default function Historia() {
  return (
    <section
      id="historia"
      className="flex flex-col items-center justify-center min-h-screen gap-2"
    >
      <div>
        <h2 className="text-4xl font-extrabold text-center text-[#0c2601]">
          Historia
        </h2>

        <div className="flex flex-row max-sm:flex max-sm:flex-wrap px-4 py-2 items-center justify-center ">
          {information.map((info) => (
            <div
              key={info.id}
              className="grid grid-cols-2 md:grid-cols-2 gap-4"
            >
              <h1 className="text-orange-4 text-sm sm:text-2xl rounded-2xl md:text-3xl w-full p-6 bg-gradient-to-b from-[#a1e7d9]/100 to-[#9a430a]/60 to-99%">
                {" "}
                {info.description}{" "}
              </h1>

              <Image
                src={info.image}
                alt="image"
                className="col-start-2 row-start-2 rounded-2xl"
                width={600}
                height={600}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
