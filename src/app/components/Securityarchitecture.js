"use client";

import Head from "next/head";
import { motion } from "framer-motion";

export default function SecurityArchitecture({
    title = "Secure by Design — Steeze Store",
    description = "Steeze Store is engineered with security as a first-class feature — from hashed admin passwords to role-based access and sanitized inputs to protect owners and customers.",
    url = "https://yourdomain.com/security-architecture",
    image = "https://yourdomain.com/og-image.png",
}) {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />

                {/* Open Graph */}
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={url} />
                <meta property="og:image" content={image} />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={description} />
                <meta name="twitter:image" content={image} />

                <link rel="canonical" href={url} />
            </Head>

            <section className="w-full py-12 md:py-20 bg-[hsl(var(--background))] text-[hsl(var(--foreground))]">
                <div className="max-w-7xl mx-auto px-4 md:px-12 lg:px-20">
                    {/* Section Label */}
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="text-xs font-semibold tracking-[0.18em] uppercase mb-2"
                    >
                        Security &amp; Data Architecture
                    </motion.p>

                    {/* Main Heading */}
                    <motion.h2
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.05 }}
                        className="text-3xl md:text-4xl font-bold mb-2 md:mb-4"
                    >
                        Secure by Design: Protecting Store Owners and Customer Data
                    </motion.h2>

                    {/* Short Intro */}
                    <motion.p
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-base md:text-lg max-w-3xl"
                    >
                        The Steeze Store is engineered with security as a first-class feature, not an afterthought.
                        Every critical interaction—from authentication to order handling—is designed to reduce risk
                        and protect both the business and its customers.
                    </motion.p>

                    {/* Bullet Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        className="mt-8 rounded-3xl p-4 md:p-8 lg:p-10 shadow-sm bg-[hsl(var(--card))] text-[hsl(var(--card-foreground))] border-[hsl(var(--border))] backdrop-blur-sm"
                    >
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
                            {/* Bullets */}
                            <ul className="space-y-4 md:max-w-xl">
                                <li className="flex gap-3">
                                    <span className="mt-1 h-5 w-5 shrink-0 rounded-full border border-emerald-400/80 dark:border-emerald-500/80 flex items-center justify-center text-[10px] font-bold text-emerald-600 dark:text-emerald-300">
                                        ✓
                                    </span>
                                    <div>
                                        <p className="font-medium">All admin passwords hashed before storage</p>
                                        <p className="text-sm">
                                            Credentials are never stored in plain text, reducing the impact of potential data
                                            leaks or unauthorized database access.
                                        </p>
                                    </div>
                                </li>

                                <li className="flex gap-3">
                                    <span className="mt-1 h-5 w-5 shrink-0 rounded-full border border-emerald-400/80 dark:border-emerald-500/80 flex items-center justify-center text-[10px] font-bold text-emerald-600 dark:text-emerald-300">
                                        ✓
                                    </span>
                                    <div>
                                        <p className="font-medium">Role-based access control for dashboards</p>
                                        <p className="text-sm">
                                            Only authenticated admins can view or manage orders and inventory, ensuring that
                                            sensitive business data stays private.
                                        </p>
                                    </div>
                                </li>

                                <li className="flex gap-3">
                                    <span className="mt-1 h-5 w-5 shrink-0 rounded-full border border-emerald-400/80 dark:border-emerald-500/80 flex items-center justify-center text-[10px] font-bold text-emerald-600 dark:text-emerald-300">
                                        ✓
                                    </span>
                                    <div>
                                        <p className="font-medium">Sanitized inputs to prevent malicious requests</p>
                                        <p className="text-sm">
                                            All form data is validated and sanitized before processing, helping to protect
                                            against common attacks such as injection and malformed payloads.
                                        </p>
                                    </div>
                                </li>

                                <li className="flex gap-3">
                                    <span className="mt-1 h-5 w-5 shrink-0 rounded-full border border-emerald-400/80 dark:border-emerald-500/80 flex items-center justify-center text-[10px] font-bold text-emerald-600 dark:text-emerald-300">
                                        ✓
                                    </span>
                                    <div>
                                        <p className="font-medium">Orders stored securely and privately</p>
                                        <p className="text-sm">
                                            Order data is stored in a protected datastore and is only exposed inside the
                                            admin dashboard, ensuring customer information is handled responsibly.
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
