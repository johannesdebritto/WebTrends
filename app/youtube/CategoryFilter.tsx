"use client";
import React from "react";

export default function CategoryFilter() {
  const categories = [
    { label: "F&B", textColor: "text-red-600", borderColor: "border-red-300" },
    { label: "Olahraga", textColor: "text-green-600", borderColor: "border-green-300" },
    { label: "Otomotif", textColor: "text-blue-600", borderColor: "border-blue-300" },
    { label: "Bisnis", textColor: "text-purple-600", borderColor: "border-purple-300" },
    { label: "Produk", textColor: "text-yellow-600", borderColor: "border-yellow-300" },
  ];

  return (
    <section aria-label="Filter Kategori Konten" className="mt-6">
      <div className="flex gap-3 flex-wrap justify-center">
        {categories.map((cat) => (
          <button key={cat.label} className={`px-4 py-2 rounded-full border ${cat.textColor} ${cat.borderColor} bg-white hover:bg-gray-50 transition`} type="button">
            {cat.label}
          </button>
        ))}
      </div>
    </section>
  );
}
