"use client";

import React, { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import CategoryFilter from "./components/CategoryFilter";
import TrendsTable from "./components/TrendsTable";
import Footer from "../footer";
import { fnbTrends } from "./data/fnb";
import { gameTrends } from "./data/game";
import { olahragaTrends } from "./data/olahraga";

export default function YoutubePage() {
  const fullText = "YouTube Trends";
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");

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
      className="flex flex-col min-h-screen"
      style={{
        background: "linear-gradient(to bottom right, #cde9fd, #fbcfe8)",
      }}
    >
      <main className="flex-grow flex flex-col items-center justify-start pt-20 px-4 font-sans pb-16">
        <h1 className="text-3xl font-bold mb-6 text-center text-black">
          <span className="typewriter">{displayedText}</span>
          <span className="blinking-cursor">|</span>
        </h1>

        <SearchBar value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        <CategoryFilter />

        <div className="flex flex-wrap justify-center gap-8 w-full max-w-6xl mt-6">
          <div className="flex flex-col gap-8 flex-1 min-w-[300px]">
            <TrendsTable title="F&B" data={fnbTrends} />
            <TrendsTable title="Game" data={gameTrends} />
          </div>
          <div className="flex-1 min-w-[300px]">
            <TrendsTable title="Olahraga" data={olahragaTrends} />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
