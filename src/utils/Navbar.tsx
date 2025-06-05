"use client";
import { usePage } from "@/hooks/usePage";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const { isScrolled } = usePage();
  return (
    <div
      className={`flex flex-row fixed justify-between px-4  py-1 w-full  transition-all duration-300  gap-4 max-sm:gap-1 text-black dark:text-white max-sm:py-2 items-center z-10   ${
        isScrolled
          ? "bg-black/20 dark:bg-white/0 backdrop-blur-3xl shadow-lg"
          : ""
      }`}
    >
      <Link href="/">
        <Image src="/logo.webp" alt="logo21june" width={50} height={50} />
      </Link>
      <div className="gap-2 flex flex-row items-center font-extrabold text-[#1d4116] max-sm:hidden uppercase">
        <Link href="#patrocinadores">Patrocinadores</Link>
        <Link href="#nosotras">Nosotras</Link>
        <Link href="#participantes">Participantes</Link>
        <Link href="#musicos">Musicos</Link>
        <Link href="#ruta">Ruta</Link>
      </div>
      <div className="max-sm:visible max-sm:flex items-center justify-center hidden ">
        🟰
      </div>
    </div>
  );
};

export default Navbar;
