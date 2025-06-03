import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { ArrowLeft, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Reveal from "@/components/reveal-animation"

interface CaseStudyPageProps {
  params: {
    slug: string
  }
}

// This would typically come from a CMS or database
const caseStudies = {
  "birmingham-boiler-repairs": {
    title: "Birmingham Boiler Repairs – High-Performance Redesign",
    description:
      "Modern, SEO-first website redesign for Birmingham's leading boiler repair specialists. Built to drive more calls and bookings with blazing-fast load speeds and easy navigation.",
    client: "Birmingham Boiler Repairs",
    industry: "Plumbing & Heating Services",
    services: ["Website Redesign", "SEO Optimization", "Local Landing Pages", "Lead Generation"],
    challenge:
      "The original site was slow, dated, and buried on Google. Leads were dropping, and mobile users were bouncing before the page loaded.",
    solution:
      "We rebuilt the site with Next.js and Tailwind, structured for local SEO, and designed with clear CTAs. Integrated dynamic reviews, sticky call buttons, and a scalable architecture for new services/locations.",
    results: [
      "PageSpeed 99+ (mobile & desktop)",
      "1st leads within 7 days",
      "3x increase in monthly calls",
      "Indexed for 12+ high-value keywords",
      "Major ranking climb within 2 weeks"
    ],
    testimonial: {
      quote:
        "Ashley and the team delivered exactly what we needed—a site that loads instantly and brings in real customers. Our bookings are up and we're ranking higher than ever.",
      author: "Dave",
      position: "Owner",
      company: "Birmingham Boiler Repairs"
    },
    technologies: ["Next.js", "React", "Tailwind CSS", "Vercel", "shadcn/ui"],
    imageUrl: "bbr-website.png",
    galleryImages: [
      "bbr-website.png",
      "bbr-website.png",
      "bbr-website.png"
    ]
  },
  // Add more as you launch new work!
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const caseStudy = caseStudies[params.slug as keyof typeof caseStudies]

  if (!caseStudy) {
    return {
      title: "Case Study Not Found",
    }
  }

  return {
    title: `${caseStudy.title} | Melling WebStudios`,
    description: caseStudy.description,
  }
}

export default function CaseStudyPage({ params }: CaseStudyPageProps) {
  const caseStudy = caseStudies[params.slug as keyof typeof caseStudies]

  if (!caseStudy) {
    notFound()
  }

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-background">
        <div className="container-wide">
          <Reveal>
            <Link href="/work" className="inline-flex items-center text-primary hover:underline mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to all work
            </Link>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mb-6">{caseStudy.title}</h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-xl text-muted-foreground max-w-3xl mb-8">{caseStudy.description}</p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="flex flex-wrap gap-2 mb-12">
              {caseStudy.services.map((service, index) => (
                <Badge key={index} variant="outline" className="bg-primary/10 text-primary border-primary/20">
                  {service}
                </Badge>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Main Image */}
      <section className="pb-20 bg-background">
        <div className="container-wide">
          <Reveal>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <Image
                src={caseStudy.imageUrl || "/placeholder.svg"}
                alt={caseStudy.title}
                width={1200}
                height={800}
                className="w-full h-auto"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-20 bg-background">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Left Column - Project Info */}
            <div className="lg:col-span-1">
              <Reveal>
                <div className="space-y-8">
                  <div>
                    <h3 className="text-lg font-bold mb-2">Client</h3>
                    <p>{caseStudy.client}</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">Industry</h3>
                    <p>{caseStudy.industry}</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">Services</h3>
                    <ul className="space-y-1">
                      {caseStudy.services.map((service, index) => (
                        <li key={index}>{service}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                      {caseStudy.technologies.map((tech, index) => (
                        <Badge key={index} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right Column - Case Study Content */}
            <div className="lg:col-span-2">
              <Reveal>
                <div className="space-y-12">
                  <div>
                    <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
                    <p className="text-muted-foreground">{caseStudy.challenge}</p>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Our Solution</h2>
                    <p className="text-muted-foreground">{caseStudy.solution}</p>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Results</h2>
                    <ul className="space-y-3">
                      {caseStudy.results.map((result, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1" />
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-bg-light">
        <div className="container-wide">
          <Reveal>
            <h2 className="text-2xl font-bold mb-12 text-center">Project Gallery</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudy.galleryImages.map((image, index) => (
              <Reveal key={index} delay={index * 0.1}>
                <div className="rounded-lg overflow-hidden shadow-md">
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${caseStudy.title} gallery image ${index + 1}`}
                    width={800}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-primary text-white">
        <div className="container-wide">
          <Reveal>
            <div className="max-w-3xl mx-auto text-center">
              <svg className="w-12 h-12 text-white/30 mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <blockquote className="text-2xl font-medium mb-6">"{caseStudy.testimonial.quote}"</blockquote>
              <div>
                <p className="font-bold">{caseStudy.testimonial.author}</p>
                <p className="text-white/70">
                  {caseStudy.testimonial.position}, {caseStudy.testimonial.company}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background">
        <div className="container-wide text-center">
          <Reveal>
            <h2 className="text-2xl font-bold mb-6">Ready to start your project?</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Let's discuss how we can help you achieve similar results for your business.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <Button className="btn btn-primary btn-lg">Contact Us</Button>
              </Link>
              <Link href="/free-redesign">
                <Button variant="outline" className="btn btn-outline btn-lg">
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
