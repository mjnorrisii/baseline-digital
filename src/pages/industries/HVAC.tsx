import IndustryLandingPage from "@/components/IndustryLandingPage";
import { Zap, Clock, BarChart, Phone, MapPin } from "lucide-react";

const DispatchBoardVisual = () => (
    <div className="aspect-video rounded-[1.5rem] bg-[#050a18] flex items-center justify-center border border-white/5 relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/5 blur-[100px] rounded-full" />

        <div className="relative z-10 w-full px-10">
            <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 mb-5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <Phone size={14} className="text-red-400" />
                    <div>
                        <div className="text-[10px] font-black text-red-400 uppercase tracking-[0.1em] mb-0.5">Inbound Emergency</div>
                        <div className="text-xs font-bold text-white">AC Down · 2.3mi away</div>
                    </div>
                </div>
                <div className="text-[10px] font-black text-primary uppercase tracking-widest">Auto Routing</div>
            </div>

            <div className="space-y-2.5">
                {[
                    { name: "Mike R.", status: "En Route", color: "bg-primary" },
                    { name: "Jason T.", status: "On Site", color: "bg-yellow-400" },
                    { name: "Derek M.", status: "Available", color: "bg-green-500" },
                ].map((tech, i) => (
                    <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5">
                        <div className="flex items-center gap-3">
                            <div className={`h-2 w-2 rounded-full ${tech.color} animate-pulse`} />
                            <div className="text-xs font-bold text-white">{tech.name}</div>
                        </div>
                        <div className="flex items-center gap-2">
                            <MapPin size={10} className="text-muted-foreground" />
                            <div className="text-[10px] font-black text-white/70 uppercase tracking-widest">{tech.status}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

const HVAC = () => {
    return (
        <IndustryLandingPage
            title="HVAC"
            subtitle="HVAC runs on emergency calls. We build the systems that book them while you're on a roof."
            description="Stop losing same-day jobs to voicemail. We install the infrastructure that captures every call, dispatches the right tech, and keeps customers informed without the office scrambling."
            path="/hvac"
            metrics={[
                { value: "< 2 min", label: "Inbound call to dispatched tech" },
                { value: "$4K+", label: "Recovered per missed-call month" },
                { value: "24/7", label: "After-hours booking and triage" },
            ]}
            problems={[
                { title: "Missed-Call Revenue Leak", desc: "Roughly 30% of HVAC inbound calls go to voicemail, and 80% of those callers never call back. For a 3-truck operation that's $40K+ in lost jobs per year." },
                { title: "Dispatch Chaos", desc: "Office staff juggling a whiteboard, three techs on the phone, and a spreadsheet. One scheduling conflict and the whole day cascades into overtime or cancellations." },
                { title: "Invoice Drift", desc: "Techs finish the job, forget to log parts, and the invoice sits for a week. Cash flow bleeds while the office chases paperwork instead of booking the next job." },
            ]}
            solutions={[
                { icon: Zap, title: "Real-Time Call Capture", desc: "Missed calls are auto-texted within seconds with a booking link and an AI-qualified ETA. Callers book themselves before they try your competitor." },
                { icon: Clock, title: "Smart Dispatch Router", desc: "Jobs are auto-assigned based on tech skill, location, and current job status. The office stops playing Tetris and starts running the business." },
                { icon: BarChart, title: "Field-to-Invoice Pipeline", desc: "Techs log parts and photos on the phone. Invoice generates and sends before the truck leaves the driveway. Payment clears before the next call-out." },
            ]}
            visual={<DispatchBoardVisual />}
        />
    );
};

export default HVAC;
