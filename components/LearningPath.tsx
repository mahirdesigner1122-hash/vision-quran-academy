"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, RotateCcw } from "lucide-react";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { whatsappLinks } from "@/lib/whatsapp";

const GOALS = [
  "Learn Quran from the beginning",
  "Improve Quran Reading",
  "Learn Tajweed",
  "Memorize Quran",
  "Understand Quran",
  "Islamic Studies",
];
const LEARNERS = ["Child", "Teen", "Adult"];
const LEVELS = ["Beginner", "Basic", "Intermediate", "Advanced"];

function recommendPath(goal: string, level: string): string[] {
  if (goal === "Learn Quran from the beginning" || level === "Beginner") {
    return ["Noorani Qaida", "Quran Reading", "Tajweed"];
  }
  if (goal === "Improve Quran Reading") {
    return ["Quran Reading", "Tajweed", "Fluent Recitation"];
  }
  if (goal === "Learn Tajweed") {
    return ["Tajweed Foundations", "Applied Tajweed", "Fluent Recitation"];
  }
  if (goal === "Memorize Quran") {
    return ["Tajweed", "Memorization (Hifz)", "Revision & Retention"];
  }
  if (goal === "Understand Quran") {
    return ["Quran Reading", "Quran Translation", "Tafsir Basics"];
  }
  return ["Islamic Studies Foundations", "Quran & Seerah", "Applied Practice"];
}

export default function LearningPath() {
  const [step, setStep] = useState(0);
  const [goal, setGoal] = useState<string | null>(null);
  const [learner, setLearner] = useState<string | null>(null);
  const [level, setLevel] = useState<string | null>(null);

  const done = goal && learner && level;
  const path = useMemo(
    () => (done ? recommendPath(goal!, level!) : []),
    [done, goal, level]
  );

  function reset() {
    setStep(0);
    setGoal(null);
    setLearner(null);
    setLevel(null);
  }

  const steps = [
    {
      question: "What would you like to achieve?",
      options: GOALS,
      value: goal,
      set: (v: string) => {
        setGoal(v);
        setStep(1);
      },
    },
    {
      question: "Who is learning?",
      options: LEARNERS,
      value: learner,
      set: (v: string) => {
        setLearner(v);
        setStep(2);
      },
    },
    {
      question: "What's your current level?",
      options: LEVELS,
      value: level,
      set: (v: string) => {
        setLevel(v);
        setStep(3);
      },
    },
  ];

  return (
    <section className="bg-ivory py-24 md:py-32">
      <div className="mx-auto max-w-content px-5 md:px-8">
        <div className="mx-auto max-w-xl text-center">
          <p className="eyebrow">A Guided Start</p>
          <h2 className="section-heading mt-4 text-3xl text-emerald-deep md:text-4xl">
            Find Your Quran Learning Path
          </h2>
          <p className="mt-4 text-ink/60">
            Answer three quick questions to see a suggested path — then
            discuss it with a real teacher on WhatsApp.
          </p>
        </div>

        <div className="mx-auto mt-14 max-w-2xl rounded-3xl border border-gold/20 bg-white/70 p-6 shadow-sm md:p-10">
          <AnimatePresence mode="wait">
            {!done ? (
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -16 }}
                transition={{ duration: 0.35 }}
              >
                <div className="mb-6 flex items-center gap-2">
                  {steps.map((_, i) => (
                    <div
                      key={i}
                      className={`h-1 flex-1 rounded-full ${
                        i <= step ? "bg-gold" : "bg-gold/15"
                      }`}
                    />
                  ))}
                </div>
                <h3 className="section-heading text-xl text-emerald-deep md:text-2xl">
                  {steps[step].question}
                </h3>
                <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {steps[step].options.map((opt) => (
                    <button
                      key={opt}
                      onClick={() => steps[step].set(opt)}
                      className="rounded-xl border border-emerald-deep/15 px-5 py-3.5 text-left text-sm font-medium text-ink/80 transition-all hover:border-gold hover:bg-gold/5 hover:text-emerald-deep"
                    >
                      {opt}
                    </button>
                  ))}
                </div>
                {step > 0 && (
                  <button
                    onClick={() => setStep((s) => s - 1)}
                    className="mt-6 text-xs font-medium text-ink/40 hover:text-ink/70"
                  >
                    ← Back
                  </button>
                )}
              </motion.div>
            ) : (
              <motion.div
                key="result"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <p className="eyebrow">Your Recommended Learning Path</p>
                <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                  {path.map((p, i) => (
                    <div key={p} className="flex items-center gap-3">
                      <div className="rounded-full bg-emerald-deep px-5 py-2.5 text-sm font-semibold text-ivory">
                        {p}
                      </div>
                      {i < path.length - 1 && (
                        <ArrowRight
                          size={16}
                          className="hidden text-gold sm:block"
                        />
                      )}
                    </div>
                  ))}
                </div>

                <div className="mt-10 text-center">
                  <p className="section-heading text-lg text-emerald-deep">
                    Ready to begin?
                  </p>
                  <div className="mt-5 flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <WhatsAppButton
                      href={whatsappLinks.learningPlan(goal!, level!, learner!)}
                      label="Discuss My Learning Plan on WhatsApp"
                      variant="solid-gold"
                    />
                    <button
                      onClick={reset}
                      className="inline-flex items-center gap-2 text-sm font-medium text-ink/50 hover:text-ink/80"
                    >
                      <RotateCcw size={14} /> Start over
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
