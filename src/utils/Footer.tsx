import Image from "next/image";
import Link from "next/link";
import React from "react";

import { FacebookIcon, InsagramIcon, TikTokIcon } from "./Icons";

const Footer = () => {
  return (
    <section className="flex flex-row justify-between items-center w-full px-4 bg-[#00624F]">
      <Link href="/">
        <Image src="/logo.webp" alt="logo21june" width={50} height={50} />
      </Link>
      <div className="gap-2 flex flex-row items-center justify-center font-extrabold text-[#181d1d] max-sm:text-xs uppercase text-2xl">

        <Link
          href="https://www.instagram.com/sociedad_femenina_21junio/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InsagramIcon />

        </Link>
        <Link
          href="https://www.facebook.com/profile.php?id=61572086262216"
          target="_blank"
          rel="noopener noreferrer"
        >

          <FacebookIcon />

        </Link>
        <Link
          href="https://www.tiktok.com/@sociedad.femenina?lang=en"
          target="_blank"
          rel="noopener noreferrer"
        >

          <TikTokIcon />

        </Link>
      </div>
    </section>
  );
};

export default Footer;
