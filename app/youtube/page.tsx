"use client";

import React, { useState } from "react";
import SearchBar from "./SearchBar";
import CategoryFilter from "./CategoryFilter";

export default function YoutubePage() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <main className="flex flex-col items-center justify-start min-h-screen pt-20 px-4 bg-white">
      <h1 className="text-3xl font-bold mb-6">YouTube Trends</h1>

      <SearchBar value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      <CategoryFilter />
    </main>
  );
}
