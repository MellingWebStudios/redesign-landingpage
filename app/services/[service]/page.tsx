import { notFound } from "next/navigation";
import { PageTemplate } from "@/components/PageTemplate";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SERVICES, isValidService } from "@/lib/data";
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

  return (
    <>
      <Breadcrumbs service={service} />
      <PageTemplate service={service} />
    </>
  );
}
