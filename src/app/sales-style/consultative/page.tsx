import type { Metadata } from "next";

import { SalesStylePage } from "@/components/sales-style/SalesStylePage";
import {
  SALES_STYLE_COPY,
  getSalesStyleMetaDescription,
} from "@/data/sales-style-copy";
import { routeOgImage } from "@/lib/og-metadata";
import { absoluteUrl } from "@/lib/site-data";

const copy = SALES_STYLE_COPY.consultative;

export const metadata: Metadata = {
  title: { absolute: copy.metadataTitle },
  description: getSalesStyleMetaDescription("consultative"),
  alternates: {
    canonical: copy.path,
    types: {
      "text/html": [{ url: copy.alternatePath, title: SALES_STYLE_COPY.fast.h1 }],
    },
  },
  openGraph: {
    title: copy.metadataTitle,
    description: getSalesStyleMetaDescription("consultative"),
    url: absoluteUrl(copy.path),
    locale: "fa_IR",
    type: "article",
    images: routeOgImage(copy.path, copy.h1),
  },
};

export default function ConsultativeSalesStylePage() {
  return <SalesStylePage style="consultative" />;
}
