import { notFound } from "next/navigation";
import { PageTemplate } from "@/components/PageTemplate";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { LOCATIONS, isValidLocation } from "@/lib/data";
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

  return (
    <>
      <Breadcrumbs location={location} />
      <PageTemplate location={location} />
    </>
  );
}
