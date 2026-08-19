import { Quotes } from "@phosphor-icons/react/ssr";
import SafeImage from "@/components/shared/SafeImage";

export default function TestimonialCard({
  quote,
  author,
  location,
  image,
}: {
  quote: string;
  author: string;
  location: string;
  image: string;
}) {
  return (
    <div className="flex h-full flex-col rounded-2xl bg-white p-8 shadow-md">
      <Quotes className="mb-4 text-green-600" size={28} />
      <p className="mb-6 flex-1 text-gray-700 leading-relaxed">&ldquo;{quote}&rdquo;</p>
      <div className="flex items-center gap-3">
        <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full">
          <SafeImage src={image} alt={author} />
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-900">{author}</p>
          <p className="text-xs text-gray-500">{location}</p>
        </div>
      </div>
    </div>
  );
}
