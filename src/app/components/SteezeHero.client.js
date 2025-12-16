"use client"
import { motion } from "framer-motion";
import React from "react";

export default function SteezeHeroClient({
  title = "The Steeze Store — Fast, Stylish E-Commerce",
  subtitle =
    "The Steeze Store delivers a premium shopping experience built with Tailwind CSS, ShadCN UI, and SwiperJS—optimized for speed, elegance, and instant WhatsApp checkout.",
  demoUrl = "#",
}) {
  return (
    <div className="space-y-6">
      <motion.h1
        id="steeze-hero-heading"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
      >
        {title}
        <span className="text-blue-600 dark:text-blue-400"> 3-Click Sales</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-lg md:text-xl max-w-xl"
      >
        {subtitle}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.3 }}
        className="flex gap-4"
      >
        <a
          href={demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open The Steeze Store live demo (opens in new tab)"
          className="inline-flex items-center px-6 py-3 rounded-lg shadow transition bg-stone-900 text-white hover:bg-stone-800"
        >
          View Live Demo
        </a>
      </motion.div>
    </div>
  );
}
