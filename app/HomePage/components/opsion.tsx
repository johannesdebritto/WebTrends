// components/homepage/opsion.tsx

import React from "react";

export default function Opsion() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      <h1 className="text-2xl font-bold mb-8 text-center">Cari Trends Social Media Disini</h1>

      <div className="flex gap-6">
        {/* Card Trends YouTube */}
        <div className="bg-red-600 text-white px-6 py-10 rounded-2xl w-48 text-center text-lg font-semibold shadow-md cursor-pointer hover:scale-105 transition">Trends YouTube</div>

        {/* Card Trends TikTok */}
        <div className="bg-white text-black border-2 border-black px-6 py-10 rounded-2xl w-48 text-center text-lg font-semibold shadow-md cursor-pointer hover:scale-105 transition">Trends TikTok</div>
      </div>
    </div>
  );
}
