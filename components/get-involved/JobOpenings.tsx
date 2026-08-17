"use client";

import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MapPin, Clock, CalendarDays, X, CheckCircle2 } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import FadeIn from "@/components/shared/FadeIn";
import { jobOpenings } from "@/lib/data/getInvolved";
import { siteConfig } from "@/lib/data/site";

export default function JobOpenings() {
  const [activeJob, setActiveJob] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", coverLetter: "" });

  function close() {
    setActiveJob(null);
    setSubmitted(false);
    setForm({ name: "", email: "", phone: "", coverLetter: "" });
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="openings" className="section-y scroll-mt-24 bg-white">
      <div className="container-custom">
        <SectionHeading title="Current Openings" subtitle="Join our team and make a difference" />

        <div className="mx-auto max-w-4xl space-y-6">
          {jobOpenings.map((job, idx) => (
            <FadeIn key={job.title} delay={idx * 0.08}>
              <div className="rounded-xl border-2 border-gray-200 p-8 transition-colors hover:border-green-600">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="mb-4 md:mb-0">
                    <h3 className="mb-2 text-2xl font-bold text-gray-900">{job.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <span className="flex items-center gap-1.5">
                        <MapPin size={16} /> {job.location}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock size={16} /> {job.type}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <CalendarDays size={16} /> Apply by {job.deadline}
                      </span>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setActiveJob(job.title)}
                    className="inline-flex shrink-0 items-center justify-center rounded-lg bg-green-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-green-700"
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <p className="mt-10 text-center text-gray-600">
          Don&apos;t see a position that fits? We&apos;re always looking for talented
          individuals.{" "}
          <a href={`mailto:${siteConfig.email}`} className="font-semibold text-green-700 hover:text-green-800">
            Send us your resume
          </a>
        </p>
      </div>

      <AnimatePresence>
        {activeJob && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
            onClick={close}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 12 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-white p-8"
            >
              <button
                type="button"
                onClick={close}
                className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
                aria-label="Close"
              >
                <X size={24} />
              </button>

              {submitted ? (
                <div className="py-8 text-center">
                  <CheckCircle2 className="mx-auto mb-4 text-green-600" size={48} />
                  <h3 className="mb-2 text-2xl font-bold text-gray-900">Application Submitted!</h3>
                  <p className="mb-6 text-gray-600">
                    Thank you for applying to {activeJob}. Our team will review your
                    application and get back to you soon.
                  </p>
                  <button
                    type="button"
                    onClick={close}
                    className="rounded-lg bg-green-600 px-6 py-3 text-sm font-semibold text-white hover:bg-green-700"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h2 className="mb-1 text-2xl font-bold text-gray-900">Apply</h2>
                  <p className="mb-4 text-sm text-green-600">{activeJob}</p>

                  <div>
                    <label className="mb-2 block text-sm">Full Name *</label>
                    <input
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full rounded-lg border-2 border-gray-200 px-4 py-3 focus:border-green-600 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm">Email *</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full rounded-lg border-2 border-gray-200 px-4 py-3 focus:border-green-600 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm">Phone</label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full rounded-lg border-2 border-gray-200 px-4 py-3 focus:border-green-600 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm">Cover Letter</label>
                    <textarea
                      rows={5}
                      value={form.coverLetter}
                      onChange={(e) => setForm({ ...form, coverLetter: e.target.value })}
                      placeholder="Tell us about your experience and why you're interested in this role..."
                      className="w-full rounded-lg border-2 border-gray-200 px-4 py-3 focus:border-green-600 focus:outline-none"
                    />
                  </div>

                  <div className="flex gap-3 pt-2">
                    <button
                      type="button"
                      onClick={close}
                      className="flex-1 rounded-lg border-2 border-gray-200 px-6 py-3 transition-colors hover:bg-gray-50"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="flex-1 rounded-lg bg-green-600 px-6 py-3 text-white transition-colors hover:bg-green-700"
                    >
                      Submit Application
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
