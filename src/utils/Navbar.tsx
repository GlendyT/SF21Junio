import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex flex-row justify-between px-4 w-full absolute gap-4 max-sm:gap-1 text-black max-sm:py-2">
      <Link href="/">
        <Image src="/logo.webp" alt="logo21june" width={70} height={70} />
      </Link>
      <div className="gap-2 flex flex-row items-center font-extrabold text-[#1d4116] ">
        <Link href="#home"></Link>
        <Link href="#patrocinadores">Patrocinadores</Link>
        <Link href="#nosotras">Nosotras</Link>
        <Link href="#participantes">Participantes</Link>
        <Link href="#musicos">Musicos</Link>
        <Link href="#route">Ruta</Link>
      </div>
    </div>
  );
};

export default Navbar;
