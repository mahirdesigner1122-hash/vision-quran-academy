"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const GlobeScene = dynamic(() => import("@/components/3d/GlobeScene"), {
  ssr: false,
});

export default function WorldwideSection() {
  return (
    <section className="relative overflow-hidden bg-emerald-dark py-24 md:py-32">
      <div className="mx-auto grid max-w-content items-center gap-12 px-5 md:grid-cols-2 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <p className="eyebrow">Global Reach</p>
          <h2 className="section-heading mt-4 text-3xl text-ivory md:text-4xl">
            The Quran Has No Borders
          </h2>
          <p className="mt-6 max-w-md text-ivory/65">
            Learn from experienced teachers from the comfort of your home —
            wherever that home is.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="relative mx-auto h-[320px] w-full max-w-[420px] sm:h-[400px]"
        >
          <GlobeScene />
        </motion.div>
      </div>
    </section>
  );
}
