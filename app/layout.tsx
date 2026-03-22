import type { Metadata } from "next";
import { Manrope, Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "ADR Ekspert – Waldemar Stolarski | Doradca DGSA Wrocław",
  description:
    "Certyfikowany doradca ADR/DGSA we Wrocławiu. Szkolenia ADR, sprawozdania roczne, audyty zgodności z przepisami transportu towarów niebezpiecznych.",
  keywords: [
    "Doradca ADR Wrocław",
    "DGSA",
    "Szkolenia ADR",
    "transport towarów niebezpiecznych",
    "ekspert ADR",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pl"
      className={`${manrope.variable} ${inter.variable} ${spaceGrotesk.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
