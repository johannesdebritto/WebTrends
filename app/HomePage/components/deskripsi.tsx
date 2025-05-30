"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import "./opsion.css";

export default function Deskripsi() {
  const watermarkImages = Array.from({ length: 8 }, (_, i) => `/images/icons${i + 1}.svg`);

  const randomStyle = (): React.CSSProperties => ({
    top: `${Math.random() * 90}%`,
    left: `${Math.random() * 90}%`,
    width: `${20 + Math.random() * 30}px`,
    opacity: 0.15,
    position: "absolute",
    pointerEvents: "none",
    zIndex: 0,
  });

  const fixedStyles: Record<number, React.CSSProperties> = {
    0: { bottom: "0", left: "50%", transform: "translateX(-50%)", width: "30px", opacity: 0.15, position: "absolute", pointerEvents: "none", zIndex: 0 },
    1: { top: "0", left: "0", transform: "rotate(0deg)", width: "30px", opacity: 0.15, position: "absolute", pointerEvents: "none", zIndex: 0 },
    2: { top: "50%", right: "0", transform: "translateY(-50%)", width: "30px", opacity: 0.15, position: "absolute", pointerEvents: "none", zIndex: 0 },
    3: { top: "0", right: "0", transform: "rotate(0deg)", width: "30px", opacity: 0.15, position: "absolute", pointerEvents: "none", zIndex: 0 },
    4: { bottom: "0", left: "0", transform: "rotate(0deg)", width: "30px", opacity: 0.15, position: "absolute", pointerEvents: "none", zIndex: 0 },
    5: { bottom: "0", right: "0", transform: "rotate(0deg)", width: "30px", opacity: 0.15, position: "absolute", pointerEvents: "none", zIndex: 0 },
    7: { top: "0", left: "50%", transform: "translateX(-50%)", width: "30px", opacity: 0.15, position: "absolute", pointerEvents: "none", zIndex: 0 },
  };

  const [styles, setStyles] = useState<React.CSSProperties[]>([]);

  useEffect(() => {
    const newStyles = watermarkImages.map((_, idx) => fixedStyles[idx] ?? randomStyle());
    setStyles(newStyles);
  }, []);

  return (
    <section
      className="w-full py-16 px-4 flex flex-col justify-center items-center"
      style={{
        background: "linear-gradient(to top right, #cde9fd, #fbcfe8)",
      }}
      aria-labelledby="trending-title"
    >
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
        {/* Kolom Gambar */}
        <figure className="flex justify-center">
          <div className="relative w-80 md:w-96 p-1.5 rounded-3xl shadow-[0_10px_25px_rgba(0,0,0,0.1)] bg-white/60 backdrop-blur-lg border border-white/30 overflow-hidden transition-transform duration-300 hover:scale-105">
            <div className="absolute top-2 left-2 flex gap-2 z-10" aria-hidden="true">
              <span className="bg-pink-100 text-pink-600 text-xs font-semibold px-2 py-0.5 rounded-full shadow">#YouTube</span>
              <span className="bg-blue-100 text-blue-600 text-xs font-semibold px-2 py-0.5 rounded-full shadow">#TikTok</span>
            </div>

            <Image src="/images/trending.svg" alt="Ilustrasi tren media sosial" width={384} height={384} className="w-full h-auto block rounded-2xl" priority />
            <figcaption className="sr-only">Ilustrasi tren viral di media sosial seperti YouTube dan TikTok</figcaption>
          </div>
        </figure>

        {/* Kolom Teks */}
        <article className="relative text-black font-sans text-justify z-10" itemScope itemType="https://schema.org/Article">
          <h2 id="trending-title" className="text-xl font-semibold mb-4 text-center md:text-left" itemProp="headline">
            <span className="heading-highlight">Temukan Tren Terbaru di Ujung Jari Anda</span>
          </h2>

          <p className="text-base leading-relaxed text-justify" itemProp="description">
            <span className="animate-text-shimmer">WebTrends</span> bantu Anda temukan tren viral YouTube & TikTok dengan cepat. Pilih platform, langsung dapat daftar tren terkini. Ideal untuk kreator & marketer.
          </p>

          {/* Ikon Watermark */}
          {styles.map((style, idx) => (
            <Image key={idx} src={watermarkImages[idx]} alt="" width={30} height={30} style={style} className="absolute" aria-hidden="true" />
          ))}
        </article>
      </div>

      {/* Footer Langsung di Dalam Section */}
      <div className="text-center text-gray-600 pt-4 border-t border-white/40 w-full max-w-6xl">
        <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
      </div>
    </section>
  );
}
