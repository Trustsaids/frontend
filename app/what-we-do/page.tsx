import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import ProgramPillars from "@/components/home/ProgramPillars";
import CtaBanner from "@/components/shared/CtaBanner";
import FadeIn from "@/components/shared/FadeIn";
import SectionHeading from "@/components/shared/SectionHeading";

export const metadata: Metadata = {
  title: "What We Do",
  description:
    "Explore our programs in trauma healing, peacebuilding, climate action, livelihood empowerment, and research and good governance.",
};

export default function WhatWeDoPage() {
  return (
    <>
      <PageHero
        title="What We Do"
        subtitle="Explore our programs in trauma healing, peacebuilding, climate action, livelihood empowerment, and research and good governance."
      />

      <ProgramPillars />

      <section className="section-y bg-white">
        <div className="container-custom max-w-4xl">
          <SectionHeading title="The Interconnected Cycle of our Thematic Areas" />
          <FadeIn>
            <p className="text-lg leading-relaxed text-gray-700">
              When unaddressed Trauma and Mental Health issues paralyze individuals, they lose
              the capacity to sustain productive Livelihoods and engage in constructive
              Peacebuilding, which can fuel community conflict. This internal instability leaves
              populations unprepared to adapt to the external shocks of Climate Change or other
              challenging events of life, deepening the cycle of crisis. Through rigorous Research
              and Good Governance, policymakers understand these human vulnerabilities, design and
              implement holistic interventions that address the psychological well-being, rebuild
              economies, and protect the environment simultaneously.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="bg-white py-12 text-center">
        <FadeIn>
          <Link
            href="/programs"
            className="inline-flex items-center gap-2 font-semibold text-green-700 hover:text-green-800"
          >
            See detailed program activities and beneficiaries
            <ArrowRight size={18} />
          </Link>
        </FadeIn>
      </section>

      <CtaBanner />
    </>
  );
}
