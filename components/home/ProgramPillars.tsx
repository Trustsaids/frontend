"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import FadeIn from "@/components/shared/FadeIn";
import { pillars } from "@/lib/data/programs";

export default function ProgramPillars() {
  const [active, setActive] = useState<string | null>(null);
  const activePillar = pillars.find((p) => p.title === active);

  return (
    <section className="section-y bg-gray-50">
      <div className="container-custom">
        <SectionHeading
          title="Our Five Pillars of Impact"
          subtitle="An integrated approach to community transformation through holistic programming"
        />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <FadeIn key={pillar.title} delay={idx * 0.08}>
                <button
                  type="button"
                  onClick={() => setActive(pillar.title)}
                  className="h-full w-full rounded-xl bg-white p-8 text-left shadow-lg transition-shadow hover:shadow-xl"
                >
                  <div
                    className={`mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-gradient-to-br ${pillar.color}`}
                  >
                    <Icon className="text-white" size={32} />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-gray-900">{pillar.title}</h3>
                  {pillar.subtitle && (
                    <p className="mb-4 text-sm font-medium text-green-600">{pillar.subtitle}</p>
                  )}
                  <p className="text-gray-600">{pillar.description}</p>
                </button>
              </FadeIn>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {activePillar && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 12 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white p-8"
            >
              <button
                type="button"
                onClick={() => setActive(null)}
                className="absolute right-4 top-4 text-gray-400 transition-colors hover:text-gray-600"
                aria-label="Close"
              >
                <X size={24} />
              </button>
              <div
                className={`mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br ${activePillar.color}`}
              >
                <activePillar.icon className="text-white" size={24} />
              </div>
              <h2 className="mb-1 text-3xl font-bold text-gray-900">{activePillar.title}</h2>
              {activePillar.subtitle && (
                <p className="mb-6 text-sm text-green-600">{activePillar.subtitle}</p>
              )}
              <div className="space-y-4 text-sm leading-relaxed text-gray-700">
                {activePillar.narrative.map((p) => (
                  <p key={p}>{p}</p>
                ))}
                <div>
                  <p className="mb-2 font-semibold">What we do:</p>
                  <p>{activePillar.whatWeDo}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
