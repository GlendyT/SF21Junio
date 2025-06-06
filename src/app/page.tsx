import Footer from "@/utils/Footer";
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
      <section id="/" className="w-full">
        <Inicio />
      </section>
      <section id="patrocinadores" className="w-full">
        <Patrocinadores />
      </section>

      <section id="nosotras" className="w-full">
        <Nosotras />
      </section>
      <section id="participantes" className="w-full">
        {" "}
        <Participantes />
      </section>
      <section id="musicos" className="w-full">
        <Musicos />
      </section>
      <section id="ruta" className="w-full">
        <Ruta />
      </section>
      <section id="footer" className="w-full">
        <Footer />
      </section>
    </main>
  );
}
