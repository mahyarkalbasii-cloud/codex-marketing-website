"use client";

import type { KeyboardEvent } from "react";
import { Plus } from "lucide-react";

import { faqs } from "@/lib/site-data";

type FaqItem = (typeof faqs)[number];

export function FaqList({
  items: providedItems,
  limit,
  questionHeadingLevel,
}: {
  items?: FaqItem[];
  limit?: number;
  questionHeadingLevel?: "h2" | "h3";
}) {
  const sourceItems = providedItems ?? faqs;
  const items = limit ? sourceItems.slice(0, limit) : sourceItems;
  const QuestionTag = questionHeadingLevel ?? "span";

  const toggleWithKeyboard = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key !== "Enter" && event.key !== " ") {
      return;
    }

    event.preventDefault();
    const details = event.currentTarget.closest("details");

    if (details) {
      details.open = !details.open;
    }
  };

  return (
    <div className="faq-list-card divide-y divide-[#eadfce] overflow-hidden rounded-[1.5rem] border border-[#e4d8c8] bg-[#fffaf1]/82 shadow-sm shadow-[#2a241d]/[0.03] dark:divide-zinc-800 dark:border-zinc-800 dark:bg-zinc-900/82">
      {items.map((item) => (
        <details key={item.question} className="group faq-list-item p-5 transition duration-200 open:bg-[#fbf6ed]/80 hover:bg-[#fbf6ed]/68 md:p-6 dark:open:bg-zinc-950/60 dark:hover:bg-zinc-950/40">
          <summary
            onKeyDown={toggleWithKeyboard}
            className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#CC785C]/35"
          >
            <QuestionTag className="text-base font-semibold leading-7">{item.question}</QuestionTag>
            <span className="faq-toggle-icon grid h-8 w-8 shrink-0 place-items-center rounded-xl border border-[#e4d8c8] bg-[#fbf6ed] text-[#7a6a59] transition duration-200 group-open:rotate-45 group-open:border-[#CC785C]/55 group-open:bg-[rgba(204,120,92,0.12)] group-open:text-[#2a241d] dark:bg-zinc-950 dark:group-open:border-[#CC785C]/40 dark:group-open:bg-[rgba(204,120,92,0.22)] dark:group-open:text-[#FFF7EF]">
              <Plus className="h-4 w-4" />
            </span>
          </summary>
          <p className="mt-4 text-sm leading-8 text-muted-foreground">
            {item.answer}
          </p>
        </details>
      ))}
    </div>
  );
}
