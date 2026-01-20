"use client";

import { motion } from "framer-motion";

const steps = [
  {
    step: "01",
    title: "You Add & Approve Products",
    description:
      "Upload animals, food, and health products with clear age, breed, and suitability rules. You stay in full control of what customers see and buy.",
  },
  {
    step: "02",
    title: "Customers Shop With Confidence",
    description:
      "Pet owners browse by animal, age, and purpose. Each product explains why it is suitable — reducing confusion and increasing trust.",
  },
  {
    step: "03",
    title: "Orders, Payments & Fulfillment",
    description:
      "Receive orders, manage stock, and choose delivery or clinic pickup. Everything is organized in one simple dashboard.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-blue-50">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 max-w-2xl"
        >
          <h2 className="text-3xl font-bold text-gray-900">
            How It Works — Simple, Structured, Vet-Controlled
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            No technical setup. No complicated tools.  
            Just a clear system designed around veterinary workflows.
          </p>
        </motion.div>

        <div className="grid gap-10 md:grid-cols-3">
          {steps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className="rounded-2xl bg-white p-8 shadow-sm"
            >
              <div className="mb-4 text-sm font-semibold text-blue-600">
                STEP {step.step}
              </div>
              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
