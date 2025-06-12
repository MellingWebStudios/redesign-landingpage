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
      <section className="py-20 bg-gray-50 relative overflow-hidden w-full">
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(247,147,26,0.05),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(247,147,26,0.03),transparent_50%)]"></div>

        <div className="w-full max-w-7xl mx-auto px-4 relative z-10 flex flex-col items-center">
          <Reveal>
            <div className="flex flex-col items-center justify-center text-center max-w-4xl w-full mx-auto mb-20">
              <span className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-6 tracking-wide uppercase">
                Our Expertise
              </span>
              <h2 className="mb-6 text-gray-900 font-bold text-4xl md:text-5xl">
                Everything You Need to Dominate Online
              </h2>
              <p className="text-gray-600 text-xl leading-relaxed max-w-3xl w-full mx-auto">
                From lightning-fast websites to AI-powered growth strategies—we deliver the complete digital transformation your business deserves.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16 w-full max-w-6xl mx-auto">
            <Reveal delay={0.1}>
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-200/30 to-orange-100/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                <div className="relative bg-white/90 backdrop-blur-sm border border-gray-200 rounded-2xl p-8 h-full transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-orange-500/10 group-hover:-translate-y-2 group-hover:border-orange-300">
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 bg-orange-100 rounded-xl group-hover:bg-orange-200 transition-colors duration-300">
                      <Layout className="h-7 w-7 text-orange-600" />
                    </div>
                    <span className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full">FREE</span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4 group-hover:text-orange-600 transition-colors duration-300">
                    Free Website Redesign
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Get a no-risk, free redesign of your existing website. Modern, ultra-fast, and fully custom—engineered with Next.js, React, and best-in-class SEO.
                  </p>
                  
                  <div className="space-y-3 mb-8">
                    <div className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                      <span>Complete performance audit</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                      <span>Modern design concepts</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                      <span>SEO optimization strategy</span>
                    </div>
                  </div>
                  
                  <Link href="/free-redesign" className="inline-flex items-center text-orange-600 font-semibold group/link">
                    Get Started Free
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-200/30 to-orange-100/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                <div className="relative bg-white/90 backdrop-blur-sm border border-gray-200 rounded-2xl p-8 h-full transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-orange-500/10 group-hover:-translate-y-2 group-hover:border-orange-300">
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 bg-orange-100 rounded-xl group-hover:bg-orange-200 transition-colors duration-300">
                      <Code className="h-7 w-7 text-orange-600" />
                    </div>
                    <span className="bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full">MANAGED</span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4 group-hover:text-orange-600 transition-colors duration-300">
                    Hosting & Support
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    We handle everything—secure UK cloud hosting, backups, tech updates, and support. Enjoy peace of mind and more time to run your business.
                  </p>
                  
                  <div className="space-y-3 mb-8">
                    <div className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                      <span>99.9% uptime guarantee</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                      <span>Daily automated backups</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                      <span>24/7 UK-based support</span>
                    </div>
                  </div>
                  
                  <Link href="/services#hosting" className="inline-flex items-center text-orange-600 font-semibold group/link">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-200/30 to-orange-100/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                <div className="relative bg-white/90 backdrop-blur-sm border border-gray-200 rounded-2xl p-8 h-full transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-orange-500/10 group-hover:-translate-y-2 group-hover:border-orange-300">
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 bg-orange-100 rounded-xl group-hover:bg-orange-200 transition-colors duration-300">
                      <Palette className="h-7 w-7 text-orange-600" />
                    </div>
                    <span className="bg-purple-100 text-purple-700 text-xs font-bold px-3 py-1 rounded-full">AI-POWERED</span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4 group-hover:text-orange-600 transition-colors duration-300">
                    AI Landing Pages & SEO
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Drive more leads with AI-powered landing pages, dynamic location/service SEO, and integrated analytics. Proven strategies for local visibility.
                  </p>
                  
                  <div className="space-y-3 mb-8">
                    <div className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                      <span>AI-optimized content</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                      <span>Local SEO domination</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                      <span>Conversion tracking</span>
                    </div>
                  </div>
                  
                  <Link href="/services#ai-landing-pages" className="inline-flex items-center text-orange-600 font-semibold group/link">
                    Explore AI Solutions
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Bottom CTA Bar */}
          <Reveal delay={0.4}>
            <div className="w-full max-w-4xl mx-auto flex flex-col items-center">
              <div className="bg-gradient-to-r from-orange-50 to-orange-100 border border-orange-200 rounded-2xl p-8 text-center w-full">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Ready to Transform Your Digital Presence?</h3>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                  Join 50+ UK businesses who've already revolutionized their online presence with our proven strategies.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Link href="/free-redesign">
                    <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                      Start Your Free Redesign
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/contact" className="text-orange-600 font-semibold hover:underline">
                    Or speak with an expert →
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>


      {/* Featured Project */}
      <section className="py-24 bg-bg-light">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <Reveal>
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="bbr-website.png"
                  alt="Birmingham Boiler Repairs website screenshot"
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
                <h2 className="mb-4">Birmingham Boiler Repairs</h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mb-6">
                  We helped Birmingham Boiler Repairs escape an overpriced, underperforming Yell website with a lightning-fast, Google-optimized rebuild—turning their online presence into a real source of leads and local credibility.
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
                        Poor Google rankings, slow load times, and weak design were costing them customers—and monthly Yell fees were adding up.
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
                        A modern Next.js site with location-based SEO, fast hosting, and built-in reviews—plus a live dashboard to track growth.
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
                        Indexed and ranking within days, new local leads, and a professional web presence their customers trust—all for a fixed, affordable monthly fee.
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={0.3}>
                <Link href="/work/birmingham-boiler-repairs">
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
                  <h2 className="mb-4">Free Website Redesign Audit</h2>
                </Reveal>
                <Reveal delay={0.1}>
                  <p className="mb-6">
                    See exactly how your website stacks up and what’s holding you back online—then get a no-risk redesign plan from the experts at Melling Web Studios.
                  </p>
                </Reveal>
                <Reveal delay={0.2}>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center">
                      <div className="bg-primary/20 p-1 rounded-full mr-3">
                        {/* Checkmark */}
                        <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span>No-pressure, expert video or written audit</span>
                    </li>
                    <li className="flex items-center">
                      <div className="bg-primary/20 p-1 rounded-full mr-3">
                        <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span>Clear, actionable fixes for speed, SEO & design</span>
                    </li>
                    <li className="flex items-center">
                      <div className="bg-primary/20 p-1 rounded-full mr-3">
                        <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span>Side-by-side “before and after” comparison preview</span>
                    </li>
                    <li className="flex items-center">
                      <div className="bg-primary/20 p-1 rounded-full mr-3">
                        <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span>Zero obligation—keep the recommendations, even if you don’t hire us</span>
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
              <Reveal>
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="service01.png"
                  alt="Birmingham Boiler Repairs website screenshot"
                  width={800}
                  height={600}
                  className="w-full h-auto"
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
        <div className="container-wide flex flex-col items-center text-center">
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
            <div className="flex justify-center items-center w-full">
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
