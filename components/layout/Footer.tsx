import { FOOTER_LINKS, CONTACT } from "@/lib/constants";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary w-full py-12 px-6 border-t border-white/10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:flex lg:justify-between items-center max-w-7xl mx-auto gap-8">
        <div className="text-xl font-bold text-white tracking-tight font-headline uppercase">
          ADR Ekspert
        </div>
        <p className="text-slate-300 text-sm font-body">
          © {year} ADR Ekspert. Bezpieczeństwo i Precyzja w Transporcie
          Materiałów Niebezpiecznych.
        </p>
        <a
          href={`tel:${CONTACT.phoneTel}`}
          className="text-white font-headline font-bold text-lg hover:text-secondary-fixed transition-colors"
        >
          {CONTACT.phone}
        </a>
        <nav className="flex flex-wrap gap-6" aria-label="Nawigacja stopki">
          {FOOTER_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-slate-400 hover:text-white hover:underline decoration-secondary underline-offset-4 font-body text-sm transition-opacity opacity-90 hover:opacity-100"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
