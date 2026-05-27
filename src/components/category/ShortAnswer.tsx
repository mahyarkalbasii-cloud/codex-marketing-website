import { CategorySection } from "@/components/category/CategorySection";

interface ShortAnswerProps {
  question: string;
  answer: string;
}

export function ShortAnswer({ question, answer }: ShortAnswerProps) {
  return (
    <CategorySection>
      <section itemScope itemType="https://schema.org/Question">
        <span className="category-badge mb-4">
          پاسخ کوتاه
        </span>
        <h2 itemProp="name" className="text-2xl font-black leading-10 md:text-3xl">
          {question}
        </h2>
        <div
          itemProp="acceptedAnswer"
          itemScope
          itemType="https://schema.org/Answer"
          className="category-card mt-5 p-5"
        >
          <p itemProp="text" className="max-w-4xl leading-8 text-muted-foreground">
            {answer}
          </p>
        </div>
      </section>
    </CategorySection>
  );
}
