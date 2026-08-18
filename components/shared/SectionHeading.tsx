import FadeIn from "@/components/shared/FadeIn";

export default function SectionHeading({
  title,
  subtitle,
  center = true,
}: {
  title: string;
  subtitle?: string;
  center?: boolean;
}) {
  return (
    <FadeIn className={`mb-12 sm:mb-16 ${center ? "mx-auto max-w-3xl text-center" : ""}`}>
      <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-4 text-lg text-gray-600 sm:text-xl">{subtitle}</p>}
    </FadeIn>
  );
}
