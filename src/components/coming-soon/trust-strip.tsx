"use client";

import { motion } from "framer-motion";
import { RiShieldCheckLine } from "react-icons/ri";

const trustItems = [
  "Verified Walkers",
  "Safe & Caring Service",
  "Launching in India",
];

export function TrustStrip() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mt-8"
      aria-label="Trust highlights"
    >
      <ul className="flex flex-wrap items-center justify-center gap-3 text-sm text-[#4a5d53]">
        {trustItems.map((item) => (
          <li
            key={item}
            className="inline-flex items-center gap-2 rounded-full border border-[#c9d8d1]/90 bg-[#f3f9f6]/90 px-4 py-2"
          >
            <RiShieldCheckLine aria-hidden="true" className="text-[#2d7558]" />
            <span className="font-medium">{item}</span>
          </li>
        ))}
      </ul>
    </motion.section>
  );
}
