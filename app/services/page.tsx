import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { ArrowRight, CheckCircle, Zap, Globe, Server, LineChart, PaintBucket, ShoppingBag, Shield, Gauge, Palette, FileEdit } from "lucide-react"
import { Button } from "@/components/ui/button"
import Reveal from "@/components/reveal-animation"
import { SERVICES, getServiceDisplayName, Service } from "@/lib/data"

export const metadata: Metadata = {
  title: "Services | Melling Web Studios LTD",
  description:
    "High-performance, SEO-optimized web design, hosting, and AI-powered landing pages for UK small businesses. Get a free website redesign and ongoing support from a results-driven team.",
}

function getServiceDescription(service: Service): string {
  const descriptions: Record<Service, string> = {
    "website-redesign": "Transform your existing website with modern design and improved functionality",
    "seo-optimisation": "Boost your search rankings and attract more organic traffic",
    "conversion-boosting": "Optimize your website to turn more visitors into customers",
    "local-seo": "Dominate local search results and attract nearby customers",
    "mobile-optimisation": "Ensure perfect performance across all mobile devices",
    "google-ads-landing-pages": "Create high-converting pages for your advertising campaigns",
    "web-development": "Custom web development solutions tailored to your business needs",
    "ecommerce-development": "Build powerful online stores that drive sales",
    "website-maintenance": "Keep your website secure, updated, and performing optimally",
    "speed-optimisation": "Make your website lightning-fast for better user experience",
    "branding-design": "Create a cohesive brand identity that resonates with customers",
    "content-writing": "Engaging, SEO-optimized content that converts visitors"
  };
  return descriptions[service];
}

// Get the appropriate icon for each service
function getServiceIcon(service: Service) {
  const icons = {
    "website-redesign": Globe,
    "seo-optimisation": LineChart,
    "conversion-boosting": Zap,
    "local-seo": Globe,
    "mobile-optimisation": Gauge,
    "google-ads-landing-pages": LineChart,
    "web-development": Globe,
    "ecommerce-development": ShoppingBag,
    "website-maintenance": Shield,
    "speed-optimisation": Gauge,
    "branding-design": Palette,
    "content-writing": FileEdit
  };
  return icons[service] || CheckCircle;
}

