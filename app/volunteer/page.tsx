import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import VolunteerForm from "@/components/forms/VolunteerForm";
import FadeIn from "@/components/shared/FadeIn";

export const metadata: Metadata = {
  title: "Volunteer",
  description: "Join our team of volunteers and help us make a difference in communities across Nigeria.",
};

export default function VolunteerPage() {
  return (
    <>
      <PageHero
        title="Volunteer"
        subtitle="Join our team of volunteers and help us make a difference in communities across Nigeria."
      />
      <section className="section-y bg-gray-50">
        <div className="container-custom">
          <FadeIn>
            <VolunteerForm />
          </FadeIn>
        </div>
      </section>
    </>
  );
}
