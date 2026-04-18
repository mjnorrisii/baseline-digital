import { Link } from "react-router-dom";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  ArrowRight, AlertTriangle, Zap, Eye, ShieldCheck, CheckCircle2,
  Plus, Minus, Quote, TrendingUp, Clock, Users, Activity
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { fadeUp, containerReveal, itemReveal, staggerContainer } from "@/lib/animations";
import { useState, useEffect, useRef } from "react";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import ROIDiagnostic from "@/components/ROIDiagnostic";
import FounderProfile from "@/components/FounderProfile";
import PersonSchema from "@/components/PersonSchema";
import SpotlightCard from "@/components/SpotlightCard";
import LiveActivityTerminal from "@/components/LiveActivityTerminal";

// ─── Data ──────────────────────────────────────────────────────────────────

const cycleWords = ["Workflows", "Operations", "Revenue", "Growth", "Delivery"];

const problems = [
  { num: "01", title: "Missed follow-ups", desc: "Leads go cold because no one follows up within the window that matters. Every hour of delay costs conversion rate." },
  { num: "02", title: "Leads slipping through", desc: "Inquiries arrive across channels and disappear into inboxes no one checks. The lead never knew you existed." },
  { num: "03", title: "Manual data copying", desc: "Staff transfer information between tools by hand, introducing errors and delay at every step." },
  { num: "04", title: "Staff bottlenecks", desc: "Key processes stop when a specific person is unavailable. You've built dependency, not infrastructure." },
  { num: "05", title: "Delivery delays", desc: "Service fulfillment stalls because handoffs between steps are manual. Clients feel the gap." },
  { num: "06", title: "Inconsistent quality", desc: "When processes are manual, outcomes depend on the individual. Scaling leads to quality drops and human error." },
];

const solutions = [
  { icon: Zap, title: "Self-executing workflows", desc: "Operations run on defined logic, not manual coordination. No one needs to remember, chase, or trigger the next step." },
  { icon: ShieldCheck, title: "Staff-independent processes", desc: "Critical workflows continue regardless of who is available. No single person becomes a bottleneck or point of failure." },
  { icon: ArrowRight, title: "Structured operational systems", desc: "Every process follows a determined path from input to completion. Manual handoffs and ad hoc steps are replaced entirely." },
  { icon: Eye, title: "Continuous operational visibility", desc: "Every workflow is tracked in real time. When something fails, the system surfaces it immediately." },
];

const integrations = [
  "Stripe", "HubSpot", "Slack", "Salesforce", "Intercom", "Zapier", "Trello",
  "Airtable", "Notion", "Make", "n8n", "Pipedrive", "Monday", "ClickUp",
];

const wins = [
  { metric: 62, suffix: "%", label: "Less manual entry", detail: "Automated Stripe to HubSpot sync for high-volume service provider.", icon: TrendingUp },
  { metric: 4, suffix: "h", label: "Saved per lead inquiry", detail: "AI-assisted triage and automated booking for specialized agency.", icon: Clock },
  { metric: 0, suffix: "", label: "Missed follow-ups / 90 days", detail: "Implemented persistent re-engagement loop for sales team.", icon: CheckCircle2 },
  { metric: 24, suffix: "/7", label: "Operational uptime", detail: "Client delivery pipeline now runs without human coordination.", icon: Activity },
];

const testimonials = [
  {
    quote: "Baseline didn't just automate our emails — they rebuilt how our entire fulfillment team communicates. We're seeing 30% more throughput with the same headcount.",
    author: "Sarah Chen",
    role: "COO at NexaLogistics",
    initials: "SC",
  },
  {
    quote: "The 'missed follow-up' problem was costing us hundreds of thousands. Baseline's re-engagement loop paid for itself in the first 14 days.",
    author: "Marcus Thorne",
    role: "Founder, Thorne Real Estate",
    initials: "MT",
  },
  {
    quote: "I was skeptical about 'industrial-grade' automation until I saw the error handling. Most tools break. This one flags the issue and keeps running.",
    author: "Elena Rodriguez",
    role: "Director of Ops, ScaleUp Lab",
    initials: "ER",
  },
];

