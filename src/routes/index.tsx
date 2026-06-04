import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, ChevronDown, Play, Diamond, Menu } from "lucide-react";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import heroImg from "@/assets/hero.webp";
import saasFee from "@/assets/proj-saas-fee.webp";
import eggerberg from "@/assets/proj-eggerberg.webp";
import erb from "@/assets/proj-erb.webp";
import visp from "@/assets/proj-visp.webp";
import contactImg from "@/assets/contact.webp";
import logoImg from "@/assets/logo.png";
import teamImg from "@/assets/team.webp";
import architectBg from "@/assets/architect-bg.webp";
import { useIsMobile } from "@/hooks/use-mobile";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    links: [
      { rel: "preload", as: "image", href: heroImg, fetchPriority: "high" },
      { rel: "preload", as: "image", href: saasFee },
      { rel: "preload", as: "image", href: eggerberg },
      { rel: "preload", as: "image", href: erb },
      { rel: "preload", as: "image", href: visp },
      { rel: "preload", as: "image", href: teamImg },
      { rel: "preload", as: "image", href: contactImg },
    ],
  }),
});

const projects = [
  { name: "Saas Fee", year: "2023", location: "Valais, CH", img: saasFee, desc: "An alpine retreat carved into the silence of the snowline.", href: "https://alpenchaletdomino.com/" },
  { name: "Eggerberg", year: "2024", location: "Valais, CH", img: eggerberg, desc: "A cantilevered glass volume floating above the granite shelf.", href: "https://soleilhome.info/" },
  { name: "Erb", year: "2024", location: "Visp, CH", img: erb, desc: "Stone, timber and storm light — a shelter that listens.", href: "https://erbhome.info/" },
  { name: "Visp", year: "2025", location: "Valais, CH", img: visp, desc: "Sharp geometries meeting the soft violet of dusk.", href: "#" },
];

const gallery = [
  { src: saasFee, title: "Slope House", tag: "Residential" },
  { src: eggerberg, title: "Pool Pavilion", tag: "Wellness" },
  { src: erb, title: "Stone Lodge", tag: "Hospitality" },
  { src: visp, title: "Valley Crest", tag: "Residential" },
  { src: heroImg, title: "Cliff Suite", tag: "Hospitality" },
  { src: contactImg, title: "Studio Interior", tag: "Workspace" },
  { src: saasFee, title: "Night Glow", tag: "Residential" },
  { src: eggerberg, title: "Mirror Pool", tag: "Wellness" },
  { src: erb, title: "Misty Ridge", tag: "Hospitality" },
  { src: visp, title: "Glass Edge", tag: "Residential" },
  { src: heroImg, title: "Horizon House", tag: "Hospitality" },
  { src: contactImg, title: "Atelier", tag: "Workspace" },
];

function Loader() {
  const [hide, setHide] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setHide(true), 3500);
    return () => clearTimeout(t);
  }, []);
  return (
    <div
      className="fixed inset-0 z-[100] grid h-screen w-screen place-items-center overflow-hidden bg-deep"
      style={{
        transform: hide ? "translate3d(0, -105vh, 0)" : "translate3d(0, 0, 0)",
        transition: "transform 1100ms cubic-bezier(0.77, 0, 0.175, 1)",
        pointerEvents: hide ? "none" : "auto",
        willChange: "transform",
      }}
    >
      <video
        src="/load.mp4"
        autoPlay
        muted
        playsInline
        onEnded={() => setHide(true)}
        onError={() => setHide(true)}
        className="h-full w-full object-contain md:object-cover"
      />
    </div>
  );
}

