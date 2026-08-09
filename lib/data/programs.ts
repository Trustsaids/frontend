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
      "Providing psychosocial support and trauma healing to survivors of conflict, banditry, and displacement.",
    color: "from-blue-500 to-blue-600",
    narrative: [
      'In response to the growing mental health needs in Nigeria, Trust Aid designed a program in 2025 titled "Trauma and Mental Health Awareness and Healing – tagged Project TRAMHAH." Its objective is to provide safe spaces where victims or survivors of trauma can share their experiences while we provide the necessary support for their healing journey.',
      "We provide safe, confidential counseling sessions for individuals and communities affected by violence, displacement, natural disasters, and other traumatic events, alongside community healing circles that bring together formerly opposing groups.",
    ],
    whatWeDo:
      "Individual and group counseling, community healing circles, psychoeducation, and training for first responders and caregivers on secondary trauma.",
  },
  {
    slug: "peacebuilding",
    icon: ShieldCheck,
    title: "Peacebuilding",
    subtitle: "EWER Systems",
    description:
      "Early Warning Early Response systems for conflict prevention and community mediation.",
    color: "from-purple-500 to-purple-600",
    narrative: [
      "We believe that peace is more than just the absence of violence. It's the presence of trust, justice, and shared opportunity. We work with communities across Kaduna, Taraba, Benue, and Nasarawa States to prevent conflict, resolve disputes, and rebuild relationships torn apart by violence.",
    ],
    whatWeDo:
      "We bring together farmers, herders, youth, women, religious leaders, and traditional rulers to address the root causes of conflict before they turn deadly. Our work combines early warning early response (EWER) systems with community dialogue and mediation.",
  },
  {
    slug: "climate-action",
    icon: Sprout,
    title: "Climate Action",
    subtitle: "Anticipatory Action",
    description:
      "Climate-smart agriculture and environmental resilience for vulnerable communities.",
    color: "from-green-600 to-green-700",
    narrative: [
      "Climate shocks and resource scarcity are among the fastest-growing drivers of conflict in North Central Nigeria. Droughts shrink grazing land, floods destroy farmland, and competition over dwindling water sources pits neighbor against neighbor.",
    ],
    whatWeDo:
      "We equip smallholder farmers and pastoral communities with climate-smart agriculture training, agroforestry and tree planting initiatives, water conservation practices, and renewable energy solutions — reducing both climate vulnerability and the conflicts it fuels.",
  },
  {
    slug: "livelihood-empowerment",
    icon: Coins,
    title: "Livelihood Empowerment",
    subtitle: "VSLA & Vocational Training",
    description:
      "Village Savings & Loan Associations and skills training for sustainable income generation.",
    color: "from-amber-500 to-amber-600",
    narrative: [
      "Healing and peace are strongest when people can provide for their families. Conflict, displacement, and climate shocks destroy income. Our livelihood programs help people rebuild it — with skills, tools, and hope.",
    ],
    whatWeDo:
      "We equip vulnerable youth, women, widows, and displaced families with practical, market-driven skills that generate income quickly and sustainably, through Village Savings and Loan Associations, vocational training, and small business development support.",
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
    title: "Trauma & Mental Health (Project TRAMHAH)",
    color: "from-blue-500 to-blue-600",
    image: "https://images.unsplash.com/photo-1687421419353-db28220cef00?w=800",
    description:
      "Comprehensive psychosocial support and trauma healing services for communities affected by conflict and violence.",
    activities: [
      "Individual and group counseling sessions",
      "Community healing circles and safe spaces",
      "Psychoeducation and mental health awareness",
      "Training for first responders and caregivers",
      "Peer support group facilitation",
      "Referral pathways for specialized care",
    ],
    beneficiaries:
      "Survivors of banditry, IDPs, first responders, women and children affected by violence",
  },
  {
    icon: ShieldCheck,
    title: "Peacebuilding & Conflict Prevention",
    color: "from-purple-500 to-purple-600",
    image: "https://images.unsplash.com/photo-1515657834497-26509e295154?w=800",
    description:
      "Building sustainable peace through early warning systems, community mediation, and social cohesion programs.",
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
      "Promoting climate-smart agriculture and environmental sustainability to protect vulnerable communities.",
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
      "Creating sustainable income opportunities through savings groups, vocational training, and enterprise development.",
    activities: [
      "Village Savings and Loan Associations (VSLA)",
      "Vocational and skills training programs",
      "Small business development support",
      "Financial literacy training",
      "Market linkage facilitation",
      "Women's economic empowerment initiatives",
    ],
    beneficiaries:
      "Women's groups, youth, marginalized communities, aspiring entrepreneurs",
  },
];
