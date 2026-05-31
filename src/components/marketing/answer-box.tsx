import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type AnswerBoxProps = {
  title?: string;
  children: React.ReactNode;
  className?: string;
};

export function AnswerBox({
  title = "پاسخ کوتاه",
  children,
  className,
}: AnswerBoxProps) {
  return (
    <section
      className={cn(
        "rounded-3xl border border-zinc-200 bg-white/80 p-6 text-zinc-950 shadow-sm shadow-zinc-950/[0.03] backdrop-blur",
        className,
      )}
    >
      <Badge variant="signal">{title}</Badge>
      <p className="mt-4 text-base leading-8">{children}</p>
    </section>
  );
}
