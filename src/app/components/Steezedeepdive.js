"use client";

import { motion } from "framer-motion";

export default function FeatureDeepDive() {
    return (
        <section className="w-full py-12 md:py-20 bg-[hsl(var(--background))] text-[hsl(var(--foreground))]">
            <div className="max-w-7xl mx-auto px-4 md:px-12 lg:px-20">
                {/* Section Header */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center"
                >
                    User Interface Briefing
                    <span className="block text-lg font-medium">
                        What the Steeze Store UI provides for your brand
                    </span>
                </motion.h2>

                {/* Split Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14">
                    
                    {/* Customer Experience */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        className="flex flex-col gap-6"
                    >
                        <h3 className="text-2xl font-semibold">
                            Designed for Speed, Ease, and Beauty
                        </h3>
                        <ul className="space-y-3 leading-relaxed">
                            <li className="flex gap-3">
                                <span className="text-blue-600 dark:text-blue-400 font-bold">•</span>
                                Users can discover products instantly and purchase them immediately via a fast, frictionless checkout.
                            </li>

                            <li className="flex gap-3">
                                <span className="text-blue-600 dark:text-blue-400 font-bold">•</span>
                                Cart interaction feels instant, fluid, and intuitive.
                            </li>

                            <li className="flex gap-3">
                                <span className="text-blue-600 dark:text-blue-400 font-bold">•</span>
                                WhatsApp checkout removes all barriers—no long forms, zero friction, instant chat.
                            </li>
                        </ul>
                    </motion.div>

                    {/* Admin Experience */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        className="flex flex-col gap-6"
                    >
                        <h3 className="text-2xl font-semibold">
                            Built for Growth and Operational Efficiency
                        </h3>
                        <ul className="space-y-4 leading-relaxed">
                            <li className="flex gap-3">
                                <span className="text-blue-600 dark:text-blue-400 font-bold">•</span>
                                Admins can easily Add, Edit, or Delete products with a clean and secure interface.
                            </li>

                            <li className="flex gap-3">
                                <span className="text-blue-600 dark:text-blue-400 font-bold">•</span>
                                Every WhatsApp order is automatically logged in the admin dashboard for instant follow-up.
                            </li>

                            <li className="flex gap-3">
                                <span className="text-blue-600 dark:text-blue-400 font-bold">•</span>
                                Each order also logs the customer's device CID and validates their VID; when the VID matches an existing account the customer data is merged to avoid duplicate profiles.
                            </li>

                            <li className="flex gap-3">
                                <span className="text-blue-600 dark:text-blue-400 font-bold">•</span>
                                Faster reply time increases conversion rate and boosts customer satisfaction.
                            </li>

                            <li className="flex gap-3">
                                <span className="text-blue-600 dark:text-blue-400 font-bold">•</span>
                                Order insights help the owner craft personalized messages and improve long-term sales performance.
                            </li>
                        </ul>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
