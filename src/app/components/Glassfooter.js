"use client";

import React from "react";
import { motion } from "framer-motion";

export default function GlassWhatsAppCTA() {
    const whatsappNumber = "14376654926"; // replace with your number (no +)
    const message =
        "Hi Obi, my name is ________. I need a website for my business.";
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        message
    )}`;

    return (
        <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="fixed bottom-0 left-0 right-0 z-50 px-4 pb-4 sm:px-6"
        >
            <div
                className="relative mx-auto max-w-6xl rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl shadow-[0_8px_40px_rgba(255,255,255,0.15)] overflow-hidden"
                role="region"
                aria-label="WhatsApp contact call to action"
            >
                {/* Light shine layer */}
                <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-linear-to-r from-white/20 via-white/5 to-transparent" />

                {/* Content */}
                <div className="relative flex flex-col gap-4 p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5">
                    <div className="text-sm sm:text-base text-stone-600 dark:text-white">
                        <p className="font-semibold">
                            Ready to buy a website for your business ?
                        </p>
                        <p className="opacity-80 text-xs sm:text-sm">
                            Start a quick WhatsApp conversation — no forms, no friction.
                        </p>
                    </div>

                    {/* CTA Button */}
                    <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Start WhatsApp conversation"
                        className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold bg-green-600 text-red-600 dark:text-red-600 hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-400 transition-colors min-h-11"
                    >
                        Let's Talk
                    </a>
                </div>
            </div>
        </motion.div>
    );
}
