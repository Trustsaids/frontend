"use client";

import SectionHeading from "@/components/shared/SectionHeading";
import StatCounter from "@/components/shared/StatCounter";
import FadeIn from "@/components/shared/FadeIn";
import { impactStats } from "@/lib/data/impact";

export default function ImpactStats() {
  return (
    <section className="section-y bg-white">
      <div className="container-custom">
        <SectionHeading title="Impact by the Numbers" subtitle="2021 — 2026" />
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-10 sm:grid-cols-3">
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
