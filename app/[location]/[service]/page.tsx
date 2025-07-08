import { notFound } from "next/navigation";
import { PageTemplate } from "@/components/PageTemplate";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { 
  LOCATIONS, 
  SERVICES, 
  isValidLocation, 
  isValidService 
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

  return (
    <>
      <Breadcrumbs location={location} service={service} />
      <PageTemplate location={location} service={service} />
    </>
  );
}
