import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, ArrowUpRight } from "lucide-react";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import constructionAsset from "@/assets/constrcution.jpeg.asset.json";
import printingAsset from "@/assets/printing.jpeg.asset.json";
import sketchingAsset from "@/assets/sketching.jpeg.asset.json";
import vizAsset from "@/assets/vizuallization.jpeg.asset.json";
import service3 from "@/assets/service-3.jpg.asset.json";
import service4 from "@/assets/service-4.jpg.asset.json";
import service6 from "@/assets/service-6.jpg.asset.json";
import service8 from "@/assets/service-8.jpg.asset.json";
import service7 from "@/assets/service-7.jpg.asset.json";
import service9 from "@/assets/service-9.jpg.asset.json";

export const Route = createFileRoute("/architekturleistungen")({
  component: Architekturleistungen,
  head: () => ({
    meta: [
      { title: "Architekturleistungen — Swiss Realplan" },
      { name: "description", content: "Unsere Architekturleistungen: von Studien und Projektentwicklung bis Totalunternehmung, Immobilien und Investment." },
      { property: "og:title", content: "Architekturleistungen — Swiss Realplan" },
      { property: "og:description", content: "Studien, Projektentwicklung, Bewilligungsverfahren, Ausführungsplanung, Bauleitung, Umbauten, Totalunternehmung, Immobilien, Investment." },
      { property: "og:image", content: vizAsset.url },
      { name: "twitter:image", content: vizAsset.url },
    ],
  }),
});

