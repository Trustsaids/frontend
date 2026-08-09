"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";
import { involvementWays } from "@/lib/data/getInvolved";

const interestAreas = involvementWays.find((w) => w.title === "Volunteering")?.details ?? [];

export default function VolunteerForm() {
  const [submitted, setSubmitted] = useState(false);
  const [interests, setInterests] = useState<string[]>([]);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  function toggleInterest(value: string) {
    setInterests((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="mx-auto max-w-lg rounded-2xl bg-white p-10 text-center shadow-md">
        <CheckCircle2 className="mx-auto mb-4 text-green-600" size={48} />
        <h3 className="mb-2 text-2xl font-bold text-gray-900">Thank You!</h3>
        <p className="text-gray-600">
          We&apos;ve received your interest in volunteering. Our team will reach out to
          {" "}{form.name || "you"} within 24-48 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-lg space-y-5 rounded-2xl bg-white p-8 shadow-md sm:p-10">
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
        <label className="mb-3 block text-sm">Areas of Interest</label>
        <div className="space-y-2">
          {interestAreas.map((area) => (
            <label key={area} className="flex items-start gap-2 text-sm text-gray-700">
              <input
                type="checkbox"
                checked={interests.includes(area)}
                onChange={() => toggleInterest(area)}
                className="mt-0.5 h-4 w-4 accent-green-600"
              />
              {area}
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="mb-2 block text-sm">Tell us about yourself</label>
        <textarea
          rows={4}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          placeholder="Express your interest in volunteering opportunities"
          className="w-full rounded-lg border-2 border-gray-200 px-4 py-3 focus:border-green-600 focus:outline-none"
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-lg bg-green-600 px-6 py-3.5 font-semibold text-white transition-colors hover:bg-green-700"
      >
        Submit Application
      </button>
    </form>
  );
}
