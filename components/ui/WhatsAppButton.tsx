"use client";

import { MessageCircle, ArrowRight } from "lucide-react";

type Variant = "solid-gold" | "solid-ivory" | "outline-ivory" | "outline-gold" | "text";

export default function WhatsAppButton({
  href,
  label,
  variant = "solid-gold",
  className = "",
  showIcon = true,
  showArrow = false,
}: {
  href: string;
  label: string;
  variant?: Variant;
  className?: string;
  showIcon?: boolean;
  showArrow?: boolean;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold tracking-wide transition-all duration-300 focus-visible:outline-2";

  const styles: Record<Variant, string> = {
    "solid-gold":
      "bg-gold text-emerald-dark hover:bg-gold-champagne hover:shadow-[0_0_28px_rgba(201,149,46,0.45)] hover:-translate-y-0.5",
    "solid-ivory":
      "bg-ivory text-emerald-deep hover:bg-white hover:-translate-y-0.5",
    "outline-ivory":
      "border border-ivory/40 text-ivory hover:border-gold hover:text-gold",
    "outline-gold":
      "border border-gold/60 text-gold hover:bg-gold hover:text-emerald-dark",
    text: "text-gold hover:text-gold-champagne underline-offset-4 hover:underline",
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${label} — opens WhatsApp`}
      className={`${base} ${styles[variant]} ${className}`}
    >
      {showIcon && <MessageCircle size={18} strokeWidth={2} />}
      {label}
      {showArrow && <ArrowRight size={16} />}
    </a>
  );
}
