import IndustryLandingPage from "@/components/IndustryLandingPage";
import { Zap, Clock, BarChart, MessageSquare, CheckCircle2 } from "lucide-react";

const BookingResponseVisual = () => (
    <div className="aspect-video rounded-[1.5rem] bg-[#050a18] flex items-center justify-center border border-white/5 relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
        <div className="relative z-10 w-full px-12">
            <div className="flex justify-between items-end mb-6">
                <div>
                    <div className="text-[10px] font-black uppercase tracking-[0.2em] text-primary mb-1">Inbound Inquiry</div>
                    <div className="flex items-center gap-2">
                        <MessageSquare size={14} className="text-white" />
                        <div className="text-xs font-bold text-white">Instagram DM</div>
                    </div>
                </div>
                <div className="text-right">
                    <div className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground mb-1">Response Time</div>
                    <div className="text-xl font-heading font-black text-primary">47<span className="text-[10px] ml-1">sec</span></div>
                </div>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/5 mb-4">
                <div className="flex items-center justify-between mb-2">
                    <div className="text-xs font-bold text-white">Qualification Score</div>
                    <div className="text-[10px] font-black text-primary uppercase tracking-widest">High Intent</div>
                </div>
                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-primary" style={{ width: '88%' }} />
                </div>
            </div>

            <div className="p-4 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-between">
                <div>
                    <div className="text-[10px] font-black text-primary uppercase tracking-[0.1em] mb-0.5">Auto Booked</div>
                    <div className="text-xs font-bold text-white">Botox Consultation with Dr. Chen</div>
                </div>
                <CheckCircle2 size={18} className="text-primary" />
            </div>
        </div>
    </div>
);

const MedSpas = () => {
    return (
        <IndustryLandingPage
            title="Med Spas"
            subtitle="Med spas live or die by response speed. We build the systems that never sleep."
            description="Stop losing inquiries to slow responses. We install the infrastructure that qualifies, books, and follows up on every lead without the front desk touching it."
            path="/med-spas"
            metrics={[
                { value: "< 60s", label: "Response time on every inquiry" },
                { value: "85%", label: "Reduction in missed appointments" },
                { value: "24/7", label: "Lead qualification and booking" },
            ]}
            problems={[
                { title: "Response Lag", desc: "78% of med spa leads go cold when first response exceeds five minutes. Your front desk cannot match that speed during back to back treatments." },
                { title: "Appointment Bleed", desc: "Without automated SMS cascades, missed appointment rates sit at 20 to 30%. For a spa running three treatment rooms, that is $20K+ in lost revenue monthly." },
                { title: "Review Debt", desc: "Clients forget to leave reviews after treatments. Your best therapists get no social proof while competitors stack five star reviews weekly." },
            ]}
            solutions={[
                { icon: Zap, title: "Instant Lead Triage", desc: "Inquiries from Instagram DMs, website forms, and missed calls are parsed, qualified, and booked in under 60 seconds. Your best time slots sell themselves." },
                { icon: Clock, title: "Confirmation Cascade", desc: "Automated SMS and email sequences fire at set intervals before treatment with one tap confirmation. Missed appointments drop to single digits without the front desk lifting a finger." },
                { icon: BarChart, title: "Review Capture Engine", desc: "Post treatment review requests trigger based on treatment type and therapist. Your Google profile stacks reviews on autopilot." },
            ]}
            visual={<BookingResponseVisual />}
        />
    );
};

export default MedSpas;
