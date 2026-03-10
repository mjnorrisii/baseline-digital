import { useEffect } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Calendar, Clock, Globe, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import SectionHeading from "@/components/SectionHeading";
import { fadeUp, itemReveal } from "@/lib/animations";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import AppBreadcrumbs from "@/components/AppBreadcrumbs";

const expectations = [
  { title: "Operational Audit", desc: "We review your current tool stack and identify the manual bottlenecks costing you the most time." },
  { title: "System Blueprint", desc: "A high-level architecture proposal for how self-executing workflows would look in your business." },
  { title: "Investment Model", desc: "Clear pricing and ROI projection based on the complexity of your operational needs." },
  { title: "Direct Feedback", desc: "If we can't solve your specific problem with industrial-grade systems, we'll tell you immediately." },
];

const BookCall = () => {
  useEffect(() => {
    (function (C, A, L) {
      let p = function (a: any, ar: any) { a.q.push(ar); };
      let d = C.document;
      (C as any).Cal = (C as any).Cal || function () {
        let cal = (C as any).Cal;
        let ar = arguments;
        if (!cal.loaded) {
          cal.ns = {};
          cal.q = cal.q || [];
          d.head.appendChild(d.createElement("script")).src = A;
          cal.loaded = true;
        }
        if (ar[0] === L) {
          const api: any = function () { p(api, arguments); };
          const namespace = ar[1];
          api.q = api.q || [];
          if (typeof namespace === "string") {
            cal.ns[namespace] = cal.ns[namespace] || api;
            p(cal.ns[namespace], ar);
            p(cal, ["initNamespace", namespace]);
          } else p(cal, ar);
          return;
        }
        p(cal, ar);
      };
    })(window, "https://app.cal.com/embed/embed.js", "init");

    const w = window as any;
    w.Cal("init", "30min", { origin: "https://app.cal.com" });

    w.Cal.ns["30min"]("inline", {
      elementOrSelector: "#my-cal-inline-30min",
      config: { layout: "month_view", useSlotsViewOnSmallScreen: "true" },
      calLink: "mjnorrisii/30min",
    });

    w.Cal.ns["30min"]("ui", { hideEventTypeDetails: true, layout: "month_view" });
  }, []);

  return (
    <div className="min-h-screen pt-24 pb-20">
      <BreadcrumbSchema
        items={[
          { name: "Home", item: "/" },
          { name: "Book a Call", item: "/book" },
        ]}
      />
      <AppBreadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Book a Call" },
        ]}
      />
      <div className="container">
        <Link to="/" className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-primary transition-colors mb-12">
          <ArrowLeft size={16} />
          Back to Home
        </Link>

        <div className="grid gap-16 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <motion.div
              initial="initial"
              animate="animate"
              variants={fadeUp}
            >
              <SectionHeading
                label="Strategy Session"
                title="Secure Your Operational Blueprint"
                description="30 minutes to identify exactly where your operations are leaking revenue. No pitch deck, just architecture."
                align="left"
              />

              <div className="mt-12 space-y-8">
                {expectations.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * i + 0.3 }}
                    className="flex gap-4"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <CheckCircle2 size={20} />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-foreground">{item.title}</h4>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-12 p-6 rounded-2xl glass-card border-none ring-1 ring-white/5 bg-primary/5">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    <Calendar size={18} />
                  </div>
                  <div>
                    <div className="text-sm font-bold">1:1 Strategy Call</div>
                    <div className="text-xs text-muted-foreground">Limited availability per week</div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-4 pt-4 border-t border-white/5">
                  <div className="flex items-center gap-2 text-xs font-semibold text-muted-foreground">
                    <Clock size={14} className="text-primary" />
                    30 Minutes
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-muted-foreground">
                    <Globe size={14} className="text-primary" />
                    Zoom / Google Meet
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-3 min-h-[700px] overflow-hidden rounded-3xl glass-card border-none ring-1 ring-white/10 shadow-2xl relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
            <div
              id="my-cal-inline-30min"
              className="h-full w-full"
              style={{ minHeight: "700px" }}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default BookCall;
