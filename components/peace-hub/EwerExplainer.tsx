"use client";

import SectionHeading from "@/components/shared/SectionHeading";
import { anticipatoryCycle, ewerSteps } from "@/lib/data/peaceHub";

export default function EwerExplainer() {
  return (
    <section className="section-y bg-white">
      <div className="container-custom">
        <SectionHeading
          title="Early Warning Early Response (EWER)"
          subtitle="Technology-driven conflict prevention with rapid community-led responses"
        />

        <div className="rounded-2xl bg-gradient-to-br from-purple-50 to-blue-50 p-8 md:p-12">
          <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            {ewerSteps.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.title} className="text-center">
                  <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-purple-600">
                    <Icon className="text-white" size={40} />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-gray-900">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              );
            })}
          </div>

          <div className="rounded-2xl bg-gradient-to-r from-purple-700 to-blue-700 p-8 text-white sm:p-12">
            <h3 className="mb-6 text-center text-2xl font-bold sm:text-3xl">
              The Anticipatory Cycle
            </h3>
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {anticipatoryCycle.map((item) => (
                <div key={item.step} className="text-center">
                  <div className="mb-3 text-4xl font-bold sm:text-5xl">{item.step}</div>
                  <h4 className="mb-1 text-lg font-semibold sm:text-xl">{item.title}</h4>
                  <p className="text-sm opacity-90">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
