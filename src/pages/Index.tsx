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
            <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight md:text-6xl">
              Your operations are losing you money every week
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Leads go untracked. Follow-ups get missed. Staff copy data between tools by hand. When a key person is unavailable, the process stops. Every one of these failures costs revenue — silently, repeatedly, and at scale.
            </p>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-foreground">
              Baseline Digital installs structured automation systems that eliminate these losses. Defined workflows replace manual steps so your operations execute consistently, without depending on any single person or memory.
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
                to="/how-it-works"
                className="inline-flex items-center gap-2 rounded-md border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
              >
                See How It Works
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
            title="We work with a specific type of business"
            description="This section exists to save your time and ours. If your situation matches the left column, a strategy call will be productive. If it matches the right column, we are not the right fit."
          />
          <div className="grid gap-6 md:grid-cols-2">
            <motion.div {...fadeUp} className="rounded-lg border border-border bg-card p-8">
              <p className="mb-5 font-heading text-sm font-semibold uppercase tracking-wider text-primary">
                Good fit
              </p>
              <ul className="space-y-3 text-sm text-foreground">
                <li className="flex gap-3"><span className="mt-0.5 text-primary">--</span> Established service business with existing clients</li>
                <li className="flex gap-3"><span className="mt-0.5 text-primary">--</span> Consistent inbound lead flow that needs structure</li>
                <li className="flex gap-3"><span className="mt-0.5 text-primary">--</span> Manual administrative workload consuming staff hours</li>
                <li className="flex gap-3"><span className="mt-0.5 text-primary">--</span> Operational bottlenecks slowing delivery or response</li>
                <li className="flex gap-3"><span className="mt-0.5 text-primary">--</span> Owner or manager spending time coordinating instead of growing</li>
                <li className="flex gap-3"><span className="mt-0.5 text-primary">--</span> Revenue is there but processes are inefficient</li>
              </ul>
            </motion.div>
            <motion.div {...fadeUp} transition={{ duration: 0.5, delay: 0.1 }} className="rounded-lg border border-border bg-card p-8">
              <p className="mb-5 font-heading text-sm font-semibold uppercase tracking-wider text-subtle">
                Not a fit
              </p>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex gap-3"><span className="mt-0.5">--</span> Very early stage startup without established operations</li>
                <li className="flex gap-3"><span className="mt-0.5">--</span> Looking for a DIY automation tool to configure yourself</li>
                <li className="flex gap-3"><span className="mt-0.5">--</span> Business with almost no operational volume to automate</li>
                <li className="flex gap-3"><span className="mt-0.5">--</span> Looking for a cheap experiment rather than infrastructure</li>
                <li className="flex gap-3"><span className="mt-0.5">--</span> One person side project without real process complexity</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Built From Real Operations */}
      <section className="border-b border-border py-20">
        <div className="container">
          <SectionHeading
            label="Built from real operations"
            title="Designed for how businesses actually run"
          />
          <div className="grid gap-6 md:grid-cols-2">
            <motion.div {...fadeUp}>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Most automation fails because it is designed for ideal conditions. Clean data, predictable inputs, staff who follow every step exactly as documented. That is not how real businesses operate.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Baseline Digital builds systems around the conditions that actually exist inside service businesses: incomplete information, inconsistent handoffs, human error, unexpected volume changes, and processes that depend entirely on one person's availability.
              </p>
            </motion.div>
            <motion.div {...fadeUp} transition={{ duration: 0.5, delay: 0.1 }}>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Every workflow we build accounts for failure states. What happens when a form is submitted with missing fields. What happens when a payment fails. What happens when a staff member does not complete their step. These are not edge cases. They are the norm.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                The difference between a system that works in a demo and one that works in production is whether it was designed to handle real operational pressure. That is what we deliver.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

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
