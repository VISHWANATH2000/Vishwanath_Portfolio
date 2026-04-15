import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  label: string;
  title: string;
  accent?: string;
  description?: string;
  className?: string;
};

export function SectionHeading({ label, title, accent, description, className }: SectionHeadingProps) {
  return (
    <div className={cn("max-w-3xl space-y-4", className)}>
      <Badge variant="secondary" className="w-fit">
        {label}
      </Badge>
      <div className="space-y-3">
        <h2 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
          {title} {accent ? <span className="gradient-text inline-block">{accent}</span> : null}
        </h2>
        {description ? <p className="max-w-2xl text-base leading-8 text-slate-300">{description}</p> : null}
      </div>
    </div>
  );
}
