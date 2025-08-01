"use client";
import React, { useState } from "react";
import Image from "next/image";
import { photos } from "./Data/photos";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";

const Album = () => {
  const defaultTab = photos.find((tab) => tab.id === 1) || photos[0];
  const [activeTab, setActiveTab] = useState(defaultTab.name);

  const activeContent =
    photos.find((tab) => tab.name === activeTab) || defaultTab;

  return (
    <section
      id="album"
      className="flex flex-col items-center px-8 h-full justify-center min-h-screen "
    >
      <div className="flex flex-row items-center justify-between w-full">
        <h1 className="font-extrabold text-2xl text-[#551f12]">Album</h1>

        {/* Desktop view - botones horizontales */}
        <div className="hidden sm:flex flex-row">
          {photos.map((photo) => (
            <div key={photo.id}>
              <button
                className={`px-4 py-2 font-semibold border-b-4 text-xs uppercase cursor-pointer ${
                  activeTab === photo.name
                    ? "border-[#1d4116] text-[#24511c] "
                    : "border-transparent text-[#0d9381]"
                } hover:text-redE`}
                onClick={() => setActiveTab(photo.name)}
              >
                {photo.name}
              </button>
            </div>
          ))}
        </div>

        <div className="sm:hidden">
          <select
            value={activeTab}
            onChange={(e) => setActiveTab(e.target.value)}
            className="px-4 py-2  border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 uppercase text-xs font-semibold cursor-pointer"
          >
            {photos.map((photo) => (
              <option key={photo.id} value={photo.name} className=" ">
                {photo.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="h-full w-full">
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-4 mt-8 space-y-4">
          {activeContent.album.map((photo) => (
            <div
              key={photo.id}
              className="relative group cursor-pointer break-inside-avoid mb-4"
            >
              <div className="overflow-hidden rounded-xl bg-gray-100">
                <Link
                  href="https://www.instagram.com/sociedad_femenina_21junio/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={photo.photo}
                    alt={`${activeContent.name} - Photo ${photo.id}`}
                    width={300}
                    height={Math.floor(Math.random() * (400 - 200) + 200)}
                    className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 backdrop-blur-sm bg-black/20 bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="bg-white bg-opacity-90 rounded-full p-3 transform scale-0 group-hover:scale-100 transition-transform duration-200">
                      <FaInstagram />
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Album;