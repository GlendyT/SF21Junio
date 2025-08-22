import { YouTubeEmbed } from "@next/third-parties/google";
import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Botones from "./Botones";
import { usePage } from "@/hooks/usePage";

interface CarruselVideoProps {
  carouselId: 1 | 2;
}

const CarruselVideo = ({ carouselId }: CarruselVideoProps) => {
  const {
    carousel1Ref,
    carousel2Ref,
    scroll,
    infiniteVideos1,
    infiniteVideos2,
    handleVideoClick,
  } = usePage();

  const carouselRef = carouselId === 1 ? carousel1Ref : carousel2Ref;
  const videos = carouselId === 1 ? infiniteVideos1 : infiniteVideos2;

  return (
    <div className="relative ">
      {/* Left Button - Always visible for infinite scroll */}
      <div className="w-24 h-full absolute bottom-0 z-20 gradient-edge" />
      <div className="w-24 h-full absolute bottom-0 z-20 gradient-edge" />
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 z-20">
        <Botones
          icon={<FaArrowLeft size={24} />}
          onClick={() => scroll("left", carouselId)}
          className=" bg-opacity-80 text-white p-2  rounded-full hover:bg-opacity-100 transition-all shadow-lg"
        />
      </div>

      {/* Videos Carousel */}
      <div
        ref={carouselRef}
        className="flex overflow-x-auto gap-4 py-2 "
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {videos.map((video, index) => (
          <div
            key={`${video.id}-${index}-${carouselId}`}
            className={`flex-shrink-0 w-[320px] md:w-[370px] h-[180px] md:h-[210px] rounded-lg overflow-hidden 
                transition-all duration-300 transform hover:z-10
                hover:scale-105`}
            onClick={() =>
              handleVideoClick(video.video, {
                id: video.id,
                name: video.name,
              })
            }
          >
            <YouTubeEmbed
              videoid={video.video}
              height={220}
              width={380}
              params="controls=1&autoplay=0&mute=1&playsinline=1&loop=0"
            />
          </div>
        ))}
      </div>

      {/* Right Button - Always visible for infinite scroll */}
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 z-20">
        <Botones
          icon={<FaArrowRight size={24} />}
          onClick={() => scroll("right", carouselId)}
          className=" bg-opacity-80 text-white p-2  rounded-full hover:bg-opacity-100 transition-all shadow-lg"
        />
      </div>
    </div>
  );
};

export default CarruselVideo;

/*w-36 h-full absolute bottom-0 z-20*/
