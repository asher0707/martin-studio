import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, ChevronDown, Play, Diamond } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import saasFee from "@/assets/proj-saas-fee.jpg";
import eggerberg from "@/assets/proj-eggerberg.jpg";
import erb from "@/assets/proj-erb.jpg";
import visp from "@/assets/proj-visp.jpg";
import contactImg from "@/assets/contact.jpg";
import logoImg from "@/assets/logo.png";
import teamImg from "@/assets/team.png";

export const Route = createFileRoute("/")({
  component: Home,
});

const projects = [
  { name: "Saas Fee", year: "2023", location: "Valais, CH", img: saasFee, desc: "An alpine retreat carved into the silence of the snowline." },
  { name: "Eggerberg", year: "2024", location: "Brig, CH", img: eggerberg, desc: "A cantilevered glass volume floating above the granite shelf." },
  { name: "Erb", year: "2024", location: "Zermatt, CH", img: erb, desc: "Stone, timber and storm light — a shelter that listens." },
  { name: "Visp", year: "2025", location: "Rhone Valley, CH", img: visp, desc: "Sharp geometries meeting the soft violet of dusk." },
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
    const t = setTimeout(() => setHide(true), 1400);
    return () => clearTimeout(t);
  }, []);
  return (
    <div
      className="fixed inset-0 z-[100] grid place-items-center bg-deep transition-all duration-700"
      style={{ opacity: hide ? 0 : 1, visibility: hide ? "hidden" : "visible" }}
    >
      <div className="flex flex-col items-center gap-6">
        <div className="relative h-16 w-16">
          <span className="absolute inset-0 rounded-full border-2 border-white/10" />
          <span
            className="absolute inset-0 rounded-full border-2 border-transparent"
            style={{ borderTopColor: "oklch(0.55 0.22 25)", animation: "loader-spin 0.9s linear infinite" }}
          />
        </div>
        <div className="h-[2px] w-40 overflow-hidden bg-white/10">
          <div className="h-full" style={{ background: "var(--gradient-red-black)", animation: "loader-bar 1.2s ease-out forwards" }} />
        </div>
        <span className="text-[10px] uppercase tracking-wider-sm text-foreground/60">SwissPlan</span>
      </div>
    </div>
  );
}

function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <div className="mx-auto flex max-w-[1800px] items-center justify-between px-8 py-6">
        <a href="#" className="flex items-center gap-3">
          <img src={logoImg} alt="SwissPlan" width={120} height={48} className="h-10 w-auto object-contain" />
          <span className="font-display text-xl tracking-tight text-foreground">SwissPlan</span>
        </a>
        <nav className="hidden items-center gap-12 md:flex">
          <a href="#projects" className="text-xs font-medium uppercase tracking-wider-sm text-foreground/85 transition hover:text-primary">Current Projects</a>
          <a href="#portfolio" className="text-xs font-medium uppercase tracking-wider-sm text-foreground/85 transition hover:text-primary">Portfolio</a>
          <a href="#contact" className="text-xs font-medium uppercase tracking-wider-sm text-foreground/85 transition hover:text-primary">Contact Us</a>
        </nav>
        <a href="#contact" className="group inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-foreground transition hover:gap-3" style={{ background: "var(--gradient-red-black)" }}>
          Let's Talk
          <span className="grid h-6 w-6 place-items-center rounded-full bg-foreground/95 text-primary transition-transform group-hover:rotate-45">
            <ArrowUpRight className="h-3.5 w-3.5" />
          </span>
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative bg-deep px-5 pt-28 pb-10">
      <div className="relative mx-auto h-[88vh] max-h-[920px] min-h-[640px] w-full overflow-hidden rounded-3xl">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <iframe
            title="Hero background video"
            src="https://www.youtube.com/embed/jK9SGbX1KaE?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&playlist=jK9SGbX1KaE"
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
            className="absolute left-1/2 top-1/2 h-[56.25vw] min-h-full w-[177.77vh] min-w-full -translate-x-1/2 -translate-y-1/2 border-0"
          />
        </div>
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, oklch(0.08 0.01 25 / 0.45), oklch(0.08 0.01 25 / 0.3), oklch(0.45 0.22 25 / 0.6))" }} />

        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
          <h1 className="font-display text-foreground animate-fade-up" style={{ fontSize: "clamp(3rem, 9vw, 9rem)", lineHeight: 0.95 }}>
            <span className="block font-semibold uppercase tracking-tight">Inward Journey</span>
            <span className="mt-2 block italic">for the Soul</span>
          </h1>
          <a href="#projects" className="group mt-10 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-foreground animate-fade-up" style={{ background: "var(--gradient-red-black)" }}>
            Explore products
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
          </a>

          <p className="mx-auto mt-16 max-w-md text-sm text-foreground/85 animate-fade-in">
            #Where the precision of the grid meets the vitality of the shore. A high-scale context for the modern nomad to recharge.
          </p>
          <a href="#projects" className="mt-10 flex flex-col items-center gap-2 text-xs uppercase tracking-wider-sm text-foreground/80 transition hover:text-primary">
            Scroll Down
            <ChevronDown className="h-5 w-5 animate-bounce-soft" />
          </a>
        </div>
      </div>
    </section>
  );
}

