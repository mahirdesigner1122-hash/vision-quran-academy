"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { whatsappLinks } from "@/lib/whatsapp";

const ArchScene = dynamic(() => import("@/components/3d/ArchScene"), {
  ssr: false,
});

const FEATURES = [
  "One-to-One Classes",
  "Qualified Teachers",
  "Flexible Timings",
  "Students Worldwide",
];

export default function Hero() {
  const [entered, setEntered] = useState(false);

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-emerald-dark"
    >
      <div className="absolute inset-0">
        <ArchScene entered={entered} />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-emerald-dark via-emerald-dark/30 to-emerald-dark/60" />

      <div className="relative z-10 mx-auto w-full max-w-content px-5 pt-24 pb-16 md:px-8">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="eyebrow text-center"
        >
          Vision Quran Academy
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="section-heading mx-auto mt-5 max-w-3xl text-center text-4xl leading-[1.1] text-ivory sm:text-5xl md:text-6xl"
        >
          Learn the Quran.
          <br />
          Build a Lifelong Connection.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto mt-6 max-w-xl text-center text-base text-ivory/75 md:text-lg"
        >
          Learn Quran with Tajweed from experienced teachers through
          personalized online classes — wherever you are in the world.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <WhatsAppButton
            href={whatsappLinks.freeTrial}
            label="Book a Free Trial"
            variant="solid-gold"
          />
          <a
            href="#courses"
            className="inline-flex items-center justify-center rounded-full border border-ivory/30 px-7 py-3.5 text-sm font-semibold text-ivory transition-colors hover:border-gold hover:text-gold-champagne"
          >
            Explore Courses
          </a>
        </motion.div>

        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mx-auto mt-8 flex max-w-2xl flex-wrap items-center justify-center gap-x-6 gap-y-3"
        >
          {FEATURES.map((f) => (
            <li
              key={f}
              className="flex items-center gap-2 text-sm text-ivory/70"
            >
              <Check size={15} className="text-gold-champagne" />
              {f}
            </li>
          ))}
        </motion.ul>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 flex justify-center"
        >
          <button
            onClick={() => setEntered((v) => !v)}
            className="group inline-flex items-center gap-2 rounded-full border border-gold/40 px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold-champagne transition-all hover:border-gold hover:bg-gold/10"
            aria-pressed={entered}
          >
            <Sparkles size={14} className="animate-pulse" />
            {entered ? "Leave the Journey" : "Enter Your Quran Journey"}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
