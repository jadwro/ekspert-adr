import { BarChart2, ClipboardCheck, Users, Headphones } from "lucide-react";

export default function OfertaSection() {
  return (
    <section
      className="py-24 bg-surface-container-high scroll-mt-20"
      id="oferta"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-black font-headline text-primary tracking-tighter uppercase">
            Nasza Oferta
          </h2>
          <p className="text-outline max-w-2xl mx-auto">
            Kompleksowe wsparcie dla firm transportowych, spedycyjnych i
            produkcyjnych w zakresie ADR.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6">
          {/* Sprawozdania */}
          <div className="md:col-span-3 lg:col-span-4 bg-surface-container-lowest p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mb-6">
              <BarChart2 size={22} aria-hidden="true" />
            </div>
            <h3 className="text-xl font-bold font-headline text-primary mb-4 uppercase">
              Sprawozdania Roczne
            </h3>
            <p className="text-sm text-outline leading-relaxed">
              Sporządzanie obowiązkowych rocznych sprawozdań z przewozu towarów
              niebezpiecznych do Wojewódzkiego Inspektoratu Transportu
              Drogowego.
            </p>
          </div>

          {/* Audyty */}
          <div className="md:col-span-3 lg:col-span-4 bg-primary p-8 rounded-xl text-white relative overflow-hidden">
            <div className="relative z-10">
              <div className="w-12 h-12 bg-white/10 text-white rounded-lg flex items-center justify-center mb-6">
                <ClipboardCheck size={22} aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold font-headline mb-4 uppercase">
                Audyty Zgodności
              </h3>
              <p className="text-sm text-on-primary-container leading-relaxed">
                Regularne kontrole w siedzibie klienta, weryfikacja procedur
                załadunkowych i dokumentacji pod kątem zgodności z aktualną
                umową ADR.
              </p>
            </div>
          </div>

          {/* Szkolenia */}
          <div className="md:col-span-6 lg:col-span-4 bg-surface-container-lowest p-8 rounded-xl shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-secondary/10 text-secondary rounded-lg flex items-center justify-center mb-6">
                <Users size={22} aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold font-headline text-primary mb-4 uppercase">
                Szkolenia Ogólne
              </h3>
              <p className="text-sm text-outline leading-relaxed">
                Prowadzenie szkoleń stanowiskowych dla personelu pomocniczego,
                magazynierów oraz kierowców w zakresie procedur bezpieczeństwa.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-outline-variant/20 flex gap-2">
              <span className="px-2 py-1 bg-surface-container text-primary font-label text-[10px] uppercase font-bold rounded">
                Magazyn
              </span>
              <span className="px-2 py-1 bg-surface-container text-primary font-label text-[10px] uppercase font-bold rounded">
                Biuro
              </span>
            </div>
          </div>

          {/* Doradztwo */}
          <div className="md:col-span-4 lg:col-span-8 bg-white p-8 rounded-xl shadow-sm border border-outline-variant/10">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="w-12 h-12 bg-tertiary/10 text-tertiary rounded-lg flex items-center justify-center mb-6">
                  <Headphones size={22} aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold font-headline text-primary mb-4 uppercase">
                  Bieżące Doradztwo
                </h3>
                <p className="text-sm text-outline leading-relaxed">
                  Stałe wsparcie telefoniczne i mailowe w zakresie klasyfikacji
                  towarów, doboru opakowań oraz oznakowania jednostek
                  transportowych.
                </p>
              </div>
              <div className="bg-surface-container-low p-6 rounded-lg">
                <h4 className="font-headline font-bold text-primary mb-2 text-sm uppercase tracking-wider">
                  Dodatkowe Usługi:
                </h4>
                <ul className="space-y-2 text-xs text-outline font-medium">
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-secondary rounded-full" aria-hidden="true" />
                    Sporządzanie planów ochrony
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-secondary rounded-full" aria-hidden="true" />
                    Analiza powypadkowa
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-secondary rounded-full" aria-hidden="true" />
                    Doradztwo w doborze wyposażenia
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-secondary rounded-full" aria-hidden="true" />
                    Klasyfikacja towarów niebezpiecznych
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-secondary rounded-full" aria-hidden="true" />
                    Pomoc w stosowaniu wyłączeń ADR (1.1.3.6, LQ i inne)
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* ADR Classes */}
          <div className="md:col-span-2 lg:col-span-4 bg-secondary text-white p-8 rounded-xl flex items-center justify-center text-center">
            <div className="space-y-4">
              <p className="font-label text-[10px] uppercase tracking-[0.2em] font-bold">
                Obsługiwane Towary
              </p>
              <p className="text-2xl font-black font-headline">
                Wszystkie klasy towarów niebezpiecznych 1–9
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
