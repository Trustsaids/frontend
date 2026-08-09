"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
  }

  if (subscribed) {
    return (
      <div className="mx-auto max-w-md rounded-2xl bg-green-50 p-8 text-center">
        <CheckCircle2 className="mx-auto mb-4 text-green-600" size={40} />
        <h3 className="mb-2 text-xl font-bold text-gray-900">You&apos;re subscribed!</h3>
        <p className="text-gray-600">Thank you for joining our mailing list.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email address"
        className="w-full flex-1 rounded-lg border-2 border-gray-200 px-4 py-3.5 focus:border-green-600 focus:outline-none"
      />
      <button
        type="submit"
        className="rounded-lg bg-green-600 px-8 py-3.5 font-semibold text-white transition-colors hover:bg-green-700"
      >
        Subscribe
      </button>
    </form>
  );
}