// Get benefits for each service
function getServiceBenefits(service: Service): Array<string> {
  const benefits: Record<Service, Array<string>> = {
    "website-redesign": [
      "Modern, responsive design that builds customer trust",
      "Fast loading speeds for better user experience",
      "Custom design that aligns with your brand identity",
      "Built-in SEO to help you rank higher in search results",
      "Conversion optimization to turn visitors into customers"
    ],
    "seo-optimisation": [
      "Thorough keyword research and implementation",
      "Technical SEO to improve site structure and performance",
      "Content optimization to attract and engage visitors",
      "Local SEO to reach customers in your area",
      "Regular reporting to track your progress"
    ],
    "conversion-boosting": [
      "User experience improvements to increase conversions",
      "A/B testing to determine what works best",
      "Clear call-to-action strategies that drive results",
      "Trust-building elements that convince visitors to take action",
      "Continuous improvement based on real-time analytics"
    ],
    "local-seo": [
      "Google My Business optimization",
      "Local citation building and management",
      "Location-specific keyword targeting",
      "Review generation and management strategies",
      "Local content strategy to boost relevance"
    ],
    "mobile-optimisation": [
      "Responsive design that works on all devices",
      "Mobile-first approach to website development",
      "Fast loading speeds on mobile networks",
      "Touch-friendly navigation and elements",
      "Google mobile-friendly compliance"
    ],
    "google-ads-landing-pages": [
      "Conversion-focused landing page design",
      "Fast loading speeds to reduce bounce rates",
      "Targeted messaging aligned with your ads",
      "A/B testing to maximize conversion rates",
      "Analytics integration to track performance"
    ],
    "web-development": [
      "Custom development tailored to your needs",
      "Modern frameworks like Next.js and React",
      "Clean, maintainable code for future scalability",
      "Integration with third-party services and APIs",
      "Thorough testing and quality assurance"
    ],
    "ecommerce-development": [
      "User-friendly product browsing and checkout",
      "Secure payment gateway integration",
      "Inventory and order management systems",
      "Mobile-optimized shopping experience",
      "Marketing and SEO features built-in"
    ],
    "website-maintenance": [
      "Regular updates and security patches",
      "Performance monitoring and optimization",
      "Content updates and additions as needed",
      "Technical support and troubleshooting",
      "Regular backups and disaster recovery"
    ],
    "speed-optimisation": [
      "Code optimization for faster loading",
      "Image and asset optimization",
      "Server and hosting optimization",
      "Caching and performance enhancements",
      "Regular speed tests and improvements"
    ],
    "branding-design": [
      "Comprehensive brand identity development",
      "Logo design and visual elements creation",
      "Brand guidelines and style documentation",
      "Consistent implementation across all touchpoints",
      "Brand strategy aligned with your business goals"
    ],
    "content-writing": [
      "SEO-optimized content that ranks in search",
      "Engaging copy that connects with your audience",
      "Clear, persuasive messaging that drives action",
      "Brand voice development and consistency",
      "Regular content updates to keep your site fresh"
    ]
  };
  return benefits[service] || [];
}

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-background via-bg-light to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container-wide relative">
          <div className="max-w-4xl mx-auto text-center">
            <Reveal>
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                Expert Digital Services
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="mb-6 text-center">Our Services</h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-muted-foreground text-xl max-w-3xl mx-auto leading-relaxed">
                Melling Web Studios delivers modern, ultra-fast websites and ongoing support designed to get UK small businesses noticed and turning traffic into paying customers. We build, launch, and host your site—then keep it optimized and growing.
              </p>
            </Reveal>
            
            <Reveal delay={0.3}>
              <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
                <Link href="/free-redesign">
                  <Button className="btn btn-primary">
                    Free Website Redesign
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-background">
        <div className="container-wide">
          <Reveal>
            <div className="text-center mb-12">
              <h2 className="mb-4">Complete Digital Solutions</h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                From website design to ongoing maintenance, we provide comprehensive digital services
                to help your business succeed online.
              </p>
            </div>
          </Reveal>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            <Reveal delay={0.1}>
              <div className="bg-background/80 backdrop-blur-sm border border-border rounded-lg px-4 py-6 text-center">
                <span className="text-3xl font-bold text-primary">12+</span>
                <p className="text-sm text-muted-foreground">Specialized Services</p>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="bg-background/80 backdrop-blur-sm border border-border rounded-lg px-4 py-6 text-center">
                <span className="text-3xl font-bold text-primary">100%</span>
                <p className="text-sm text-muted-foreground">Custom Solutions</p>
              </div>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="bg-background/80 backdrop-blur-sm border border-border rounded-lg px-4 py-6 text-center">
                <span className="text-3xl font-bold text-primary">100+</span>
                <p className="text-sm text-muted-foreground">Projects Completed</p>
              </div>
            </Reveal>
            <Reveal delay={0.4}>
              <div className="bg-background/80 backdrop-blur-sm border border-border rounded-lg px-4 py-6 text-center">
                <span className="text-3xl font-bold text-primary">24/7</span>
                <p className="text-sm text-muted-foreground">Support & Monitoring</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Individual Service Sections */}
      {SERVICES.map((service, index) => {
        const ServiceIcon = getServiceIcon(service as Service);
        const serviceDisplay = getServiceDisplayName(service as Service);
        const description = getServiceDescription(service as Service);
        const benefits = getServiceBenefits(service as Service);
        const isEven = index % 2 === 0;
        
        return (
          <section 
            key={service}
            id={service} 
            className={`py-20 ${isEven ? 'bg-background' : 'bg-bg-light'}`}
          >
            <div className="container-wide">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {isEven ? (
                  <>
                    <Reveal>
                      <div className="relative">
                        <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/5 rounded-full"></div>
                        <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                          <Image
                            src={`/placeholder.svg?height=600&width=800&query=${serviceDisplay} service example`}
                            alt={serviceDisplay}
                            width={800}
                            height={600}
                            className="w-full h-auto object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        </div>
                      </div>
                    </Reveal>
                    <Reveal delay={0.2}>
                      <div>
                        <div className="flex items-center gap-2 mb-4">
                          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                            <ServiceIcon className="w-6 h-6 text-primary" />
                          </div>
                          <div className="h-px bg-border flex-1"></div>
                        </div>
                        <h2 className="mb-4">{serviceDisplay}</h2>
                        <p className="text-muted-foreground mb-6">
                          {description}
                        </p>
                        <ul className="space-y-3 mb-8">
                          {benefits.slice(0, 4).map((benefit, idx) => (
                            <li key={idx} className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1" />
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                        <Link href={`/services/${service}`}>
                          <Button className="btn btn-primary">
                            Learn More About {serviceDisplay}
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </Link>
                      </div>
                    </Reveal>
                  </>
                ) : (
                  <>
                    <Reveal>
                      <div>
                        <div className="flex items-center gap-2 mb-4">
                          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                            <ServiceIcon className="w-6 h-6 text-primary" />
                          </div>
                          <div className="h-px bg-border flex-1"></div>
                        </div>
                        <h2 className="mb-4">{serviceDisplay}</h2>
                        <p className="text-muted-foreground mb-6">
                          {description}
                        </p>
                        <ul className="space-y-3 mb-8">
                          {benefits.slice(0, 4).map((benefit, idx) => (
                            <li key={idx} className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1" />
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                        <Link href={`/services/${service}`}>
                          <Button className="btn btn-primary">
                            Learn More About {serviceDisplay}
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </Link>
                      </div>
                    </Reveal>
                    <Reveal delay={0.2}>
                      <div className="relative">
                        <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/5 rounded-full"></div>
                        <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                          <Image
                            src={`/placeholder.svg?height=600&width=800&query=${serviceDisplay} service example`}
                            alt={serviceDisplay}
                            width={800}
                            height={600}
                            className="w-full h-auto object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        </div>
                      </div>
                    </Reveal>
                  </>
                )}
              </div>
            </div>
          </section>
        )
      })}

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container-wide flex flex-col items-center text-center">
          <Reveal>
            <h2 className="mb-6">Ready to grow your business online?</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-white/80 max-w-2xl mx-auto mb-8 text-lg">
              Get in touch for a free website audit or to claim your no-risk redesign. We handle the tech—so you can focus on your business.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="flex flex-wrap justify-center gap-4 w-full">
              <Link href="/free-redesign">
                <Button className="btn btn-lg bg-white text-primary hover:bg-white/90">
                  Get Free Redesign
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="outline"
                  className="btn btn-lg bg-transparent border-white text-white hover:bg-white/10"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
