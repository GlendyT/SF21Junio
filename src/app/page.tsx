"use client";
import Footer from "@/utils/Footer";
import Inicio from "./inicio/page";
import Musicos from "./musicos/page";
import Nosotras from "./nosotras/page";
import Participantes from "./participantes/page";
import Patrocinadores from "./patrocinadores/page";
import Historia from "./Historia/page";
import Album from "./Album/page";

export default function Home() {
  return (
    <main>
      <Inicio />
      <Patrocinadores />
      <Historia />
      <Nosotras />
      <Album />
      <Participantes />
      <Musicos />
      <Footer />
    </main>
  );
}
