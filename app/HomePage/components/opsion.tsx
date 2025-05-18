"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
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
    <main
      className="relative min-h-screen flex flex-col items-center justify-center px-4 font-sans overflow-hidden"
      style={{
        background: "linear-gradient(to bottom right, #cde9fd, #fbcfe8)",
      }}
    >
      {/* SVG Dekoratif */}
      {[
        { src: "trends1", pos: "top-6 left-10", w: 24, op: "60" },
        { src: "trends2", pos: "top-16 right-20", w: 28, op: "50" },
        { src: "trends3", pos: "bottom-16 left-14", w: 20, op: "55" },
        { src: "trends4", pos: "bottom-8 right-20", w: 28, op: "60" },
        { src: "trends5", pos: "top-20 left-1/2 -translate-x-1/2", w: 24, op: "50" },
        { src: "trends6", pos: "bottom-20 left-1/2 -translate-x-1/2", w: 24, op: "55" },
        { src: "trends7", pos: "top-1/2 right-12", w: 24, op: "50" },
      ].map((img, i) => (
        <Image key={i} src={`/images/${img.src}.svg`} alt="" width={img.w * 4} height={img.w * 4} className={`decorative ${img.pos} w-${img.w} opacity-${img.op} absolute`} aria-hidden="true" />
      ))}

      {/* Heading Animasi */}
      <header className="pt-4 relative z-10">
        <h1 className="text-3xl font-bold mb-12 text-center text-black">
          <span className="typewriter">{displayedText}</span>
          <span className="blinking-cursor">|</span>
        </h1>
      </header>

      {/* Kartu-kartu Platform */}
      <section className="flex gap-10 relative z-10" aria-label="Platform Trends">
        <YouTubeCard />
        <TikTokCard />
      </section>
    </main>
  );
}
