"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Cookies from "js-cookie";
import PriceDisplay from "./PriceDisplay.client";

export default function SteezeStoreCTA() {
    const [country, setCountry] = useState(Cookies.get("country") || "US");
    return (
        <section id="steeze-cta" className="relative w-full py-12 md:py-20 bg-[hsl(var(--background))] text-[hsl(var(--foreground))] overflow-hidden">
            {/* Glass sweep UI effect */}
            <motion.div
                initial={{ x: '-100%' }}
                whileInView={{ x: '100%' }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 1.8, ease: 'easeOut' }}
                className="pointer-events-none absolute top-0 left-0 h-full w-1/2 bg-linear-to-r from-white/10 via-white/5 to-transparent blur-xl"
            />
            <div className="max-w-7xl mx-auto px-4 md:px-12 lg:px-20">
                {/* Label */}
                <motion.p
                    initial={{ opacity: 0, y: 6 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35 }}
                    className="text-xs font-semibold tracking-[0.18em] uppercase text-emerald-300 mb-2"
                >
                    Work With Me
                </motion.p>

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45 }}
                    className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6"
                >
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-stone-950 dark:text-white">
                            Bring this Steeze Store experience to your clothing brand.
                        </h2>
                        <p className="mt-3 text-sm md:text-base max-w-2xl text-stone-950 dark:text-white">
                            If you run a fashion or clothing brand and want this same 3-click WhatsApp sales flow,
                            I offer a focused, productized build based on the Steeze Store project—no fluff, just
                            a clean system that helps you sell faster.
                        </p>
                    </div>

                    {/* Price Badge */}
                    <div className="inline-flex flex-col items-end">
                        <span className="text-xs uppercase tracking-[0.16em]">
                            Starting at
                        </span>
                        <div className="mt-1">
                            <PriceDisplay />
                        </div>

                        <div className="mt-2">
                            <label htmlFor="country-select" className="sr-only">Select country</label>
                            <select
                                id="country-select"
                                value={country}
                                onChange={(e) => {
                                    const val = e.target.value;
                                    Cookies.set("country", val, { expires: 30 });
                                    setCountry(val);
                                    // Refresh so client PriceDisplay picks up the new cookie
                                    if (typeof window !== "undefined") window.location.reload();
                                }}
                                className="text-xs bg-transparent border border-slate-300 rounded px-2 py-1"
                            >
                                <option value="US">United States (USD)</option>
                                <option value="CA">Canada (CAD)</option>
                                <option value="AU">Australia (AUD)</option>
                                <option value="NG">Nigeria (NGN)</option>
                            </select>
                        </div>
                    </div>
                </motion.div>

                {/* Two flows */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                    {/* Clothing Brand Flow */}
                    <motion.div
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="rounded-3xl border p-4 md:p-8 shadow-lg bg-[hsl(var(--card))] text-[hsl(var(--card-foreground))] border-[hsl(var(--border))]"
                    >
                        <h3 className="text-xl font-semibold mb-3">
                            For clothing brands buying this product
                        </h3>
                        <p className="text-sm md:text-base mb-4">
                            This option is for fashion/clothing brands who want this exact Steeze Store flow:
                            product grid, dark mode, WhatsApp checkout, and admin orders panel—customized to fit
                            your brand identity.
                        </p>

                        <ol className="space-y-4 text-sm md:text-base text-slate-200">
                            <li className="flex gap-3">
                                <span className="mt-1 h-5 w-5 shrink-0 rounded-full bg-emerald-400 text-slate-900 flex items-center justify-center text-xs font-bold">
                                    1
                                </span>
                                <div>
                                            <p className="font-semibold text-stone-950 dark:text-white">Introduce your brand via WhatsApp.</p>
                                            <p className="text-xs md:text-sm text-stone-950 dark:text-white">
                                        Use the pre-filled WhatsApp link below to tell me who you are, what you sell, and
                                        where your customers shop from.
                                    </p>
                                </div>
                            </li>

                            <li className="flex gap-3">
                                <span className="mt-1 h-5 w-5 shrink-0 rounded-full bg-emerald-400 text-slate-900 flex items-center justify-center text-xs font-bold">
                                    2
                                </span>
                                <div>
                                    <p className="font-semibold text-stone-950 dark:text-white">We align on scope (within Steeze Store features).</p>
                                    <p className="text-xs md:text-sm text-stone-950 dark:text-white">
                                        We keep it within the Steeze Store structure: WhatsApp checkout, admin dashboard,
                                        product display, dark mode, and your brand styling. Extra features or complex flows
                                        are treated as upgrades.
                                    </p>
                                </div>
                            </li>

                            <li className="flex gap-3">
                                <span className="mt-1 h-5 w-5 shrink-0 rounded-full bg-emerald-400 text-slate-900 flex items-center justify-center text-xs font-bold">
                                    3
                                </span>
                                <div>
                                    <p className="font-semibold text-stone-950 dark:text-white">Short interview within 7 days.</p>
                                    <p className="text-xs md:text-sm text-stone-950 dark:text-white">
                                        We have a focused conversation (or async chat) within a week to confirm your goals,
                                        brand tone, and any must-have sections.
                                    </p>
                                </div>
                            </li>

                            <li className="flex gap-3">
                                <span className="mt-1 h-5 w-5 shrink-0 rounded-full bg-emerald-400 text-slate-900 flex items-center justify-center text-xs font-bold">
                                    4
                                </span>
                                <div>
                                    <p className="font-semibold text-stone-950 dark:text-white">Prototype delivered within 30 days.</p>
                                    <p className="text-xs md:text-sm text-stone-950 dark:text-white">
                                        I ship a working prototype of your Brand's style site. You review the flow,
                                        visuals, and WhatsApp experience.
                                    </p>
                                </div>
                            </li>

                            <li className="flex gap-3">
                                <span className="mt-1 h-5 w-5 shrink-0 rounded-full bg-emerald-400 text-stone-900 flex items-center justify-center text-xs font-bold">
                                    5
                                </span>
                                <div>
                                    <p className="font-semibold text-stone-950 dark:text-white">If you love it, you pay $1,000.</p>
                                    <p className="text-xs md:text-sm text-stone-950 dark:text-white">
                                        Payment can be made via PayPal, international wire, or Bitcoin for lightning-fast
                                        processing. Once payment is confirmed, we finalize, polish, and prepare for launch.
                                    </p>
                                </div>
                            </li>
                        </ol>
                    </motion.div>

                    {/* Upgrades / Different Requests */}
                    <motion.div
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.05 }}
                        className="rounded-3xl border p-4 md:p-8 bg-[hsl(var(--card))] text-[hsl(var(--card-foreground))] border-[hsl(var(--border))]"
                    >
                        <h3 className="text-xl font-semibold mb-3">
                            Upgrades, extra pages, and different requests
                        </h3>
                        <p className="text-sm md:text-base mb-4">
                            If you want to push beyond the original Steeze Store scope—extra pages, experimental
                            layouts, or new flows—we treat that as an upgrade on top of the core build.
                        </p>

                        <ul className="space-y-3 text-sm md:text-base mb-6">
                            <li className="flex gap-3">
                                <span className="mt-1 h-4 w-4 shrink-0 rounded-full bg-transparent border border-slate-300" />
                                <p>
                                    <span className="font-semibold">$100</span> per extra design or major section beyond
                                    the standard Steeze Store structure.
                                </p>
                            </li>
                            <li className="flex gap-3">
                                <span className="mt-1 h-4 w-4 shrink-0 rounded-full bg-transparent border border-slate-300" />
                                <p>
                                    Clear agreement before we start: you always know what&apos;s included and what counts
                                    as an upgrade.
                                </p>
                            </li>
                            <li className="flex gap-3">
                                <span className="mt-1 h-4 w-4 shrink-0 rounded-full bg-transparent border border-slate-300" />
                                <p>
                                    Scope stays grounded in the Steeze Store design system so the project remains
                                    maintainable and fast to ship.
                                </p>
                            </li>
                        </ul>

                        {/* Tip Note */}
                        <div className="rounded-2xl border border-emerald-500/50 p-3 mb-6 bg-transparent">
                            <p className="text-xs font-semibold uppercase tracking-[0.16em] mb-1">
                                Optional tip
                            </p>
                            <p className="text-xs md:text-sm">
                                There&apos;s also room for a small tip if you genuinely love the work. Tipping doesn&apos;t
                                replace proper scope, but it can sometimes unlock a little extra design flexibility.
                            </p>
                        </div>

                        {/* Secondary CTAs for upgrades */}
                        <div className="flex flex-wrap gap-3">
                            <a
                                href="https://wa.me/14376654926?text=Hi%20Obi%2C%20I%27d%20like%20a%20custom%20flow%20beyond%20the%20core%20Steeze%20Store%20features.%20Here%27s%20what%20I%20have%20in%20mind%3A%20%5Bbrief%20notes%5D"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-4 py-2 rounded-full bg-transparent text-xs md:text-sm font-medium border border-[hsl(var(--border))] hover:bg-[hsl(var(--popover))/0.1] transition"
                            >
                                Ask about a custom flow
                            </a>
                            <a
                                href="https://wa.me/14376654926?text=Hi%20Obi%2C%20I%20want%20to%20gift%20you%20a%20tip%20%F0%9F%92%B0%20for%20the%20Steeze%20Store%20work.%20Amount%3A%20%24%5Bamount%5D.%20Preferred%20method%3A%20PayPal%20%2F%20wire%20%2F%20Bitcoin.%20Thank%20you%21"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-4 py-2 rounded-full border border-emerald-400 text-xs md:text-sm font-medium hover:bg-emerald-500/10 transition"
                            >
                                Tip / say thanks
                            </a>
                        </div>
                    </motion.div>
                </div>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55 }}
                    className="flex flex-wrap gap-4 items-center justify-between"
                >
                    <div className="flex flex-wrap gap-3">
                        <a
                            href="https://thesteezestore.netlify.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-5 py-2.5 rounded-full bg-emerald-400 text-slate-900 text-sm font-semibold hover:bg-emerald-300 transition"
                        >
                            View Live Project
                        </a>
                        <a
                            href="https://github.com/Swiftdaops/thesteezestorefrontend.git"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-5 py-2.5 rounded-full border border-slate-500 text-stone-700 text-sm font-medium hover:bg-slate-800 transition"
                        >
                            See the GitHub Repo
                        </a>
                    </div>

                    {/* WhatsApp Prefill Intro */}
                    <a
                        href="https://wa.me/14376654926?text=Hi%20Obi%2C%20I%20run%20a%20clothing%20brand%20and%20I%27m%20interested%20in%20the%20Steeze%20Store%20WhatsApp%20checkout%20project.%20Let%27s%20get%20started."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs md:text-sm underline underline-offset-4 text-emerald-300 hover:text-emerald-200"
                    >
                        Introduce your clothing brand on WhatsApp to start the process →
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
