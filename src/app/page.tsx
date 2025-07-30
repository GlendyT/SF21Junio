import Footer from "@/utils/Footer";
import Inicio from "./inicio/page";
import Musicos from "./musicos/page";
import Nosotras from "./nosotras/page";
import Participantes from "./participantes/page";
import Patrocinadores from "./patrocinadores/page";
import Memorias from "./Memorias/page";
import History from "./History/page";

export default function Home() {
  return (
    <>
      <Inicio />
      <History/>
      <Patrocinadores />
      <Nosotras />
      <Memorias />
      <Participantes />
      <Musicos />
      <Footer />
    </>
  );
}
