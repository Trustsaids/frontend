"use client";

import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import SafeImage from "@/components/shared/SafeImage";
import FadeIn from "@/components/shared/FadeIn";
import { involvementWays } from "@/lib/data/getInvolved";

const ctaHrefs: Record<string, string> = {
  Partnership: "/our-partners",
  Careers: "#openings",
  Volunteering: "/volunteer",
};

export default function InvolvementWays() {
  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
      {involvementWays.map((way, idx) => {
        const Icon = way.icon;
        return (
          <FadeIn key={way.title} delay={idx * 0.1}>
            <div className="flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-lg">
              <div className="relative h-48">
                <SafeImage src={way.image} alt={way.title} />
                <div
                  className={`absolute left-6 top-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${way.color} shadow-lg`}
                >
                  <Icon className="text-white" size={28} />
                </div>
              </div>
              <div className="flex flex-1 flex-col p-8">
                <h3 className="mb-2 text-2xl font-bold text-gray-900">{way.title}</h3>
                <p className="mb-4 text-gray-600">{way.description}</p>
                <ul className="mb-6 flex-1 space-y-2">
                  {way.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-2 text-sm text-gray-600">
                      <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-green-600" />
                      {detail}
                    </li>
                  ))}
                </ul>
                <Link
                  href={ctaHrefs[way.title] ?? "/contact"}
                  className="inline-flex items-center justify-center rounded-lg bg-green-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-green-700"
                >
                  {way.cta}
                </Link>
              </div>
            </div>
          </FadeIn>
        );
      })}
    </div>
  );
}
