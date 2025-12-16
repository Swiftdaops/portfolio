"use client";

import React from "react";
import { motion } from "framer-motion";
import TechStack, { ALL as TECH_ALL, TechBadge } from "./techstack";

// simple character-by-character typing animation
const typingContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.035,
    },
  },
};

const typingChar = {
  hidden: { opacity: 0, y: "0.25em" },
  visible: { opacity: 1, y: "0em" },
};

const typedText = "Hi, my name is Obi. 🤝";

export default function Hero() {
  const whatsappNumber = "14376654926"; // replace with your full intl number (no +)
  const message =
    "Hi Obi, I saw your portfolio and I’d like to talk about a web app / website project.";
  const waLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <section className="hero min-h-[80vh] flex items-center justify-center overflow-x-hidden">
      <div className="max-w-6xl w-full grid lg:grid-cols-[1.2fr,0.9fr] items-center">
        {/* Left content */}
        <div className="w-full order-2 lg:order-1 text-center lg:text-left min-w-0 p-6 sm:p-8 lg:p-0">
          {/* Typed line */}
          <motion.h2
            className="text-xs sm:text-sm tracking-[0.12em] uppercase whitespace-normal wrap-break-word max-w-full"
            variants={typingContainer}
            initial="hidden"
            animate="visible"
          >
            {typedText.split("").map((char, index) => (
              <motion.span key={index} variants={typingChar}>
                {char}
              </motion.span>
            ))}
          </motion.h2>

          {/* Main heading + Subtext (centered on mobile) */}
          <div className="max-w-2xl">
            <motion.h1
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight text-center lg:text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              I design beautiful, scalable and secure web apps for businesses.
            </motion.h1>

            <motion.p
              className="text-sm sm:text-base max-w-xl text-center lg:text-left m-3"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
            >
              I help businesses improve their customers’ online experience with
              product-first, easy-to-use interfaces built using modern tools like
              React, Next.js, Tailwind CSS, ShadCN UI, Express, MongoDB and
              PostHog.
            </motion.p>
          </div>

          {/* CTA */}
          <motion.div
            className="flex flex-wrap items-center justify-center m-2 lg:justify-start"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.5 }}
          >
            <a
              href={waLink}
              target="_blank"
              rel="noreferrer"
              aria-label="Contact Obi on WhatsApp"
              className="inline-flex items-center card m-2 justify-center rounded-full text-sm font-medium transition px-6 py-3 min-h-11 focus:outline-none focus:ring-2 focus:ring-offset-2"
            >
              Contact Now on WhatsApp
            </a>
            <span className="text-xs">I usually reply within a few hours. Thank You!</span>
          </motion.div>

          {/* Tech stack (mobile): show under CTA on small screens */}
          <div className="w-full overflow-hidden lg:hidden">
            <div className="flex gap-3 tech-scroll tech-scroll-fast whitespace-nowrap min-w-0 will-change-transform">
              {TECH_ALL.concat(TECH_ALL).map((t, idx) => (
                <div key={idx} className="inline-block">
                  <TechBadge label={t.label} icon={t.icon} compact={true} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: headshot + tech stack carousel */}
        <motion.div
          className="flex flex-col items-center gap-6 w-full order-1 lg:order-2 mb-6 lg:mb-0 min-w-0 p-0 lg:p-6"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 0.7 }}
        >
          {/* Headshot */}
          <div className="relative">
            <div className="absolute inset-0 rounded-none lg:rounded-full blur-2xl" />
            <motion.img
              src="https://res.cloudinary.com/dnitzkowt/image/upload/v1765100818/WhatsApp_Image_2025-11-19_at_9.27.46_AM_i3swg6.jpg"
              alt="Obi – Product-first web developer"
              loading="lazy"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.8, ease: [0.2, 0.9, 0.2, 1] }}
              className="relative w-full h-auto sm:w-40 sm:h-40 md:w-48 md:h-48 object-cover max-w-full block rounded-none"
            />
          </div>

          {/* Tech stack carousel (desktop): keep in right column on lg+ */}
          <div className="w-full overflow-hidden hidden lg:block">
            <div className="flex gap-3 tech-scroll whitespace-nowrap min-w-0 will-change-transform">
              {TECH_ALL.concat(TECH_ALL).map((t, idx) => (
                <div key={idx} className="inline-block">
                  <TechBadge label={t.label} icon={t.icon} compact={true} />
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
