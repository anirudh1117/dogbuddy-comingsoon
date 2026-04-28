"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { RiSparklingLine } from "react-icons/ri";
import { toast } from "sonner";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function NotifyForm() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!EMAIL_PATTERN.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setError("");
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/notify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const payload = (await response.json()) as {
        message?: string;
        alreadyExists?: boolean;
      };

      if (!response.ok) {
        setError(payload.message ?? "Something went wrong. Please try again.");
        return;
      }

      console.log("TailsBuddy notify signup", {
        email,
        time: new Date().toISOString(),
      });

      if (payload.alreadyExists) {
        toast.info(payload.message ?? "You are already on the list.");
      } else {
        toast.success(payload.message ?? "You are on the list. We will notify you soon.");
      }

      setEmail("");
    } catch {
      setError("Could not save your email right now. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
      className="mx-auto mt-8 w-full max-w-2xl"
      aria-label="Notify me form"
    >
      <form
        onSubmit={handleSubmit}
        noValidate
        className="space-y-3 rounded-2xl border border-[#d9e6de] bg-white/70 p-3 shadow-[0_16px_40px_rgba(45,66,56,0.08)] sm:p-4"
      >
        <label htmlFor="notify-email" className="sr-only">
          Email address
        </label>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <input
            id="notify-email"
            type="email"
            inputMode="email"
            autoComplete="email"
            placeholder="Enter your email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            aria-invalid={error ? true : false}
            aria-describedby={error ? "notify-email-error" : undefined}
            className="h-12 w-full rounded-xl border border-[#9bb5a9]/60 bg-white px-4 text-sm text-[#1b2821] shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] outline-none transition focus:border-[#58836f] focus:ring-2 focus:ring-[#b8d6c7]"
            required
          />
          <motion.button
            type="submit"
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            disabled={isSubmitting}
            className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#1f6b52] via-[#217a5b] to-[#209a70] px-6 text-sm font-semibold text-white shadow-[0_15px_35px_rgba(32,116,86,0.35)] transition hover:from-[#195842] hover:to-[#1a7a57] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#96c6b2]"
          >
            <RiSparklingLine aria-hidden="true" className="text-base" />
            {isSubmitting ? "Saving..." : "Notify Me"}
          </motion.button>
        </div>
        {error ? (
          <p id="notify-email-error" className="text-sm font-medium text-[#9b3f3f]">
            {error}
          </p>
        ) : (
          <p className="text-sm text-[#5b6b62]">
            Be first to know when TailsBuddy launches in your area.
          </p>
        )}
      </form>
    </motion.section>
  );
}
