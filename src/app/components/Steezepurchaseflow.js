"use client";

import Head from "next/head";
import { motion } from "framer-motion";

export default function ThreeClickPurchaseFlow({
    seo = {},
}) {
    const title = seo.title || "3-Click Purchase Flow — Steeze Store";
    const description =
        seo.description ||
        "A three-step WhatsApp-first purchase flow that reduces friction, increases trust, and logs orders in the admin dashboard.";
    const canonical = seo.canonical || "https://example.com/3-click-purchase";
    const image = seo.image || "https://example.com/og-image.jpg";

    const steps = [
        {
            step: "Step 1",
            title: "Select Product",
            description:
                "The customer browses a clean, visually rich product grid or carousel and selects an item they love.",
            detail:
                "High-quality imagery, clear sizing, and pricing reduce decision fatigue and make it easy to commit.",
        },
        {
            step: "Step 2",
            title: "Click “Order on WhatsApp”",
            description:
                "A single click generates a pre-filled WhatsApp message with all the product details.",
            detail:
                "No manual typing, no copying and pasting. The platform prepares a ready-to-send order message.",
        },
        {
            step: "Step 3",
            title: "Chat Opens + Order is Logged",
            description:
                "WhatsApp opens with the order pre-filled, while the admin dashboard logs the order instantly.",
            detail:
                "The store owner sees new orders in the dashboard and can follow up with personalized replies.",
        },
    ];

    const benefits = [
        {
            title: "Zero friction",
            body: "No account creation, no long forms, no complex checkout. Customers move from interest to order in three clicks.",
        },
        {
            title: "Personal connection",
            body: "Purchases happen inside a familiar WhatsApp chat, increasing trust and willingness to buy.",
        },
        {
            title: "Fast follow-up",
            body: "Admins see incoming orders immediately and can respond in real time to close the sale.",
        },
        {
            title: "Better remarketing",
            body: "Because the relationship continues in WhatsApp, store owners can follow up later with offers and new drops.",
        },
    ];

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": title,
        "description": description,
        "url": canonical,
    };

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <link rel="canonical" href={canonical} />

                {/* Open Graph */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:url" content={canonical} />
                <meta property="og:image" content={image} />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={description} />
                <meta name="twitter:image" content={image} />

                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </Head>

            <section className="w-full py-12 md:py-20 bg-[hsl(var(--background))] text-[hsl(var(--foreground))]">
                <div className="max-w-7xl mx-auto px-4 md:px-12 lg:px-20">
                    {/* Section Label */}
                    <motion.p
                        initial={{ opacity: 0, y: 8 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.35 }}
                        className="text-xs font-semibold tracking-[0.18em] uppercase mb-2"
                    >
                        Signature Feature
                    </motion.p>

                    {/* Main Heading */}
                    <motion.h2
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl md:text-4xl font-bold mb-2 md:mb-4"
                    >
                        3-Click Purchase Flow
                    </motion.h2>

                    {/* Subheading */}
                    <motion.p
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.45, delay: 0.05 }}
                        className="text-base md:text-lg max-w-3xl mb-6"
                    >
                        The Steeze Store is built around a three-step flow that mirrors how people already shop
                        with fashion vendors on WhatsApp—but with the structure, tracking, and polish of a modern
                        e-commerce platform.
                    </motion.p>

                    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,2fr)_minmax(0,1.2fr)] gap-6 lg:gap-16 items-start">
                        <motion.ol
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="space-y-6"
                        >
                            {steps.map((item, index) => (
                                <li
                                    key={item.step}
                                    className="relative flex gap-4 rounded-2xl border p-4 md:p-6 bg-[hsl(var(--card))] text-[hsl(var(--card-foreground))] border-[hsl(var(--border))]"
                                >
                                    <div className="flex flex-col items-center">
                                        <div className="h-9 w-9 rounded-full bg-emerald-500/90 text-white flex items-center justify-center text-sm font-semibold shadow-sm">
                                            {index + 1}
                                        </div>
                                        {index !== steps.length - 1 && (
                                            <div className="mt-2 w-px flex-1 bg-linear-to-b from-emerald-500/60 to-transparent" />
                                        )}
                                    </div>

                                    <div>
                                        <p className="text-xs font-semibold tracking-[0.18em] uppercase text-emerald-600">
                                            {item.step}
                                        </p>
                                        <h3 className="mt-1 text-lg md:text-xl font-semibold">
                                            {item.title}
                                        </h3>
                                        <p className="mt-2 text-sm md:text-base">
                                            {item.description}
                                        </p>
                                        <p className="mt-2 text-xs md:text-sm">
                                            {item.detail}
                                        </p>
                                    </div>
                                </li>
                            ))}
                        </motion.ol>

                        {/* Benefits column (SEO content + accessibility) */}
                        <aside>
                            <div className="rounded-2xl border p-6 bg-[hsl(var(--card))] text-[hsl(var(--card-foreground))] border-[hsl(var(--border))]">
                                <h4 className="text-lg font-semibold mb-3">Benefits</h4>
                                <ul className="space-y-3">
                                    {benefits.map((b) => (
                                        <li key={b.title}>
                                            <p className="font-semibold">{b.title}</p>
                                            <p className="text-sm mt-1">{b.body}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>
        </>
    );
}
