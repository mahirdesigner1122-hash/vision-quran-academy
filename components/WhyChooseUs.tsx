"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  Users,
  CalendarClock,
  Globe2,
  Sparkles,
  Gift,
} from "lucide-react";

const FEATURES = [
  {
    icon: GraduationCap,
    title: "Qualified Teachers",
    text: "Learn from teachers trained in Tajweed and traditional Quran recitation.",
  },
  {
    icon: Users,
    title: "One-to-One Classes",
    text: "Every class is personal — focused entirely on your pace and goals.",
  },
  {
    icon: CalendarClock,
    title: "Flexible Scheduling",
    text: "Choose class times that work with your life, wherever you are.",
  },
  {
    icon: Globe2,
    title: "Students Worldwide",
    text: "Join learners connecting with their teachers from across the globe.",
  },
  {
    icon: Sparkles,
    title: "Personalized Learning",
    text: "A path shaped around your level, goals, and preferred pace.",
  },
  {
    icon: Gift,
    title: "Free Trial",
    text: "Experience a class with us before you commit to a plan.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-emerald-deep py-24 md:py-32">
      <div className="mx-auto max-w-content px-5 md:px-8">
        <div className="mx-auto max-w-xl text-center">
          <p className="eyebrow">Why Choose Us</p>
          <h2 className="section-heading mt-4 text-3xl text-ivory md:text-4xl">
            A Learning Experience Built Around You
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="group rounded-2xl border border-ivory/10 bg-ivory/[0.03] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:bg-ivory/[0.06]"
            >
              <f.icon
                size={26}
                className="text-gold-champagne transition-transform duration-300 group-hover:scale-110"
              />
              <h3 className="section-heading mt-5 text-lg text-ivory">
                {f.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ivory/60">
                {f.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
