"use client";

import { ArrowRight } from "lucide-react";
import { whatsappLinks } from "@/lib/whatsapp";

export default function MobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-gold/20 bg-emerald-dark/95 px-4 py-3 backdrop-blur md:hidden">
      <a
        href={whatsappLinks.freeTrial}
        target="_blank"
        rel="noopener noreferrer"
        className="flex w-full items-center justify-center gap-2 rounded-full bg-gold py-3 text-sm font-semibold text-emerald-dark"
      >
        Book Free Trial <ArrowRight size={16} />
      </a>
    </div>
  );
}
