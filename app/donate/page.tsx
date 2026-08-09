import type { Metadata } from "next";
import { ShieldCheck, HeartHandshake, Sprout } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import DonationForm from "@/components/forms/DonationForm";

export const metadata: Metadata = {
  title: "Donate",
  description: "Support our mission by making a donation. Every contribution helps transform lives.",
};

const impactPoints = [
  { icon: HeartHandshake, text: "₦10,000 provides a trauma counseling session for a survivor" },
  { icon: Sprout, text: "₦25,000 supplies climate-smart seedlings for a farming household" },
  { icon: ShieldCheck, text: "₦50,000 helps train a community peace monitor for EWER" },
];

export default function DonatePage() {
  return (
    <>
      <PageHero
        title="Donate"
        subtitle="Support our mission by making a donation. Every contribution helps transform lives."
      />

      <section className="section-y bg-gray-50">
        <div className="container-custom grid grid-cols-1 gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <h2 className="mb-6 text-2xl font-bold text-gray-900">Your Impact</h2>
            <ul className="space-y-6">
              {impactPoints.map((point) => {
                const Icon = point.icon;
                return (
                  <li key={point.text} className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-700">
                      <Icon size={22} />
                    </div>
                    <p className="text-gray-700">{point.text}</p>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <DonationForm />
          </div>
        </div>
      </section>
    </>
  );
}
