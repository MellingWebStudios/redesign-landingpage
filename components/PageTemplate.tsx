"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/reveal-animation";
import { 
  Service, 
  Location, 
  getServiceDisplayName, 
  getLocationDisplayName 
} from "@/lib/data";

interface PageTemplateProps {
  service?: Service;
  location?: Location;
}

export function PageTemplate({ service, location }: PageTemplateProps) {
  const serviceDisplay = service ? getServiceDisplayName(service) : null;
  const locationDisplay = location ? getLocationDisplayName(location) : null;

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-background via-bg-light to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container-wide relative">
          <div className="max-w-4xl mx-auto text-center">
            <Reveal>
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                {location && <MapPin className="w-4 h-4" />}
                {location ? `${locationDisplay} Specialists` : "Web Design Experts"}
              </div>
            </Reveal>
            
            <Reveal delay={0.1}>
              <h1 className="mb-6 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                {location && service 
                  ? `${serviceDisplay} in ${locationDisplay}`
                  : location && !service
                  ? `Web Design Services in ${locationDisplay}`
                  : service && !location
                  ? `Professional ${serviceDisplay}`
                  : `Professional Web Design Services`
                }
              </h1>
            </Reveal>
            
            <Reveal delay={0.2}>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                {location && service
                  ? `Professional ${serviceDisplay?.toLowerCase()} services in ${locationDisplay}. Transform your online presence with our local expertise and proven strategies.`
                  : location && !service
                  ? `High-performance web design and development services in ${locationDisplay}. We help local businesses grow online with lightning-fast, conversion-focused websites.`
                  : service && !location
                  ? `Expert ${serviceDisplay?.toLowerCase()} services to help your business succeed online. Get more customers with our proven strategies.`
                  : `Professional web design and development services. Lightning-fast, conversion-focused websites designed to help your business grow online.`
                }
              </p>
            </Reveal>
            
            <Reveal delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <Link href="/free-redesign">
                  <Button className="btn btn-primary btn-lg">
                    Get Free Website Audit
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/work">
                  <Button variant="outline" className="btn btn-lg">
                    View Our Work
                  </Button>
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Location-Specific Benefits */}
      {location && !service && <LocationBenefits location={location} />}

      {/* Service Benefits (for standalone service pages) */}
      {service && !location && <ServiceBenefits service={service} />}

      {/* Location + Service Benefits */}
      {service && location && <LocationServiceBenefits location={location} service={service} />}

      {/* Features Section */}
      <FeaturesSection />

      {/* CTA Section */}
      <CTASection service={service} location={location} />
    </main>
  );
}

