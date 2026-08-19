"use client";

import { useState, type FormEvent } from "react";
import { cn } from "@/lib/utils";
import { CheckCircle, HandCoins } from "@phosphor-icons/react";

const presetAmounts = ["5,000", "10,000", "25,000", "50,000"];
const frequencies = ["One-time", "Monthly"] as const;

export default function DonationForm() {
  const [frequency, setFrequency] = useState<(typeof frequencies)[number]>("One-time");
  const [amount, setAmount] = useState("10,000");
  const [customAmount, setCustomAmount] = useState("");
  const [donor, setDonor] = useState({ name: "", email: "" });
  const [submitted, setSubmitted] = useState(false);

  const finalAmount = amount === "custom" ? customAmount : amount;

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl bg-green-50 p-10 text-center">
        <CheckCircle className="mx-auto mb-4 text-green-600" size={48} />
        <h3 className="mb-2 text-2xl font-bold text-gray-900">Thank you, {donor.name || "friend"}!</h3>
        <p className="mx-auto max-w-md text-gray-600">
          Your {frequency.toLowerCase()} pledge of ₦{finalAmount || "0"} means a lot. This demo
          form doesn&apos;t process real payments — connect a processor such as Paystack,
          Flutterwave, or Stripe to accept live donations.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8 rounded-2xl bg-white p-8 shadow-md sm:p-10">
      <div>
        <label className="mb-3 block text-sm font-medium text-gray-900">Frequency</label>
        <div className="inline-flex rounded-lg bg-gray-100 p-1">
          {frequencies.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFrequency(f)}
              className={cn(
                "rounded-md px-6 py-2 text-sm font-medium transition-colors",
                frequency === f ? "bg-white text-green-700 shadow-sm" : "text-gray-600"
              )}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="mb-3 block text-sm font-medium text-gray-900">
          Select an Amount (NGN)
        </label>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {presetAmounts.map((preset) => (
            <button
              key={preset}
              type="button"
              onClick={() => setAmount(preset)}
              className={cn(
                "rounded-lg border-2 px-4 py-3 text-sm font-semibold transition-colors",
                amount === preset
                  ? "border-green-600 bg-green-50 text-green-700"
                  : "border-gray-200 text-gray-700 hover:border-green-600"
              )}
            >
              ₦{preset}
            </button>
          ))}
        </div>
        <div className="mt-3">
          <button
            type="button"
            onClick={() => setAmount("custom")}
            className={cn(
              "mb-2 text-sm font-medium",
              amount === "custom" ? "text-green-700" : "text-gray-500"
            )}
          >
            Or enter a custom amount
          </button>
          {amount === "custom" && (
            <input
              type="number"
              min={1}
              value={customAmount}
              onChange={(e) => setCustomAmount(e.target.value)}
              placeholder="Enter amount"
              className="w-full rounded-lg border-2 border-gray-200 px-4 py-3 focus:border-green-600 focus:outline-none"
            />
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm">Full Name *</label>
          <input
            required
            value={donor.name}
            onChange={(e) => setDonor({ ...donor, name: e.target.value })}
            className="w-full rounded-lg border-2 border-gray-200 px-4 py-3 focus:border-green-600 focus:outline-none"
          />
        </div>
        <div>
          <label className="mb-2 block text-sm">Email *</label>
          <input
            type="email"
            required
            value={donor.email}
            onChange={(e) => setDonor({ ...donor, email: e.target.value })}
            className="w-full rounded-lg border-2 border-gray-200 px-4 py-3 focus:border-green-600 focus:outline-none"
          />
        </div>
      </div>

      <button
        type="submit"
        className="flex w-full items-center justify-center gap-2 rounded-lg bg-green-600 px-6 py-4 font-semibold text-white transition-colors hover:bg-green-700"
      >
        <HandCoins size={20} />
        Donate ₦{finalAmount || "0"} {frequency === "Monthly" ? "/ month" : ""}
      </button>
    </form>
  );
}
