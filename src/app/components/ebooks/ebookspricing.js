"use client";

// src/app/components/ebooks/EbooksPricing.jsx
import React from "react";
import { motion, useReducedMotion } from "framer-motion";

/**
 * Next.js (App Router) - Client Component
 * Props:
 * - basePrice: number (default 1000)
 * - whatsappUrl: string (prefilled chat link)
 * - onStart?: () => void (optional analytics)
 * - onChat?: () => void (optional analytics)
 */
export default function EbooksPricing({
    basePrice = 1000,
    whatsappUrl = "https://wa.me/14376654926?text=Hi%20Obi%2C%20I%20want%20the%20Ebooks%20Full%20Build%20for%20%241000.%20Please%20share%20next%20steps.",
    onStart,
    onChat,
}) {
    const reduceMotion = useReducedMotion();

    const fadeUp = reduceMotion
        ? {}
        : {
                initial: { opacity: 0, y: 14 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true, margin: "-80px" },
                transition: { duration: 0.45, ease: "easeOut" },
            };

    const includes = [
        "Full UI/UX implementation",
        "Admin dashboard + uploads",
        "WhatsApp sales flow",
        "Security + validation",
        "Mobile responsiveness",
        "Deployment-ready setup",
    ];

    const addOns = [
        { title: "Multi-vendor (multiple book owners)", price: 400, note: "Each vendor can upload/manage their own catalog." },
        { title: "Payment gateway integration", price: 250, note: "Card/transfer support with confirmation tracking." },
        { title: "PDF → AI audiobook module (future feature)", price: 1500, note: "Convert ebooks to audiobooks + summary option." },
        { title: "Admin analytics dashboard", price: 500, note: "Sales insights, top books, conversion tracking." },
    ];

    return (
        <section
            id="pricing"
            aria-labelledby="pricing-title"
            className="relative mx-auto max-w-6xl px-6 sm:px-10 lg:px-20 py-14 sm:py-18 bg-[hsl(var(--background))] text-[hsl(var(--foreground))]"
        >
            {/* Header */}
            <header className="max-w-2xl">
                <h2
                    id="pricing-title"
                    className="text-2xl sm:text-3xl font-semibold tracking-tight"
                >
                    Pricing
                </h2>
                <p className="mt-3 text-base leading-relaxed">
                    The base package covers everything needed to launch a premium
                    bookstore with a secure admin dashboard and a WhatsApp conversion flow.
                </p>
            </header>

            <motion.div {...fadeUp} className="mt-10 grid gap-6 lg:grid-cols-12 items-start">
                {/* Main Pricing Card */}
                <article className="lg:col-span-7 rounded-2xl border p-7 shadow-sm backdrop-blur bg-[hsl(var(--card))] text-[hsl(var(--card-foreground))] border-[hsl(var(--border))]">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                        <div>
                            <h3 className="text-lg sm:text-xl font-semibold">
                                Ebooks Full Build
                            </h3>
                            <p className="mt-1 text-sm">
                                A complete, deployment-ready bookstore with secure admin access and WhatsApp sales flow.
                            </p>
                        </div>

                        <div className="shrink-0">
                            <p className="text-sm font-medium">Project Price</p>
                            <p className="mt-1 text-3xl font-semibold tracking-tight">
                                ${basePrice.toLocaleString()}
                            </p>
                        </div>
                    </div>

                    {/* Includes */}
                    <div className="mt-6">
                        <h4 className="text-sm font-semibold">What’s included</h4>
                        <ul className="mt-3 grid gap-2 text-sm">
                            {includes.map((item) => (
                                <li key={item} className="flex gap-3">
                                    <span aria-hidden="true" className="mt-1.5 h-2 w-2 rounded-full bg-[hsl(var(--primary))]" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* CTAs */}
                    <div className="mt-7 flex flex-col sm:flex-row gap-3">
                        <a
                            href="#contact"
                            onClick={onStart}
                            className="inline-flex justify-center rounded-xl px-5 py-3 text-sm font-semibold shadow-sm hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--ring))] bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))]"
                            aria-label="Start the Ebooks project. Go to contact section."
                        >
                            Start This Project
                        </a>

                        <a
                            href={whatsappUrl}
                            onClick={onChat}
                            className="inline-flex justify-center rounded-xl border px-5 py-3 text-sm font-semibold bg-[hsl(var(--card))] text-[hsl(var(--card-foreground))] border-[hsl(var(--border))] backdrop-blur hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--ring))]"
                            aria-label="Chat on WhatsApp about Ebooks pricing and next steps"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Chat on WhatsApp
                        </a>
                    </div>

                    {/* Trust line */}
                    <p className="mt-4 text-xs">
                        Security-first build: hashed admin passwords, protected routes, and strict validation included by default.
                    </p>
                </article>

                {/* Add-ons */}
                <aside className="lg:col-span-5 rounded-2xl border border-stone-200 bg-white/70 p-7 shadow-sm backdrop-blur dark:border-stone-800 dark:bg-stone-950/40">
                    <h3 className="text-lg font-semibold text-stone-900 dark:text-white">Optional add-ons</h3>
                    <p className="mt-2 text-sm text-stone-600 dark:text-stone-300">
                        Expand the product when you’re ready. Add-ons can be implemented immediately or as phase 2 upgrades.
                    </p>

                    <ul className="mt-6 grid gap-4">
                        {addOns.map((a) => (
                            <li
                                key={a.title}
                                className="rounded-xl border border-stone-200 bg-white/50 p-4 dark:border-stone-800 dark:bg-stone-950/30"
                            >
                                <div className="flex items-start justify-between gap-3">
                                    <div>
                                        <p className="text-sm font-semibold text-stone-900 dark:text-white">{a.title}</p>
                                        <p className="mt-1 text-xs leading-relaxed text-stone-600 dark:text-stone-300">{a.note}</p>
                                    </div>
                                    <p className="text-sm font-semibold text-stone-900 dark:text-white">
                                        +${a.price.toLocaleString()}
                                    </p>
                                </div>
                            </li>
                        ))}
                    </ul>

                    <div className="mt-6 rounded-xl border border-stone-200 bg-white/60 p-4 text-xs text-stone-600 dark:border-stone-800 dark:bg-stone-950/30 dark:text-stone-300">
                        Tip: If you expect multiple authors to sell under one brand, the <span className="font-semibold">Multi-vendor</span>{" "}
                        add-on is the best next step.
                    </div>
                </aside>
            </motion.div>
        </section>
    );
}
