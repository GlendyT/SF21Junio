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
          History
        </h2>
        <div className="flex flex-row max-sm:flex max-sm:flex-wrap px-4 py-2  items-center justify-center top-grid">
          {information.map((info) => (
            <div
              key={info.id}
              className="grid grid-cols-2 grid-rows-2 py-2 gap-4"
            >
              {info.description}
              <h2 className="text-orange-400 font-bold text-2xl">
                Sociedad Fememina 21 de Junio
              </h2>

              <Image
                src={info.image}
                alt="image"
                className="col-start-2 row-start-2"
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
