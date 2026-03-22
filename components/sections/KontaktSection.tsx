import { Phone, Mail, MapPin } from "lucide-react";
import { CONTACT, GOOGLE_MAPS_EMBED_URL } from "@/lib/constants";

export default function KontaktSection() {
  return (
    <section
      className="py-24 bg-surface-container-lowest scroll-mt-20"
      id="kontakt"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Contact info */}
          <div className="space-y-12">
            <div>
              <h2 className="text-4xl font-black font-headline text-primary tracking-tighter mb-6 uppercase">
                Skontaktuj się z nami
              </h2>
              <p className="text-outline text-lg">
                Zapewnij swojej firmie bezpieczeństwo i spokój podczas kontroli
                ITD.
              </p>
            </div>

            <div className="space-y-8">
              {/* Phone */}
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-surface-container-low rounded-full flex items-center justify-center text-secondary shadow-inner shrink-0">
                  <Phone size={22} aria-hidden="true" />
                </div>
                <div>
                  <p className="font-label text-xs uppercase tracking-widest text-outline">
                    Telefon bezpośredni
                  </p>
                  <a
                    href={`tel:${CONTACT.phoneTel}`}
                    className="text-xl font-headline font-extrabold text-primary hover:text-secondary transition-colors"
                  >
                    {CONTACT.phone}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-surface-container-low rounded-full flex items-center justify-center text-secondary shadow-inner shrink-0">
                  <Mail size={22} aria-hidden="true" />
                </div>
                <div>
                  <p className="font-label text-xs uppercase tracking-widest text-outline">
                    Adres E-mail
                  </p>
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="text-xl font-headline font-extrabold text-primary hover:text-secondary transition-colors"
                  >
                    {CONTACT.email}
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-surface-container-low rounded-full flex items-center justify-center text-secondary shadow-inner shrink-0">
                  <MapPin size={22} aria-hidden="true" />
                </div>
                <div>
                  <p className="font-label text-xs uppercase tracking-widest text-outline">
                    Biuro / Adres
                  </p>
                  <p className="text-xl font-headline font-extrabold text-primary leading-tight">
                    {CONTACT.address.street},
                    <br />
                    {CONTACT.address.city}
                  </p>
                </div>
              </div>
            </div>

            {/* Company data */}
            <div className="p-6 bg-surface-container-low rounded-lg border border-outline-variant/30">
              <p className="font-label text-[10px] uppercase font-black text-primary mb-4 tracking-widest">
                Dane Rejestrowe Firmy
              </p>
              <div className="grid grid-cols-2 gap-4 text-xs font-body text-outline">
                <p>NIP: {CONTACT.nip}</p>
                <p>REGON: {CONTACT.regon}</p>
              </div>
            </div>
          </div>

          {/* Google Maps */}
          <div className="bg-surface-container-low rounded-2xl p-1 lg:p-4 shadow-2xl">
            <div className="w-full h-full min-h-[500px] rounded-xl overflow-hidden">
              <iframe
                src={GOOGLE_MAPS_EMBED_URL}
                width="100%"
                height="500"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokalizacja biura ADR Ekspert – Ul. Przemkowska 16, Wrocław"
                data-testid="google-maps-iframe"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
