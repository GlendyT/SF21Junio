import React from "react";
import { sponsors } from "./Data/sponsorship";
import Image from "next/image";

const Patrocinadores = () => {
  return (
    <section
      className="flex flex-col  items-center justify-center  min-h-screen  "
      id="patrocinadores"
    >
      <h1 className="text-center text-[#1d4116]">Patrocinadores</h1>
      <div className="flex flex-wrap items-center justify-center gap-2 py-2 px-14">
        {sponsors.map((sponsor) => (
          <div key={sponsor.id}>
            <Image
              src={sponsor.image}
              alt={sponsor.name}
              width={100}
              height={100}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Patrocinadores;
