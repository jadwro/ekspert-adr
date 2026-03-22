import { test, expect } from "@playwright/test";

test.describe("ADR Ekspert Landing Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  // ─── SEO i metadane ─────────────────────────────────────────────────────────

  test.describe("SEO i metadane dokumentu", () => {
    test("strona ma atrybut lang='pl'", async ({ page }) => {
      await expect(page.locator("html")).toHaveAttribute("lang", "pl");
    });

    test("tytuł strony zawiera 'ADR Ekspert'", async ({ page }) => {
      await expect(page).toHaveTitle(/ADR Ekspert/i);
    });

    test("meta description zawiera 'Doradca ADR Wrocław'", async ({ page }) => {
      const meta = page.locator('meta[name="description"]');
      await expect(meta).toHaveAttribute("content", /Doradca ADR Wrocław/i);
    });

    test("meta description zawiera 'DGSA'", async ({ page }) => {
      const meta = page.locator('meta[name="description"]');
      await expect(meta).toHaveAttribute("content", /DGSA/i);
    });
  });

  // ─── Nagłówek / Nawigacja ────────────────────────────────────────────────────

  test.describe("Nagłówek i nawigacja", () => {
    test("header jest widoczny", async ({ page }) => {
      await expect(page.locator("header")).toBeVisible();
    });

    test("header jest pozycjonowany jako fixed", async ({ page }) => {
      await expect(page.locator("header")).toHaveCSS("position", "fixed");
    });

    test("logo ADR Ekspert jest widoczne", async ({ page }) => {
      const logo = page.locator('img[alt*="ADR"]').first();
      await expect(logo).toBeVisible();
    });

    test("przycisk CTA 'Zadzwoń teraz' jest widoczny w nagłówku", async ({
      page,
    }) => {
      await expect(
        page.getByRole("link", { name: /Zadzwoń teraz/i }).first()
      ).toBeVisible();
    });

    test("linki nawigacyjne są obecne na desktop", async ({ page }) => {
      for (const label of [
        "Umowa ADR",
        "Obowiązki DGSA",
        "Oferta",
        "O mnie",
        "Kontakt",
      ]) {
        await expect(
          page.getByRole("link", { name: label }).first()
        ).toBeAttached();
      }
    });

    test("hamburger jest widoczny na małym ekranie", async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 812 });
      const hamburger = page.getByRole("button", {
        name: /Otwórz menu|Zamknij menu/i,
      });
      await expect(hamburger).toBeVisible();
    });

    test("hamburger otwiera menu mobilne", async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 812 });
      const hamburger = page.getByRole("button", { name: /Otwórz menu/i });
      await hamburger.click();
      await expect(
        page.getByRole("navigation", { name: "Nawigacja mobilna" })
      ).toBeVisible();
    });
  });

  // ─── Sekcja Hero ────────────────────────────────────────────────────────────

  test.describe("Sekcja Hero", () => {
    test("nagłówek h1 zawiera 'ADR EXPERT'", async ({ page }) => {
      await expect(page.getByRole("heading", { level: 1 })).toContainText(
        "ADR EXPERT"
      );
    });

    test("strona ma dokładnie jeden nagłówek h1", async ({ page }) => {
      await expect(page.locator("h1")).toHaveCount(1);
    });

    test("obraz hero jest załadowany", async ({ page }) => {
      const img = page.locator('img[alt*="niebezpiecznych"], img[alt*="hero"], img[alt*="transport"]').first();
      await expect(img).toBeVisible();
    });

    test("przycisk 'Sprawdź Ofertę' linkuje do sekcji #oferta", async ({
      page,
    }) => {
      const link = page.getByRole("link", { name: /Sprawdź Ofertę/i });
      await expect(link).toHaveAttribute("href", "#oferta");
    });

    test("przycisk 'Kontakt DGSA' linkuje do sekcji #kontakt", async ({
      page,
    }) => {
      const link = page.getByRole("link", { name: /Kontakt DGSA/i });
      await expect(link).toHaveAttribute("href", "#kontakt");
    });
  });

  // ─── Sekcja Umowa ADR ────────────────────────────────────────────────────────

  test.describe("Sekcja Umowa ADR (#adr)", () => {
    test("sekcja jest dostępna przez id #adr", async ({ page }) => {
      const section = page.locator("#adr");
      await section.scrollIntoViewIfNeeded();
      await expect(section).toBeVisible();
    });

    test("sekcja zawiera kartę Transport", async ({ page }) => {
      await expect(page.locator("#adr")).toContainText("Transport");
    });

    test("sekcja zawiera kartę Dokumentacja", async ({ page }) => {
      await expect(page.locator("#adr")).toContainText("Dokumentacja");
    });

    test("sekcja zawiera kartę Szkolenia", async ({ page }) => {
      await expect(page.locator("#adr")).toContainText("Szkolenia");
    });

    test("sekcja wspomina o Genewie (treść kanoniczna ADR)", async ({
      page,
    }) => {
      await expect(page.locator("#adr")).toContainText("Genewie");
    });
  });

  // ─── Sekcja Doradca DGSA ────────────────────────────────────────────────────

  test.describe("Sekcja Doradca DGSA (#dgsa)", () => {
    test("sekcja jest widoczna", async ({ page }) => {
      await page.locator("#dgsa").scrollIntoViewIfNeeded();
      await expect(page.locator("#dgsa")).toBeVisible();
    });

    test("sekcja wspomina o karach ITD", async ({ page }) => {
      await expect(page.locator("#dgsa")).toContainText("ITD");
    });

    test("sekcja wspomina o obowiązku wyznaczenia doradcy", async ({
      page,
    }) => {
      await expect(page.locator("#dgsa")).toContainText("DGSA");
    });
  });

  // ─── Sekcja Oferta ──────────────────────────────────────────────────────────

  test.describe("Sekcja Oferta (#oferta)", () => {
    test("sekcja jest widoczna", async ({ page }) => {
      await page.locator("#oferta").scrollIntoViewIfNeeded();
      await expect(page.locator("#oferta")).toBeVisible();
    });

    test("sekcja zawiera kartę 'Sprawozdania Roczne'", async ({ page }) => {
      await expect(page.locator("#oferta")).toContainText("Sprawozdania Roczne");
    });

    test("sekcja zawiera kartę 'Audyty Zgodności'", async ({ page }) => {
      await expect(page.locator("#oferta")).toContainText("Audyty Zgodności");
    });

    test("sekcja zawiera kartę 'Szkolenia Ogólne'", async ({ page }) => {
      await expect(page.locator("#oferta")).toContainText("Szkolenia Ogólne");
    });

    test("sekcja zawiera kartę 'Bieżące Doradztwo'", async ({ page }) => {
      await expect(page.locator("#oferta")).toContainText("Bieżące Doradztwo");
    });
  });

  // ─── Sekcja O Mnie ──────────────────────────────────────────────────────────

  test.describe("Sekcja O Mnie (#o-mnie)", () => {
    test("sekcja jest widoczna", async ({ page }) => {
      await page.locator("#o-mnie").scrollIntoViewIfNeeded();
      await expect(page.locator("#o-mnie")).toBeVisible();
    });

    test("sekcja wspomina Waldemara Stolarskiego", async ({ page }) => {
      await expect(page.locator("#o-mnie")).toContainText("Waldemar Stolarski");
    });

    test("sekcja wspomina o 10 latach doświadczenia", async ({ page }) => {
      await expect(page.locator("#o-mnie")).toContainText("10");
    });

    test("sekcja zawiera informację o certyfikacie TDT", async ({ page }) => {
      await expect(page.locator("#o-mnie")).toContainText("TDT");
    });
  });

  // ─── Sekcja Kontakt ──────────────────────────────────────────────────────────

  test.describe("Sekcja Kontakt (#kontakt)", () => {
    test("sekcja jest widoczna", async ({ page }) => {
      await page.locator("#kontakt").scrollIntoViewIfNeeded();
      await expect(page.locator("#kontakt")).toBeVisible();
    });

    test("wyświetla poprawny numer telefonu", async ({ page }) => {
      await expect(page.locator("#kontakt")).toContainText("609-319-887");
    });

    test("wyświetla poprawny adres e-mail", async ({ page }) => {
      await expect(page.locator("#kontakt")).toContainText(
        "kontakt@ekspertadr.pl"
      );
    });

    test("wyświetla poprawny kod pocztowy 54-426", async ({ page }) => {
      await expect(page.locator("#kontakt")).toContainText("54-426");
    });

    test("wyświetla poprawny NIP", async ({ page }) => {
      await expect(page.locator("#kontakt")).toContainText("8942923938");
    });

    test("wyświetla poprawny REGON", async ({ page }) => {
      await expect(page.locator("#kontakt")).toContainText("382794395");
    });

    test("iframe Google Maps jest obecny", async ({ page }) => {
      const iframe = page.locator('[data-testid="google-maps-iframe"]');
      await expect(iframe).toBeVisible();
    });

    test("iframe Google Maps ma atrybut src z maps.google.com", async ({
      page,
    }) => {
      const iframe = page.locator('[data-testid="google-maps-iframe"]');
      await expect(iframe).toHaveAttribute("src", /maps\.google\.com/);
    });

    test("iframe Google Maps ma opisowy tytuł dostępnościowy", async ({
      page,
    }) => {
      const iframe = page.locator('[data-testid="google-maps-iframe"]');
      await expect(iframe).toHaveAttribute("title", /Wrocław/i);
    });

    test("numer telefonu ma poprawny link tel:", async ({ page }) => {
      const phoneLink = page.locator('a[href="tel:609319887"]');
      await expect(phoneLink).toBeAttached();
    });

    test("e-mail ma poprawny link mailto:", async ({ page }) => {
      const emailLink = page.locator('a[href="mailto:kontakt@ekspertadr.pl"]');
      await expect(emailLink).toBeAttached();
    });
  });

  // ─── Stopka ──────────────────────────────────────────────────────────────────

  test.describe("Stopka", () => {
    test("stopka jest widoczna", async ({ page }) => {
      await expect(page.locator("footer")).toBeVisible();
    });

    test("stopka zawiera nazwę marki ADR Ekspert", async ({ page }) => {
      await expect(page.locator("footer")).toContainText("ADR");
    });

    test("stopka zawiera aktualny rok", async ({ page }) => {
      const year = new Date().getFullYear().toString();
      await expect(page.locator("footer")).toContainText(year);
    });
  });

  // ─── Dostępność ──────────────────────────────────────────────────────────────

  test.describe("Dostępność (podstawy)", () => {
    test("wszystkie obrazy mają atrybut alt", async ({ page }) => {
      const images = page.locator("img");
      const count = await images.count();
      for (let i = 0; i < count; i++) {
        await expect(images.nth(i)).toHaveAttribute("alt", /.+/);
      }
    });

    test("nagłówek h1 jest jeden na stronie", async ({ page }) => {
      await expect(page.locator("h1")).toHaveCount(1);
    });

    test("element main jest obecny", async ({ page }) => {
      await expect(page.locator("main")).toBeVisible();
    });

    test("nawigacja główna ma atrybut aria-label", async ({ page }) => {
      await expect(
        page.getByRole("navigation", { name: "Nawigacja główna" })
      ).toBeAttached();
    });
  });
});
