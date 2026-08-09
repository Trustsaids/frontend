import Link from "next/link";
import FadeIn from "@/components/shared/FadeIn";

export default function CtaBanner({
  title = "Join Us in Building Resilient Communities",
  subtitle = "Your support helps us reach more communities across Nigeria with life-changing programs.",
  primaryLabel = "Donate Now",
  primaryHref = "/donate",
  secondaryLabel = "Get Involved",
  secondaryHref = "/get-involved",
}: {
  title?: string;
  subtitle?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}) {
  return (
    <section className="bg-gradient-to-r from-green-700 to-blue-700 py-20 text-white">
      <div className="container-custom max-w-4xl text-center">
        <FadeIn>
          <h2 className="mb-6 text-3xl font-bold sm:text-4xl">{title}</h2>
          <p className="mb-8 text-lg text-white/90">{subtitle}</p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href={primaryHref}
              className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 font-semibold text-green-900 transition-colors hover:bg-gray-100"
            >
              {primaryLabel}
            </Link>
            <Link
              href={secondaryHref}
              className="inline-flex items-center justify-center rounded-lg border-2 border-white px-8 py-4 font-semibold text-white transition-colors hover:bg-white/10"
            >
              {secondaryLabel}
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
