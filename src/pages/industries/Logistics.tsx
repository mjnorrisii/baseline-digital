import IndustryLandingPage from "@/components/IndustryLandingPage";
import { Zap, ShieldCheck, Clock, BarChart, Users } from "lucide-react";

const DispatchVisual = () => (
    <div className="aspect-video rounded-[1.5rem] bg-[#050a18] flex items-center justify-center border border-white/5 relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
        <div className="relative z-10 w-full px-12">
            <div className="flex justify-between items-end mb-8">
                <div>
                    <div className="text-[10px] font-black uppercase tracking-[0.2em] text-primary mb-1">System Status</div>
                    <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                        <div className="text-xs font-bold text-white uppercase tracking-widest">Active Dispatch Engine</div>
                    </div>
                </div>
                <div className="text-right">
                    <div className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground mb-1">Throughput</div>
                    <div className="text-xl font-heading font-black text-white">1,242 <span className="text-[10px] text-primary">units/hr</span></div>
                </div>
            </div>

            <div className="space-y-3">
                {[75, 45, 90].map((w, i) => (
                    <div key={i} className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-primary"
                            style={{ width: `${w}%`, transition: 'width 2s ease-in-out' }}
                        />
                    </div>
                ))}
            </div>

            <div className="mt-8 flex justify-center">
                <div className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-lg flex items-center gap-2">
                    <Zap size={14} className="text-primary fill-primary" />
                    <span className="text-[10px] font-black text-primary uppercase tracking-[0.1em]">Auto-Routing Enabled</span>
                </div>
            </div>
        </div>

        {/* Decorative scanline */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent h-1 w-full animate-scan" />
    </div>
);

const LogisticsAutomation = () => {
    return (
        <IndustryLandingPage
            title="Logistics"
            subtitle="Logistics is built on volume. We build it for speed."
            description="Stop copying data between portals and chasing status updates. We install the infrastructure that captures, triages, and executes your freight and dispatch operations silently."
            path="/logistics-automation"
            metrics={[
                { value: "4.2h", label: "Saved per dispatch inquiry" },
                { value: "98%", label: "Reduction in manual entry error" },
                { value: "24/7", label: "Automated status updates" },
            ]}
            problems={[
                { title: "Portal Fatigue", desc: "Dispatchers burning hours manually updating four or more carrier portals for every shipment. Same data entered four times, four chances for error, zero leverage." },
                { title: "Status Latency", desc: "Clients calling for updates because your tracking hasn't been touched since the morning standup. Every status call is a dispatcher pulled off live operations to read a screen back to a customer." },
                { title: "Handoff Friction", desc: "Warehouse staff waiting on paperwork that's sitting in an inbox no one checked. Loads sit, trucks idle, and the cost of the delay compounds down the chain." },
            ]}
            solutions={[
                { icon: Zap, title: "Self Executing Dispatch", desc: "Tenders are parsed and routed to matching carriers in seconds. Rate confirmations, load assignments, and driver notifications fire without a dispatcher touching the keyboard." },
                { icon: Clock, title: "Automated Milestone Tracking", desc: "Shipment status is pulled from carrier APIs and pushed to your client portal in real time. Customers see every milestone without a single phone call routed through dispatch." },
                { icon: BarChart, title: "Fleet Wide Triage", desc: "Every bottleneck visualized on a real time dashboard. Late loads, idle trucks, and stalled handoffs trigger alerts the moment they happen, not the moment a client complains." },
            ]}
            visual={<DispatchVisual />}
        />
    );
};

export default LogisticsAutomation;
