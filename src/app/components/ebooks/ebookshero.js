"use client";

import React, { useMemo } from "react";
import Script from "next/script";
import { motion, useReducedMotion } from "framer-motion";

/**
 * EbooksHero (Next.js client component)
 *
 * Place this file in your app/components/... as a .jsx/.js file.
 */
export default function EbooksHero({
    projectUrl = "https://yourdomain.com/projects/ebooks",
    demoUrl = "https://ebooksinternationalbookstore.netlify.app",
    whatsappUrl = "https://wa.me/14376654926?text=Hi%20Obi%2C%20I%20want%20Ebooks%20for%20my%20bookstore.%20Price%3A%20%241000.%20Please%20share%20next%20steps.",
    priceUSD = 1000,
    techStack = ["React (JSX)", "Tailwind CSS", "Framer Motion", "Node.js", "MongoDB", "WhatsApp API Flow"],
    coverImageUrl = "https://res.cloudinary.com/dnitzkowt/image/upload/v1765566107/ebooks_q39k95.png",
    onViewDemo,
    onStartProject,
}) {
    const reduceMotion = useReducedMotion();

    const projectJsonLd = useMemo(() => {
        const data = {
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Ebooks",
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web",
            description:
                "A premium, theme-aware online bookstore with admin uploads and a 3-click WhatsApp purchase flow. Includes secure admin authentication and protected routes.",
            url: projectUrl,
            image: coverImageUrl,
            offers: {
                "@type": "Offer",
                price: String(priceUSD),
                priceCurrency: "USD",
                url: projectUrl,
                availability: "https://schema.org/InStock",
            },
            creator: {
                "@type": "Person",
                name: "Obi Tobechukwu Favour",
            },
            keywords: [
                "online bookstore",
                "ebook store",
                "admin dashboard",
                "whatsapp checkout",
                "secure authentication",
                "dark mode",
                "react",
            ],
        };
        return JSON.stringify(data);
    }, [projectUrl, coverImageUrl, priceUSD]);

    const fadeUp = reduceMotion
        ? {}
        : {
                initial: { opacity: 0, y: 12 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.5, ease: "easeOut" },
            };

    const fade = reduceMotion
        ? {}
        : {
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                transition: { duration: 0.5, ease: "easeOut" },
            };

    return (
        <header className="relative overflow-hidden">
            {/* JSON-LD for SEO (Next.js Script) */}
            <Script id="project-json-ld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: projectJsonLd }} />

            {/* Background */}
            <div aria-hidden="true" className="absolute inset-0">
                <div className="absolute inset-0 bg-linear-to-b from-white via-white to-stone-50 dark:from-stone-950 dark:via-stone-950 dark:to-stone-900" />
                <div className="absolute -top-40 left-1/2 h-130 w-130 -translate-x-1/2 rounded-full bg-stone-200/50 blur-3xl dark:bg-stone-700/20" />
            </div>

            <div className="relative mx-auto max-w-6xl px-6 sm:px-10 lg:px-20 pt-14 sm:pt-16 pb-10 sm:pb-14">
                <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
                    {/* Copy */}
                    <div className="lg:col-span-6">
                        <motion.p
                            {...fade}
                            className="inline-flex mb-4 items-center gap-2 rounded-full border border-stone-200 bg-white/70 px-3 py-1 text-xs font-semibold text-stone-700 backdrop-blur dark:border-stone-800 dark:bg-stone-950/50 dark:text-stone-200"
                        >
                            <span className="h-1.5 w-1.5 rounded-full bg-stone-900 dark:bg-white" aria-hidden="true " />
                            Premium Online Bookstore • WhatsApp Checkout • Secure Admin
                        </motion.p>

                        <motion.h1
                            {...fadeUp}
                            className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-stone-900 dark:text-white"
                        >
                            Ebooks — A secure, theme-aware storefront where readers connect with authors and complete purchases in 3 simple WhatsApp clicks.
                        </motion.h1>

                        <motion.p
                            {...fadeUp}
                            transition={{ ...(fadeUp.transition || {}), delay: reduceMotion ? 0 : 0.05 }}
                            className="mt-4 text-base sm:text-lg leading-relaxed text-stone-700 dark:text-stone-200"
                        >
                            Built for authors and book owners who want a clean, premium storefront plus an admin dashboard to upload books
                            securely. Customers buy instantly via WhatsApp—no long checkout forms, no friction.
                        </motion.p>

                        {/* Value bullets */}
                        <motion.ul
                            {...fadeUp}
                            transition={{ ...(fadeUp.transition || {}), delay: reduceMotion ? 0 : 0.08 }}
                            className="mt-6 grid gap-3 text-sm sm:text-base text-stone-700 dark:text-stone-200"
                        >
                            <li className="flex gap-3">
                                <span aria-hidden="true" className="mt-1 h-2 w-2 rounded-full bg-stone-900 dark:bg-white" />
                                Admin login + dashboard for uploading and managing ebooks.
                            </li>
                            <li className="flex gap-3">
                                <span aria-hidden="true" className="mt-1 h-2 w-2 rounded-full bg-stone-900 dark:bg-white" />
                                Dynamic light/dark theme with smooth transitions and responsive UI.
                            </li>
                            <li className="flex gap-3">
                                <span aria-hidden="true" className="mt-1 h-2 w-2 rounded-full bg-stone-900 dark:bg-white" />
                                WhatsApp purchase flow with pre-filled messages for faster conversion.
                            </li>
                        </motion.ul>

                        {/* Pricing + CTAs */}
                        <motion.div
                            {...fadeUp}
                            transition={{ ...(fadeUp.transition || {}), delay: reduceMotion ? 0 : 0.12 }}
                            className="mt-8 flex flex-col sm:flex-row sm:items-center gap-3"
                        >
                            <a
                                href={whatsappUrl}
                                onClick={onStartProject}
                                className="inline-flex justify-center rounded-xl bg-stone-900 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-stone-400 dark:bg-white dark:text-stone-900 dark:focus:ring-stone-600"
                                aria-label={`Start project via WhatsApp. Price ${priceUSD} dollars.`}
                            >
                                Get This for ${priceUSD}
                            </a>

                            <a
                                href={demoUrl}
                                onClick={onViewDemo}
                                className="inline-flex justify-center rounded-xl border border-stone-300 bg-white/70 px-5 py-3 text-sm font-semibold text-stone-900 backdrop-blur hover:bg-white focus:outline-none focus:ring-2 focus:ring-stone-300 dark:border-stone-800 dark:bg-stone-950/50 dark:text-white dark:hover:bg-stone-950 dark:focus:ring-stone-700"
                                aria-label="View live demo of Ebooks"
                            >
                                View Demo
                            </a>
                        </motion.div>

                        <motion.div
                            {...fadeUp}
                            transition={{ ...(fadeUp.transition || {}), delay: reduceMotion ? 0 : 0.15 }}
                            className="mt-6 flex flex-wrap items-center gap-2"
                        >
                            <span className="text-xs font-medium text-stone-500 dark:text-stone-400">Built with:</span>
                            {techStack.slice(0, 6).map((t) => (
                                <span
                                    key={t}
                                    className="rounded-full border border-stone-200 bg-white/60 px-3 py-1 text-xs font-semibold text-stone-700 backdrop-blur dark:border-stone-800 dark:bg-stone-950/40 dark:text-stone-200"
                                >
                                    {t}
                                </span>
                            ))}
                        </motion.div>
                    </div>

                    {/* Visual */}
                    <motion.div
                        {...fade}
                        className="lg:col-span-6"
                        aria-label="Ebooks interface preview"
                    >
                        <figure className="relative rounded-2xl border border-stone-200 bg-white/70 p-3 shadow-sm backdrop-blur dark:border-stone-800 dark:bg-stone-950/40 min-h-55 lg:h-130">
                            <a
                                href={demoUrl}
                                onClick={onViewDemo}
                                className="group block overflow-hidden rounded-xl focus:outline-none focus:ring-2 focus:ring-stone-300 dark:focus:ring-stone-700"
                                aria-label="Open demo from preview image"
                            >
                                <picture>
                                    <img
                                        src={coverImageUrl}
                                        alt="Ebooks preview showing the bookstore storefront and admin dashboard"
                                        className="block w-full h-auto lg:h-full rounded-xl object-cover transition-transform duration-300 group-hover:scale-[1.01]"
                                        loading="eager"
                                        fetchPriority="high"
                                    />
                                </picture>
                            </a>

                            {/* Mini stats row */}
                            <figcaption className="mt-3 grid grid-cols-3 gap-2 text-xs">
                                <Stat label="Checkout" value="WhatsApp (3-click)" />
                                <Stat label="Auth" value="Hashed + Protected" />
                                <Stat label="UX" value="Theme-aware UI" />
                            </figcaption>
                        </figure>
                    </motion.div>
                </div>
            </div>
        </header>
    );
}

function Stat({ label, value }) {
    return (
        <div className="rounded-xl border border-stone-200 bg-white/60 px-3 py-2 text-stone-700 dark:border-stone-800 dark:bg-stone-950/40 dark:text-stone-200">
            <p className="text-[11px] font-semibold text-stone-500 dark:text-stone-400">{label}</p>
            <p className="mt-0.5 text-[12px] font-semibold text-stone-900 dark:text-white">{value}</p>
        </div>
    );
}
