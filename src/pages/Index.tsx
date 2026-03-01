import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, AlertTriangle, Zap, Eye, ShieldCheck, CheckCircle2, Plus, Minus, Quote } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { fadeUp, containerReveal, itemReveal, staggerContainer } from "@/lib/animations";
import { useState } from "react";

const problems = [
  { title: "Missed follow-ups", desc: "Leads go cold because no one follows up within the window that matters." },
  { title: "Leads slipping through", desc: "Inquiries arrive across channels and disappear into inboxes no one checks." },
  { title: "Manual data copying", desc: "Staff transfer information between tools by hand, introducing errors and delay." },
  { title: "Staff bottlenecks", desc: "Key processes stop when a specific person is unavailable." },
  { title: "Delivery delays", desc: "Service fulfillment stalls because handoffs between steps are manual." },
  { title: "Inconsistent quality", desc: "When processes are manual, outcomes depend on the individual. Scaling leads to quality drops and human error." },
];

const solutions = [
  { icon: Zap, title: "Self-executing workflows", desc: "Operations run on defined logic, not manual coordination. No one needs to remember, chase, or trigger the next step." },
  { icon: ShieldCheck, title: "Staff-independent processes", desc: "Critical workflows continue regardless of who is available. No single person becomes a bottleneck or point of failure." },
  { icon: ArrowRight, title: "Structured operational systems", desc: "Every process follows a determined path from input to completion. Manual handoffs and ad hoc steps are replaced entirely." },
  { icon: Eye, title: "Continuous operational visibility", desc: "Every workflow is tracked in real time. When something fails, the system surfaces it immediately — not when a client complains." },
];

const integrations = [
  "Stripe", "HubSpot", "Slack", "Salesforce", "Intercom", "Zapier", "Trello", "Airtable"
];

const wins = [
  { metric: "62%", label: "Reduction in manual entry", detail: "Automated Stripe to HubSpot sync for high-volume service provider." },
  { metric: "4h", label: "Saved per lead inquiry", detail: "AI-assisted triage and automated booking for specialized agency." },
  { metric: "0", label: "Missed follow-ups in 90 days", detail: "Implemented persistent re-engagement loop for sales team." },
  { metric: "24/7", label: "Operational uptime", detail: "Client delivery pipeline now runs without human coordination." },
];

const testimonials = [
  {
    quote: "Baseline didn't just automate our emails; they rebuilt how our entire fulfillment team communicates. We're seeing 30% more throughput with the same headcount.",
    author: "Sarah Chen",
    role: "COO at NexaLogistics",
    image: "/images/testimonial_1.png"
  },
  {
    quote: "The 'missed follow-up' problem was costing us hundreds of thousands. Baseline's re-engagement loop paid for itself in the first 14 days.",
    author: "Marcus Thorne",
    role: "Founder of Thorne Real Estate",
    image: "/images/testimonial_2.png"
  },
  {
    quote: "I was skeptical about 'industrial-grade' automation until I saw the error handling. Most tools break. This one flags the issue and keeps running.",
    author: "Elena Rodriguez",
    role: "Director of Ops, ScaleUp Lab",
    image: "/images/testimonial_3.png"
  }
];

const faqs = [
  {
    q: "How long does a typical implementation take?",
    a: "Most foundational infrastructure builds take 4 to 8 weeks. We start with a high-impact 'quick win' within the first 14 days to prove the system while building the larger architecture."
  },
  {
    q: "Will this replace my existing staff?",
    a: "No. It replaces the repetitive, low-value coordination tasks that keep your staff from doing their actual jobs. Your team becomes more productive because they stop copying data and start delivering result-oriented work."
  },
  {
    q: "How secure is the automation?",
    a: "We use enterprise-grade architecture. All data transfers are encrypted (SSL/TLS), and we leverage official APIs. We never 'scrap' data. Your processes inherit the security of the tools you already use (like Stripe or HubSpot)."
  },
  {
    q: "Do you offer ongoing support?",
    a: "Yes. Every system we install comes with 24/7 monitoring. If a workflow fails due to an API change or unexpected input, we are alerted and fix it before you even know there's a problem."
  }
];

