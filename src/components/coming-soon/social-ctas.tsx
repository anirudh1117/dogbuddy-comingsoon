"use client";

import { motion } from "framer-motion";
import { FaInstagram, FaWhatsapp } from "react-icons/fa6";

const CTA_BASE_CLASS =
  "inline-flex h-11 items-center justify-center gap-2 rounded-xl px-5 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2";

export function SocialCtas() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.35, duration: 0.5, ease: "easeOut" }}
      className="mt-6"
      aria-label="Social links"
    >
      <div className="flex flex-wrap items-center justify-center gap-3">
        <motion.a
          href="https://wa.me/918266824369"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ y: -2, scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`${CTA_BASE_CLASS} bg-[#198f69] text-white shadow-[0_14px_25px_rgba(25,143,105,0.28)] hover:bg-[#147553] focus-visible:ring-[#8ed8bf]`}
        >
          <FaWhatsapp aria-hidden="true" className="text-base" />
          WhatsApp
        </motion.a>

        <motion.a
          href="https://instagram.com/tailsbuddy.in"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ y: -2, scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`${CTA_BASE_CLASS} border border-[#d9b99e] bg-white/80 text-[#6f3d1c] shadow-[0_14px_25px_rgba(123,83,57,0.18)] hover:bg-white focus-visible:ring-[#e8c9ac]`}
        >
          <FaInstagram aria-hidden="true" className="text-base" />
          Instagram
        </motion.a>
      </div>
    </motion.section>
  );
}
