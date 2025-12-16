"use client"
import React from "react";
import { motion } from "framer-motion";

export default function SteezeProblemSectionClient({
  title = "Steeze Store — Reduce Abandoned Carts with a 3-Click WhatsApp Checkout",
  description = "Fashion brands lose customers at checkout. The Steeze Store replaces long forms with a chat-first WhatsApp checkout that prioritizes speed, simplicity, and personal conversation.",
}) {
  return (
    <>
      {/* Headline */}
      <motion.h2
        id="steeze-problem-heading"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-2 md:mb-4"
      >
        Fashion brands struggle with long checkout flows and abandoned carts.
      </motion.h2>

      {/* Body Text Card */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="rounded-2xl p-4 md:p-8 shadow-sm bg-[hsl(var(--card))] text-[hsl(var(--card-foreground))] border-[hsl(var(--border))]"
      >
        <p className="text-base md:text-lg leading-relaxed mb-3">
         Most local and international fashion businesses lose customers at the exact moment they are ready to buy—during payment and account registration. Long forms, slow checkout processes, and unreliable payment flows lead directly to abandoned carts and lost revenue
        </p>
        <p className="text-base md:text-lg leading-relaxed">
          The Steeze Store solves this by combining <span className="font-semibold">speed, simplicity, and personal conversation</span>—the same way customers already shop on WhatsApp. Instead of forcing users through a traditional ecommerce checkout, we move them into a familiar chat-first flow that feels natural and frictionless.
        </p>
      </motion.div>

      {/* Small Footer Line (optional) */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="mt-4 text-sm"
      >
        This sets the stage for why the Steeze Store's 3-click WhatsApp checkout is a meaningful innovation—not just a design choice.
      </motion.p>
    </>
  );
}
