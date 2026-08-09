import type { ReactNode } from "react";

export default function PageHero({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children?: ReactNode;
}) {
  return (
    <section className="bg-gradient-to-r from-green-700 to-blue-700 py-20 text-white">
      <div className="container-custom text-center">
        <h1 className="text-4xl font-bold sm:text-5xl">{title}</h1>
        {subtitle && (
          <p className="mx-auto mt-6 max-w-3xl text-lg text-white/90 sm:text-xl">{subtitle}</p>
        )}
        {children}
      </div>
    </section>
  );
}
