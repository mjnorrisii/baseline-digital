import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, AlertTriangle, Zap, Eye, ShieldCheck } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5 },
};

const problems = [
  { title: "Missed follow-ups", desc: "Leads go cold because no one follows up within the window that matters." },
  { title: "Leads slipping through", desc: "Inquiries arrive across channels and disappear into inboxes no one checks." },
  { title: "Manual data copying", desc: "Staff transfer information between tools by hand, introducing errors and delay." },
  { title: "Staff bottlenecks", desc: "Key processes stop when a specific person is unavailable." },
  { title: "Delivery delays", desc: "Service fulfillment stalls because handoffs between steps are manual." },
];

const solutions = [
  { icon: Zap, title: "Deterministic workflows", desc: "Every lead, payment, and delivery step follows a defined path with no ambiguity." },
  { icon: ShieldCheck, title: "State-based automation", desc: "Systems track where each item is and trigger the correct next action automatically." },
  { icon: ArrowRight, title: "Payment-triggered actions", desc: "Service delivery begins the moment payment clears. No manual activation required." },
  { icon: Eye, title: "Monitoring and alerts", desc: "Real-time visibility into every workflow. Failures surface immediately, not days later." },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="surface-grid relative flex min-h-[90vh] items-center border-b border-border">
        <div className="container relative z-10 py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <p className="mb-4 text-xs font-medium uppercase tracking-widest text-primary">
              Operations Automation
            </p>
            <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight md:text-6xl">
              Replace manual work with systems that run without you
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              We build the operational infrastructure that captures leads, qualifies them, triggers payment, and delivers your service — automatically. No more lost revenue from broken processes.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/book"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Book Strategy Call
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/process"
                className="inline-flex items-center gap-2 rounded-md border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
              >
                See Process
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Qualification */}
      <section className="border-b border-border py-20">
        <div className="container">
          <SectionHeading
            label="Who this is for"
            title="Built for businesses with real operational volume"
          />
          <div className="grid gap-6 md:grid-cols-2">
            <motion.div {...fadeUp} className="rounded-lg border border-border bg-card p-8">
              <p className="mb-4 font-heading text-sm font-semibold uppercase tracking-wider text-primary">
                This is for you if
              </p>
              <ul className="space-y-3 text-sm text-foreground">
                <li className="flex gap-3"><span className="mt-0.5 text-primary">--</span> You run a service business generating consistent revenue</li>
                <li className="flex gap-3"><span className="mt-0.5 text-primary">--</span> You have staff handling repetitive administrative tasks</li>
                <li className="flex gap-3"><span className="mt-0.5 text-primary">--</span> You lose leads or revenue due to process gaps</li>
                <li className="flex gap-3"><span className="mt-0.5 text-primary">--</span> You need systems that work without constant oversight</li>
              </ul>
            </motion.div>
            <motion.div {...fadeUp} transition={{ duration: 0.5, delay: 0.1 }} className="rounded-lg border border-border bg-card p-8">
              <p className="mb-4 font-heading text-sm font-semibold uppercase tracking-wider text-subtle">
                This is not for you if
              </p>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex gap-3"><span className="mt-0.5">--</span> You are just starting out and do not yet have clients</li>
                <li className="flex gap-3"><span className="mt-0.5">--</span> You want a cheap chatbot or simple form</li>
                <li className="flex gap-3"><span className="mt-0.5">--</span> You are looking for a DIY tool to configure yourself</li>
                <li className="flex gap-3"><span className="mt-0.5">--</span> Your budget is under 5,000 EUR for a complete system</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problems */}
      <section className="border-b border-border py-20">
        <div className="container">
          <SectionHeading
            label="The problem"
            title="What broken operations actually cost you"
            description="These are not minor inconveniences. Each one directly reduces revenue, increases overhead, and makes your business fragile."
          />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {problems.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group rounded-lg border border-border bg-card p-6 transition-colors hover:border-primary/30"
              >
                <AlertTriangle size={16} className="mb-3 text-subtle" />
                <h3 className="font-heading text-base font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-20">
        <div className="container">
          <SectionHeading
            label="The solution"
            title="Structured systems that execute without ambiguity"
            description="We replace ad hoc processes with deterministic workflows. Every input has a defined output. Every step is tracked, measured, and recoverable."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {solutions.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex gap-5 rounded-lg border border-border bg-card p-6"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-secondary">
                  <s.icon size={18} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-heading text-base font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeUp} className="mt-12">
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
};

export default Index;
