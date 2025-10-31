"use client";

import { poppins } from "@/utils/Fonts";
import Inicio from "./inicio/page";
import Patrocinadores from "./patrocinadores/page";
import Historia from "./historia/page";
import Nosotras from "./nosotras/page";
import Album from "./album/page";
import Videos from "./album/Videos";
import Experencia from "./(experencia)/Experiencia";
import Participantes from "./participantes/page";
import Musicos from "./musicos/page";
import Footer from "@/utils/Footer";

export default function Home() {
  return (
    <main className={` ${poppins.className} `}>
      <Inicio />
      <Patrocinadores />
      <Historia />
      <Nosotras />
      <Album />
      <Videos />
      <Experencia />
      <Participantes />
      <Musicos />
      <Footer />
    </main>
  );
}
