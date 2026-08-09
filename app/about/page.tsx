import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import SectionHeading from "@/components/shared/SectionHeading";
import Timeline from "@/components/shared/Timeline";
import SafeImage from "@/components/shared/SafeImage";
import CtaBanner from "@/components/shared/CtaBanner";
import FadeIn from "@/components/shared/FadeIn";
import { coreValues, galleryImages, siteConfig } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "About Us",
  description: siteConfig.description,
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Us"
        subtitle="Building resilient communities across Nigeria since 2012"
      />

      <section className="section-y bg-white">
        <div className="container-custom max-w-4xl">
          <FadeIn>
            <h2 className="mb-6 text-3xl font-bold text-gray-900">Our Story</h2>
            <p className="mb-4 text-lg leading-relaxed text-gray-700">{siteConfig.history}</p>
            <p className="text-lg leading-relaxed text-gray-700">{siteConfig.description}</p>
          </FadeIn>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            <FadeIn>
              <div className="rounded-xl border-l-4 border-green-600 bg-green-50 p-8">
                <h2 className="mb-3 text-2xl font-bold text-green-800">Vision</h2>
                <p className="leading-relaxed text-gray-700">{siteConfig.vision}</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="rounded-xl border-l-4 border-blue-600 bg-blue-50 p-8">
                <h2 className="mb-3 text-2xl font-bold text-blue-800">Mission</h2>
                <p className="leading-relaxed text-gray-700">{siteConfig.mission}</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="section-y bg-gray-50">
        <div className="container-custom">
          <SectionHeading title="Our Journey" subtitle="Key milestones since 2012" />
          <Timeline />
        </div>
      </section>

      <section className="section-y bg-white">
        <div className="container-custom">
          <SectionHeading title="Our Core Values" subtitle="Guiding principles that shape our work" />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-5">
            {coreValues.map((value, idx) => (
              <FadeIn key={value.title} delay={idx * 0.06}>
                <div className="h-full rounded-xl bg-gray-50 p-8 text-center shadow-sm transition-shadow hover:shadow-md">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                    <span className="text-3xl font-bold text-green-700">{value.title[0]}</span>
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-gray-900">{value.title}</h3>
                  <p className="text-sm text-gray-600">{value.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-gray-50">
        <div className="container-custom">
          <SectionHeading title="Our Work in Pictures" subtitle="Moments from communities we serve" />
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {galleryImages.map((img, idx) => (
              <FadeIn key={img.url} delay={idx * 0.05}>
                <div className="relative aspect-square overflow-hidden rounded-xl">
                  <SafeImage src={img.url} alt={img.alt} />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
