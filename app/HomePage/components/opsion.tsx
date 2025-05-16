import React from "react";
import YouTubeCard from "./youtubecard";
import "./opsion.css";
import TikTokCard from "./tiktokcard";

export default function Opsion() {
  return (
    <div
      className="relative min-h-screen flex flex-col items-center justify-center px-4 font-sans overflow-hidden"
      style={{
        background: "linear-gradient(to bottom right, #dbeafe, #fdf2f8)",
      }}
    >
      {/* SVG Dekoratif */}
      <img src="images/trends1.svg" className="absolute top-6 left-10 w-24 opacity-30" alt="" />
      <img src="images/trends2.svg" className="absolute top-16 right-20 w-28 opacity-20" alt="" />
      <img src="images/trends3.svg" className="absolute bottom-16 left-14 w-20 opacity-25" alt="" />
      <img src="images/trends4.svg" className="absolute bottom-8 right-20 w-28 opacity-30" alt="" />
      <img src="images/trends5.svg" className="absolute top-20 left-1/2 -translate-x-1/2 w-24 opacity-20" alt="" />
      <img src="images/trends6.svg" className="absolute bottom-20 left-1/2 -translate-x-1/2 w-24 opacity-25" alt="" />
      <img src="images/trends7.svg" className="absolute top-1/2 right-12 w-24 opacity-20" alt="" />

      <h1 className="text-3xl font-bold mb-12 text-center text-black pt-4 relative z-10">
        Cari <span className="highlight">Trends</span> Social Media Disini
      </h1>

      <div className="flex gap-10 relative z-10">
        <YouTubeCard />
        <TikTokCard />
      </div>
    </div>
  );
}
