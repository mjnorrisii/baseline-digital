export type CaseStudyStatus = null | "Pilot" | "Design stage";

export interface CaseStudyScreenshot {
  src: string;
  alt: string;
  caption: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  status: CaseStudyStatus;
  problem: string;
  built: string;
  technologies: string[];
  skills: string[];
  screenshots: CaseStudyScreenshot[];
}

export const caseStudies: CaseStudy[] = [
  {
    id: "scannerCustodyTracker",
    title: "Scanner Custody Tracker",
    status: "Pilot",
    problem:
      "Handheld scanners passed between drivers and terminal operators with no reliable record of who held which device. This led to lost time and unclear accountability.",
    built:
      "I built a custody tracking system that reads handoff messages from a Microsoft Teams channel, uses AI to parse them, and validates the driver. Each transaction is logged to Excel Online, and overdue alerts are raised. The system includes duplicate protection, a bot loop guard, and shared secret authentication on its webhooks. Rollout was staged through a private test chat before the live channel. The project is currently under formal architecture and security review.",
    technologies: ["Power Automate", "Microsoft Teams", "SharePoint", "Excel Online", "n8n webhooks", "Claude API"],
    skills: [
      "Workflow automation",
      "AI assisted parsing",
      "Webhook security",
      "Failure handling",
      "Staged rollout",
      "Stakeholder review",
    ],
    screenshots: [],
  },
  {
    id: "openShipmentReport",
    title: "Open Shipment Report (Phase 1)",
    status: "Pilot",
    problem: "Exceptions in open shipments were found late. Status data sat in raw exports.",
    built:
      "I built a read only workflow that takes TrackIT exports, applies business rules to exclude closed shipments and flag stale or missing statuses, and sends a color coded HTML summary by email. Phase 2, covering write back and scheduling, depends on API access.",
    technologies: ["TrackIT exports", "HTML email summary"],
    skills: ["Data processing", "Business rule design", "Exception reporting", "Phased delivery"],
    screenshots: [],
  },
  {
    id: "incidentDashboard",
    title: "Incident Dashboard and Case Timing",
    status: null,
    problem:
      "Incident cases had no consistent measure of how long they stayed open. The measure needed to run from open to closed.",
    built:
      "I built an Excel Online dashboard and a Power Automate flow that times each case from open to closed and handles reopened cases. History is stored separately, so the source report is never changed. I developed and tested everything on a copy before going live.",
    technologies: ["Power Automate", "SharePoint", "Excel Online"],
    skills: ["Power Automate", "SharePoint", "Excel Online", "Data integrity", "Testing before going live"],
    screenshots: [],
  },
  {
    id: "routeDepartureFramework",
    title: "Route Departure Hold or Release Decision Framework",
    status: "Design stage",
    problem:
      "Departure delays were caused by misorted packages or late linehaul arrivals. They were handled inconsistently.",
    built:
      "I designed a structured decision framework covering triggers, time limited checks, reassignment to routes with spare capacity, and escalation to Control Tower. It is designed for later automation.",
    technologies: [],
    skills: ["Process design", "Operations logic", "Edge case analysis"],
    screenshots: [],
  },
  {
    id: "routeOptimization",
    title: "Route Optimization with Address API",
    status: null,
    problem: "Some routes were capacity constrained. They needed better stop allocation.",
    built:
      "I built a route optimization process using the Danish address API (DAWA). It was applied across a set of constrained routes and covered hundreds of parcels.",
    technologies: ["DAWA (Danish address API)"],
    skills: ["API integration", "Geographic data", "Logistics planning"],
    screenshots: [],
  },
  {
    id: "routeStopCount",
    title: "Route Stop Count Workflow",
    status: null,
    problem:
      "Stop counts per route per night were inconsistent between reports. A single agreed counting method was needed.",
    built:
      "I built a repeatable workflow that turns TrackIT exports into unique stop counts per route. The counting rules are documented, were agreed with colleagues, and were validated against Power BI figures.",
    technologies: ["TrackIT exports", "Power BI (reference source)"],
    skills: ["Data validation", "Rule definition", "Reconciliation against a reference source"],
    screenshots: [],
  },
  {
    id: "adrCompliance",
    title: "ADR Compliance Tracking",
    status: null,
    problem:
      "Certification status for drivers and transport contractors was difficult to monitor. It was also difficult to chase.",
    built: "I set up tracking across two regions and a templated communication process for contractors.",
    technologies: [],
    skills: ["Compliance management", "Regulatory awareness (ADR)", "Stakeholder communication"],
    screenshots: [],
  },
  {
    id: "operationsAutomation",
    title: "Operations Automation and AI Agent",
    status: null,
    problem: "Routine route list updates were manual and repetitive. So were routine administrative tasks.",
    built:
      "I built a daily file generator in Power Automate that keeps route lists current, and set up recurring Outlook automatic replies. I also built a Copilot Studio operations agent with SharePoint, Teams, and Mail access, which is pending licensing.",
    technologies: ["Power Automate", "Outlook", "Copilot Studio", "SharePoint", "Microsoft Teams"],
    skills: ["Power Automate", "Copilot Studio", "Microsoft 365 administration"],
    screenshots: [],
  },
];
