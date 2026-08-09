import { Users, HeartHandshake, PiggyBank, ShieldCheck, type LucideIcon } from "lucide-react";

export const impactStats: { icon: LucideIcon; number: string; label: string; color: string }[] = [
  { icon: Users, number: "50,000+", label: "Lives Impacted", color: "text-blue-600" },
  { icon: HeartHandshake, number: "15,000+", label: "Trauma Survivors Supported", color: "text-purple-600" },
  { icon: PiggyBank, number: "8,500+", label: "VSLA Members", color: "text-green-600" },
  { icon: ShieldCheck, number: "200+", label: "Peace Committees Trained", color: "text-amber-600" },
];

export const successStories = [
  {
    state: "Taraba",
    title: "Healing and Reconciliation in Wukari",
    image: "https://images.unsplash.com/photo-1515657834497-26509e295154?w=800",
    description:
      "Through Project TRAMHAH, we provided trauma healing services to 3,000 survivors of communal conflicts in Wukari LGA. Community healing circles brought together formerly opposing groups, leading to a 70% reduction in violent incidents over 18 months.",
    impact: [
      "3,000 individuals received psychosocial support",
      "45 healing circles conducted",
      "70% reduction in conflict incidents",
      "12 peace committees established",
    ],
  },
  {
    state: "Benue",
    title: "EWER System Prevents Farmer-Herder Conflict",
    image: "https://images.unsplash.com/photo-1658129850537-ea7517a9682f?w=800",
    description:
      "Our Early Warning Early Response system in Makurdi identified tensions over grazing routes and enabled rapid mediation. Within 48 hours, community leaders negotiated a peaceful resolution, preventing what could have escalated into violence.",
    impact: [
      "12 early warning alerts successfully addressed",
      "Zero fatalities from farmer-herder conflicts in intervention zones",
      "150 community monitors trained",
      "48-hour average response time maintained",
    ],
  },
  {
    state: "Nasarawa",
    title: "Women's Economic Transformation Through VSLA",
    image: "https://images.unsplash.com/photo-1630509866818-4c7be20bb76d?w=800",
    description:
      "In Lafia, 2,500 women joined Village Savings and Loan Associations, enabling access to capital for small businesses. Members reported an average 60% increase in household income within one year.",
    impact: [
      "2,500 women enrolled in VSLA groups",
      "60% average increase in household income",
      "₦45 million mobilized in savings",
      "850 small businesses started or expanded",
    ],
  },
  {
    state: "Kaduna",
    title: "Climate-Smart Agriculture and Malaria Prevention",
    image: "https://images.unsplash.com/photo-1746014929708-fcb859fd3185?w=800",
    description:
      "As part of our Global Fund partnership, we integrated climate-smart farming with malaria prevention education. Farmers adopted drought-resistant crops and water management practices that also reduced mosquito breeding sites.",
    impact: [
      "1,800 farmers trained in climate-smart agriculture",
      "30% increase in crop yields",
      "40% reduction in malaria cases in intervention communities",
      "500 solar-powered water pumps installed",
    ],
  },
];

export const testimonials = [
  {
    quote:
      "After losing my husband to bandits, I thought I would never heal. The trauma counseling and support group gave me hope again. Now I help other widows find their strength.",
    author: "Amina, TRAMHAH Beneficiary",
    location: "Taraba State",
    image: "https://images.unsplash.com/photo-1674469772109-197a5c6cfa39?w=400",
  },
  {
    quote:
      "The VSLA changed everything for my family. I started a small tailoring business with a loan from our group. Today, I employ three other women and my children are in school.",
    author: "Grace, VSLA Member",
    location: "Nasarawa State",
    image: "https://images.unsplash.com/photo-1630509866818-4c7be20bb76d?w=400",
  },
  {
    quote:
      "As a peace committee member, I've seen our EWER system stop conflicts before they start. We're building trust between communities that haven't spoken in years.",
    author: "Musa, Community Peace Monitor",
    location: "Benue State",
    image: "https://images.unsplash.com/photo-1597684233833-329bf7035965?w=400",
  },
];
