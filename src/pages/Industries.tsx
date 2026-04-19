import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Home, Truck, Sparkles, Wind, Droplet, Smile, Shield } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { fadeUp, containerReveal, itemReveal } from "@/lib/animations";
import AppBreadcrumbs from "@/components/AppBreadcrumbs";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

const industries = [
    {
        icon: Home,
        title: "Real Estate",
        hook: "Your pipeline works while you're in showings",
        path: "/real-estate-operations",
    },
    {
        icon: Truck,
        title: "Logistics",
        hook: "Dispatch without the dispatchers",
        path: "/logistics-automation",
    },
    {
        icon: Sparkles,
        title: "Med Spas",
        hook: "Respond in under a minute, every time",
        path: "/med-spas",
    },
    {
        icon: Wind,
        title: "HVAC",
        hook: "Capture every missed call, book every emergency",
        path: "/hvac",
    },
    {
        icon: Droplet,
        title: "Plumbing",
        hook: "Turn one job into three years of revenue",
        path: "/plumbing",
    },
    {
        icon: Smile,
        title: "Dental Clinics",
        hook: "Fill every chair, revive every recall",
        path: "/dental-clinics",
    },
    {
        icon: Shield,
        title: "Roofing",
        hook: "Close estimates while storms spike leads",
        path: "/roofing",
    },
];

const Industries = () => {
    return (
        <div className="min-h-screen pt-32 pb-32">
            <BreadcrumbSchema items={[{ name: "Home", item: "/" }, { name: "Industries", item: "/industries" }]} />
            <AppBreadcrumbs items={[{ name: "Home", path: "/" }, { name: "Industries" }]} />

            <section className="container">
                <div className="max-w-4xl">
                    <motion.div initial="initial" animate="animate" variants={containerReveal}>
                        <motion.div variants={itemReveal} className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
                            Industry Focus
                        </motion.div>
                        <motion.h1 variants={itemReveal} className="font-heading text-5xl font-bold leading-tight md:text-7xl lg:text-8xl mb-8">
                            The industries we build for.
                        </motion.h1>
                        <motion.p variants={itemReveal} className="text-xl text-muted-foreground leading-relaxed mb-6 max-w-2xl">
                            Every vertical has its own operational bottleneck. Med spas lose leads to slow response times. Plumbers bleed revenue on one and done jobs. Dental clinics forfeit $400 every time a chair sits empty. The pattern underneath is the same: manual work scales linearly, and linear does not survive growth.
                        </motion.p>
                        <motion.p variants={itemReveal} className="text-xl text-muted-foreground leading-relaxed mb-12 max-w-2xl">
                            Baseline Digital installs the software infrastructure that replaces the manual layer. Below are the industries where the playbook is proven. If yours is not listed, the pattern still applies. The implementation is what changes.
                        </motion.p>
                    </motion.div>
                </div>

                <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {industries.map((industry, i) => {
                        const Icon = industry.icon;
                        return (
                            <motion.div
                                key={industry.path}
                                initial="initial"
                                whileInView="animate"
                                viewport={{ once: true }}
                                variants={fadeUp}
                            >
                                <Link
                                    to={industry.path}
                                    className="group relative block glass-card p-8 rounded-3xl border-none ring-1 ring-white/10 hover:ring-primary/40 transition-all duration-300 h-full"
                                >
                                    <div className="h-12 w-12 rounded-2xl bg-primary/10 text-primary mb-6 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                                        <Icon size={22} />
                                    </div>
                                    <h3 className="font-heading text-2xl font-bold mb-3">{industry.title}</h3>
                                    <p className="text-muted-foreground leading-relaxed mb-8">{industry.hook}</p>
                                    <div className="inline-flex items-center gap-2 text-sm font-bold text-primary">
                                        Explore
                                        <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                                    </div>
                                </Link>
                            </motion.div>
                        );
                    })}
                </div>

                <div className="mt-32 text-center max-w-3xl mx-auto">
                    <h2 className="font-heading text-4xl font-bold mb-8">Not sure if your vertical fits?</h2>
                    <p className="text-xl text-muted-foreground mb-12">
                        The playbook is industry-agnostic. If your operation runs on inbound leads, manual scheduling, or recurring customer touchpoints, we can build it.
                    </p>
                    <Link
                        to="/book"
                        className="btn-premium group inline-flex items-center gap-4 rounded-full px-12 py-6 text-xl font-bold text-primary-foreground shadow-2xl transition-all hover:scale-105"
                    >
                        Book Discovery Call
                        <ArrowRight size={26} className="transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Industries;
