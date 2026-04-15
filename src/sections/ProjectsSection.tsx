import { projects } from "@/data/portfolio";
import { ProjectGallery } from "@/components/project-gallery";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

export function ProjectsSection() {
  return (
    <section id="projects" className="section-shell">
      <Reveal>
        <SectionHeading
          label="Projects"
          title="Selected work with"
          accent="real interfaces and real delivery"
          description="End-to-end projects spanning data pipelines, backend systems, and ML applications — each shipped with real interfaces and measurable outcomes."
        />
      </Reveal>

      <div className="mt-12 space-y-8">
        {projects.map((project, index) => (
          <Reveal key={project.title} delay={index * 0.06}>
            <ProjectGallery project={project} reverse={index % 2 === 1} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
