import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Search, PenTool, Wrench, BarChart3 } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const phases = [
  {
    icon: Search,
    num: "01",
    title: "Audit",
    duration: "Week 1",
    desc: "We map your current operations end to end. Every lead source, handoff, manual step, and failure point is documented. You get a clear picture of where revenue and time are being lost.",
    deliverables: ["Operational flow map", "Bottleneck analysis", "Priority matrix"],
  },
  {
    icon: PenTool,
    num: "02",
    title: "Architecture",
    duration: "Week 2-3",
    desc: "We design the target system architecture. Every workflow is specified: triggers, conditions, actions, error handling, and monitoring. Nothing is ambiguous.",
    deliverables: ["System architecture document", "Workflow specifications", "Integration plan"],
  },
  {
    icon: Wrench,
    num: "03",
    title: "Implementation",
    duration: "Week 3-6",
    desc: "We build and deploy the system in stages. Each workflow is tested against real scenarios before going live. Your team is trained on the new processes.",
    deliverables: ["Deployed workflows", "Testing documentation", "Team training"],
  },
  {
    icon: BarChart3,
    num: "04",
    title: "Monitoring",
    duration: "Ongoing",
    desc: "Every system includes monitoring from day one. Dashboards track throughput, failure rates, and response times. Alerts notify you before problems become visible to clients.",
    deliverables: ["Performance dashboards", "Alert configuration", "Monthly reviews"],
  },
];

const Process = () => (
  <div className="min-h-screen pt-16">
    <section className="border-b border-border py-20">
      <div className="container">
        <SectionHeading
          label="Process"
          title="How we build your systems"
          description="Every engagement follows a structured process. No scope creep. No ambiguity. Clear deliverables at each stage."
        />
        <div className="space-y-6">
          {phases.map((phase, i) => (
            <motion.div
              key={phase.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="grid gap-6 rounded-lg border border-border bg-card p-8 md:grid-cols-[200px_1fr]"
            >
              <div>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-secondary">
                    <phase.icon size={18} className="text-primary" />
                  </div>
                  <span className="font-heading text-sm font-medium text-primary/50">{phase.num}</span>
                </div>
                <h3 className="mt-4 font-heading text-xl font-semibold">{phase.title}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{phase.duration}</p>
              </div>
              <div>
                <p className="text-sm leading-relaxed text-muted-foreground">{phase.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {phase.deliverables.map((d) => (
                    <span key={d} className="rounded-md border border-border bg-secondary px-3 py-1 text-xs text-secondary-foreground">
                      {d}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <Link
            to="/book"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Start With an Audit
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  </div>
);

export default Process;
