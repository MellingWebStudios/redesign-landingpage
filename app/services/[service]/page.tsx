import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, CheckCircle, Phone, ChevronRight, Users, MessageSquare, Rocket, Trophy, Search, Settings, Target, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/reveal-animation";
import { SERVICES, isValidService, getServiceDisplayName } from "@/lib/data";
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

// Helper function for service benefits
function getServiceBenefits(service: any) {
  const benefitsMap: Record<string, Array<{ title: string; description: string }>> = {
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
    // Add more services as needed
  };

  return benefitsMap[service] || [
    { title: "Expert Implementation", description: "Professional implementation of industry best practices" },
    { title: "Measurable Results", description: "Track progress with detailed analytics and reporting" },
    { title: "Ongoing Support", description: "Continuous support to ensure long-term success" },
    { title: "Custom Solutions", description: "Tailored approach designed for your specific business needs" }
  ];
}

// Helper function for process steps
function getProcessSteps(service: any) {
  const processMap: Record<string, Array<{ 
    title: string; 
    description: string; 
    icon: any;
    duration: string;
  }>> = {
    "website-redesign": [
      { 
        title: "Discovery & Planning", 
        description: "We analyze your current website, understand your goals, and create a comprehensive project roadmap.",
        icon: Search,
        duration: "1-2 weeks"
      },
      { 
        title: "Design & Development", 
        description: "Our team creates modern designs and develops your website using the latest technologies.",
        icon: Settings,
        duration: "2-4 weeks"
      },
      { 
        title: "Testing & Optimization", 
        description: "Rigorous testing across all devices and browsers to ensure perfect performance.",
        icon: Target,
        duration: "1 week"
      },
      { 
        title: "Launch & Support", 
        description: "We launch your website and provide ongoing support to ensure continued success.",
        icon: Rocket,
        duration: "Ongoing"
      }
    ],
    "seo-optimisation": [
      { 
        title: "SEO Audit & Analysis", 
        description: "Comprehensive analysis of your current SEO performance and competitor research.",
        icon: Search,
        duration: "1 week"
      },
      { 
        title: "Strategy Development", 
        description: "Create a custom SEO strategy tailored to your business goals and target audience.",
        icon: Target,
        duration: "1 week"
      },
      { 
        title: "Implementation", 
        description: "Execute on-page and technical SEO improvements to boost your search rankings.",
        icon: Settings,
        duration: "2-3 weeks"
      },
      { 
        title: "Monitor & Optimize", 
        description: "Continuous monitoring and optimization to maintain and improve your rankings.",
        icon: Zap,
        duration: "Ongoing"
      }
    ]
  };

  return processMap[service] || [
    { 
      title: "Consultation", 
      description: "We start with a detailed consultation to understand your business needs and goals.",
      icon: Users,
      duration: "1 week"
    },
    { 
      title: "Strategy Development", 
      description: "Create a customized strategy based on industry best practices and your requirements.",
      icon: Target,
      duration: "1-2 weeks"
    },
    { 
      title: "Implementation", 
      description: "Execute the strategy with regular updates and transparent communication.",
      icon: Settings,
      duration: "2-4 weeks"
    },
    { 
      title: "Results & Support", 
      description: "Deliver results and provide ongoing support to ensure long-term success.",
      icon: Trophy,
      duration: "Ongoing"
    }
  ];
}

