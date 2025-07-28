import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="flex flex-row justify-between items-center w-full px-4 bg-[#027e66]"
    >
      <Link href="/">
        <Image src="/logo2.png" alt="logo21june" width={50} height={50} />
      </Link>
      <div className="gap-2 flex flex-row items-center justify-center font-extrabold text-[#181d1d] max-sm:text-xs uppercase text-2xl">
        <Link
          href="https://www.instagram.com/sociedad_femenina_21junio/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="w-7 h-7" />
        </Link>
        <Link
          href="https://www.facebook.com/profile.php?id=61572086262216"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook className="w-7 h-7" />
        </Link>
        <Link
          href="https://www.tiktok.com/@sociedad.femenina?lang=en"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTiktok className="w-7 h-7" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
