import { CheckCircle2 } from "lucide-react";
import SafeImage from "@/components/shared/SafeImage";
import FadeIn from "@/components/shared/FadeIn";
import { caseStudyTimeline } from "@/lib/data/peaceHub";

export default function CaseStudy() {
  return (
    <section className="bg-gradient-to-br from-blue-900 to-purple-900 py-20 text-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <FadeIn>
            <span className="mb-6 inline-block rounded-full bg-white/20 px-4 py-2 text-sm">
              Case Study: Benue State
            </span>
            <h2 className="mb-6 text-3xl font-bold sm:text-4xl">
              EWER Prevents Farmer-Herder Clash
            </h2>
            <p className="mb-6 text-lg opacity-90">
              In March 2025, community monitors in Makurdi LGA detected increased tensions
              over grazing routes. Within 36 hours, our peace committee brought together
              farmers and herders for mediation.
            </p>
            <div className="mb-6 rounded-xl bg-white/10 p-6 backdrop-blur-sm">
              <h3 className="mb-4 text-xl font-semibold">Timeline:</h3>
              <ul className="space-y-3">
                {caseStudyTimeline.map((item) => (
                  <li key={item.window} className="flex items-start">
                    <CheckCircle2 className="mr-3 mt-1 shrink-0" size={20} />
                    <div>
                      <strong>{item.window}:</strong> {item.detail}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-lg">
              <strong>Outcome:</strong> Zero casualties, lasting agreement on resource sharing,
              and improved farmer-herder relations.
            </p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
              <SafeImage
                src="https://images.unsplash.com/photo-1550100278-c42ebaf8df7f?w=800"
                alt="Community dialogue"
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
