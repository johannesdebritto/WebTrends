"use client";
import React, { useEffect, useState, useMemo } from "react";
import { ArrowUpRight } from "lucide-react";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

export interface Trend {
  title: string;
  channel: string;
  views: string;
  uploaded: string;
  categoryId?: string;
  videoId?: string;
  thumbnail?: string;
  rank?: number;
}

interface Props {
  categoryId: string;
  region: string;
}

const regionFlags: Record<string, string> = {
  ID: "/images/indo.svg",
  GB: "/images/uk.svg",
  US: "/images/usa.svg",
};

export default function TrendsTable({ categoryId, region }: Props) {
  const [data, setData] = useState<Trend[]>([]);
  const [categoryTitle, setCategoryTitle] = useState<string>("Trends");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [nameSort, setNameSort] = useState<"A-Z" | "Z-A" | null>(null);
  const [uploadSort, setUploadSort] = useState<"Terbaru" | "Terlama" | null>(null);

  function parseCustomDate(dateStr: string): Date {
    const [day, month, year] = dateStr.split("/").map(Number);
    return new Date(year, month - 1, day);
  }

  function formatViews(views: string): string {
    const number = parseInt(views.replace(/\D/g, ""), 10);
    if (isNaN(number)) return views;
    if (number >= 1_000_000) return `${(number / 1_000_000).toFixed(1)} jt`;
    if (number >= 1_000) return `${(number / 1_000).toFixed(1)} rb`;
    return number.toString();
  }

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const url = `/api/youtube?category=${categoryId}&region=${region}`;
        const res = await fetch(url);
        if (!res.ok) {
          const errorText = await res.text();
          throw new Error(`Gagal fetch data YouTube: ${res.status} - ${errorText}`);
        }

        const json = await res.json();
        if (!Array.isArray(json) || json.length === 0) {
          throw new Error("Data kosong / tidak ditemukan.");
        }

        const rankedData: Trend[] = json.map((item: Trend, idx: number) => ({
          ...item,
          rank: idx,
        }));
        setData(rankedData);
      } catch (err: any) {
        setError(err.message || "Unknown error");
        setData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [categoryId, region]);

  useEffect(() => {
    const fetchCategoryTitle = async () => {
      try {
        const res = await fetch("/api/youtube/category");
        const json = await res.json();
        const category = json.find((item: any) => String(item.id) === String(categoryId));
        setCategoryTitle(category ? category.title : "Tidak diketahui");
      } catch {
        setCategoryTitle("Tidak diketahui");
      }
    };

    if (categoryId) fetchCategoryTitle();
  }, [categoryId]);

  const toggleNameSort = () => {
    setNameSort((prev) => (prev === "A-Z" ? "Z-A" : "A-Z"));
  };

  const toggleUploadSort = () => {
    setUploadSort((prev) => (prev === "Terbaru" ? "Terlama" : "Terbaru"));
  };

  const sortedData = useMemo(() => {
    let sorted = [...data];

    if (nameSort) {
      sorted.sort((a, b) => {
        const titleA = a.title.trim().toLowerCase();
        const titleB = b.title.trim().toLowerCase();
        return nameSort === "A-Z" ? titleA.localeCompare(titleB) : titleB.localeCompare(titleA);
      });
    }

    if (uploadSort) {
      sorted.sort((a, b) => {
        const dateA = parseCustomDate(a.uploaded).getTime();
        const dateB = parseCustomDate(b.uploaded).getTime();
        return uploadSort === "Terbaru" ? dateB - dateA : dateA - dateB;
      });
    }

    return sorted;
  }, [data, nameSort, uploadSort]);

  const regionFlag = regionFlags[region] || "";

  // Fungsi untuk generate dan download Excel
  const handleDownload = () => {
    // Format data yang mau dimasukkan ke Excel
    const excelData = sortedData.map((item) => ({
      Rank: item.rank !== undefined ? item.rank + 1 : "",
      Title: item.title,
      Channel: item.channel,
      Views: item.views,
      Uploaded: item.uploaded,
      URL: item.videoId ? `https://www.youtube.com/watch?v=${item.videoId}` : "",
    }));

    // Buat worksheet dari data
    const worksheet = XLSX.utils.json_to_sheet(excelData);

    // Buat workbook dan masukkan worksheet
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Trends");

    // Generate buffer
    const wbout = XLSX.write(workbook, { bookType: "xlsx", type: "array" });

    // Simpan file pakai FileSaver
    const blob = new Blob([wbout], { type: "application/octet-stream" });
    saveAs(blob, `trends-${categoryTitle.replace(/\s+/g, "-").toLowerCase()}-${region}.xlsx`);
  };

  if (loading) return <p className="text-center py-8 text-gray-500">Loading {categoryTitle}...</p>;
  if (error) return <p className="text-center py-8 text-red-500">Error: {error}</p>;
  if (data.length === 0) return <p className="text-center py-8 text-gray-400">No data found for {categoryTitle}</p>;

  return (
    <section className="w-full max-w-5xl mx-auto mt-10 bg-white shadow-lg rounded-xl overflow-hidden border border-gray-200">
      <header className="p-5 border-b border-gray-100 bg-white flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <h2 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
          🔥 Trending YouTube: <span className="text-gray-600">{categoryTitle}</span>
          {regionFlag && <img src={regionFlag} alt={`Region ${region}`} className="w-8 h-8 rounded-full border border-gray-500 object-contain ml-0" loading="lazy" />}
        </h2>

        <div className="flex gap-2">
          <button onClick={toggleNameSort} className="px-3 py-1 rounded-md border border-gray-300 text-xs text-gray-600 hover:bg-gray-100 transition">
            Nama {nameSort || "-"}
          </button>
          <button onClick={toggleUploadSort} className="px-3 py-1 rounded-md border border-gray-300 text-xs text-gray-600 hover:bg-gray-100 transition">
            Upload {uploadSort || "-"}
          </button>
          <button
            onClick={() => {
              setNameSort(null);
              setUploadSort(null);
            }}
            className="px-3 py-1 rounded-md border border-gray-300 text-xs text-gray-500 hover:bg-gray-100 transition"
          >
            Reset
          </button>
          <button onClick={handleDownload} className="px-3 py-1 rounded-md border border-black text-xs text-black hover:bg-gray-100 transition flex items-center gap-2">
            <img src="/images/donlot.svg" alt="Download icon" className="w-4 h-4" />
            Download
          </button>
        </div>
      </header>

      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-gray-700">
          <thead className="bg-gray-50 text-gray-600">
            <tr>
              <th className="px-5 py-3 text-left font-medium">Judul</th>
              <th className="px-5 py-3 text-left font-medium">Channel</th>
              <th className="px-5 py-3 text-left font-medium">Views</th>
              <th className="px-5 py-3 text-left font-medium">Upload</th>
            </tr>
          </thead>
          <tbody>
            {sortedData.map((trend, idx) => (
              <tr key={idx} className="hover:bg-gray-100 transition-colors duration-150">
                <td className="px-5 py-3 font-medium text-gray-800 flex items-center gap-3">
                  {trend.rank !== undefined && (
                    <div className="flex items-center gap-1">
                      {trend.rank === 0 && <img src="/images/emas.svg" alt="Emas" className="w-5 h-5" />}
                      {trend.rank === 1 && <img src="/images/perak.svg" alt="Perak" className="w-5 h-5" />}
                      {trend.rank === 2 && <img src="/images/perunggu.svg" alt="Perunggu" className="w-5 h-5" />}
                      <span className="text-yellow-500 font-bold">{`#${trend.rank + 1}`}</span>
                    </div>
                  )}

                  <ArrowUpRight size={14} className="text-gray-400" />
                  <a href={`https://www.youtube.com/watch?v=${trend.videoId}`} target="_blank" rel="noopener noreferrer" className="hover:underline cursor-pointer flex-1">
                    {trend.title}
                  </a>
                  {trend.thumbnail && <img src={trend.thumbnail} alt={`Thumbnail ${trend.title}`} className="w-[120px] h-[68px] object-cover rounded-md ml-3 flex-shrink-0" />}
                </td>
                <td className="px-5 py-3">{trend.channel}</td>
                <td className="px-5 py-3">
                  <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full whitespace-nowrap">{formatViews(trend.views)}</span>
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
