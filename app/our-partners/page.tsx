import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import SectionHeading from "@/components/shared/SectionHeading";
import FadeIn from "@/components/shared/FadeIn";
import CtaBanner from "@/components/shared/CtaBanner";
import { currentPartners, partnerCategories } from "@/lib/data/getInvolved";

export const metadata: Metadata = {
  title: "Our Partners",
  description: "Meet the organizations and partners who support our work across Nigeria.",
};

export default function OurPartnersPage() {
  return (
    <>
      <PageHero
        title="Our Partners"
        subtitle="Meet the organizations and partners who support our work across Nigeria."
      />

      <section className="section-y bg-white">
        <div className="container-custom">
          <SectionHeading
            title="Ways to Partner"
            subtitle="We collaborate across four key partnership categories"
          />

          <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            {partnerCategories.map((cat, idx) => (
              <FadeIn key={cat.title} delay={idx * 0.08}>
                <div className="h-full rounded-xl bg-white p-8 shadow-md">
                  <h3 className="mb-4 text-2xl font-bold text-gray-900">{cat.title}</h3>
                  <p className="mb-4 text-gray-700">{cat.description}</p>
                  <p className="text-sm text-gray-600">
                    <strong>Examples:</strong> {cat.examples}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn>
            <div className="rounded-2xl bg-gradient-to-r from-green-700 to-blue-700 p-12 text-center text-white">
              <h3 className="mb-4 text-3xl font-bold">Current Partners</h3>
              <p className="mb-8 text-xl opacity-90">
                We&apos;re proud to work alongside leading organizations including:
              </p>
              <div className="flex flex-wrap items-center justify-center gap-6">
                {currentPartners.map((partner) => (
                  <div
                    key={partner}
                    className="rounded-lg bg-white px-8 py-4 text-lg font-medium text-gray-900 sm:text-xl"
                  >
                    {partner}
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <CtaBanner
        title="Become a Partner"
        subtitle="Let's discuss how we can collaborate to amplify impact across Nigeria."
        primaryLabel="Explore Partnership"
        primaryHref="/get-involved"
        secondaryLabel="Contact Us"
        secondaryHref="/contact"
      />
    </>
  );
}
