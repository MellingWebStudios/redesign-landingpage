import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, CheckCircle, MapPin, Phone, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/reveal-animation";
import { 
  LOCATIONS, 
  SERVICES, 
  isValidLocation, 
  isValidService,
  getLocationDisplayName,
  getServiceDisplayName
} from "@/lib/data";
import { buildLocationServiceMeta } from "@/lib/seo";
import type { Metadata } from "next";

interface LocationServicePageProps {
  params: {
    location: string;
    service: string;
  };
}

export async function generateStaticParams() {
  const params = [];
  
  for (const location of LOCATIONS) {
    for (const service of SERVICES) {
      params.push({
        location,
        service,
      });
    }
  }
  
  return params;
}

export async function generateMetadata({ params }: LocationServicePageProps): Promise<Metadata> {
  const { location, service } = await params;
  
  if (!isValidLocation(location) || !isValidService(service)) {
    return {
      title: "Not Found",
    };
  }
  
  return buildLocationServiceMeta(location, service);
}

export const revalidate = 86400; // 24 hours

export default async function LocationServicePage({ params }: LocationServicePageProps) {
  const { location, service } = await params;
  
  if (!isValidLocation(location) || !isValidService(service)) {
    notFound();
  }

  const locationDisplay = getLocationDisplayName(location);
  const serviceDisplay = getServiceDisplayName(service);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container-wide relative">
          <div className="max-w-4xl mx-auto text-center">
            <Reveal>
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 mx-auto">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <MapPin className="w-4 h-4" />
                {locationDisplay} Specialists
              </div>
            </Reveal>
            
            <Reveal delay={0.1}>
              <h1 className="mb-6 text-4xl lg:text-5xl xl:text-6xl font-bold text-black text-center">
                {serviceDisplay} in {locationDisplay}
              </h1>
            </Reveal>
            
            <Reveal delay={0.2}>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 text-center">
                Professional {serviceDisplay.toLowerCase()} services in {locationDisplay}. Transform your 
                online presence with our local expertise and proven strategies that deliver results.
              </p>
            </Reveal>
            
            <Reveal delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <Link href="/free-redesign">
                  <Button className="btn btn-primary btn-lg">
                    Get Free Website Audit
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/work">
                  <Button variant="outline" className="btn btn-lg border-gray-300 text-gray-700 hover:bg-gray-50">
                    View Our Work
                  </Button>
                </Link>
              </div>
              
              {/* Breadcrumbs */}
              <nav className="flex justify-center mb-12" aria-label="Breadcrumb">
                <ol className="flex items-center space-x-1 text-sm text-gray-500">
                  <li>
                    <Link href="/" className="hover:text-primary transition-colors">
                      Home
                    </Link>
                  </li>
                  <ChevronRight className="w-3 h-3 mx-1.5 text-gray-400" />
                  <li>
                    <Link href={`/${location}`} className="hover:text-primary transition-colors">
                      {locationDisplay}
                    </Link>
                  </li>
                  <ChevronRight className="w-3 h-3 mx-1.5 text-gray-400" />
                  <li>
                    <span className="text-gray-700 font-medium" aria-current="page">
                      {serviceDisplay}
                    </span>
                  </li>
                </ol>
              </nav>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Location + Service Benefits */}
      <LocationServiceBenefits location={location} service={service} />

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container-wide">
          <Reveal>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="mb-6 text-3xl lg:text-4xl font-bold text-black">
                Ready to Transform Your {locationDisplay} Business?
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
                Get a free consultation and see how our {serviceDisplay.toLowerCase()} services 
                can help you dominate the {locationDisplay} market with a high-performance website.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <Link href="/free-redesign">
                  <Button className="btn btn-primary btn-lg">
                    Get Free Website Audit
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" className="btn btn-lg border-gray-300 text-gray-700 hover:bg-gray-50">
                    <Phone className="mr-2 h-5 w-5" />
                    Call Us Today
                  </Button>
                </Link>
              </div>

              <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Free consultation
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  No obligation
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Local expertise
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

// Location + Service Benefits Component
function LocationServiceBenefits({ location, service }: { location: string; service: string }) {
  const locationDisplay = getLocationDisplayName(location as any);
  const serviceDisplay = getServiceDisplayName(service as any);
  const benefits = getLocationServiceBenefits(service as any);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-wide">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="mb-6 text-3xl lg:text-4xl font-bold text-black">
              {serviceDisplay} Services Specifically for {locationDisplay} Businesses
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our {serviceDisplay.toLowerCase()} services are specifically designed for businesses in {locationDisplay}, 
              combining local market knowledge with proven digital strategies.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <Reveal key={index} delay={index * 0.1}>
              <div className="flex items-start space-x-4 bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-black">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// Helper function for location + service benefits
function getLocationServiceBenefits(service: any) {
  const benefitsMap: Record<string, Array<{ title: string; description: string }>> = {
    "website-redesign": [
      { title: "Local Market Research", description: "In-depth analysis of your local competition and market positioning" },
      { title: "Location-Specific Design", description: "Design elements that resonate with your local customer base" },
      { title: "Local SEO Integration", description: "Built-in local SEO optimization for better local search rankings" },
      { title: "Community-Focused Content", description: "Content strategy tailored to your local community" }
    ],
    "seo-optimisation": [
      { title: "Local Keyword Targeting", description: "Target location-specific keywords that your customers actually search for" },
      { title: "Google My Business Optimization", description: "Complete optimization of your Google Business Profile" },
      { title: "Local Citation Building", description: "Consistent business listings across local directories" },
      { title: "Review Management", description: "Strategies to get more positive reviews from local customers" }
    ],
    // Add more services as needed
  };

  return benefitsMap[service] || [
    { title: "Local Market Knowledge", description: "Deep understanding of your local market and customer behavior" },
    { title: "Community Connections", description: "Leverage local partnerships and community relationships" },
    { title: "Location-Specific Strategy", description: "Customized approach based on your local market dynamics" },
    { title: "Local Competitor Analysis", description: "Stay ahead of your local competition with targeted strategies" }
  ];
}
