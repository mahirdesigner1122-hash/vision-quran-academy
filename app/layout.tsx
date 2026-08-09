import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const display = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const siteUrl = "https://visionquranacademy.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: "Vision Quran Academy | Learn Quran Online With Tajweed",

  description:
    "Learn Quran online with experienced teachers through personalized one-to-one Quran, Tajweed, memorization and Islamic studies classes for students worldwide.",

  keywords: [
    "online Quran classes",
    "learn Quran online",
    "Quran classes online",
    "Quran with Tajweed online",
    "online Quran teacher",
    "Quran classes for kids",
    "learn Quran with Tajweed",
    "online Quran academy",
    "Quran teacher for kids",
    "Quran lessons online",
  ],

  alternates: {
    canonical: siteUrl,
  },

  openGraph: {
    title: "Vision Quran Academy | Learn Quran Online With Tajweed",
    description:
      "Personalized one-to-one Quran, Tajweed, memorization and Islamic studies classes for students worldwide.",
    url: siteUrl,
    siteName: "Vision Quran Academy",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Vision Quran Academy | Learn Quran Online With Tajweed",
    description:
      "Learn Quran online with experienced teachers through personalized one-to-one classes.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable}`}
    >
      <body>
        {children}

        <GoogleAnalytics gaId="G-Y3VRVYKV2K" />
      </body>
    </html>
  );
}