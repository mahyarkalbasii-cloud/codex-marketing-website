import projectMapWide from "@/assets/images/home-hero-project-map-wide.webp";
import { cn } from "@/lib/utils";

type RoutePageVisualProps = {
  alt: string;
  caption?: string;
  className?: string;
  priority?: boolean;
};

export function RoutePageVisual({
  alt,
  caption = "نمایی از نقشه پروژه‌ها و مسیر پیگیری فروش در پرشین‌سازه",
  className,
  priority = false,
}: RoutePageVisualProps) {
  return (
    <figure
      className={cn(
        "overflow-hidden rounded-[1.5rem] border border-[#e4d8c8] bg-[#fffaf1] shadow-sm shadow-[#2a241d]/[0.035]",
        className,
      )}
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-[#f5eadb]">
        <img
          src={projectMapWide.src}
          alt={alt}
          width={projectMapWide.width}
          height={projectMapWide.height}
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : "auto"}
          decoding="async"
          className="h-full w-full object-cover"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(42,36,29,0.03),rgba(193,107,78,0.1))]"
        />
      </div>
      <figcaption className="border-t border-[#e4d8c8] px-4 py-3 text-xs font-semibold leading-6 text-[#6f6254]">
        {caption}
      </figcaption>
    </figure>
  );
}
