"use client";
import { usePage } from "@/hooks/usePage";
import Link from "next/link";
import { navLinks } from "../constants";
const Navbar = () => {
  const { isScrolled } = usePage();

  return (
    <header
      className={`flex flex-row fixed w-full items-center justify-center px-4   mt-2  transition-all duration-300  max-sm:gap-1 text-black max-sm:py-2 z-50`}
    >
      <nav
        className={`gap-4 flex flex-row items-center justify-center w-full py-3 mx-4  font-extrabold text-[#1d4116] max-sm:hidden uppercase text-md ${
          isScrolled
            ? "bg-[#0d9381]/40 z-50 backdrop-blur-3xl shadow-2xl rounded-full transition-all duration-300"
            : ""
        }`}
      >
        {navLinks.map((navs) => (
          <Link key={navs.id} href={navs.href}>
            {navs.name}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;
