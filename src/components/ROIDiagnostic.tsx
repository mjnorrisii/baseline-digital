import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Calculator, TrendingDown, Clock, ShieldCheck } from "lucide-react";

const ROIDiagnostic = () => {
    const [step, setStep] = useState(1);
    const [leads, setLeads] = useState(50);
    const [value, setValue] = useState(1000);
    const [leakRate, setLeakRate] = useState(20);

    const calculateLeak = () => {
        return (leads * (leakRate / 100) * value).toLocaleString();
    };

    const steps = [
        {
            id: 1,
            title: "Volume",
            label: "How many new inquiries do you receive per month?",
            value: leads,
            setValue: setLeads,
            min: 10,
            max: 500,
            unit: "leads",
        },
        {
            id: 2,
            title: "Value",
            label: "What is your average client lifetime value?",
            value: value,
            setValue: setValue,
            min: 500,
            max: 20000,
            unit: "$",
        },
        {
            id: 3,
            title: "Leakage",
            label: "Estimated percentage of leads that go cold due to manual delays?",
            value: leakRate,
            setValue: setLeakRate,
            min: 5,
            max: 60,
            unit: "%",
        },
    ];

    return (
        <section className="py-32 relative overflow-hidden" style={{ background: "linear-gradient(to bottom, #050a12, #030609)" }}>
            <div className="glow-line absolute top-0 inset-x-0" />
            <div className="absolute inset-0 surface-grid opacity-20" />
            <div className="absolute top-0 left-1/4 w-1/2 h-1/2 rounded-full pointer-events-none"
              style={{ background: "radial-gradient(ellipse, rgba(0,229,255,0.07) 0%, transparent 70%)" }} />

            <div className="container max-w-5xl relative z-10">
                <div className="grid gap-16 lg:grid-cols-[1.2fr_1fr] items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary mb-6">
                            <Calculator size={14} />
                            The True Cost of Manual Operations
                        </div>
                        <h2 className="font-heading text-4xl font-bold leading-tight md:text-5xl lg:text-6xl mb-8">
                            What is your <span className="text-gradient-electric">operational leak</span>?
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                            Broken follow-ups and manual data copying aren't just frustrating — they're expensive. Use our diagnostic tool to see how much revenue you're leaving on the table every month.
                        </p>

                        <div className="space-y-4">
                            {[
                                { icon: TrendingDown, text: "Calculate revenue loss from missed window follow-ups" },
                                { icon: Clock, text: "See immediate ROI potential for automation" },
                                { icon: ShieldCheck, text: "Private, browser-side calculation" },
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3 text-sm font-medium">
                                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                        <item.icon size={16} />
                                    </div>
                                    {item.text}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="glass-card rounded-[2.5rem] p-10 md:p-12 relative overflow-hidden ring-1 ring-white/10 shadow-2xl">
                        <div className="absolute top-0 left-0 w-full h-1 bg-white/5">
                            <motion.div
                                className="h-full bg-primary"
                                initial={{ width: "0%" }}
                                animate={{ width: `${(step / 4) * 100}%` }}
                            />
                        </div>

                        <AnimatePresence mode="wait">
                            {step <= 3 ? (
                                <motion.div
                                    key={`step-${step}`}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="space-y-8"
                                >
                                    <div>
                                        <div className="text-xs font-bold text-primary uppercase tracking-widest mb-2">Step 0{step} of 03</div>
                                        <h3 className="font-heading text-2xl font-bold">{steps[step - 1].label}</h3>
                                    </div>

                                    <div className="space-y-6">
                                        <div className="flex justify-between items-end">
                                            <div className="text-5xl font-heading font-black text-white">
                                                {steps[step - 1].unit === "$" && "$"}
                                                {steps[step - 1].value}
                                                {steps[step - 1].unit === "%" && "%"}
                                                {steps[step - 1].unit === "leads" && <span className="text-lg ml-2 font-bold text-muted-foreground uppercase">leads</span>}
                                            </div>
                                        </div>

                                        <input
                                            type="range"
                                            min={steps[step - 1].min}
                                            max={steps[step - 1].max}
                                            value={steps[step - 1].value}
                                            onChange={(e) => steps[step - 1].setValue(parseInt(e.target.value))}
                                            className="w-full account-slider cursor-pointer accent-primary"
                                            aria-label="Number of accounts"
                                        />
                                    </div>

                                    <button
                                        onClick={() => setStep(step + 1)}
                                        className="w-full btn-premium rounded-2xl py-5 font-bold text-lg flex items-center justify-center gap-2 group"
                                    >
                                        {step === 3 ? "Calculate Loss" : "Next Factor"}
                                        <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
                                    </button>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="results"
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="text-center space-y-8"
                                >
                                    <div className="inline-flex h-20 w-20 items-center justify-center rounded-3xl bg-red-500/10 text-red-500 ring-1 ring-red-500/30 mb-2">
                                        <TrendingDown size={40} />
                                    </div>

                                    <div>
                                        <div className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-1">Monthly Revenue Leak</div>
                                        <div className="text-6xl font-heading font-black text-red-500 tracking-tighter">
                                            ${calculateLeak()}
                                        </div>
                                    </div>

                                    <p className="text-sm text-muted-foreground px-4 leading-relaxed">
                                        Based on your inputs, this is the amount of revenue you are silently losing to operational inefficiency every single month.
                                    </p>

                                    <div className="pt-4 space-y-4">
                                        <Link
                                            to="/book"
                                            className="w-full btn-premium rounded-2xl py-5 font-bold text-lg flex items-center justify-center gap-2"
                                        >
                                            Patch the Leak
                                            <ArrowRight size={20} />
                                        </Link>
                                        <button
                                            onClick={() => setStep(1)}
                                            className="text-muted-foreground hover:text-white text-sm font-semibold transition-colors"
                                        >
                                            Recalculate Numbers
                                        </button>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ROIDiagnostic;
