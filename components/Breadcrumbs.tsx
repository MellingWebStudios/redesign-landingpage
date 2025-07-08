"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { 
  Service, 
  Location, 
  getServiceDisplayName, 
  getLocationDisplayName 
} from "@/lib/data";
import { generateBreadcrumbJsonLd, canonicalUrl } from "@/lib/seo";

interface BreadcrumbsProps {
  service?: Service;
  location?: Location;
}

export function Breadcrumbs({ service, location }: BreadcrumbsProps) {
  const serviceDisplay = service ? getServiceDisplayName(service) : null;
  const locationDisplay = location ? getLocationDisplayName(location) : null;

  const breadcrumbItems = [
    { name: "Home", href: "/" }
  ];

  if (location && service) {
    // For location + service pages: Home > Location > Service
    breadcrumbItems.push(
      { name: locationDisplay!, href: `/${location}` },
      { name: serviceDisplay!, href: `/${location}/${service}` }
    );
  } else if (location && !service) {
    // For location-only pages: Home > Location
    breadcrumbItems.push(
      { name: locationDisplay!, href: `/${location}` }
    );
  } else if (service && !location) {
    // For standalone service pages: Home > Services > Service
    breadcrumbItems.push(
      { name: "Services", href: "/services" },
      { name: serviceDisplay!, href: `/services/${service}` }
    );
  }

  // Generate JSON-LD structured data
  const jsonLdItems = breadcrumbItems.map(item => ({
    name: item.name,
    url: canonicalUrl(item.href)
  }));
  const jsonLd = generateBreadcrumbJsonLd(jsonLdItems);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav className="container-wide py-4" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
        {breadcrumbItems.map((item, index) => (
          <li key={item.href} className="flex items-center">
            {index > 0 && (
              <ChevronRight className="w-4 h-4 mx-2 text-muted-foreground/60" />
            )}
            {index === breadcrumbItems.length - 1 ? (
              <span className="text-foreground font-medium" aria-current="page">
                {item.name}
              </span>
            ) : (
              <Link 
                href={item.href} 
                className="hover:text-primary transition-colors"
              >
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
    </>
  );
}
