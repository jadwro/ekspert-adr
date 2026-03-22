import Image from "next/image";
import { BadgeCheck, BarChart3, BookOpen } from "lucide-react";

export default function OMnieSection() {
  return (
    <section
      className='py-24 bg-surface-container-lowest scroll-mt-20'
      id='o-mnie'
    >
      <div className='max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
        {/* Profile image placeholder */}
        <div className='relative'>
          <div className='aspect-square bg-surface-container rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center'>
            {/* Placeholder z inicjałami, dopóki nie ma zdjęcia profilowego */}
            <Image
              src='/assets/photo.png'
              alt='Waldemar Stolarski – Doradca DGSA'
              fill
              className='object-cover scale-100 hover:scale-105 transition-transform duration-700'
            />
          </div>
          <div className='absolute -bottom-6 -right-6 p-8 bg-secondary text-white rounded-lg shadow-xl hidden md:block'>
            <p className='text-4xl font-black font-headline'>10+</p>
            <p className='text-xs font-label uppercase tracking-widest'>
              Lat Doświadczenia
            </p>
          </div>
        </div>

        {/* Text content */}
        <div className='space-y-8'>
          <div>
            <h2 className='text-4xl font-black font-headline text-primary tracking-tighter mb-2 uppercase'>
              Waldemar Stolarski
            </h2>
            <p className='text-secondary font-label font-bold uppercase tracking-widest'>
              Ekspert ADR / Doradca DGSA
            </p>
          </div>

          <p className='text-lg text-on-surface leading-relaxed'>
            Nazywam się Waldemar Stolarski i urodziłem się we Wrocławiu. Z
            branżą transportową związany jestem od 10 lat, a obecnie pełnię
            funkcję koordynatora ds. transportu w firmie produkcyjno-handlowej z
            branży chemii budowlanej. Poza doświadczeniem zawodowym legitymuję
            się również certyfikatami kompetencji zawodowych w przewozie osób
            oraz rzeczy. Funkcję doradcy ADR pełnię od 2013 roku współpracując
            zarówno z przewoźnikami jak i firmami produkcyjnymi głównie z branży
            chemicznej. W mojej pracy cechuje mnie dokładność i rzetelność oraz
            partnerskie podejście do kontrahenta. Zachęcam do kontaktu, chętnie
            odpowiem na każde Państwa pytanie z zakresu przewozu towarów
            niebezpiecznych.
          </p>

          <div className='grid grid-cols-1 gap-4'>
            <div className='flex items-center gap-4 p-4 border-b border-outline-variant/20'>
              <BadgeCheck
                size={22}
                className='text-primary shrink-0'
                aria-hidden='true'
              />
              <span className='font-body font-medium'>
                Certyfikat Doradcy wydany przez TDT
              </span>
            </div>
            <div className='flex items-center gap-4 p-4 border-b border-outline-variant/20'>
              <BarChart3
                size={22}
                className='text-primary shrink-0'
                aria-hidden='true'
              />
              <span className='font-body font-medium'>
                Specjalizacja w raportowaniu rocznym
              </span>
            </div>
            <div className='flex items-center gap-4 p-4'>
              <BookOpen
                size={22}
                className='text-primary shrink-0'
                aria-hidden='true'
              />
              <span className='font-body font-medium'>
                Szkolenia stanowiskowe ADR
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
