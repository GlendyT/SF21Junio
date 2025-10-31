"use client";

import { poppins } from "@/utils/Fonts";
import Inicio from "./inicio/Inicio";
import Patrocinadores from "./patrocinadores/Patrocinadores";
import Nosotras from "./nosotras/Nosotras";
import Participantes from "./participantes/Participantes";
import Musicos from "./musicos/Musicos";
import Footer from "@/utils/Footer";
import Experiencia from "./(experiencia)/Experiencia";
import Album from "./views/Album";
import Videos from "./views/Videos";
import Historia from "./views/Historia";

export default function Home() {
  return (
    <main className={` ${poppins.className} `}>
      <Inicio />
      <Patrocinadores />
      <Historia/>
      <Nosotras />
      <Album/>
      <Videos/>
      <Experiencia/>
      <Participantes />
      <Musicos />
      <Footer />
    </main>
  );
}
