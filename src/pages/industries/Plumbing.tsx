import IndustryLandingPage from "@/components/IndustryLandingPage";
import { Zap, Clock, BarChart, Droplet } from "lucide-react";

const CustomerLifecycleVisual = () => (
    <div className="aspect-video rounded-[1.5rem] bg-[#050a18] flex items-center justify-center border border-white/5 relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />

        <div className="relative z-10 w-full px-10">
            <div className="flex items-center gap-3 mb-6">
                <div className="h-8 w-8 rounded-xl bg-primary/20 flex items-center justify-center text-primary">
                    <Droplet size={14} />
                </div>
                <div>
                    <div className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">Customer Lifecycle</div>
                    <div className="text-xs font-bold text-white">Record · #RH-4821</div>
                </div>
            </div>

            <div className="space-y-2">
                {[
                    { label: "Day 0", event: "Drain Cleared", status: "Complete", active: true },
                    { label: "Day 2", event: "Review Request Sent", status: "Opened", active: true },
                    { label: "Month 6", event: "Maintenance Reminder", status: "Queued", active: false },
                    { label: "Month 12", event: "Water Heater Check", status: "Queued", active: false },
                ].map((step, i) => (
                    <div key={i} className={`flex items-center justify-between p-2.5 rounded-xl border ${step.active ? 'bg-primary/5 border-primary/20' : 'bg-white/5 border-white/5'}`}>
                        <div className="flex items-center gap-3">
                            <div className={`h-1.5 w-1.5 rounded-full ${step.active ? 'bg-primary' : 'bg-white/20'}`} />
                            <div className="text-[10px] font-black uppercase tracking-widest text-muted-foreground w-16">{step.label}</div>
                            <div className="text-xs font-bold text-white">{step.event}</div>
                        </div>
                        <div className={`text-[10px] font-black uppercase tracking-widest ${step.active ? 'text-primary' : 'text-white/30'}`}>{step.status}</div>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

const Plumbing = () => {
    return (
        <IndustryLandingPage
            title="Plumbing"
            subtitle="Plumbers win on the second call, not the first. We build the systems that earn it."
            description="Stop treating every job like a one-off. We install the infrastructure that turns emergency calls into recurring customers, with maintenance plans, follow-ups, and re-bookings running on their own."
            path="/plumbing"
            metrics={[
                { value: "3.2x", label: "Lifetime value per captured customer" },
                { value: "67%", label: "Of past customers re-engaged on autopilot" },
                { value: "< 48hr", label: "Post-job follow-up dispatched every time" },
            ]}
            problems={[
                { title: "One-and-Done Jobs", desc: "A burst pipe pays once. The same homeowner needs a water heater, a disposal, and a drain clean within 3 years. Without a follow-up system, that revenue walks to whoever sends the first postcard." },
                { title: "Dead Customer Database", desc: "You have 2,000 past customer records sitting in your CRM doing nothing. No birthday touch, no maintenance reminder, no seasonal check-in. That's a $200K+ asset rotting on a hard drive." },
                { title: "Review Gap", desc: "You do great work. The customer forgets your name within 72 hours. No review, no referral, no reason for the neighbor to call you instead of the Google ad at the top of the page." },
            ]}
            solutions={[
                { icon: Zap, title: "Post-Job Re-engagement Engine", desc: "Every completed job triggers a scheduled cascade: 48-hour review request, 6-month maintenance check, 12-month water heater inspection. Your calendar fills itself from last year's customers." },
                { icon: Clock, title: "Database Revival System", desc: "Your dormant CRM gets segmented and activated: seasonal reminders for boiler season, targeted offers for customers with aging water heaters, win-back sequences for anyone silent over 18 months." },
                { icon: BarChart, title: "Review and Referral Autopilot", desc: "Happy customers get a review request while the truck is still in the driveway. Referral incentives trigger automatically for your top accounts. Your Google profile compounds without you lifting a finger." },
            ]}
            visual={<CustomerLifecycleVisual />}
        />
    );
};

export default Plumbing;
