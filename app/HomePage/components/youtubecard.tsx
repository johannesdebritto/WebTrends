import React from "react";

export default function YouTubeCard() {
  return (
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
  );
}
