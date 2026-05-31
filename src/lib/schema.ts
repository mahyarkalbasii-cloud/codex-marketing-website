import { absoluteUrl, site } from "@/lib/site-data";

const schemaContext = "https://schema.org";

type SchemaOptions = {
  withContext?: boolean;
};

export const organizationId = `${site.url}/#organization`;
export const localBusinessId = `${site.url}/#localbusiness`;
export const websiteId = `${site.url}/#website`;

function withOptionalContext<T extends Record<string, unknown>>(
  schema: T,
  { withContext = true }: SchemaOptions = {},
) {
  if (!withContext) {
    return schema;
  }

  return {
    "@context": schemaContext,
    ...schema,
  };
}

export function getPostalAddressSchema() {
  return {
    "@type": "PostalAddress",
    ...site.postalAddress,
  };
}

export function getOpeningHoursSpecificationSchema() {
  return site.openingHoursSpecification.map((hours) => ({
    "@type": "OpeningHoursSpecification",
    ...hours,
  }));
}

export function getAreaServedSchema() {
  return site.areaServed.map((city) => ({
    "@type": "City",
    name: city,
  }));
}

export function getContactPointSchema() {
  return site.contacts.map((contact) => ({
    "@type": "ContactPoint",
    name: contact.label,
    telephone: contact.telephone,
    contactType: contact.contactType,
    areaServed: "IR",
    availableLanguage: ["fa-IR", "Persian"],
  }));
}

export function getOrganizationSchema(options?: SchemaOptions) {
  return withOptionalContext(
    {
      "@type": "Organization",
      "@id": organizationId,
      name: site.name,
      legalName: site.legalName,
      alternateName: site.alternateName,
      url: site.url,
      logo: absoluteUrl(site.logoPath),
      image: absoluteUrl("/opengraph-image"),
      description: site.description,
      foundingDate: site.foundingDate,
      email: site.email,
      telephone: site.contacts[0].telephone,
      address: getPostalAddressSchema(),
      contactPoint: getContactPointSchema(),
      sameAs: site.sameAs,
    },
    options,
  );
}

export function getLocalBusinessSchema(options?: SchemaOptions) {
  return withOptionalContext(
    {
      "@type": "LocalBusiness",
      "@id": localBusinessId,
      additionalType: "https://schema.org/ProfessionalService",
      name: site.name,
      legalName: site.legalName,
      alternateName: site.alternateName,
      description: site.description,
      url: site.url,
      image: absoluteUrl("/contact/opengraph-image"),
      logo: absoluteUrl(site.logoPath),
      telephone: site.contacts[0].telephone,
      email: site.email,
      priceRange: "$$",
      address: getPostalAddressSchema(),
      openingHours: site.openingHours,
      openingHoursSpecification: getOpeningHoursSpecificationSchema(),
      areaServed: getAreaServedSchema(),
      parentOrganization: { "@id": organizationId },
      contactPoint: getContactPointSchema(),
      sameAs: site.sameAs,
    },
    options,
  );
}

export function getWebsiteSchema(options?: SchemaOptions) {
  return withOptionalContext(
    {
      "@type": "WebSite",
      "@id": websiteId,
      name: site.name,
      url: site.url,
      inLanguage: "fa-IR",
      publisher: { "@id": organizationId },
    },
    options,
  );
}
