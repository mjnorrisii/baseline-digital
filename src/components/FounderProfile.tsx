import { motion } from "framer-motion";
import { fadeUp, itemReveal } from "@/lib/animations";
import { ShieldCheck, Zap, Mail, Twitter, Linkedin } from "lucide-react";

const FounderProfile = () => {
    return (
        <section className="py-32 border-b border-white/5 relative overflow-hidden bg-brand-deep/30">
            <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <motion.div
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        className="order-2 lg:order-1"
                    >
                        <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary mb-8">
                            Founder & Architect
                        </div>
                        <h2 className="font-heading text-4xl font-bold leading-tight md:text-5xl lg:text-6xl mb-8">
                            Built by operators, <br />
                            <span className="text-gradient-electric">for operators.</span>
                        </h2>

                        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                            <p>
                                I founded <strong>Baseline Digital</strong> because I saw too many service businesses hitting a ceiling — not because of their talent, but because of their tools.
                            </p>
                            <p>
                                Operations shouldn't depend on "memory" or manual coordination. When you scale, people make mistakes. Systems don't. I've spent my career designing the industrial-grade infrastructure that lets businesses stop managing tasks and start managing growth.
                            </p>
                        </div>

                        <div className="mt-12 flex flex-wrap gap-8">
                            <div className="flex items-center gap-3">
                                <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                                    <ShieldCheck size={20} />
                                </div>
                                <div className="text-sm font-bold uppercase tracking-widest">10+ Years Ops Experience</div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                                    <Zap size={20} />
                                </div>
                                <div className="text-sm font-bold uppercase tracking-widest">Industrial-Grade Standard</div>
                            </div>
                        </div>

                        <div className="mt-12 pt-12 border-t border-white/5 flex items-center gap-6">
                            <span className="text-sm font-bold text-muted-foreground uppercase tracking-widest">Connect:</span>
                            <div className="flex gap-4">
                                {[
                                    { icon: Linkedin, path: "#" },
                                    { icon: Twitter, path: "#" },
                                    { icon: Mail, path: "mailto:michael@baselinedigital.io" }
                                ].map((s, i) => (
                                    <a key={i} href={s.path} className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-white/10 transition-all border border-white/5">
                                        <s.icon size={18} />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        variants={itemReveal}
                        className="order-1 lg:order-2 relative"
                    >
                        <div className="relative aspect-square md:aspect-[4/5] rounded-[3rem] overflow-hidden group shadow-2xl">
                            <img
                                src="/images/michael-norris.webp"
                                alt="Michael Norris - Founder of Baseline Digital"
                                className="h-full w-full object-cover grayscale brightness-110 group-hover:grayscale-0 transition-all duration-700 hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/80 via-transparent to-transparent opacity-60" />
                        </div>

                        {/* Design accents */}
                        <div className="absolute -top-6 -right-6 h-32 w-32 bg-primary/10 rounded-[2rem] -z-10 blur-xl animate-pulse" />
                        <div className="absolute -bottom-10 -left-10 p-8 glass-card rounded-[2rem] ring-1 ring-primary/30 z-20 backdrop-blur-2xl">
                            <div className="font-heading text-2xl font-bold">Michael Norris</div>
                            <div className="text-sm text-primary font-bold uppercase tracking-widest mt-1">Founder @ Baseline</div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default FounderProfile;
