import { motion } from "framer-motion";
import { fadeUp, itemReveal } from "@/lib/animations";
import { ShieldCheck, Zap, Mail, Linkedin, Award } from "lucide-react";

const FounderProfile = () => {
  return (
    <section className="py-32 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #050a12, #030609)" }}>
      {/* Background elements */}
      <div className="absolute inset-0 surface-grid opacity-20" />
      <div className="absolute bottom-0 right-0 w-1/2 h-2/3 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at bottom right, rgba(0,229,255,0.05) 0%, transparent 70%)" }} />
      <div className="glow-line absolute top-0 inset-x-0" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left: Content */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeUp}
            className="order-2 lg:order-1"
          >
            <div className="mb-8">
              <span className="section-label">
                <Award size={12} />
                Founder &amp; Architect
              </span>
            </div>

            <h2 className="font-heading text-4xl font-black leading-tight md:text-5xl lg:text-6xl mb-8">
              <span className="text-gradient-hero">Built by operators,</span>
              <br />
              <span className="text-[#00e5ff]" style={{ textShadow: "0 0 40px rgba(0,229,255,0.25)" }}>
                for operators.
              </span>
            </h2>

            <div className="space-y-5 text-base text-white/50 leading-relaxed border-l-2 border-[#00e5ff]/20 pl-6">
              <p>
                I founded <strong className="text-white/80">Baseline Digital</strong> because I saw too many service businesses hitting a ceiling — not because of their talent, but because of their tools.
              </p>
              <p>
                Operations shouldn't depend on "memory" or manual coordination. When you scale, people make mistakes. Systems don't. I've spent my career designing the industrial-grade infrastructure that lets businesses stop managing tasks and start managing growth.
              </p>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-2 gap-4">
              {[
                { icon: ShieldCheck, label: "10+ Years", sublabel: "Ops Experience" },
                { icon: Zap, label: "Industrial-Grade", sublabel: "Build Standard" },
              ].map((stat, i) => (
                <div key={i} className="glass-card rounded-2xl p-5 flex items-center gap-4 border border-white/5"
                  style={{ background: "rgba(0,229,255,0.02)" }}>
                  <div className="h-10 w-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: "rgba(0,229,255,0.08)", border: "1px solid rgba(0,229,255,0.15)" }}>
                    <stat.icon size={18} className="text-[#00e5ff]" />
                  </div>
                  <div>
                    <div className="font-heading font-bold text-sm text-white">{stat.label}</div>
                    <div className="text-xs text-white/35 mt-0.5 uppercase tracking-widest">{stat.sublabel}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div className="mt-10 pt-10 border-t border-white/5 flex items-center gap-4">
              <span className="text-xs font-bold text-white/25 uppercase tracking-widest">Connect:</span>
              <div className="flex gap-3">
                {[
                  { icon: Linkedin, path: "https://www.linkedin.com/in/mjnorrisii", label: "LinkedIn" },
                  { icon: Mail, path: "mailto:michael@baselinedigital.dk", label: "Email" },
                ].map((s, i) => (
                  <a
                    key={i}
                    href={s.path}
                    target={s.path.startsWith("http") ? "_blank" : undefined}
                    rel={s.path.startsWith("http") ? "noopener noreferrer" : undefined}
                    aria-label={s.label}
                    className="h-10 w-10 rounded-full flex items-center justify-center text-white/40 hover:text-[#00e5ff] transition-all border border-white/8 hover:border-[#00e5ff]/30 hover:bg-[#00e5ff]/5"
                    style={{ backdropFilter: "blur(8px)" }}
                  >
                    <s.icon size={16} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Photo */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={itemReveal}
            className="order-1 lg:order-2 relative"
          >
            {/* Glow behind photo */}
            <div className="absolute -inset-6 rounded-[3rem]"
              style={{ background: "radial-gradient(ellipse, rgba(0,229,255,0.08) 0%, transparent 70%)" }} />

            <div className="relative rounded-[2.5rem] overflow-hidden group shadow-2xl"
              style={{ border: "1px solid rgba(255,255,255,0.06)", aspectRatio: "4/5" }}>
              <img
                src="/images/michael-norris.webp"
                alt="Michael Norris - Founder of Baseline Digital"
                className="h-full w-full object-cover grayscale brightness-110 group-hover:grayscale-0 transition-all duration-700 hover:scale-105"
              />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(3,6,9,0.85) 0%, transparent 50%)" }} />
            </div>

            {/* Design accent */}
            <div className="absolute -top-4 -right-4 h-24 w-24 rounded-3xl -z-10 blur-2xl"
              style={{ background: "rgba(0,229,255,0.15)" }} />

            {/* Name card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute -bottom-6 -left-6 glass-card rounded-2xl p-6 z-20 border"
              style={{ backdropFilter: "blur(24px)", borderColor: "rgba(0,229,255,0.2)", boxShadow: "0 0 30px rgba(0,229,255,0.08)" }}
            >
              <div className="font-heading text-xl font-black text-white">Michael Norris</div>
              <div className="text-xs text-[#00e5ff] font-bold uppercase tracking-widest mt-1">Founder @ Baseline Digital</div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default FounderProfile;
