import Reveal from "@/components/reveal-animation";

interface ServiceTechSectionProps {}

export default function ServiceTechSection({}: ServiceTechSectionProps) {
  return (
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
                ].map((tech) => (
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
                ].map((tech) => (
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
                ].map((tech) => (
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
  );
}
