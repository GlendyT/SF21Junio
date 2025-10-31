"use client";
import Footer from "@/utils/Footer";
import Inicio from "./inicio/page";
import Musicos from "./musicos/page";
import Nosotras from "./nosotras/page";
import Participantes from "./participantes/page";
import Patrocinadores from "./patrocinadores/page";
import Historia from "./historia/page";
import Album from "./album/page";
import Videos from "./album/Videos";
import Experencia from "./(experencia)/Experiencia";
import { poppins } from "@/utils/Fonts";

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
