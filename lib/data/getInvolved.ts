import { HandHeart, Briefcase, HeartHandshake, type LucideIcon } from "lucide-react";

export const involvementWays: {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
  image: string;
  details: string[];
  cta: string;
}[] = [
  {
    icon: HandHeart,
    title: "Partnership",
    description: "Collaborate with us to amplify impact and reach more communities.",
    color: "from-green-600 to-green-700",
    image: "https://images.unsplash.com/photo-1559146699-5df9eedef196?w=600",
    details: [
      "Program funding and co-implementation",
      "Technical assistance and capacity building",
      "Research and knowledge sharing",
      "Advocacy and policy influence",
    ],
    cta: "Explore Partnership",
  },
  {
    icon: Briefcase,
    title: "Careers",
    description: "Join our team of dedicated professionals transforming lives across Nigeria.",
    color: "from-blue-600 to-blue-700",
    image: "https://images.unsplash.com/photo-1630509866818-4c7be20bb76d?w=600",
    details: [
      "Program Officers and Coordinators",
      "M&E and Research specialists",
      "Community mobilizers and trainers",
      "Administrative and support staff",
    ],
    cta: "View Open Positions",
  },
  {
    icon: HeartHandshake,
    title: "Volunteering",
    description: "Contribute your skills and time to support community transformation.",
    color: "from-purple-600 to-purple-700",
    image: "https://images.unsplash.com/photo-1687421419353-db28220cef00?w=600",
    details: [
      "Trauma counseling and psychosocial support",
      "Peace mediation and dialogue facilitation",
      "Vocational training and mentorship",
      "Community outreach and awareness",
    ],
    cta: "Apply to Volunteer",
  },
];

export const partnerCategories = [
  {
    title: "Funding Partners",
    description: "Support our programs through grants, project funding, or core support",
    examples: "Foundations, bilateral agencies, private sector",
  },
  {
    title: "Implementation Partners",
    description: "Collaborate on joint programming and service delivery",
    examples: "NGOs, community organizations, government agencies",
  },
  {
    title: "Technical Partners",
    description: "Provide expertise, training, and capacity building support",
    examples: "Universities, research institutions, consultants",
  },
  {
    title: "Advocacy Partners",
    description: "Join us in influencing policy and systems change",
    examples: "Networks, coalitions, civil society platforms",
  },
];

export const currentPartners = ["Global Fund", "Society for Family Health (SFH)", "Community Partners"];

export const jobOpenings = [
  { title: "Program Officer - Project TRAMHAH", location: "Taraba State", type: "Full-time", deadline: "June 15, 2026" },
  { title: "Peace Mediator - EWER Systems", location: "Benue State", type: "Full-time", deadline: "June 30, 2026" },
  { title: "M&E Specialist", location: "Kaduna (HQ)", type: "Full-time", deadline: "July 10, 2026" },
];

export const contactSubjects = [
  "Partnership Inquiry",
  "Volunteer Interest",
  "Career Opportunities",
  "Program Information",
  "Media & Press",
  "General Inquiry",
];
