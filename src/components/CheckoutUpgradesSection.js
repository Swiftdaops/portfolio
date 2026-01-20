"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CheckoutUpgradesSection({ ctaHref }) {
  return (
    <section className="bg-blue-50 py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Flexible Checkout & Business Growth Upgrades
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Start simple, sell confidently, and upgrade only when your veterinary
            business is ready to grow.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Included */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-2xl shadow-sm p-8 border"
          >
            <span className="inline-block mb-3 text-sm font-semibold text-blue-600">
              Included
            </span>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              WhatsApp Checkout Flow
            </h3>
            <p className="text-gray-600 mb-6">
              Customers select animals or products and continue checkout directly
              on WhatsApp with their order pre-filled.
            </p>
            <ul className="space-y-3 text-gray-700 text-sm">
              <li>• No payment setup required</li>
              <li>• Human interaction builds trust</li>
              <li>• Ideal for consultations & local orders</li>
              <li>• Reduces abandoned checkouts</li>
            </ul>
          </motion.div>

          {/* Online Payments */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-md p-8 border border-blue-200 relative"
          >
            <span className="inline-block mb-3 text-sm font-semibold text-green-600">
              Upgrade
            </span>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Online Payments Integration
            </h3>
            <p className="text-2xl font-bold text-gray-900 mb-4">$1,000</p>
            <p className="text-gray-600 mb-6">
              Enable customers to pay directly on your website with a secure,
              professional checkout experience.
            </p>
            <ul className="space-y-3 text-gray-700 text-sm">
              <li>• Secure online checkout</li>
              <li>• Automated order confirmation</li>
              <li>• Reduced manual follow-ups</li>
              <li>• Built specifically for vet stores</li>
            </ul>
          </motion.div>

          {/* Growth Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white rounded-2xl shadow-sm p-8 border"
          >
            <span className="inline-block mb-3 text-sm font-semibold text-purple-600">
              Growth Features
            </span>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Business Insights & Reviews
            </h3>
            <p className="text-gray-600 mb-6">
              Turn your store into a learning tool that helps you stock better,
              price smarter, and build trust.
            </p>
            <ul className="space-y-4 text-gray-700 text-sm">
              <li>
                <strong>Analytics & Insights — $500</strong>
                <br />
                Track product interest, views, and customer behavior.
              </li>
              <li>
                <strong>Reviews & Comments — $500</strong>
                <br />
                Collect feedback and build confidence with social proof.
              </li>
            </ul>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-16"
        >
          {ctaHref ? (
            <a
              href={ctaHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-8 py-4 text-white font-semibold hover:bg-blue-700 transition"
            >
              Discuss My Veterinary Store
            </a>
          ) : (
            <Link
              href="#contact"
              className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-8 py-4 text-white font-semibold hover:bg-blue-700 transition"
            >
              Discuss My Veterinary Store
            </Link>
          )}
        </motion.div>
      </div>
    </section>
  );
}
