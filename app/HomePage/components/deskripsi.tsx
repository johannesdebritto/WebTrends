import React from "react";

export default function Deskripsi() {
  const watermarkImages = Array.from({ length: 8 }, (_, i) => `/images/icons${i + 1}.svg`);

  const randomStyle = (): React.CSSProperties => ({
    top: `${Math.random() * 80}%`,
    left: `${Math.random() * 80}%`,
    transform: `rotate(${Math.random() * 360}deg)`,
    width: `${20 + Math.random() * 20}px`,
    opacity: 0.05,
    position: "absolute",
    pointerEvents: "none",
  });

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
          <img src="/images/sample-image.svg" alt="Trending Visual" className="w-80 md:w-96" />
        </div>

        {/* Kolom Teks dengan watermark */}
        <div className="relative text-black font-sans text-center md:text-left">
          <h2 className="text-xl font-semibold mb-4">Temukan Tren Terbaru di Ujung Jari Anda</h2>
          <p className="text-base leading-relaxed">WebTrends bantu Anda temukan tren viral YouTube & TikTok dengan cepat. Pilih platform, langsung dapat daftar tren terkini. Ideal untuk kreator & marketer.</p>

          {/* Watermark Icons */}
          {watermarkImages.map((src, idx) => (
            <img key={idx} src={src} alt={`icon${idx + 1}`} style={randomStyle()} />
          ))}
        </div>
      </div>
    </div>
  );
}
