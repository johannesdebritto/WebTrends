// components/TrendsTable.tsx
import React, { useState } from "react";
import { Trend } from "../datatiktok/types";
import { ArrowUpRight } from "lucide-react";

// Fungsi untuk format angka jadi K/M
function formatNumber(num: number): string {
  if (num >= 1_000_000) return (num / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M";
  if (num >= 1_000) return (num / 1_000).toFixed(1).replace(/\.0$/, "") + "K";
  return num.toString();
}

interface Props {
  title: string;
  data: Trend[];
}

export default function TrendsTable({ title, data }: Props) {
  const [nameSort, setNameSort] = useState<"A-Z" | "Z-A">("A-Z");
  const [uploadSort, setUploadSort] = useState<"Terbaru" | "Terlama">("Terbaru");

  const toggleNameSort = () => setNameSort((prev) => (prev === "A-Z" ? "Z-A" : "A-Z"));
  const toggleUploadSort = () => setUploadSort((prev) => (prev === "Terbaru" ? "Terlama" : "Terbaru"));

  return (
    <section className="w-full max-w-5xl mx-auto mt-10 bg-white shadow-lg rounded-xl overflow-hidden border border-gray-200">
      <header className="p-5 border-b border-gray-100 bg-white">
        <h2 className="text-lg font-semibold text-gray-800">
          🔥 Trending TikTok Kategori <span className="text-gray-600">{title}</span>
        </h2>
        <p className="text-xs text-gray-400 mt-1">Update harian</p>

        {/* Filter UI */}
        <div className="flex gap-2 mt-4">
          <button onClick={toggleNameSort} className="px-3 py-1 rounded-md border border-gray-300 text-xs text-gray-600 hover:bg-gray-100 transition">
            Nama {nameSort}
          </button>
          <button onClick={toggleUploadSort} className="px-3 py-1 rounded-md border border-gray-300 text-xs text-gray-600 hover:bg-gray-100 transition">
            Upload {uploadSort}
          </button>
        </div>
      </header>

      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-gray-700">
          <thead className="bg-gray-50 text-gray-600">
            <tr>
              <th className="px-5 py-3 text-left font-medium">Judul</th>
              <th className="px-5 py-3 text-left font-medium">Username</th>
              <th className="px-5 py-3 text-left font-medium">Views</th>
              <th className="px-5 py-3 text-left font-medium">Likes</th>
              <th className="px-5 py-3 text-left font-medium">Upload</th>
            </tr>
          </thead>
          <tbody>
            {data.map((trend, idx) => (
              <tr key={idx} className="hover:bg-gray-100 transition-colors duration-150">
                <td className="px-5 py-3 font-medium text-gray-800 flex items-center gap-1">
                  {idx < 3 && <span className="text-yellow-500 font-bold mr-1">#{idx + 1}</span>}
                  <ArrowUpRight size={14} className="text-gray-400" />
                  <span className="hover:underline cursor-pointer">{trend.title}</span>
                </td>
                <td className="px-5 py-3">{trend.username}</td>
                <td className="px-5 py-3">
                  <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">{formatNumber(trend.views)}</span>
                </td>
                <td className="px-5 py-3">
                  <span className="inline-block bg-pink-100 text-pink-800 text-xs px-2 py-1 rounded-full">{formatNumber(trend.likes)}</span>
                </td>
                <td className="px-5 py-3 text-gray-500">{trend.uploaded}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
