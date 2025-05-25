"use client";
import React, { useState, useEffect } from "react";

import CategoryFilter from "./components/CategoryFilter";
import TrendsTable from "./components/TrendsTable";
import Footer from "../footer";
import RegionButtons from "./components/regionfilter";
import Title from "./components/titleregion";
import TitleCategory from "./components/titlecategory";

export default function YoutubePage() {
  const fullText = "YouTube Trends";
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);

  const [selectedCategory, setSelectedCategory] = useState("22"); // Default: Blog
  const [selectedRegion, setSelectedRegion] = useState("ID"); // Default: Indonesia

  // Typing animation
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
    <div className="min-h-screen flex flex-col items-center pt-20 px-4 pb-16" style={{ background: "linear-gradient(to bottom right, #cde9fd, #fbcfe8)" }}>
      <h1 className="text-3xl font-bold mb-6 text-center text-black">
        <span className="typewriter">{displayedText}</span>
        <span className="blinking-cursor">|</span>
      </h1>

      <TitleCategory />
      <CategoryFilter onSelectCategory={setSelectedCategory} />

      <Title />
      <div className="mb-2 mt-0 w-full max-w-md">
        <RegionButtons onSelectRegion={setSelectedRegion} />
      </div>

      {/* Kirimkan kedua state ke TrendsTable */}
      <TrendsTable categoryId={selectedCategory} region={selectedRegion} />

      <Footer />
    </div>
  );
}
