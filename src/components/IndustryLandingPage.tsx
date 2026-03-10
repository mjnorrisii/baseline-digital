import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ShieldCheck, Zap, BarChart, Users } from "lucide-react";
import { Link } from "react-router-dom";
import SectionHeading from "@/components/SectionHeading";
import { fadeUp, containerReveal, itemReveal } from "@/lib/animations";
import AppBreadcrumbs from "@/components/AppBreadcrumbs";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

interface IndustryPageProps {
    title: string;
    subtitle: string;
    description: string;
    path: string;
    problems: { title: string; desc: string }[];
    solutions: { icon: any; title: string; desc: string }[];
    metrics: { value: string; label: string }[];
    visual?: React.ReactNode;
}

const IndustryLandingPage = ({ title, subtitle, description, path, problems, solutions, metrics, visual }: IndustryPageProps) => {
    return (
        <div className="min-h-screen pt-32 pb-32">
            <BreadcrumbSchema items={[{ name: "Home", item: "/" }, { name: title, item: path }]} />
            <AppBreadcrumbs items={[{ name: "Home", path: "/" }, { name: title }]} />

            <section className="container">
                <div className="max-w-4xl">
                    <motion.div
                        initial="initial"
                        animate="animate"
                        variants={containerReveal}
                    >
                        <motion.div variants={itemReveal} className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
                            Industry Focus: {title}
                        </motion.div>
                        <motion.h1 variants={itemReveal} className="font-heading text-5xl font-bold leading-tight md:text-7xl lg:text-8xl mb-8">
                            {subtitle}
                        </motion.h1>
                        <motion.p variants={itemReveal} className="text-xl text-muted-foreground leading-relaxed mb-12 max-w-2xl">
                            {description}
                        </motion.p>
                        <motion.div variants={itemReveal}>
                            <Link
                                to="/book"
                                className="btn-premium group inline-flex items-center gap-3 rounded-full px-10 py-5 text-xl font-bold text-primary-foreground shadow-2xl transition-all hover:scale-105"
                            >
                                Book Industry Discovery
                                <ArrowRight size={22} className="transition-transform group-hover:translate-x-1" />
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Impact Metrics */}
                <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {metrics.map((m, i) => (
                        <motion.div
                            key={i}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                            variants={fadeUp}
                            className="glass-card rounded-3xl p-10 flex flex-col items-center text-center border-none ring-1 ring-white/10"
                        >
                            <div className="text-5xl font-heading font-black text-primary mb-4">{m.value}</div>
                            <div className="text-sm font-bold uppercase tracking-widest text-muted-foreground">{m.label}</div>
                        </motion.div>
                    ))}
                </div>

                {/* Problems */}
                <div className="mt-32">
                    <SectionHeading
                        label="The Challenge"
                        title="Where manual operations fail"
                        align="left"
                    />
                    <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {problems.map((p, i) => (
                            <motion.div
                                key={i}
                                initial="initial"
                                whileInView="animate"
                                viewport={{ once: true }}
                                variants={itemReveal}
                                className="glass-card p-10 rounded-3xl border-none ring-1 ring-white/5 bg-secondary/20"
                            >
                                <div className="h-10 w-10 rounded-xl bg-red-500/10 text-red-500 mb-6 flex items-center justify-center">
                                    <Zap size={20} />
                                </div>
                                <h3 className="font-heading text-xl font-bold mb-4">{p.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">{p.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Solutions */}
                <div className="mt-32 py-32 bg-primary/5 rounded-[3rem] px-10 md:px-20 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/10 blur-[120px] rounded-full" />

                    <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <SectionHeading
                                label="The Infrastructure"
                                title="Industrial-grade systems for your vertical"
                                align="left"
                            />
                            <div className="mt-12 space-y-4">
                                {solutions.map((s, i) => (
                                    <div key={i} className="flex gap-6 items-start">
                                        <div className="h-12 w-12 shrink-0 rounded-2xl bg-primary flex items-center justify-center text-primary-foreground">
                                            <s.icon size={24} />
                                        </div>
                                        <div>
                                            <h4 className="font-heading text-xl font-bold mb-2">{s.title}</h4>
                                            <p className="text-muted-foreground">{s.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="glass-card p-4 rounded-[2rem] ring-1 ring-white/10">
                            {visual ? (
                                visual
                            ) : (
                                <div className="aspect-video rounded-[1.5rem] bg-brand-deep flex items-center justify-center border border-white/5 relative overflow-hidden group">
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
                                    <div className="text-primary font-heading font-bold text-lg opacity-50 group-hover:opacity-100 transition-opacity">Built for Scale</div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div className="mt-32 text-center max-w-3xl mx-auto">
                    <h2 className="font-heading text-4xl font-bold mb-8">Stop managing tasks. Start managing systems.</h2>
                    <p className="text-xl text-muted-foreground mb-12">
                        We install the software infrastructure that turns your manual operation into a self-executing engine.
                    </p>
                    <Link
                        to="/book"
                        className="btn-premium group inline-flex items-center gap-4 rounded-full px-12 py-6 text-xl font-bold text-primary-foreground shadow-2xl transition-all hover:scale-105"
                    >
                        Begin Deployment
                        <ArrowRight size={26} className="transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default IndustryLandingPage;
