import Inicio from "./inicio/page";
import Musicos from "./musicos/page";
import Nosotras from "./nosotras/page";
import Participantes from "./participantes/page";
import Patrocinadores from "./patrocinadores/page";
import Ruta from "./ruta/page";

export default function Home() {
  return (
    <main
      className=" min-h-screen flex flex-col  items-center justify-center text-4xl font-bold text-white
"
    >
      <Inicio />
      <Patrocinadores />
      <Nosotras />
      <Participantes />
      <Musicos />
      <Ruta />
    </main>
  );
}
