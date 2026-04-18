import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const terminalLines = [
  { text: "> Initializing ops engine...", delay: 600 },
  { text: "> Scanning workflow graph [12 nodes]", delay: 1600, color: "text-white/60" },
  { text: "> ALERT: Bottleneck at Step 04 — Manual Entry", delay: 3000, color: "text-amber-400" },
  { text: "> Deploying automation schema v2.4...", delay: 4400 },
  { text: "> Trigger: New Lead Captured [source: Typeform]", delay: 5600, color: "text-[#00e5ff]" },
  { text: "> CRM sync complete (94ms)", delay: 6600, color: "text-emerald-400" },
  { text: "> Slack notification → #sales-team", delay: 7800, color: "text-white/60" },
  { text: "> Follow-up sequence armed (T+24h)", delay: 9000, color: "text-[#00e5ff]" },
  { text: "> System nominal. All 12 nodes OK ✓", delay: 10400, color: "text-emerald-400" },
];

export default function LiveActivityTerminal() {
  const [lines, setLines] = useState<typeof terminalLines>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex >= terminalLines.length) {
      const timeout = setTimeout(() => {
        setLines([]);
        setCurrentIndex(0);
      }, 5000);
      return () => clearTimeout(timeout);
    }

    const delay =
      currentIndex === 0
        ? terminalLines[0].delay
        : terminalLines[currentIndex].delay - terminalLines[currentIndex - 1].delay;

    const timeout = setTimeout(() => {
      setLines((prev) => [...prev, terminalLines[currentIndex]]);
      setCurrentIndex((prev) => prev + 1);
    }, delay);

    return () => clearTimeout(timeout);
  }, [currentIndex]);

  return (
    <div className="relative w-full rounded-2xl overflow-hidden border border-white/8 shadow-2xl"
      style={{ background: "rgba(0,0,0,0.7)", backdropFilter: "blur(32px)" }}>
      
      {/* Top glow accent */}
      <div className="absolute top-0 inset-x-0 h-px" style={{ background: "linear-gradient(to right, transparent, #00e5ff44, transparent)" }} />

      {/* Terminal Header */}
      <div className="flex items-center gap-2 border-b border-white/6 px-4 py-3"
        style={{ background: "rgba(255,255,255,0.02)" }}>
        <div className="flex gap-1.5">
          <div className="h-3 w-3 rounded-full bg-red-500/80" style={{ boxShadow: "0 0 8px rgba(239,68,68,0.5)" }} />
          <div className="h-3 w-3 rounded-full bg-amber-400/80" style={{ boxShadow: "0 0 8px rgba(251,191,36,0.5)" }} />
          <div className="h-3 w-3 rounded-full bg-emerald-400/80" style={{ boxShadow: "0 0 8px rgba(52,211,153,0.5)" }} />
        </div>
        <div className="mx-auto flex items-center gap-2">
          <div className="pulse-dot" />
          <span className="text-[10px] font-mono text-white/35 tracking-[0.2em] uppercase">Baseline_Ops_Engine • Live</span>
        </div>
      </div>

      {/* Terminal Body */}
      <div className="p-5 h-[280px] overflow-hidden font-mono text-[13px] leading-relaxed flex flex-col justify-end">
        <div className="space-y-1.5">
          <AnimatePresence>
            {lines.map((line, i) => (
              <motion.div
                key={`${i}-${line.text}`}
                initial={{ opacity: 0, filter: "blur(4px)", x: -6 }}
                animate={{ opacity: 1, filter: "blur(0px)", x: 0 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className={`${line.color || "text-white/55"}`}
              >
                {line.text}
              </motion.div>
            ))}
            {lines.length > 0 && lines.length < terminalLines.length && (
              <motion.div
                animate={{ opacity: [1, 0, 1] }}
                transition={{ repeat: Infinity, duration: 0.75 }}
                className="w-2 h-[1em] inline-block"
                style={{ background: "#00e5ff", boxShadow: "0 0 8px #00e5ff" }}
              />
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Footer status bar */}
      <div className="border-t border-white/5 px-5 py-2 flex items-center justify-between">
        <span className="text-[10px] font-mono text-white/25">v2.4.1 • encrypted • 0 errors</span>
        <span className="text-[10px] font-mono text-emerald-400/70">● operational</span>
      </div>
    </div>
  );
}
