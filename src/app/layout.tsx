import type { Metadata } from "next";
import localFont from "next/font/local";
import { MobileActionBar } from "@/components/marketing/mobile-action-bar";
import { StructuredData } from "@/components/marketing/structured-data";
import { SiteFooter } from "@/components/marketing/site-footer";
import { SiteHeader } from "@/components/marketing/site-header";
import { routeOgImage } from "@/lib/og-metadata";
import { getLocalBusinessSchema, getOrganizationSchema, getWebsiteSchema } from "@/lib/schema";
import { site } from "@/lib/site-data";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "پرشین‌سازه | اطلاعات به‌روز پروژه‌های ساختمانی برای فروش B2B",
    template: "%s | پرشین‌سازه",
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "پرشین سازه",
    "پروژه ساختمانی تهران",
    "پروژه ساختمانی کرج",
    "بانک اطلاعات ساختمان",
    "فروش مصالح ساختمانی",
    "CRM فروش ساختمان",
    "داده پروژه ساختمانی",
  ],
  alternates: {
    languages: {
      fa: "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "fa_IR",
    url: site.url,
    siteName: site.name,
    title: "پرشین‌سازه | پروژه درست، زمان درست، پیگیری منظم‌تر",
    description: site.description,
    images: routeOgImage("/"),
  },
  twitter: {
    card: "summary_large_image",
    images: ["/twitter-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = getOrganizationSchema();
  const localBusinessSchema = getLocalBusinessSchema();
  const websiteSchema = getWebsiteSchema();

  return (
    <html
      lang="fa-IR"
      dir="rtl"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} brand-palette`}
    >
      <head>
        <StructuredData data={[organizationSchema, localBusinessSchema, websiteSchema]} />
      </head>
      <body
        className="flex flex-col overflow-hidden bg-background text-foreground antialiased [height:100dvh]"
      >
        <SiteHeader />
        <div className="site-scroll-root min-h-0 flex-1 overflow-x-hidden overflow-y-auto pb-24 lg:pb-0">
          {children}
          <SiteFooter />
        </div>
        <MobileActionBar />
      </body>
    </html>
  );
}
