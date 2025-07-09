import { Search, Settings, Target, Rocket, Users, Trophy, Zap } from "lucide-react";

export interface ServiceBenefit {
  title: string;
  description: string;
  icon: string;
  metric?: string;
  color: string;
  features: string[];
}

export interface ProcessStep {
  title: string;
  description: string;
  icon: any;
  duration: string;
}

export interface ServiceData {
  benefits: ServiceBenefit[];
  processSteps: ProcessStep[];
}

export const serviceData: Record<string, ServiceData> = {
  "website-redesign": {
    benefits: [
      { 
        title: "Modern, Professional Design", 
        description: "Contemporary design that reflects your brand and builds trust with customers",
        icon: "🎨",
        metric: "300% better first impressions",
        color: "from-blue-500 to-cyan-500",
        features: ["Custom branding", "Visual hierarchy", "Trust signals", "Modern UI/UX"]
      },
      { 
        title: "Mobile-First Approach", 
        description: "Optimized for mobile devices where most of your customers browse",
        icon: "📱",
        metric: "70% of traffic is mobile",
        color: "from-green-500 to-emerald-500",
        features: ["Responsive design", "Touch-friendly", "Fast mobile loading", "App-like experience"]
      },
      { 
        title: "Speed Optimization", 
        description: "Lightning-fast loading times to keep visitors engaged",
        icon: "⚡",
        metric: "99+ PageSpeed score",
        color: "from-yellow-500 to-orange-500",
        features: ["Core Web Vitals", "CDN integration", "Image optimization", "Code minification"]
      },
      { 
        title: "Conversion Optimization", 
        description: "Designed to turn visitors into paying customers",
        icon: "🎯",
        metric: "Up to 400% more leads",
        color: "from-purple-500 to-pink-500",
        features: ["Clear CTAs", "Trust elements", "User flow optimization", "A/B testing ready"]
      }
    ],
    processSteps: [
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
    ]
  },
  "seo-optimisation": {
    benefits: [
      { 
        title: "Local Search Ranking", 
        description: "Appear higher in Google when customers search for your services locally",
        icon: "📍",
        metric: "Top 3 Google rankings",
        color: "from-red-500 to-pink-500",
        features: ["Google My Business", "Local citations", "Review optimization", "Local content"]
      },
      { 
        title: "Keyword Research", 
        description: "Target the exact terms your customers are searching for",
        icon: "🔍",
        metric: "1000+ keywords analyzed",
        color: "from-blue-500 to-indigo-500",
        features: ["Search volume analysis", "Competition research", "Long-tail keywords", "Intent mapping"]
      },
      { 
        title: "Technical SEO", 
        description: "Behind-the-scenes optimization for better search performance",
        icon: "⚙️",
        metric: "100% SEO compliance",
        color: "from-gray-500 to-gray-700",
        features: ["Site structure", "Schema markup", "Page speed", "Mobile optimization"]
      },
      { 
        title: "Content Strategy", 
        description: "SEO-optimized content that engages and converts",
        icon: "📝",
        metric: "3x more organic traffic",
        color: "from-green-500 to-teal-500",
        features: ["Content calendar", "Keyword integration", "User intent focus", "Regular updates"]
      }
    ],
    processSteps: [
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
  }
};

// Default service data for unknown services
export const defaultServiceData: ServiceData = {
  benefits: [
    { 
      title: "Expert Implementation", 
      description: "Professional implementation of industry best practices",
      icon: "🏆",
      metric: "10+ years experience",
      color: "from-primary to-blue-500",
      features: ["Best practices", "Industry standards", "Quality assurance", "Expert guidance"]
    },
    { 
      title: "Measurable Results", 
      description: "Track progress with detailed analytics and reporting",
      icon: "📊",
      metric: "Real-time tracking",
      color: "from-green-500 to-emerald-500",
      features: ["Analytics setup", "Performance reports", "Goal tracking", "ROI measurement"]
    },
    { 
      title: "Ongoing Support", 
      description: "Continuous support to ensure long-term success",
      icon: "🤝",
      metric: "24/7 support available",
      color: "from-purple-500 to-pink-500",
      features: ["Technical support", "Updates included", "Monitoring", "Maintenance"]
    },
    { 
      title: "Custom Solutions", 
      description: "Tailored approach designed for your specific business needs",
      icon: "🎨",
      metric: "100% customized",
      color: "from-orange-500 to-red-500",
      features: ["Bespoke design", "Custom features", "Scalable solutions", "Future-proof"]
    }
  ],
  processSteps: [
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
  ]
};

// Helper functions
export function getServiceBenefits(service: string): ServiceBenefit[] {
  return serviceData[service]?.benefits || defaultServiceData.benefits;
}

export function getProcessSteps(service: string): ProcessStep[] {
  return serviceData[service]?.processSteps || defaultServiceData.processSteps;
}
