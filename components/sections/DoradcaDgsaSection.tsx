import { Gavel, ClipboardX, AlertOctagon } from "lucide-react";

export default function DoradcaDgsaSection() {
  return (
    <section
      className="py-24 bg-surface-container-low overflow-hidden relative scroll-mt-20"
      id="dgsa"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="bg-primary p-12 lg:p-20 rounded-2xl text-white overflow-hidden relative">
          {/* Decorative background icon */}
          <div className="absolute top-0 right-0 p-12 opacity-10" aria-hidden="true">
            <Gavel size={200} fill="currentColor" />
          </div>

          <div className="max-w-3xl space-y-8">
            <h2 className="text-4xl md:text-5xl font-black font-headline tracking-tighter uppercase leading-none">
              Doradca DGSA:
              <br />
              Wymóg Prawny i Bezpieczeństwo
            </h2>

            <div className="space-y-6 text-lg text-on-primary-container leading-relaxed">
              <p>
                Doradca do spraw bezpieczeństwa przewozu towarów niebezpiecznych
                w zakresie transportu drogowego – osoba zajmująca się i czuwająca
                nad prawidłowym przewozem drogowym towarów niebezpiecznych.
                Podmiot wykonujący taki przewóz jest zobligowany do zatrudnienia
                doradcy na podstawie ustawy z dnia 19 sierpnia 2011 o przewozie
                towarów niebezpiecznych oraz umowy europejskiej ADR:
              </p>
              <p>
                Każde przedsiębiorstwo, którego działalność obejmuje przewóz
                towarów niebezpiecznych albo związane z nim pakowanie, załadunek,
                napełnianie lub rozładunek, powinno wyznaczyć jednego lub więcej
                doradców do spraw bezpieczeństwa w transporcie towarów
                niebezpiecznych, odpowiedzialnego za wspieranie działań
                zapobiegających zagrożeniom dla osób, mienia i środowiska,
                związanych z taką działalnością.
              </p>
              <p>
                Brak wyznaczonego doradcy grozi wysokimi karami finansowymi
                nakładanymi przez{" "}
                <span className="text-secondary-fixed font-bold underline underline-offset-4">
                  ITD
                </span>{" "}
                oraz zwiększa ryzyko wystąpienia poważnych incydentów, które mogą
                rzutować na przyszłość firmy.
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-8 pt-6">
              <div className="flex items-start gap-4">
                <ClipboardX
                  size={36}
                  className="text-secondary-fixed shrink-0"
                  aria-hidden="true"
                />
                <div>
                  <h4 className="font-headline font-bold text-white uppercase text-sm tracking-widest">
                    Kary ITD
                  </h4>
                  <p className="text-xs text-on-primary-container">
                    Do 5000 PLN za brak rocznego sprawozdania.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <AlertOctagon
                  size={36}
                  className="text-secondary-fixed shrink-0"
                  aria-hidden="true"
                />
                <div>
                  <h4 className="font-headline font-bold text-white uppercase text-sm tracking-widest">
                    Odpowiedzialność
                  </h4>
                  <p className="text-xs text-on-primary-container">
                    Ryzyko utraty licencji transportowej.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
