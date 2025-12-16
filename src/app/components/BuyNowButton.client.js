"use client";

import React from "react";

export default function BuyNowButton() {
  const handleClick = (e) => {
    e.preventDefault();
    const el = document.getElementById("steeze-cta");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <button
      onClick={handleClick}
      aria-label="Buy now — jump to pricing"
      className="fixed right-6 top-1/2 z-50 flex items-center gap-3 transform -translate-y-1/2 rounded-full bg-emerald-500 text-slate-900 px-4 py-3 shadow-2xl hover:scale-105 focus:outline-none focus:ring-2 focus:ring-emerald-300 transition-all"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M3 3h2l.4 2M7 13h10l4-8H5.4" stroke="currentColor" strokeWidth="0" />
        <circle cx="10" cy="20" r="1" />
        <circle cx="18" cy="20" r="1" />
      </svg>
      <span className="hidden md:inline-block text-sm font-semibold">Buy Now</span>
    </button>
  );
}
