import IndustryLandingPage from "@/components/IndustryLandingPage";
import { Zap, Clock, BarChart, Users, MessageSquare, ShieldCheck } from "lucide-react";

const LeadScoringVisual = () => (
    <div className="aspect-video rounded-[2.5rem] bg-[#050a18] p-10 flex flex-col justify-between border border-white/5 relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/5 blur-[100px] rounded-full" />

        <div className="relative z-10">
            <div className="flex items-center gap-3 mb-8">
                <div className="h-10 w-10 rounded-2xl bg-primary/20 flex items-center justify-center text-primary">
                    <Users size={20} />
                </div>
                <div>
                    <div className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">Incoming Lead Triage</div>
                    <div className="text-sm font-bold text-white">Zillow / StreetEasy Feed</div>
                </div>
            </div>

            <div className="space-y-4">
                {[
                    { name: "John D.", score: 98, status: "High Intent" },
                    { name: "Sarah M.", score: 82, status: "Nurturing" }
                ].map((lead, i) => (
                    <div key={i} className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/5">
                        <div className="flex items-center gap-3">
                            <div className="h-2 w-2 rounded-full bg-primary" />
                            <div className="text-xs font-bold text-white">{lead.name}</div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="text-[10px] font-bold text-primary uppercase tracking-widest">{lead.status}</div>
                            <div className="text-sm font-black text-white">{lead.score}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        <div className="relative z-10 mt-6 flex items-center justify-between border-t border-white/5 pt-6">
            <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest leading-none">Auto-Syncing CRM</div>
            <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                    <div key={i} className="h-1 w-4 rounded-full bg-primary opacity-30 animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
                ))}
            </div>
        </div>
    </div>
);

const RealEstateOperations = () => {
    return (
        <IndustryLandingPage
            title="Real Estate Operations"
            subtitle="The High-Volume Property Engine for modern firms."
            description="Stop chasing leads manually. We install the lead triage, qualification, and automated nurturing loops that turn inquiries into signed contracts silently."
            path="/real-estate-operations"
            metrics={[
                { value: "0", label: "Missed follow-ups in 90 days" },
                { value: "320%", label: "Increase in lead booking rate" },
                { value: "24h", label: "Automated nurture cycles" },
            ]}
            problems={[
                { title: "Leads Slipping Through", desc: "Zillow, Streeteasy, and website leads are scattered across inboxes and forgotten." },
                { title: "Bottleneck Souring", desc: "One busy day in the field results in 48 hours of silence for interested prospects." },
                { title: "Manual Data Copying", desc: "Agent time is wasted copying lead contact info from emails into the CRM." },
            ]}
            solutions={[
                { icon: Zap, title: "Infinite Intake Engine", desc: "Leads from every portal are instantly parsed, scored, and routed to the right agent." },
                { icon: MessageSquare, title: "AI-assisted Triage", desc: "Prospects are qualified via automated conversation before they ever reach an agent." },
                { icon: Clock, title: "Persistent Nurture Loops", desc: "If a lead doesn't book immediately, the system engages them for 90 days silently." },
            ]}
            visual={<LeadScoringVisual />}
        />
    );
};

export default RealEstateOperations;
