import Link from "next/link";
import { ArrowRight, Rocket, CheckCircle, Phone } from "lucide-react";
import Reveal from "@/components/reveal-animation";
import LivePreview from "@/components/live-preview";

interface ServicePortfolioSectionProps {
  serviceDisplay: string;
}

export default function ServicePortfolioSection({ serviceDisplay }: ServicePortfolioSectionProps) {
  return (
    <section className="py-20 relative overflow-hidden border-t border-gray-200/30" style={{backgroundColor: '#4B4B4B'}}>
      {/* Section identifier stripe */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-orange-500 to-yellow-500"></div>

      {/* Enhanced coding-themed background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gentle gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-orange-500/5"></div>
        {/* ...existing code for all background elements... */}
        {/* Copy all background elements from the original section here */}
        {/* ...existing code... */}
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
              <LivePreview
                url="https://birminghamboilerrepairs.uk"
                title="Birmingham Boiler Repairs - Live Website"
                performanceBadge="99+ PageSpeed"
                stats={[
                  { value: "3x", label: "More Leads", color: "green" },
                  { value: "99+", label: "PageSpeed", color: "primary" },
                  { value: "7", label: "Days to Results", color: "orange" }
                ]}
                height="600px"
              />
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
  );
}
