"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/data/site";

export default function HeroSection() {
  return (
    <section className="relative flex h-[600px] items-center overflow-hidden bg-gradient-to-r from-brand-indigo to-brand-blue">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage: "url('/images/hero.jpeg')",
        }}
      />
      <div className="container-custom relative text-white">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-6 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl md:text-6xl"
        >
          {siteConfig.tagline}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="mb-8 max-w-2xl text-lg text-white/90 sm:text-xl md:text-2xl"
        >
          Empowering communities across Nigeria through trauma healing,
          peacebuilding, climate action, and livelihood programs since 2021.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col gap-4 sm:flex-row"
        >
          <Link
            href="/our-impact"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-green-600 px-8 py-4 font-semibold transition-colors hover:bg-green-700"
          >
            Explore Our Impact
            <ArrowRight size={20} />
          </Link>
          <Link
            href="/get-involved"
            className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 font-semibold text-green-900 transition-colors hover:bg-gray-100"
          >
            Partner With Us
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
