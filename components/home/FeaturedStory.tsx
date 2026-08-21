import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/ssr";
import SectionHeading from "@/components/shared/SectionHeading";
import SafeImage from "@/components/shared/SafeImage";
import FadeIn from "@/components/shared/FadeIn";
import { successStories } from "@/lib/data/impact";

export default function FeaturedStory() {
  const story = successStories[0];

  return (
    <section className="section-y bg-white">
      <div className="container-custom">
        <SectionHeading
          title="A Story of Transformation"
          subtitle="Real change, one community at a time"
        />

        <FadeIn>
          <div className="grid grid-cols-1 overflow-hidden rounded-2xl bg-gray-50 shadow-xl lg:grid-cols-2">
            <div className="relative min-h-[280px]">
              <SafeImage src={story.image} alt={story.title} />
            </div>
            <div className="p-8 md:p-12">
              <span className="mb-4 inline-block rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700">
                {story.state}{story.state !== "Abuja" ? " State" : ""}
              </span>
              <h3 className="mb-4 text-2xl font-bold text-gray-900 sm:text-3xl">{story.title}</h3>
              <p className="mb-6 text-gray-700">{story.description}</p>
              <Link
                href="/our-impact"
                className="inline-flex items-center gap-2 font-semibold text-green-700 hover:text-green-800"
              >
                Read more impact stories
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
