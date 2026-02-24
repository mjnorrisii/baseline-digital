import { useEffect } from "react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";

const expectations = [
  "We will review your current operations and identify the highest-impact automation opportunities.",
  "You should be prepared to describe your lead flow, service delivery process, and current tools.",
  "This call is for established businesses with existing revenue and operational volume.",
  "There is no obligation. If we are not a fit, we will tell you directly.",
];

const BookCall = () => {
  useEffect(() => {
    const w = window as any;
    const initCal = () => {
      w.Cal("init", "30min", { origin: "https://app.cal.com" });
      w.Cal.ns["30min"]("inline", {
        elementOrSelector: "#my-cal-inline-30min",
        config: { layout: "month_view", useSlotsViewOnSmallScreen: "true" },
        calLink: "mjnorrisii/30min",
      });
      w.Cal.ns["30min"]("ui", { hideEventTypeDetails: false, layout: "month_view" });
    };

    if (w.Cal) {
      initCal();
    } else {
      const script = document.createElement("script");
      script.src = "https://app.cal.com/embed/embed.js";
      script.async = true;
      script.onload = () => initCal();
      document.head.appendChild(script);
    }
  }, []);

  return (
    <div className="min-h-screen pt-16">
      <section className="border-b border-border py-20">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                label="Book a call"
                title="Schedule a strategy session"
                description="30 minutes. No pitch deck. We discuss your operations, identify where automation will have the most impact, and determine if working together makes sense."
              />
              <div className="space-y-4">
                <p className="text-sm font-medium text-foreground">What to expect</p>
                {expectations.map((e, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.08 }}
                    className="flex gap-3 text-sm text-muted-foreground"
                  >
                    <span className="mt-0.5 text-primary">--</span>
                    <span>{e}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Cal.com inline embed */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="min-h-[600px] overflow-hidden rounded-lg border border-border"
            >
              <div
                id="my-cal-inline-30min"
                style={{ width: "100%", height: "100%", minHeight: 600, overflow: "auto" }}
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookCall;
