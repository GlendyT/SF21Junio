import React from "react";
import { musicians } from "./Data/musicians";
import Image from "next/image";

const Musicos = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-[#1bb092] via-[#da6c13] to-[#9a430a] to-99% px-44">
      <div className="flex flex-row max-sm:flex max-sm:flex-wrap px-4  gap-2 items-center justify-center">
        {musicians.map((musicos) => (
          <div key={musicos.id} className=" flex flex-col justify-center items-center text-center gap-2">
            <Image
              src={musicos.image}
              alt={musicos.name}
              width={100}
              height={100}
            />
            <h1 className="text-4xl">{musicos.name}</h1>
            <p className="text-xl">{musicos.history}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Musicos;
