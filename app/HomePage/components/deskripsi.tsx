import React from "react";
import "./opsion.css"; // Pastikan animasi diatur di file ini

export default function Deskripsi() {
  const watermarkImages = Array.from({ length: 8 }, (_, i) => `/images/icons${i + 1}.svg`);

  // Style acak
  // Style acak tanpa rotate
  const randomStyle = (): React.CSSProperties => ({
    top: `${Math.random() * 90}%`,
    left: `${Math.random() * 90}%`,
    // Hapus transform rotate di sini
    width: `${20 + Math.random() * 30}px`,
    opacity: 0.15,
    position: "absolute",
    pointerEvents: "none",
    zIndex: 0,
  });

  const fixedStyles: Record<number, React.CSSProperties> = {
    0: {
      // icons1 - bawah tengah
      bottom: "0",
      left: "50%",
      transform: "translateX(-50%)",
      width: "30px",
      opacity: 0.15,
      position: "absolute",
      pointerEvents: "none",
      zIndex: 0,
    },
    1: {
      top: "0",
      left: "0",
      transform: "rotate(0deg)",
      width: "30px",
      opacity: 0.15,
      position: "absolute",
      pointerEvents: "none",
      zIndex: 0,
    },
    2: {
      // icons3 - di tengah antara icons4 dan 8 → kanan tengah vertikal
      top: "50%",
      right: "0",
      transform: "translateY(-50%)",
      width: "30px",
      opacity: 0.15,
      position: "absolute",
      pointerEvents: "none",
      zIndex: 0,
    },
    3: {
      top: "0",
      right: "0",
      transform: "rotate(0deg)",
      width: "30px",
      opacity: 0.15,
      position: "absolute",
      pointerEvents: "none",
      zIndex: 0,
    },
    4: {
      // icons5 (index 4) - kiri bawah
      bottom: "0",
      left: "0",
      transform: "rotate(0deg)",
      width: "30px",
      opacity: 0.15,
      position: "absolute",
      pointerEvents: "none",
      zIndex: 0,
    },
    5: {
      bottom: "0",
      right: "0",
      transform: "rotate(0deg)",
      width: "30px",
      opacity: 0.15,
      position: "absolute",
      pointerEvents: "none",
      zIndex: 0,
    },
    7: {
      // icons8 - atas tengah
      top: "0",
      left: "50%",
      transform: "translateX(-50%)",
      width: "30px",
      opacity: 0.15,
      position: "absolute",
      pointerEvents: "none",
      zIndex: 0,
    },
  };

  return (
    <div
      className="w-full py-16 px-4 flex justify-center items-center"
      style={{
        background: "linear-gradient(to top right, #cde9fd, #fbcfe8)",
      }}
    >
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Kolom Gambar */}
        <div className="flex justify-center">
          <div className="relative w-80 md:w-96 p-1.5 rounded-3xl shadow-[0_10px_25px_rgba(0,0,0,0.1)] bg-white/60 backdrop-blur-lg border border-white/30 overflow-hidden transition-transform duration-300 hover:scale-105">
            {/* Badge-badge */}
            <div className="absolute top-2 left-2 flex gap-2 z-10">
              <span className="bg-pink-100 text-pink-600 text-xs font-semibold px-2 py-0.5 rounded-full shadow">#YouTube</span>
              <span className="bg-blue-100 text-blue-600 text-xs font-semibold px-2 py-0.5 rounded-full shadow">#TikTok</span>
            </div>

            {/* Gambar */}
            <img src="/images/trending.svg" alt="Trending Visual" className="w-full h-auto block rounded-2xl" />
          </div>
        </div>

        {/* Kolom Teks */}
        <div className="relative text-black font-sans text-justify z-10">
          <h2 className="text-xl font-semibold mb-4 text-center md:text-left">
            <span className="heading-highlight">Temukan Tren Terbaru di Ujung Jari Anda</span>
          </h2>

          <p className="text-base leading-relaxed text-justify">
            <span className="animate-text-shimmer">WebTrends</span> bantu Anda temukan tren viral YouTube & TikTok dengan cepat. Pilih platform, langsung dapat daftar tren terkini. Ideal untuk kreator & marketer.
          </p>

          {/* Watermark Icons */}
          {watermarkImages.map((src, idx) => (
            <img key={idx} src={src} alt={`icon${idx + 1}`} style={fixedStyles[idx] ?? randomStyle()} className="absolute" />
          ))}
        </div>
      </div>
    </div>
  );
}
