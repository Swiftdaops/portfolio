"use client"
import React from "react";
import { motion } from "framer-motion";

const items = [
  "3-click checkout via WhatsApp",
  "Tailwind CSS + ShadCN UI for a luxury aesthetic",
  "Admin dashboard with order logging",
  "Secure authentication",
  "Responsive product catalogue",
  "Dark/Light mode for premium experience",
];

const containerVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      when: "beforeChildren",
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function SteezeSolutionSectionClient() {
  return (
    <>
      {/* Headline */}
      <motion.h2
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-2 md:mb-5"
      >
        A Boutique-Style Shopping Experience, Engineered for Conversions
      </motion.h2>

      {/* Description + Bullet Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        className="rounded-2xl p-4 md:p-8 shadow-sm bg-[hsl(var(--card))] text-[hsl(var(--card-foreground))] border-[hsl(var(--border))]"
      >
        <p className="text-base md:text-lg leading-relaxed mb-4 md:mb-6 max-w-3xl">
          The Steeze Store blends premium UI, ultra-fast performance, and a
          WhatsApp-first checkout model. Every part of the experience—from
          landing on the homepage to confirming an order—is tuned for{' '}
          <span className="font-semibold">clarity, trust, and speed.</span>
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
          {items.map((text) => (
            <motion.div key={text} variants={itemVariants} className="flex items-start gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))]">
                <span className="h-1.5 w-1.5 rounded-full bg-[hsl(var(--primary-foreground))]" />
              </span>
              <p className="text-sm md:text-base">{text}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </>
  );
}
