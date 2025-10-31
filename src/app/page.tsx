"use client";

import { poppins } from "@/utils/Fonts";
import Inicio from "./inicio/Inicio";
import Patrocinadores from "./patrocinadores/Patrocinadores";
import Nosotras from "./nosotras/Nosotras";
import Album from "./album/Album";
import Videos from "./album/Videos";
import Experencia from "./(experencia)/Experiencia";
import Participantes from "./participantes/Participantes";
import Musicos from "./musicos/Musicos";
import Footer from "@/utils/Footer";
import Historia from "./historia/page";

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
