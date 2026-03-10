import IndustryLandingPage from "@/components/IndustryLandingPage";
import { Zap, ShieldCheck, Clock, BarChart, Users } from "lucide-react";

const LogisticsAutomation = () => {
    return (
        <IndustryLandingPage
            title="Logistics Automation"
            subtitle="The Logistics Industry is built on volume. We build it for speed."
            description="Stop copying data between portals. We install the infrastructure that captures, triages, and executes your freight and dispatch operations silently."
            path="/logistics-automation"
            metrics={[
                { value: "4.2h", label: "Saved per dispatch inquiry" },
                { value: "98%", label: "Reduction in manual entry error" },
                { value: "24/7", label: "Automated status updates" },
            ]}
            problems={[
                { title: "Portal Fatigue", desc: "Drivers and dispatchers wasting hours manually updating 4+ different portals for single shipments." },
                { title: "Status Latency", desc: "Clients calling for updates because the manual tracking hasn't been updated since morning." },
                { title: "Handoff Friction", desc: "Warehouse staff waiting on paperwork that's sitting in an inbox no one checked." },
            ]}
            solutions={[
                { icon: Zap, title: "Self-executing Dispatch", desc: "Leads from tenders are parsed and routed to matching carriers in seconds, not hours." },
                { icon: Clock, title: "Automated Milestone Tracking", desc: "Shipment status is pulled from carriers and pushed to your client portal without human touch." },
                { icon: BarChart, title: "Fleet-wide Triage", desc: "Every bottleneck is visualized on a real-time dashboard. If a load is late, the system alerts you immediately." },
            ]}
        />
    );
};

export default LogisticsAutomation;
