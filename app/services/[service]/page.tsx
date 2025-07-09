import { SERVICES, isValidService, getServiceDisplayName } from "@/lib/data";
import { buildStandaloneServiceMeta } from "@/lib/seo";
import type { Metadata } from "next";
import ServiceHeroSection from "./components/ServiceHeroSection";
import ServiceBenefitsSection from "./components/ServiceBenefitsSection";
import ServiceProcessSection from "./components/ServiceProcessSection";
import ServicePortfolioSection from "./components/ServicePortfolioSection";
import ServiceCTASection from "./components/ServiceCTASection";
import ServiceTechSection from "./components/ServiceTechSection";

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
  const serviceDisplay = getServiceDisplayName(service as Parameters<typeof getServiceDisplayName>[0]);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <ServiceHeroSection serviceDisplay={serviceDisplay} />

      {/* Service Benefits Section */}
      <ServiceBenefitsSection service={service} serviceDisplay={serviceDisplay} />

      {/* Section Divider */}
      <div className="relative">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
      </div>

      {/* Portfolio Section */}
      <ServicePortfolioSection serviceDisplay={serviceDisplay} />

      {/* Section Divider */}
      <div className="relative bg-white">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-8">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-blue-500/40 rounded-full"></div>
            <div className="w-2 h-2 bg-purple-500/60 rounded-full"></div>
            <div className="w-1.5 h-1.5 bg-cyan-500/40 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <ServiceProcessSection service={service} serviceDisplay={serviceDisplay} />

      {/* Section Divider */}
      <div className="relative bg-white">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
      </div>

      {/* Technology Stack Section */}
      <ServiceTechSection />

      {/* Section Divider */}
      <div className="relative bg-white">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-8">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-blue-500/40 rounded-full"></div>
            <div className="w-2 h-2 bg-purple-500/60 rounded-full"></div>
            <div className="w-1.5 h-1.5 bg-cyan-500/40 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <ServiceCTASection serviceDisplay={serviceDisplay} />
    </main>
  );
}
