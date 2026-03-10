import IndustryLandingPage from "@/components/IndustryLandingPage";
import { Zap, Clock, BarChart, Users, MessageSquare, ShieldCheck } from "lucide-react";

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
        />
    );
};

export default RealEstateOperations;
