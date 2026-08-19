import type { Metadata } from "next";
import Link from "next/link";
import { CalendarX } from "@phosphor-icons/react/ssr";
import PageHero from "@/components/shared/PageHero";
import FadeIn from "@/components/shared/FadeIn";

export const metadata: Metadata = {
  title: "Events",
  description: "Upcoming and past events from Trust Aid Initiative.",
};

export default function EventsPage() {
  return (
    <>
      <PageHero
        title="Events"
        subtitle="Upcoming and past events from Trust Aid Initiative."
      />

      <section className="section-y bg-white">
        <FadeIn className="container-custom max-w-xl text-center">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
            <CalendarX className="text-gray-400" size={36} />
          </div>
          <h2 className="mb-3 text-2xl font-bold text-gray-900">No Upcoming Events Right Now</h2>
          <p className="mb-8 text-gray-600">
            We don&apos;t have any events scheduled at the moment. Subscribe to our newsletter
            to be the first to know when we announce workshops, community dialogues, and
            fundraising events.
          </p>
          <Link
            href="/newsletter"
            className="inline-flex items-center justify-center rounded-lg bg-green-600 px-8 py-3.5 font-semibold text-white transition-colors hover:bg-green-700"
          >
            Subscribe to Updates
          </Link>
        </FadeIn>
      </section>
    </>
  );
}
