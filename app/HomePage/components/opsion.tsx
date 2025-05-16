import React from "react";
import "./opsion.css"; // <-- import css di sini

export default function Opsion() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4 font-sans">
      <h1 className="text-3xl font-bold mb-12 text-center text-black pt-4">
        Cari <span className="highlight">Trends</span> Social Media Disini
      </h1>

      <div className="flex gap-10">
        {/* Card Trends YouTube */}
        <div
          className="
            bg-white border-2 border-red-600 w-56 py-8 rounded-3xl shadow-lg cursor-pointer 
            flex flex-col items-center justify-center text-xl font-semibold text-red-600
            transition duration-300 ease-in-out transform
            hover:scale-105 hover:shadow-2xl hover:bg-blue-600 hover:text-white
          "
        >
          <img src="images/yutub.png" alt="YouTube Logo" className="w-12 h-12 mb-4" />
          Trends YouTube
        </div>

        {/* Card Trends TikTok */}
        <div
          className="
            bg-white text-black w-56 py-8 rounded-3xl border-2 border-gray-300
            flex flex-col items-center justify-center text-xl font-semibold shadow-md cursor-pointer 
            transition duration-300 ease-in-out transform
            hover:scale-105 hover:shadow-lg hover:bg-green-500 hover:text-white
          "
        >
          <img src="images/tiktok.svg" alt="TikTok Logo" className="w-12 h-12 mb-4" />
          Trends TikTok
        </div>
      </div>
    </div>
  );
}
