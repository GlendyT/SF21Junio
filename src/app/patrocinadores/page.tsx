import React from "react";
import { sponsors } from "./Data/sponsorship";
import Image from "next/image";

const Patrocinadores = () => {
  return (
    <div className=" my-2 max-sm:my-4 relative ">
      <div className="w-36 max-sm:w-24 h-full absolute bottom-0 z-20" />
      <div className="w-36 max-sm:w-24  h-full absolute bottom-0 z-20" />
      <div className="w-[99dvw] overflow-hidden relative h-40">
        <div className="flex items-center w-[200%] h-[100%] max-sm:h-[60%] absolute overflow-hidden md:gap-2 gap-5 marqueeanimation ">
          {sponsors.map((sponsor) => (
            <div
              key={sponsor.id}
              className="flex-none flex-center w-32 max-sm:w-16 float-left "
            >
              <Image
                src={sponsor.image}
                alt={sponsor.name}
                width={100}
                height={100}
              />
            </div>
          ))}
          {sponsors.map((sponsor) => (
            <div
              key={sponsor.id}
              className="flex-none flex-center md:w-30 w-32 float-left "
            >
              <Image
                src={sponsor.image}
                alt={sponsor.name}
                width={100}
                height={100}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Patrocinadores;
