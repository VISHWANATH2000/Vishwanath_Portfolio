import { useState } from "react";

import { journeyFocusAreas, journeyMilestones, journeyStats } from "@/data/portfolio";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { DetailBox } from "@/components/detail-box";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

const milestonesById = Object.fromEntries(journeyMilestones.map((item) => [item.id, item])) as Record<
  (typeof journeyMilestones)[number]["id"],
  (typeof journeyMilestones)[number]
>;

export function JourneySection() {
  const [activeMilestoneId, setActiveMilestoneId] = useState(
    journeyMilestones[journeyMilestones.length - 1]?.id ?? "bsc",
  );
  const activeMilestone = milestonesById[activeMilestoneId as keyof typeof milestonesById] ?? journeyMilestones[0];

  return (
    <section id="journey" className="section-shell">
      <Reveal>
        <SectionHeading
          label="Journey"
          title="An interactive timeline of"
          accent="growth and momentum"
          description="From academic foundations to professional delivery — select a milestone to explore the story behind each stage of the journey."
        />
      </Reveal>

      <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:items-start">
        <Reveal>
          <Card className="p-8">
            <ul role="listbox" aria-label="Journey milestones" className="list-none space-y-4">
              {journeyMilestones.map((item) => (
                <li key={item.id} role="option" aria-selected={activeMilestoneId === item.id}>
                  <button
                    type="button"
                    onClick={() => setActiveMilestoneId(item.id)}
                    aria-label={`${item.title}, ${item.year}`}
                    className={`w-full rounded-[24px] border px-4 py-4 text-left transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500/90 focus-visible:ring-offset-2 focus-visible:ring-offset-black ${
                      activeMilestoneId === item.id
                        ? "border-rose-500/30 bg-rose-500/10 shadow-lg shadow-rose-500/10"
                        : "border-rose-900/10 bg-slate-900/5 hover:bg-slate-900/5"
                    }`}
                  >
                    <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-slate-400">{item.year}</p>
                    <p className="mt-2 font-display text-lg font-semibold text-slate-100">{item.title}</p>
                    <p className="mt-1 text-sm text-slate-400">{item.subtitle}</p>
                  </button>
                </li>
              ))}
            </ul>
          </Card>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="space-y-6">
            <Card className="p-8">
              <Badge variant="secondary" className="w-fit">
                {activeMilestone.eyebrow}
              </Badge>
              <div className="mt-6 space-y-6">
                <p className="font-mono text-xs uppercase tracking-[0.28em] text-rose-500">{activeMilestone.year}</p>
                <h3 className="font-display text-3xl font-semibold text-slate-100">{activeMilestone.title}</h3>
                <p className="text-lg text-slate-300">{activeMilestone.subtitle}</p>
                <p className="text-base leading-8 text-slate-400">{activeMilestone.description}</p>
                <DetailBox label="Detail">
                  <p className="text-sm leading-7 text-slate-300">{activeMilestone.detail}</p>
                </DetailBox>
              </div>
            </Card>

            <div className="grid gap-6 sm:grid-cols-2">
              {journeyStats.map((item) => (
                <Card key={item.label} className="p-8">
                  <p className="font-display text-3xl font-semibold text-slate-100">{item.value}</p>
                  <p className="mt-3 font-mono text-xs uppercase tracking-[0.24em] text-slate-400">{item.label}</p>
                </Card>
              ))}
            </div>

            <Card className="p-8">
              <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-rose-500">Growing Focus Areas</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {journeyFocusAreas.map((area) => (
                  <Badge key={area} variant="secondary" className="text-[11px] tracking-[0.14em]">
                    {area}
                  </Badge>
                ))}
              </div>
            </Card>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
