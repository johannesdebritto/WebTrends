import React from "react";

export default function TikTokCard() {
  return (
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
  );
}
