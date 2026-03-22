import Image from "next/image";
import { AlertTriangle, ShieldCheck } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/hero.png"
          alt="Ciężarówka transportująca towary niebezpieczne"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-primary/40 backdrop-brightness-75" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left column */}
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary text-white rounded-sm font-label text-xs font-bold tracking-widest uppercase">
            <AlertTriangle size={14} fill="currentColor" />
            Bezpieczeństwo ADR
          </div>

          <h1 className="text-6xl md:text-8xl font-black font-headline text-white leading-[0.9] tracking-tighter">
            ADR EXPERT
            <br />
            <span className="text-secondary-fixed">Waldemar Stolarski</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/90 font-light max-w-xl leading-relaxed">
            Doradztwo DGSA, Bezpieczeństwo i Precyzja w Transporcie Materiałów
            Niebezpiecznych.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="#oferta"
              className="px-8 py-4 industrial-gradient text-white font-headline font-extrabold uppercase tracking-widest rounded-lg shadow-2xl hover:opacity-90 transition-opacity"
            >
              Sprawdź Ofertę
            </a>
            <a
              href="#kontakt"
              className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-headline font-extrabold uppercase tracking-widest rounded-lg hover:bg-white/20 transition-all"
            >
              Kontakt DGSA
            </a>
          </div>
        </div>

        {/* Right column — glass card */}
        <div className="hidden lg:block">
          <div className="glass-panel p-8 rounded-xl border border-white/20 shadow-2xl space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-white">
                <ShieldCheck size={22} fill="currentColor" />
              </div>
              <div>
                <p className="font-label text-xs uppercase tracking-widest text-primary/60">
                  Certyfikowany Doradca
                </p>
                <p className="font-headline font-bold text-primary">
                  Uprawnienia DGSA
                </p>
              </div>
            </div>
            <div className="h-px bg-outline-variant/30" />
            <p className="font-body text-primary/80 leading-relaxed italic">
              &ldquo;Zapewniam pełną zgodność z rygorystycznymi przepisami umowy
              ADR, minimalizując ryzyko operacyjne i prawne Twojego
              przedsiębiorstwa.&rdquo;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
