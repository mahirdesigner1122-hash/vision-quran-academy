"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

// Placeholder testimonials — replace with real student/parent reviews.
const TESTIMONIALS = [
  {
    quote:
      "Placeholder testimonial: My child looks forward to every class and has grown so much in confidence reading Quran.",
    name: "Placeholder Parent",
  },
  {
    quote:
      "Placeholder testimonial: The one-to-one attention made learning Tajweed feel manageable at my own pace.",
    name: "Placeholder Student",
  },
  {
    quote:
      "Placeholder testimonial: Flexible scheduling meant classes always fit around our family's routine.",
    name: "Placeholder Parent",
  },
];

export default function Testimonials() {
  return (
    <section id="reviews" className="bg-ivory py-24 md:py-32">
      <div className="mx-auto max-w-content px-5 md:px-8">
        <div className="mx-auto max-w-xl text-center">
          <p className="eyebrow">Student Voices</p>
          <h2 className="section-heading mt-4 text-3xl text-emerald-deep md:text-4xl">
            What Our Students Say
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col rounded-2xl border border-emerald-deep/10 bg-white p-7"
            >
              <Quote size={22} className="text-gold/70" />
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-ink/70">
                {t.quote}
              </blockquote>
              <figcaption className="mt-5 text-sm font-semibold text-emerald-deep">
                — {t.name}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
