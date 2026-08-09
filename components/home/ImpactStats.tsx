"use client";

import SectionHeading from "@/components/shared/SectionHeading";
import StatCounter from "@/components/shared/StatCounter";
import FadeIn from "@/components/shared/FadeIn";
import { impactStats } from "@/lib/data/impact";

export default function ImpactStats() {
  return (
    <section className="section-y bg-white">
      <div className="container-custom">
        <SectionHeading title="Impact by the Numbers" subtitle="2012 — 2026" />
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {impactStats.map((stat, idx) => (
            <FadeIn key={stat.label} delay={idx * 0.1}>
              <StatCounter {...stat} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
