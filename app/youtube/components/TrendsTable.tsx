// components/TrendsTable.tsx
import React from "react";
import { Trend } from "../data/types";

interface Props {
  title: string;
  data: Trend[];
}

export default function TrendsTable({ title, data }: Props) {
  return (
    <section className="w-full max-w-4xl mx-auto mt-10 bg-white shadow-xl rounded-2xl overflow-hidden">
      <header className="p-6 border-b">
        <h2 className="text-xl font-semibold text-gray-800">🔥 Trending YouTube Kategori {title}</h2>
        <p className="text-sm text-gray-500">Update harian</p>
      </header>

      <div className="overflow-x-auto">
        <table className="min-w-full table-auto text-sm">
          <caption className="sr-only">Trending {title}</caption>
          <thead className="bg-gray-100 text-gray-600">
            <tr>
              <th className="px-4 py-2 text-left">Judul</th>
              <th className="px-4 py-2 text-left">Channel</th>
              <th className="px-4 py-2 text-left">Views</th>
              <th className="px-4 py-2 text-left">Upload</th>
            </tr>
          </thead>
          <tbody>
            {data.map((trend, idx) => (
              <tr key={idx} className="hover:bg-gray-50">
                <td className="px-4 py-2 font-medium text-gray-800">{trend.title}</td>
                <td className="px-4 py-2 text-gray-700">{trend.channel}</td>
                <td className="px-4 py-2 text-gray-700">{trend.views}</td>
                <td className="px-4 py-2 text-gray-700">{trend.uploaded}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
