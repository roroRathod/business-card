"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { siteConfig } from "@/config";

export default function HeroSection() {
  const { personal } = siteConfig;

  return (
    <section className="pt-10 pb-4 px-6 text-center" id="hero">
      {/* Avatar with clean infographic border */}
      <motion.div
        className="mx-auto mb-5 relative w-32 h-32"
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="w-full h-full rounded-full border-[3px] border-white shadow-md overflow-hidden bg-gray-100 ring-1 ring-gray-200 flex items-center justify-center">
          <img
            src={`/business-card${personal.avatarPath}`}
            alt="Avatar"
            className="w-full h-full object-cover scale-[1.35] object-[center_15%]"
          />
        </div>
      </motion.div>

      {/* Name */}
      <motion.h1
        className="text-2xl font-extrabold tracking-tight text-gray-900 uppercase mb-1"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.4 }}
      >
        {personal.fullName}
      </motion.h1>

      {/* Title */}
      <motion.p
        className="text-[12px] font-bold tracking-widest uppercase text-gray-500 mb-1"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25, duration: 0.4 }}
      >
        {personal.title}
      </motion.p>

    </section>
  );
}
