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
import { DynamicPagesNavigation } from "@/components/DynamicPagesNavigation";


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
      <section className="py-24 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(247,147,26,0.08),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_80%,rgba(247,147,26,0.05),transparent_50%)]"></div>
        
        <div className="container-wide relative z-10">
          <Reveal>
            <div className="text-center mb-12">
              <span className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-4 tracking-wide uppercase">
                Case Study
              </span>
              <h2 className="text-gray-900 font-bold text-4xl md:text-5xl mb-4">
                Featured Project
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto"></div>
            </div>
          </Reveal>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-6 order-2 md:order-1">
              <Reveal>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
                  Birmingham Boiler Repairs
                </h3>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  We helped Birmingham Boiler Repairs escape an overpriced, underperforming Yell website with a lightning-fast, Google-optimized rebuild—turning their online presence into a real source of leads and local credibility.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="space-y-6 mb-8">
                  <div className="bg-white border border-gray-100 rounded-xl shadow-md shadow-orange-500/5 p-6 hover:shadow-lg hover:shadow-orange-500/10 transition-all duration-300 transform hover:-translate-y-1">
                    <div className="flex items-start">
                      <div className="bg-gradient-to-br from-orange-400 to-orange-600 p-3 rounded-full mr-5 text-white font-bold">
                        01
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-2 text-gray-900">Challenge</h4>
                        <p className="text-gray-600">
                          Poor Google rankings, slow load times, and weak design were costing them customers—and monthly Yell fees were adding up.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white border border-gray-100 rounded-xl shadow-md shadow-orange-500/5 p-6 hover:shadow-lg hover:shadow-orange-500/10 transition-all duration-300 transform hover:-translate-y-1">
                    <div className="flex items-start">
                      <div className="bg-gradient-to-br from-orange-400 to-orange-600 p-3 rounded-full mr-5 text-white font-bold">
                        02
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-2 text-gray-900">Solution</h4>
                        <p className="text-gray-600">
                          A modern Next.js site with location-based SEO, fast hosting, and built-in reviews—plus a live dashboard to track growth.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white border border-gray-100 rounded-xl shadow-md shadow-orange-500/5 p-6 hover:shadow-lg hover:shadow-orange-500/10 transition-all duration-300 transform hover:-translate-y-1">
                    <div className="flex items-start">
                      <div className="bg-gradient-to-br from-orange-400 to-orange-600 p-3 rounded-full mr-5 text-white font-bold">
                        03
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-2 text-gray-900">Results</h4>
                        <p className="text-gray-600">
                          Indexed and ranking within days, new local leads, and a professional web presence their customers trust—all for a fixed, affordable monthly fee.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={0.3}>
                <Link href="/work/birmingham-boiler-repairs" className="group">
                  <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform group-hover:scale-105">
                    View Full Case Study
                    <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </Reveal>
            </div>
            <div className="md:col-span-6 order-1 md:order-2">
              <Reveal>
                <div className="group relative">
                  {/* Decorative elements */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl rotate-[-2deg] opacity-0 group-hover:opacity-30 blur-xl transition-all duration-700"></div>
                  
                  {/* Browser mockup */}
                  <div className="relative z-10 transform group-hover:scale-[1.01] transition-all duration-500 shadow-2xl">
                    {/* Browser window frame */}
                    <div className="bg-gradient-to-r from-gray-100 to-gray-200 rounded-t-xl p-3 border border-gray-300">
                      {/* Browser controls */}
                      <div className="flex items-center">
                        <div className="flex space-x-2 mr-4">
                          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        </div>
                        
                        {/* URL Bar */}
                        <div className="flex-1 bg-white rounded-md px-4 py-1 text-xs text-gray-600 flex items-center">
                          <div className="flex-shrink-0 mr-2 text-gray-400">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 116 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span className="truncate">birminghamboilerrepairs.co.uk</span>
                        </div>
                        
                        {/* Browser buttons */}
                        <div className="ml-4 flex space-x-2">
                          <div className="w-6 h-5 bg-gray-300 rounded"></div>
                          <div className="w-5 h-5 bg-gray-300 rounded-sm"></div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Browser content */}
                    <div className="bg-white border-x border-b border-gray-300 rounded-b-xl overflow-hidden">
                      {/* Live status badge */}
                      <div className="absolute z-10 top-12 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-100 shadow-lg flex items-center">
                        <span className="bg-green-500 w-2 h-2 rounded-full mr-2 animate-pulse"></span>
                        <span className="text-sm font-medium text-gray-800">Live Project</span>
                      </div>
                      
                      {/* Website screenshot */}
                      <div className="relative">
                        <Image
                          src="bbr-website.png"
                          alt="Birmingham Boiler Repairs website screenshot"
                          width={800}
                          height={600}
                          className="w-full h-auto transition-transform duration-1000 group-hover:scale-[1.02]"
                        />
                        <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-black/50 to-transparent"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating elements for decoration */}
                  <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-orange-100 rounded-full opacity-70 z-0"></div>
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-orange-200 rounded-full opacity-70 z-0"></div>
                </div>
              </Reveal>
            </div>
          </div>
          
          {/* Tech badges */}
          <Reveal delay={0.4}>
            <div className="flex flex-wrap gap-3 justify-center mt-16">
              <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium">Next.js</span>
              <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium">React</span>
              <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium">TailwindCSS</span>
              <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium">SEO</span>
              <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium">Vercel</span>
            </div>
          </Reveal>
        </div>
      </section>


      {/* Free Redesign Banner */}
      <section className="py-24 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(247,147,26,0.08),transparent_45%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(247,147,26,0.07),transparent_45%)]"></div>
        
        <div className="container-wide relative z-10">
          <div className="bg-gradient-to-br from-orange-50 to-orange-100/50 backdrop-blur-sm border border-orange-200 rounded-2xl shadow-lg overflow-hidden relative">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-orange-300/10 rounded-full translate-x-1/2 -translate-y-1/2 blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-60 h-60 bg-orange-300/10 rounded-full -translate-x-1/2 translate-y-1/2 blur-2xl"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center relative z-10 p-8 md:p-12">
              <div className="order-2 md:order-1">
                <Reveal>
                  <div className="inline-flex items-center bg-gradient-to-r from-orange-600 to-orange-500 text-white px-4 py-1.5 rounded-full text-sm font-medium mb-6 group">
                    <div className="mr-2 animate-pulse">
                      <svg className="h-4 w-4 text-orange-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    Limited Time Offer
                  </div>
                  <h2 className="text-4xl font-bold mb-6 bg-gradient-to-br from-gray-900 to-gray-700 bg-clip-text text-transparent">Free Website Redesign Audit</h2>
                </Reveal>
                
                <Reveal delay={0.1}>
                  <p className="text-lg text-gray-700 leading-relaxed mb-8">
                    See exactly how your website stacks up and what's holding you back online—then get a no-risk redesign plan from the experts at Melling Web Studios.
                  </p>
                </Reveal>
                
                <Reveal delay={0.2}>
                  <div className="space-y-4 mb-10">
                    {[
                      "No-pressure, expert video or written audit",
                      "Clear, actionable fixes for speed, SEO & design",
                      "Side-by-side \"before and after\" comparison preview",
                      "Zero obligation—keep the recommendations, even if you don't hire us"
                    ].map((item, index) => (
                      <div key={index} className="flex items-center group">
                        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-400 rounded-xl shadow-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                          <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-gray-700 font-medium group-hover:text-orange-600 transition-colors duration-300">{item}</span>
                      </div>
                    ))}
                  </div>
                </Reveal>
                
                <Reveal delay={0.3}>
                  <Link href="/free-redesign">
                    <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-6 rounded-xl font-bold text-lg shadow-lg hover:shadow-orange-500/30 transition-all duration-300 transform hover:-translate-y-1">
                      Get Your Free Redesign
                      <ArrowRight className="ml-3 h-5 w-5" />
                    </Button>
                  </Link>
                </Reveal>
              </div>
              
              <div className="order-1 md:order-2">
                <Reveal>
                  <div className="relative">
                    {/* Floating badge */}
                    <div className="absolute -top-4 -right-4 md:top-6 md:right-6 z-10 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full border border-orange-200 shadow-xl flex items-center animate-pulse">
                      <span className="text-orange-500 font-bold mr-2">100%</span>
                      <span className="text-sm font-semibold">Free</span>
                    </div>
                    
                    {/* Image with decorative frame */}
                    <div className="relative overflow-hidden rounded-xl border-8 border-white shadow-2xl transform md:rotate-2 hover:rotate-0 transition-all duration-700 group">
                      <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                      <Image
                        src="service01.png"
                        alt="Website redesign preview"
                        width={800}
                        height={600}
                        className="w-full h-auto transform transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    
                    {/* Stats overlay */}
                    <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg px-8 py-3 flex items-center justify-center space-x-8 text-center">
                      <div>
                        <div className="font-bold text-orange-500 text-3xl">95%</div>
                        <div className="text-xs text-gray-500 font-medium">Faster Load</div>
                      </div>
                      <div className="h-12 w-px bg-gray-200"></div>
                      <div>
                        <div className="font-bold text-orange-500 text-3xl">3x</div>
                        <div className="text-xs text-gray-500 font-medium">More Leads</div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Testimonials */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(247,147,26,0.06),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(247,147,26,0.05),transparent_50%)]"></div>
        
        <div className="container-wide relative z-10 px-4 md:px-8">
          <Reveal>
            <div className="flex flex-col items-center text-center mb-10 md:mb-16 relative">
              <span className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-4 tracking-wide uppercase">
                Client Stories
              </span>
              <h2 className="mb-4 text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-br from-gray-900 to-gray-700 bg-clip-text text-transparent">
                What Our Clients Say
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto mb-6"></div>
              <p className="text-gray-600 text-base md:text-lg lg:text-xl max-w-2xl mx-auto">
                Don't just take our word for it. Here's what our clients have to
                say about working with us.
              </p>
              
              {/* Quote marks decoration - hidden on small screens */}
              <div className="absolute -top-4 left-8 opacity-10 hidden md:block">
                <svg width="120" height="120" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 11.5C10 11.5 10.5 8 7 8C4.5 8 3.5 10 3.5 11.5C3.5 13 4.5 14.5 6 14.5C7.5 14.5 8 14 8 14C8 15.5 6.5 16.5 5 16.5L4.5 18C4.5 18 8.5 18 10 14.5C10.5 13 10 11.5 10 11.5ZM20 11.5C20 11.5 20.5 8 17 8C14.5 8 13.5 10 13.5 11.5C13.5 13 14.5 14.5 16 14.5C17.5 14.5 18 14 18 14C18 15.5 16.5 16.5 15 16.5L14.5 18C14.5 18 18.5 18 20 14.5C20.5 13 20 11.5 20 11.5Z" fill="currentColor" />
                </svg>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative">
              {/* Custom navigation controls - repositioned for mobile */}
              <div className="flex justify-center md:justify-end items-center gap-4 z-10 mb-6 md:mb-0 md:absolute md:-top-16 md:right-0">
                <button id="prev-testimonial" aria-label="Previous testimonial" className="bg-white hover:bg-orange-50 border border-gray-200 rounded-full p-3 shadow-md hover:shadow-lg transition-all duration-300 group">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-700 group-hover:text-orange-600 transition-colors">
                    <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <button id="next-testimonial" aria-label="Next testimonial" className="bg-white hover:bg-orange-50 border border-gray-200 rounded-full p-3 shadow-md hover:shadow-lg transition-all duration-300 group">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-700 group-hover:text-orange-600 transition-colors">
                    <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
              
              <Carousel className="w-full" opts={{ loop: true }}>
                <CarouselContent className="-ml-2 md:-ml-4">
                  {/* First testimonial */}
                  <CarouselItem className="pl-2 md:pl-4 basis-full xs:basis-full sm:basis-full md:basis-1/2 lg:basis-1/3">
                    <div className="bg-white border border-gray-100 rounded-2xl shadow-xl shadow-orange-500/5 p-4 md:p-6 h-full transform transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 overflow-hidden relative group">
                      {/* Rating stars */}
                      <div className="flex mb-3 md:mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 md:h-5 md:w-5 text-yellow-400 fill-yellow-400" />
                        ))}
                      </div>
                      
                      {/* Quote */}
                      <p className="font-medium text-gray-700 text-sm md:text-base mb-4 md:mb-6 relative z-10 line-clamp-6 md:line-clamp-none">
                        "Melling WebStudios transformed our outdated website into a lightning-fast platform that's driving real business results. Our conversion rate has increased by 35% since launch."
                      </p>
                      
                      {/* Author info */}
                      <div className="flex items-center mt-auto relative z-10">
                        <div className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-gradient-to-br from-orange-500 to-orange-400 flex items-center justify-center text-white font-bold text-base md:text-lg mr-3 md:mr-4 flex-shrink-0">
                          SJ
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 text-sm md:text-base">Sarah Johnson</h4>
                          <p className="text-xs md:text-sm text-gray-500">BitTech Solutions</p>
                        </div>
                      </div>
                      
                      {/* Decorative elements */}
                      <div className="absolute -bottom-4 -right-4 w-16 h-16 md:w-24 md:h-24 bg-orange-100 rounded-full opacity-0 group-hover:opacity-40 transition-opacity duration-500 z-0"></div>
                      <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-500 hidden md:block">
                        <svg width="30" height="30" className="md:w-40 md:h-40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10 11.5C10 11.5 10.5 8 7 8C4.5 8 3.5 10 3.5 11.5C3.5 13 4.5 14.5 6 14.5C7.5 14.5 8 14 8 14C8 15.5 6.5 16.5 5 16.5L4.5 18C4.5 18 8.5 18 10 14.5C10.5 13 10 11.5 10 11.5ZM20 11.5C20 11.5 20.5 8 17 8C14.5 8 13.5 10 13.5 11.5C13.5 13 14.5 14.5 16 14.5C17.5 14.5 18 14 18 14C18 15.5 16.5 16.5 15 16.5L14.5 18C14.5 18 18.5 18 20 14.5C20.5 13 20 11.5 20 11.5Z" fill="currentColor" />
                        </svg>
                      </div>
                    </div>
                  </CarouselItem>
                  
                  {/* Second testimonial */}
                  <CarouselItem className="pl-2 md:pl-4 basis-full xs:basis-full sm:basis-full md:basis-1/2 lg:basis-1/3">
                    <div className="bg-white border border-gray-100 rounded-2xl shadow-xl shadow-orange-500/5 p-4 md:p-6 h-full transform transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 overflow-hidden relative group">
                      {/* Rating stars */}
                      <div className="flex mb-3 md:mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 md:h-5 md:w-5 text-yellow-400 fill-yellow-400" />
                        ))}
                      </div>
                      
                      {/* Quote */}
                      <p className="font-medium text-gray-700 text-sm md:text-base mb-4 md:mb-6 relative z-10 line-clamp-6 md:line-clamp-none">
                        "The team at Melling WebStudios delivered exactly what we needed - a fast, modern website that showcases our products beautifully and converts visitors into customers."
                      </p>
                      
                      {/* Author info */}
                      <div className="flex items-center mt-auto relative z-10">
                        <div className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-400 flex items-center justify-center text-white font-bold text-base md:text-lg mr-3 md:mr-4 flex-shrink-0">
                          MC
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 text-sm md:text-base">Michael Chen</h4>
                          <p className="text-xs md:text-sm text-gray-500">Crypto Innovations</p>
                        </div>
                      </div>
                      
                      {/* Decorative elements */}
                      <div className="absolute -bottom-4 -right-4 w-16 h-16 md:w-24 md:h-24 bg-blue-100 rounded-full opacity-0 group-hover:opacity-40 transition-opacity duration-500 z-0"></div>
                      <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-500 hidden md:block">
                        <svg width="30" height="30" className="md:w-40 md:h-40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10 11.5C10 11.5 10.5 8 7 8C4.5 8 3.5 10 3.5 11.5C3.5 13 4.5 14.5 6 14.5C7.5 14.5 8 14 8 14C8 15.5 6.5 16.5 5 16.5L4.5 18C4.5 18 8.5 18 10 14.5C10.5 13 10 11.5 10 11.5ZM20 11.5C20 11.5 20.5 8 17 8C14.5 8 13.5 10 13.5 11.5C13.5 13 14.5 14.5 16 14.5C17.5 14.5 18 14 18 14C18 15.5 16.5 16.5 15 16.5L14.5 18C14.5 18 18.5 18 20 14.5C20.5 13 20 11.5 20 11.5Z" fill="currentColor" />
                        </svg>
                      </div>
                    </div>
                  </CarouselItem>
                  
                  {/* Third testimonial */}
                  <CarouselItem className="pl-2 md:pl-4 basis-full xs:basis-full sm:basis-full md:basis-1/2 lg:basis-1/3">
                    <div className="bg-white border border-gray-100 rounded-2xl shadow-xl shadow-orange-500/5 p-4 md:p-6 h-full transform transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 overflow-hidden relative group">
                      {/* Rating stars */}
                      <div className="flex mb-3 md:mb-4">
                        {[...Array(4)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 md:h-5 md:w-5 text-yellow-400 fill-yellow-400" />
                        ))}
                        <Star className="h-4 w-4 md:h-5 md:w-5 text-gray-300" />
                      </div>
                      
                      {/* Quote */}
                      <p className="font-medium text-gray-700 text-sm md:text-base mb-4 md:mb-6 relative z-10 line-clamp-6 md:line-clamp-none">
                        "Working with Melling WebStudios was a game-changer for our business. Their expertise in React and Next.js resulted in a website that's not only beautiful but incredibly fast."
                      </p>
                      
                      {/* Author info */}
                      <div className="flex items-center mt-auto relative z-10">
                        <div className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-gradient-to-br from-purple-500 to-purple-400 flex items-center justify-center text-white font-bold text-base md:text-lg mr-3 md:mr-4 flex-shrink-0">
                          JW
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 text-sm md:text-base">Jessica Williams</h4>
                          <p className="text-xs md:text-sm text-gray-500">BlockChain Ventures</p>
                        </div>
                      </div>
                      
                      {/* Decorative elements */}
                      <div className="absolute -bottom-4 -right-4 w-16 h-16 md:w-24 md:h-24 bg-purple-100 rounded-full opacity-0 group-hover:opacity-40 transition-opacity duration-500 z-0"></div>
                      <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-500 hidden md:block">
                        <svg width="30" height="30" className="md:w-40 md:h-40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10 11.5C10 11.5 10.5 8 7 8C4.5 8 3.5 10 3.5 11.5C3.5 13 4.5 14.5 6 14.5C7.5 14.5 8 14 8 14C8 15.5 6.5 16.5 5 16.5L4.5 18C4.5 18 8.5 18 10 14.5C10.5 13 10 11.5 10 11.5ZM20 11.5C20 11.5 20.5 8 17 8C14.5 8 13.5 10 13.5 11.5C13.5 13 14.5 14.5 16 14.5C17.5 14.5 18 14 18 14C18 15.5 16.5 16.5 15 16.5L14.5 18C14.5 18 18.5 18 20 14.5C20.5 13 20 11.5 20 11.5Z" fill="currentColor" />
                        </svg>
                      </div>
                    </div>
                  </CarouselItem>
                </CarouselContent>
                
                {/* Hidden Carousel controls - these will be replaced with the custom ones above */}
                <div className="hidden">
                  <CarouselPrevious />
                  <CarouselNext />
                </div>
              </Carousel>
              
              {/* Testimonial metrics - responsive adjustments */}
              <div className="flex flex-wrap justify-center mt-10 md:mt-16">
                <div className="w-1/3 md:w-auto text-center px-2 md:px-8">
                  <div className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent mb-1">35%</div>
                  <p className="text-xs md:text-sm text-gray-600">Avg. conversion increase</p>
                </div>
                <div className="w-1/3 md:w-auto text-center px-2 md:px-8">
                  <div className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent mb-1">50+</div>
                  <p className="text-xs md:text-sm text-gray-600">Happy clients</p>
                </div>
                <div className="w-1/3 md:w-auto text-center px-2 md:px-8">
                  <div className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent mb-1">4.9/5</div>
                  <p className="text-xs md:text-sm text-gray-600">Client satisfaction</p>
                </div>
              </div>
              
              {/* Call to action */}
              <div className="mt-10 md:mt-16 text-center">
                <Link href="/work" className="inline-flex items-center bg-white hover:bg-orange-50 text-gray-800 hover:text-orange-600 font-semibold py-2 md:py-3 px-4 md:px-6 rounded-full border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 group text-sm md:text-base">
                  <span>Read Success Stories</span>
                  <ArrowRight className="ml-2 h-3 w-3 md:h-4 md:w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
        
        {/* Bottom decorative element */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-200 to-transparent"></div>
      </section>

      {/* Dynamic Pages Navigation */}
      <DynamicPagesNavigation />

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
