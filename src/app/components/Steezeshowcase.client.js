"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

/**
 * SEO + UX NOTES
 * - Semantic sectioning with clear headings
 * - Stable aspect-ratio wrappers to prevent CLS on mobile/tablet/desktop
 * - Cloudinary transforms normalized to phone-like ratios (9:19)
 * - Next/Image responsive sizing for iPhone-class devices and larger screens
 */

const showcaseItems = [
  {
    step: "Step 1",
    title: "Land on the Homepage",
    caption: "The customer arrives on the storefront and immediately sees featured collections.",
    src: "https://res.cloudinary.com/dnitzkowt/image/upload/v1765508839/WhatsApp_Image_2025-12-12_at_4.04.07_AM_1_qtxnzv.jpg",
  },
  {
    step: "Step 2",
    title: "Browse & Select Products",
    caption: "Products are browsed seamlessly and added without friction.",
    src: "https://res.cloudinary.com/dnitzkowt/image/upload/v1765508839/WhatsApp_Image_2025-12-12_at_4.04.07_AM_1_qtxnzv.jpg",
  },
  {
    step: "Step 3",
    title: "Review & Checkout",
    caption: "The customer reviews their order and proceeds to checkout in seconds.",
    src: "https://res.cloudinary.com/dnitzkowt/image/upload/v1765508841/WhatsApp_Image_2025-12-12_at_4.04.08_AM_slxkuj.jpg",
  },
  {
    step: "Step 4",
    title: "WhatsApp Order Prefilled",
    caption: "Order details are automatically prefilled in WhatsApp.",
    src: "https://res.cloudinary.com/dnitzkowt/image/upload/v1765508840/WhatsApp_Image_2025-12-12_at_4.04.08_AM_1_ux8osn.jpg",
  },
  {
    step: "Step 5",
    title: "Chat Confirmation",
    caption: "The customer confirms the order via chat while the store logs the request.",
    src: "https://res.cloudinary.com/dnitzkowt/image/upload/v1765509495/WhatsApp_Image_2025-12-12_at_4.16.50_AM_kscwzy.jpg",
  },
];

const demoVideoUrl = "https://res.cloudinary.com/dnitzkowt/video/upload/v1765508791/WhatsApp_Video_2025-12-12_at_4.03.36_AM_kvahna.mp4";

export default function SteezeShowcaseClient({ title, description }) {
  const videoRef = useRef(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const reduceMotion = useReducedMotion();

  const containerAnim = reduceMotion
    ? { initial: { opacity: 0 }, whileInView: { opacity: 1 } }
    : { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 } };

  return (
    <section
      aria-labelledby="checkout-flow"
      className="w-full py-12 md:py-18 bg-[hsl(var(--background))] text-[hsl(var(--foreground))] border-t border-[hsl(var(--border))]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <header className="max-w-3xl mb-10">
          <h2
            id="checkout-flow"
            className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight"
          >
            {title}
          </h2>
          <p className="mt-3 text-base md:text-lg text-muted-foreground">
            {description}
          </p>
        </header>

        {/* Steps */}
        <motion.div
          {...containerAnim}
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5"
        >
          {showcaseItems.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border bg-[hsl(var(--card))] border-[hsl(var(--border))] shadow-sm overflow-hidden flex flex-col"
            >
              {/* Device Frame */}
              <div className="relative aspect-[9/19] w-full bg-black">
                <Image
                  src={item.src.replace(
                    "/upload/",
                    "/upload/ar_9:19,c_fill,w_900,q_auto,f_auto/"
                  )}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 18vw"
                  className="object-cover"
                  priority
                />

                {/* Notch */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 h-2 w-20 rounded-full bg-black/60" />

                {/* Step Badge */}
                <span className="absolute top-3 left-3 rounded-full bg-emerald-500/90 px-2.5 py-1 text-[10px] font-semibold text-black">
                  {item.step}
                </span>
              </div>

              <div className="p-4">
                <h3 className="text-sm md:text-base font-semibold mb-1">
                  {item.title}
                </h3>
                <p className="text-xs md:text-sm text-muted-foreground">
                  {item.caption}
                </p>
              </div>
            </article>
          ))}
        </motion.div>

        {/* Video Demo */}
        <motion.div
          {...containerAnim}
          viewport={{ once: true, margin: "-80px" }}
          className="mt-8 rounded-2xl border bg-stone-50/70 dark:bg-stone-900/70 border-[hsl(var(--border))] p-5 flex flex-col md:flex-row gap-6"
        >
          <div className="relative aspect-[9/19] w-full md:w-64 bg-black rounded-xl overflow-hidden">
            <video
              ref={videoRef}
              playsInline
              controls={videoLoaded}
              poster={showcaseItems[0].src.replace(
                "/upload/",
                "/upload/ar_9:19,c_fill,w_900,q_auto,f_auto/"
              )}
              className="w-full h-full object-cover"
            />
            <button
              aria-label="Play checkout demo"
              onClick={() => {
                if (!videoLoaded && videoRef.current) {
                  videoRef.current.src = demoVideoUrl;
                  setVideoLoaded(true);
                }
                videoRef.current?.play().catch(() => {});
              }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <span className="h-14 w-14 rounded-full bg-white/95 flex items-center justify-center shadow-lg">
                ▶
              </span>
            </button>
          </div>

          <div className="flex-1">
            <h3 className="text-lg md:text-xl font-semibold mb-2">
              Watch the 3-Click Checkout Flow
            </h3>
            <p className="text-sm md:text-base text-muted-foreground mb-3">
              This short walkthrough shows how customers move from browsing to a
              WhatsApp-confirmed order in just a few taps—while every request is
              securely logged for the store owner.
            </p>
            <button
              onClick={() => videoRef.current?.play().catch(() => {})}
              className="text-sm font-medium underline"
            >
              Play demo video
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
