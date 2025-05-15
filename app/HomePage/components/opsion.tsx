import React from "react";

export default function Opsion() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4 font-sans">
      <h1 className="text-3xl font-bold mb-12 text-center text-black pt-4">Cari Trends Social Media Disini</h1>

      <div className="flex gap-10">
        {/* Card Trends YouTube */}
        <div
          className="bg-red-600 text-white w-56 py-12 rounded-3xl shadow-lg cursor-pointer 
          flex items-center justify-center text-xl font-semibold
          transition transform hover:scale-105 hover:shadow-2xl"
        >
          Trends YouTube
        </div>

        {/* Card Trends TikTok */}
        <div
          className="bg-white text-black w-56 py-12 rounded-3xl border-2 border-gray-300
          flex items-center justify-center text-xl font-semibold shadow-md cursor-pointer 
          transition transform hover:scale-105 hover:shadow-lg"
        >
          Trends TikTok
        </div>
      </div>
    </div>
  );
}
