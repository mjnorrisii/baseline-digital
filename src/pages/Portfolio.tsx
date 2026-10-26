import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { fadeUp, containerReveal, itemReveal } from "@/lib/animations";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import AppBreadcrumbs from "@/components/AppBreadcrumbs";
import { caseStudies } from "@/data/caseStudies";

const Portfolio = () => (
  <div className="min-h-screen pt-32 pb-32">
    <BreadcrumbSchema
      items={[
        { name: "Home", item: "/" },
        { name: "Portfolio", item: "/portfolio" },
      ]}
    />
    <AppBreadcrumbs
      items={[
        { name: "Home", path: "/" },
        { name: "Portfolio" },
      ]}
    />
    <section className="container">
      <SectionHeading
        label="Portfolio"
        title="Operations automation case studies"
        description="Systems I have built as Route Manager and Daily Operations Specialist at DANX Carousel Group, Ishøj terminal, Denmark."
      />

      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={containerReveal}
        className="mt-20 space-y-8"
      >
        {caseStudies.map((c, i) => (
          <motion.article
            key={c.id}
            variants={itemReveal}
            aria-labelledby={`case-${c.id}`}
            className="group relative rounded-3xl glass-card p-10 md:p-12 hover:border-primary/30 transition-all hover:bg-white/[0.05] overflow-hidden"
          >
            <div className="absolute top-0 right-0 h-64 w-64 bg-primary/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none group-hover:bg-primary/10 transition-colors" />

            <div className="relative z-10">
              <div className="mb-4 flex flex-wrap items-center gap-3">
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#00e5ff]">
                  Project {String(i + 1).padStart(2, "0")}
                </span>
                {c.status && (
                  <span className="rounded-full border border-[#00e5ff]/30 bg-[#00e5ff]/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.15em] text-[#00e5ff]">
                    {c.status}
                  </span>
                )}
              </div>
              <h3 id={`case-${c.id}`} className="font-heading text-3xl font-bold mb-8">
                {c.title}
              </h3>

              <div className="grid gap-10 lg:grid-cols-2">
                <div>
                  <h4 className="mb-3 text-sm font-bold uppercase tracking-[0.15em] text-white/60">The problem</h4>
                  <p className="text-lg leading-relaxed text-muted-foreground">{c.problem}</p>
                </div>
                <div>
                  <h4 className="mb-3 text-sm font-bold uppercase tracking-[0.15em] text-white/60">What I built</h4>
                  <p className="text-lg leading-relaxed text-muted-foreground">{c.built}</p>
                  {c.technologies.length > 0 && (
                    <ul className="mt-6 flex flex-wrap gap-3" aria-label="Technologies">
                      {c.technologies.map((t) => (
                        <li
                          key={t}
                          className="rounded-full border border-white/5 bg-white/5 px-4 py-2 text-sm font-medium text-foreground ring-1 ring-white/5"
                        >
                          {t}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>

              <div className="mt-10">
                <h4 className="mb-4 text-sm font-bold uppercase tracking-[0.15em] text-white/60">Skills demonstrated</h4>
                <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {c.skills.map((s) => (
                    <li key={s} className="flex items-center gap-2 text-sm font-medium text-foreground">
                      <CheckCircle2 size={14} className="shrink-0 text-primary" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>

              {c.screenshots.length > 0 && (
                <div className="mt-10 grid gap-6 md:grid-cols-2">
                  {c.screenshots.map((shot) => (
                    <figure key={shot.src} className="overflow-hidden rounded-2xl border border-white/5 bg-white/5">
                      <img src={shot.src} alt={shot.alt} loading="lazy" className="w-full h-auto" />
                      <figcaption className="px-4 py-3 text-sm text-muted-foreground">{shot.caption}</figcaption>
                    </figure>
                  ))}
                </div>
              )}
            </div>
          </motion.article>
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

export default Portfolio;
