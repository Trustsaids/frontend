import { Radar, Bell, Users2, GraduationCap, HeartHandshake, type LucideIcon } from "lucide-react";

export const ewerSteps: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Radar,
    title: "1. Detection",
    description: "Community monitors identify early warning signs of potential conflict",
  },
  {
    icon: Bell,
    title: "2. Alert",
    description: "Rapid communication to peace committees and stakeholders",
  },
  {
    icon: Users2,
    title: "3. Response",
    description: "Peace committees mediate and de-escalate within 48 hours",
  },
];

export const anticipatoryCycle = [
  { step: "1", title: "Analyze", description: "Historical patterns and triggers" },
  { step: "2", title: "Predict", description: "Likely conflict scenarios" },
  { step: "3", title: "Prepare", description: "Pre-position resources" },
  { step: "4", title: "Act", description: "Before tensions escalate" },
];

export const peaceImpactStats = [
  { value: "200+", label: "Peace Committees Trained", description: "Across Kaduna, Taraba, Benue, and Nasarawa States" },
  { value: "12", label: "Early Warning Alerts Addressed", description: "Successfully de-escalated before violence erupted" },
  { value: "48hrs", label: "Average Response Time", description: "From conflict detection to community intervention" },
  { value: "0", label: "Fatalities in Intervention Zones", description: "From farmer-herder conflicts where EWER was deployed" },
];

export const caseStudyTimeline = [
  { window: "Hour 0-12", detail: "Monitors report unusual livestock movements near farmland" },
  { window: "Hour 12-24", detail: "Peace committee mobilized, stakeholders contacted" },
  { window: "Hour 24-36", detail: "Mediation session held, agreement reached on grazing corridors" },
];

export const peaceCapacityBuilding: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: GraduationCap,
    title: "Peace Committee Training",
    description: "Comprehensive training in conflict analysis, mediation, and dialogue facilitation",
  },
  {
    icon: HeartHandshake,
    title: "Mentorship & Coaching",
    description: "Continuous support and coaching for peace practitioners in the field",
  },
  {
    icon: Users2,
    title: "Community Monitors",
    description: "Continuous training of peace committees and community monitors",
  },
];

export const peacebuildingNarrative = {
  intro:
    "We believe that peace is more than just the absence of violence. It's the presence of trust, justice, and shared opportunity. We work with communities across Kaduna, Taraba, Benue, and Nasarawa States to prevent conflict, resolve disputes, and rebuild relationships torn apart by violence.",
  whatWeDo: [
    {
      title: "Early Warning Early Response (EWER)",
      description:
        "We train community monitors to spot tension signs like hate speech, rumors, blocked grazing routes, and link them to rapid response teams that mediate disputes within 48 hours.",
    },
    {
      title: "Dialogue & Mediation",
      description:
        "We facilitate safe, neutral spaces where opposing groups can speak, listen, and agree on solutions. This includes interfaith dialogues, farmer-herder forums, and youth peace parleys.",
    },
    {
      title: "Conflict-Sensitive Development",
      description:
        'We ensure climate projects, water points, and livelihood programs don\'t accidentally trigger new fights. We use "Do No Harm" tools so that interventions build bridges, not walls.',
    },
    {
      title: "Youth & Women as Peacebuilders",
      description:
        "We train young people and women as peace ambassadors, mediators, and EWER monitors. When those most affected lead the process, peace lasts.",
    },
    {
      title: "Anticipatory Action for Peace",
      description:
        "We use conflict forecasts and climate data to act before violence erupts, like running rumor-control campaigns during elections.",
    },
  ],
  whoWeWorkWith:
    "Communities affected by farmer-herder clashes, ethno-religious violence, and banditry. IDP camps and host communities. Local government, traditional institutions, faith groups, and security actors committed to non-violent solutions.",
  approach:
    "We don't fly in with answers. We support communities to design their own peace. Every process is led by respected local voices, grounded in culture, and focused on practical wins — like sharing a market, reopening a school, or agreeing on water use.",
  impact:
    "When people talk instead of fight, when rumors are replaced by truth, and when groups solve problems together, social cohesion grows. That's how we stop cycles of violence and create communities where everyone belongs. Peace is not an event. It's a skill we build together, one conversation at a time.",
};
