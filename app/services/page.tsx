import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Reveal from "@/components/reveal-animation"

export const metadata: Metadata = {
  title: "Services | Melling WebStudios",
  description:
    "Premium web development services including custom websites, web applications, and UX design for small businesses.",
}

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-background">
        <div className="container-wide">
          <Reveal>
            <h1 className="text-center mb-6">Our Services</h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-center text-muted-foreground text-xl max-w-3xl mx-auto">
              We offer a comprehensive range of web development services to help your business thrive online.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Custom Websites */}
      <section id="custom-websites" className="py-20 bg-background">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <Reveal>
              <div>
                <span className="text-primary font-medium mb-2 block">01</span>
                <h2 className="mb-4">Custom Websites</h2>
                <p className="mb-6">
                  We build bespoke, high-performance websites that are tailored to your business needs. Using React and
                  Next.js, we create lightning-fast experiences that convert visitors into customers.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1" />
                    <span>Blazing-fast load times with Next.js App Router</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1" />
                    <span>Responsive design that works on all devices</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1" />
                    <span>SEO-optimized structure and content</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1" />
                    <span>Conversion-focused user experience</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1" />
                    <span>Content management system integration</span>
                  </li>
                </ul>
                <Link href="/contact">
                  <Button className="btn btn-primary">
                    Discuss Your Project
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <Image
                src="/placeholder.svg?height=600&width=800&query=responsive website design on multiple devices"
                alt="Custom website development"
                width={800}
                height={600}
                className="rounded-lg shadow-lg"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Web Applications */}
      <section id="web-applications" className="py-20 bg-bg-light">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <Reveal delay={0.2} className="order-2 md:order-1">
              <Image
                src="/placeholder.svg?height=600&width=800&query=complex web application dashboard"
                alt="Web application development"
                width={800}
                height={600}
                className="rounded-lg shadow-lg"
              />
            </Reveal>
            <Reveal className="order-1 md:order-2">
              <div>
                <span className="text-primary font-medium mb-2 block">02</span>
                <h2 className="mb-4">Web Applications</h2>
                <p className="mb-6">
                  We develop complex, interactive web applications with seamless user experiences and robust backend
                  integrations. From dashboards to e-commerce platforms, we build solutions that scale with your
                  business.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1" />
                    <span>Full-stack development with React and Node.js</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1" />
                    <span>Real-time data processing and visualization</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1" />
                    <span>Secure authentication and authorization</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1" />
                    <span>API development and integration</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1" />
                    <span>Scalable architecture for growing businesses</span>
                  </li>
                </ul>
                <Link href="/contact">
                  <Button className="btn btn-primary">
                    Discuss Your Project
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* UX Design */}
      <section id="ux-design" className="py-20 bg-background">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <Reveal>
              <div>
                <span className="text-primary font-medium mb-2 block">03</span>
                <h2 className="mb-4">UX Design</h2>
                <p className="mb-6">
                  We create user-centered designs that deliver intuitive, engaging experiences that guide users toward
                  conversion. Our design process is focused on understanding your users and business goals.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1" />
                    <span>User research and persona development</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1" />
                    <span>Wireframing and prototyping</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1" />
                    <span>Usability testing and iteration</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1" />
                    <span>Conversion rate optimization</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1" />
                    <span>Accessibility compliance (WCAG)</span>
                  </li>
                </ul>
                <Link href="/contact">
                  <Button className="btn btn-primary">
                    Discuss Your Project
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <Image
                src="/placeholder.svg?height=600&width=800&query=ux design wireframes and prototypes"
                alt="UX design process"
                width={800}
                height={600}
                className="rounded-lg shadow-lg"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container-wide text-center">
          <Reveal>
            <h2 className="mb-6">Ready to start your project?</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-white/80 max-w-2xl mx-auto mb-8 text-lg">
              Let's discuss how we can help you achieve your business goals with our expert web development services.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="flex flex-wrap justify-center gap-4">
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
