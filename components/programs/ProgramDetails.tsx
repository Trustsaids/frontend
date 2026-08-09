"use client";

import { CheckCircle2, Users } from "lucide-react";
import SafeImage from "@/components/shared/SafeImage";
import FadeIn from "@/components/shared/FadeIn";
import { programDetails } from "@/lib/data/programs";

export default function ProgramDetails() {
  return (
    <div className="space-y-16">
      {programDetails.map((program, idx) => {
        const Icon = program.icon;
        const reversed = idx % 2 === 1;
        return (
          <FadeIn key={program.title}>
            <div className="overflow-hidden rounded-2xl bg-white shadow-xl">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className={`relative min-h-[280px] ${reversed ? "lg:order-2" : ""}`}>
                  <SafeImage src={program.image} alt={program.title} />
                  <div
                    className={`absolute left-6 top-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${program.color} shadow-lg`}
                  >
                    <Icon className="text-white" size={28} />
                  </div>
                </div>
                <div className={`p-8 md:p-12 ${reversed ? "lg:order-1" : ""}`}>
                  <h3 className="mb-4 text-2xl font-bold text-gray-900 sm:text-3xl">
                    {program.title}
                  </h3>
                  <p className="mb-6 text-gray-700">{program.description}</p>

                  <p className="mb-3 text-sm font-semibold text-gray-900">Key activities:</p>
                  <ul className="mb-6 grid grid-cols-1 gap-x-4 gap-y-2 sm:grid-cols-2">
                    {program.activities.map((activity) => (
                      <li key={activity} className="flex items-start gap-2 text-sm text-gray-600">
                        <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-green-600" />
                        {activity}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-start gap-2 rounded-lg bg-gray-50 p-4 text-sm text-gray-600">
                    <Users size={16} className="mt-0.5 shrink-0 text-gray-400" />
                    <span>
                      <span className="font-semibold text-gray-900">Beneficiaries: </span>
                      {program.beneficiaries}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        );
      })}
    </div>
  );
}