// Process Section Component
function ProcessSection({ service, serviceDisplay }: { service: string; serviceDisplay: string }) {
  const steps = getProcessSteps(service);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-100 via-gray-50 to-white relative overflow-hidden border-t border-gray-200/50">
      {/* Section identifier stripe */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-blue-500 to-purple-500"></div>
      
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-blue-500/5"></div>
      
      {/* Enhanced floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating process-themed shapes */}
        <div className="absolute top-16 left-16 w-16 h-16 bg-primary/8 rounded-lg rotate-12 animate-float-1"></div>
        <div className="absolute top-32 right-20 w-12 h-12 bg-blue-500/10 rounded-full animate-float-2"></div>
        <div className="absolute bottom-24 left-1/3 w-10 h-10 bg-purple-500/8 rounded-lg -rotate-12 animate-float-3"></div>
        <div className="absolute bottom-40 right-1/4 w-14 h-14 bg-orange-500/6 rounded-full animate-float-1" style={{animationDelay: '1s'}}></div>
        
        {/* Gear-like elements */}
        <svg className="absolute top-20 right-1/3 w-20 h-20 text-primary/6" viewBox="0 0 100 100">
          <polygon points="50,10 60,30 80,30 65,45 70,65 50,55 30,65 35,45 20,30 40,30" fill="currentColor" className="animate-spin-slow" />
        </svg>
        
        <svg className="absolute bottom-32 left-20 w-16 h-16 text-blue-500/8" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="4" strokeDasharray="10,5" className="animate-spin-reverse" />
          <circle cx="50" cy="50" r="15" fill="currentColor" opacity="0.3" />
        </svg>
        
        {/* Connection lines */}
        <div className="absolute top-1/2 left-10 w-16 h-0.5 bg-gradient-to-r from-primary/20 to-transparent animate-pulse"></div>
        <div className="absolute top-1/3 right-12 w-12 h-0.5 bg-gradient-to-l from-blue-500/20 to-transparent animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>
      
      {/* Distinctive pattern overlay */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.1) 0%, transparent 40%),
            radial-gradient(circle at 80% 80%, rgba(139, 92, 246, 0.1) 0%, transparent 40%),
            radial-gradient(circle at 40% 60%, rgba(247, 147, 26, 0.08) 0%, transparent 40%)
          `
        }}></div>
      </div>
      <div className="container-wide relative z-10">
        {/* Section Header with distinctive styling */}
        <Reveal>
          <div className="text-center mb-20">
            {/* Section identifier badge */}
            <div className="inline-flex items-center gap-3 bg-white/90 backdrop-blur-sm border border-gray-200/50 text-primary px-6 py-3 rounded-full text-sm font-medium mb-8 shadow-lg">
              <Target className="w-4 h-4" />
              <span className="font-semibold">Our Process</span>
            </div>
            
            {/* Main heading with accent */}
            <div className="relative">
              <h2 className="text-3xl lg:text-4xl font-bold text-black mb-3">
                How We Deliver <span className="text-primary">{serviceDisplay}</span> Results
              </h2>
            </div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-8">
              Our proven 4-step process ensures your project is completed on time, on budget, 
              and exceeds your expectations every step of the way.
            </p>
          </div>
        </Reveal>

        {/* Process Steps */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <Reveal key={index} delay={0.2 + (index * 0.1)}>
                  <div className="group relative">
                    {/* Connecting line (hidden on mobile) */}
                    {index < steps.length - 1 && (
                      <div className="hidden lg:block absolute top-16 left-full w-8 h-0.5 bg-gradient-to-r from-primary/30 to-primary/10 z-0">
                        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-primary/30 rounded-full"></div>
                      </div>
                    )}
                    
                    {/* Step Card */}
                    <div className="relative bg-white rounded-2xl p-8 border border-gray-200/50 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group-hover:bg-gradient-to-br group-hover:from-white group-hover:to-primary/5">
                      {/* Step number */}
                      <div className="absolute -top-4 left-8 bg-gradient-to-r from-primary to-primary/80 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
                        {index + 1}
                      </div>
                      
                      {/* Icon */}
                      <div className="mb-6 mt-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-primary/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Icon className="w-8 h-8 text-primary" />
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="mb-6">
                        <h3 className="text-xl font-bold text-black mb-3 group-hover:text-primary transition-colors">
                          {step.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed text-sm">
                          {step.description}
                        </p>
                      </div>
                      
                      {/* Duration badge */}
                      <div className="inline-flex items-center gap-2 bg-gray-100 group-hover:bg-primary/10 text-gray-700 group-hover:text-primary px-3 py-1.5 rounded-full text-xs font-medium transition-colors">
                        <div className="w-1.5 h-1.5 bg-current rounded-full"></div>
                        {step.duration}
                      </div>
                      
                      {/* Decorative elements */}
                      <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-primary/5 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <div className="absolute bottom-4 right-4 w-2 h-2 bg-primary/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        
      </div>
    </section>
  );
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { service } = await params;
  
  if (!isValidService(service)) {
    notFound();
  }

  const serviceDisplay = getServiceDisplayName(service);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-white relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-blue-50 to-purple-50 animate-gradient-x"></div>
        
        {/* Custom Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Primary floating geometric shapes */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full animate-float-1"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-blue-500/10 rounded-full animate-float-2"></div>
          <div className="absolute bottom-32 left-1/4 w-12 h-12 bg-purple-500/10 rounded-full animate-float-3"></div>
          <div className="absolute top-1/3 right-1/3 w-8 h-8 bg-primary/15 rounded-full animate-float-1"></div>
          <div className="absolute bottom-20 right-10 w-24 h-24 bg-blue-400/8 rounded-full animate-float-2"></div>
          
          {/* Additional layered floating elements */}
          <div className="absolute top-60 left-20 w-14 h-14 bg-orange-500/8 rounded-full animate-float-3" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-80 right-32 w-18 h-18 bg-primary/12 rounded-full animate-float-1" style={{animationDelay: '1.5s'}}></div>
          <div className="absolute bottom-60 left-32 w-10 h-10 bg-yellow-500/10 rounded-full animate-float-2" style={{animationDelay: '3s'}}></div>
          
          {/* Hexagonal and geometric patterns */}
          <div className="absolute top-16 left-1/3 w-6 h-6 bg-primary/8 transform rotate-45 animate-pulse"></div>
          <div className="absolute top-60 right-1/4 w-4 h-4 bg-orange-500/8 transform rotate-12 animate-bounce"></div>
          <div className="absolute bottom-40 left-16 w-8 h-8 bg-blue-500/6 transform -rotate-12 animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-36 left-2/3 w-5 h-5 bg-purple-500/8 transform rotate-45 animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-56 right-1/5 w-7 h-7 bg-primary/10 transform -rotate-30 animate-bounce" style={{animationDelay: '1.5s'}}></div>
          
          {/* Diamond shapes */}
          <div className="absolute top-28 right-1/6 w-6 h-6 bg-primary/6 transform rotate-45 animate-spin-slow"></div>
          <div className="absolute bottom-28 left-1/5 w-5 h-5 bg-blue-500/8 transform rotate-45 animate-spin-reverse"></div>
          
          {/* Abstract lines and curves */}
          <svg className="absolute top-32 right-32 w-32 h-32 text-primary/5" viewBox="0 0 100 100">
            <path d="M20,20 Q50,10 80,40 Q70,70 40,80 Q10,70 20,20" fill="currentColor" className="animate-pulse" />
          </svg>
          
          <svg className="absolute bottom-24 left-24 w-24 h-24 text-blue-500/5" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="2" className="animate-spin-slow" />
            <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.5" className="animate-spin-reverse" />
          </svg>
          

          
          {/* Dotted patterns and trails */}
          <div className="absolute top-1/2 left-8 flex flex-col gap-4">
            <div className="w-1 h-1 bg-primary/20 rounded-full animate-pulse"></div>
            <div className="w-1 h-1 bg-primary/20 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
            <div className="w-1 h-1 bg-primary/20 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
            <div className="w-1 h-1 bg-primary/20 rounded-full animate-pulse" style={{animationDelay: '0.6s'}}></div>
            <div className="w-1 h-1 bg-primary/20 rounded-full animate-pulse" style={{animationDelay: '0.8s'}}></div>
          </div>
          
          {/* Right side vertical dots */}
          <div className="absolute top-1/3 right-8 flex flex-col gap-3">
            <div className="w-1.5 h-1.5 bg-blue-500/15 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
            <div className="w-1.5 h-1.5 bg-primary/15 rounded-full animate-pulse" style={{animationDelay: '1.2s'}}></div>
            <div className="w-1.5 h-1.5 bg-orange-500/15 rounded-full animate-pulse" style={{animationDelay: '1.4s'}}></div>
            <div className="w-1.5 h-1.5 bg-purple-500/15 rounded-full animate-pulse" style={{animationDelay: '1.6s'}}></div>
          </div>
          
          {/* Horizontal dot trails */}
          <div className="absolute bottom-1/4 left-1/4 flex gap-3">
            <div className="w-1 h-1 bg-primary/15 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
            <div className="w-1.5 h-1.5 bg-blue-500/15 rounded-full animate-pulse" style={{animationDelay: '2.1s'}}></div>
            <div className="w-1 h-1 bg-orange-500/15 rounded-full animate-pulse" style={{animationDelay: '2.2s'}}></div>
            <div className="w-2 h-2 bg-primary/20 rounded-full animate-pulse" style={{animationDelay: '2.3s'}}></div>
            <div className="w-1 h-1 bg-purple-500/15 rounded-full animate-pulse" style={{animationDelay: '2.4s'}}></div>
          </div>
          
          {/* Gradient mesh overlays with subtle movements */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-primary/2 to-transparent animate-pulse-slow"></div>
          <div className="absolute inset-0 bg-gradient-to-bl from-blue-500/3 via-transparent to-purple-500/3 animate-pulse-slow" style={{animationDelay: '2s'}}></div>
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/2 via-transparent to-primary/3 animate-pulse-slow" style={{animationDelay: '4s'}}></div>
          
          {/* Radial gradient overlays */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-primary/5 to-transparent rounded-full animate-pulse-slow" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-gradient-radial from-blue-500/4 to-transparent rounded-full animate-pulse-slow" style={{animationDelay: '3s'}}></div>
        </div>
        
        <div className="absolute inset-0 bg-grid-pattern z-10"></div>
        <div className="container-wide relative z-20">
          <div className="max-w-4xl mx-auto text-center">
            <Reveal>
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 mx-auto">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                Web Design Experts
              </div>
            </Reveal>
            
            <Reveal delay={0.1}>
              <h1 className="mb-6 text-4xl lg:text-5xl xl:text-6xl font-bold text-black text-center">
                Professional {serviceDisplay}
              </h1>
            </Reveal>
            
            <Reveal delay={0.2}>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 text-center">
                Expert {serviceDisplay.toLowerCase()} services to help your business succeed online. 
                Get more customers with our proven strategies and cutting-edge solutions.
              </p>
            </Reveal>
            
            <Reveal delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <Link href="/free-redesign">
                  <Button className="btn btn-primary btn-lg">
                    Get Free Website Audit
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/work">
                  <Button variant="outline" className="btn btn-lg border-gray-300 text-gray-700 hover:bg-gray-50">
                    View Our Work
                  </Button>
                </Link>
              </div>
              
              {/* Breadcrumbs */}
              <nav className="flex justify-center mb-16" aria-label="Breadcrumb">
                <ol className="flex items-center space-x-1 text-sm text-gray-500">
                  <li>
                    <Link href="/" className="hover:text-primary transition-colors">
                      Home
                    </Link>
                  </li>
                  <ChevronRight className="w-3 h-3 mx-1.5 text-gray-400" />
                  <li>
                    <Link href="/services" className="hover:text-primary transition-colors">
                      Services
                    </Link>
                  </li>
                  <ChevronRight className="w-3 h-3 mx-1.5 text-gray-400" />
                  <li>
                    <span className="text-gray-700 font-medium" aria-current="page">
                      {serviceDisplay}
                    </span>
                  </li>
                </ol>
              </nav>
            </Reveal>

            {/* Simple divider line */}
            <Reveal delay={0.4}>
              <div className="my-16 flex justify-center">
                <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
              </div>
            </Reveal>
            
            {/* Service Benefits integrated into Hero */}
            <Reveal delay={0.5}>
              <div className="mt-8">
                {/* Section Header */}
                <div className="text-center mb-12">
                  <h2 className="text-2xl lg:text-3xl font-bold text-black mb-4">
                    What's Included in Our {serviceDisplay} Services
                  </h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    Our comprehensive approach delivers measurable results through proven strategies and cutting-edge solutions.
                  </p>
                </div>

                {/* Benefits Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
                  {getServiceBenefits(service as any).map((benefit, index) => (
                    <Reveal key={index} delay={0.6 + (index * 0.1)}>
                      <div className="group relative">
                        {/* Background gradient on hover */}
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-blue-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        
                        {/* Card content */}
                        <div className="relative bg-white/90 backdrop-blur-sm p-8 rounded-xl border border-gray-200/60 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                          {/* Icon and number */}
                          <div className="flex items-start gap-4 mb-4">
                            <div className="relative">
                              <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center shadow-lg">
                                <CheckCircle className="w-6 h-6 text-white" />
                              </div>
                              {/* Number badge */}
                              <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
                                {index + 1}
                              </div>
                            </div>
                            <div className="flex-1">
                              <h3 className="text-xl font-bold text-black mb-2 group-hover:text-primary transition-colors">
                                {benefit.title}
                              </h3>
                            </div>
                          </div>
                          
                          {/* Description */}
                          <p className="text-gray-600 leading-relaxed ml-16">
                            {benefit.description}
                          </p>

                          {/* Decorative elements */}
                          <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-primary/5 to-blue-500/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          <div className="absolute bottom-4 right-4 w-2 h-2 bg-primary/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="relative">
        {/* Main divider line with gradient */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
      </div>

      {/* Process Section */}
      <ProcessSection service={service} serviceDisplay={serviceDisplay} />

      {/* Section Divider */}
      <div className="relative bg-gray-50">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-50 px-8">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-primary/40 rounded-full"></div>
            <div className="w-2 h-2 bg-primary/60 rounded-full"></div>
            <div className="w-1.5 h-1.5 bg-primary/40 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Portfolio Section */}
      <section className="py-20 relative overflow-hidden border-t border-gray-200/30" style={{backgroundColor: '#4B4B4B'}}>
        {/* Section identifier stripe */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-orange-500 to-yellow-500"></div>

        {/* Enhanced coding-themed background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Gentle gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-orange-500/5"></div>
          
          {/* Code lines and syntax elements */}
          <div className="absolute top-16 left-16 flex flex-col gap-2 opacity-30">
            <div className="w-20 h-1 bg-blue-400/40 rounded animate-pulse"></div>
            <div className="w-16 h-1 bg-green-400/40 rounded animate-pulse" style={{animationDelay: '0.5s'}}></div>
            <div className="w-24 h-1 bg-purple-400/40 rounded animate-pulse" style={{animationDelay: '1s'}}></div>
            <div className="w-12 h-1 bg-orange-400/40 rounded animate-pulse" style={{animationDelay: '1.5s'}}></div>
          </div>
          
          {/* More code blocks in different positions */}
          <div className="absolute top-48 right-24 flex flex-col gap-1.5 opacity-25">
            <div className="w-8 h-1 bg-primary/50 rounded animate-pulse" style={{animationDelay: '2s'}}></div>
            <div className="w-14 h-1 bg-cyan-400/50 rounded animate-pulse" style={{animationDelay: '2.3s'}}></div>
            <div className="w-10 h-1 bg-yellow-400/50 rounded animate-pulse" style={{animationDelay: '2.6s'}}></div>
          </div>
          
          <div className="absolute bottom-32 left-24 flex flex-col gap-2 opacity-20">
            <div className="w-18 h-1 bg-red-400/50 rounded animate-pulse" style={{animationDelay: '3s'}}></div>
            <div className="w-22 h-1 bg-indigo-400/50 rounded animate-pulse" style={{animationDelay: '3.5s'}}></div>
            <div className="w-14 h-1 bg-pink-400/50 rounded animate-pulse" style={{animationDelay: '4s'}}></div>
            <div className="w-20 h-1 bg-teal-400/50 rounded animate-pulse" style={{animationDelay: '4.5s'}}></div>
          </div>
          
          {/* Terminal/console window mockups */}
          <div className="absolute top-32 right-16 w-32 h-20 bg-gray-900/10 rounded-lg border border-gray-600/20 p-2 opacity-30">
            <div className="flex gap-1 mb-2">
              <div className="w-2 h-2 bg-red-400/50 rounded-full"></div>
              <div className="w-2 h-2 bg-yellow-400/50 rounded-full"></div>
              <div className="w-2 h-2 bg-green-400/50 rounded-full"></div>
            </div>
            <div className="space-y-1">
              <div className="w-16 h-0.5 bg-green-400/40 rounded animate-pulse"></div>
              <div className="w-12 h-0.5 bg-blue-400/40 rounded animate-pulse" style={{animationDelay: '1s'}}></div>
              <div className="w-20 h-0.5 bg-purple-400/40 rounded animate-pulse" style={{animationDelay: '2s'}}></div>
            </div>
          </div>
          
          {/* Code brackets and symbols */}
          <div className="absolute top-24 left-32 text-2xl font-mono text-primary/20 animate-pulse" style={{animationDelay: '1s'}}>
            {'{ }'}
          </div>
          <div className="absolute bottom-48 right-32 text-xl font-mono text-orange-500/20 animate-pulse" style={{animationDelay: '3s'}}>
            {'< />'}
          </div>
          <div className="absolute top-56 left-40 text-lg font-mono text-blue-500/20 animate-pulse" style={{animationDelay: '2s'}}>
            {'( )'}
          </div>
          <div className="absolute bottom-24 right-48 text-xl font-mono text-purple-500/20 animate-pulse" style={{animationDelay: '4s'}}>
            {'[ ]'}
          </div>
          
          {/* Binary code patterns */}
          <div className="absolute top-40 left-8 flex flex-col gap-1 opacity-15 font-mono text-xs">
            <span className="text-green-400/60 animate-pulse">1010011010</span>
            <span className="text-blue-400/60 animate-pulse" style={{animationDelay: '0.5s'}}>0110100101</span>
            <span className="text-purple-400/60 animate-pulse" style={{animationDelay: '1s'}}>1100101010</span>
            <span className="text-orange-400/60 animate-pulse" style={{animationDelay: '1.5s'}}>0101101100</span>
          </div>
          
          {/* More binary in different position */}
          <div className="absolute bottom-40 right-8 flex flex-col gap-1 opacity-10 font-mono text-xs">
            <span className="text-cyan-400/60 animate-pulse" style={{animationDelay: '2s'}}>11001010</span>
            <span className="text-yellow-400/60 animate-pulse" style={{animationDelay: '2.5s'}}>01101001</span>
            <span className="text-pink-400/60 animate-pulse" style={{animationDelay: '3s'}}>10110100</span>
          </div>
          
          {/* Git/version control symbols */}
          <div className="absolute top-36 right-40 text-lg font-mono text-green-500/15 animate-pulse" style={{animationDelay: '2.5s'}}>
            +
          </div>
          <div className="absolute bottom-36 left-48 text-lg font-mono text-red-500/15 animate-pulse" style={{animationDelay: '3.5s'}}>
            -
          </div>
          <div className="absolute top-64 left-64 text-sm font-mono text-blue-500/15 animate-pulse" style={{animationDelay: '1.5s'}}>
            git
          </div>
          
          {/* Technology stack icons represented as text */}
          <div className="absolute top-20 left-56 text-xs font-mono text-primary/15 animate-pulse" style={{animationDelay: '4s'}}>
            npm
          </div>
          <div className="absolute bottom-56 left-20 text-xs font-mono text-orange-500/15 animate-pulse" style={{animationDelay: '5s'}}>
            js
          </div>
          <div className="absolute top-44 right-56 text-xs font-mono text-blue-500/15 animate-pulse" style={{animationDelay: '6s'}}>
            tsx
          </div>
          
          {/* Floating geometric shapes with coding theme */}
          <div className="absolute top-32 left-20 w-12 h-12 bg-primary/8 rounded-lg transform rotate-12 animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-32 right-20 w-16 h-16 bg-orange-500/6 rounded-lg transform -rotate-12 animate-pulse" style={{animationDelay: '4s'}}></div>
          <div className="absolute top-60 right-1/4 w-8 h-8 bg-yellow-500/8 rounded transform rotate-45 animate-pulse" style={{animationDelay: '6s'}}></div>
          
          {/* Minimal geometric shapes */}
          <div className="absolute top-20 right-32 w-4 h-4 bg-primary/10 transform rotate-45 animate-pulse" style={{animationDelay: '3s'}}></div>
          <div className="absolute bottom-20 left-32 w-6 h-6 bg-orange-500/8 transform rotate-12 animate-pulse" style={{animationDelay: '5s'}}></div>
          
          {/* Code editor cursor simulation */}
          <div className="absolute top-28 left-28 w-0.5 h-4 bg-primary/30 animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-28 right-28 w-0.5 h-3 bg-orange-500/30 animate-pulse" style={{animationDelay: '3s'}}></div>
        </div>

        <div className="container-wide relative z-10">
          {/* Section Header */}
          <Reveal>
            <div className="text-center mb-20">
              {/* Section identifier badge */}
              <div className="inline-flex items-center gap-3 bg-white/90 backdrop-blur-sm border border-gray-200/50 text-primary px-6 py-3 rounded-full text-sm font-medium mb-8 shadow-lg">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <Rocket className="w-4 h-4" />
                <span className="font-semibold">Live Portfolio</span>
                <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
              </div>
              
              {/* Main heading with accent */}
              <div className="relative">
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                  See Our <span className="text-primary">{serviceDisplay}</span> Work in Action
                </h2>
                {/* Decorative underline */}
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-primary to-orange-500 rounded-full"></div>
              </div>
              
              <p className="text-lg text-gray-300 max-w-3xl mx-auto mt-8">
                Don't just take our word for it. Explore our live projects and see the quality, 
                performance, and design excellence we deliver for every client.
              </p>
            </div>
          </Reveal>

          {/* Featured Project - Birmingham Boiler Repairs */}
          <Reveal delay={0.2}>
            <div className="max-w-7xl mx-auto">
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl border border-gray-200/50 shadow-2xl shadow-primary/5 overflow-hidden">
                {/* Project Header */}
                <div className="p-8 pb-6 border-b border-gray-100">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="bg-green-100 p-2 rounded-lg">
                          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                        </div>
                        <span className="text-green-700 font-medium text-sm">Live Project</span>
                      </div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-black mb-3">
                        Birmingham Boiler Repairs
                      </h3>
                      <p className="text-gray-600 text-lg leading-relaxed mb-4">
                        Complete redesign and rebuild for a leading boiler repair company. 
                        From slow & buried to lightning-fast with 3x more leads in 6 weeks.
                      </p>
                      
                      {/* Quick Stats */}
                      <div className="flex flex-wrap gap-4 mb-6">
                        <div className="bg-primary/10 px-4 py-2 rounded-full">
                          <span className="text-primary font-semibold text-sm">PageSpeed 99+</span>
                        </div>
                        <div className="bg-green-50 px-4 py-2 rounded-full">
                          <span className="text-green-700 font-semibold text-sm">3x More Leads</span>
                        </div>
                        <div className="bg-orange-50 px-4 py-2 rounded-full">
                          <span className="text-orange-700 font-semibold text-sm">7 Day Results</span>
                        </div>
                      </div>

                      {/* Technology Stack */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {["Next.js", "React", "Tailwind CSS", "Vercel", "shadcn/ui"].map((tech) => (
                          <span key={tech} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="lg:text-right">
                      <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
                        <a 
                          href="https://birminghamboilerrepairs.uk" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg group"
                        >
                          <span>Visit Live Site</span>
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </a>
                        <Link 
                          href="/work/birmingham-boiler-repairs"
                          className="inline-flex items-center justify-center border border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-3 rounded-xl font-semibold transition-all duration-300"
                        >
                          <span>Full Case Study</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Interactive Live Preview */}
                <div className="p-8">
                  <div className="relative">
                    {/* Browser Mockup Header */}
                    <div className="bg-gray-100 rounded-t-xl p-4 border border-gray-200">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        </div>
                        <div className="flex-1 mx-4">
                          <div className="bg-white rounded-lg px-4 py-2 flex items-center">
                            <div className="w-4 h-4 text-gray-400 mr-2">🔒</div>
                            <span className="text-sm text-gray-600 truncate">birminghamboilerrepairs.uk</span>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <div className="w-6 h-4 bg-gray-300 rounded"></div>
                          <div className="w-4 h-4 bg-gray-300 rounded"></div>
                        </div>
                      </div>
                    </div>

                    {/* Live Website Embed */}
                    <div className="relative bg-white border-x border-b border-gray-200 rounded-b-xl overflow-hidden" style={{height: '600px'}}>
                      {/* Performance Badge */}
                      <div className="absolute z-10 top-4 right-4 bg-green-500 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg flex items-center">
                        <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></div>
                        99+ PageSpeed
                      </div>
                      
                      {/* Embedded iframe */}
                      <iframe
                        src="https://birminghamboilerrepairs.uk"
                        title="Birmingham Boiler Repairs - Live Website"
                        className="w-full h-full border-0"
                        loading="lazy"
                        sandbox="allow-scripts allow-same-origin allow-popups allow-forms allow-navigation"
                        allow="navigation"
                      />
                    </div>

                    {/* Results Highlight Strip */}
                    <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white/95 backdrop-blur-sm rounded-xl shadow-xl border border-gray-200/50 px-8 py-4">
                      <div className="flex items-center justify-center space-x-8 text-center">
                        <div>
                          <div className="font-bold text-green-600 text-2xl">3x</div>
                          <div className="text-xs text-gray-600 font-medium">More Leads</div>
                        </div>
                        <div className="h-8 w-px bg-gray-200"></div>
                        <div>
                          <div className="font-bold text-primary text-2xl">99+</div>
                          <div className="text-xs text-gray-600 font-medium">PageSpeed</div>
                        </div>
                        <div className="h-8 w-px bg-gray-200"></div>
                        <div>
                          <div className="font-bold text-orange-600 text-2xl">7</div>
                          <div className="text-xs text-gray-600 font-medium">Days to Results</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Testimonial Section */}
          <Reveal delay={0.4}>
            <div className="text-center mt-20">
              <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-10 border border-gray-200/50 max-w-4xl mx-auto shadow-xl relative overflow-hidden">
                {/* Background decorative elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/5 to-orange-500/5 rounded-full blur-3xl"></div>
                
                {/* Quote */}
                <blockquote className="text-2xl lg:text-3xl font-medium text-gray-900 mb-8 leading-relaxed">
                  "Incredible! The new Ferroli page isn't just on Google's first page - it's holding the{" "}
                  <span className="text-primary font-bold">1, 2, 3 spots</span>, 
                  even outranking my 15-year-old main site.{" "}
                  <span className="text-orange-600 font-bold">Game changer!</span>"
                </blockquote>
                
                {/* Attribution */}
                <div className="flex items-center justify-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    D
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-lg text-gray-900">Dave</div>
                    <div className="text-gray-600">Business Owner</div>
                  </div>
                  <div className="flex gap-1 ml-4">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-4 h-4 text-yellow-400 fill-current">★</div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Section Divider */}
      <div className="relative bg-white">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-8">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-primary/40 rounded-full"></div>
            <div className="w-2 h-2 bg-orange-500/60 rounded-full"></div>
            <div className="w-1.5 h-1.5 bg-primary/40 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Technology Stack Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 relative overflow-hidden">
        {/* Section identifier stripe */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500"></div>

        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/3 via-transparent to-purple-500/3"></div>
          
          {/* Floating tech-themed elements */}
          <div className="absolute top-20 left-16 w-16 h-16 bg-blue-500/8 rounded-xl rotate-12 animate-float-1"></div>
          <div className="absolute top-32 right-20 w-12 h-12 bg-purple-500/10 rounded-lg animate-float-2"></div>
          <div className="absolute bottom-24 left-1/3 w-14 h-14 bg-cyan-500/8 rounded-full animate-float-3"></div>
          <div className="absolute bottom-40 right-1/4 w-10 h-10 bg-primary/6 rounded-xl -rotate-12 animate-float-1" style={{animationDelay: '1s'}}></div>
          
          {/* Tech symbols and icons */}
          <div className="absolute top-24 right-1/3 text-3xl text-blue-500/10 animate-pulse" style={{animationDelay: '1s'}}>
            ⚛️
          </div>
          <div className="absolute bottom-32 left-20 text-2xl text-purple-500/10 animate-pulse" style={{animationDelay: '2s'}}>
            📱
          </div>
          <div className="absolute top-56 left-40 text-2xl text-cyan-500/10 animate-pulse" style={{animationDelay: '3s'}}>
            🚀
          </div>
          <div className="absolute bottom-56 right-40 text-2xl text-primary/10 animate-pulse" style={{animationDelay: '4s'}}>
            ⚡
          </div>
          
          {/* Code-like elements */}
          <div className="absolute top-40 left-8 flex flex-col gap-1 opacity-10 font-mono text-xs">
            <div className="w-12 h-0.5 bg-blue-500/50 rounded animate-pulse"></div>
            <div className="w-16 h-0.5 bg-purple-500/50 rounded animate-pulse" style={{animationDelay: '0.5s'}}></div>
            <div className="w-10 h-0.5 bg-cyan-500/50 rounded animate-pulse" style={{animationDelay: '1s'}}></div>
          </div>
          
          <div className="absolute bottom-40 right-8 flex flex-col gap-1 opacity-8 font-mono text-xs">
            <div className="w-14 h-0.5 bg-primary/50 rounded animate-pulse" style={{animationDelay: '2s'}}></div>
            <div className="w-8 h-0.5 bg-orange-500/50 rounded animate-pulse" style={{animationDelay: '2.5s'}}></div>
            <div className="w-12 h-0.5 bg-blue-500/50 rounded animate-pulse" style={{animationDelay: '3s'}}></div>
          </div>
        </div>

        <div className="container-wide relative z-10">
          {/* Section Header */}
          <Reveal>
            <div className="text-center mb-16 max-w-4xl mx-auto">
              {/* Section identifier badge */}
              <div className="inline-flex items-center gap-3 bg-white/90 backdrop-blur-sm border border-gray-200/50 text-blue-600 px-6 py-3 rounded-full text-sm font-medium mb-8 shadow-lg">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                <span className="font-semibold">Technology Stack</span>
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
              </div>
              
              {/* Main heading */}
              <h2 className="text-3xl lg:text-4xl font-bold text-black mb-6">
                Powered by <span className="text-primary">Modern Technologies</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We use cutting-edge technologies and industry best practices to deliver 
                fast, secure, and scalable solutions that grow with your business.
              </p>
            </div>
          </Reveal>

          {/* Technology Categories */}
          <div className="max-w-7xl mx-auto space-y-12">
            
            {/* Frontend Technologies */}
            <Reveal delay={0.2} width="100%">
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/50 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-white text-2xl">🎨</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-black">Frontend Development</h3>
                    <p className="text-gray-600">Modern, responsive user interfaces</p>
                  </div>
                </div>
                
                <div className="flex flex-wrap justify-center gap-6">
                  {[
                    { name: "React", icon: "⚛️", desc: "Component-based UI" },
                    { name: "Next.js", icon: "▲", desc: "Full-stack framework" },
                    { name: "TypeScript", icon: "📘", desc: "Type-safe development" },
                    { name: "Tailwind CSS", icon: "🎨", desc: "Utility-first styling" },
                    { name: "shadcn/ui", icon: "🎯", desc: "Beautiful components" },
                    { name: "Framer Motion", icon: "✨", desc: "Smooth animations" }
                  ].map((tech, index) => (
                    <div key={tech.name} className="group relative w-[160px] flex-shrink-0 mx-auto">
                      <div className="bg-white hover:bg-blue-50 border border-gray-200 hover:border-blue-300 rounded-xl p-4 text-center transition-all duration-300 hover:scale-105 hover:shadow-lg h-full flex flex-col items-center justify-center">
                        <div className="text-2xl mb-2">{tech.icon}</div>
                        <div className="font-semibold text-gray-900 mb-1 text-sm text-center">{tech.name}</div>
                        <div className="text-xs text-gray-600 text-center">{tech.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Backend & Infrastructure */}
            <Reveal delay={0.3} width="100%">
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/50 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-white text-2xl">⚙️</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-black">Backend & Infrastructure</h3>
                    <p className="text-gray-600">Robust, scalable server solutions</p>
                  </div>
                </div>
                
                <div className="flex flex-wrap justify-center gap-6">
                  {[
                    { name: "Node.js", icon: "🟢", desc: "JavaScript runtime" },
                    { name: "Vercel", icon: "▲", desc: "Edge deployment" },
                    { name: "MongoDB", icon: "🍃", desc: "NoSQL database" },
                    { name: "PostgreSQL", icon: "🐘", desc: "SQL database" },
                    { name: "Redis", icon: "🔴", desc: "In-memory cache" },
                    { name: "Docker", icon: "🐳", desc: "Containerization" }
                  ].map((tech, index) => (
                    <div key={tech.name} className="group relative w-[160px] flex-shrink-0 mx-auto">
                      <div className="bg-white hover:bg-purple-50 border border-gray-200 hover:border-purple-300 rounded-xl p-4 text-center transition-all duration-300 hover:scale-105 hover:shadow-lg h-full flex flex-col items-center justify-center">
                        <div className="text-2xl mb-2">{tech.icon}</div>
                        <div className="font-semibold text-gray-900 mb-1 text-sm text-center">{tech.name}</div>
                        <div className="text-xs text-gray-600 text-center">{tech.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Performance & SEO Tools */}
            <Reveal delay={0.4} width="100%">
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/50 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-orange-500 rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-white text-2xl">🚀</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-black">Performance & SEO</h3>
                    <p className="text-gray-600">Speed, optimization, and visibility</p>
                  </div>
                </div>
                
                <div className="flex flex-wrap justify-center gap-6">
                  {[
                    { name: "Core Web Vitals", icon: "📊", desc: "Performance metrics" },
                    { name: "Google Analytics", icon: "📈", desc: "Traffic insights" },
                    { name: "Search Console", icon: "🔍", desc: "SEO monitoring" },
                    { name: "Lighthouse", icon: "💡", desc: "Audit tools" },
                    { name: "Schema Markup", icon: "🏷️", desc: "Structured data" },
                    { name: "CDN", icon: "🌐", desc: "Global delivery" }
                  ].map((tech, index) => (
                    <div key={tech.name} className="group relative w-[160px] flex-shrink-0 mx-auto">
                      <div className="bg-white hover:bg-orange-50 border border-gray-200 hover:border-orange-300 rounded-xl p-4 text-center transition-all duration-300 hover:scale-105 hover:shadow-lg h-full flex flex-col items-center justify-center">
                        <div className="text-2xl mb-2">{tech.icon}</div>
                        <div className="font-semibold text-gray-900 mb-1 text-sm text-center">{tech.name}</div>
                        <div className="text-xs text-gray-600 text-center">{tech.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Key Benefits */}
            <Reveal delay={0.5}>
              <div className="max-w-5xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-200/50 hover:shadow-lg transition-shadow duration-300">
                    <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mb-4">
                      <span className="text-white text-xl">⚡</span>
                    </div>
                    <h4 className="text-xl font-bold text-blue-900 mb-3">Lightning Fast</h4>
                    <p className="text-blue-700">Optimized for speed with 99+ PageSpeed scores and instant loading times.</p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-6 border border-purple-200/50 hover:shadow-lg transition-shadow duration-300">
                    <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mb-4">
                      <span className="text-white text-xl">🔒</span>
                    </div>
                    <h4 className="text-xl font-bold text-purple-900 mb-3">Secure & Reliable</h4>
                    <p className="text-purple-700">Enterprise-grade security with 99.9% uptime and automatic backups.</p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-6 border border-orange-200/50 hover:shadow-lg transition-shadow duration-300">
                    <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mb-4">
                      <span className="text-white text-xl">📈</span>
                    </div>
                    <h4 className="text-xl font-bold text-primary mb-3">SEO Optimized</h4>
                    <p className="text-orange-700">Built for search engines with structured data and best practices.</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="relative bg-white">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-8">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-blue-500/40 rounded-full"></div>
            <div className="w-2 h-2 bg-purple-500/60 rounded-full"></div>
            <div className="w-1.5 h-1.5 bg-cyan-500/40 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container-wide">
          <Reveal>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="mb-6 text-3xl lg:text-4xl font-bold text-black">
                Ready to Get Started with {serviceDisplay}?
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
                Get a free consultation and see how our {serviceDisplay.toLowerCase()} services 
                can help your business succeed online with proven strategies.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <Link href="/free-redesign">
                  <Button className="btn btn-primary btn-lg">
                    Get Free Website Audit
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" className="btn btn-lg border-gray-300 text-gray-700 hover:bg-gray-50">
                    <Phone className="mr-2 h-5 w-5" />
                    Call Us Today
                  </Button>
                </Link>
              </div>

              <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-sm text-gray-600">
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
    </main>
  );
}
