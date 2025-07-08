import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, CheckCircle, MapPin, Phone, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/reveal-animation";
import { LOCATIONS, isValidLocation, getLocationDisplayName } from "@/lib/data";
import { buildLocationMeta } from "@/lib/seo";
import type { Metadata } from "next";

interface LocationPageProps {
  params: {
    location: string;
  };
}

export async function generateStaticParams() {
  return LOCATIONS.map((location) => ({
    location,
  }));
}

export async function generateMetadata({ params }: LocationPageProps): Promise<Metadata> {
  const { location } = await params;
  
  if (!isValidLocation(location)) {
    return {
      title: "Not Found",
    };
  }
  
  return buildLocationMeta(location);
}

export const revalidate = 86400; // 24 hours

export default async function LocationPage({ params }: LocationPageProps) {
  const { location } = await params;
  
  if (!isValidLocation(location)) {
    notFound();
  }

  const locationDisplay = getLocationDisplayName(location);

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
                Web Design Services in {locationDisplay}
              </h1>
            </Reveal>
            
            <Reveal delay={0.2}>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 text-center">
                High-performance web design and development services in {locationDisplay}. We help 
                local businesses grow online with lightning-fast, conversion-focused websites.
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
                    <span className="text-gray-700 font-medium" aria-current="page">
                      {locationDisplay}
                    </span>
                  </li>
                </ol>
              </nav>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Location Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-wide">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="mb-6 text-3xl lg:text-4xl font-bold text-black">
                Why Choose Local {locationDisplay} Web Design Experts?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We understand the {locationDisplay} market and know what local customers are looking for. 
                Let us help you connect with your local audience and dominate local search results.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: "Local Market Knowledge", 
                description: `Deep understanding of the ${locationDisplay} market and customer preferences`,
                icon: "🎯"
              },
              { 
                title: "Local SEO Optimization", 
                description: `Optimized to rank higher in ${locationDisplay} local search results`,
                icon: "📍"
              },
              { 
                title: "Community Focused", 
                description: `Content and messaging tailored to the ${locationDisplay} community`,
                icon: "🤝"
              }
            ].map((benefit, index) => (
              <Reveal key={index} delay={index * 0.1}>
                <div className="group relative bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 text-center">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto text-2xl">
                      {benefit.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-black">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container-wide">
          <Reveal>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="mb-6 text-3xl lg:text-4xl font-bold text-black">
                Ready to Dominate {locationDisplay} Online?
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
                Get a free consultation and see how we can help you get more customers in {locationDisplay} 
                with a high-performance website designed for local success.
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
