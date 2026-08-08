"use client";

import { motion } from "framer-motion";

const STEPS = [
  {
    n: "01",
    title: "Contact Us",
    text: "Message us on WhatsApp.",
  },
  {
    n: "02",
    title: "Book Your Free Trial",
    text: "Choose a convenient time.",
  },
  {
    n: "03",
    title: "Begin Your Journey",
    text: "Start learning with your teacher.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-ivory py-24 md:py-32">
      <div className="mx-auto max-w-content px-5 md:px-8">
        <div className="mx-auto max-w-xl text-center">
          <p className="eyebrow">How It Works</p>
          <h2 className="section-heading mt-4 text-3xl text-emerald-deep md:text-4xl">
            Three Simple Steps to Begin
          </h2>
        </div>

        <div className="relative mt-20 grid grid-cols-1 gap-14 md:grid-cols-3 md:gap-8">
          <div className="gold-rule absolute left-[16%] right-[16%] top-6 hidden h-px animate-gold-line md:block" />
          {STEPS.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="relative text-center"
            >
              <div className="relative z-10 mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-gold bg-ivory font-display text-sm text-emerald-deep">
                {s.n}
              </div>
              <h3 className="section-heading mt-6 text-lg text-emerald-deep">
                {s.title}
              </h3>
              <p className="mt-2 text-sm text-ink/60">{s.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
