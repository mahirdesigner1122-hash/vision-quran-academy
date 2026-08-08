"use client";

import { motion } from "framer-motion";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { whatsappLinks } from "@/lib/whatsapp";

export default function FreeTrialCTA() {
  return (
    <section className="relative overflow-hidden bg-emerald-dark py-28 md:py-36">
      <div className="pointer-events-none absolute inset-0 arabesque-pattern opacity-[0.06]" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-gold/10 blur-[110px]" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="relative mx-auto max-w-2xl px-5 text-center md:px-8"
      >
        <p className="eyebrow">Begin Today</p>
        <h2 className="section-heading mt-5 text-3xl text-ivory sm:text-4xl md:text-[2.75rem] leading-tight">
          Your Quran Journey Can Begin Today.
        </h2>
        <p className="mt-6 text-ivory/65 md:text-lg">
          Take the first step toward a stronger connection with the Quran.
        </p>
        <div className="mt-10">
          <WhatsAppButton
            href={whatsappLinks.freeTrial}
            label="Book Your Free Trial on WhatsApp"
            variant="solid-gold"
            className="!px-9 !py-4 !text-base"
          />
        </div>
      </motion.div>
    </section>
  );
}
