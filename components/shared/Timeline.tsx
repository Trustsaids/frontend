import { timeline } from "@/lib/data/site";
import FadeIn from "@/components/shared/FadeIn";

export default function Timeline() {
  return (
    <div className="relative mx-auto max-w-2xl">
      <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gray-200" />
      <ul className="space-y-10">
        {timeline.map((item, idx) => (
          <FadeIn key={item.year} delay={idx * 0.05}>
            <li className="relative pl-10">
              <span className="absolute left-0 top-1.5 h-4 w-4 rounded-full border-2 border-green-600 bg-white" />
              <span className="text-sm font-bold text-green-700">{item.year}</span>
              <h4 className="mt-1 text-lg font-semibold text-gray-900">{item.event}</h4>
              <p className="text-sm text-gray-600">{item.description}</p>
            </li>
          </FadeIn>
        ))}
      </ul>
    </div>
  );
}
