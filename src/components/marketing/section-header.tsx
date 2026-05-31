import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
  titleAs?: "h1" | "h2";
};

export function SectionHeader({
  title,
  description,
  className,
  titleAs = "h2",
}: SectionHeaderProps) {
  const TitleTag = titleAs;

  return (
    <header className={cn("mx-auto max-w-3xl text-center", className)}>
      <div className="space-y-3">
        <TitleTag className="text-2xl font-bold leading-[1.32] text-foreground md:text-4xl md:leading-[1.28] lg:text-[2.35rem]">
          {title}
        </TitleTag>
        {description ? (
          <p className="text-base leading-8 text-muted-foreground md:text-lg md:leading-9">
            {description}
          </p>
        ) : null}
      </div>
    </header>
  );
}
