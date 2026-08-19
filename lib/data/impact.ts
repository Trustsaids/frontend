import { Sprout, GraduationCap, HeartHandshake, type LucideIcon } from "lucide-react";

export const impactStats: { icon: LucideIcon; number: string; label: string; color: string }[] = [
  {
    icon: Sprout,
    number: "1,000+",
    label: "Rural farmers trained on climate-smart and eco-friendly farming in Kaduna State",
    color: "text-green-600",
  },
  {
    icon: GraduationCap,
    number: "6,000+",
    label: "Women and youths given vocational training across Kaduna, Taraba, Benue, Nasarawa States, and the FCT",
    color: "text-blue-600",
  },
  {
    icon: HeartHandshake,
    number: "100+",
    label: "Clients provided trauma counseling services",
    color: "text-purple-600",
  },
];

export const successStories = [
  {
    state: "Taraba",
    title: "Vocational Training and Healing",
    image: "/images/success-story-taraba.jpeg",
    description:
      "Through Project TRAMHAH, we provided vocational training and trauma healing support to approximately 100 widows in Wukari LGA, equipping them with practical skills for economic independence while supporting their emotional recovery.",
  },
  {
    state: "Abuja",
    title: "Empowering Women Through Vocational Training",
    image: "/images/success-story-abuja.jpeg",
    description:
      "In Abuja, we provided vocational training to 1,000+ women, equipping them with practical skills to build sustainable livelihoods and strengthen household income.",
  },
  {
    state: "Kaduna",
    title: "Climate-Smart and Eco-Friendly Farming",
    image: "/images/success-story-kaduna.jpeg",
    description:
      "We work with farmers in Kaduna State to adopt climate-smart, eco-friendly farming practices, including drought-resistant crops and sustainable water management, strengthening food security and resilience to a changing climate.",
  },
];

export const testimonials: {
  quote: string;
  author: string;
  location: string;
  image: string;
}[] = [];
