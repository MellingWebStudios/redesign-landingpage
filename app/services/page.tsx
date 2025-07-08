import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { ArrowRight, CheckCircle } from "lucide-react"
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

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-background">
        <div className="container-wide">
          <Reveal>
            <h1 className="text-center mb-6">What We Do</h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-left text-muted-foreground text-xl max-w-3xl mx-auto">
              Melling Web Studios delivers modern, ultra-fast websites and ongoing support designed to get UK small businesses noticed and turning traffic into paying customers. <br /><br />
              We build, launch, and host your site—then keep it optimised and growing with ongoing updates, analytics, and technical SEO.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Website Redesign & Builds */}
      <section id="websites" className="py-20 bg-background">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <Reveal delay={0.2}>
              <Image
                src="/service01.png"
                alt="Modern responsive web design preview"
                width={800}
                height={600}
                className="rounded-lg shadow-lg"
              />
            </Reveal>
            <Reveal>
              <div className="md:order-2">
                <span className="text-primary font-medium mb-2 block">01</span>
                <h2 className="mb-4">Website Redesign & Builds</h2>
                <p className="mb-6">
                  Get a complete website overhaul or a brand new build—using the latest Next.js, React, and AI tooling for blazing performance and unbeatable SEO.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1" />
                    <span>Free, no-risk website redesigns for new clients</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1" />
                    <span>100% custom Next.js/React builds, not templates</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1" />
                    <span>SEO-optimized, lightning-fast load times</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1" />
                    <span>Conversion-focused design and copywriting</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1" />
                    <span>Mobile-first and fully responsive</span>
                  </li>
                </ul>
                <Link href="/free-redesign">
                  <Button className="btn btn-primary">
                    Get Your Free Redesign
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Hosting, Maintenance & Ongoing Support */}
      <section id="hosting" className="py-20 bg-bg-light">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <Reveal>
              <div className="md:order-2">
                <Image
                  src="/service02.png"
                  alt="Website hosting and support"
                  width={800}
                  height={600}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </Reveal>
            <Reveal>
              <div>
                <span className="text-primary font-medium mb-2 block">02</span>
                <h2 className="mb-4">Hosting, Maintenance & Ongoing Support</h2>
                <p className="mb-6">
                  Forget about website headaches—our team keeps your site running, secure, and up-to-date with a simple, affordable monthly subscription.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1" />
                    <span>Fully managed UK cloud hosting (Vercel, Fly.io)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1" />
                    <span>24/7 uptime monitoring and backups</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1" />
                    <span>Free minor updates, changes, and support</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1" />
                    <span>Ongoing technical SEO & analytics setup</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1" />
                    <span>Affordable, fixed monthly fees (£50–£200/mo)</span>
                  </li>
                </ul>
                <Link href="/contact">
                  <Button className="btn btn-primary">
                    Start Hosting With Us
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>


      {/* AI Landing Pages & Growth Services */}
      <section id="ai-landing-pages" className="py-20 bg-background">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <Reveal>
              <div>
                <span className="text-primary font-medium mb-2 block">03</span>
                <h2 className="mb-4">AI Landing Pages & SEO Growth</h2>
                <p className="mb-6">
                  Tap into next-gen lead generation with AI-powered landing pages and location-based SEO to boost your business where it matters most.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1" />
                    <span>AI-generated landing pages tailored for your business</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1" />
                    <span>Dynamic location/service pages for top Google rankings</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1" />
                    <span>Google Analytics & conversion tracking built-in</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1" />
                    <span>Ongoing content and technical SEO updates</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1" />
                    <span>Lead magnets, reviews, and reputation tools</span>
                  </li>
                </ul>
                <Link href="/contact">
                  <Button className="btn btn-primary">
                    Boost My Leads
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <Image
                src="/service03.png"
                alt="AI landing pages and SEO growth"
                width={800}
                height={600}
                className="rounded-lg shadow-lg"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* All Services Grid */}
      <section className="py-20 bg-background">
        <div className="container-wide">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="mb-6">Our Complete Service Offering</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
                From website design to ongoing maintenance, we offer comprehensive digital solutions
                to help your business succeed online.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, index) => {
              const serviceDisplay = getServiceDisplayName(service as Service);
              return (
                <Reveal key={service} delay={index * 0.1}>
                  <Link href={`/services/${service}`} className="group">
                    <div className="bg-white border border-gray-100 rounded-xl p-6 hover:shadow-lg hover:border-primary/20 transition-all duration-300 h-full">
                      <div className="mb-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                          <CheckCircle className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                          {serviceDisplay}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-4">
                          {getServiceDescription(service as Service)}
                        </p>
                      </div>
                      <div className="flex items-center text-primary font-medium group-hover:gap-2 transition-all">
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

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
              <Link href="/contact">
                <Button className="btn btn-lg bg-white text-primary hover:bg-white/90">
                  Contact Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/free-redesign">
                <Button
                  variant="outline"
                  className="btn btn-lg bg-transparent border-white text-white hover:bg-white/10"
                >
                  Get Free Redesign
                </Button>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
