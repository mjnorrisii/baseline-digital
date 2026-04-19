import IndustryLandingPage from "@/components/IndustryLandingPage";
import { Zap, Clock, BarChart, Calendar } from "lucide-react";

const ChairScheduleVisual = () => (
    <div className="aspect-video rounded-[1.5rem] bg-[#050a18] flex items-center justify-center border border-white/5 relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />

        <div className="relative z-10 w-full px-8">
            <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2">
                    <Calendar size={14} className="text-primary" />
                    <div className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">Schedule · Today</div>
                </div>
                <div className="text-[10px] font-black text-white/70 uppercase tracking-widest">92% Utilization</div>
            </div>

            <div className="grid grid-cols-3 gap-2 mb-3">
                {["Chair 1", "Chair 2", "Chair 3"].map((chair, i) => (
                    <div key={i} className="text-[9px] font-black uppercase tracking-widest text-muted-foreground text-center">{chair}</div>
                ))}
            </div>

            <div className="grid grid-cols-3 gap-2">
                {[
                    { label: "9:00", s1: "filled", s2: "filled", s3: "filled" },
                    { label: "10:00", s1: "filled", s2: "rescue", s3: "filled" },
                    { label: "11:00", s1: "filled", s2: "filled", s3: "filled" },
                ].map((row, i) => (
                    <>
                        {[row.s1, row.s2, row.s3].map((slot, j) => (
                            <div key={`${i}-${j}`} className={`h-8 rounded-lg flex items-center justify-center text-[9px] font-black uppercase tracking-widest ${
                                slot === 'filled' ? 'bg-primary/20 border border-primary/30 text-primary' :
                                slot === 'rescue' ? 'bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 animate-pulse' :
                                'bg-white/5 border border-white/5 text-white/30'
                            }`}>
                                {slot === 'rescue' ? 'Refilling' : row.label}
                            </div>
                        ))}
                    </>
                ))}
            </div>

            <div className="mt-4 p-2.5 rounded-xl bg-primary/5 border border-primary/20 flex items-center justify-between">
                <div className="text-[10px] font-black text-primary uppercase tracking-[0.1em]">Waitlist Triggered</div>
                <div className="text-[10px] font-bold text-white">Rebooked in 3:42</div>
            </div>
        </div>
    </div>
);

const Dental = () => {
    return (
        <IndustryLandingPage
            title="Dental Clinics"
            subtitle="Dental clinics are paid by the chair, not the patient. We build the systems that keep every chair full."
            description="Stop leaving revenue in empty slots and lapsed recalls. We install the infrastructure that fills cancellations, revives dormant patients, and handles insurance verification without the front desk drowning."
            path="/dental-clinics"
            metrics={[
                { value: "92%", label: "Chair utilization across the schedule" },
                { value: "3 min", label: "Insurance verification per new patient" },
                { value: "< 5 min", label: "Cancellation refilled from waitlist" },
            ]}
            problems={[
                { title: "Empty-Chair Bleed", desc: "An empty chair at 2pm costs a general practice roughly $400. Without an automated waitlist that fires the instant a cancellation hits, that slot stays empty and the revenue is gone for good." },
                { title: "Recall Decay", desc: "Roughly 40% of patients miss their 6-month recall. That's not a reminder problem, it's a system problem. Manual recall lists stop getting worked the moment the front desk gets busy, and busy is every day." },
                { title: "Insurance Bottleneck", desc: "New patient calls at 9am, treatment plan blocked until insurance is verified, first appointment pushed to next week. Half of them never come back. The front desk wastes hours on eligibility checks that a system should handle in seconds." },
            ]}
            solutions={[
                { icon: Zap, title: "Cancellation Rescue System", desc: "The moment a patient cancels, waitlisted patients get auto-texted in priority order with a one-tap booking link. Empty slots refill within minutes instead of staying empty all afternoon." },
                { icon: Clock, title: "Recall Autopilot", desc: "Every patient gets placed on an automated recall sequence based on procedure and risk profile. Reminders escalate across SMS, email, and phone, with rebooking happening without the front desk touching it." },
                { icon: BarChart, title: "Instant Insurance Verification", desc: "Eligibility, coverage, and copay estimates are pulled automatically at the point of booking. New patients get a treatment-ready first visit, and your front desk stops being a call center." },
            ]}
            visual={<ChairScheduleVisual />}
        />
    );
};

export default Dental;
