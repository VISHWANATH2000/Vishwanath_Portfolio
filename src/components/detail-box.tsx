import type { ReactNode } from "react";

export function DetailBox({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="rounded-[24px] border border-rose-900/10 bg-white/[0.04] p-5">
      <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-rose-400">{label}</p>
      <div className="mt-3">{children}</div>
    </div>
  );
}
