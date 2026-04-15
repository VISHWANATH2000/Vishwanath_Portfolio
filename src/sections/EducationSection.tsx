import { ExternalLink, GraduationCap } from "lucide-react";

import { certifications, education } from "@/data/portfolio";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { DetailBox } from "@/components/detail-box";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

export function EducationSection() {
  return (
    <section id="education" className="section-shell">
      <Reveal>
        <SectionHeading
          label="Education"
          title="Academic background and"
          accent="certifications"
          description="A strong academic base in computer science and applications, backed by industry certifications in cloud and data platforms."
        />
      </Reveal>

      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        {education.map((item, index) => (
          <Reveal key={item.degree} delay={index * 0.05}>
            <Card className="h-full p-8">
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-3">
                  <Badge variant="secondary" className="w-fit">
                    {item.duration}
                  </Badge>
                  <h3 className="font-display text-2xl font-semibold text-slate-100">{item.degree}</h3>
                  <p className="text-base text-slate-400">{item.institution}</p>
                </div>
                <div className="rounded-full border border-rose-900/10 bg-slate-900/5 p-3 text-rose-400">
                  <GraduationCap className="size-5" />
                </div>
              </div>
              <div className="mt-6">
                <DetailBox label="CGPA">
                  <p className="text-2xl font-semibold text-slate-100">{item.cgpa}</p>
                </DetailBox>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {item.courses.map((course) => (
                  <Badge key={course} variant="secondary" className="text-[11px] tracking-[0.12em]">
                    {course}
                  </Badge>
                ))}
              </div>
            </Card>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-8">
        <Card className="p-8">
          <div className="flex items-center gap-3">
            <div className="rounded-full border border-rose-900/10 bg-slate-900/5 p-3 text-rose-400">
              <ExternalLink className="size-5" />
            </div>
            <div>
              <h3 className="font-display text-2xl font-semibold text-slate-100">Certifications</h3>
              <p className="text-sm text-slate-400">Industry credentials in cloud and data platforms.</p>
            </div>
          </div>
          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            {certifications.map((item) => (
              <a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="glass-panel block p-5 transition-all hover:-translate-y-1"
              >
                <p className="font-display text-lg font-semibold text-slate-100">{item.title}</p>
                <p className="mt-2 text-sm leading-7 text-slate-400">{item.issuer}</p>
              </a>
            ))}
          </div>
        </Card>
      </Reveal>
    </section>
  );
}
