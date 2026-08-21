import type { Metadata } from "next";
import { MapPin, EnvelopeSimple, Buildings, Phone } from "@phosphor-icons/react/ssr";
import PageHero from "@/components/shared/PageHero";
import ContactForm from "@/components/forms/ContactForm";
import FadeIn from "@/components/shared/FadeIn";
import { siteConfig } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Fill out the form below and we'll get back to you within 24-48 hours.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Fill out the form below and we'll get back to you within 24-48 hours."
      />

      <section className="section-y bg-gray-50">
        <div className="container-custom grid grid-cols-1 gap-12 lg:grid-cols-3">
          <FadeIn className="space-y-8 lg:col-span-1">
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-700">
                <Buildings size={22} />
              </div>
              <div>
                <h3 className="mb-1 font-bold text-gray-900">Headquarters</h3>
                <p className="text-gray-600">{siteConfig.location}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-700">
                <MapPin size={22} />
              </div>
              <div>
                <h3 className="mb-1 font-bold text-gray-900">Field Offices</h3>
                <p className="text-gray-600">{siteConfig.fieldOffices}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-700">
                <Phone size={22} />
              </div>
              <div>
                <h3 className="mb-1 font-bold text-gray-900">Phone</h3>
                <a href={`tel:${siteConfig.phone}`} className="text-gray-600 hover:text-green-700">
                  {siteConfig.phone}
                </a>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-700">
                <EnvelopeSimple size={22} />
              </div>
              <div>
                <h3 className="mb-1 font-bold text-gray-900">Email</h3>
                <a href={`mailto:${siteConfig.email}`} className="text-gray-600 hover:text-green-700">
                  {siteConfig.email}
                </a>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.1} className="lg:col-span-2">
            <ContactForm />
          </FadeIn>
        </div>
      </section>
    </>
  );
}
