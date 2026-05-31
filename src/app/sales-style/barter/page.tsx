import type { Metadata } from "next";

import { SalesStylePage } from "@/components/sales-style/SalesStylePage";
import {
  SALES_STYLE_COPY,
  getSalesStyleMetaDescription,
} from "@/data/sales-style-copy";
import { absoluteUrl } from "@/lib/site-data";

const copy = SALES_STYLE_COPY.barter;

export const metadata: Metadata = {
  title: { absolute: copy.metadataTitle },
  description: getSalesStyleMetaDescription("barter"),
  alternates: { canonical: copy.path },
  openGraph: {
    title: copy.metadataTitle,
    description: getSalesStyleMetaDescription("barter"),
    url: absoluteUrl(copy.path),
    locale: "fa_IR",
    type: "article",
  },
};

export default function BarterSalesStylePage() {
  return <SalesStylePage style="barter" />;
}
