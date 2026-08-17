"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Mail, Phone, CheckCircle2 } from "lucide-react";
import { footerLinks, siteConfig } from "@/lib/data/site";
import { pillars } from "@/lib/data/programs";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  function handleSubscribe(e: FormEvent) {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail("");
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom grid grid-cols-1 gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link href="/" className="mb-4 flex items-center">
            <Image
              src="/logo-wordmark.png"
              alt="Trust Aid Initiative"
              width={643}
              height={139}
              className="h-9 w-auto"
            />
          </Link>
          <p className="text-sm leading-relaxed text-gray-400">
            Building resilient communities through trauma healing, peacebuilding,
            climate action, and livelihood empowerment across Nigeria.
          </p>
        </div>

        <div>
          <h4 className="mb-4 font-bold">Quick Links</h4>
          <ul className="space-y-3">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-gray-400 transition-colors hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 font-bold">Our Programs</h4>
          <ul className="space-y-3">
            {pillars.map((p) => (
              <li key={p.slug}>
                <Link href="/programs" className="text-sm text-gray-400 transition-colors hover:text-white">
                  {p.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 font-bold">Contact Us</h4>
          <p className="mb-2 flex items-start gap-2 text-sm text-gray-400">
            <MapPin size={16} className="mt-0.5 shrink-0" />
            {siteConfig.location}
          </p>
          <p className="mb-2 flex items-center gap-2 text-sm text-gray-400">
            <Phone size={16} className="shrink-0" />
            <a href={`tel:${siteConfig.phone}`} className="hover:text-white">
              {siteConfig.phone}
            </a>
          </p>
          <p className="mb-4 flex items-center gap-2 text-sm text-gray-400">
            <Mail size={16} className="shrink-0" />
            <a href={`mailto:${siteConfig.email}`} className="hover:text-white">
              {siteConfig.email}
            </a>
          </p>

          {subscribed ? (
            <p className="flex items-center gap-2 rounded-lg bg-white/5 px-3 py-2.5 text-sm text-green-400">
              <CheckCircle2 size={16} /> Subscribed! Thank you.
            </p>
          ) : (
            <form onSubmit={handleSubscribe} className="mt-4">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="mb-2 w-full rounded px-3 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-600"
              />
              <button
                type="submit"
                className="w-full rounded bg-green-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-green-700"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>

      <div className="border-t border-gray-800 py-8 text-center text-sm text-gray-500">
        <p>
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
