import { YouTubeEmbed } from "@next/third-parties/google";
import { videos } from "./Data/photos";
import { useRef, useState, useCallback } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Botones from "@/components/Botones";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Videos = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTweening, setIsTweening] = useState(false);

  useGSAP(
    () => {
      const slides = gsap.utils.toArray<Element>(".slide");
      slides.forEach((slide, i) => {
        gsap.set(slide, {
          xPercent: i > 0 ? 100 : 0,
        });
      });
    },
    { scope: sliderRef, dependencies: [] }
  );

  const gotoSlide = useCallback(
    (value: number) => {
      if (isTweening) return;

      const slides = gsap.utils.toArray<Element>(".slide");
      if (slides.length <= 1) return;

      setIsTweening(true);

      const currentSlide = slides[currentIndex];
      const newIndex = (currentIndex + value + slides.length) % slides.length;
      const nextSlide = slides[newIndex];
      const direction = value > 0 ? 1 : -1;

      gsap.set(nextSlide, { xPercent: 100 * direction });
      const tl = gsap.timeline({
        onComplete: () => {
          setIsTweening(false);
          setCurrentIndex(newIndex);
        },
      });

      tl.to(currentSlide, { xPercent: -100 * direction }).to(
        nextSlide,
        { xPercent: 0 },
        "<"
      );
    },
    [currentIndex, isTweening]
  );

  const handleNext = useCallback(() => gotoSlide(1), [gotoSlide]);
  const handlePrev = useCallback(() => gotoSlide(-1), [gotoSlide]);

  return (
    <section className="flex flex-col items-center px-8 max-sm:px-0 py-0 h-full w-full justify-center  pt-16 max-sm:pt-2 gap-4 ">
      <h1 className="font-extrabold text-4xl text-[#551f12]">
        Vive la Experiencia
      </h1>
      <div className="wrapper flex flex-col justify-center items-center w-full h-[65vh] max-sm:h-60 overflow-hidden ">
        <div
          ref={sliderRef}
          className="slider slider-one w-full h-full relative overflow-hidden "
        >
          {videos.map((video) => (
            <div
              className=" w-full h-auto text-center absolute top-0 left-0 flex justify-center items-center slide "
              key={video.id}
            >
              <YouTubeEmbed
                videoid={video.video}
                height={400}
                width={700}
                params={`controls=1&autoplay=0&mute=0&playsinline=1&loop=1&playlist=${video.video}`}
              />
            </div>
          ))}
        </div>
      </div>
      <div className=" buttons">
        <Botones
          icon={<FaArrowLeft />}
          onClick={handlePrev}
          className="bg-[#551f12] text-white px-4 py-2 rounded-md mr-2"
        />
        <Botones
          icon={<FaArrowRight />}
          onClick={handleNext}
          className="bg-[#551f12] text-white px-4 py-2 rounded-md"
        />
      </div>
    </section>
  );
};

export default Videos;
