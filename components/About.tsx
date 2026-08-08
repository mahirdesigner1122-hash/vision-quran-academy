"use client";

import { motion } from "framer-motion";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { whatsappLinks } from "@/lib/whatsapp";

const POINTS = [
  "Personalized online Quran classes, one student at a time",
  "Experienced, qualified teachers of Tajweed and Quran reading",
  "Structured paths for memorization and Islamic studies",
  "Flexible scheduling built around your timezone and routine",
  "Students welcomed from every corner of the world",
];

export default function About() {
  return (
    <section id="about" className="relative bg-ivory py-24 md:py-32">
      <div className="mx-auto grid max-w-content gap-14 px-5 md:grid-cols-2 md:px-8 md:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <p className="eyebrow">About Us</p>
          <h2 className="section-heading mt-4 text-3xl text-emerald-deep md:text-4xl lg:text-[2.75rem] leading-tight">
            Guiding Hearts Through the Words of Allah
          </h2>
          <p className="mt-6 text-base leading-relaxed text-ink/70 md:text-[1.05rem]">
            Vision Quran Academy was founded to make authentic, personal Quran
            education accessible from home. Through one-to-one online classes,
            our teachers guide students of every age through Tajweed, fluent
            reading, memorization, and Islamic studies — at a pace that respects
            each learner&apos;s journey.
          </p>
          <div className="mt-8">
            <WhatsAppButton
              href={whatsappLinks.general}
              label="Talk to Us on WhatsApp"
              variant="outline-gold"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="rounded-2xl border border-gold/20 bg-white/60 p-8 md:p-10"
        >
          <ul className="flex flex-col gap-5">
            {POINTS.map((p, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                <span className="text-sm leading-relaxed text-ink/75 md:text-base">
                  {p}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
