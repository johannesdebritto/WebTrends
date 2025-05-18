"use client";

import React, { useEffect, useState } from "react";
import YouTubeCard from "./youtubecard";
import TikTokCard from "./tiktokcard";
import "./opsion.css";

export default function Opsion() {
  const fullText = "Cari Trends Social Media Disini";
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const typingSpeed = isDeleting ? 40 : 80;
    const delayBetweenLoops = 2000;

    if (!isDeleting && index === fullText.length) {
      setTimeout(() => setIsDeleting(true), delayBetweenLoops);
      return;
    }

    if (isDeleting && index === 0) {
      setIsDeleting(false);
      return;
    }

    const timeout = setTimeout(() => {
      setIndex((prev) => prev + (isDeleting ? -1 : 1));
      setDisplayedText(fullText.slice(0, index + (isDeleting ? -1 : 1)));
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [index, isDeleting]);

  return (
    <div
      className="relative min-h-screen flex flex-col items-center justify-center px-4 font-sans overflow-hidden"
      style={{
        background: "linear-gradient(to bottom right, #cde9fd, #fbcfe8)",
      }}
    >
      {/* SVG Dekoratif */}
      <img src="images/trends1.svg" className="decorative top-6 left-10 w-24 opacity-60" alt="" />
      <img src="images/trends2.svg" className="decorative top-16 right-20 w-28 opacity-50" alt="" />
      <img src="images/trends3.svg" className="decorative bottom-16 left-14 w-20 opacity-55" alt="" />
      <img src="images/trends4.svg" className="decorative bottom-8 right-20 w-28 opacity-60" alt="" />
      <img src="images/trends5.svg" className="decorative top-20 left-1/2 -translate-x-1/2 w-24 opacity-50" alt="" />
      <img src="images/trends6.svg" className="decorative bottom-20 left-1/2 -translate-x-1/2 w-24 opacity-55" alt="" />
      <img src="images/trends7.svg" className="decorative top-1/2 right-12 w-24 opacity-50" alt="" />

      <h1 className="text-3xl font-bold mb-12 text-center text-black pt-4 relative z-10">
        <span className="typewriter">{displayedText}</span>
        <span className="blinking-cursor">|</span>
      </h1>

      <div className="flex gap-10 relative z-10">
        <YouTubeCard />
        <TikTokCard />
      </div>
    </div>
  );
}
