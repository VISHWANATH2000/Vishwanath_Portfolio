import type { MotionValue } from "framer-motion";
import { motion } from "framer-motion";
import { ArrowRight, BriefcaseBusiness, Code2, Mail, Phone, Sparkles } from "lucide-react";

import { expertiseTags, heroSignals, heroStats, personal, roles, socialLinks } from "@/data/portfolio";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MagneticButton } from "@/components/magnetic-button";
import { Reveal } from "@/components/reveal";
import { OperationsBlueprint } from "@/components/operations-blueprint";

const socialIconMap = {
  LinkedIn: BriefcaseBusiness,
  GitHub: Code2,
  Email: Mail,
  Phone: Phone,
} as const;

type HeroSectionProps = {
  heroBeamX: MotionValue<number>;
  heroBeamSecondaryX: MotionValue<number>;
  heroBeamOpacity: MotionValue<number>;
  roleIndex: number;
};

export function HeroSection({ heroBeamX, heroBeamSecondaryX, heroBeamOpacity, roleIndex }: HeroSectionProps) {
  return (
    <section id="hero" className="section-shell section-shell--hero !pt-6">
      <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
        <Reveal className="min-w-0">
          <div className="min-w-0">
            <div className="glass-panel hero-panel relative mx-auto w-full max-w-[calc(100vw-3rem)] min-w-0 overflow-hidden p-8 sm:max-w-none">
              <div className="hero-panel__grid" />
              <div className="hero-panel__field" />
              <motion.div aria-hidden="true" className="hero-panel__beam" style={{ x: heroBeamX, opacity: heroBeamOpacity }} />
              <motion.div aria-hidden="true" className="hero-panel__beam hero-panel__beam--secondary" style={{ x: heroBeamSecondaryX, opacity: heroBeamOpacity }} />
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/[0.16] via-transparent to-white/[0.07]" />
              <div className="relative space-y-6">
                <div className="space-y-6">
                  <Badge>{personal.availability}</Badge>
                  <div className="space-y-5">
                    <motion.h1
                      initial={{ opacity: 0, y: 30, scale: 0.95, filter: "blur(4px)" }}
                      whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                      className="font-display max-w-[10ch] text-[clamp(1.9rem,8vw,5.6rem)] font-semibold leading-[0.96] tracking-tight text-slate-100 sm:max-w-none"
                    >
                      {personal.shortName}
                      <span className="gradient-text block">Reddy R</span>
                    </motion.h1>
                    <div className="flex flex-col items-start gap-2 text-slate-400 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3">
                      <span className="font-mono text-sm uppercase tracking-[0.28em] text-rose-500">Current Role</span>
                      <motion.div
                        key={roles[roleIndex]}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.35, ease: "easeOut" }}
                        className="font-display text-xl font-medium text-slate-200 sm:text-2xl"
                      >
                        {roles[roleIndex]}
                      </motion.div>
                    </div>
                    <p className="max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">{personal.description}</p>
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-3">
                  {heroSignals.map((signal, index) => (
                    <motion.div
                      key={signal.label}
                      className="glass-panel p-5"
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.4 }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-rose-400">{signal.label}</p>
                      <p className="mt-3 text-sm leading-7 text-slate-300">{signal.value}</p>
                    </motion.div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  <MagneticButton>
                    <Button asChild size="lg">
                      <a href="#projects">
                        View My Work
                        <ArrowRight />
                      </a>
                    </Button>
                  </MagneticButton>
                  <MagneticButton>
                    <Button asChild size="lg" variant="secondary">
                      <a href="#contact">Get In Touch</a>
                    </Button>
                  </MagneticButton>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  {socialLinks.map((link) => {
                    const Icon = socialIconMap[link.label as keyof typeof socialIconMap];
                    return (
                      <Button key={link.label} asChild variant="outline" size="sm">
                        <a href={link.href} target={link.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                          <Icon />
                          {link.label}
                        </a>
                      </Button>
                    );
                  })}
                </div>

                <div className="flex flex-wrap gap-2">
                  {expertiseTags.map((tag: string) => (
                    <Badge key={tag} variant="secondary" className="text-[11px] tracking-[0.16em]">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.12} className="min-w-0">
          <div className="min-w-0 space-y-6">
            <OperationsBlueprint />

            <div className="grid grid-cols-2 gap-6">
              {heroStats.map((item, index) => (
                <Reveal key={item.label} delay={0.08 + index * 0.05}>
                  <Card className="p-8">
                    <p className="font-display text-3xl font-semibold text-slate-100">{item.value}</p>
                    <p className="mt-3 font-mono text-xs uppercase tracking-[0.24em] text-slate-400">{item.label}</p>
                  </Card>
                </Reveal>
              ))}
            </div>

            <Card className="p-8">
              <div className="flex items-start gap-5">
                <div className="rounded-full border border-rose-500/20 bg-rose-500/10 p-3 text-rose-400">
                  <Sparkles className="size-5" />
                </div>
                <div>
                  <p className="font-display text-lg font-semibold text-slate-100">Ready to contribute quickly</p>
                  <p className="mt-2 text-sm leading-7 text-slate-400">
                    The focus stays on clean schemas, dependable pipelines, analytics delivery, and backend systems that teams can trust.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
