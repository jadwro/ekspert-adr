export const CONTACT = {
  name: "Waldemar Stolarski – Doradca DGSA",
  phone: "609-319-887",
  phoneTel: "609319887",
  email: "kontakt@ekspertadr.pl",
  address: {
    street: "Ul. Przemkowska 16",
    city: "54-426 Wrocław",
  },
  nip: "8942923938",
  regon: "382794395",
} as const;

export const NAV_LINKS = [
  { label: "Umowa ADR", href: "#adr" },
  { label: "Obowiązki DGSA", href: "#dgsa" },
  { label: "Oferta", href: "#oferta" },
  { label: "O mnie", href: "#o-mnie" },
  { label: "Kontakt", href: "#kontakt" },
] as const;

export const SERVICES = [
  "Śledzenie zgodności z wymaganiami dotyczącymi przewozu towarów niebezpiecznych",
  "Doradzanie przedsiębiorstwu w zakresie przewozu towarów niebezpiecznych",
  "Przygotowywanie rocznego sprawozdania z działalności przedsiębiorstwa w zakresie przewozu towarów niebezpiecznych",
  "Sporządzanie raportów powypadkowych",
  "Sporządzanie planów ochrony",
  "Szkolenia stanowiskowe ADR",
  "Pomoc w doborze opakowań",
  "Przygotowanie i sprawdzanie dokumentacji",
  "Klasyfikację towarów niebezpiecznych",
  "Pomoc w stosowaniu wyłączeń ADR (1.1.3.6, LQ i inne)",
] as const;

// URL uzyskany z: maps.google.com → szukaj adresu → Share → Embed a map
export const GOOGLE_MAPS_EMBED_URL =
  "https://www.google.com/maps?q=Ul.+Przemkowska+16,+54-426+Wroc%C5%82aw,+Poland&output=embed";

export const FOOTER_LINKS = [
  { label: "Oferta", href: "#oferta" },
  { label: "O mnie", href: "#o-mnie" },
  { label: "Kontakt", href: "#kontakt" },
] as const;
