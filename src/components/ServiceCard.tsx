import Image from "next/image";
import type { ComponentPropsWithoutRef } from "react";

type ServiceCardProps = {
  image: string;
  alt: string;
  title: string;
  desc: string;
} & Omit<ComponentPropsWithoutRef<"li">, "children">;

export function ServiceCard({ image, alt, title, desc, className = "", ...props }: ServiceCardProps) {
  return (
    <li className={`overflow-hidden border border-black/10 bg-[var(--bg-card)] shadow-sm ${className}`.trim()} {...props}>
      <div className="relative h-32 w-full sm:h-36">
        <Image src={image} alt={alt} fill className="object-cover" sizes="(min-width: 1024px) 28vw, 50vw" />
      </div>
      <div className="p-5">
        <h3 className="font-semibold text-[var(--heading)]">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{desc}</p>
      </div>
    </li>
  );
}
