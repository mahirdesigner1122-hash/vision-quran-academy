"use client";

import { motion } from "framer-motion";
import {
  BookOpenText,
  BookMarked,
  Mic2,
  Brain,
  Landmark,
  Languages,
} from "lucide-react";
import { whatsappLinks } from "@/lib/whatsapp";

const COURSES = [
  {
    n: "01",
    icon: BookOpenText,
    title: "Noorani Qaida",
    text: "The foundation course teaching correct Arabic letter recognition and pronunciation.",
  },
  {
    n: "02",
    icon: BookMarked,
    title: "Quran Reading",
    text: "Build fluency and confidence reading the Quran with correct pronunciation.",
  },
  {
    n: "03",
    icon: Mic2,
    title: "Quran with Tajweed",
    text: "Master the rules of Tajweed for beautiful, accurate recitation.",
  },
  {
    n: "04",
    icon: Brain,
    title: "Quran Memorization",
    text: "A structured Hifz path with revision support, tailored to your pace.",
  },
  {
    n: "05",
    icon: Landmark,
    title: "Islamic Studies",
    text: "Explore Seerah, Fiqh essentials, and core Islamic knowledge.",
  },
  {
    n: "06",
    icon: Languages,
    title: "Quran Translation",
    text: "Understand the meaning and message behind the words you recite.",
  },
];

export default function Courses() {
  return (
    <section id="courses" className="bg-ivory py-24 md:py-32">
      <div className="mx-auto max-w-content px-5 md:px-8">
        <div className="mx-auto max-w-xl text-center">
          <p className="eyebrow">Our Courses</p>
          <h2 className="section-heading mt-4 text-3xl text-emerald-deep md:text-4xl">
            A Course for Every Stage of Your Journey
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {COURSES.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="group relative overflow-hidden rounded-2xl border border-emerald-deep/10 bg-white p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_18px_40px_rgba(6,59,43,0.12)]"
              style={{ perspective: "800px" }}
            >
              <div className="flex items-start justify-between">
                <c.icon
                  size={28}
                  className="text-emerald-deep transition-colors group-hover:text-gold"
                />
                <span className="font-display text-2xl text-emerald-deep/10">
                  {c.n}
                </span>
              </div>
              <h3 className="section-heading mt-5 text-lg text-emerald-deep">
                {c.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/60">
                {c.text}
              </p>
              <a
                href={whatsappLinks.course(c.title)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-gold transition-colors hover:text-emerald-deep"
              >
                Ask on WhatsApp
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
