import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <section className="flex flex-row justify-between w-full px-4 bg-[#00624F]">
      <Link href="/">
        <Image src="/logo.webp" alt="logo21june" width={50} height={50} />
      </Link>
      <div className="gap-2 flex flex-row items-center font-extrabold text-[#1d4116] max-sm:text-xs uppercase text-2xl">
        <Link
          href="https://www.instagram.com/sociedad_femenina_21junio/"
          target="_blank"
          rel="noopener noreferrer"
        >
          IG
        </Link>
        <Link
          href="https://www.facebook.com/profile.php?id=61572086262216"
          target="_blank"
          rel="noopener noreferrer"
        >
          FB
        </Link>
        <Link
          href="https://www.tiktok.com/@sociedad.femenina?lang=en"
          target="_blank"
          rel="noopener noreferrer"
        >
          TK
        </Link>
      </div>
    </section>
  );
};

export default Footer;
