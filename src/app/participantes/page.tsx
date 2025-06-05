import React from "react";
import { participants } from "./Data/participants";
import Image from "next/image";

const Participantes = () => {
  return (
    <section className="flex items-center justify-center min-h-screen  bg-gradient-to-b from-[#9a430a] via-[#da6c13] to-[#1bb092] to-99% ">
      <div>
        {participants.map((solos) => (
          <div
            key={solos.id}
            className="flex flex-col items-center justify-center"
          >
            <Image
              src={solos.image}
              alt={solos.name}
              width={300}
              height={700}
            />
            {solos.name}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Participantes;
