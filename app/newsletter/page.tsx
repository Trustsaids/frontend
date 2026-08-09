import type { Metadata } from "next";
import { Newspaper, Sparkles, HeartHandshake } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import NewsletterForm from "@/components/forms/NewsletterForm";

export const metadata: Metadata = {
  title: "Newsletter",
  description:
    "Stay up to date with our latest news and updates. Subscribe to our newsletter.",
};

const benefits = [
  { icon: Newspaper, title: "Program Updates", description: "News on our trauma healing, peacebuilding, climate, and livelihood programs" },
  { icon: Sparkles, title: "Impact Stories", description: "Real stories of transformation from communities we serve" },
  { icon: HeartHandshake, title: "Ways to Help", description: "Opportunities to volunteer, partner, or give" },
];

export default function NewsletterPage() {
  return (
    <>
      <PageHero
        title="Newsletter"
        subtitle="Stay up to date with our latest news and updates. Subscribe to our newsletter for updates on our programs, impact stories, and opportunities to get involved."
      />

      <section className="section-y bg-white">
        <div className="container-custom">
          <div className="mx-auto mb-12 grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-3">
            {benefits.map((b) => {
              const Icon = b.icon;
              return (
                <div key={b.title} className="text-center">
                  <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-green-700">
                    <Icon size={24} />
                  </div>
                  <h3 className="mb-1 font-bold text-gray-900">{b.title}</h3>
                  <p className="text-sm text-gray-600">{b.description}</p>
                </div>
              );
            })}
          </div>

          <NewsletterForm />
        </div>
      </section>
    </>
  );
}
