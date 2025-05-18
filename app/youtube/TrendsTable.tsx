import React from "react";

const trends = [
  {
    title: "Lagu Viral TikTok 2025",
    channel: "Musik Hits",
    views: "1.2M",
    uploaded: "2 hari lalu",
    category: "Musik",
  },
  {
    title: "Tutorial AI Tools Terbaru",
    channel: "TeknoNow",
    views: "800K",
    uploaded: "1 hari lalu",
    category: "Teknologi",
  },
  {
    title: "Vlog Liburan Bali 2025",
    channel: "Travel ID",
    views: "950K",
    uploaded: "3 hari lalu",
    category: "Travel",
  },
  {
    title: "Resep Makanan Simple Ramadhan",
    channel: "Dapur Mama",
    views: "600K",
    uploaded: "5 hari lalu",
    category: "Kuliner",
  },
];

export default function TrendsTable() {
  return (
    <section aria-labelledby="youtube-trending-heading" className="w-full max-w-4xl mx-auto mt-10 bg-white shadow-xl rounded-2xl overflow-hidden">
      <header className="p-6 border-b">
        <h2 id="youtube-trending-heading" className="text-xl font-semibold text-gray-800">
          🔥 Trending YouTube
        </h2>
        <p className="text-sm text-gray-500">Update harian</p>
      </header>

      <div className="overflow-x-auto">
        <table className="min-w-full table-auto text-sm">
          <caption className="sr-only">Daftar konten YouTube yang sedang trending</caption>
          <thead className="bg-gray-100 text-gray-600">
            <tr>
              <th scope="col" className="px-4 py-2 text-left">
                Judul
              </th>
              <th scope="col" className="px-4 py-2 text-left">
                Channel
              </th>
              <th scope="col" className="px-4 py-2 text-left">
                Views
              </th>
              <th scope="col" className="px-4 py-2 text-left">
                Upload
              </th>
              <th scope="col" className="px-4 py-2 text-left">
                Kategori
              </th>
            </tr>
          </thead>
          <tbody>
            {trends.map((trend, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-4 py-2 font-medium text-gray-800">{trend.title}</td>
                <td className="px-4 py-2 text-gray-700">{trend.channel}</td>
                <td className="px-4 py-2 text-gray-700">{trend.views}</td>
                <td className="px-4 py-2 text-gray-700">{trend.uploaded}</td>
                <td className="px-4 py-2">
                  <span className="inline-block bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded-full">{trend.category}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