const faqs = [
  {
    q: "How long does a typical implementation take?",
    a: "Most foundational infrastructure builds take 4 to 8 weeks. We start with a high-impact 'quick win' within the first 14 days to prove the system while building the larger architecture.",
  },
  {
    q: "Will this replace my existing staff?",
    a: "No. It replaces the repetitive, low-value coordination tasks that keep your staff from doing their actual jobs. Your team becomes more productive because they stop copying data and start delivering result-oriented work.",
  },
  {
    q: "How secure is the automation?",
    a: "We use enterprise-grade architecture. All data transfers are encrypted (SSL/TLS), and we leverage official APIs. We never 'scrape' data. Your processes inherit the security of the tools you already use.",
  },
  {
    q: "Do you offer ongoing support?",
    a: "Yes. Every system we install comes with 24/7 monitoring. If a workflow fails due to an API change or unexpected input, we are alerted and fix it before you even know there's a problem.",
  },
];

// ─── Animated Counter ────────────────────────────────────────────────────────

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const duration = 1800;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

// ─── Marquee ─────────────────────────────────────────────────────────────────

function MarqueeTicker() {
  const doubled = [...integrations, ...integrations];
  return (
    <div className="marquee-container">
      <div className="marquee-track">
        {doubled.map((name, i) => (
          <div key={i} className="flex items-center gap-2 mx-8">
            <span className="font-heading text-lg font-bold text-white/60 hover:text-white/90 transition-colors cursor-default whitespace-nowrap tracking-tight">
              {name}
            </span>
            <span className="text-[#00e5ff]/20 text-xs">◆</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

const Index = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [wordIndex, setWordIndex] = useState(0);

  // Word cycler
  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % cycleWords.length);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Removed: scanline-overlay + noise-overlay — fixed full-viewport layers were expensive on every paint */}
      <BreadcrumbSchema items={[{ name: "Home", item: "/" }]} />
      <PersonSchema />

      {/* ── HERO ────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden" style={{ background: "#030609" }}>
        {/* Multi-layer background */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Primary glow */}
          <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full"
            style={{ background: "radial-gradient(ellipse, rgba(0,229,255,0.08) 0%, transparent 70%)" }} />
          {/* Secondary glow */}
          <div className="absolute bottom-0 right-[-10%] w-[600px] h-[600px] rounded-full"
            style={{ background: "radial-gradient(ellipse, rgba(99,102,241,0.07) 0%, transparent 70%)" }} />

          {/* Animated SVG network */}
          <svg className="absolute w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <filter id="hero-glow">
                <feGaussianBlur stdDeviation="6" result="blur" />
                <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
              </filter>
              <linearGradient id="pipe-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00e5ff" />
                <stop offset="100%" stopColor="#6366f1" />
              </linearGradient>
              <linearGradient id="pipe-grad-2" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#6366f1" />
                <stop offset="100%" stopColor="#00e5ff" />
              </linearGradient>
            </defs>
            {/* Thick accent pipes */}
            <path d="M-80 300 L 120 300 Q 220 300 220 420 L 220 900" stroke="url(#pipe-grad)" strokeWidth="14" fill="none" filter="url(#hero-glow)" strokeLinecap="round" opacity="0.5" />
            <path d="M1300 100 L 1000 100 Q 900 100 900 220 L 900 550 Q 900 650 1000 650 L 1300 650" stroke="url(#pipe-grad-2)" strokeWidth="10" fill="none" filter="url(#hero-glow)" strokeLinecap="round" opacity="0.5" />
            {/* Fine network */}
            <path d="M220 600 L 400 500 L 680 680 L 900 550" stroke="#00e5ff" strokeWidth="0.8" fill="none" opacity="0.2" />
            <path d="M400 500 L 500 320 L 800 240" stroke="#6366f1" strokeWidth="0.8" fill="none" opacity="0.2" />
            <path d="M680 680 L 580 820 L 850 950" stroke="#00e5ff" strokeWidth="0.8" fill="none" opacity="0.15" />
            {/* Nodes */}
            {[[400,500],[680,680],[500,320],[800,240],[580,820]].map(([cx,cy],i) => (
              <circle key={i} cx={cx} cy={cy} r="3.5" fill="#00e5ff" filter="url(#hero-glow)" opacity="0.7" />
            ))}
          </svg>

          {/* Grid */}
          <div className="absolute inset-0 surface-grid opacity-40" />
        </div>

        <div className="container relative z-10 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">

            {/* Left: Headline */}
            <motion.div
              initial="initial"
              animate="animate"
              variants={staggerContainer}
            >
              {/* Badge */}
              <motion.div variants={itemReveal} className="mb-8">
                <span className="section-label">
                  <span className="pulse-dot" />
                  Operational Infrastructure · Live
                </span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                variants={itemReveal}
                className="font-heading font-black leading-[1.05] tracking-tight text-5xl md:text-6xl lg:text-7xl xl:text-[5rem]"
              >
                <span className="text-gradient-hero">Automate Your</span>
                <br />
                <span className="inline-flex items-baseline min-h-[1.2em]">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={wordIndex}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className="text-[#00e5ff] inline-block"
                      style={{ textShadow: "0 0 40px rgba(0,229,255,0.4)" }}
                    >
                      {cycleWords[wordIndex]}
                    </motion.span>
                  </AnimatePresence>
                </span>
              </motion.h1>

              <motion.p
                variants={itemReveal}
                className="mt-8 text-lg leading-relaxed text-white/55 max-w-lg font-body"
              >
                Baseline Digital builds industrial-grade automation infrastructure for high-volume service businesses — so your operations run without you.
              </motion.p>

              <motion.div variants={itemReveal} className="mt-10 flex flex-wrap gap-4">
                <Link
                  to="/book"
                  id="hero-cta-primary"
                  className="btn-premium group inline-flex items-center gap-2 rounded-full px-8 py-4 text-base font-bold text-[#030609]"
                >
                  Schedule a Consultation
                  <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/how-it-works"
                  id="hero-cta-ghost"
                  className="btn-ghost group inline-flex items-center gap-2 rounded-full px-8 py-4 text-base font-semibold"
                >
                  See How It Works
                  <ArrowRight size={16} className="opacity-60 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>

              {/* Social proof strip */}
              <motion.div variants={itemReveal} className="mt-12 flex items-center gap-6">
                <div className="flex -space-x-2">
                  {["SC", "MT", "ER"].map((init, i) => (
                    <div key={i} className="h-8 w-8 rounded-full border-2 border-[#030609] flex items-center justify-center text-[10px] font-black text-white"
                      style={{ background: `hsl(${[192, 235, 265][i]} 70% ${[30, 40, 40][i]}%)` }}>
                      {init}
                    </div>
                  ))}
                </div>
                <p className="text-sm text-white/40">
                  <span className="text-white/70 font-semibold">50+ businesses</span> running on Baseline infrastructure
                </p>
              </motion.div>
            </motion.div>

            {/* Right: Terminal */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
              className="relative"
            >
              {/* Glow behind terminal */}
              <div className="absolute -inset-8 rounded-3xl"
                style={{ background: "radial-gradient(ellipse, rgba(0,229,255,0.08) 0%, transparent 70%)" }} />
              <LiveActivityTerminal />

              {/* Floating stat cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="absolute -bottom-6 -left-6 glass-card rounded-2xl px-5 py-4 border border-white/8 z-10"
              >
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: "rgba(0,229,255,0.1)", border: "1px solid rgba(0,229,255,0.2)" }}>
                    <Zap size={16} className="text-[#00e5ff]" />
                  </div>
                  <div>
                    <div className="text-lg font-black font-heading text-white leading-none">62%</div>
                    <div className="text-[11px] text-white/40 mt-0.5">Less manual work</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.6 }}
                className="absolute -top-4 -right-4 glass-card rounded-2xl px-5 py-4 border border-white/8 z-10"
              >
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: "rgba(52,211,153,0.1)", border: "1px solid rgba(52,211,153,0.2)" }}>
                    <CheckCircle2 size={16} className="text-emerald-400" />
                  </div>
                  <div>
                    <div className="text-lg font-black font-heading text-white leading-none">24/7</div>
                    <div className="text-[11px] text-white/40 mt-0.5">Uptime guarantee</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 inset-x-0 h-32 pointer-events-none"
          style={{ background: "linear-gradient(to bottom, transparent, #030609)" }} />
      </section>

      {/* ── INTEGRATION MARQUEE ─────────────────────────────────────────── */}
      <section className="py-14 border-y border-white/4" style={{ background: "#030609" }}>
        <div className="container mb-6">
          <p className="text-center text-[11px] font-bold uppercase tracking-[0.25em] text-white/60 mb-8">
            Native integrations with 100+ tools in your stack
          </p>
        </div>
        <MarqueeTicker />
      </section>

      {/* ── METRICS ─────────────────────────────────────────────────────── */}
      <section className="py-28 relative overflow-hidden" style={{ background: "linear-gradient(to bottom, #030609, #050a12)" }}>
        <div className="absolute inset-0 surface-grid opacity-20" />
        <div className="container relative z-10">
          <motion.div
            initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer}
          >

            <motion.h2 variants={itemReveal} className="font-heading text-3xl md:text-5xl font-black text-center mb-16 text-gradient-hero">
              Real results, not estimates
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {wins.map((win, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.6 }}
              >
                <SpotlightCard className="glass-card glass-card-hover animated-border rounded-2xl p-8 h-full relative overflow-hidden group">
                  {/* Subtle bg glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ background: "radial-gradient(circle at 50% 0%, rgba(0,229,255,0.05), transparent 70%)" }} />

                  <div className="h-10 w-10 rounded-xl flex items-center justify-center mb-6"
                    style={{ background: "rgba(0,229,255,0.08)", border: "1px solid rgba(0,229,255,0.15)" }}>
                    <win.icon size={18} className="text-[#00e5ff]" />
                  </div>

                  <div className="text-5xl font-heading font-black leading-none mb-3 text-white">
                    <AnimatedCounter target={win.metric} suffix={win.suffix} />
                  </div>

                  <div className="text-xs font-bold uppercase tracking-widest text-white/50 mb-3">{win.label}</div>
                  <p className="text-sm text-white/35 leading-relaxed border-l border-[#00e5ff]/20 pl-3 italic">{win.detail}</p>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ROI DIAGNOSTIC ──────────────────────────────────────────────── */}
      <ROIDiagnostic />

      {/* ── QUALIFICATION ───────────────────────────────────────────────── */}
      <section className="relative py-32" style={{ background: "#030609" }}>
        <div className="glow-line absolute top-0 inset-x-0" />
        <div className="container">
          <SectionHeading
            label="Who This Is For"
            title="Designed for high-volume service businesses"
            description="We work with businesses where operations are a bottleneck to growth. If this sounds like you, we should talk."
          />
          <div className="mt-16 grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
            <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeUp}>
              <SpotlightCard className="glass-card animated-border h-full p-10 rounded-2xl relative overflow-hidden"
                style={{ borderColor: "rgba(0,229,255,0.12)" }}>
                <div className="absolute top-0 inset-x-0 h-px" style={{ background: "linear-gradient(to right, transparent, rgba(0,229,255,0.4), transparent)" }} />
                <h3 className="mb-8 font-heading text-xl font-bold text-[#00e5ff] flex items-center gap-2">
                  <CheckCircle2 size={22} /> Ideal Partner
                </h3>
                <ul className="space-y-4 text-white/70">
                  {[
                    "Established business with consistent lead flow",
                    "Manual workload consuming expensive staff hours",
                    "Operational bottlenecks slowing service delivery",
                    "Revenue is strong but efficiency is non-existent",
                    "Ready to invest in long-term infrastructure",
                  ].map((item) => (
                    <li key={item} className="flex gap-3 items-start text-sm">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#00e5ff] shrink-0" style={{ boxShadow: "0 0 6px #00e5ff" }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </SpotlightCard>
            </motion.div>

            <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeUp}>
              <SpotlightCard className="glass-card h-full p-10 rounded-2xl opacity-70 hover:opacity-100 transition-opacity">
                <h3 className="mb-8 font-heading text-xl font-bold text-white/40 flex items-center gap-2">
                  <AlertTriangle size={22} /> Not a Fit
                </h3>
                <ul className="space-y-4 text-white/30">
                  {[
                    "Early stage startups with zero operations",
                    "Looking for a DIY tool to configure yourself",
                    "One-person project with no team complexity",
                    "Seeking a 'quick fix' rather than a system",
                  ].map((item) => (
                    <li key={item} className="flex gap-3 items-start text-sm">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-white/20 shrink-0" />
                      <span className="italic">{item}</span>
                    </li>
                  ))}
                </ul>
              </SpotlightCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── REAL OPERATIONS ─────────────────────────────────────────────── */}
      <section className="py-32 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #050a12, #030609)" }}>
        <div className="glow-line absolute top-0 inset-x-0" />
        <div className="container relative z-10">
          <div className="grid gap-16 md:grid-cols-2 items-center">
            <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeUp}>
              <span className="section-label mb-8 inline-flex">Built from real operations</span>
              <h2 className="font-heading text-4xl md:text-5xl font-black leading-tight mt-6 mb-8 text-gradient-hero">
                Automation that survives the real world
              </h2>
              <div className="space-y-6 text-base text-white/50 leading-relaxed">
                <p>
                  Most automation fails because it assumes "happy path" conditions — clean data, predictable inputs, and perfect human execution.
                </p>
                <p>
                  Baseline Digital builds for the messy reality: incomplete forms, inconsistent handoffs, and humans who forget steps. We design for failure states, so your system actually works when it matters.
                </p>
              </div>
              <Link to="/book" className="btn-premium group mt-10 inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-bold text-sm text-[#030609]">
                Build Your System
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>

            <motion.div
              initial="initial" whileInView="animate" viewport={{ once: true }} variants={itemReveal}
              className="relative rounded-2xl overflow-hidden group shadow-2xl"
              style={{ border: "1px solid rgba(255,255,255,0.06)" }}
            >
              <img
                src="/images/automation_nodes.webp"
                alt="Automation nodes"
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 aspect-video"
              />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(3,6,9,0.9) 0%, transparent 60%)" }} />
              <div className="absolute bottom-8 left-8 right-8">
                <h3 className="font-heading text-xl font-bold text-white">Hardened Industrial-Grade Systems</h3>
                <p className="mt-2 text-sm text-white/60">Engineered to handle peak operational load without friction.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── PROBLEMS — Timeline ──────────────────────────────────────────── */}
      <section className="py-32 relative" style={{ background: "#030609" }}>
        <div className="glow-line absolute top-0 inset-x-0" />
        <div className="container">
          <SectionHeading
            label="The Cost"
            title="What broken operations actually cost you"
            description="These are not minor inconveniences. They are high-velocity leaks in your revenue model."
          />

          <div className="mt-20 max-w-3xl mx-auto relative pl-14">
            {/* Vertical line */}
            <div className="timeline-line" />

            {problems.map((p, i) => (
              <motion.div
                key={p.num}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="relative mb-10 last:mb-0 group"
              >
                {/* Node */}
                <div className="absolute -left-14 top-1 h-10 w-10 rounded-full flex items-center justify-center text-xs font-black font-heading text-[#00e5ff] border z-10 group-hover:scale-110 transition-transform"
                  style={{ background: "#030609", borderColor: "rgba(0,229,255,0.3)", boxShadow: "0 0 20px rgba(0,229,255,0.1)" }}>
                  {p.num}
                </div>

                <div className="glass-card glass-card-hover animated-border rounded-2xl p-7">
                  <div className="flex items-start gap-4">
                    <div className="h-8 w-8 flex items-center justify-center rounded-xl shrink-0"
                      style={{ background: "rgba(245,158,11,0.1)", border: "1px solid rgba(245,158,11,0.2)" }}>
                      <AlertTriangle size={15} className="text-amber-400" />
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-bold text-white mb-2">{p.title}</h3>
                      <p className="text-sm text-white/45 leading-relaxed">{p.desc}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SOLUTIONS ───────────────────────────────────────────────────── */}
      <section className="py-32 relative overflow-hidden" style={{ background: "linear-gradient(to bottom, #050a12, #030609)" }}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(ellipse, rgba(0,229,255,0.06) 0%, transparent 70%)" }} />
        <div className="glow-line absolute top-0 inset-x-0" />

        <div className="container relative z-10">
          <SectionHeading
            label="What We Install"
            title="Operational infrastructure that runs without you"
            description="We replace manual coordination with self-executing systems. The result is total operational independence."
          />

          <motion.div
            initial="initial" whileInView="animate" viewport={{ once: true }} variants={containerReveal}
            className="mt-16 grid gap-6 md:grid-cols-2"
          >
            {solutions.map((s) => (
              <motion.div key={s.title} variants={itemReveal}>
                <SpotlightCard className="glass-card glass-card-hover animated-border flex flex-col sm:flex-row h-full gap-6 rounded-2xl p-8 group">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl transition-all group-hover:scale-110"
                    style={{ background: "linear-gradient(135deg, rgba(0,229,255,0.2), rgba(99,102,241,0.2))", border: "1px solid rgba(0,229,255,0.25)", boxShadow: "0 0 20px rgba(0,229,255,0.1)" }}>
                    <s.icon size={24} className="text-[#00e5ff]" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-bold text-white mb-3">{s.title}</h3>
                    <p className="text-sm text-white/45 leading-relaxed">{s.desc}</p>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── TESTIMONIALS ────────────────────────────────────────────────── */}
      <section className="py-32 relative overflow-hidden" style={{ background: "#030609" }}>
        <div className="glow-line absolute top-0 inset-x-0" />
        <div className="absolute inset-0 surface-grid opacity-20" />
        <div className="absolute top-0 right-0 w-1/3 h-full pointer-events-none"
          style={{ background: "radial-gradient(ellipse at top right, rgba(99,102,241,0.06) 0%, transparent 70%)" }} />

        <div className="container relative z-10">
          <SectionHeading
            label="In Their Own Words"
            title="What operational leverage looks like"
            description="We build long-term partnerships with our clients. Here is how their businesses changed after implementing Baseline."
          />

          <div className="mt-20 grid gap-6 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
              >
                <SpotlightCard className="glass-card glass-card-hover animated-border rounded-2xl p-8 relative flex flex-col h-full">
                  <div className="absolute top-6 right-8 text-[#00e5ff]/15">
                    <Quote size={48} />
                  </div>
                  <p className="text-base leading-relaxed text-white/65 italic mb-8 relative z-10 font-medium">
                    "{t.quote}"
                  </p>
                  <div className="mt-auto flex items-center gap-4 pt-6 border-t border-white/5">
                    <div className="h-12 w-12 rounded-full flex items-center justify-center shrink-0 font-heading font-black text-sm text-white"
                      style={{ background: "linear-gradient(135deg, rgba(0,229,255,0.3), rgba(99,102,241,0.3))", border: "2px solid rgba(0,229,255,0.2)", boxShadow: "0 0 15px rgba(0,229,255,0.1)" }}>
                      {t.initials}
                    </div>
                    <div>
                      <div className="font-heading font-bold text-base text-white leading-none">{t.author}</div>
                      <div className="text-xs text-[#00e5ff] font-semibold mt-1">{t.role}</div>
                    </div>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOUNDER ─────────────────────────────────────────────────────── */}
      <FounderProfile />

      {/* ── FAQ ─────────────────────────────────────────────────────────── */}
      <section className="py-32 relative" style={{ background: "#030609" }}>
        <div className="glow-line absolute top-0 inset-x-0" />
        <div className="container max-w-3xl">
          <SectionHeading
            label="Clear Answers"
            title="Frequently Asked Questions"
            description="Transparency is one of our operational principles. Here is what most businesses ask before we start."
          />

          <div className="mt-16 space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="glass-card rounded-2xl overflow-hidden transition-all"
                style={{ borderColor: openFaq === i ? "rgba(0,229,255,0.2)" : undefined }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left transition-colors"
                  style={{ background: "transparent" }}
                  onMouseEnter={e => (e.currentTarget.style.background = "rgba(255,255,255,0.02)")}
                  onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
                >
                  <span className="font-heading text-base font-bold text-white/85 pr-4">{faq.q}</span>
                  <div className="rounded-full p-1.5 shrink-0 transition-colors"
                    style={{ background: openFaq === i ? "rgba(0,229,255,0.15)" : "rgba(255,255,255,0.05)", color: openFaq === i ? "#00e5ff" : "rgba(255,255,255,0.4)" }}>
                    {openFaq === i ? <Minus size={14} /> : <Plus size={14} />}
                  </div>
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: openFaq === i ? "auto" : 0, opacity: openFaq === i ? 1 : 0 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 text-sm text-white/45 leading-relaxed border-t border-white/5 pt-4">
                    {faq.a}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeUp}
            className="mt-16 text-center"
          >
            <Link
              to="/book"
              id="faq-cta-btn"
              className="btn-premium group inline-flex items-center gap-2 rounded-full px-10 py-5 text-base font-bold text-[#030609]"
            >
              Secure Your Strategy Call
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