const services = [
  {
    num: "01",
    title: "Studien und Analysen",
    desc: "Standortbewertungen, Machbarkeitsstudien und tiefgehende Analysen, die jedem Projekt eine fundierte Grundlage geben. Wir prüfen Topografie, Recht, Markt und Nutzung — bevor die erste Linie gezogen wird.",
    img: sketchingAsset.url,
  },
  {
    num: "02",
    title: "Projektentwicklung",
    desc: "Von der ersten Vision bis zum tragfähigen Konzept. Wir entwickeln Projekte mit Weitsicht, vereinen architektonische Qualität mit wirtschaftlicher Logik und schaffen Räume mit nachhaltigem Wert.",
    img: printingAsset.url,
  },
  {
    num: "03",
    title: "Bewilligungsverfahren",
    desc: "Wir begleiten Bauherren durch das gesamte Bewilligungsverfahren — präzise Gesuche, klare Kommunikation mit Behörden und ein souveräner Umgang mit Auflagen und Einsprachen.",
    img: service3.url,
  },
  {
    num: "04",
    title: "Ausführungsplanung",
    desc: "Detailgenaue Pläne, präzise Materialisierung, klare Schnittstellen. Unsere Ausführungsplanung ist die Sprache, die Handwerker und Unternehmer auf der Baustelle führt.",
    img: service4.url,
  },
  {
    num: "05",
    title: "Bauleitung und Realisierung",
    desc: "Wir führen die Baustelle mit Schweizer Präzision — Termine, Kosten und Qualität in Balance. Unsere Bauleitung ist der ruhige Taktgeber zwischen Plan und Bauwerk.",
    img: constructionAsset.url,
  },
  {
    num: "06",
    title: "Umbauten und Sanierungen",
    desc: "Bestehende Substanz weiterdenken: behutsame Umbauten, energetische Sanierungen und Eingriffe, die den Charakter eines Hauses respektieren und seinen Wert neu definieren.",
    img: service6.url,
  },
  {
    num: "07",
    title: "Totalunternehmung",
    desc: "Ein Ansprechpartner. Ein Vertrag. Volle Verantwortung. Als Totalunternehmer realisieren wir Projekte zum Festpreis und Festtermin — Sie behalten die Übersicht, wir den Bau.",
    img: service7.url,
  },
  {
    num: "08",
    title: "Immobilien",
    desc: "Wir vermarkten Wohn- und Renditeobjekte mit demselben gestalterischen Anspruch, mit dem wir bauen. Diskret, professionell, mit Gespür für Lage, Architektur und Zielgruppe.",
    img: service8.url,
  },
  {
    num: "09",
    title: "Investment",
    desc: "Strukturierte Investments in werthaltige Schweizer Immobilien. Wir identifizieren Chancen, entwickeln Renditeobjekte und begleiten Investoren von der Akquisition bis zur Übergabe.",
    img: service9.url,
  },
];

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(document.documentElement.scrollTop > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const links: Array<{ label: string; to: string; hash?: string; key: string }> = [
    { key: "home", label: "Home", to: "/" },
    { key: "projects", label: "Projects", to: "/", hash: "projects" },
    { key: "portfolio", label: "Portfolio", to: "/", hash: "portfolio" },
    { key: "arch", label: "Architekturleistungen", to: "/architekturleistungen" },
    { key: "contact", label: "Contact", to: "/", hash: "contact" },
  ];
  return (
    <header
      className="absolute inset-x-0 top-0 z-[200] transition-all duration-700 ease-out"
      style={{
        background: scrolled
          ? "linear-gradient(180deg, oklch(0.12 0.04 25 / 0.78) 0%, oklch(0.08 0.03 25 / 0.62) 100%)"
          : "linear-gradient(180deg, oklch(0 0 0 / 0.55) 0%, oklch(0 0 0 / 0) 100%)",
        backdropFilter: scrolled ? "blur(16px) saturate(140%)" : "blur(6px)",
        WebkitBackdropFilter: scrolled ? "blur(16px) saturate(140%)" : "blur(6px)",
        borderBottom: scrolled ? "1px solid oklch(1 0 0 / 0.08)" : "1px solid transparent",
      }}
    >
      <div className="mx-auto flex max-w-[1800px] items-center justify-between gap-3 px-6 py-4 md:px-10 md:py-5">
        <Link to="/" className="group flex items-center gap-3 shrink-0">
          <span
            className="transition-all duration-500 group-hover:rotate-45"
            style={{ display: "inline-block", width: 10, height: 10, background: "oklch(0.62 0.24 25)", boxShadow: "0 0 14px oklch(0.62 0.24 25 / 0.7)" }}
            aria-hidden
          />
          <span className="font-display text-[13px] uppercase text-foreground md:text-sm" style={{ letterSpacing: "0.22em", fontWeight: 500 }}>
            Swiss Realplan
          </span>
        </Link>
        <nav className="flex items-center">
          <div className="hidden items-center gap-6 md:flex md:gap-10">
            {links.map((l) => {
              const className = "group relative text-[11px] font-medium uppercase text-foreground/75 transition-colors duration-300 hover:text-foreground";
              const underline = (
                <span
                  className="pointer-events-none absolute -bottom-1.5 left-0 h-px w-full origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100"
                  style={{ background: "linear-gradient(90deg, oklch(0.62 0.24 25), oklch(0.85 0.18 25))" }}
                />
              );
              return (
                <Link key={l.key} to={l.to} hash={l.hash} className={className} style={{ letterSpacing: "0.2em" }}>
                  {l.label}
                  {underline}
                </Link>
              );
            })}
          </div>
          <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <button className="p-2 text-foreground/80 transition-colors hover:text-foreground" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[260px] border-white/10 bg-deep">
              <div className="mt-16 flex flex-col gap-8">
                {links.map((l) => (
                  <Link key={l.key} to={l.to} hash={l.hash} onClick={() => setMenuOpen(false)} className="text-sm font-medium uppercase text-foreground/75 transition-colors hover:text-foreground" style={{ letterSpacing: "0.2em" }}>
                    {l.label}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-deep pt-32 pb-20 md:pt-44 md:pb-32">
      <div className="pointer-events-none absolute inset-0">
        <img src={vizAsset.url} alt="" className="absolute inset-0 h-full w-full object-cover opacity-25" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, oklch(0.08 0.03 25 / 0.6) 0%, oklch(0.08 0.03 25) 100%)" }} />
      </div>
      <div className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="flex items-center gap-3 text-[11px] font-medium uppercase text-foreground/60" style={{ letterSpacing: "0.28em" }}>
          <span style={{ display: "inline-block", width: 8, height: 8, background: "oklch(0.62 0.24 25)", boxShadow: "0 0 14px oklch(0.62 0.24 25 / 0.7)" }} />
          Leistungen
        </div>
        <h1 className="mt-8 font-display text-foreground" style={{ lineHeight: 1.02 }}>
          <span className="block font-bold uppercase tracking-tight" style={{ fontSize: "clamp(2.5rem, 6vw, 6rem)" }}>
            Architektur<span className="text-primary">leistungen</span>
          </span>
          <span className="mt-6 block max-w-2xl italic font-light text-foreground/75" style={{ fontSize: "clamp(1.05rem, 1.6vw, 1.5rem)" }}>
            Von der ersten Skizze bis zur Schlüsselübergabe — neun Disziplinen, ein Verständnis von Qualität.
          </span>
        </h1>
        <p className="mt-10 max-w-xl text-sm leading-relaxed text-foreground/70">
          Wir denken Architektur als zusammenhängenden Prozess. Jede Leistung greift in die nächste, jeder Schritt baut auf dem vorhergehenden auf — präzise, transparent und mit Schweizer Sorgfalt.
        </p>
      </div>
    </section>
  );
}

function ServicesGrid() {
  return (
    <section className="relative bg-deep py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid gap-px overflow-hidden rounded-2xl" style={{ background: "oklch(1 0 0 / 0.08)" }}>
          {services.map((s, i) => (
            <article
              key={s.num}
              className={`group relative grid gap-8 bg-deep p-8 md:p-12 lg:grid-cols-[160px_1fr_minmax(280px,420px)] lg:items-center lg:gap-12`}
              style={{ background: "oklch(0.09 0.025 25)" }}
            >
              <div className="flex items-baseline gap-4 lg:flex-col lg:items-start lg:gap-2">
                <span className="font-display text-5xl font-bold text-primary/90 md:text-6xl" style={{ lineHeight: 1 }}>
                  {s.num}
                </span>
                <span className="text-[10px] font-medium uppercase text-foreground/40" style={{ letterSpacing: "0.28em" }}>
                  Leistung {i + 1} / {services.length}
                </span>
              </div>
              <div>
                <h2 className="font-display text-2xl font-bold uppercase text-foreground md:text-3xl lg:text-[2rem]" style={{ letterSpacing: "-0.01em", lineHeight: 1.1 }}>
                  {s.title}
                </h2>
                <p className="mt-5 max-w-xl text-sm leading-relaxed text-foreground/70 md:text-[15px]">
                  {s.desc}
                </p>
                <Link
                  to="/"
                  hash="contact"
                  className="mt-7 inline-flex items-center gap-2 text-[11px] font-medium uppercase text-foreground/70 transition-colors hover:text-primary"
                  style={{ letterSpacing: "0.22em" }}
                >
                  Anfragen <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                <img
                  src={s.img}
                  alt={s.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, oklch(0 0 0 / 0) 50%, oklch(0 0 0 / 0.45) 100%)" }} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="relative overflow-hidden bg-deep py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0">
        <img src={constructionAsset.url} alt="" className="absolute inset-0 h-full w-full object-cover opacity-20" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, oklch(0.08 0.03 25 / 0.85) 0%, oklch(0.08 0.03 25) 100%)" }} />
      </div>
      <div className="relative z-10 mx-auto max-w-[900px] px-6 text-center md:px-10">
        <h2 className="font-display text-foreground" style={{ lineHeight: 1.05 }}>
          <span className="block font-bold uppercase" style={{ fontSize: "clamp(1.75rem, 4vw, 3.5rem)" }}>
            Lassen Sie uns Ihr Projekt besprechen
          </span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-foreground/70">
          Ob Studie, Neubau oder Totalunternehmung — wir nehmen uns Zeit, Ihre Vision zu verstehen, bevor wir antworten.
        </p>
        <Link
          to="/"
          hash="contact"
          className="mt-10 inline-flex items-center gap-3 rounded-full bg-primary px-7 py-3 text-xs font-medium uppercase text-primary-foreground transition-transform hover:scale-[1.02]"
          style={{ letterSpacing: "0.24em" }}
        >
          Kontakt aufnehmen <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}

function Architekturleistungen() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className="bg-deep">
      <Header />
      <Hero />
      <ServicesGrid />
      <CTA />
      <footer className="border-t border-white/5 bg-deep py-10">
        <div className="mx-auto max-w-[1400px] px-6 text-center text-[11px] uppercase text-foreground/40 md:px-10" style={{ letterSpacing: "0.22em" }}>
          © Swiss Realplan — Architekturleistungen
        </div>
      </footer>
    </main>
  );
}