function LocationBenefits({ location }: { location: Location }) {
  const locationDisplay = getLocationDisplayName(location);

  const benefits = [
    { 
      title: "Local Market Knowledge", 
      description: `Deep understanding of the ${locationDisplay} market and customer preferences` 
    },
    { 
      title: "Local SEO Optimization", 
      description: `Optimized to rank higher in ${locationDisplay} local search results` 
    },
    { 
      title: "Community Focused", 
      description: `Content and messaging tailored to the ${locationDisplay} community` 
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container-wide">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="mb-6">
              Professional Web Design Services in {locationDisplay}
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We understand the {locationDisplay} market and know what local customers are looking for. 
              Let us help you connect with your local audience.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Reveal key={index} delay={index * 0.1}>
              <div className="group relative bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                <div className="mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceBenefits({ service }: { service: Service }) {
  const serviceDisplay = getServiceDisplayName(service);
  const benefits = getServiceBenefits(service);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-wide">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="mb-6">
              {serviceDisplay} Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our {serviceDisplay.toLowerCase()} services are designed to help your business succeed online.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <Reveal key={index} delay={index * 0.1}>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function LocationServiceBenefits({ location, service }: { location: Location; service: Service }) {
  const locationDisplay = getLocationDisplayName(location);
  const serviceDisplay = getServiceDisplayName(service);
  const benefits = getServiceBenefits(service);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-wide">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="mb-6">
              {serviceDisplay} Services in {locationDisplay}
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our {serviceDisplay.toLowerCase()} services are specifically designed for businesses in {locationDisplay}.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <Reveal key={index} delay={index * 0.1}>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  const features = [
    {
      title: "Lightning Fast Loading",
      description: "Pages load in under 2 seconds, keeping your customers engaged"
    },
    {
      title: "Mobile Optimized", 
      description: "Perfect experience on all devices - phone, tablet, desktop"
    },
    {
      title: "SEO Optimized",
      description: "Built to rank higher in Google search results"
    },
    {
      title: "Conversion Focused",
      description: "Designed to turn visitors into paying customers"
    },
    {
      title: "Easy to Update",
      description: "Simple content management system you can use yourself"
    },
    {
      title: "Ongoing Support",
      description: "We're here to help whenever you need us"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container-wide">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="mb-6">Everything You Need to Succeed Online</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our websites come packed with features designed to help your business grow.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Reveal key={index} delay={index * 0.1}>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection({ service, location }: { service?: Service; location?: Location }) {
  const serviceDisplay = service ? getServiceDisplayName(service) : null;
  const locationDisplay = location ? getLocationDisplayName(location) : null;

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-wide">
        <Reveal>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="mb-6">
              Ready to {serviceDisplay ? serviceDisplay.split(' ')[0] : "Transform"} Your Website?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
              Get a free consultation and see how we can help you get more customers{location ? ` in ${locationDisplay}` : ""} 
              with a high-performance website.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link href="/free-redesign">
                <Button className="btn btn-primary btn-lg">
                  Get Free Website Audit
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" className="btn btn-lg">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Us Today
                </Button>
              </Link>
            </div>

            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-sm text-muted-foreground">
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
  );
}

function getServiceBenefits(service: Service) {
  const benefitsMap: Record<Service, Array<{ title: string; description: string }>> = {
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
    "conversion-boosting": [
      { title: "Landing Page Optimization", description: "Maximize conversions from your advertising and marketing efforts" },
      { title: "User Experience Design", description: "Smooth, intuitive journey from visitor to customer" },
      { title: "Trust Signals", description: "Reviews, testimonials, and certifications prominently displayed" },
      { title: "Clear Call-to-Actions", description: "Guide visitors toward booking your services" }
    ],
    "local-seo": [
      { title: "Google My Business", description: "Optimized Google Business Profile for maximum local visibility" },
      { title: "Local Citations", description: "Consistent business information across local directories" },
      { title: "Location Pages", description: "Dedicated pages for each area you serve" },
      { title: "Review Management", description: "Strategies to get more positive reviews from customers" }
    ],
    "mobile-optimisation": [
      { title: "Responsive Design", description: "Perfect display and functionality on all mobile devices" },
      { title: "Touch-Friendly Interface", description: "Easy navigation and interaction on touchscreens" },
      { title: "Fast Mobile Loading", description: "Optimized specifically for mobile network speeds" },
      { title: "Mobile User Experience", description: "Streamlined experience designed for mobile users" }
    ],
    "google-ads-landing-pages": [
      { title: "High-Converting Pages", description: "Landing pages specifically designed to convert ad traffic" },
      { title: "Message Matching", description: "Pages that match your Google Ads messaging for consistency" },
      { title: "Fast Loading", description: "Quick loading times to improve ad quality scores" },
      { title: "Conversion Tracking", description: "Proper tracking setup to measure ad performance" }
    ],
    "web-development": [
      { title: "Custom Development", description: "Bespoke web applications tailored to your specific business needs" },
      { title: "Modern Technologies", description: "Built with React, Next.js, and other cutting-edge technologies" },
      { title: "Scalable Architecture", description: "Future-proof solutions that grow with your business" },
      { title: "API Integration", description: "Connect with third-party services and existing systems" }
    ],
    "ecommerce-development": [
      { title: "Online Store Setup", description: "Complete e-commerce solution with payment processing" },
      { title: "Inventory Management", description: "Easy-to-use system for managing products and stock" },
      { title: "Secure Payments", description: "SSL encryption and secure payment gateways" },
      { title: "Order Management", description: "Streamlined order processing and customer management" }
    ],
    "website-maintenance": [
      { title: "Regular Updates", description: "Keep your website secure with regular software updates" },
      { title: "Content Updates", description: "Regular content updates to keep your site fresh" },
      { title: "Performance Monitoring", description: "Continuous monitoring to ensure optimal performance" },
      { title: "Security Scanning", description: "Regular security scans to protect against threats" }
    ],
    "speed-optimisation": [
      { title: "Page Speed Analysis", description: "Comprehensive analysis of your website's loading speed" },
      { title: "Image Optimization", description: "Compress and optimize images for faster loading" },
      { title: "Code Optimization", description: "Minify and optimize CSS, JavaScript, and HTML" },
      { title: "CDN Setup", description: "Content delivery network for global fast loading" }
    ],
    "branding-design": [
      { title: "Logo Design", description: "Professional logo design that represents your brand" },
      { title: "Brand Guidelines", description: "Comprehensive brand guidelines for consistent identity" },
      { title: "Marketing Materials", description: "Business cards, brochures, and other marketing collateral" },
      { title: "Brand Strategy", description: "Strategic approach to building your brand identity" }
    ],
    "content-writing": [
      { title: "SEO Content", description: "Search engine optimized content that ranks and converts" },
      { title: "Industry Expertise", description: "Content written by experts who understand your industry" },
      { title: "Engaging Copy", description: "Compelling copy that engages readers and drives action" },
      { title: "Regular Updates", description: "Fresh content to keep your website current and relevant" }
    ]
  };

  return benefitsMap[service] || [];
}
