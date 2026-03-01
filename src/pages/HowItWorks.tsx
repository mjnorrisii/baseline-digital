import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Zap, Target, Mail, CreditCard, Box, PieChart } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { fadeUp, containerReveal, itemReveal } from "@/lib/animations";

const steps = [
  {
    num: "01",
    title: "Capture",
    icon: Target,
    desc: "Leads from every channel — forms, calls, emails, ads — are captured into a single intake system. Nothing falls through.",
  },
  {
    num: "02",
    title: "Qualify",
    icon: Zap,
    desc: "Automated qualification filters and scores inbound leads based on your criteria. Staff only see prospects worth their time.",
  },
  {
    num: "03",
    title: "Follow Up",
    icon: Mail,
    desc: "Structured sequences engage prospects at the right intervals with the right message. No manual tracking required.",
  },
  {
    num: "04",
    title: "Convert",
    icon: CreditCard,
    desc: "Payment collection is triggered automatically. Once payment clears, the next workflow begins without delay.",
  },
  {
    num: "05",
    title: "Deliver",
    icon: Box,
    desc: "Service delivery steps execute in sequence. Each handoff is tracked. Failures trigger alerts, not silence.",
  },
  {
    num: "06",
    title: "Monitor",
    icon: PieChart,
    desc: "Dashboards and alerts give you real-time visibility into every workflow, every bottleneck, and every outcome.",
  },
];

const HowItWorks = () => (
  <div className="min-h-screen pt-32 pb-32">
    <section className="container">
      <SectionHeading
        label="The Blueprint"
        title="From intake to delivery, fully automated"
        description="Every system we build follows the same architecture. The specifics are tailored to your business, but the result is a hardened, self-executing operational flow."
      />

      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={containerReveal}
        className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
      >
        {steps.map((step, i) => (
          <motion.div
            key={step.num}
            variants={itemReveal}
            className="group relative rounded-2xl glass-card p-10 hover:border-primary/30 transition-all hover:bg-white/[0.05]"
          >
            <div className="absolute top-8 right-10 font-heading text-5xl font-black text-white/5 group-hover:text-primary/10 transition-colors">
              {step.num}
            </div>
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary ring-1 ring-primary/30 group-hover:bg-primary transition-colors group-hover:text-primary-foreground group-hover:shadow-lg group-hover:shadow-primary/20">
              <step.icon size={28} />
            </div>
            <h3 className="font-heading text-2xl font-bold">{step.title}</h3>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">{step.desc}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeUp}
        className="mt-24 text-center glass-card rounded-3xl p-16 bg-gradient-to-br from-primary/10 to-transparent border-none ring-1 ring-white/5"
      >
        <h2 className="font-heading text-3xl font-bold mb-6">Ready to blueprint your automation?</h2>
        <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
          We identify exactly where your operations could be self-executing. Book your strategy call today.
        </p>
        <Link
          to="/book"
          className="btn-premium group inline-flex items-center gap-3 rounded-full px-10 py-5 text-lg font-bold text-primary-foreground shadow-2xl transition-all hover:scale-105"
        >
          Discuss Your Operations
          <ArrowRight size={22} className="transition-transform group-hover:translate-x-1" />
        </Link>
      </motion.div>
    </section>
  </div>
);

export default HowItWorks;
