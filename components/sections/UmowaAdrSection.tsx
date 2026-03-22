import { Truck, FileText, GraduationCap } from "lucide-react";

export default function UmowaAdrSection() {
  return (
    <section className="py-24 bg-surface scroll-mt-20" id="adr">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Sticky heading */}
          <div className="lg:col-span-4 sticky top-32">
            <h2 className="text-4xl font-black font-headline text-primary tracking-tighter mb-6 uppercase">
              Umowa ADR
            </h2>
            <div className="w-20 h-2 bg-secondary mb-8" />
            <p className="font-label text-sm text-outline leading-loose tracking-wide">
              PODSTAWY PRAWNE I STANDARDY MIĘDZYNARODOWE
            </p>
          </div>

          {/* Content */}
          <div className="lg:col-span-8 space-y-10">
            <div className="p-10 bg-surface-container-lowest rounded-xl shadow-sm border-l-4 border-primary">
              <p className="text-lg leading-relaxed text-on-surface mb-6">
                ADR (fr. L&apos; Accord européen relatif au transport
                international des marchandises Dangereuses po Route) –
                międzynarodowa konwencja dotycząca drogowego przewozu towarów i
                ładunków niebezpiecznych, sporządzona w Genewie 30 września 1957
                r i podpisana pierwotnie przez 9 państw. Umowa została
                ratyfikowana przez Polskę w 1975 roku. Przepisy umowy ADR są
                nowelizowane w cyklu dwuletnim w latach nieparzystych.
              </p>
              <p className="text-lg leading-relaxed text-on-surface">
                Celem powstania umowy ADR było ograniczenie ryzyka wystąpienia
                wypadków drogowych z udziałem towarów niebezpiecznych do
                minimum.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-surface-container-low p-6 rounded-lg">
                <Truck
                  size={32}
                  className="text-secondary mb-4"
                  aria-hidden="true"
                />
                <h4 className="font-headline font-bold text-primary mb-2">
                  Transport
                </h4>
                <p className="text-sm text-outline">
                  Standardy pakowania i załadunku towarów.
                </p>
              </div>
              <div className="bg-surface-container-low p-6 rounded-lg">
                <FileText
                  size={32}
                  className="text-secondary mb-4"
                  aria-hidden="true"
                />
                <h4 className="font-headline font-bold text-primary mb-2">
                  Dokumentacja
                </h4>
                <p className="text-sm text-outline">
                  Wymagane listy przewozowe i instrukcje.
                </p>
              </div>
              <div className="bg-surface-container-low p-6 rounded-lg">
                <GraduationCap
                  size={32}
                  className="text-secondary mb-4"
                  aria-hidden="true"
                />
                <h4 className="font-headline font-bold text-primary mb-2">
                  Szkolenia
                </h4>
                <p className="text-sm text-outline">
                  Obowiązkowe kursy dla kierowców i personelu.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
