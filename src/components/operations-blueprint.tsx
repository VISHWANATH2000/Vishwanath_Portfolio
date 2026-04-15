import { motion } from "framer-motion";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const deliveryBlueprint = [
  {
    label: "Ingest",
    detail: "Operational sources, ETL / ELT pipelines, and dependable source sync.",
    score: 92,
    gradient: "linear-gradient(90deg, rgba(255,58,58,0.95), rgba(255,135,135,0.34))",
  },
  {
    label: "Model",
    detail: "ODS layers, marts, and schemas designed for trustworthy downstream use.",
    score: 88,
    gradient: "linear-gradient(90deg, rgba(255,255,255,0.94), rgba(255,58,58,0.24))",
  },
  {
    label: "Serve",
    detail: "Reporting, APIs, and backend services that keep data usable in products.",
    score: 84,
    gradient: "linear-gradient(90deg, rgba(255,142,142,0.94), rgba(255,58,58,0.28))",
  },
] as const;

const operatingSignals = [
  { label: "Location", value: "Bangalore, Karnataka, India" },
  { label: "Open To", value: "Data, backend, and analytics roles" },
  { label: "Delivery", value: "SQL, Python, Java, Spring Boot" },
  { label: "Strength", value: "Data marts, ODS, reporting systems" },
] as const;

export function OperationsBlueprint() {
  return (
    <Card className="relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at top left, rgba(255,58,58,0.16), transparent 34%), linear-gradient(180deg, rgba(255,255,255,0.03), transparent)",
        }}
      />
      <CardHeader className="relative space-y-4">
        <Badge variant="secondary" className="w-fit">
          Operations Blueprint
        </Badge>
        <div className="space-y-2">
          <CardTitle>From raw source data to trusted business insight</CardTitle>
          <CardDescription>
            Every stage is designed for reliability — clean ingestion, structured modeling, and fast delivery to reporting and product teams.
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="relative space-y-6">
        <div className="space-y-4">
          {deliveryBlueprint.map((stage, index) => (
            <motion.div
              key={stage.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: index * 0.08 }}
            >
              <div className="rounded-[24px] border border-rose-900/10 bg-white/[0.04] p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.26em] text-rose-400">{stage.label}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-400">{stage.detail}</p>
                  </div>
                  <span className="font-display text-xl font-semibold text-slate-100">{stage.score}%</span>
                </div>
                <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/5">
                  <motion.div
                    className="h-full rounded-full"
                    initial={{ scaleX: 0.24, opacity: 0.6 }}
                    whileInView={{ scaleX: 1, opacity: 1 }}
                    viewport={{ once: true, amount: 0.8 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.12 + index * 0.1 }}
                    style={{ width: `${stage.score}%`, originX: 0, background: stage.gradient }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {operatingSignals.map((signal, index) => (
            <motion.div
              key={signal.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.4, delay: 0.1 + index * 0.06 }}
              className="rounded-[22px] border border-rose-900/10 bg-white/[0.04] p-5"
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-rose-400">{signal.label}</p>
              <p className="mt-3 text-sm leading-6 text-slate-300">{signal.value}</p>
            </motion.div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
