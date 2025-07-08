export const SERVICES = [
  "website-redesign",
  "seo-optimisation", 
  "conversion-boosting",
  "local-seo",
  "mobile-optimisation",
  "google-ads-landing-pages",
  "web-development",
  "ecommerce-development",
  "website-maintenance",
  "speed-optimisation",
  "branding-design",
  "content-writing"
] as const;

export const LOCATIONS = [
  "birmingham",
  "manchester", 
  "london",
  "leeds",
  "liverpool",
  "glasgow",
  "bristol",
  "sheffield",
  "nottingham",
  "leicester",
  "cardiff",
  "edinburgh",
  "newcastle",
  "coventry",
  "bradford"
] as const;

export type Service = typeof SERVICES[number];
export type Location = typeof LOCATIONS[number];

// Utility functions
export function pascalCase(str: string): string {
  return str
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export function isValidService(slug: string): slug is Service {
  return SERVICES.includes(slug as Service);
}

export function isValidLocation(slug: string): slug is Location {
  return LOCATIONS.includes(slug as Location);
}

export function getServiceDisplayName(service: Service): string {
  const displayNames: Record<Service, string> = {
    "website-redesign": "Website Redesign",
    "seo-optimisation": "SEO Optimisation",
    "conversion-boosting": "Conversion Boosting",
    "local-seo": "Local SEO",
    "mobile-optimisation": "Mobile Optimisation", 
    "google-ads-landing-pages": "Google Ads Landing Pages",
    "web-development": "Web Development",
    "ecommerce-development": "E-commerce Development",
    "website-maintenance": "Website Maintenance",
    "speed-optimisation": "Speed Optimisation",
    "branding-design": "Branding & Design",
    "content-writing": "Content Writing"
  };
  return displayNames[service];
}

export function getLocationDisplayName(location: Location): string {
  const displayNames: Record<Location, string> = {
    "birmingham": "Birmingham",
    "manchester": "Manchester",
    "london": "London", 
    "leeds": "Leeds",
    "liverpool": "Liverpool",
    "glasgow": "Glasgow",
    "bristol": "Bristol",
    "sheffield": "Sheffield",
    "nottingham": "Nottingham",
    "leicester": "Leicester",
    "cardiff": "Cardiff",
    "edinburgh": "Edinburgh",
    "newcastle": "Newcastle",
    "coventry": "Coventry",
    "bradford": "Bradford"
  };
  return displayNames[location];
}
