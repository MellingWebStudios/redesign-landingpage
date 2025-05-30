import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { ArrowRight, Code, Layout, Palette, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import ServiceCard from "@/components/service-card"
import TestimonialCard from "@/components/testimonial-card"
import BlogCard from "@/components/blog-card"
import CompareImage from "@/components/compare-image"
import Reveal from "@/components/reveal-animation"
import { Star } from "lucide-react";
import HeroSection from "@/components/HeroSection";


export const metadata: Metadata = {
  title: "High-Performance Web Experiences | Melling WebStudios",
  description:
    "Premium React & Next.js development for small businesses looking to grow online with lightning-fast, conversion-focused websites.",
}

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />
      {/* Logos Bar */}

      {/* Services Snapshot */}
      <section className="py-12 bg-background border-y border-border">
        <div className="container-wide">
          <Reveal>
            <div className="text-left max-w-2xl mb-16">
              <h2 className="mb-4">Our Services</h2>
              <p className="text-muted-foreground text-lg">
                We specialize in creating high-performance web experiences that
                drive business growth.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Reveal delay={0.1}>
              <ServiceCard
                title="Custom Websites"
                description="Bespoke, high-performance websites built with React and Next.js that load in milliseconds and convert visitors."
                icon={Layout}
                href="/services#custom-websites"
              />
            </Reveal>
            <Reveal delay={0.2}>
              <ServiceCard
                title="Web Applications"
                description="Complex, interactive web applications with seamless user experiences and robust backend integrations."
                icon={Code}
                href="/services#web-applications"
              />
            </Reveal>
            <Reveal delay={0.3}>
              <ServiceCard
                title="UX Design"
                description="User-centered design that creates intuitive, engaging experiences that guide users toward conversion."
                icon={Palette}
                href="/services#ux-design"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Featured Project */}
      <section className="py-24 bg-bg-light">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <Reveal>
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/placeholder.svg?key=148gi"
                  alt="Featured project screenshot"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </Reveal>
            <div>
              <Reveal>
                <span className="text-primary font-medium mb-2 block">
                  Featured Project
                </span>
                <h2 className="mb-4">BitPay Redesign</h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mb-6">
                  BitPay needed a lightning-fast, conversion-focused website
                  that would showcase their cryptocurrency payment solutions
                  while providing a seamless user experience.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-full mr-4">
                      <span className="text-primary font-bold">01</span>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Challenge</h4>
                      <p className="text-muted-foreground">
                        Slow page loads and poor mobile experience were hurting
                        conversion rates.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-full mr-4">
                      <span className="text-primary font-bold">02</span>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Solution</h4>
                      <p className="text-muted-foreground">
                        Next.js App Router with optimized assets and responsive
                        design.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-full mr-4">
                      <span className="text-primary font-bold">03</span>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Results</h4>
                      <p className="text-muted-foreground">
                        43% faster load times and 27% increase in conversion
                        rate.
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={0.3}>
                <Link href="/work/bitpay-redesign">
                  <Button className="btn btn-primary">
                    View Full Case Study
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Free Redesign Banner */}
      <section className="py-24 bg-background">
        <div className="container-wide">
          <div className="border border-dashed border-primary rounded-lg p-8 md:p-12 bg-primary/5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <Reveal>
                  <span className="inline-block bg-primary text-white px-3 py-1 rounded-full text-sm font-medium mb-4">
                    Limited Time Offer
                  </span>
                  <h2 className="mb-4">Free Website Redesign Consultation</h2>
                </Reveal>
                <Reveal delay={0.1}>
                  <p className="mb-6">
                    Let us show you how we can transform your current website
                    into a high-converting, lightning-fast experience that will
                    grow your business.
                  </p>
                </Reveal>
                <Reveal delay={0.2}>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center">
                      <div className="bg-primary/20 p-1 rounded-full mr-3">
                        <svg
                          className="h-4 w-4 text-primary"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span>No obligation consultation</span>
                    </li>
                    <li className="flex items-center">
                      <div className="bg-primary/20 p-1 rounded-full mr-3">
                        <svg
                          className="h-4 w-4 text-primary"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span>Actionable recommendations you can implement</span>
                    </li>
                    <li className="flex items-center">
                      <div className="bg-primary/20 p-1 rounded-full mr-3">
                        <svg
                          className="h-4 w-4 text-primary"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span>Performance and conversion analysis</span>
                    </li>
                  </ul>
                </Reveal>
                <Reveal delay={0.3}>
                  <Link href="/free-redesign">
                    <Button className="btn btn-primary btn-lg">
                      Get Your Free Redesign
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </Reveal>
              </div>
              <Reveal delay={0.2}>
                <div className="h-[400px]">
                  <CompareImage
                    beforeImage="/placeholder.svg?key=c02hh"
                    afterImage="/placeholder.svg?key=7jqqa"
                    beforeAlt="Before redesign"
                    afterAlt="After redesign"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-background text-foreground">
        <div className="container-wide px-4 md:px-8">
          <Reveal>
            <div className="text-left max-w-2xl mb-16">
              <h2 className="mb-4">What Our Clients Say</h2>
              <p className="text-muted-1 text-lg">
                Don't just take our word for it. Here's what our clients have to
                say about working with us.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <Carousel className="w-full" opts={{ loop: true }}>
              <CarouselContent>
                <CarouselItem className="basis-full sm:basis-1/2 lg:basis-1/3 p-2 md:p-4">
                  <TestimonialCard
                    quote="Melling WebStudios transformed our outdated website into a lightning-fast platform that's driving real business results. Our conversion rate has increased by 35% since launch."
                    author="Sarah Johnson"
                    company="BitTech Solutions"
                    rating={5}
                  />
                </CarouselItem>
                <CarouselItem className="basis-full sm:basis-1/2 lg:basis-1/3 p-2 md:p-4">
                  <TestimonialCard
                    quote="The team at Melling WebStudios delivered exactly what we needed - a fast, modern website that showcases our products beautifully and converts visitors into customers."
                    author="Michael Chen"
                    company="Crypto Innovations"
                    rating={5}
                  />
                </CarouselItem>
                <CarouselItem className="basis-full sm:basis-1/2 lg:basis-1/3 p-2 md:p-4">
                  <TestimonialCard
                    quote="Working with Melling WebStudios was a game-changer for our business. Their expertise in React and Next.js resulted in a website that's not only beautiful but incredibly fast."
                    author="Jessica Williams"
                    company="BlockChain Ventures"
                    rating={4}
                  />
                </CarouselItem>
              </CarouselContent>
              <div className="flex justify-center mt-6 md:mt-8 gap-4">
                <CarouselPrevious className="relative static translate-y-0 mr-0 h-10 w-10" />
                <CarouselNext className="relative static translate-y-0 ml-0 h-10 w-10" />
              </div>
            </Carousel>
          </Reveal>
        </div>
      </section>

      {/* Insights Preview */}
      <section className="py-24 bg-background">
        <div className="container-wide">
          <Reveal>
            <div className="flex justify-between items-center mb-16">
              <h2>Latest Insights</h2>
              <Link
                href="/insights"
                className="text-primary hover:underline flex items-center"
              >
                View all insights
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Reveal delay={0.1}>
              <BlogCard
                title="Why Next.js 14 is a Game-Changer for Business Websites"
                slug="nextjs-14-game-changer"
                excerpt="Discover how Next.js 14's new features can dramatically improve your website's performance and user experience."
                date="April 15, 2023"
                imageUrl="/placeholder.svg?key=fa7mv"
                tag="Development"
              />
            </Reveal>
            <Reveal delay={0.2}>
              <BlogCard
                title="5 Ways to Improve Your Website's Conversion Rate"
                slug="improve-website-conversion"
                excerpt="Learn practical strategies to turn more of your website visitors into paying customers with these proven techniques."
                date="March 28, 2023"
                imageUrl="/placeholder.svg?key=ylbsw"
                tag="Marketing"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA Footer Strip */}
      <section className="py-20 bg-primary text-white">
        <div className="container-wide text-center">
          <Reveal>
            <h2 className="mb-6">Ready to level-up your website?</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-white/80 max-w-2xl mx-auto mb-8 text-lg">
              Let's discuss how we can transform your online presence into a
              high-performing asset for your business.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="w-full flex justify-center items-center">
              <Link href="/contact" className="inline-block">
                <Button
                  className="btn btn-lg bg-white text-primary hover:bg-white/90"
                  style={{ minWidth: "auto", width: "auto", margin: 0 }}
                >
                  Get in Touch
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </Reveal>

        </div>
      </section>
    </>
  );
}
