# Project: Landing Page ADR Ekspert

## Context

Convert a static `index.html` into a professional, SEO-optimized landing page. The user is an Automation Tester, so the code must be clean, semantic, and testable.

## Tech Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Testing:** Playwright (Create a basic test suite in `tests/landing-page.spec.ts`)

## Google Maps Integration (CRITICAL)

- **Requirement:** In the contact section (where the map pin icon was in the screenshot), embed a functional Google Map.
- **Location:** "Ul. Przemkowska 16, 54-426 Wrocław"
- **Method:** Use an `iframe` or a Next.js component to show the exact location of the office.

## Design & Brand

- **Logo:** Display "ADR Ekspert" next to the image `public/assets/adr.jpg`.
- **Colors:** Deep Navy Blue and White, with Orange/Amber ADR-style accents.
- **Header:** Sticky, with "Zadzwoń teraz" CTA button.

## SEO Requirements

- Language: Polish (`lang="pl"`)
- Keywords: "Doradca ADR Wrocław", "DGSA", "Szkolenia ADR".
- Proper meta title and description for search engines.

## Full Content (DO NOT EDIT OR ALTER)

### Umowa ADR

ADR (fr. L' Accord européen relatif au transport international des marchandises Dangereuses po Route) – międzynarodowa konwencja dotycząca drogowego przewozu towarów i ładunków niebezpiecznych, sporządzona w Genewie 30 września 1957 r i podpisana pierwotnie przez 9 państw. Umowa została ratyfikowana przez Polskę w 1975 roku. Przepisy umowy ADR są nowelizowane w cyklu dwuletnim w latach nieparzystych. Celem powstania umowy ADR było ograniczenie ryzyka wystąpienia wypadków drogowych z udziałem towarów niebezpiecznych do minimum.

### Doradca do spraw bezpieczeństwa i jego obowiązki

Doradca do spraw bezpieczeństwa przewozu towarów niebezpiecznych w zakresie transportu drogowego– osoba zajmująca się i czuwająca nad prawidłowym przewozem drogowym towarów niebezpiecznych. Podmiot wykonujący taki przewóz jest zobligowany do zatrudnienia doradcy na podstawie ustawy z dnia 19 sierpnia 2011 o przewozie towarów niebezpiecznych oraz umowy europejskiej ADR:

Każde przedsiębiorstwo, którego działalność obejmuje przewóz towarów niebezpiecznych albo związane z nim pakowanie, załadunek, napełnianie lub rozładunek,powinno wyznaczyć jednego lub więcej doradców do spraw bezpieczeństwa w transporcie towarów niebezpiecznych, odpowiedzialnego za wspieranie działań zapobiegających zagrożeniom dla osób, mienia i środowiska, związanych z taką działalnością.

Głównym zadaniem doradcy, przy zachowaniu odpowiedzialności kierującego przedsiębiorstwem, powinno być dążenie, poprzez zastosowanie wszystkich niezbędnych środków i działań oraz w granicach określonych zakresem działalności przedsiębiorstwa,do ułatwienia prowadzenia tej działalności zgodnie z odpowiednimi wymaganiami w możliwie najbezpieczniejszy sposób.

### O mnie

Nazywam się Waldemar Stolarski i urodziłem się we Wrocławiu. Z branżą transportową związany jestem od 10 lat, a obecnie pełnię funkcję koordynatora ds. transportu w firmie produkcyjno-handlowej z branży chemii budowlanej. Poza doświadczeniem zawodowym legitymuję się również certyfikatami kompetencji zawodowych w przewozie osób oraz rzeczy. Funkcję doradcy ADR pełnię od 2013 roku współpracując zarówno z przewoźnikami jak i firmami produkcyjnymi głównie z branży chemicznej. W mojej pracy cechuje mnie dokładność i rzetelność oraz partnerskie podejście do kontrahenta. Zachęcam do kontaktu, chętnie odpowiem na każde Państwa pytanie z zakresu przewozu towarów niebezpiecznych.

### Oferta

W ramach współpracy oferuję między innymi:

- Śledzenie zgodności z wymaganiami dotyczącymi przewozu towarów niebezpiecznych
- Doradzanie przedsiębiorstwu w zakresie przewozu towarów niebezpiecznych
- Przygotowywanie rocznego sprawozdania z działalności przedsiębiorstwa v zakresie przewozu towarów niebezpiecznych
- Sporządzanie raportów powypadkowych
- Sporządzanie planów ochrony
- Szkolenia stanowiskowe ADR
- Pomoc w doborze opakowań
- Przygotowanie i sprawdzanie dokumentacji
- Klasyfikację towarów niebezpiecznych
- Pomoc w stosowaniu wyłączeń ADR (1.1.3.6, LQ i inne)

### Kontakt

Waldemar Stolarski – Doradca DGSA
Ul. Przemkowska 16
54-426 Wrocław
Tel 609-319-887

E-mail: kontakt@ekspertadr.pl

Dane rejestrowe
NIP 8942923938
REGON 382794395
