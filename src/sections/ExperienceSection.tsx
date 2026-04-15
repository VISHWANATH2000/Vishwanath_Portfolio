import { BriefcaseBusiness, CheckCircle2 } from "lucide-react";

import { experience } from "@/data/portfolio";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

export function ExperienceSection() {
  return (
    <section id="experience" className="section-shell">
      <Reveal>
        <SectionHeading
          label="Experience"
          title="Professional work shaped by"
          accent="backend and data execution"
          description="Hands-on roles across data engineering and backend development — building pipelines, APIs, and systems used in production."
        />
      </Reveal>

      <div className="relative mt-12 space-y-8 before:absolute before:left-5 before:top-0 before:h-full before:w-px before:bg-white/10 sm:before:left-7">
        {experience.map((item, index) => (
          <Reveal key={item.role} delay={index * 0.08}>
            <div className="relative pl-14 sm:pl-20">
              <div className="absolute left-0 top-6 flex size-10 items-center justify-center rounded-full border border-rose-500/20 bg-rose-500/10 text-rose-400 sm:size-14">
                <BriefcaseBusiness className="size-4 sm:size-5" />
              </div>
              <Card className="p-8">
                <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                  <div className="space-y-3">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="font-display text-2xl font-semibold text-slate-100">{item.role}</h3>
                      <Badge variant="secondary">{item.badge}</Badge>
                    </div>
                    <p className="text-base text-slate-300">{item.company}</p>
                    <p className="font-mono text-xs uppercase tracking-[0.24em] text-slate-400">{item.date}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-[10px] tracking-[0.16em]">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
                <ul className="mt-6 space-y-3">
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3 text-sm leading-7 text-slate-400">
                      <CheckCircle2 className="mt-1 size-4 shrink-0 text-rose-500" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
