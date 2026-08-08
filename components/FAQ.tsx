"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { whatsappLinks } from "@/lib/whatsapp";

const FAQS = [
  {
    q: "Who can join Vision Quran Academy?",
    a: "Students of all ages — children, teens, and adults — are welcome, regardless of prior experience.",
  },
  {
    q: "Do you offer one-to-one classes?",
    a: "Yes, every class is one-to-one between a student and their teacher for focused, personal learning.",
  },
  {
    q: "Do you teach children?",
    a: "Yes, our teachers are experienced in teaching children with patience and age-appropriate methods.",
  },
  {
    q: "What courses do you offer?",
    a: "Noorani Qaida, Quran Reading, Quran with Tajweed, Quran Memorization, Islamic Studies, and Quran Translation.",
  },
  {
    q: "Do you offer a free trial?",
    a: "Yes, you can book a free trial class to experience our teaching before enrolling.",
  },
  {
    q: "Which countries do you teach?",
    a: "We teach students worldwide through online classes, wherever you're based.",
  },
  {
    q: "What are the class timings?",
    a: "Timings are flexible and arranged around your schedule and timezone.",
  },
  {
    q: "How are classes conducted?",
    a: "Classes are conducted live online, one-to-one with your teacher.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-emerald-deep py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <div className="text-center">
          <p className="eyebrow">Questions</p>
          <h2 className="section-heading mt-4 text-3xl text-ivory md:text-4xl">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="mt-14 flex flex-col divide-y divide-ivory/10 rounded-2xl border border-ivory/10">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="px-6 py-2">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 py-4 text-left"
                >
                  <span className="section-heading text-base text-ivory md:text-lg">
                    {f.q}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`shrink-0 text-gold transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="pb-5 text-sm leading-relaxed text-ivory/65 md:text-base">
                        {f.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-ivory/60">Still have a question?</p>
          <div className="mt-4">
            <WhatsAppButton
              href={whatsappLinks.faq}
              label="Ask Us on WhatsApp"
              variant="outline-gold"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
