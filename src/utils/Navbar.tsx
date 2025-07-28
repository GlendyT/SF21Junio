"use client";
import { navLinks } from "@/constants";
import { usePage } from "@/hooks/usePage";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const { isScrolled } = usePage();
  const [open, setOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header
      className={`flex flex-row fixed justify-between px-4  py-1 w-full  transition-all duration-300  gap-4 max-sm:gap-1 text-black dark:text-white max-sm:py-2 items-center z-30   ${
        isScrolled
          ? "bg-[#0d9381]/40 dark:bg-white/0 backdrop-blur-3xl shadow-2xl"
          : ""
      }`}
    >
      <Link href="/">
        <Image src="/logo2.png" alt="logo21june" width={50} height={50} />
      </Link>
      <nav className="gap-2 flex flex-row items-center font-extrabold text-[#1d4116] max-sm:hidden uppercas text-md">
        {navLinks.map((navs) => (
          <Link key={navs.id} href={navs.href}>
            {navs.name}
          </Link>
        ))}
      </nav>
      <div
        className="max-sm:visible max-sm:flex items-center justify-center hidden "
        onClick={() => setOpen(!open)}
      >
        🟰
      </div>
    </header>
  );
};

export default Navbar;
