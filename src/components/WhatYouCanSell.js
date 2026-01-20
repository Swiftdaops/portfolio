"use client";

import { motion } from "framer-motion";

const items = [
  {
    title: "Animal Sales & Listings",
    points: [
      "Puppies & kittens with age, breed, and health status",
      "Livestock & poultry listings with purpose indicators",
      "Vet-verified health records & feeding guidance",
    ],
  },
  {
    title: "Veterinary Products",
    points: [
      "Dog & cat food with age and nutrition suitability",
      "Supplements, grooming, and health products",
      "Vet-approved badges for trusted recommendations",
    ],
  },
  {
    title: "Care & Training Packages",
    points: [
      "Optional puppy care & training programs",
      "Nutrition education and basic obedience classes",
      "Recurring digital revenue for your clinic",
    ],
  },
  {
    title: "Local Delivery & Pickup",
    points: [
      "Hyperlocal delivery confidence for customers",
      "Pickup options from your clinic",
      "Clear availability and stock visibility",
    ],
  },
];

export default function WhatYouCanSell() {
  return (
    <section className="bg-blue-50">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 max-w-2xl"
        >
          <h2 className="text-3xl font-bold text-gray-900">
            Everything a Modern Veterinary Clinic Sells — In One Platform
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            This is not a generic e-commerce website.  
            It is designed around how veterinarians actually sell, recommend,
            and educate.
          </p>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-2xl border border-gray-100 bg-blue-50 p-6 shadow-sm"
            >
              <h3 className="mb-3 text-lg font-semibold text-gray-900">
                {item.title}
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                {item.points.map((p) => (
                  <li key={p}>• {p}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
