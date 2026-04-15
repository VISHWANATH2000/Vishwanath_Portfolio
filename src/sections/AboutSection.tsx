import { Code2, Database, Sparkles } from "lucide-react";

import { aboutParagraphs, capabilityCards, quickFacts } from "@/data/portfolio";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

const capabilityIcons = [Database, Code2, Sparkles] as const;

export function AboutSection() {
  return (
    <section id="about" className="section-shell">
      <Reveal>
        <SectionHeading
          label="About"
          title="Crafting data systems with"
          accent="clarity and precision"
          description="Associate Data Engineer at Infostats — designing marts, ODS layers, and ETL workflows that connect source systems to business insight."
        />
      </Reveal>

      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        <Reveal>
          <Card className="h-full p-8">
            <div className="space-y-6">
              {aboutParagraphs.map((paragraph) => (
                <p key={paragraph} className="text-base leading-8 text-slate-400">
                  {paragraph}
                </p>
              ))}
              <Separator />
              <div className="flex flex-wrap gap-2">
                {quickFacts.map((fact) => (
                  <Badge key={fact} variant="secondary" className="text-[11px] tracking-[0.12em]">
                    {fact}
                  </Badge>
                ))}
              </div>
            </div>
          </Card>
        </Reveal>

        <div className="grid gap-6">
          {capabilityCards.map((card, index) => {
            const Icon = capabilityIcons[index] ?? Sparkles;
            return (
              <Reveal key={card.title} delay={index * 0.06}>
                <Card className="h-full p-8">
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-3">
                      <h3 className="font-display text-xl font-semibold text-slate-100">{card.title}</h3>
                      <p className="text-sm leading-7 text-slate-400">{card.description}</p>
                    </div>
                    <div className="rounded-full border border-rose-900/10 bg-slate-900/5 p-3 text-rose-400">
                      <Icon className="size-5" />
                    </div>
                  </div>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