function Header() {
  const [progress, setProgress] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [ready, setReady] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setReady(true), 3600);
    const onScroll = () => {
      const h = document.documentElement;
      const total = h.scrollHeight - h.clientHeight;
      setProgress(total > 0 ? (h.scrollTop / total) * 100 : 0);
      setScrolled(h.scrollTop > 40);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      clearTimeout(t);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);
  const links = [
    { href: "#projects", label: "Projects" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "/architekturleistungen", label: "Architekturleistungen", route: true as const },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <header
      className="fixed inset-x-0 top-0 z-[200] transition-all duration-700 ease-out"
      style={{
        opacity: ready ? 1 : 0,
        transform: ready ? "translateY(0)" : "translateY(-100%)",
        pointerEvents: ready ? "auto" : "none",
        background: scrolled
          ? "linear-gradient(180deg, oklch(0.12 0.04 25 / 0.78) 0%, oklch(0.08 0.03 25 / 0.62) 100%)"
          : "linear-gradient(180deg, oklch(0 0 0 / 0.55) 0%, oklch(0 0 0 / 0) 100%)",
        backdropFilter: scrolled ? "blur(16px) saturate(140%)" : "blur(6px)",
        WebkitBackdropFilter: scrolled ? "blur(16px) saturate(140%)" : "blur(6px)",
        borderBottom: scrolled ? "1px solid oklch(1 0 0 / 0.08)" : "1px solid transparent",
      }}
    >
      <div className="mx-auto flex max-w-[1800px] items-center justify-between gap-3 px-6 py-4 md:px-10 md:py-5">
        <a href="#" className="group flex items-center gap-3 shrink-0">
          <span
            className="transition-all duration-500 group-hover:rotate-45"
            style={{ display: "inline-block", width: 10, height: 10, background: "oklch(0.62 0.24 25)", boxShadow: "0 0 14px oklch(0.62 0.24 25 / 0.7)" }}
            aria-hidden
          />
          <span className="font-display text-[13px] uppercase text-foreground md:text-sm" style={{ letterSpacing: "0.22em", fontWeight: 500 }}>
            Swiss Realplan
          </span>
        </a>
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
              return l.route ? (
                <Link key={l.href} to={l.href} className={className} style={{ letterSpacing: "0.2em" }}>
                  {l.label}
                  {underline}
                </Link>
              ) : (
                <a key={l.href} href={l.href} className={className} style={{ letterSpacing: "0.2em" }}>
                  {l.label}
                  {underline}
                </a>
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
                  l.route ? (
                    <Link
                      key={l.href}
                      to={l.href}
                      onClick={() => setMenuOpen(false)}
                      className="text-sm font-medium uppercase text-foreground/75 transition-colors hover:text-foreground"
                      style={{ letterSpacing: "0.2em" }}
                    >
                      {l.label}
                    </Link>
                  ) : (
                    <a
                      key={l.href}
                      href={l.href}
                      onClick={() => setMenuOpen(false)}
                      className="text-sm font-medium uppercase text-foreground/75 transition-colors hover:text-foreground"
                      style={{ letterSpacing: "0.2em" }}
                    >
                      {l.label}
                    </a>
                  )
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
      <div className="h-px w-full" style={{ background: "oklch(1 0 0 / 0.06)" }}>
        <div
          className="h-full transition-[width] duration-75"
          style={{ width: `${progress}%`, background: "linear-gradient(90deg, oklch(0.55 0.22 25), oklch(0.78 0.2 25))" }}
        />
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative bg-deep">
      <div className="relative mx-auto h-screen min-h-[640px] w-full overflow-hidden">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <iframe
            title="Hero background video"
            src="https://www.youtube.com/embed/EaDR6ygHsO0?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&playlist=EaDR6ygHsO0&disablekb=1&iv_load_policy=3&fs=0"
            allow="autoplay; encrypted-media; picture-in-picture"
            className="pointer-events-none absolute left-1/2 top-1/2 h-[56.25vw] min-h-full w-[177.77vh] min-w-full -translate-x-1/2 -translate-y-1/2 border-0"
          />
        </div>
        

        <div className="relative z-10 flex h-full flex-col px-6 text-center">
          <div className="mt-auto flex flex-col items-center pb-10">
            <h1 className="font-display text-foreground animate-fade-up" style={{ lineHeight: 1.05, textShadow: "0 3px 28px rgba(0,0,0,0.75)" }}>
              <span className="block font-bold uppercase tracking-tight" style={{ fontSize: "clamp(2.25rem, 5vw, 5rem)" }}>zeitlose Architektur</span>
              <span className="mt-3 block italic font-light text-foreground/80" style={{ fontSize: "clamp(1.1rem, 2.2vw, 2rem)", textShadow: "0 2px 20px rgba(0,0,0,1)" }}>Schweizer Präzision trifft auf visionäres Design</span>
            </h1>
            <p className="mx-auto mt-6 max-w-md text-sm text-foreground/85 animate-fade-in">
              Wir erschaffen hochwertige, nachhaltige Architektur mit natürlichen Materialien und klaren Konzepten — für Räume, die Ästhetik, Funktion und modernes Wohnen harmonisch vereinen.
            </p>
            <a href="#projects" className="mt-6 flex flex-col items-center gap-2 text-xs uppercase tracking-wider-sm text-foreground/80 transition hover:text-primary">
              Scroll Down
              <ChevronDown className="h-5 w-5 animate-bounce-soft" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Intro() {
  return null;
}

function CurrentProjects() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const isMobile = useIsMobile();


  useEffect(() => {
    let raf = 0;
    let target = 0;
    let current = 0;
    let running = true;

    const measure = () => {
      const el = wrapRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = el.offsetHeight - vh;
      const scrolled = Math.min(Math.max(-rect.top, 0), Math.max(total, 1));
      target = total > 0 ? scrolled / total : 0;
    };

    const tick = () => {
      current += (target - current) * 0.08; // smooth lerp
      setProgress(current);
      if (running) raf = requestAnimationFrame(tick);
    };

    measure();
    current = target;
    raf = requestAnimationFrame(tick);
    window.addEventListener("scroll", measure, { passive: true });
    window.addEventListener("resize", measure);
    return () => {
      running = false;
      window.removeEventListener("scroll", measure);
      window.removeEventListener("resize", measure);
      cancelAnimationFrame(raf);
    };
  }, []);

  const maxShift = Math.max(0, (projects.length - 3) * (100 / 3));
  const translatePct = -(progress * maxShift);

  if (isMobile) {
    return (
      <section id="projects" className="relative isolate overflow-hidden" style={{ background: "radial-gradient(120% 80% at 50% 0%, oklch(0 0 0) 0%, oklch(0.08 0.06 25) 45%, oklch(0.18 0.12 25) 100%)" }}>
        <div className="pointer-events-none absolute inset-0 bg-grain mix-blend-overlay opacity-70" />
        <div className="relative mx-auto max-w-3xl px-6 pt-20 text-center">
          <h2 className="font-display uppercase text-foreground" style={{ fontSize: "clamp(2rem, 9vw, 3rem)", lineHeight: 1 }}>Aktuelle Projekte</h2>
          <p className="mx-auto mt-6 max-w-xl text-sm font-normal text-foreground/85" style={{ lineHeight: 1.7 }}>
Wir gestalten Architektur mit Präzision, Klarheit und einem Gespür für zeitlose Ästhetik. Entdecken Sie unsere aktuellen Architektur- und Visualisierungsprojekte in der ganzen Schweiz — wo nachhaltige Materialien, moderne Formensprache und funktionales Design zu einzigartigen Lebensräumen verschmelzen.
          </p>
        </div>
        <div className="relative mt-10 flex flex-col items-center gap-5 px-5 pb-16">
          {projects.map((p, i) => (
            <a
              key={p.name}
              href={p.href}
              target={p.href.startsWith("http") ? "_blank" : undefined}
              rel={p.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group relative block w-[76%] aspect-[4/5] overflow-hidden rounded-2xl border border-white/20 backdrop-blur-xl transition-all duration-300 ease-out hover:scale-[1.02] active:scale-[0.98] hover:shadow-[0_12px_40px_oklch(1_ 0 0 / 0.35),inset_1px_1px_0_oklch(1_0_0/0.2)]"
              style={{
                background: "oklch(1 0 0 / 0.06)",
                boxShadow: "0 8px 32px oklch(1 0 0 / 0.35), inset 0 1px 0 oklch(1 0 0 / 0.15)",
              }}
            >
              <img src={p.img} alt={p.name} className="absolute inset-0 h-full w-full object-cover opacity-80" loading={i === 0 ? "eager" : "lazy"} />
              <div className="absolute inset-0 py-[20px] px-0" style={{ background: "linear-gradient(0deg, oklch(0.08 0.01 25 / 0.85), oklch(0.08 0.01 25 / 0.15) 60%)" }} />
              <div className="absolute inset-x-2 bottom-2 rounded-xl border border-white/15 p-3 backdrop-blur-md" style={{ background: "oklch(1 0 0 / 0.08)" }}>
                <span className="text-[9px] uppercase tracking-wider-sm text-foreground/80">{String(i + 1).padStart(2, "0")} · {p.location}</span>
                <h3 className="mt-1 font-display uppercase text-foreground" style={{ fontSize: "1.4rem", lineHeight: 1 }}>{p.name}</h3>
              </div>
            </a>
          ))}

        </div>
      </section>
    );
  }

  return (
    <section
      id="projects"
      ref={wrapRef}
      className="relative"
      style={{ height: `${projects.length * 90}vh` }}
    >
      <div className="sticky top-0 flex h-screen flex-col overflow-hidden isolate" style={{ background: "radial-gradient(120% 80% at 50% 0%, oklch(0 0 0) 0%, oklch(0.08 0.06 25) 45%, oklch(0.18 0.12 25) 100%)" }}>
        <div className="pointer-events-none absolute inset-0 bg-grain mix-blend-overlay opacity-70" />
        <div className="mx-auto max-w-4xl 2xl:max-w-5xl px-8 pt-12 2xl:pt-16 text-center">
          <h2 className="font-display uppercase text-foreground whitespace-nowrap" style={{ fontSize: "clamp(1.5rem, 4.2vw, 5rem)", lineHeight: 1 }}>
            Aktuelle Projekte
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-[13px] font-normal text-foreground/85 2xl:mt-8 2xl:max-w-3xl 2xl:text-sm" style={{ lineHeight: 1.7 }}>
Wir gestalten Architektur mit Präzision, Klarheit und einem Gespür für zeitlose Ästhetik. Entdecken Sie unsere aktuellen Architektur- und Visualisierungsprojekte in der ganzen Schweiz — wo nachhaltige Materialien, moderne Formensprache und funktionales Design zu einzigartigen Lebensräumen verschmelzen.
          </p>
        </div>


        <div className="relative mt-6 flex-1 overflow-hidden pb-2 xl:pb-6">

          <div
            className="flex h-full items-start gap-6 px-8 will-change-transform md:px-14"
            style={{
              width: `${(projects.length / 3) * 100}%`,
              transform: `translate3d(${translatePct}%, 0, 0)`,
            }}
          >
            {projects.map((p, i) => (
              <a
                key={p.name}
                href={p.href}
                target={p.href.startsWith("http") ? "_blank" : undefined}
                rel={p.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group relative flex aspect-square h-auto shrink-0 self-start overflow-hidden rounded-2xl border border-white/15 bg-black/30 xl:rounded-3xl"

                style={{ width: `calc(${100 / projects.length}% - 1.25rem)`, boxShadow: "0 25px 60px -15px oklch(0 0 0 / 0.65), 0 10px 30px -10px oklch(0 0 0 / 0.5)" }}
              >
                <img src={p.img} alt={p.name} width={1280} height={1600} loading={i === 0 ? "eager" : "lazy"} className="absolute inset-0 h-full w-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 py-[20px] px-0" style={{ background: "linear-gradient(0deg, oklch(0.08 0.01 25 / 0.85), transparent 60%)" }} />
                <div className="relative z-10 mt-auto w-full p-5 sm:p-6 md:p-8">
                  <span className="text-[9px] sm:text-[10px] uppercase tracking-wider-sm text-foreground/70">{String(i + 1).padStart(2, "0")} · {p.location}</span>
                  <h3 className="mt-2 font-display uppercase text-foreground" style={{ fontSize: "clamp(1.1rem, 2.4vw, 2.25rem)", lineHeight: 1 }}>
                    {p.name}
                  </h3>
                </div>

              </a>
            ))}
          </div>
        </div>

        <div className="mx-auto mb-10 h-[2px] w-64 overflow-hidden bg-white/15">
          <div className="h-full" style={{ width: `${progress * 100}%`, background: "var(--gradient-red-black)" }} />
        </div>
      </div>
    </section>
  );
}

function Portfolio() {
  return (
    <section id="portfolio" className="relative bg-deep py-20 px-5 sm:px-8 md:px-10 lg:px-[50px] md:py-28">
      <div className="pointer-events-none absolute inset-0 bg-grain opacity-20" />
      <div className="relative mx-auto mb-12 flex max-w-[1800px] flex-col gap-6 reveal md:flex-row md:items-end md:justify-between">
        <div>
          <span className="text-xs uppercase tracking-wider-sm text-primary">Portfolio</span>
          <h2 className="mt-3 font-display uppercase text-foreground" style={{ fontSize: "clamp(2.25rem, 5vw, 4.5rem)", lineHeight: 1 }}>
            Ausgeführte Projekte
          </h2>
        </div>
        <p className="max-w-md text-sm text-foreground/75">
          Dreißig Jahre, verdichtet in Stein, Glas und Licht.
        </p>
      </div>

      <div className="relative mx-auto grid max-w-[1800px] grid-cols-2 gap-0 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {Array.from({ length: 30 }).map((_, i) => {
          const tags = ["Residential", "Wellness", "Hospitality", "Workspace"];
          const title = `Project ${String(i + 1).padStart(2, "0")}`;
          const tag = tags[i % tags.length];
          const eager = true;
          return (
            <a
              key={i}
              href="#"
              className="group relative aspect-square overflow-hidden reveal bg-black/40"
              style={{ transitionDelay: `${(i % 6) * 60}ms` }}
            >
              <img
                src={`/cards/card${i + 1}.webp`}
                alt={title}
                width={800}
                height={800}
                sizes="(min-width:1024px) 16vw, (min-width:768px) 25vw, (min-width:640px) 33vw, 50vw"
                loading="eager"
                decoding="async"
                fetchPriority={i < 6 ? "high" : "auto"}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div
                className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{ background: "var(--gradient-hover)" }}
              />

            </a>
          );
        })}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="bg-deep px-6 py-20 md:px-16 md:py-24 xl:py-32">
      <div className="mx-auto flex w-full max-w-6xl flex-col">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-16 xl:gap-24">
          <div className="reveal lg:col-span-5 xl:col-span-5">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-[160px] overflow-hidden rounded-[2rem] lg:max-w-[260px] xl:ml-auto xl:mr-0 xl:max-w-[220px] 2xl:mx-auto 2xl:max-w-none" style={{ background: "oklch(0.06 0.01 25)" }}>
              <img
                src={teamImg}
                alt="Our team"
                width={1280}
                height={1600}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="reveal flex flex-col lg:col-span-7">
            <div className="mb-10 xl:mb-14">
              <span className="mb-6 block text-[11px] uppercase text-primary" style={{ letterSpacing: "0.4em", fontFamily: "'JetBrains Mono', ui-monospace, monospace" }}>
                Kontaktieren Sie uns
              </span>
              <h2 className="font-display font-light leading-[1.1] tracking-tight text-foreground" style={{ fontSize: "clamp(1.25rem, 3.2vw, 4.5rem)" }}>
                Beginnen wir das <span className="italic text-foreground/90" style={{ fontFamily: "'DM Serif Display', serif" }}>Gespräch.</span>
              </h2>
            </div>


            <form
              onSubmit={(e) => {
                e.preventDefault();
                const data = new FormData(e.currentTarget);
                const name = String(data.get("name") ?? "");
                const email = String(data.get("email") ?? "");
                const subject = String(data.get("subject") ?? "");
                const message = String(data.get("message") ?? "");
                const body = `Name: ${name}\nE-Mail: ${email}\n\n${message}`;
                window.location.href = `mailto:swiss.realplan.immo@gmx.ch?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
              }}
              className="space-y-12"
            >
              <div className="grid grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-2">
                <Field label="Name" name="name" placeholder="Ihr vollständiger Name" />
                <Field label="E-Mail" name="email" type="email" placeholder="sie@beispiel.ch" />
              </div>
              <Field label="Betreff" name="subject" placeholder="Projektanfrage, Zusammenarbeit…" />
              <label className="block">
                <span className="mb-3 block text-[10px] uppercase text-foreground/40" style={{ letterSpacing: "0.2em", fontFamily: "'JetBrains Mono', ui-monospace, monospace" }}>
                  Nachricht
                </span>
                <textarea
                  name="message"
                  rows={2}
                  placeholder="Erzählen Sie uns von Ihrem Raum."
                  className="w-full resize-none border-b border-white/20 bg-transparent pb-4 text-base font-light text-foreground placeholder:text-foreground/10 transition-colors focus:border-primary focus:outline-none"
                />
              </label>
              <div className="pt-2">
                <button
                  type="submit"
                  className="group inline-flex items-center gap-6 px-10 py-5 text-[11px] uppercase text-foreground transition-all hover:brightness-110"
                  style={{ background: "oklch(0.55 0.22 25)", letterSpacing: "0.3em", fontFamily: "'JetBrains Mono', ui-monospace, monospace" }}
                >
                  <span>Nachricht senden</span>
                  <ArrowUpRight className="h-5 w-5 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" strokeWidth={1} />
                </button>
              </div>
            </form>
          </div>
        </div>

        <footer className="mt-32 grid grid-cols-1 gap-10 border-t border-white/10 pt-10 md:grid-cols-3">
          <div>
            <div className="mb-3 text-[11px] uppercase text-foreground" style={{ letterSpacing: "0.25em", fontFamily: "'JetBrains Mono', ui-monospace, monospace" }}>Office Visp</div>
            <div className="space-y-1 text-sm font-light text-foreground/50">
              <div>Terbinerstrasse 28</div>
              <div>Postfach 26</div>
              <div>3930 Visp</div>
            </div>
          </div>
          <div>
            <div className="mb-3 text-[11px] uppercase text-foreground" style={{ letterSpacing: "0.25em", fontFamily: "'JetBrains Mono', ui-monospace, monospace" }}>Office Murten</div>
            <div className="space-y-1 text-sm font-light text-foreground/50">
              <div>Irisweg 14</div>
              <div>3280 Murten</div>
            </div>
          </div>
          <div className="flex items-start justify-start text-[10px] uppercase text-foreground/40 md:justify-end" style={{ letterSpacing: "0.25em", fontFamily: "'JetBrains Mono', ui-monospace, monospace" }}>
            © {new Date().getFullYear()} SWISSREALPLAN
          </div>
        </footer>
      </div>
    </section>
  );
}

function Field({ label, ...rest }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="block">
      <span className="mb-3 block text-[10px] uppercase text-foreground/40" style={{ letterSpacing: "0.2em", fontFamily: "'JetBrains Mono', ui-monospace, monospace" }}>
        {label}
      </span>
      <input
        {...rest}
        className="w-full border-b border-white/20 bg-transparent pb-4 text-base font-light text-foreground placeholder:text-foreground/10 transition-colors focus:border-primary focus:outline-none"
      />
    </label>
  );
}

function Home() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

    const textSelector = "h1, h2, h3, h4, h5, h6, p, span, a, label, li, blockquote";
    const textEls = document.querySelectorAll<HTMLElement>(`main ${textSelector}`);
    textEls.forEach((el) => {
      if (el.closest("header")) return;
      if (el.closest(".text-anim")) return;
      if (!el.textContent || !el.textContent.trim()) return;
      el.classList.add("text-anim");
      io.observe(el);
    });

    return () => io.disconnect();
  }, []);


  return (
    <main className="bg-deep">
      <Loader />
      <Header />
      <Hero />
      <Intro />
      <CurrentProjects />
      <Portfolio />
      <Contact />
    </main>
  );
}
