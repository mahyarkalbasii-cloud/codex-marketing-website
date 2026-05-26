import type { Metadata } from "next";
import localFont from "next/font/local";
import { MobileActionBar } from "@/components/marketing/mobile-action-bar";
import { StructuredData } from "@/components/marketing/structured-data";
import { SiteFooter } from "@/components/marketing/site-footer";
import { SiteHeader } from "@/components/marketing/site-header";
import { absoluteUrl, site } from "@/lib/site-data";
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
    canonical: "/",
    languages: {
      fa: "/",
      en: "/en",
    },
  },
  openGraph: {
    type: "website",
    locale: "fa_IR",
    url: site.url,
    siteName: site.name,
    title: "پرشین‌سازه | پروژه درست، زمان درست، پیگیری منظم‌تر",
    description: site.description,
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
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: site.url,
    logo: absoluteUrl(site.logoPath),
    email: site.email,
    telephone: "+982175425000",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+982175425000",
      contactType: "sales",
      areaServed: "IR",
      availableLanguage: ["fa", "en"],
    },
    sameAs: site.sameAs,
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: site.name,
    url: site.url,
    image: absoluteUrl(site.logoPath),
    logo: absoluteUrl(site.logoPath),
    telephone: "+982175425000",
    email: site.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address,
      addressLocality: "تهران",
      addressCountry: "IR",
    },
    openingHours: site.openingHours,
    priceRange: "$$",
    sameAs: site.sameAs,
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: site.url,
    inLanguage: ["fa-IR", "en-US"],
  };

  return (
    <html
      lang="fa"
      dir="rtl"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(() => {
  try {
    const savedTheme = window.localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDark = savedTheme ? savedTheme === "dark" : prefersDark;
    document.documentElement.classList.toggle("dark", isDark);
    document.documentElement.style.colorScheme = isDark ? "dark" : "light";
  } catch {}
})();`,
          }}
        />
      </head>
      <body
        className="flex flex-col overflow-hidden bg-background text-foreground antialiased [height:100dvh]"
      >
        <StructuredData data={[organizationSchema, localBusinessSchema, websiteSchema]} />
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
