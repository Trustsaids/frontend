import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import SectionHeading from "@/components/shared/SectionHeading";
import FadeIn from "@/components/shared/FadeIn";
import EwerExplainer from "@/components/peace-hub/EwerExplainer";
import CaseStudy from "@/components/peace-hub/CaseStudy";
import PeaceCapacity from "@/components/peace-hub/PeaceCapacity";
import CtaBanner from "@/components/shared/CtaBanner";
import { peaceImpactStats, peacebuildingNarrative } from "@/lib/data/peaceHub";

export const metadata: Metadata = {
  title: "Peace Hub",
  description:
    "Facilitating conversations before tensions escalate into violence — our Early Warning Early Response system and peacebuilding approach.",
};

export default function PeaceHubPage() {
  return (
    <>
      <PageHero
        title="Peace Hub"
        subtitle="Facilitating conversations before tensions escalate into violence."
      />

      <EwerExplainer />

      <section className="section-y bg-white">
        <div className="container-custom">
          <SectionHeading
            title="Proven Impact"
            subtitle="Measurable results in conflict prevention and peacebuilding"
          />
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {peaceImpactStats.map((stat, idx) => (
              <FadeIn key={stat.label} delay={idx * 0.1}>
                <div className="h-full rounded-xl bg-gradient-to-br from-purple-50 to-blue-50 p-8 text-center">
                  <div className="mb-4 text-5xl font-bold text-purple-600">{stat.value}</div>
                  <h3 className="mb-2 text-xl font-bold text-gray-900">{stat.label}</h3>
                  <p className="text-gray-600">{stat.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CaseStudy />
      <PeaceCapacity />

      <section className="section-y bg-white">
        <div className="container-custom max-w-3xl">
          <FadeIn>
            <h2 className="mb-6 text-3xl font-bold text-gray-900">Our Peacebuilding Effort</h2>
            <p className="mb-2 text-sm font-medium text-green-600">From Conflict to Cohesion</p>
            <p className="mb-8 leading-relaxed text-gray-700">{peacebuildingNarrative.intro}</p>

            <h3 className="mb-4 text-xl font-bold text-gray-900">What we do:</h3>
            <ul className="mb-8 space-y-4">
              {peacebuildingNarrative.whatWeDo.map((item) => (
                <li key={item.title} className="text-gray-700">
                  <strong className="text-gray-900">{item.title}:</strong> {item.description}
                </li>
              ))}
            </ul>

            <div className="mb-6">
              <p className="mb-2 font-semibold text-gray-900">Who we work with:</p>
              <p className="text-gray-700">{peacebuildingNarrative.whoWeWorkWith}</p>
            </div>
            <div className="mb-6">
              <p className="mb-2 font-semibold text-gray-900">Our approach: Local Peace, Lasting Peace</p>
              <p className="text-gray-700">{peacebuildingNarrative.approach}</p>
            </div>
            <div>
              <p className="mb-2 font-semibold text-gray-900">Impact:</p>
              <p className="text-gray-700">{peacebuildingNarrative.impact}</p>
            </div>
          </FadeIn>
        </div>
      </section>

      <CtaBanner
        title="Explore our Peace Hub"
        subtitle="Partner with us to expand early warning systems and peacebuilding to more communities."
        primaryLabel="Partner With Us"
        primaryHref="/get-involved"
        secondaryLabel="Contact Us"
        secondaryHref="/contact"
      />
    </>
  );
}
