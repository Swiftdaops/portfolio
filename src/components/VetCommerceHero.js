"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function VetCommerceHero({ ctaHref, demoHref }) {
  return (
    <section className="relative overflow-hidden bg-blue-50">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          
          {/* LEFT: COPY */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p className="mb-3 inline-block rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-blue-700">
              Vet-Approved E-commerce Solution
            </p>

            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Sell Veterinary Products & Animals Online —
              <span className="text-blue-600"> Professionally</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg text-gray-700">
              A complete e-commerce platform built specifically for veterinary
              clinics to sell products, puppies, kittens, livestock, and care
              solutions — with trust, clarity, and medical credibility.
            </p>

            {/* VALUE POINTS */}
            <ul className="mt-6 space-y-2 text-sm text-gray-700">
              <li>• Vet-approved product listings & health info</li>
              <li>• Animal age, purpose, and suitability filters</li>
              <li>• Built to educate customers before they buy</li>
            </ul>

            {/* CTA */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              {ctaHref ? (
                <a
                  href={ctaHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Get Your Vet Store — From $1,000
                </a>
              ) : (
                <Link
                  href="#pricing"
                  className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Get Your Vet Store — From $1,000
                </Link>
              )}

              {demoHref ? (
                <a
                  href={demoHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-6 py-3 text-base font-semibold text-gray-900 transition hover:bg-gray-50"
                >
                  View Live Demo
                </a>
              ) : (
                <Link
                  href="#demo"
                  className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-6 py-3 text-base font-semibold text-gray-900 transition hover:bg-gray-50"
                >
                  View Live Demo
                </Link>
              )}
            </div>

            <p className="mt-4 text-xs text-gray-500">
              Designed for veterinary doctors, clinics, and animal hospitals.
            </p>
          </motion.div>

          {/* RIGHT: LOGO / VISUAL */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative rounded-2xl bg-white p-8 shadow-lg">
              <Image
                src="https://res.cloudinary.com/dzifobwnx/image/upload/v1766686429/ChatGPT_Image_Dec_25__2025__06_32_34_PM-removebg-preview_xeevlc.png"
                alt="OKPUPS Vet E-commerce Platform Logo"
                width={360}
                height={360}
                priority
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
