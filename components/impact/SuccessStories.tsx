import SafeImage from "@/components/shared/SafeImage";
import FadeIn from "@/components/shared/FadeIn";
import { successStories } from "@/lib/data/impact";

export default function SuccessStories() {
  return (
    <div className="space-y-16">
      {successStories.map((story, idx) => {
        const reversed = idx % 2 === 1;
        return (
          <FadeIn key={story.title}>
            <div className="overflow-hidden rounded-2xl bg-white shadow-xl">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className={`relative min-h-[300px] ${reversed ? "lg:order-2" : ""}`}>
                  <SafeImage src={story.image} alt={story.title} />
                </div>
                <div className={`p-8 md:p-12 ${reversed ? "lg:order-1" : ""}`}>
                  <span className="mb-4 inline-block rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700">
                    {story.state} State
                  </span>
                  <h3 className="mb-4 text-2xl font-bold text-gray-900 sm:text-3xl">
                    {story.title}
                  </h3>
                  <p className="mb-6 text-lg text-gray-700">{story.description}</p>
                </div>
              </div>
            </div>
          </FadeIn>
        );
      })}
    </div>
  );
}
