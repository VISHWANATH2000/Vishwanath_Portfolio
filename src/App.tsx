import { startTransition, useEffect, useState } from "react";
import { useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowRight, BriefcaseBusiness, Code2, Download, Mail, Menu, Phone } from "lucide-react";

import { navItems, personal, roles, socialLinks } from "@/data/portfolio";
import { AnimeBackground } from "@/components/anime-background";
import { CustomCursor } from "@/components/custom-cursor";
import { MagneticButton } from "@/components/magnetic-button";
import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

import { HeroSection } from "@/sections/HeroSection";
import { AboutSection } from "@/sections/AboutSection";
import { SkillsSection } from "@/sections/SkillsSection";
import { ExperienceSection } from "@/sections/ExperienceSection";
import { JourneySection } from "@/sections/JourneySection";
import { ProjectsSection } from "@/sections/ProjectsSection";
import { EducationSection } from "@/sections/EducationSection";
import { ContactSection } from "@/sections/ContactSection";

const socialIconMap = {
  LinkedIn: BriefcaseBusiness,
  GitHub: Code2,
  Email: Mail,
  Phone: Phone,
} as const;

function App() {
  const { scrollY } = useScroll();
  const prefersReducedMotion = useReducedMotion();
  const smoothScrollY = useSpring(scrollY, { stiffness: 140, damping: 26, mass: 0.34 });
  const motionSource = prefersReducedMotion ? scrollY : smoothScrollY;

  const heroBeamX = useTransform(motionSource, [0, 900], [0, prefersReducedMotion ? 0 : 54]);
  const heroBeamSecondaryX = useTransform(motionSource, [0, 900], [0, prefersReducedMotion ? 0 : -42]);
  const heroBeamOpacity = useTransform(motionSource, [0, 600], [0.42, prefersReducedMotion ? 0.42 : 0.76]);

  const [activeSection, setActiveSection] = useState("hero");
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      startTransition(() => {
        setRoleIndex((current) => (current + 1) % roles.length);
      });
    }, 2800);
    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    const sectionIds = navItems.map((item) => item.href.replace("#", ""));
    const observers: IntersectionObserver[] = [];
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
      );
      observer.observe(el);
      observers.push(observer);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <div className="relative overflow-hidden">
      <div className="grain-overlay" />
      <AnimeBackground />
      <CustomCursor />

      <header className="fixed inset-x-0 top-0 z-40 border-b border-red-500/20 backdrop-blur-xl" style={{ background: "hsla(0,0%,4%,0.82)" }}>
        <div className="mx-auto flex h-20 w-full max-w-[1280px] items-center justify-between px-4 sm:px-6 lg:px-8">
          <a href="#hero" className="font-display text-lg font-semibold tracking-[0.22em] text-slate-100">
            <span className="text-rose-500">[</span> VR <span className="text-rose-500">]</span>
          </a>

          <nav className="hidden items-center gap-7 lg:flex">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace("#", "");
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`font-mono text-xs uppercase tracking-[0.2em] transition-colors ${
                    isActive ? "text-rose-400" : "text-slate-400 hover:text-rose-400"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <MagneticButton>
              <Button asChild variant="secondary">
                <a href={personal.resumeUrl} download>
                  <Download />
                  Resume
                </a>
              </Button>
            </MagneticButton>
          </div>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="secondary" size="sm" className="lg:hidden">
                <Menu />
                Menu
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[min(90vw,20rem)] overflow-y-auto">
              <SheetHeader className="space-y-2 pr-8">
                <SheetTitle>Navigate</SheetTitle>
                <SheetDescription>Jump through the portfolio sections or download the resume.</SheetDescription>
              </SheetHeader>
              <div className="mt-8 flex flex-col gap-3">
                {navItems.map((item) => (
                  <SheetClose asChild key={item.href}>
                    <a
                      href={item.href}
                      className="rounded-2xl border border-rose-900/10 px-4 py-3 font-mono text-sm uppercase tracking-[0.2em] text-slate-300 transition-colors hover:bg-white/[0.04]"
                    >
                      {item.label}
                    </a>
                  </SheetClose>
                ))}
                <SheetClose asChild>
                  <a
                    href={personal.resumeUrl}
                    download
                    className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 font-semibold text-slate-950"
                  >
                    <Download className="size-4" />
                    Download Resume
                  </a>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <main className="relative z-10 mx-auto w-full max-w-[1280px] px-4 pb-20 pt-28 sm:px-6 sm:pt-32 lg:px-8">
        <HeroSection
          heroBeamX={heroBeamX}
          heroBeamSecondaryX={heroBeamSecondaryX}
          heroBeamOpacity={heroBeamOpacity}
          roleIndex={roleIndex}
        />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <JourneySection />
        <ProjectsSection />
        <EducationSection />
        <ContactSection />
      </main>

      <footer className="border-t border-rose-900/10 py-10">
        <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-display font-semibold text-slate-100">{personal.name}</p>
              <p className="mt-1 text-sm text-slate-400">{personal.footerBlurb}</p>
              <p className="mt-2 text-xs text-slate-500">© {new Date().getFullYear()} — Built with React, Tailwind CSS & Vite</p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              {socialLinks.map((link) => {
                const Icon = socialIconMap[link.label as keyof typeof socialIconMap];
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    aria-label={link.label}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="flex items-center gap-2 rounded-full border border-rose-900/10 px-4 py-2 text-sm text-slate-400 transition-colors hover:border-rose-500/30 hover:text-rose-400"
                  >
                    <Icon className="size-4" />
                    {link.label}
                  </a>
                );
              })}
              <a
                href="#hero"
                aria-label="Back to top"
                className="flex items-center gap-2 rounded-full border border-rose-900/10 px-4 py-2 text-sm text-slate-400 transition-colors hover:border-rose-500/30 hover:text-rose-400"
              >
                <ArrowRight className="size-4 -rotate-90" />
                Top
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
