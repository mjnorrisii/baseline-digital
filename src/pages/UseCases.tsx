import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Inbox, MessageSquare, CreditCard, Activity, Plug, CheckCircle2 } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { fadeUp, containerReveal, itemReveal } from "@/lib/animations";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import AppBreadcrumbs from "@/components/AppBreadcrumbs";

const cases = [
  {
    icon: Inbox,
    title: "Lead intake and qualification",
    desc: "All inbound leads are captured, scored, and routed automatically. Unqualified leads are filtered before they reach your team.",
    outcomes: ["Zero leads lost", "Faster response times", "Staff focused on high-value prospects"],
  },
  {
    icon: MessageSquare,
    title: "AI-assisted conversation handling",
    desc: "Structured conversation flows handle initial prospect engagement, gather requirements, and schedule appointments without human intervention.",
    outcomes: ["24/7 response capability", "Consistent messaging", "Reduced staff load"],
  },
  {
    icon: CreditCard,
    title: "Payment-gated service workflows",
    desc: "Service delivery begins only after payment confirms. No more chasing invoices or starting work before contracts close.",
    outcomes: ["Guaranteed payment before work", "Automated onboarding", "Clear delivery triggers"],
  },
  {
    icon: Activity,
    title: "Operational monitoring and alerts",
    desc: "Every workflow is monitored. When something stalls, breaks, or deviates from expected behavior, you are notified immediately.",
    outcomes: ["Real-time visibility", "Faster issue resolution", "Reduced downtime"],
  },
  {
    icon: Plug,
    title: "Custom integrations",
    desc: "We connect your existing tools — CRMs, payment processors, calendars, communication platforms — into a unified operational system.",
    outcomes: ["Single source of truth", "Eliminated manual data entry", "Cross-platform automation"],
  },
];

const UseCases = () => (
  <div className="min-h-screen pt-32 pb-32">
    <BreadcrumbSchema
      items={[
        { name: "Home", item: "/" },
        { name: "Use Cases", item: "/use-cases" },
      ]}
    />
    <AppBreadcrumbs
      items={[
        { name: "Home", path: "/" },
        { name: "Use Cases" },
      ]}
    />
    <section className="container">
      <SectionHeading
        label="Capabilities"
        title="Where automation replaces manual work"
        description="We solve specific operational bottlenecks. Each implementation is a hardened piece of infrastructure designed for your business."
      />

      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={containerReveal}
        className="mt-20 space-y-8"
      >
        {cases.map((c, i) => (
          <motion.div
            key={c.title}
            variants={itemReveal}
            className="group relative rounded-3xl glass-card p-10 md:p-12 hover:border-primary/30 transition-all hover:bg-white/[0.05] overflow-hidden"
          >
            <div className="absolute top-0 right-0 h-64 w-64 bg-primary/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none group-hover:bg-primary/10 transition-colors" />

            <div className="flex flex-col md:flex-row items-start gap-10 relative z-10">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-xl shadow-primary/20">
                <c.icon size={32} />
              </div>
              <div className="flex-1">
                <h3 className="font-heading text-3xl font-bold mb-4">{c.title}</h3>
                <p className="max-w-3xl text-lg leading-relaxed text-muted-foreground">{c.desc}</p>
                <div className="mt-8 flex flex-wrap gap-4">
                  {c.outcomes.map((o) => (
                    <div key={o} className="flex items-center gap-2 rounded-full border border-white/5 bg-white/5 px-4 py-2 text-sm font-medium text-foreground ring-1 ring-white/5">
                      <CheckCircle2 size={14} className="text-primary" />
                      {o}
                    </div>
                  ))}
                </div>
              </div>
              <div className="hidden lg:flex items-center justify-center self-center opacity-0 group-hover:opacity-100 transition-opacity translate-x-4 group-hover:translate-x-0 transition-transform">
                <div className="h-12 w-12 rounded-full border border-primary/30 flex items-center justify-center text-primary">
                  <ArrowRight size={24} />
                </div>
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
        className="mt-24 text-center"
      >
        <Link
          to="/book"
          className="btn-premium group inline-flex items-center gap-3 rounded-full px-12 py-6 text-xl font-bold text-primary-foreground shadow-22xl transition-all hover:scale-105"
        >
          Book Strategy Call
          <ArrowRight size={24} className="transition-transform group-hover:translate-x-1" />
        </Link>
      </motion.div>
    </section>
  </div>
);

export default UseCases;
