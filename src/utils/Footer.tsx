import { navLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="flex flex-col justify-between items-center w-full px-4 py-4  bg-gradient-to-b from-[#023f18]/100 via-[#014131]/100 to-[#03311c]/90 to-99%"
    >
      <div className="flex flex-row max-sm:flex-col sm:items-center sm:justify-between w-full text-white">
        <Link href="/">
          <Image
            src="/logo2.png"
            alt="logo21june"
            width={50}
            height={50}
            className="max-sm:hidden"
          />
          <h1 className="font-extrabold text-2xl sm:hidden">
            Sociedad Femenina <br /> 21 de junio
          </h1>
        </Link>

        <div className="sm:hidden">
          <ul className="flex flex-col gap-2 ">
            <li>
              {navLinks.map((navs) => (
                <Link key={navs.id} href={navs.href} className="text-xl">
                  <ul>{navs.name}</ul>
                </Link>
              ))}
            </li>
          </ul>
        </div>
        <div className="gap-2 flex flex-row items-center justify-center font-extrabold  max-sm:text-xs uppercase text-2xl">
          <Link
            href="https://www.instagram.com/sociedad_femenina_21junio/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="w-7 h-7 border p-1 rounded-full hover:scale-105" />
          </Link>
          <Link
            href="https://www.facebook.com/profile.php?id=61572086262216"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="w-7 h-7 border p-1 rounded-full hover:scale-105" />
          </Link>
          <Link
            href="https://www.tiktok.com/@sociedad.femenina?lang=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTiktok className="w-7 h-7 border p-1 rounded-full hover:scale-105" />
          </Link>
        </div>
      </div>
      <p className=" max-sm:text-xz text-center text-white">
        © Todos los derechos reservados {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
