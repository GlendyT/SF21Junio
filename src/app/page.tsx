import Footer from "@/utils/Footer";
import Inicio from "./inicio/page";
import Musicos from "./musicos/page";
import Nosotras from "./nosotras/page";
import Participantes from "./participantes/page";
import Patrocinadores from "./patrocinadores/page";
import Arte from "./Arte/page";


export default function Home() {
  return (
    <>
      <Inicio />
      <Patrocinadores />
      <Nosotras />
      <Arte/>
      <Participantes />
      <Musicos />
      <Footer />
    </>
  );
}
