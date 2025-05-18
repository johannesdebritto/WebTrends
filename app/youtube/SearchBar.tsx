"use client";
import React from "react";

type SearchBarProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <form role="search" aria-label="Pencarian tren" className="relative w-full max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="search-input" className="sr-only">
        Cari tren
      </label>

      <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M11 18a7 7 0 100-14 7 7 0 000 14z" />
      </svg>

      <input
        type="text"
        id="search-input"
        value={value ?? ""}
        onChange={onChange}
        placeholder="Cari tren..."
        className="w-full pl-10 pr-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
        autoComplete="off"
      />
    </form>
  );
}
