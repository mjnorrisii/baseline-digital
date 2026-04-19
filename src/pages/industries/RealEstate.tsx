import IndustryLandingPage from "@/components/IndustryLandingPage";
import { Zap, Clock, BarChart, Users } from "lucide-react";

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
            title="Real Estate"
            subtitle="Real estate is won in the first five minutes. We build the systems that never miss them."
            description="Stop losing leads to slow response times and cold CRMs. We install the infrastructure that qualifies inquiries instantly, nurtures prospects without manual follow up, and keeps your pipeline working while you're in showings."
            path="/real-estate-operations"
            metrics={[
                { value: "< 90s", label: "First response to every new lead" },
                { value: "4.1x", label: "Lift in lead-to-appointment conversion" },
                { value: "24/7", label: "Pipeline nurture across every channel" },
            ]}
            problems={[
                { title: "Response Lag", desc: "Most real estate leads convert with the agent who replies first. If your average response time is over five minutes, you're losing to competitors with SMS automation while you're mid-showing." },
                { title: "Pipeline Rot", desc: "Your CRM has 1,800 leads in it. Maybe 40 are getting touched this month. The rest are a dead asset that used to cost you $30 per lead in ads, now sitting idle because no one has time to work them." },
                { title: "Coordination Tax", desc: "Showing requests, follow up calls, open house confirmations, listing updates. Agents burn 10+ hours a week on coordination work that has nothing to do with selling homes." },
            ]}
            solutions={[
                { icon: Zap, title: "Instant Lead Qualification", desc: "Inbound leads from Zillow, website forms, and IDX get auto qualified, scored, and routed to the right agent within 90 seconds, with a first touch already sent before you pick up the phone." },
                { icon: Clock, title: "Pipeline Nurture Engine", desc: "Every lead gets placed on a behavior-based sequence: open house follow ups, neighborhood updates, price drops on saved searches. Cold leads warm up without a single manual touch." },
                { icon: BarChart, title: "Showing and Comms Automation", desc: "Showing requests auto-book into your calendar with confirmation cascades. Listing changes trigger client updates. Your admin work drops by 10+ hours a week without adding staff." },
            ]}
            visual={<LeadScoringVisual />}
        />
    );
};

export default RealEstateOperations;
