"use client";

import { motion, useReducedMotion } from "framer-motion";
import { TbPawFilled } from "react-icons/tb";

type Paw = {
  top: string;
  left: string;
  size: string;
  delay: number;
};

const paws: Paw[] = [
  { top: "14%", left: "8%", size: "text-2xl", delay: 0.2 },
  { top: "26%", left: "86%", size: "text-xl", delay: 1.1 },
  { top: "63%", left: "6%", size: "text-3xl", delay: 1.9 },
  { top: "76%", left: "83%", size: "text-2xl", delay: 0.8 },
  { top: "46%", left: "92%", size: "text-xl", delay: 2.1 },
];

export function BackgroundDecor() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      <motion.div
        className="absolute -top-16 left-[-8%] h-72 w-72 rounded-full bg-[#f4cfae]/65 blur-3xl"
        animate={
          shouldReduceMotion
            ? undefined
            : { x: [0, 26, 0], y: [0, 24, 0], scale: [1, 1.08, 1] }
        }
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-7rem] right-[-6%] h-80 w-80 rounded-full bg-[#b7ddcb]/60 blur-3xl"
        animate={
          shouldReduceMotion
            ? undefined
            : { x: [0, -30, 0], y: [0, -20, 0], scale: [1, 1.06, 1] }
        }
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      {paws.map((paw, index) => (
        <motion.div
          key={`${paw.top}-${paw.left}`}
          className="absolute text-[#8f714f]/30"
          style={{ top: paw.top, left: paw.left }}
          initial={{ opacity: 0, y: 10, scale: 0.95 }}
          animate={
            shouldReduceMotion
              ? { opacity: 0.22 }
              : {
                  opacity: [0.14, 0.34, 0.14],
                  y: [0, -8, 0],
                  rotate: index % 2 === 0 ? [-4, 2, -4] : [3, -2, 3],
                }
          }
          transition={{
            duration: 8 + index,
            delay: paw.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <TbPawFilled className={paw.size} />
        </motion.div>
      ))}
    </div>
  );
}
