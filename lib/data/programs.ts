import { HeartHandshake, ShieldCheck, Sprout, Coins, type LucideIcon } from "lucide-react";

export type Pillar = {
  slug: string;
  icon: LucideIcon;
  title: string;
  subtitle: string;
  description: string;
  color: string; // tailwind gradient classes
  narrative: string[];
  whatWeDo: string;
};

export const pillars: Pillar[] = [
  {
    slug: "trauma-mental-health",
    icon: HeartHandshake,
    title: "Trauma & Mental Health",
    subtitle: "Project TRAMHAH",
    description:
      "Trauma-informed psychosocial support and mental health counseling, with community-based support networks that reduce stigma.",
    color: "from-blue-500 to-blue-600",
    narrative: [
      'In response to the growing mental health needs in Nigeria, Trust Aid designed a program in 2025 titled "Trauma and Mental Health Awareness and Healing – tagged Project TRAMHAH." Its objective is to provide safe spaces where victims or survivors of trauma can share their experiences while we provide the necessary support for their healing journey.',
      "We provide safe, confidential counseling sessions for individuals and communities affected by violence, displacement, natural disasters, and other traumatic events, alongside community healing circles that bring together formerly opposing groups.",
    ],
    whatWeDo:
      "Trust Aid delivers trauma-informed psychosocial support and mental health counseling, while building community-based support networks to reduce stigma around mental illness.",
  },
  {
    slug: "peacebuilding",
    icon: ShieldCheck,
    title: "Peacebuilding",
    subtitle: "EWER Systems",
    description:
      "Community dialogue, mediation, and sustainable social cohesion between conflicting communities.",
    color: "from-purple-500 to-purple-600",
    narrative: [
      "We believe that peace is more than just the absence of violence. It's the presence of trust, justice, and shared opportunity. We work with communities across Kaduna, Taraba, Benue, and Nasarawa States to prevent conflict, resolve disputes, and rebuild relationships torn apart by violence.",
    ],
    whatWeDo:
      "We foster community dialogue, mediation, and sustainable social cohesion. We host structured peace forums between conflicting communities to restore trust, engage youth and traditional leaders in joint community-driven development activities, and de-escalate localized tensions before they break out into active violence.",
  },
  {
    slug: "climate-action",
    icon: Sprout,
    title: "Climate Action",
    subtitle: "Anticipatory Action",
    description:
      "Early warning, early response systems and real-time environmental data to protect vulnerable agricultural communities.",
    color: "from-green-600 to-green-700",
    narrative: [
      "Climate shocks and resource scarcity are among the fastest-growing drivers of conflict in North Central Nigeria. Droughts shrink grazing land, floods destroy farmland, and competition over dwindling water sources pits neighbor against neighbor.",
    ],
    whatWeDo:
      "We deploy early warning, early response systems to mitigate environmental and climate risks through sharing of real-time environmental data to protect vulnerable agricultural communities, and educating rural populations on sustainable farming and eco-friendly energy alternatives.",
  },
  {
    slug: "livelihood-empowerment",
    icon: Coins,
    title: "Livelihood Empowerment",
    subtitle: "VSLA & Vocational Training",
    description:
      "Sustainable economic and vocational skills for the most vulnerable and marginalized populations across Nigeria.",
    color: "from-amber-500 to-amber-600",
    narrative: [
      "Healing and peace are strongest when people can provide for their families. Conflict, displacement, and climate shocks destroy income. Our livelihood programs help people rebuild it — with skills, tools, and hope.",
    ],
    whatWeDo:
      "We equip vulnerable families with sustainable economic and vocational skills, targeting the most vulnerable and marginalized populations across Nigeria, including survivors of violent conflict and banditry attacks, Internally Displaced Persons (IDPs), and survivors of Sexual and Gender-Based Violence (SGBV).",
  },
];

export type ProgramDetail = {
  icon: LucideIcon;
  title: string;
  color: string;
  image: string;
  description: string;
  activities: string[];
  beneficiaries: string;
};

export const programDetails: ProgramDetail[] = [
  {
    icon: HeartHandshake,
    title: "Trauma and Mental Health Awareness and Healing (Project TRAMHAH)",
    color: "from-blue-500 to-blue-600",
    image: "https://images.unsplash.com/photo-1687421419353-db28220cef00?w=800",
    description:
      "Project TRAMHAH is our ongoing community initiative designed to heal the invisible wounds of conflict, banditry, and displacement. Our mission is to restore psychological well-being and emotional stability to vulnerable individuals in conflict-affected regions.",
    activities: [
      "Individual and group counseling sessions",
      "Community healing circles and safe spaces",
      "Psychoeducation and mental health awareness",
      "Training for first responders and caregivers",
      "Peer support group facilitation",
      "Referral pathways for specialized care",
    ],
    beneficiaries:
      "Survivors of banditry attacks, violent conflicts, and Sexual and Gender-Based Violence (SGBV)",
  },
  {
    icon: ShieldCheck,
    title: "Peacebuilding & Conflict Prevention",
    color: "from-purple-500 to-purple-600",
    image: "https://images.unsplash.com/photo-1515657834497-26509e295154?w=800",
    description:
      "We foster community dialogue, mediation, and sustainable social cohesion. We host structured peace forums between conflicting communities to restore trust, engage youth and traditional leaders in joint community-driven development activities, and de-escalate localized tensions before they break out into active violence.",
    activities: [
      "Early Warning Early Response (EWER) systems deployment",
      "Peace committee formation and training",
      "Community dialogue and mediation",
      "Interfaith and intercultural peacebuilding",
      "Conflict sensitivity training",
      "Anticipatory Action for conflict prevention",
    ],
    beneficiaries:
      "Conflict-affected communities, traditional and religious leaders, youth groups",
  },
  {
    icon: Sprout,
    title: "Climate Action & Environmental Resilience",
    color: "from-green-600 to-green-700",
    image: "https://images.unsplash.com/photo-1746014929708-fcb859fd3185?w=800",
    description:
      "We deploy early warning, early response systems to mitigate environmental and climate risks through sharing of real-time environmental data to protect vulnerable agricultural communities, and educating rural populations on sustainable farming and eco-friendly energy alternatives.",
    activities: [
      "Climate-smart agriculture training",
      "Agroforestry and tree planting initiatives",
      "Water conservation and management",
      "Renewable energy solutions (solar training)",
      "Climate adaptation strategies",
      "Environmental advocacy and awareness",
    ],
    beneficiaries: "Smallholder farmers, pastoral communities, women's farming groups",
  },
  {
    icon: Coins,
    title: "Livelihood Empowerment & Economic Inclusion",
    color: "from-amber-500 to-amber-600",
    image: "https://images.unsplash.com/photo-1630509866818-4c7be20bb76d?w=800",
    description:
      "We equip vulnerable families with sustainable economic and vocational skills, targeting the most vulnerable and marginalized populations across Nigeria.",
    activities: [
      "Village Savings and Loan Associations (VSLA)",
      "Vocational and skills training programs",
      "Small business development support",
      "Financial literacy training",
      "Market linkage facilitation",
      "Women's economic empowerment initiatives",
    ],
    beneficiaries:
      "Survivors of violent conflict and banditry attacks, Internally Displaced Persons (IDPs), and survivors of Sexual and Gender-Based Violence (SGBV)",
  },
];
