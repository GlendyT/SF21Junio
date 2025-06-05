import Image from "next/image";
import React from "react";

const Inicio = () => {
  return (
    <section className="flex items-center justify-center w-full bg-gradient-to-b from-[#1bb092] via-[#da6c13] to-[#9a430a] to-99%">
      <div className=" flex items-center justify-center min-h-screen p-4">
        <Image
          src="/bglogo.webp"
          width={850}
          height={850}
          alt="Logo"
          className="absolute "
        />
        <Image
          src="/bglogo.webp"
          width={700}
          height={700}
          alt="Logo"
          className="absolute"
        />
        <Image
          src="/main logo.webp"
          width={500}
          height={500}
          alt="Logo"
          className="relative"
        />
      </div>
    </section>
  );
};

export default Inicio;
