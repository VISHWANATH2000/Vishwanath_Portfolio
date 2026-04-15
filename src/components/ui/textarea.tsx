import * as React from "react";

import { cn } from "@/lib/utils";

const Textarea = React.forwardRef<HTMLTextAreaElement, React.ComponentProps<"textarea">>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={cn(
          "flex min-h-[160px] w-full rounded-[24px] border border-white/12 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none ring-offset-background placeholder:text-slate-500 transition-colors focus:border-red-400/45 focus:ring-2 focus:ring-red-500/20 disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
        {...props}
      />
    );
  },
);
Textarea.displayName = "Textarea";

export { Textarea };
