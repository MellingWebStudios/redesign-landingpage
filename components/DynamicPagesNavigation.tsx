"use client";

import Link from "next/link";
import { ChevronRight, MapPin, Wrench, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SERVICES, LOCATIONS, getServiceDisplayName, getLocationDisplayName } from "@/lib/data";

export function DynamicPagesNavigation() {
  const featuredServices = SERVICES.slice(0, 6);
  const featuredLocations = ['birmingham', 'manchester', 'london', 'leeds', 'liverpool', 'bristol'] as const;

  return (
    <section className="py-20 bg-background">
      <div className="container-wide">
        <div className="text-center mb-16">
          <h2 className="mb-6">Explore Our Specialized Services</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover web solutions tailored to your location and service needs. We help UK businesses 
            dominate their local markets with high-performance websites and digital marketing.
          </p>
        </div>

        {/* Services Section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Zap className="w-6 h-6 text-primary" />
            <h3 className="text-2xl font-semibold">Our Services</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredServices.map((service) => (
              <Card key={service} className="group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-lg">{getServiceDisplayName(service)}</CardTitle>
                  <CardDescription>
                    Available across all UK locations with local expertise
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Link href={`/services/${service}`}>
                      <Button variant="outline" className="w-full justify-between group-hover:border-primary">
                        View Service Details
                        <ChevronRight className="w-4 h-4" />
                      </Button>
                    </Link>
                    <div className="flex flex-wrap gap-2">
                      {featuredLocations.slice(0, 3).map((location) => (
                        <Link key={location} href={`/${location}/${service}`}>
                          <Badge variant="secondary" className="hover:bg-primary hover:text-white transition-colors">
                            {getLocationDisplayName(location)}
                          </Badge>
                        </Link>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          {SERVICES.length > 6 && (
            <div className="text-center mt-8">
              <Link href="/services">
                <Button variant="outline">
                  View All Services ({SERVICES.length})
                  <ChevronRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          )}
        </div>

        {/* Local Services Section */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <MapPin className="w-6 h-6 text-primary" />
            <h3 className="text-2xl font-semibold">Local Specialists</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredLocations.map((location) => (
              <Card key={location} className="group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-lg">{getLocationDisplayName(location)}</CardTitle>
                  <CardDescription>
                    Local web design and digital marketing services in {getLocationDisplayName(location)}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Link href={`/${location}`}>
                      <Button variant="outline" className="w-full justify-between group-hover:border-primary">
                        View Location Page
                        <ChevronRight className="w-4 h-4" />
                      </Button>
                    </Link>
                    <div className="flex flex-wrap gap-2">
                      {featuredServices.slice(0, 3).map((service) => (
                        <Link key={service} href={`/${location}/${service}`}>
                          <Badge variant="outline" className="hover:bg-primary hover:text-white transition-colors">
                            {getServiceDisplayName(service)}
                          </Badge>
                        </Link>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          {LOCATIONS.length > 6 && (
            <div className="text-center mt-8">
              <div className="text-sm text-muted-foreground">
                We serve {LOCATIONS.length} cities across the UK. Explore location-specific services for your area.
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
