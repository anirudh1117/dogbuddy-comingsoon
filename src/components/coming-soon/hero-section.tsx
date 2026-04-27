"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.1,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const titleWords = ["TailsBuddy", "is", "Coming", "Soon"];

export function HeroSection() {
  return (
    <motion.header
      variants={container}
      initial="hidden"
      animate="show"
      className="space-y-3 text-center sm:space-y-4"
    >
      <motion.p
        variants={item}
        className="mx-auto inline-flex rounded-full border border-[#a4bdb1]/65 bg-[#f3f8f5]/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-[#4d665d]"
      >
        Dog Walking, Elevated
      </motion.p>

      <motion.h1
        variants={item}
        className="text-balance text-5xl font-semibold leading-[0.95] text-[#14221c] sm:text-6xl lg:text-7xl"
      >
        <span className="block">TailsBuddy is</span>
        <motion.span
          className="relative inline-block bg-gradient-to-r from-[#9a5f35] via-[#cf8d57] to-[#2f7d60] bg-clip-text text-transparent"
          animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
          transition={{ duration: 6.5, ease: "easeInOut", repeat: Infinity }}
          style={{ backgroundSize: "200% 200%" }}
        >
          Coming Soon
          <motion.span
            className="absolute -bottom-1 left-0 h-[3px] w-full rounded-full bg-gradient-to-r from-[#f2be92]/30 via-[#cf8d57]/90 to-[#2f7d60]/45"
            animate={{ scaleX: [0.9, 1, 0.9], opacity: [0.65, 1, 0.65] }}
            transition={{ duration: 2.7, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.span>
      </motion.h1>

      <motion.div
        variants={item}
        className="flex items-center justify-center gap-2"
        aria-hidden="true"
      >
        {titleWords.map((word, index) => (
          <motion.span
            key={word}
            className="h-1.5 w-1.5 rounded-full bg-[#d29a6f]/70"
            animate={{ y: [0, -4, 0], opacity: [0.5, 1, 0.5] }}
            transition={{
              duration: 1.6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.14,
            }}
          />
        ))}
      </motion.div>

      <motion.p
        variants={item}
        className="mx-auto max-w-2xl text-pretty text-base leading-7 text-[#4e5f56] sm:text-lg"
      >
        Trusted dog walking services for happy pets and stress-free owners.
      </motion.p>

      <motion.p
        variants={item}
        className="text-sm font-medium tracking-wide text-[#7b695a]"
      >
        Launching shortly in your city.
      </motion.p>
    </motion.header>
  );
}
