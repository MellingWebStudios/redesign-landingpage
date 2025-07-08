import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, CheckCircle, Phone, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/reveal-animation";
import { SERVICES, isValidService, getServiceDisplayName } from "@/lib/data";
import { buildStandaloneServiceMeta } from "@/lib/seo";
import type { Metadata } from "next";

interface ServicePageProps {
  params: {
    service: string;
  };
}

export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    service,
  }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { service } = await params;
  
  if (!isValidService(service)) {
    return {
      title: "Not Found",
    };
  }
  
  return buildStandaloneServiceMeta(service);
}

export const revalidate = 86400; // 24 hours

export default async function ServicePage({ params }: ServicePageProps) {
  const { service } = await params;
  
  if (!isValidService(service)) {
    notFound();
  }

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
                Web Design Experts
              </div>
            </Reveal>
            
            <Reveal delay={0.1}>
              <h1 className="mb-6 text-4xl lg:text-5xl xl:text-6xl font-bold text-black text-center">
                Professional {serviceDisplay}
              </h1>
            </Reveal>
            
            <Reveal delay={0.2}>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 text-center">
                Expert {serviceDisplay.toLowerCase()} services to help your business succeed online. 
                Get more customers with our proven strategies and cutting-edge solutions.
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
                    <Link href="/services" className="hover:text-primary transition-colors">
                      Services
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

      {/* Service Benefits Section */}
      <ServiceBenefitsSection service={service} />

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container-wide">
          <Reveal>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="mb-6 text-3xl lg:text-4xl font-bold text-black">
                Ready to Get Started with {serviceDisplay}?
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
                Get a free consultation and see how our {serviceDisplay.toLowerCase()} services 
                can help your business succeed online with proven strategies.
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
                  Expert advice
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

// Service Benefits Section Component
function ServiceBenefitsSection({ service }: { service: string }) {
  const serviceDisplay = getServiceDisplayName(service as any);
  
  // Service-specific benefits
  const benefits = getServiceBenefits(service as any);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-wide">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="mb-6 text-3xl lg:text-4xl font-bold text-black">
              What's Included in Our {serviceDisplay} Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our comprehensive {serviceDisplay.toLowerCase()} services are designed to deliver 
              measurable results and help your business thrive in the digital landscape.
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

// Helper function for service benefits
function getServiceBenefits(service: any) {
  const benefitsMap: Record<string, Array<{ title: string; description: string }>> = {
    "website-redesign": [
      { title: "Modern, Professional Design", description: "Contemporary design that reflects your brand and builds trust with customers" },
      { title: "Mobile-First Approach", description: "Optimized for mobile devices where most of your customers browse" },
      { title: "Speed Optimization", description: "Lightning-fast loading times to keep visitors engaged" },
      { title: "Conversion Optimization", description: "Designed to turn visitors into paying customers" }
    ],
    "seo-optimisation": [
      { title: "Local Search Ranking", description: "Appear higher in Google when customers search for your services locally" },
      { title: "Keyword Research", description: "Target the exact terms your customers are searching for" },
      { title: "Technical SEO", description: "Behind-the-scenes optimization for better search performance" },
      { title: "Content Strategy", description: "SEO-optimized content that engages and converts" }
    ],
    // Add more services as needed
  };

  return benefitsMap[service] || [
    { title: "Expert Implementation", description: "Professional implementation of industry best practices" },
    { title: "Measurable Results", description: "Track progress with detailed analytics and reporting" },
    { title: "Ongoing Support", description: "Continuous support to ensure long-term success" },
    { title: "Custom Solutions", description: "Tailored approach designed for your specific business needs" }
  ];
}
