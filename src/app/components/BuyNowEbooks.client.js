"use client";

import React from "react";

export default function BuyNowEbooks() {
  const handleClick = (e) => {
    e.preventDefault();
    const el = document.getElementById("pricing");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <button
      onClick={handleClick}
      aria-label="See pricing — jump to ebooks pricing"
      className="hidden lg:flex fixed right-4 z-60 items-center gap-3 rounded-full bg-rose-500 text-white px-4 py-3 shadow-2xl hover:scale-105 focus:outline-none focus:ring-2 focus:ring-rose-300 transition-all bottom-32 lg:bottom-auto lg:top-1/2 lg:right-6 lg:transform lg:-translate-y-1/2"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 2a7 7 0 017 7v6a3 3 0 01-3 3h-1v1a1 1 0 01-1 1h-6a1 1 0 01-1-1v-1H6a3 3 0 01-3-3V9a7 7 0 017-7z" />
      </svg>
      <span className="hidden sm:inline-block text-sm font-semibold">Pricing</span>
    </button>
  );
}
