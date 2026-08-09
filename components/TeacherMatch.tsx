"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, RotateCcw } from "lucide-react";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { whatsappLinks } from "@/lib/whatsapp";

const AGE_GROUPS = ["Child", "Teen", "Adult"];
const COURSES = ["Quran Reading", "Tajweed", "Memorization", "Islamic Studies"];
const LANGUAGES = ["English", "Urdu", "Arabic"];
const LEVELS = ["Beginner", "Intermediate", "Advanced"];
const SCHEDULES = ["Mornings", "Evenings", "Weekends"];
const GENDERS = ["Male", "Female", "No Preference"];

type Teacher = {
  name: string;
  focus: string;
  experience: string;
  reasons: string[];
};

function matchTeacher(course: string, age: string, gender: string): Teacher {
  const male: Record<string, Teacher> = {
    memorization: {
      name: "Hafiz Ather",
      focus: "Hifz & Revision",
      experience: "Quran Memorization Specialist",
      reasons: [
        "Specializes in structured memorization plans",
        "Experienced with steady, long-term revision",
        "Patient, one-to-one teaching style",
      ],
    },
    default: {
      name: "Mahir",
      focus: "Quran Reading & Tajweed",
      experience: "Quran & Tajweed Teacher",
      reasons: [
        "Focused on fluent, confident recitation",
        "Tajweed specialization",
        "Flexible one-to-one scheduling",
      ],
    },
  };

  const female: Record<string, Teacher> = {
    memorization: {
      name: "Ustadha Kulsoom",
      focus: "Hifz & Revision",
      experience: "Quran Memorization Specialist",
      reasons: [
        "Specializes in structured memorization plans",
        "Experienced with steady, long-term revision",
        "Patient, one-to-one teaching style",
      ],
    },
    islamic: {
      name: "Ustadha Laiba",
      focus: "Islamic Studies & Seerah",
      experience: "Islamic Studies Teacher",
      reasons: [
        "Strong grounding in Seerah and Fiqh basics",
        "Engaging teaching style for all ages",
        "One-to-one, discussion-based lessons",
      ],
    },
    default: {
      name: "Ustadha Wareesha",
      focus: "Quran & Tajweed",
      experience: "Quran & Tajweed Teacher",
      reasons: [
        "Experienced with beginners and young learners",
        "Tajweed specialization",
        "One-to-one teaching",
      ],
    },
  };

  const isFemale = gender === "Female";
  const isMale = gender === "Male";

  if (course === "Memorization") {
    if (isMale) return male.memorization;
    if (isFemale) return female.memorization;
    return age === "Child" ? female.memorization : male.memorization;
  }

  if (course === "Islamic Studies") {
    if (isMale) return male.default;
    return female.islamic;
  }

  if (isMale) return male.default;
  if (isFemale) return female.default;

  return age === "Child" ? female.default : male.default;
}

function SelectRow({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: string[];
  value: string | null;
  onChange: (v: string) => void;
}) {
  return (
    <div>
      <p className="mb-3 text-sm font-medium text-ivory/70">{label}</p>
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => (
          <button
            key={opt}
            onClick={() => onChange(opt)}
            className={`rounded-full border px-4 py-2 text-xs font-medium transition-all ${
              value === opt
                ? "border-gold bg-gold text-emerald-dark"
                : "border-ivory/20 text-ivory/70 hover:border-gold/50 hover:text-gold-champagne"
            }`}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}

export default function TeacherMatch() {
  const [age, setAge] = useState<string | null>(null);
  const [gender, setGender] = useState<string | null>(null);
  const [course, setCourse] = useState<string | null>(null);
  const [language, setLanguage] = useState<string | null>(null);
  const [level, setLevel] = useState<string | null>(null);
  const [schedule, setSchedule] = useState<string | null>(null);

  const complete = age && gender && course && language && level && schedule;
  const teacher = useMemo(
    () => (complete ? matchTeacher(course!, age!, gender!) : null),
    [complete, course, age, gender]
  );

  function reset() {
    setAge(null);
    setGender(null);
    setCourse(null);
    setLanguage(null);
    setLevel(null);
    setSchedule(null);
  }

  return (
    <section id="teachers" className="card-emerald py-24 md:py-32">
      <div className="mx-auto max-w-content px-5 md:px-8">
        <div className="mx-auto max-w-xl text-center">
          <p className="eyebrow">Teacher Matching</p>
          <h2 className="section-heading mt-4 text-3xl text-ivory md:text-4xl">
            Find the Right Teacher for Your Journey
          </h2>
          <p className="mt-4 text-ivory/60">
            Tell us a little about your goals — this is a simple guide to
            help you start the conversation, not automated matching.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-5xl gap-10 rounded-3xl border border-gold/15 bg-ivory/[0.03] p-6 md:grid-cols-2 md:p-10">
          <div className="flex flex-col gap-7">
            <SelectRow label="Age group" options={AGE_GROUPS} value={age} onChange={setAge} />
            <SelectRow label="Preferred teacher gender" options={GENDERS} value={gender} onChange={setGender} />
            <SelectRow label="Course" options={COURSES} value={course} onChange={setCourse} />
            <SelectRow label="Preferred language" options={LANGUAGES} value={language} onChange={setLanguage} />
            <SelectRow label="Learning level" options={LEVELS} value={level} onChange={setLevel} />
            <SelectRow label="Preferred schedule" options={SCHEDULES} value={schedule} onChange={setSchedule} />
            {complete && (
              <button
                onClick={reset}
                className="inline-flex w-fit items-center gap-2 text-xs font-medium text-ivory/40 hover:text-ivory/70"
              >
                <RotateCcw size={13} /> Start over
              </button>
            )}
          </div>

          <div className="flex items-center justify-center rounded-2xl bg-ivory/[0.04] p-8">
            <AnimatePresence mode="wait">
              {teacher ? (
                <motion.div
                  key={teacher.name}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="text-center"
                >
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gold/15 font-display text-2xl text-gold-champagne">
                    {teacher.name.split(" ").map((w) => w[0]).join("")}
                  </div>
                  <h3 className="section-heading mt-5 text-xl text-ivory">
                    {teacher.name}
                  </h3>
                  <p className="mt-1 text-sm text-gold-champagne">
                    {teacher.focus}
                  </p>
                  <p className="text-xs text-ivory/50">{teacher.experience}</p>

                  <p className="eyebrow mt-6 text-left">
                    Why we recommend this teacher
                  </p>
                  <ul className="mt-3 flex flex-col gap-2 text-left">
                    {teacher.reasons.map((r) => (
                      <li key={r} className="flex items-start gap-2 text-sm text-ivory/70">
                        <Check size={14} className="mt-1 shrink-0 text-gold" />
                        {r}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-7">
                    <WhatsAppButton
                      href={whatsappLinks.teacherProfile(teacher.name)}
                      label="Talk About This Teacher"
                      variant="solid-gold"
                    />
                  </div>
                </motion.div>
              ) : (
                <motion.p
                  key="placeholder"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="max-w-xs text-center text-sm text-ivory/40"
                >
                  Answer the questions to see a recommended teacher profile.
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