const Index = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="surface-grid relative flex min-h-screen items-center border-b border-white/5 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />

        <div className="container relative z-10 py-32">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="mx-auto max-w-4xl text-center"
          >
            <motion.div variants={itemReveal} className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Operational Infrastructure for Scale
            </motion.div>

            <motion.h1 variants={itemReveal} className="font-heading text-5xl font-bold leading-[1.1] tracking-tight md:text-7xl lg:text-8xl">
              Your operations are <span className="text-gradient-electric">losing you money</span> every week
            </motion.h1>

            <motion.p variants={itemReveal} className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              Leads go untracked. Staff copy data by hand. Processes stop when people leave. We install structured automation that eliminates these failures silently and at scale.
            </motion.p>

            <motion.div variants={itemReveal} className="mt-12 flex flex-wrap justify-center gap-4">
              <Link
                to="/book"
                className="btn-premium group inline-flex items-center gap-2 rounded-full px-8 py-4 text-base font-bold text-primary-foreground shadow-2xl transition-all hover:scale-105"
              >
                Book Strategy Call
                <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 py-4 text-base font-semibold text-foreground backdrop-blur-sm transition-all hover:bg-white/10"
              >
                See How It Works
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Integration Showcase */}
      <section className="py-12 border-b border-white/5 bg-brand-deep/30">
        <div className="container">
          <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-subtle mb-8">Natively integrated with your tech stack</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
            {integrations.map(name => (
              <span key={name} className="font-heading text-xl md:text-2xl font-bold text-muted-foreground hover:text-primary transition-colors cursor-default">
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Wins */}
      <section className="py-24 border-b border-white/5 bg-primary/5 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="container">
          <SectionHeading
            label="Measuring Success"
            title="Real transformations, not just 'automations'"
            description="We track performance from day one. These are the average results our clients see within the first 90 days."
          />
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {wins.map((win, i) => (
              <motion.div
                key={i}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={itemReveal}
                className="relative p-8 rounded-2xl glass-card border-none ring-1 ring-white/5 group overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Zap size={64} className="text-primary" />
                </div>
                <div className="text-5xl font-heading font-black text-primary mb-4 transition-transform group-hover:scale-105 origin-left">{win.metric}</div>
                <div className="text-sm font-bold text-heading mb-3 uppercase tracking-wider">{win.label}</div>
                <p className="text-sm text-muted-foreground leading-relaxed italic border-l-2 border-primary/20 pl-4">{win.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Qualification */}
      <section className="relative border-b border-white/5 py-32">
        <div className="container">
          <SectionHeading
            label="Who this is for"
            title="Designed for high-volume service businesses"
            description="We work with businesses where operations are a bottleneck to growth. If this sounds like you, we should talk."
          />
          <div className="mt-16 grid gap-8 md:grid-cols-2">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeUp}
              className="glass-card rounded-2xl p-10 ring-1 ring-primary/20 bg-gradient-to-br from-card/80 to-primary/5"
            >
              <h3 className="mb-8 font-heading text-xl font-bold text-primary flex items-center gap-2">
                <CheckCircle2 size={24} />
                Ideal Partner
              </h3>
              <ul className="space-y-4 text-foreground">
                {[
                  "Established business with consistent lead flow",
                  "Manual workload consuming expensive staff hours",
                  "Operational bottlenecks slowing service delivery",
                  "Revenue is strong but efficiency is non-existent",
                  "Ready to invest in long-term infrastructure",
                ].map((item) => (
                  <li key={item} className="flex gap-4 items-start">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                    <span className="text-sm md:text-base leading-tight">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeUp}
              className="glass-card rounded-2xl p-10 ring-1 ring-white/5 opacity-80"
            >
              <h3 className="mb-8 font-heading text-xl font-bold text-muted-foreground flex items-center gap-2">
                <AlertTriangle size={24} />
                Not a Fit
              </h3>
              <ul className="space-y-4 text-muted-foreground">
                {[
                  "Early stage startups with zero operations",
                  "Looking for a DIY tool to configure yourself",
                  "One-person project with no team complexity",
                  "Seeking a 'quick fix' rather than a system",
                ].map((item) => (
                  <li key={item} className="flex gap-4 items-start">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-muted-foreground/30 shrink-0" />
                    <span className="text-sm leading-tight italic">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Real Operations */}
      <section className="border-b border-white/5 py-32 bg-secondary/30 relative overflow-hidden">
        <div className="container relative z-10">
          <div className="grid gap-16 md:grid-cols-2 items-center">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <SectionHeading
                label="Built from real operations"
                title="Automation that survives the real world"
                align="left"
              />
              <div className="mt-8 space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Most automation fails because it assumes "happy path" conditions. Clean data, predictable inputs, and perfect human execution.
                </p>
                <p>
                  Baseline Digital builds for the messy reality: incomplete forms, inconsistent handoffs, and humans who forget steps. We design for failure states, so your system actually works when it matters.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={itemReveal}
              className="relative aspect-square md:aspect-video rounded-2xl border border-white/10 glass-card overflow-hidden group shadow-2xl"
            >
              <img
                src="/images/automation_nodes.png"
                alt="Automation nodes"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/80 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <h4 className="font-heading text-xl font-bold text-white">Hardened Industrial-Grade Systems</h4>
                <p className="mt-2 text-sm text-white/70">Engineered to handle peak operational load without friction.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problems */}
      <section className="border-b border-white/5 py-32">
        <div className="container">
          <SectionHeading
            label="The cost"
            title="What broken operations actually cost you"
            description="These are not minor inconveniences. They are high-velocity leaks in your revenue model."
          />
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={containerReveal}
            className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {problems.map((p) => (
              <motion.div
                key={p.title}
                variants={itemReveal}
                className="group relative rounded-2xl glass-card p-8 transition-all hover:-translate-y-1 hover:border-primary/30"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500/10 text-orange-500 ring-1 ring-orange-500/20">
                  <AlertTriangle size={20} />
                </div>
                <h3 className="font-heading text-xl font-bold">{p.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">{p.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-32 border-b border-white/5 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="container relative z-10">
          <SectionHeading
            label="What we install"
            title="Operational infrastructure that runs without you"
            description="We replace manual coordination with self-executing systems. The result is total operational independence."
          />
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={containerReveal}
            className="mt-16 grid gap-8 md:grid-cols-2"
          >
            {solutions.map((s) => (
              <motion.div
                key={s.title}
                variants={itemReveal}
                className="flex gap-6 rounded-2xl glass-card p-8 group transition-all hover:bg-white/[0.05]"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary px-3 text-primary-foreground shadow-lg shadow-primary/20">
                  <s.icon size={28} />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold">{s.title}</h3>
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 border-b border-white/5 bg-brand-deep/50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="container">
          <SectionHeading
            label="In their own words"
            title="What operational leverage looks like"
            description="We build long-term partnerships with our clients. Here is how their businesses changed after implementing Baseline."
          />

          <div className="mt-20 grid gap-8 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={itemReveal}
                className="glass-card p-10 rounded-3xl relative flex flex-col h-full ring-1 ring-white/5 transition-all hover:ring-primary/20"
              >
                <div className="absolute top-8 right-10 text-primary/20">
                  <Quote size={40} />
                </div>

                <p className="text-lg leading-relaxed text-foreground/90 italic mb-10 relative z-10 font-medium">
                  "{t.quote}"
                </p>

                <div className="mt-auto flex items-center gap-4">
                  <div className="h-14 w-14 rounded-full border-2 border-primary/20 overflow-hidden shrink-0 shadow-lg">
                    <img src={t.image} alt={t.author} className="h-full w-full object-cover" />
                  </div>
                  <div>
                    <div className="font-heading font-bold text-lg leading-none">{t.author}</div>
                    <div className="text-sm text-primary font-semibold mt-1">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-32">
        <div className="container max-w-4xl">
          <SectionHeading
            label="Clear answers"
            title="Frequently Asked Questions"
            description="Transparency is one of our operational principles. Here is what most businesses ask before we start."
          />
          <div className="mt-16 space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                >
                  <span className="font-heading text-lg font-bold">{faq.q}</span>
                  <div className="rounded-full bg-secondary p-1 text-primary">
                    {openFaq === i ? <Minus size={18} /> : <Plus size={18} />}
                  </div>
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: openFaq === i ? "auto" : 0, opacity: openFaq === i ? 1 : 0 }}
                  className="overflow-hidden"
                >
                  <div className="p-6 pt-0 text-muted-foreground leading-relaxed border-t border-white/5 mt-0">
                    {faq.a}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mt-20 text-center"
          >
            <Link
              to="/book"
              className="btn-premium group inline-flex items-center gap-2 rounded-full px-10 py-5 text-lg font-bold text-primary-foreground shadow-2xl transition-all hover:scale-105"
            >
              Secure Your Strategy Call
              <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
