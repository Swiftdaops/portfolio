"use client";

// src/components/projects/JohnBooksValueProp.jsx
import React from "react";
import { motion, useReducedMotion } from "framer-motion";

/**
 * Problem → Solution (Value Proposition)
 * Nigerian-focused ebook commerce without payment gateway friction.
 * Product-engineered for real-world authors, lecturers, and readers.
 */
export default function JohnBooksValueProp() {
  const reduceMotion = useReducedMotion();

  const anim = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 14 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-80px" },
        transition: { duration: 0.45, ease: "easeOut" },
      };

  const problems = [
    {
      title: "Payment gateways block book sales",
      desc: "Many authors and lecturers lose customers due to failed cards, unsupported banks, or complex checkout flows.",
      icon: <IconAlert />,
    },
    {
      title: "Authors just want to sell—not manage tech",
      desc: "Most book sellers don’t want to learn e-commerce systems, plugins, or payment infrastructure just to sell knowledge.",
      icon: <IconWrench />,
    },
    {
      title: "No safe, simple way to manage books",
      desc: "Without secure admin access, authors struggle to upload, update, and control their digital books reliably.",
      icon: <IconLockOff />,
    },
  ];

  const solutions = [
    {
      title: "WhatsApp-first book sales",
      desc: "Readers buy directly through WhatsApp using whatever payment method works best for them—transfer, cash, or gateway.",
      icon: <IconChat />,
    },
    {
      title: "Author-controlled admin dashboard",
      desc: "Book owners securely upload, manage, and organize ebooks from a clean, purpose-built dashboard.",
      icon: <IconDashboard />,
    },
    {
      title: "Product-engineered security & scalability",
      desc: "Hashed credentials, protected routes, strict validation, and a codebase ready for future growth.",
      icon: <IconShield />,
    },
  ];

  return (
    <section
      id="value-prop"
      aria-labelledby="value-prop-title"
      className="relative mx-auto max-w-6xl px-6 sm:px-10 lg:px-20 py-14 sm:py-18"
    >
      {/* Header */}
      <header className="max-w-3xl">
        <h2
          id="value-prop-title"
          className="text-2xl sm:text-3xl font-semibold tracking-tight"
        >
          The Problem → The Solution
        </h2>
        <p className="mt-3 text-base leading-relaxed">
          Ebooks was built to help authors, lecturers, and educators
          sell digital books without payment friction—while keeping the system
          secure, simple, and professional.
        </p>
      </header>

      {/* Split Layout */}
      <motion.div {...anim} className="mt-10 grid gap-6 lg:grid-cols-12">
        {/* Problems */}
        <div className="lg:col-span-6 rounded-2xl border p-6 shadow-sm">
          <h3 className="text-lg font-semibold">The Problems</h3>

          <ul className="mt-5 space-y-4">
            {problems.map((item) => (
              <li key={item.title} className="flex gap-4">
                <span
                  className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-xl border"
                  aria-hidden="true"
                >
                  {item.icon}
                </span>
                <div>
                  <p className="font-semibold">{item.title}</p>
                  <p className="mt-1 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Solutions */}
        <div className="lg:col-span-6 rounded-2xl border p-6 shadow-sm">
          <div className="flex items-center justify-between gap-3">
            <h3 className="text-lg font-semibold">The Solutions</h3>
            <a
              href="#pricing"
              className="text-sm font-semibold hover:underline focus:outline-none focus:ring-2"
              aria-label="Jump to pricing section"
            >
              Jump to pricing →
            </a>
          </div>

          <ul className="mt-5 space-y-4">
            {solutions.map((item) => (
              <li key={item.title} className="flex gap-4">
                <span
                  className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-xl border"
                  aria-hidden="true"
                >
                  {item.icon}
                </span>
                <div>
                  <p className="font-semibold">{item.title}</p>
                  <p className="mt-1 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
}

/* ----------------------------- Icons (SVG) ----------------------------- */

function IconAlert() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 9v4m0 4h.01M10.29 3.86 2.82 17a2 2 0 0 0 1.74 3h14.88a2 2 0 0 0 1.74-3L13.71 3.86a2 2 0 0 0-3.42 0Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconWrench() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M21 7a6 6 0 0 1-8.74 5.3L6 18.56a2 2 0 0 1-2.83-2.83l6.26-6.26A6 6 0 0 1 17 3a4 4 0 0 0 4 4Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconLockOff() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M2 2l20 20M7 7V6a5 5 0 0 1 9.9-1M6 10h11a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H9"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M10 14v2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function IconChat() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v8Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconDashboard() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M3 13h8V3H3v10Zm10 8h8V11h-8v10ZM3 21h8v-6H3v6Zm10-10h8V3h-8v8Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconShield() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 22s8-4 8-10V6l-8-3-8 3v6c0 6 8 10 8 10Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.5 12.5 11 14l3.5-4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
