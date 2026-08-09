"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";
import type { LucideIcon } from "lucide-react";

function parseTarget(value: string) {
  const match = value.match(/[\d,.]+/);
  if (!match) return { number: 0, prefix: "", suffix: value };
  const number = parseFloat(match[0].replace(/,/g, ""));
  const prefix = value.slice(0, match.index);
  const suffix = value.slice((match.index ?? 0) + match[0].length);
  const hasComma = match[0].includes(",");
  return { number, prefix, suffix, hasComma };
}

export default function StatCounter({
  icon: Icon,
  number,
  label,
  color = "text-green-600",
}: {
  icon?: LucideIcon;
  number: string;
  label: string;
  color?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState("0");
  const { number: target, prefix, suffix, hasComma } = parseTarget(number);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, target, {
      duration: 1.6,
      ease: "easeOut",
      onUpdate: (v) => {
        const rounded = Math.round(v);
        setDisplay(hasComma ? rounded.toLocaleString("en-US") : String(rounded));
      },
    });
    return () => controls.stop();
  }, [inView, target, hasComma]);

  return (
    <div ref={ref} className="text-center">
      {Icon && (
        <div className={`mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gray-50 ${color}`}>
          <Icon size={28} />
        </div>
      )}
      <div className={`text-4xl font-bold ${color}`}>
        {prefix}
        {display}
        {suffix}
      </div>
      <p className="mt-2 text-sm text-gray-600 sm:text-base">{label}</p>
    </div>
  );
}