function Intro() {
  return (
    <section className="bg-deep px-8 py-32">
      <div className="mx-auto flex max-w-6xl flex-col items-center text-center reveal">
        <Diamond className="h-5 w-5 text-primary" />
        <h2 className="mt-6 font-display text-foreground" style={{ fontSize: "clamp(2rem, 5vw, 4.5rem)", lineHeight: 1.05 }}>
          We are a conversion-led collective redefining the language of place,
          <span className="italic text-foreground/70"> one quiet monolith at a time.</span>
        </h2>
      </div>
    </section>
  );
}

function CurrentProjects() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const el = wrapRef.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const vh = window.innerHeight;
        const total = el.offsetHeight - vh;
        const scrolled = Math.min(Math.max(-rect.top, 0), Math.max(total, 1));
        setProgress(total > 0 ? scrolled / total : 0);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  // Slide track horizontally; show ~3 cards at a time.
  const maxShift = Math.max(0, (projects.length - 3) * (100 / 3));
  const translatePct = -(progress * maxShift);

  return (
    <section
      id="projects"
      ref={wrapRef}
      className="relative"
      style={{ height: `${projects.length * 90}vh`, background: "linear-gradient(180deg, oklch(0.08 0.005 25) 0%, oklch(0.30 0.18 25) 55%, oklch(0.18 0.10 25) 100%)" }}
    >
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-60" />
      <div className="pointer-events-none absolute inset-0 bg-grain mix-blend-overlay opacity-40" />

      <div className="sticky top-0 flex h-screen flex-col overflow-hidden">
        <div className="mx-auto max-w-3xl px-8 pt-24 text-center">
          <h2 className="font-display uppercase text-foreground" style={{ fontSize: "clamp(2.5rem, 5.5vw, 5rem)", lineHeight: 1 }}>
            Current Projects
          </h2>
          <p className="mx-auto mt-8 max-w-xl text-sm font-normal text-foreground/85" style={{ lineHeight: 1.7 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
          </p>
        </div>

        <div className="relative mt-12 flex-1 overflow-hidden">
          <div
            className="flex h-full gap-6 px-8 will-change-transform md:px-14"
            style={{
              width: `${(projects.length / 3) * 100}%`,
              transform: `translate3d(${translatePct}%, 0, 0)`,
              transition: "transform 0.15s linear",
            }}
          >
            {projects.map((p, i) => (
              <article
                key={p.name}
                className="relative flex h-[70%] shrink-0 overflow-hidden rounded-3xl border border-white/15 bg-black/30"
                style={{ width: `calc(${100 / projects.length}% - 1.25rem)` }}
              >
                <img src={p.img} alt={p.name} width={1280} height={1600} loading={i === 0 ? "eager" : "lazy"} className="absolute inset-0 h-full w-full object-cover opacity-90" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(0deg, oklch(0.08 0.01 25 / 0.85), transparent 60%)" }} />
                <div className="relative z-10 mt-auto w-full p-8">
                  <span className="text-[10px] uppercase tracking-wider-sm text-foreground/70">{String(i + 1).padStart(2, "0")} · {p.location}</span>
                  <h3 className="mt-2 font-display uppercase text-foreground" style={{ fontSize: "clamp(1.5rem, 2.4vw, 2.25rem)", lineHeight: 1 }}>
                    {p.name}
                  </h3>
                </div>
              </article>
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
    <section id="portfolio" className="bg-deep px-[30px] py-28">
      <div className="mx-auto mb-12 flex max-w-[1800px] flex-col gap-6 reveal md:flex-row md:items-end md:justify-between">
        <div>
          <span className="text-xs uppercase tracking-wider-sm text-primary">Portfolio</span>
          <h2 className="mt-3 font-display text-foreground" style={{ fontSize: "clamp(2.25rem, 5vw, 4.5rem)", lineHeight: 1 }}>
            A grid of <span className="italic text-foreground/70">quiet weight</span>
          </h2>
        </div>
        <p className="max-w-md text-sm text-foreground/75">
          Thirty stories of stone, glass, and light. Hover to reveal the world behind each frame.
        </p>
      </div>

      <div className="mx-auto grid max-w-[1800px] grid-cols-2 gap-2 md:grid-cols-4 lg:grid-cols-6">
        {Array.from({ length: 30 }).map((_, i) => {
          const item = gallery[i % gallery.length];
          return (
            <a
              key={i}
              href="#"
              className="group relative aspect-square overflow-hidden reveal"
              style={{ transitionDelay: `${(i % 6) * 60}ms` }}
            >
              <img src={item.src} alt={item.title} width={800} height={800} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div
                className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{ background: "var(--gradient-hover)" }}
              />
              <div className="absolute inset-0 flex translate-y-3 flex-col justify-end p-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <span className="text-[10px] uppercase tracking-wider-sm text-foreground">{item.tag}</span>
                <h3 className="mt-1 font-display text-xl text-foreground">{item.title}</h3>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="bg-deep px-8 py-28">
      <div className="mx-auto grid max-w-[1600px] items-center gap-10 md:grid-cols-2 md:gap-16">
        <div className="reveal relative overflow-hidden rounded-3xl" style={{ background: "var(--gradient-red-black)" }}>
          <img src={teamImg} alt="Our team" width={1280} height={1280} loading="lazy" className="h-full w-full object-contain" />
        </div>

        <div className="reveal flex flex-col justify-center">
          <span className="text-xs uppercase tracking-wider-sm text-primary">Contact Us</span>
          <h2 className="mt-3 font-display text-foreground" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", lineHeight: 1 }}>
            Begin the <span className="italic text-foreground/70">conversation.</span>
          </h2>
          <form onSubmit={(e) => e.preventDefault()} className="mt-10 grid gap-5">
            <div className="grid gap-5 md:grid-cols-2">
              <Field label="Name" placeholder="Your full name" />
              <Field label="Email" type="email" placeholder="you@studio.com" />
            </div>
            <Field label="Subject" placeholder="A new monolith…" />
            <label className="flex flex-col gap-2 text-xs uppercase tracking-wider-sm text-foreground/70">
              Message
              <textarea rows={4} placeholder="Tell us about the place." className="rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-foreground/40 focus:border-primary focus:outline-none" />
            </label>
            <button type="submit" className="group mt-2 inline-flex w-fit items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-foreground transition hover:gap-3" style={{ background: "var(--gradient-red-black)" }}>
              Send message
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
            </button>
          </form>
        </div>
      </div>

      <footer className="mx-auto mt-24 flex max-w-[1600px] flex-col items-start justify-between gap-4 border-t border-border pt-8 text-xs uppercase tracking-wider-sm text-foreground/60 md:flex-row md:items-center">
        <span>© {new Date().getFullYear()} SwissPlan Collective</span>
        <span>Geneva · Zurich · Milan</span>
      </footer>
    </section>
  );
}

function Field({ label, ...rest }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="flex flex-col gap-2 text-xs uppercase tracking-wider-sm text-foreground/70">
      {label}
      <input {...rest} className="rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-foreground/40 focus:border-primary focus:outline-none" />
    </label>
  );
}

function Home() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("in"); });
      },
      { threshold: 0.15 }
    );
    els.forEach((el) => io.observe(el));
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
