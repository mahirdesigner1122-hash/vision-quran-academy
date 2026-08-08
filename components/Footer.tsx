export default function Footer() {
  return (
    <footer className="border-t border-emerald-deep/10 bg-emerald-dark py-10">
      <div className="mx-auto flex max-w-content flex-col items-center gap-3 px-5 text-center md:px-8">
        <span className="font-display text-lg text-ivory">
          VISION <span className="text-gold-champagne">QURAN</span> ACADEMY
        </span>
        <p className="text-xs text-ivory/40">
          © {new Date().getFullYear()} Vision Quran Academy. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
