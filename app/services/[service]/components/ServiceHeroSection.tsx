import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/reveal-animation";

interface ServiceHeroSectionProps {
  serviceDisplay: string;
}

export default function ServiceHeroSection({ serviceDisplay }: ServiceHeroSectionProps) {
  return (
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
        </div>
      </div>
    </section>
  );
}
