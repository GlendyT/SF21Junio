import ModalVideo from "@/components/ModalVideo";
import CarruselVideo from "@/components/CarruselVideo";

const Videos = () => {
  return (
    <section className="relative w-full py-20 px-0">
      <div className=" max-sm:px-0">
        <h2 className="text-3xl font-bold text-center text-[#551f12]">
          Vive la experiencia Sociedad Femenina 21 de Junio
        </h2>
        <CarruselVideo carouselId={1} />
        <CarruselVideo carouselId={2} />
        {/* Video Modal */}
        <ModalVideo />
      </div>
    </section>
  );
};

export default Videos;
