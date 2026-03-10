import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Search, PenTool, Wrench, BarChart3, Clock, Check } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { fadeUp, containerReveal, itemReveal } from "@/lib/animations";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import AppBreadcrumbs from "@/components/AppBreadcrumbs";

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
  <div className="min-h-screen pt-32 pb-32">
    <BreadcrumbSchema
      items={[
        { name: "Home", item: "/" },
        { name: "Process", item: "/process" },
      ]}
    />
    <AppBreadcrumbs
      items={[
        { name: "Home", path: "/" },
        { name: "Process" },
      ]}
    />
    <section className="container">
      <SectionHeading
        label="Execution"
        title="Predictable stages, clear results"
        description="Every engagement follows a structured process. Minimal friction, maximal transparency, and clear deliverables at each stage."
      />

      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={containerReveal}
        className="mt-20 space-y-12"
      >
        {phases.map((phase, i) => (
          <motion.div
            key={phase.num}
            variants={itemReveal}
            className="group relative grid gap-12 rounded-[2.5rem] glass-card p-12 md:grid-cols-[320px_1fr] hover:border-primary/30 transition-all hover:bg-white/[0.03]"
          >
            <div className="flex flex-col">
              <div className="flex items-center gap-4 mb-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg shadow-primary/20">
                  <phase.icon size={24} />
                </div>
                <div className="font-heading text-4xl font-black text-white/5 group-hover:text-primary/10 transition-colors">
                  {phase.num}
                </div>
              </div>
              <h3 className="mt-4 font-heading text-3xl font-bold">{phase.title}</h3>
              <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/5 bg-white/5 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary">
                <Clock size={12} />
                {phase.duration}
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <p className="text-xl leading-relaxed text-muted-foreground mb-10">{phase.desc}</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {phase.deliverables.map((d) => (
                  <div key={d} className="flex items-center gap-3">
                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center text-primary ring-1 ring-primary/20">
                      <Check size={14} />
                    </div>
                    <span className="text-sm font-semibold text-foreground/80">{d}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeUp}
        className="mt-24 text-center glass-card rounded-3xl p-20 bg-primary/5 border-none ring-1 ring-white/5"
      >
        <h2 className="font-heading text-4xl font-bold mb-8">Ready to blueprint your automation?</h2>
        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
          The first step is always an audit. We map your operations and identify the biggest revenue leaks.
        </p>
        <Link
          to="/book"
          className="btn-premium group inline-flex items-center gap-4 rounded-full px-12 py-6 text-xl font-bold text-primary-foreground shadow-2xl transition-all hover:scale-105"
        >
          Start With an Audit
          <ArrowRight size={26} className="transition-transform group-hover:translate-x-1" />
        </Link>
      </motion.div>
    </section>
  </div>
);

export default Process;
