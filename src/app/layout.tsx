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
    languages: {
      fa: "/",
      en: "/en/",
    },
  },
  openGraph: {
    type: "website",
    locale: "fa_IR",
    url: site.url,
    siteName: site.name,
    title: "پرشین‌سازه | پروژه درست، زمان درست، پیگیری منظم‌تر",
    description: site.description,
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "پرشین‌سازه | فروش پروژه‌محور برای بازار ساختمان",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/twitter-image.png"],
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
    "@id": `${site.url}/#organization`,
    name: site.name,
    alternateName: "PersianSaze",
    url: site.url,
    logo: absoluteUrl(site.logoPath),
    description: "زیرساخت فروش پروژه‌محور برای تامین‌کنندگان صنعت ساختمان",
    email: site.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "میدان شهید حسن تهرانی مقدم",
      addressLocality: "تهران",
      addressCountry: "IR",
    },
    contactPoint: [{
      "@type": "ContactPoint",
      telephone: "+98-21-75425000",
      contactType: "sales",
      areaServed: "IR",
      availableLanguage: "Persian",
    }],
    sameAs: site.sameAs,
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: site.url,
    inLanguage: "fa-IR",
    publisher: { "@id": `${site.url}/#organization` },
  };

  return (
    <html
      lang="fa-IR"
      dir="rtl"
      data-scroll-behavior="smooth"
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
    const theme = savedTheme === "dark" || savedTheme === "light" || savedTheme === "a"
      ? savedTheme
      : prefersDark
        ? "dark"
        : "light";
    document.documentElement.classList.toggle("dark", theme === "dark");
    document.documentElement.classList.toggle("theme-a", theme === "a");
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme === "dark" ? "dark" : "light";
  } catch {}
})();`,
          }}
        />
        <StructuredData data={[organizationSchema, websiteSchema]} />
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
