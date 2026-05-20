import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, ChevronDown, Play, Diamond } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import saasFee from "@/assets/proj-saas-fee.jpg";
import eggerberg from "@/assets/proj-eggerberg.jpg";
import erb from "@/assets/proj-erb.jpg";
import visp from "@/assets/proj-visp.jpg";
import contactImg from "@/assets/contact.jpg";

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

function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <div className="mx-auto flex max-w-[1800px] items-center justify-between px-8 py-7">
        <a href="#" className="font-display text-2xl tracking-tight text-foreground">Monolith</a>
        <nav className="hidden items-center gap-12 md:flex">
          <a href="#projects" className="text-xs font-medium uppercase tracking-wider-sm text-foreground/85 transition hover:text-mint">Current Projects</a>
          <a href="#portfolio" className="text-xs font-medium uppercase tracking-wider-sm text-foreground/85 transition hover:text-mint">Portfolio</a>
          <a href="#contact" className="text-xs font-medium uppercase tracking-wider-sm text-foreground/85 transition hover:text-mint">Contact Us</a>
        </nav>
        <a href="#contact" className="group inline-flex items-center gap-2 rounded-full bg-mint px-5 py-2.5 text-sm font-medium text-mint-foreground transition hover:gap-3">
          Let's Talk
          <span className="grid h-6 w-6 place-items-center rounded-full bg-mint-foreground/90 text-mint transition-transform group-hover:rotate-45">
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
        <img src={heroImg} alt="Cliffside architecture at dusk" width={1920} height={1280} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-deep/30 via-deep/10 to-deep/70" />

        {/* Overlay text */}
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
          <h1 className="font-display text-foreground animate-fade-up" style={{ fontSize: "clamp(3rem, 9vw, 9rem)", lineHeight: 0.95 }}>
            <span className="block font-semibold uppercase tracking-tight">Inward Journey</span>
            <span className="mt-2 block italic">for the Soul</span>
          </h1>
          <a href="#projects" className="group mt-10 inline-flex items-center gap-2 rounded-full bg-mint px-6 py-3 text-sm font-medium text-mint-foreground animate-fade-up">
            Explore products
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
          </a>

          <p className="mx-auto mt-16 max-w-md text-sm text-foreground/85 animate-fade-in">
            #Where the precision of the grid meets the vitality of the shore. A high-scale context for the modern nomad to recharge.
          </p>
          <a href="#projects" className="mt-10 flex flex-col items-center gap-2 text-xs uppercase tracking-wider-sm text-foreground/80 transition hover:text-mint">
            Scroll Down
            <ChevronDown className="h-5 w-5 animate-bounce-soft" />
          </a>
        </div>

        {/* Video card */}
        <a
          href="https://youtu.be/jK9SGbX1KaE?si=5nAysrI0Rw6GcPXQ"
          target="_blank"
          rel="noreferrer"
          className="group absolute bottom-6 right-6 z-20 block w-56 overflow-hidden rounded-2xl border border-white/10 bg-deep/70 p-2 backdrop-blur-md transition hover:scale-[1.02]"
        >
          <div className="flex items-center justify-between px-2 pb-2 pt-1">
            <span className="text-[10px] uppercase tracking-wider-sm text-foreground/70">Satisfaction</span>
            <span className="font-display text-xl text-foreground">4.9</span>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
            <img src={visp} alt="Project film" width={400} height={300} loading="lazy" className="h-full w-full object-cover transition group-hover:scale-105" />
            <div className="absolute inset-0 grid place-items-center bg-black/30">
              <span className="grid h-11 w-11 place-items-center rounded-full bg-white/90 text-deep">
                <Play className="h-4 w-4 fill-current" />
              </span>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
}

