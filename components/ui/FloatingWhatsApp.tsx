"use client";

import { MessageCircle } from "lucide-react";
import { sendGAEvent } from "@next/third-parties/google";
import { whatsappLinks } from "@/lib/whatsapp";

export default function FloatingWhatsApp() {
  const handleClick = () => {
    sendGAEvent("event", "whatsapp_click", {
      event_category: "engagement",
      event_label: "Floating WhatsApp Button",
    });
  };

  return (
    <a
      href={whatsappLinks.general}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Vision Quran Academy on WhatsApp"
      onClick={handleClick}
      className="group fixed bottom-6 right-5 z-50 flex items-center gap-0 rounded-full bg-emerald-deep p-4 text-ivory shadow-[0_8px_30px_rgba(6,59,43,0.45)] ring-1 ring-gold/40 transition-all duration-300 hover:gap-2 hover:bg-[#0B4A36] hover:pr-5 md:bottom-8 md:right-8"
    >
      <MessageCircle size={24} className="text-gold-champagne" />

      <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-medium opacity-0 transition-all duration-300 group-hover:max-w-[9rem] group-hover:opacity-100">
        Chat with us
      </span>
    </a>
  );
}