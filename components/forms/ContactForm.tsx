"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";
import { contactSubjects } from "@/lib/data/getInvolved";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "", consent: false });

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!form.consent) return;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl bg-green-50 p-10 text-center">
        <CheckCircle2 className="mx-auto mb-4 text-green-600" size={48} />
        <h3 className="mb-2 text-2xl font-bold text-gray-900">Message Sent!</h3>
        <p className="text-gray-600">
          Thank you for reaching out. We&apos;ll get back to you within 24-48 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 rounded-2xl bg-white p-8 shadow-md sm:p-10">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
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
            placeholder="your@email.com"
            className="w-full rounded-lg border-2 border-gray-200 px-4 py-3 focus:border-green-600 focus:outline-none"
          />
        </div>
      </div>

      <div>
        <label className="mb-2 block text-sm">Subject *</label>
        <select
          required
          value={form.subject}
          onChange={(e) => setForm({ ...form, subject: e.target.value })}
          className="w-full rounded-lg border-2 border-gray-200 px-4 py-3 focus:border-green-600 focus:outline-none"
        >
          <option value="">Select a subject</option>
          {contactSubjects.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="mb-2 block text-sm">Message *</label>
        <textarea
          required
          rows={6}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          placeholder="Tell us more about your inquiry..."
          className="w-full rounded-lg border-2 border-gray-200 px-4 py-3 focus:border-green-600 focus:outline-none"
        />
      </div>

      <label className="flex items-start gap-2 text-sm text-gray-600">
        <input
          type="checkbox"
          required
          checked={form.consent}
          onChange={(e) => setForm({ ...form, consent: e.target.checked })}
          className="mt-0.5 h-4 w-4 accent-green-600"
        />
        I consent to Trust Aid Initiative storing and processing my personal information
        for the purpose of responding to my inquiry. *
      </label>

      <button
        type="submit"
        className="w-full rounded-lg bg-green-600 px-6 py-3.5 font-semibold text-white transition-colors hover:bg-green-700"
      >
        Send Message
      </button>
    </form>
  );
}
