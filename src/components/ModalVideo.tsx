import { usePage } from "@/hooks/usePage";
import { YouTubeEmbed } from "@next/third-parties/google";
import React from "react";
import { FaTimes } from "react-icons/fa";
import Botones from "./Botones";
import { useLogic } from "@/hooks/useLogic";

const ModalVideo = () => {
  const { modalOpen, activeVideo, currentVideoData, closeModal } = usePage();
  const { isMobile, isTablet } = useLogic();

  return (
    <>
      {modalOpen && activeVideo && currentVideoData && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 transition-opacity duration-300 "
          onClick={closeModal}
          style={{ animation: "fadeIn 0.3s ease-in-out" }}
        >
          <div
            className="flex flex-col items-center justify-center  rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Botones
              icon={<FaTimes size={22} />}
              onClick={closeModal}
              className=" flex items-end justify-end w-full bg-[#551f12] text-white p-3 z-10 shadow-lg"
            />

            <YouTubeEmbed
              videoid={activeVideo}
              height={isMobile ? 200 : isTablet ? 400 : 500}
              width={isMobile ? 400 : isTablet ? 700 : 700}
              params="controls=1&autoplay=1&mute=0&playsinline=1&loop=0"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ModalVideo;
