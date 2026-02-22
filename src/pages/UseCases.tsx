import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Inbox, MessageSquare, CreditCard, Activity, Plug } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

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
  <div className="min-h-screen pt-16">
    <section className="border-b border-border py-20">
      <div className="container">
        <SectionHeading
          label="Use cases"
          title="Where automation replaces manual work"
          description="Each use case represents a category of operational problems we solve. The implementation is tailored to your specific business."
        />
        <div className="space-y-4">
          {cases.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="rounded-lg border border-border bg-card p-8"
            >
              <div className="flex items-start gap-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-secondary">
                  <c.icon size={18} className="text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-heading text-lg font-semibold">{c.title}</h3>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    {c.outcomes.map((o) => (
                      <span key={o} className="rounded-md bg-secondary px-3 py-1 text-xs text-secondary-foreground">
                        {o}
                      </span>
                    ))}
                  </div>
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
            Book Strategy Call
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  </div>
);

export default UseCases;
