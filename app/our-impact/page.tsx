import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import SectionHeading from "@/components/shared/SectionHeading";
import ImpactStats from "@/components/home/ImpactStats";
import SuccessStories from "@/components/impact/SuccessStories";
import TestimonialCard from "@/components/shared/TestimonialCard";
import FadeIn from "@/components/shared/FadeIn";
import CtaBanner from "@/components/shared/CtaBanner";
import { testimonials } from "@/lib/data/impact";

export const metadata: Metadata = {
  title: "Our Impact",
  description: "Real stories, measurable change, and lasting transformation across Nigeria.",
};

export default function OurImpactPage() {
  return (
    <>
      <PageHero
        title="Our Impact"
        subtitle="Real stories, measurable change, and lasting transformation across Nigeria"
      />

      <ImpactStats />

      <section className="section-y bg-gray-50">
        <div className="container-custom">
          <SectionHeading
            title="Success Stories"
            subtitle="Deep dives into transformative programs across four states"
          />
          <SuccessStories />
        </div>
      </section>

      <section className="section-y bg-white">
        <div className="container-custom">
          <SectionHeading
            title="Voices from the Field"
            subtitle="Hear directly from those whose lives have been transformed"
          />
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {testimonials.map((t, idx) => (
              <FadeIn key={t.author} delay={idx * 0.1}>
                <TestimonialCard {...t} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
