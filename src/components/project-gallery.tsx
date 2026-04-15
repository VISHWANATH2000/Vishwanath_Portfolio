import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Code2 } from "lucide-react";

import type { Project } from "@/data/portfolio";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type ProjectGalleryProps = {
  project: Project;
  reverse?: boolean;
};

export function ProjectGallery({ project, reverse = false }: ProjectGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeImage = project.images[activeIndex];

  return (
    <Card className="grid overflow-hidden border-white/12 bg-white/[0.04] lg:grid-cols-2">
      <div className={cn("relative p-4 sm:p-5", reverse && "lg:order-2")}>
        <div className="absolute inset-0 bg-gradient-to-br from-red-500/12 via-transparent to-white/5" />
        <div className="relative space-y-4">
          <div className="overflow-hidden rounded-[24px] border border-white/10 bg-slate-950/70">
            <motion.img
              key={activeImage.src}
              src={activeImage.src}
              alt={activeImage.alt}
              className="aspect-[16/10] w-full object-cover"
              initial={{ opacity: 0.45, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
            />
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {project.images.map((image, index) => (
              <button
                key={image.src}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`View screenshot: ${image.alt}`}
                className={cn(
                  "overflow-hidden rounded-2xl border transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500/80",
                  activeIndex === index
                    ? "border-red-300/60 shadow-lg shadow-red-500/20"
                    : "border-white/10 opacity-75 hover:opacity-100",
                )}
              >
                <img src={image.src} alt={image.alt} loading="lazy" className="aspect-[4/3] w-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      </div>

      <CardContent className={cn("flex flex-col justify-between gap-8 p-6 sm:p-8", reverse && "lg:order-1")}>
        <div className="space-y-5">
          <div className="space-y-3">
            <Badge variant="secondary" className="w-fit">
              {project.category}
            </Badge>
            <div className="space-y-3">
              <h3 className="font-display text-2xl font-semibold text-white sm:text-3xl">{project.title}</h3>
              <p className="text-base leading-8 text-slate-300/84">{project.description}</p>
            </div>
          </div>

          <div className="rounded-[24px] border border-white/10 bg-slate-950/35 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-red-200/90">Highlight</p>
            <p className="mt-3 text-sm leading-7 text-slate-200/88">{project.outcome}</p>
          </div>

          <div className="flex flex-wrap gap-2">
            {project.tech.map((item) => (
              <Badge key={item} variant="secondary" className="text-[11px] tracking-[0.12em]">
                {item}
              </Badge>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          {project.links.map((link) => (
            <Button key={link.href} asChild variant={link.kind === "demo" ? "default" : "secondary"}>
              <a href={link.href} target="_blank" rel="noreferrer">
                {link.kind === "demo" ? <ArrowUpRight /> : <Code2 />}
                {link.label}
              </a>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
