import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { skillGroups, techCloud } from "@/data/portfolio";

function SkillDial({ name, level }: { name: string; level: number }) {
  return (
    <div className="glass-panel card-hover flex h-full flex-col items-center gap-5 p-6 text-center">
      <div
        className="flex size-28 items-center justify-center rounded-full p-[1px]"
        style={{
          background: `conic-gradient(rgb(255 62 62) ${level * 3.6}deg, rgba(255,255,255,0.12) 0deg)`,
        }}
      >
        <div className="flex size-full items-center justify-center rounded-full bg-slate-100/90">
          <div>
            <div className="font-display text-2xl font-semibold text-slate-900">{level}%</div>
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-slate-400">Focus</div>
          </div>
        </div>
      </div>
      <div>
        <h3 className="font-display text-lg font-semibold text-slate-100">{name}</h3>
      </div>
    </div>
  );
}

export function SkillsSection() {
  return (
    <section id="skills" className="section-shell">
      <Reveal>
        <SectionHeading
          label="Skills"
          title="Tools, languages, and"
          accent="delivery strengths"
          description="A cross-stack skill set spanning data engineering, backend development, web fundamentals, and applied AI — built through real project delivery."
        />
      </Reveal>

      <Reveal className="mt-12">
        <Tabs defaultValue={skillGroups[0].id}>
          <TabsList aria-label="Skill categories">
            {skillGroups.map((group) => (
              <TabsTrigger key={group.id} value={group.id}>
                {group.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {skillGroups.map((group) => (
            <TabsContent key={group.id} value={group.id}>
              <div className="mb-6 max-w-2xl">
                <p className="text-base leading-8 text-slate-400">{group.description}</p>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {group.skills.map((skill) => (
                  <SkillDial key={skill.name} name={skill.name} level={skill.level} />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </Reveal>

      <Reveal className="mt-8">
        <Card className="p-8">
          <div className="flex flex-wrap gap-2">
            {techCloud.map((item) => (
              <Badge key={item} variant="secondary" className="text-[11px] tracking-[0.14em]">
                {item}
              </Badge>
            ))}
          </div>
        </Card>
      </Reveal>
    </section>
  );
}
