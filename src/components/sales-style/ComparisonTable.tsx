import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { CategorySection } from "@/components/category/CategorySection";
import { SALES_STYLE_LABELS, type SalesStyleCopy } from "@/data/sales-style-copy";

export function ComparisonTable({ copy }: { copy: SalesStyleCopy }) {
  if (copy.comparison) {
    return (
      <CategorySection id="comparison">
        <h2 className="text-2xl font-black md:text-3xl">{copy.comparison.title}</h2>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-muted-foreground">
          {copy.comparison.description}
        </p>
        <div className="mt-7 overflow-x-auto">
          <table className="sales-style-table min-w-[46rem]">
            <thead>
              <tr>
                <th scope="col">{SALES_STYLE_LABELS.comparisonDimension}</th>
                <th scope="col">{copy.comparison.fastLabel}</th>
                <th scope="col">{copy.comparison.consultativeLabel}</th>
              </tr>
            </thead>
            <tbody>
              {copy.comparison.rows.map((row) => (
                <tr key={row.dimension}>
                  <th scope="row" className="font-black">
                    {row.dimension}
                  </th>
                  <td className="leading-7 text-muted-foreground">{row.fast}</td>
                  <td className="leading-7 text-muted-foreground">
                    {row.consultative}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CategorySection>
    );
  }

  if (!copy.comparisonNote) {
    return null;
  }

  return (
    <CategorySection>
      <article className="category-card p-5">
        <h2 className="text-2xl font-black md:text-3xl">{copy.comparisonNote.title}</h2>
        <p className="mt-3 max-w-3xl leading-8 text-muted-foreground">
          {copy.comparisonNote.description}
        </p>
        <Link
          href={copy.comparisonNote.href}
          className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#7a4a22]"
        >
          {SALES_STYLE_LABELS.comparisonLink}
          <ArrowLeft className="h-4 w-4" />
        </Link>
      </article>
    </CategorySection>
  );
}
