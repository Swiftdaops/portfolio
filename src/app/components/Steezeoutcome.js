"use client";

// pages/steeze-outcome.js
import Head from "next/head";
import { motion } from "framer-motion";

export default function OutcomeImpact() {
    const outcomes = [
        {
            metric: "3 sec",
            title: "Checkout speed",
            body: "Reduced the typical 1-minute clothing-store checkout process to an ultra-fast 3-second WhatsApp flow.",
        },
        {
            metric: "0",
            title: "Manual order tracking",
            body: "All WhatsApp orders are automatically logged in the admin dashboard — no more scattered chats or missed orders.",
        },
        {
            metric: "2x",
            title: "Returning customers",
            body: "WhatsApp personalization increases customer trust, leading to repeat buyers and stronger brand loyalty.",
        },
        {
            metric: "65%",
            title: "Faster response time",
            body: "Store owners reply instantly from WhatsApp, drastically shortening the wait time and improving conversion.",
        },
    ];

    const title = "Steeze Store — Outcome & Impact | Higher Conversions & Faster Orders";
    const description =
        "See how Steeze Store transforms clothing e‑commerce: faster checkout, automated order tracking, better response times and higher returning customers.";

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": title,
        "description": description,
    };

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <link rel="canonical" href="https://www.example.com/steeze-outcome" />

                {/* Open Graph */}
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.example.com/steeze-outcome" />
                {/* Replace with a real image if available */}
                <meta property="og:image" content="https://www.example.com/og-image.jpg" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={description} />

                {/* JSON-LD structured data */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </Head>

            <section className="w-full py-12 md:py-20 bg-[hsl(var(--background))] text-[hsl(var(--foreground))]">
                <div className="max-w-7xl mx-auto px-4 md:px-12 lg:px-20">
                    {/* Section Label */}
                    <motion.p
                        initial={{ opacity: 0, y: 6 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.35 }}
                        className="text-xs font-semibold tracking-[0.18em] uppercase mb-2"
                    >
                        Outcome & Impact
                    </motion.p>

                    {/* Main Heading */}
                    <motion.h2
                        initial={{ opacity: 0, y: 14 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.45 }}
                        className="text-3xl md:text-4xl font-bold mb-2 md:mb-4"
                    >
                        Impact: Higher Conversions, Faster Orders, Better Customer Experience
                    </motion.h2>

                    {/* Intro Text */}
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.45, delay: 0.05 }}
                        className="text-base md:text-lg max-w-3xl mb-8"
                    >
                        Fashion brands rely heavily on speed, trust, and personal connection. The Steeze Store
                        transforms the traditional online buying experience into a fast, conversational,
                        conversion-focused flow that mirrors how customers already shop for clothes in real life.
                    </motion.p>

                    {/* Impact Metrics Grid */}
                    <motion.div
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
                    >
                        {outcomes.map((item) => (
                            <div
                                key={item.title}
                                className="rounded-3xl border p-4 md:p-6 shadow-sm flex flex-col gap-2 bg-[hsl(var(--card))] text-[hsl(var(--card-foreground))] border-[hsl(var(--border))]"
                            >
                                <p className="text-3xl md:text-4xl font-bold text-emerald-600 dark:text-emerald-400">
                                    {item.metric}
                                </p>
                                <p className="text-sm uppercase tracking-wide">{item.title}</p>
                                <p className="text-sm">{item.body}</p>
                            </div>
                        ))}
                    </motion.div>

                    {/* Closing Statement */}
                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.55, delay: 0.1 }}
                        className="mt-6 text-sm md:text-base text-slate-600 dark:text-stone-400 max-w-3xl"
                    >
                        These improvements give clothing brands a competitive advantage: faster sales, stronger
                        customer relationships, and a shopping flow that feels natural, modern, and highly
                        conversion-optimized.
                    </motion.p>
                </div>
            </section>
        </>
    );
}
