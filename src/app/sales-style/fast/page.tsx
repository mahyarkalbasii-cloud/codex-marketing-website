import type { Metadata } from "next";

import { SalesStylePage } from "@/components/sales-style/SalesStylePage";
import {
  SALES_STYLE_COPY,
  getSalesStyleMetaDescription,
} from "@/data/sales-style-copy";
import { absoluteUrl } from "@/lib/site-data";

const copy = SALES_STYLE_COPY.fast;

export const metadata: Metadata = {
  title: { absolute: copy.metadataTitle },
  description: getSalesStyleMetaDescription("fast"),
  alternates: {
    canonical: copy.path,
    types: {
      "text/html": [{ url: copy.alternatePath, title: SALES_STYLE_COPY.consultative.h1 }],
    },
  },
  openGraph: {
    title: copy.metadataTitle,
    description: getSalesStyleMetaDescription("fast"),
    url: absoluteUrl(copy.path),
    locale: "fa_IR",
    type: "article",
  },
};

export default function FastSalesStylePage() {
  return <SalesStylePage style="fast" />;
}
