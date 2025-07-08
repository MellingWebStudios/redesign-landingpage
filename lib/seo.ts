import type { Metadata } from "next";
import { 
  Service, 
  Location, 
  getServiceDisplayName, 
  getLocationDisplayName 
} from "./data";

export function canonicalUrl(path: string): string {
  return `https://mellingwebstudios.com${path}`;
}

export function buildStandaloneServiceMeta(service: Service): Metadata {
  const serviceDisplay = getServiceDisplayName(service);
  const title = `${serviceDisplay} Services | Melling WebStudios`;
  const description = `Professional ${serviceDisplay.toLowerCase()} services for UK businesses. Transform your online presence with our expert ${serviceDisplay.toLowerCase()} solutions. Free consultation available.`;
  
  return {
    title,
    description,
    alternates: { 
      canonical: canonicalUrl(`/services/${service}`)
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl(`/services/${service}`),
      siteName: "Melling WebStudios",
      type: "website",
      images: [{
        url: "/placeholder.jpg",
        width: 1200,
        height: 630,
        alt: `${serviceDisplay} Services`
      }]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/placeholder.jpg"]
    }
  };
}

export function buildLocationMeta(location: Location): Metadata {
  const locationDisplay = getLocationDisplayName(location);
  const title = `Web Design & Development in ${locationDisplay} | Melling WebStudios`;
  const description = `Professional web design and development services in ${locationDisplay}. High-performance websites for local businesses. Get more customers online. Free consultation.`;
  
  return {
    title,
    description,
    alternates: { 
      canonical: canonicalUrl(`/${location}`) 
    },
    openGraph: {
      title,
      description,
      type: "website",
      url: canonicalUrl(`/${location}`),
      siteName: "Melling WebStudios",
    },
    twitter: {
      card: "summary_large_image", 
      title,
      description,
    }
  };
}

export function buildLocationServiceMeta(location: Location, service: Service): Metadata {
  const locationDisplay = getLocationDisplayName(location);
  const serviceDisplay = getServiceDisplayName(service);
  const title = `${serviceDisplay} in ${locationDisplay} | Melling WebStudios`;
  const description = `Professional ${serviceDisplay.toLowerCase()} services in ${locationDisplay}. Local expertise, proven results. Transform your online presence today. Free consultation.`;
  
  return {
    title,
    description,
    alternates: { 
      canonical: canonicalUrl(`/${location}/${service}`) 
    },
    openGraph: {
      title,
      description,
      type: "website",
      url: canonicalUrl(`/${location}/${service}`),
      siteName: "Melling WebStudios",
    },
    twitter: {
      card: "summary_large_image", 
      title,
      description,
    }
  };
}

export function generateBreadcrumbJsonLd(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
}

export function generateLocalBusinessJsonLd(location: Location) {
  const locationDisplay = getLocationDisplayName(location);
  
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Melling WebStudios",
    "description": `Professional web design and development services in ${locationDisplay}`,
    "url": canonicalUrl(`/${location}`),
    "areaServed": {
      "@type": "City",
      "name": locationDisplay
    },
    "serviceArea": {
      "@type": "City", 
      "name": locationDisplay
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": locationDisplay,
      "addressCountry": "GB"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+44-121-XXX-XXXX",
      "contactType": "customer service"
    }
  };
}
