import IndustryLandingPage from "@/components/IndustryLandingPage";
import { Zap, Clock, BarChart, FileSignature, CloudLightning } from "lucide-react";

const EstimatePipelineVisual = () => (
    <div className="aspect-video rounded-[1.5rem] bg-[#050a18] flex items-center justify-center border border-white/5 relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />

        <div className="relative z-10 w-full px-8 grid grid-cols-2 gap-4">
            <div>
                <div className="flex items-center gap-2 mb-4">
                    <FileSignature size={12} className="text-primary" />
                    <div className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">Estimate Pipeline</div>
                </div>
                <div className="space-y-1.5">
                    {[
                        { day: "D0", event: "Sent", done: true },
                        { day: "D1", event: "Opened", done: true },
                        { day: "D2", event: "Testimonial", done: true },
                        { day: "D5", event: "Financing", done: true },
                        { day: "D8", event: "Signed", done: false, active: true },
                    ].map((step, i) => (
                        <div key={i} className={`flex items-center gap-2 p-2 rounded-lg ${step.active ? 'bg-primary/10 border border-primary/30' : step.done ? 'bg-white/5' : 'bg-white/5 border border-white/5'}`}>
                            <div className="text-[9px] font-black text-muted-foreground uppercase tracking-widest w-6">{step.day}</div>
                            <div className={`h-1 w-1 rounded-full ${step.done || step.active ? 'bg-primary' : 'bg-white/20'}`} />
                            <div className={`text-[10px] font-bold ${step.active ? 'text-primary' : 'text-white'}`}>{step.event}</div>
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <div className="flex items-center gap-2 mb-4">
                    <CloudLightning size={12} className="text-yellow-400" />
                    <div className="text-[10px] font-black uppercase tracking-[0.2em] text-yellow-400">Storm Surge</div>
                </div>
                <div className="p-4 rounded-xl bg-yellow-400/5 border border-yellow-400/20 mb-3">
                    <div className="text-[9px] font-black text-muted-foreground uppercase tracking-widest mb-1">Inbound · 3hrs</div>
                    <div className="text-2xl font-heading font-black text-white">127 <span className="text-[10px] text-yellow-400">leads</span></div>
                </div>
                <div className="p-3 rounded-xl bg-primary/5 border border-primary/20">
                    <div className="text-[9px] font-black text-primary uppercase tracking-widest mb-1">Auto Triaged</div>
                    <div className="text-xs font-bold text-white">43 high priority</div>
                </div>
            </div>
        </div>
    </div>
);

const Roofing = () => {
    return (
        <IndustryLandingPage
            title="Roofing"
            subtitle="Roofing is sold in the follow-up, not the estimate. We build the systems that close them."
            description="Stop losing $20K jobs to slow follow-ups and lost photos. We install the infrastructure that nurtures estimates to close, absorbs storm-lead spikes without hiring, and turns every job site into marketing ammunition."
            path="/roofing"
            metrics={[
                { value: "47%", label: "Lift in estimate-to-signed conversion" },
                { value: "10x", label: "Lead capacity during storm surges" },
                { value: "100%", label: "Jobs documented with before and after" },
            ]}
            problems={[
                { title: "Estimate Graveyard", desc: "A roofer delivers an estimate and waits. Meanwhile, the homeowner is getting three more quotes and deciding on the sales rep who followed up first. Without an automated nurture sequence, half your estimates die in silence." },
                { title: "Storm-Lead Overwhelm", desc: "A hailstorm hits and inbound leads spike 10x overnight. Your office can't triage fast enough, the best leads go cold, and the competition with a system wins the high-ticket insurance jobs while you're still returning voicemails." },
                { title: "Documentation Chaos", desc: "Before and after photos live on the crew's phones, get lost in group chats, or never make it off the job site. No warranty records, no social proof, no marketing content, and no defense when a customer disputes the work a year later." },
            ]}
            solutions={[
                { icon: Zap, title: "Estimate-to-Close Nurture", desc: "Every estimate triggers a multi-touch sequence: same-day thank-you, 48-hour testimonial drop, 5-day financing reminder, 10-day scarcity close. Prospects who would have ghosted end up signing." },
                { icon: Clock, title: "Storm-Surge Lead Engine", desc: "Inbound leads are auto-qualified by damage type, insurance status, and urgency. High-value jobs hit the sales manager instantly, low-value ones get routed to self-service scheduling. Your team handles 10x volume without adding headcount." },
                { icon: BarChart, title: "Job-Site Documentation System", desc: "Crews submit before and after photos through a guided mobile workflow. Images auto-tag to the job record, populate warranty files, and feed your marketing pipeline. Every completed roof becomes a testimonial asset." },
            ]}
            visual={<EstimatePipelineVisual />}
        />
    );
};

export default Roofing;
