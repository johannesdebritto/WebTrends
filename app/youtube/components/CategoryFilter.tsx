"use client";
import React, { useEffect } from "react";

type CategoryFilterProps = {
  onSelectCategory: (categoryId: string) => void;
};

export default function CategoryFilter({ onSelectCategory }: CategoryFilterProps) {
  const categories = [
    { label: "Blog", id: "22", textColor: "text-red-700", borderColor: "border-red-400", bgColor: "bg-red-50", hoverBgColor: "hover:bg-red-100", shadowColor: "rgba(248, 113, 113, 0.7)" },
    { label: "Olahraga", id: "17", textColor: "text-green-700", borderColor: "border-green-400", bgColor: "bg-green-50", hoverBgColor: "hover:bg-green-100", shadowColor: "rgba(74, 222, 128, 0.7)" },
    { label: "Otomotif", id: "2", textColor: "text-blue-700", borderColor: "border-blue-400", bgColor: "bg-blue-50", hoverBgColor: "hover:bg-blue-100", shadowColor: "rgba(96, 165, 250, 0.7)" },
    { label: "Berita", id: "25", textColor: "text-purple-700", borderColor: "border-purple-400", bgColor: "bg-purple-50", hoverBgColor: "hover:bg-purple-100", shadowColor: "rgba(192, 132, 252, 0.7)" },
    { label: "Hiburan", id: "24", textColor: "text-yellow-700", borderColor: "border-yellow-400", bgColor: "bg-yellow-50", hoverBgColor: "hover:bg-yellow-100", shadowColor: "rgba(253, 224, 71, 0.7)" },
    { label: "Music", id: "10", textColor: "text-pink-700", borderColor: "border-pink-400", bgColor: "bg-pink-50", hoverBgColor: "hover:bg-pink-100", shadowColor: "rgba(244, 114, 182, 0.7)" },
    { label: "Gaming", id: "20", textColor: "text-indigo-700", borderColor: "border-indigo-400", bgColor: "bg-indigo-50", hoverBgColor: "hover:bg-indigo-100", shadowColor: "rgba(129, 140, 248, 0.7)" },
    { label: "Comedy", id: "23", textColor: "text-rose-700", borderColor: "border-rose-400", bgColor: "bg-rose-50", hoverBgColor: "hover:bg-rose-100", shadowColor: "rgba(251, 113, 133, 0.7)" },
    { label: "Film & Animasi", id: "1", textColor: "text-amber-700", borderColor: "border-amber-400", bgColor: "bg-amber-50", hoverBgColor: "hover:bg-amber-100", shadowColor: "rgba(251, 191, 36, 0.7)" },
    { label: "S&T", id: "28", textColor: "text-cyan-700", borderColor: "border-cyan-400", bgColor: "bg-cyan-50", hoverBgColor: "hover:bg-cyan-100", shadowColor: "rgba(34, 211, 238, 0.7)" },
  ];

  useEffect(() => {
    onSelectCategory("22"); // Default ke Blog
  }, [onSelectCategory]);

  return (
    <section aria-label="Filter Kategori Konten" className="mt-6">
      {/* Baris atas: 7 tombol */}
      <div className="flex flex-wrap justify-center gap-4 mb-3 font-sans">
        {categories.slice(0, 7).map((cat) => (
          <button
            key={cat.id}
            type="button"
            style={{ boxShadow: `0 0 0 transparent` }}
            onMouseEnter={(e) => (e.currentTarget.style.boxShadow = `0 0 15px 4px ${cat.shadowColor}`)}
            onMouseLeave={(e) => (e.currentTarget.style.boxShadow = `0 0 0 transparent`)}
            onClick={() => onSelectCategory(cat.id)}
            className={`px-5 py-2.5 rounded-full border text-base font-medium
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

      {/* Baris bawah: 3 tombol tengah */}
      <div className="flex justify-center gap-4 font-sans">
        {categories.slice(7, 10).map((cat) => (
          <button
            key={cat.id}
            type="button"
            style={{ boxShadow: `0 0 0 transparent` }}
            onMouseEnter={(e) => (e.currentTarget.style.boxShadow = `0 0 15px 4px ${cat.shadowColor}`)}
            onMouseLeave={(e) => (e.currentTarget.style.boxShadow = `0 0 0 transparent`)}
            onClick={() => onSelectCategory(cat.id)}
            className={`px-5 py-2.5 rounded-full border text-base font-medium
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
