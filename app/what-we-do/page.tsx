import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import ProgramPillars from "@/components/home/ProgramPillars";
import CtaBanner from "@/components/shared/CtaBanner";

export const metadata: Metadata = {
  title: "What We Do",
  description:
    "Explore our programs in trauma healing, peacebuilding, climate action, and livelihood empowerment.",
};

export default function WhatWeDoPage() {
  return (
    <>
      <PageHero
        title="What We Do"
        subtitle="Explore our programs in trauma healing, peacebuilding, climate action, and livelihood empowerment."
      />

      <ProgramPillars />

      <section className="bg-white py-12 text-center">
        <Link
          href="/programs"
          className="inline-flex items-center gap-2 font-semibold text-green-700 hover:text-green-800"
        >
          See detailed program activities and beneficiaries
          <ArrowRight size={18} />
        </Link>
      </section>

      <CtaBanner />
    </>
  );
}
