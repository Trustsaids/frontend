import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import SectionHeading from "@/components/shared/SectionHeading";
import InvolvementWays from "@/components/get-involved/InvolvementWays";
import JobOpenings from "@/components/get-involved/JobOpenings";
import CtaBanner from "@/components/shared/CtaBanner";

export const metadata: Metadata = {
  title: "Get Involved",
  description:
    "Join us in building resilient, peaceful, and prosperous communities across Nigeria.",
};

export default function GetInvolvedPage() {
  return (
    <>
      <PageHero
        title="Get Involved"
        subtitle="Join us in building resilient, peaceful, and prosperous communities across Nigeria"
      />

      <section className="section-y bg-gray-50">
        <div className="container-custom">
          <SectionHeading
            title="Ways to Get Involved"
            subtitle="Collaborate with us to amplify impact and reach more communities"
          />
          <InvolvementWays />
        </div>
      </section>

      <JobOpenings />

      <CtaBanner />
    </>
  );
}
