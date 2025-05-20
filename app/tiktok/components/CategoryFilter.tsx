"use client";
import React from "react";

export default function CategoryFilter() {
  const categories = [
    {
      label: "F&B",
      textColor: "text-red-700",
      borderColor: "border-red-400",
      bgColor: "bg-red-50",
      hoverBgColor: "hover:bg-red-100",
      shadowColor: "rgba(248, 113, 113, 0.7)", // red-400
    },
    {
      label: "Olahraga",
      textColor: "text-green-700",
      borderColor: "border-green-400",
      bgColor: "bg-green-50",
      hoverBgColor: "hover:bg-green-100",
      shadowColor: "rgba(74, 222, 128, 0.7)", // green-400
    },
    {
      label: "Otomotif",
      textColor: "text-blue-700",
      borderColor: "border-blue-400",
      bgColor: "bg-blue-50",
      hoverBgColor: "hover:bg-blue-100",
      shadowColor: "rgba(96, 165, 250, 0.7)", // blue-400
    },
    {
      label: "Bisnis",
      textColor: "text-purple-700",
      borderColor: "border-purple-400",
      bgColor: "bg-purple-50",
      hoverBgColor: "hover:bg-purple-100",
      shadowColor: "rgba(192, 132, 252, 0.7)", // purple-400
    },
    {
      label: "Produk",
      textColor: "text-yellow-700",
      borderColor: "border-yellow-400",
      bgColor: "bg-yellow-50",
      hoverBgColor: "hover:bg-yellow-100",
      shadowColor: "rgba(253, 224, 71, 0.7)", // yellow-400
    },
    // Button tambahan "Semua Trends"
    {
      label: "Semua Trends",
      textColor: "text-white",
      borderColor: "border-transparent",
      bgColor: "bg-gradient-to-r from-indigo-500 to-pink-500",
      hoverBgColor: "hover:opacity-90",
      shadowColor: "rgba(139, 92, 246, 0.6)", // indigo-ish
    },
  ];

  return (
    <section aria-label="Filter Kategori Konten" className="mt-6">
      <div className="flex gap-3 flex-wrap justify-center">
        {categories.map((cat) => (
          <button
            key={cat.label}
            type="button"
            style={{
              boxShadow: `0 0 0 transparent`,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = `0 0 15px 4px ${cat.shadowColor}`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = `0 0 0 transparent`;
            }}
            className={`
              px-4 py-2 rounded-full border text-sm font-medium
              ${cat.textColor} ${cat.borderColor} ${cat.bgColor}
              transition-all duration-300 ease-in-out
              hover:animate-wiggle
              focus:outline-none focus:ring-2 focus:ring-offset-1
              ${cat.hoverBgColor}
            `}
          >
            {cat.label}
          </button>
        ))}
      </div>
    </section>
  );
}
