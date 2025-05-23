import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { ArrowRight, Clock, Users, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import Reveal from "@/components/reveal-animation"

export const metadata: Metadata = {
  title: "About Us | Melling WebStudios",
  description:
    "Learn about Melling WebStudios, our team, values, and mission to create high-performance web experiences.",
}

const teamMembers = [
  {
    name: "Alex Melling",
    role: "Founder & Lead Developer",
    bio: "Alex has over 10 years of experience in web development with a focus on React and Next.js. He founded Melling WebStudios to help small businesses leverage modern web technologies.",
    imageUrl: "/placeholder.svg?height=400&width=400&query=professional male developer portrait",
  },
  {
    name: "Sarah Chen",
    role: "UX Designer",
    bio: "Sarah specializes in creating intuitive, user-centered designs that drive conversions. Her background in psychology helps her understand user behavior and design for optimal experiences.",
    imageUrl: "/placeholder.svg?height=400&width=400&query=professional female designer portrait",
  },
  {
    name: "Michael Rodriguez",
    role: "Frontend Developer",
    bio: "Michael is an expert in React and modern JavaScript frameworks. He's passionate about creating performant, accessible web experiences that work flawlessly across all devices.",
    imageUrl: "/placeholder.svg?height=400&width=400&query=professional male developer portrait",
  },
  {
    name: "Jessica Kim",
    role: "Project Manager",
    bio: "Jessica ensures all projects are delivered on time and to the highest standards. Her attention to detail and communication skills keep clients informed and projects running smoothly.",
    imageUrl: "/placeholder.svg?height=400&width=400&query=professional female project manager portrait",
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-background">
        <div className="container-wide">
          <Reveal>
            <h1 className="text-left mb-6">About Melling WebStudios</h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-left text-muted-foreground text-xl max-w-3xl mx-auto">
              We're a team of passionate web developers and designers dedicated to creating high-performance websites
              that drive business growth.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-background">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <Reveal>
              <div>
                <h2 className="mb-6">Our Story</h2>
                <p className="mb-4">
                  Melling WebStudios was founded in 2018 by Alex Melling, a developer with a passion for creating fast,
                  effective websites that actually deliver results for businesses.
                </p>
                <p className="mb-4">
                  After years of seeing small businesses struggle with slow, outdated websites that weren't converting
                  visitors into customers, Alex decided to build a studio focused exclusively on high-performance web
                  development.
                </p>
                <p className="mb-4">
                  Today, our team combines expertise in React, Next.js, and user experience design to create websites
                  that not only look great but load in milliseconds and convert visitors into customers.
                </p>
                <p>
                  We've helped dozens of small businesses transform their online presence and achieve significant growth
                  through better web experiences.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <Image
                src="/placeholder.svg?height=600&width=800&query=modern web development team working together"
                alt="Melling WebStudios team"
                width={800}
                height={600}
                className="rounded-lg shadow-lg"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-bg-light">
        <div className="container-wide">
          <Reveal>
            <div className="text-left max-w-2xl mx-auto mb-16">
              <h2 className="mb-4">Our Values</h2>
              <p className="text-muted-foreground text-lg">
                These core principles guide everything we do at Melling WebStudios.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Reveal delay={0.1}>
              <div className="bg-background p-8 rounded-lg border border-border h-full">
                <div className="bg-primary/10 p-3 rounded-full w-fit mb-6">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Performance</h3>
                <p className="text-muted-foreground">
                  We believe that speed is a feature. Every millisecond counts when it comes to user experience and
                  conversion rates. We obsess over performance optimization.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="bg-background p-8 rounded-lg border border-border h-full">
                <div className="bg-primary/10 p-3 rounded-full w-fit mb-6">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Transparency</h3>
                <p className="text-muted-foreground">
                  We believe in open, honest communication with our clients. No technical jargon or hidden fees. We
                  explain everything in plain language and keep you informed at every step.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="bg-background p-8 rounded-lg border border-border h-full">
                <div className="bg-primary/10 p-3 rounded-full w-fit mb-6">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Results</h3>
                <p className="text-muted-foreground">
                  We measure success by the results we deliver for our clients. We're not satisfied with a website that
                  just looks good—it needs to perform and convert visitors into customers.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-background">
        <div className="container-wide">
          <Reveal>
            <div className="text-left max-w-2xl mx-auto mb-16">
              <h2 className="mb-4">Meet Our Team</h2>
              <p className="text-muted-foreground text-lg">
                We're a small but mighty team of web development experts passionate about creating exceptional digital
                experiences.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Reveal key={member.name} delay={index * 0.1}>
                <div className="bg-background rounded-lg overflow-hidden border border-border">
                  <div className="aspect-square relative">
                    <Image
                      src={member.imageUrl || "/placeholder.svg"}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-primary mb-4">{member.role}</p>
                    <p className="text-muted-foreground text-sm">{member.bio}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-bg-light">
        <div className="container-wide">
          <Reveal>
            <div className="text-left max-w-2xl mx-auto mb-16">
              <h2 className="mb-4">Our Journey</h2>
              <p className="text-muted-foreground text-lg">
                From humble beginnings to where we are today, here's how Melling WebStudios has evolved.
              </p>
            </div>
          </Reveal>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-border"></div>

            {/* Timeline Items */}
            <div className="space-y-12">
              <Reveal>
                <div className="relative">
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary"></div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="md:text-right md:pr-12">
                      <h3 className="text-xl font-bold mb-2">2018</h3>
                      <p className="text-muted-foreground">
                        Melling WebStudios is founded by Alex Melling with a mission to create high-performance websites
                        for small businesses.
                      </p>
                    </div>
                    <div className="md:pl-12">
                      <Image
                        src="/placeholder.svg?height=300&width=400&query=startup office space"
                        alt="Founding of Melling WebStudios"
                        width={400}
                        height={300}
                        className="rounded-lg shadow-md"
                      />
                    </div>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="relative">
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary"></div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="md:text-right md:pr-12 md:order-1 order-2">
                      <Image
                        src="/placeholder.svg?height=300&width=400&query=team growth office expansion"
                        alt="Team expansion"
                        width={400}
                        height={300}
                        className="rounded-lg shadow-md md:ml-auto"
                      />
                    </div>
                    <div className="md:pl-12 md:order-2 order-1">
                      <h3 className="text-xl font-bold mb-2">2020</h3>
                      <p className="text-muted-foreground">
                        The team grows to 5 people and we move into our first dedicated office space. We complete our
                        25th client project.
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="relative">
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary"></div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="md:text-right md:pr-12">
                      <h3 className="text-xl font-bold mb-2">2022</h3>
                      <p className="text-muted-foreground">
                        Launch of our Free Website Redesign program, helping small businesses see the potential impact
                        of performance improvements.
                      </p>
                    </div>
                    <div className="md:pl-12">
                      <Image
                        src="/placeholder.svg?height=300&width=400&query=website redesign presentation"
                        alt="Launch of Free Redesign program"
                        width={400}
                        height={300}
                        className="rounded-lg shadow-md"
                      />
                    </div>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.3}>
                <div className="relative">
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary"></div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="md:text-right md:pr-12 md:order-1 order-2">
                      <Image
                        src="/placeholder.svg?height=300&width=400&query=modern web development team celebration"
                        alt="Today"
                        width={400}
                        height={300}
                        className="rounded-lg shadow-md md:ml-auto"
                      />
                    </div>
                    <div className="md:pl-12 md:order-2 order-1">
                      <h3 className="text-xl font-bold mb-2">Today</h3>
                      <p className="text-muted-foreground">
                        We've completed over 100 projects and continue to grow our team of experts dedicated to creating
                        high-performance web experiences.
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-primary text-white">
        <div className="container-wide">
          <div className="max-w-2xl mx-auto text-center">
            <Reveal>
              <h2 className="mb-6">Join Our Newsletter</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-white/80 mb-8">
                Stay updated with the latest web development trends, performance tips, and insights from our team.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="px-4 py-3 rounded-md flex-grow text-fg-dark focus:outline-none focus:ring-2 focus:ring-white"
                />
                <Button className="bg-white text-primary hover:bg-white/90 whitespace-nowrap">Subscribe</Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background">
        <div className="container-wide text-center">
          <Reveal>
            <h2 className="mb-6">Ready to work with us?</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Let's discuss how we can help you achieve your business goals with a high-performance website.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <Link href="/contact">
              <Button className="btn btn-primary btn-lg">
                Get in Touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
