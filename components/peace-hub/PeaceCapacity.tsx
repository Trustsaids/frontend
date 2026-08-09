"use client";

import SectionHeading from "@/components/shared/SectionHeading";
import FadeIn from "@/components/shared/FadeIn";
import { peaceCapacityBuilding } from "@/lib/data/peaceHub";

export default function PeaceCapacity() {
  return (
    <section className="section-y bg-gray-50">
      <div className="container-custom text-center">
        <SectionHeading
          title="Building Local Peace Capacity"
          subtitle="We invest in training community members to become peace champions"
        />
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {peaceCapacityBuilding.map((item, idx) => {
            const Icon = item.icon;
            return (
              <FadeIn key={item.title} delay={idx * 0.1}>
                <div className="h-full rounded-xl bg-white p-8 shadow-sm">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-purple-600">
                    <Icon className="text-white" size={32} />
                  </div>
                  <h3 className="mb-4 text-xl font-bold text-gray-900">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
