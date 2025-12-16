"use client";

import React from "react";
import Script from "next/script";
import { motion, useReducedMotion } from "framer-motion";

/**
 * Next.js (app dir) metadata export — replace URLs/images with real values
 */
export const metadata = {
    title: "Ebooks — Who It's For",
    description:
        "Who Ebooks is built for: authors, bookstores, coaches, universities, and publishers who want a fast, trust-driven way to convert visitors into buyers.",
    openGraph: {
        title: "Ebooks — Who It's For",
        description:
            "Who Ebooks is built for: authors, bookstores, coaches, universities, and publishers.",
        url: "https://example.com/ebooks", // update to real URL
        siteName: "Ebooks",
        images: [
            {
                url: "https://example.com/og-image.jpg", // update
                width: 1200,
                height: 630,
                alt: "Ebooks — Who It's For",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Ebooks — Who It's For",
        description:
            "Who Ebooks is built for: authors, bookstores, coaches, universities, and publishers.",
    },
};

/**
 * Ebooks – Who It's For Section (Next.js client component)
 *
 * Props:
 * - onSelectPersona?: (personaId: string) => void
 */
export default function EbooksWhoItsFor({ onSelectPersona }) {
    const reduceMotion = useReducedMotion();

    const personas = [
        {
            id: "authors",
            title: "Authors Selling Ebooks",
            description:
                "Independent authors who want a clean, professional storefront to sell ebooks directly to readers without complex checkout systems.",
        },
        {
            id: "bookstores",
            title: "Bookstores Going Digital",
            description:
                "Physical or online bookstores transitioning to a modern digital catalog with secure admin uploads and WhatsApp-based sales.",
        },
        {
            id: "coaches",
            title: "Coaches & Educators",
            description:
                "Coaches selling PDFs, handbooks, or learning materials who want fast checkout and direct communication with buyers.",
        },
        {
            id: "universities",
            title: "Universities & Course Sellers",
            description:
                "Institutions or instructors distributing course materials, lecture notes, or digital textbooks with controlled access.",
        },
        {
            id: "publishers",
            title: "Publishers",
            description:
                "Publishers needing a lightweight, secure storefront to showcase titles and connect buyers directly to sales teams.",
        },
    ];

    const fadeUp = reduceMotion
        ? {}
        : {
                initial: { opacity: 0, y: 16 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true, margin: "-80px" },
                transition: { duration: 0.45, ease: "easeOut" },
            };

    // JSON-LD structured data for the section (ItemList)
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Who Ebooks Is Built For",
        "description":
            "Audience segments for the Ebooks storefront project: authors, bookstores, coaches, universities, publishers.",
        "itemListElement": personas.map((p, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: p.title,
            description: p.description,
            url: `https://example.com/ebooks#${p.id}`, // update base URL
        })),
    };

    return (
        <section
            id="who-its-for"
            aria-labelledby="who-its-for-title"
            className="relative mx-auto max-w-6xl px-6 sm:px-10 lg:px-20 py-14 sm:py-18 bg-[hsl(var(--background))] text-[hsl(var(--foreground))]"
        >
            <Script id="ebooks-who-jsonld" type="application/ld+json">
                {JSON.stringify(jsonLd)}
            </Script>

            {/* Section Header */}
            <header className="max-w-2xl">
                <h2
                    id="who-its-for-title"
                    className="text-2xl sm:text-3xl font-semibold tracking-tight"
                >
                    Who Ebooks Is Built For
                </h2>
                <p className="mt-3 text-base leading-relaxed">
                    If you sell books or learning materials digitally and want a faster,
                    trust-driven way to convert visitors into buyers, this project is
                    designed for you.
                </p>
            </header>

            {/* Persona Cards */}
            <motion.div
                {...fadeUp}
                className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
            >
                {personas.map((persona) => (
                    <article
                        key={persona.id}
                        className="group relative flex flex-col justify-between rounded-2xl border p-6 shadow-sm backdrop-blur transition hover:shadow-md bg-[hsl(var(--card))] text-[hsl(var(--card-foreground))] border-[hsl(var(--border))]"
                    >
                        <div>
                            <h3 className="text-lg font-semibold">{persona.title}</h3>
                            <p className="mt-2 text-sm leading-relaxed">
                                {persona.description}
                            </p>
                        </div>

                        {/* Micro-CTA */}
                        <a
                            href="#pricing"
                            onClick={() => onSelectPersona?.(persona.id)}
                            className="mt-5 inline-flex items-center gap-2 self-start text-sm font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-[hsl(var(--ring))]"
                            aria-label={`Yes, I am ${persona.title}. Go to pricing and contact.`}
                        >
                            Yes, this is for me.
                            <span
                                aria-hidden="true"
                                className="transition group-hover:translate-x-0.5"
                            >
                                →
                            </span>
                        </a>
                    </article>
                ))}
            </motion.div>
        </section>
    );
}