function Intro() {
  return (
    <section className="bg-deep px-8 py-32">
      <div className="mx-auto flex max-w-6xl flex-col items-center text-center reveal">
        <Diamond className="h-5 w-5 text-mint" />
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
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = wrapRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const total = el.offsetHeight - window.innerHeight;
      const scrolled = Math.min(Math.max(-rect.top, 0), total);
      const p = total > 0 ? scrolled / total : 0;
      setProgress(p);
      setActiveIdx(Math.min(projects.length - 1, Math.floor(p * projects.length * 0.999)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const translateX = -(progress * (projects.length - 1) * 100);

  return (
    <section id="projects" ref={wrapRef} className="relative bg-deep" style={{ height: `${projects.length * 100}vh` }}>
      <div className="sticky top-0 flex h-screen flex-col overflow-hidden">
        <div className="flex items-end justify-between px-8 pt-16 pb-8 md:px-14">
          <div>
            <span className="text-xs uppercase tracking-wider-sm text-mint">Current Projects</span>
            <h2 className="mt-3 font-display text-foreground" style={{ fontSize: "clamp(2.25rem, 5vw, 4.5rem)", lineHeight: 1 }}>
              In the studio <span className="italic text-foreground/70">now</span>
            </h2>
          </div>
          <div className="hidden items-center gap-3 md:flex">
            {projects.map((p, i) => (
              <span
                key={p.name}
                className={`h-[2px] w-10 transition-all duration-500 ${i <= activeIdx ? "bg-mint" : "bg-foreground/20"}`}
              />
            ))}
          </div>
        </div>

        <div className="relative flex-1 px-8 md:px-14">
          <div
            className="flex h-full gap-8 transition-transform duration-700 ease-out"
            style={{ transform: `translate3d(${translateX}%, 0, 0)`, width: `${projects.length * 100}%` }}
          >
            {projects.map((p, i) => (
              <article
                key={p.name}
                className="relative flex h-full shrink-0 overflow-hidden rounded-3xl border border-white/10"
                style={{ width: `${100 / projects.length}%` }}
              >
                <img src={p.img} alt={p.name} width={1280} height={1600} loading={i === 0 ? "eager" : "lazy"} className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-deep via-deep/40 to-transparent" />
                <div className="relative z-10 flex h-full w-full flex-col justify-between p-10 md:p-14">
                  <div className="flex items-start justify-between">
                    <span className="rounded-full border border-foreground/30 px-3 py-1 text-[10px] uppercase tracking-wider-sm text-foreground/80">
                      {String(i + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
                    </span>
                    <span className="text-xs uppercase tracking-wider-sm text-foreground/70">{p.location} · {p.year}</span>
                  </div>
                  <div className="max-w-xl">
                    <h3 className="font-display text-foreground" style={{ fontSize: "clamp(2.5rem, 6vw, 6rem)", lineHeight: 0.95 }}>
                      {p.name}
                    </h3>
                    <p className="mt-4 text-base text-foreground/80">{p.desc}</p>
                    <a href="#contact" className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-mint">
                      View case <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
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
          <span className="text-xs uppercase tracking-wider-sm text-mint">Portfolio</span>
          <h2 className="mt-3 font-display text-foreground" style={{ fontSize: "clamp(2.25rem, 5vw, 4.5rem)", lineHeight: 1 }}>
            A grid of <span className="italic text-foreground/70">quiet weight</span>
          </h2>
        </div>
        <p className="max-w-md text-sm text-foreground/75">
          Thirty stories of stone, glass, and light. Hover to reveal the world behind each frame.
        </p>
      </div>

      <div className="mx-auto grid max-w-[1800px] grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-6">
        {Array.from({ length: 30 }).map((_, i) => {
          const item = gallery[i % gallery.length];
          return (
            <a
              key={i}
              href="#"
              className="group relative aspect-square overflow-hidden rounded-xl reveal"
              style={{ transitionDelay: `${(i % 6) * 60}ms` }}
            >
              <img src={item.src} alt={item.title} width={800} height={800} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div
                className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{ background: "var(--gradient-hover)" }}
              />
              <div className="absolute inset-0 flex translate-y-3 flex-col justify-end p-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <span className="text-[10px] uppercase tracking-wider-sm text-mint">{item.tag}</span>
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
      <div className="mx-auto grid max-w-[1600px] gap-10 md:grid-cols-2 md:gap-16">
        <div className="reveal relative overflow-hidden rounded-3xl">
          <img src={contactImg} alt="Inside the studio" width={1280} height={1600} loading="lazy" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-deep/70 to-transparent" />
          <div className="absolute bottom-0 left-0 p-10">
            <span className="text-xs uppercase tracking-wider-sm text-mint">Visit the Studio</span>
            <h3 className="mt-2 font-display text-3xl text-foreground">Rue du Rhône 14, Genève</h3>
          </div>
        </div>

        <div className="reveal flex flex-col justify-center">
          <span className="text-xs uppercase tracking-wider-sm text-mint">Contact Us</span>
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
              <textarea rows={4} placeholder="Tell us about the place." className="rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-foreground/40 focus:border-mint focus:outline-none" />
            </label>
            <button type="submit" className="group mt-2 inline-flex w-fit items-center gap-2 rounded-full bg-mint px-6 py-3 text-sm font-medium text-mint-foreground transition hover:gap-3">
              Send message
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
            </button>
          </form>
        </div>
      </div>

      <footer className="mx-auto mt-24 flex max-w-[1600px] flex-col items-start justify-between gap-4 border-t border-border pt-8 text-xs uppercase tracking-wider-sm text-foreground/60 md:flex-row md:items-center">
        <span>© {new Date().getFullYear()} Monolith Collective</span>
        <span>Geneva · Zurich · Milan</span>
      </footer>
    </section>
  );
}

function Field({ label, ...rest }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="flex flex-col gap-2 text-xs uppercase tracking-wider-sm text-foreground/70">
      {label}
      <input {...rest} className="rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-foreground/40 focus:border-mint focus:outline-none" />
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
      <Header />
      <Hero />
      <Intro />
      <CurrentProjects />
      <Portfolio />
      <Contact />
    </main>
  );
}
