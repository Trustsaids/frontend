"use client";

import { useState } from "react";
import Image from "next/image";
import { ImageOff } from "lucide-react";
import { cn } from "@/lib/utils";

export default function SafeImage({
  src,
  alt,
  className,
  sizes,
  fill = true,
}: {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  fill?: boolean;
}) {
  const [errored, setErrored] = useState(false);

  if (errored) {
    return (
      <div className={cn("flex items-center justify-center bg-gray-200 text-gray-500", className)}>
        <div className="p-8 text-center text-sm">
          <ImageOff className="mx-auto mb-2" size={40} />
          {alt}
        </div>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill={fill}
      sizes={sizes ?? "(min-width: 1024px) 50vw, 100vw"}
      className={cn("object-cover", className)}
      onError={() => setErrored(true)}
    />
  );
}
