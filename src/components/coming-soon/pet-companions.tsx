"use client";

import { motion, useReducedMotion } from "framer-motion";
import { FaCat, FaDog } from "react-icons/fa6";

export function PetCompanions() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.24, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="mt-7"
      aria-label="Animated pets"
    >
      <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-center gap-3 sm:gap-4">
        <motion.article
          className="min-w-[8rem] rounded-2xl border border-[#e2d5c8] bg-gradient-to-br from-[#fff8f1] via-[#fffefb] to-[#f0f8f4] px-4 py-3 text-center shadow-[0_14px_40px_rgba(56,35,24,0.1)]"
          animate={
            shouldReduceMotion ? undefined : { y: [0, -5, 0], rotate: [-1.5, 1.5, -1.5] }
          }
          transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.div
            animate={shouldReduceMotion ? undefined : { rotate: [-8, 8, -8] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-[#fde7d2] text-[#905a2e]"
          >
            <FaDog className="text-xl" aria-hidden="true" />
          </motion.div>
          <p className="text-xs font-semibold tracking-[0.08em] text-[#6f5645]">Friendly Walks</p>
        </motion.article>

        <motion.article
          className="min-w-[8rem] rounded-2xl border border-[#d7e6dd] bg-gradient-to-br from-[#f2fbf6] via-[#ffffff] to-[#f5faf9] px-4 py-3 text-center shadow-[0_14px_40px_rgba(42,63,51,0.1)]"
          animate={shouldReduceMotion ? undefined : { y: [0, -6, 0] }}
          transition={{ duration: 4.9, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        >
          <motion.div
            animate={shouldReduceMotion ? undefined : { x: [0, 3, -3, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
            className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-[#deefe7] text-[#2f7557]"
          >
            <FaCat className="text-xl" aria-hidden="true" />
          </motion.div>
          <p className="text-xs font-semibold tracking-[0.08em] text-[#446553]">Calm Companions</p>
        </motion.article>

        <motion.article
          className="min-w-[8rem] rounded-2xl border border-[#e3d8ec] bg-gradient-to-br from-[#faf4ff] via-[#fffdfd] to-[#f5ecff] px-4 py-3 text-center shadow-[0_14px_40px_rgba(68,47,83,0.1)]"
          animate={
            shouldReduceMotion ? undefined : { y: [0, -4, 0], rotate: [1.3, -1.3, 1.3] }
          }
          transition={{ duration: 5.4, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
        >
          <motion.div
            animate={shouldReduceMotion ? undefined : { scale: [1, 1.08, 1] }}
            transition={{ duration: 1.9, repeat: Infinity, ease: "easeInOut" }}
            className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-[#ecdff7] text-[#6d4f88]"
          >
            <FaCat className="text-xl" aria-hidden="true" />
          </motion.div>
          <p className="text-xs font-semibold tracking-[0.08em] text-[#5f4f76]">Happy Paws</p>
        </motion.article>
      </div>
    </motion.section>
  );
}
