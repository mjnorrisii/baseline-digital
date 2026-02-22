import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";

const expectations = [
  "We will review your current operations and identify the highest-impact automation opportunities.",
  "You should be prepared to describe your lead flow, service delivery process, and current tools.",
  "This call is for established businesses with existing revenue and operational volume.",
  "There is no obligation. If we are not a fit, we will tell you directly.",
];

const BookCall = () => (
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

          {/* Calendar embed placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center rounded-lg border border-border bg-card p-12"
          >
            <div className="text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-secondary">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-primary">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
              </div>
              <p className="font-heading text-lg font-semibold text-heading">Calendar Embed</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Replace this placeholder with your scheduling tool embed (Cal.com, Calendly, etc.)
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  </div>
);

export default BookCall;
