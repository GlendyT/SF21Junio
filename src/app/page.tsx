import Inicio from "./inicio/page";
import Musicos from "./musicos/page";
import Nosotras from "./nosotras/page";
import Participantes from "./participantes/page";
import Patrocinadores from "./patrocinadores/page";
import Ruta from "./ruta/page";

export default function Home() {
  return (
    <section
      className=" min-h-screen flex items-center justify-center text-4xl font-bold text-white
bg-gradient-to-b from-green-600/85 to-orange-700 to-95%"
    >
      <Inicio />
      <Patrocinadores />
      <Nosotras />
      <Participantes />
      <Musicos />
      <Ruta />
    </section>
  );
}
