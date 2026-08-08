"use client";

import { motion } from "framer-motion";
import { Mail, Instagram, Facebook } from "lucide-react";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { whatsappLinks } from "@/lib/whatsapp";

export default function Contact() {
  return (
    <section className="bg-ivory py-24 md:py-32">
      <div className="mx-auto max-w-2xl px-5 text-center md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="eyebrow">Get in Touch</p>
          <h2 className="section-heading mt-4 text-3xl text-emerald-deep md:text-4xl">
            Let&apos;s Start Your Quran Journey
          </h2>
          <p className="mt-4 text-ink/60">WhatsApp: +92 301 2711955</p>

          <div className="mt-8">
            <WhatsAppButton
              href={whatsappLinks.general}
              label="Chat With Us on WhatsApp"
              variant="solid-gold"
            />
          </div>

          <div className="mt-8 flex items-center justify-center gap-6 text-ink/40">
            <a
              href="mailto:info@visionquranacademy.com"
              aria-label="Email Vision Quran Academy"
              className="hover:text-emerald-deep"
            >
              <Mail size={19} />
            </a>
            <a
              href="#"
              aria-label="Vision Quran Academy on Instagram"
              className="hover:text-emerald-deep"
            >
              <Instagram size={19} />
            </a>
            <a
              href="#"
              aria-label="Vision Quran Academy on Facebook"
              className="hover:text-emerald-deep"
            >
              <Facebook size={19} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
