"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, CONTACT } from "@/lib/constants";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className='fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl shadow-sm'>
      <div className='flex justify-between items-center max-w-7xl mx-auto px-6 h-20'>
        {/* Logo */}
        <a
          href='#'
          className='flex items-center gap-3'
          aria-label='ADR Ekspert – strona główna'
        >
          <Image
            src='/assets/adr.png'
            alt='ADR Ekspert logo'
            width={44}
            height={44}
            className='rounded-sm object-cover'
          />
          <span className='text-2xl font-black tracking-tighter text-primary uppercase font-headline'>
            ADR Ekspert
          </span>
        </a>

        {/* Desktop nav */}
        <nav
          className='hidden md:flex gap-8 items-center'
          aria-label='Nawigacja główna'
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className='text-primary font-medium hover:text-secondary transition-colors font-headline text-sm uppercase tracking-tight'
            >
              {link.label}
            </a>
          ))}
          <a
            href={`tel:${CONTACT.phoneTel}`}
            className='ml-4 px-6 py-2.5 industrial-gradient text-white rounded-md font-headline font-bold text-sm uppercase tracking-wider transition-transform active:scale-95'
          >
            Zadzwoń teraz
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className='md:hidden text-primary p-2'
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Zamknij menu" : "Otwórz menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Separator line */}
      <div className='bg-gradient-to-r from-transparent via-surface-container-high to-transparent h-px absolute bottom-0 w-full' />

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <nav
          className='md:hidden bg-white border-t border-surface-container-high px-6 py-4 space-y-4'
          aria-label='Nawigacja mobilna'
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className='block text-primary font-medium hover:text-secondary transition-colors font-headline text-sm uppercase tracking-tight py-2'
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href={`tel:${CONTACT.phoneTel}`}
            className='block mt-4 px-6 py-3 industrial-gradient text-white rounded-md font-headline font-bold text-sm uppercase tracking-wider text-center'
            onClick={() => setMobileMenuOpen(false)}
          >
            Zadzwoń teraz
          </a>
        </nav>
      )}
    </header>
  );
}
