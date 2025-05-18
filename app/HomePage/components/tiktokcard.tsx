"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function TikTokCard() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <article
      className={`relative w-56 h-40 rounded-3xl border-2 ${isHovered ? "border-transparent shadow-[0_0_25px_#ff0050,0_0_40px_#00f2ea]" : "border-black"} cursor-pointer overflow-hidden transition-all duration-300`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label="TikTok Trends Card"
    >
      {/* Background gradasi TikTok slide-in */}
      <AnimatePresence>
        {isHovered && <motion.div initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ duration: 0.4 }} className="absolute inset-0 bg-gradient-to-r from-pink-500 via-red-500 to-blue-500 z-0" aria-hidden="true" />}
      </AnimatePresence>

      {/* Konten utama */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-xl font-semibold text-black">
        {!isHovered && (
          <header className="flex flex-col items-center">
            <Image src="/images/tiktok.svg" alt="Logo TikTok" width={48} height={48} className="mb-4 transition-opacity duration-200" />
            <p>Trends TikTok</p>
          </header>
        )}

        <AnimatePresence>
          {isHovered && (
            <>
              {/* Teks pojok kiri atas */}
              <motion.p key="hoverText" initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: 50, opacity: 0 }} transition={{ duration: 0.4 }} className="absolute top-3 left-4 text-white text-xl font-bold">
                Trends TikTok
              </motion.p>

              {/* Gambar pojok kanan bawah */}
              <motion.div
                key="hoverImg"
                initial={{ x: 50, y: 50, opacity: 0 }}
                animate={{ x: 0, y: 0, opacity: 1 }}
                exit={{ x: 50, y: 50, opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="absolute bottom-3 right-4 w-24 h-24 relative"
                aria-hidden="true"
              >
                <Image src="/images/webz2.svg" alt="" fill style={{ objectFit: "contain" }} />
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </article>
  );
}
