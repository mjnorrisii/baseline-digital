import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const steps = [
  {
    num: "01",
    title: "Capture",
    desc: "Leads from every channel — forms, calls, emails, ads — are captured into a single intake system. Nothing falls through.",
  },
  {
    num: "02",
    title: "Qualify",
    desc: "Automated qualification filters and scores inbound leads based on your criteria. Staff only see prospects worth their time.",
  },
  {
    num: "03",
    title: "Follow Up",
    desc: "Structured sequences engage prospects at the right intervals with the right message. No manual tracking required.",
  },
  {
    num: "04",
    title: "Convert",
    desc: "Payment collection is triggered automatically. Once payment clears, the next workflow begins without delay.",
  },
  {
    num: "05",
    title: "Deliver",
    desc: "Service delivery steps execute in sequence. Each handoff is tracked. Failures trigger alerts, not silence.",
  },
  {
    num: "06",
    title: "Monitor",
    desc: "Dashboards and alerts give you real-time visibility into every workflow, every bottleneck, and every outcome.",
  },
];

const HowItWorks = () => (
  <div className="min-h-screen pt-16">
    <section className="border-b border-border py-20">
      <div className="container">
        <SectionHeading
          label="How it works"
          title="From intake to delivery, fully automated"
          description="Every system we build follows the same architecture: capture, qualify, convert, deliver, monitor. The specifics are tailored to your business."
        />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="rounded-lg border border-border bg-card p-6"
            >
              <p className="font-heading text-2xl font-bold text-primary/40">{step.num}</p>
              <h3 className="mt-3 font-heading text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.desc}</p>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12"
        >
          <Link
            to="/book"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Discuss Your Operations
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  </div>
);

export default HowItWorks;
