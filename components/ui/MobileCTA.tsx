"use client";

import { ArrowRight } from "lucide-react";
import { sendGAEvent } from "@next/third-parties/google";
import { whatsappLinks } from "@/lib/whatsapp";

export default function MobileCTA() {
  const handleClick = () => {
    sendGAEvent("event", "whatsapp_click", {
      event_category: "engagement",
      event_label: "Mobile Free Trial CTA",
    });
  };

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-gold/20 bg-emerald-dark/95 px-4 py-3 backdrop-blur md:hidden">
      <a
        href={whatsappLinks.freeTrial}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        className="flex w-full items-center justify-center gap-2 rounded-full bg-gold py-3 text-sm font-semibold text-emerald-dark"
      >
        Book Free Trial <ArrowRight size={16} />
      </a>
    </div>
  );
}