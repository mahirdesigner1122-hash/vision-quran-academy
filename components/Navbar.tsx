"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { whatsappLinks } from "@/lib/whatsapp";

const LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Courses", href: "#courses" },
  { label: "Teachers", href: "#teachers" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-emerald-dark/90 backdrop-blur-md shadow-[0_4px_24px_rgba(0,0,0,0.25)]"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-content items-center justify-between px-5 py-4 md:px-8">
        <a href="#home" className="flex items-center gap-2">
          <span className="font-display text-lg tracking-wide text-ivory md:text-xl">
            VISION <span className="text-gold-champagne">QURAN</span> ACADEMY
          </span>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-ivory/85 transition-colors hover:text-gold-champagne"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:block">
          <WhatsAppButton
            href={whatsappLinks.freeTrial}
            label="Book Free Trial"
            variant="solid-gold"
            className="!py-2.5 !px-5 !text-xs"
          />
        </div>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          className="text-ivory lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden bg-emerald-dark/98 backdrop-blur-md px-5 pb-6">
          <div className="flex flex-col gap-4 pt-2">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-ivory/90 hover:text-gold-champagne"
              >
                {l.label}
              </a>
            ))}
            <WhatsAppButton
              href={whatsappLinks.freeTrial}
              label="Book Free Trial"
              variant="solid-gold"
              className="mt-2 w-full"
            />
          </div>
        </div>
      )}
    </header>
  );
}
