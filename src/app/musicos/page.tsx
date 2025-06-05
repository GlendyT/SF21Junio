import React from "react";
import { musicians } from "./Data/musicians";
import Image from "next/image";

const Musicos = () => {
  return (
    <section className="flex items-center justify-center min-h-screen bg-gradient-to-b from-[#1bb092] via-[#da6c13] to-[#9a430a] to-99%">
      <div>
        {musicians.map((musicos) => (
          <div key={musicos.id}>
            <Image
              src={musicos.image}
              alt={musicos.name}
              width={500}
              height={500}
            />
            <h1>{musicos.name}</h1>
            <p>{musicos.history}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Musicos;
