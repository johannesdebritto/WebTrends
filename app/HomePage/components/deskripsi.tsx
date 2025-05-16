// components/homepage/deskripsi.tsx
import React from "react";

export default function Deskripsi() {
  return (
    <div
      className="w-full py-16 px-4 flex justify-center items-center"
      style={{
        background: "linear-gradient(to top right, #dbeafe, #fdf2f8)",
      }}
    >
      <div className="max-w-2xl text-center text-black font-sans">
        <h2 className="text-xl font-semibold mb-4">Temukan Tren Terbaru di Ujung Jari Anda</h2>
        <p className="text-base leading-relaxed">
          WebTrends membantu Anda menemukan apa yang sedang viral di YouTube dan TikTok secara cepat dan mudah. Cukup pilih platform favorit Anda, dan kami akan menampilkan daftar tren paling aktual yang sedang ramai dibicarakan. Cocok
          untuk content creator, marketer, atau siapa saja yang ingin tetap up to date!
        </p>
      </div>
    </div>
  );
}
