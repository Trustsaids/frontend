import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import ProgramDetails from "@/components/programs/ProgramDetails";
import CtaBanner from "@/components/shared/CtaBanner";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "Detailed activities and beneficiaries across our trauma healing, peacebuilding, climate action, and livelihood programs.",
};

export default function ProgramsPage() {
  return (
    <>
      <PageHero
        title="Programs"
        subtitle="Explore our programs in trauma healing, peacebuilding, climate action, and livelihood empowerment."
      />

      <section className="section-y bg-gray-50">
        <div className="container-custom">
          <ProgramDetails />
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
