"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

export default function YouTubeCard() {
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();

  const handleClick = () => {
    router.push("/youtube");
  };

  return (
    <article
      onClick={handleClick}
      className={`relative w-56 h-40 rounded-3xl border-2 ${isHovered ? "border-transparent shadow-[0_0_25px_#ff0000,0_0_40px_#ff8c00]" : "border-red-600"} cursor-pointer overflow-hidden transition-all duration-300`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label="YouTube Trends Card"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          handleClick();
        }
      }}
    >
      {/* Background gradasi */}
      <AnimatePresence>
        {isHovered && <motion.div initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ duration: 0.4 }} className="absolute inset-0 bg-gradient-to-r from-red-600 via-red-500 to-orange-500 z-0" aria-hidden="true" />}
      </AnimatePresence>

      {/* Konten utama */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-xl font-semibold text-red-600">
        {!isHovered && (
          <header className="flex flex-col items-center">
            <Image src="/images/yutub.png" alt="Logo YouTube" width={48} height={48} className="mb-4 transition-opacity duration-200" />
            <p>Trends YouTube</p>
          </header>
        )}
      </div>

      {/* Konten hover */}
      <AnimatePresence>
        {isHovered && (
          <>
            <motion.p key="hoverText" initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: 50, opacity: 0 }} transition={{ duration: 0.4 }} className="absolute top-3 left-4 text-white text-xl font-bold">
              Trends YouTube
            </motion.p>

            <motion.div
              key="hoverImg"
              initial={{ x: 50, y: 50, opacity: 0 }}
              animate={{ x: 0, y: 0, opacity: 1 }}
              exit={{ x: 50, y: 50, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="absolute bottom-3 right-4 w-24 h-24"
              aria-hidden="true"
            >
              <Image src="/images/webz.svg" alt="" fill style={{ objectFit: "contain" }} />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </article>
  );
}
