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
      <section className="pt-32 pb-20 bg-gradient-to-br from-background via-bg-light to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container-wide relative">
          <div className="max-w-4xl mx-auto text-center">
            <Reveal>
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                About Our Story
              </div>
            </Reveal>
            <Reveal delay={0.1}>
                <h1 className="mb-6 text-black">
                About Melling WebStudios
                </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-muted-foreground text-xl max-w-3xl mx-auto leading-relaxed">
                We're a team of passionate web developers and designers dedicated to creating high-performance websites
                that drive business growth and deliver exceptional user experiences.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <div className="bg-background/80 backdrop-blur-sm border border-border rounded-lg px-4 py-2">
                  <span className="text-2xl font-bold text-primary">100+</span>
                  <p className="text-sm text-muted-foreground">Projects Completed</p>
                </div>
                <div className="bg-background/80 backdrop-blur-sm border border-border rounded-lg px-4 py-2">
                  <span className="text-2xl font-bold text-primary">6+</span>
                  <p className="text-sm text-muted-foreground">Years Experience</p>
                </div>
                <div className="bg-background/80 backdrop-blur-sm border border-border rounded-lg px-4 py-2">
                  <span className="text-2xl font-bold text-primary">4</span>
                  <p className="text-sm text-muted-foreground">Team Members</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-background">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/10 rounded-full"></div>
                <div className="bg-background border border-border rounded-2xl p-8 shadow-lg relative">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary/60 rounded-t-2xl"></div>
                  <h2 className="mb-6 flex items-center gap-3">
                    Our Story
                    <div className="w-8 h-px bg-primary"></div>
                  </h2>
                  <div className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      Melling WebStudios was founded in 2018 by Alex Melling, a developer with a passion for creating fast,
                      effective websites that actually deliver results for businesses.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      After years of seeing small businesses struggle with slow, outdated websites that weren't converting
                      visitors into customers, Alex decided to build a studio focused exclusively on high-performance web
                      development.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Today, our team combines expertise in React, Next.js, and user experience design to create websites
                      that not only look great but load in milliseconds and convert visitors into customers.
                    </p>
                    <div className="bg-primary/5 border-l-4 border-primary p-4 rounded-r-lg">
                      <p className="text-foreground font-medium">
                        We've helped dozens of small businesses transform their online presence and achieve significant growth
                        through better web experiences.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="relative">
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/5 rounded-full"></div>
                <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
                  <Image
                    src="/placeholder.svg?height=600&width=800&query=modern web development team working together"
                    alt="Melling WebStudios team"
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4">
                      <p className="text-sm font-medium text-gray-900">
                        Our team collaborating on innovative web solutions
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-bg-light relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5"></div>
        <div className="container-wide relative">
          <Reveal>
            <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Zap className="w-4 h-4" />
                Our Core Values
              </div>
              <h2 className="mb-6">What Drives Us Forward</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                These fundamental principles guide every decision we make and every project we undertake at Melling WebStudios.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Reveal delay={0.1}>
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
                <div className="relative bg-background p-8 rounded-2xl border border-border shadow-lg h-full hover:shadow-xl transition-shadow duration-300">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary/60 rounded-t-2xl"></div>
                  <div className="bg-gradient-to-br from-primary/20 to-primary/10 p-4 rounded-xl w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Zap className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                    Performance First
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We believe that speed is a feature. Every millisecond counts when it comes to user experience and
                    conversion rates. We obsess over performance optimization and cutting-edge technologies.
                  </p>
                  <div className="mt-6 pt-4 border-t border-border">
                    <div className="flex items-center gap-2 text-sm text-primary font-medium">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      Sub-second load times
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl transform -rotate-1 group-hover:-rotate-2 transition-transform duration-300"></div>
                <div className="relative bg-background p-8 rounded-2xl border border-border shadow-lg h-full hover:shadow-xl transition-shadow duration-300">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary/60 rounded-t-2xl"></div>
                  <div className="bg-gradient-to-br from-primary/20 to-primary/10 p-4 rounded-xl w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                    Complete Transparency
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We believe in open, honest communication with our clients. No technical jargon or hidden fees. We
                    explain everything in plain language and keep you informed at every step of the journey.
                  </p>
                  <div className="mt-6 pt-4 border-t border-border">
                    <div className="flex items-center gap-2 text-sm text-primary font-medium">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      Clear communication
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
                <div className="relative bg-background p-8 rounded-2xl border border-border shadow-lg h-full hover:shadow-xl transition-shadow duration-300">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary/60 rounded-t-2xl"></div>
                  <div className="bg-gradient-to-br from-primary/20 to-primary/10 p-4 rounded-xl w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Clock className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                    Measurable Results
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We measure success by the results we deliver for our clients. We're not satisfied with a website that
                    just looks good—it needs to perform, convert visitors, and drive real business growth.
                  </p>
                  <div className="mt-6 pt-4 border-t border-border">
                    <div className="flex items-center gap-2 text-sm text-primary font-medium">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      ROI-focused approach
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-background relative">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        </div>
        <div className="container-wide relative">
          <Reveal>
            <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Users className="w-4 h-4" />
                Meet the Team
              </div>
              <h2 className="mb-6">The Minds Behind the Magic</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We're a small but mighty team of web development experts passionate about creating exceptional digital
                experiences that drive real business results.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Reveal key={member.name} delay={index * 0.1}>
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
                  <div className="relative bg-background rounded-2xl overflow-hidden border border-border shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary/60"></div>
                    <div className="aspect-square relative overflow-hidden">
                      <Image
                        src={member.imageUrl || "/placeholder.svg"}
                        alt={member.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="p-6">
                      <div className="mb-4">
                        <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors duration-300">
                          {member.name}
                        </h3>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <p className="text-primary font-medium text-sm">{member.role}</p>
                        </div>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed">{member.bio}</p>
                      <div className="mt-4 pt-4 border-t border-border">
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                          Available for projects
                        </div>
                      </div>
                    </div>
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
            <div className="flex flex-col items-center justify-center text-center max-w-2xl mx-auto mb-16">
              <h2 className="mb-4">Our Journey</h2>
              <p className="text-muted-foreground text-lg">
                From humble beginnings to where we are today, here's how Melling WebStudios has evolved.
              </p>
            </div>
          </Reveal>

          <div className="relative max-w-6xl mx-auto">
            {/* Timeline Line - Responsive */}
            <div className="absolute left-8 md:left-1/2 top-0 h-full w-0.5 bg-gradient-to-b from-primary via-primary/60 to-primary transform md:-translate-x-1/2"></div>

            {/* Timeline Items */}
            <div className="space-y-16">
              {/* 2018 */}
              <Reveal>
                <div className="relative flex flex-col md:flex-row md:items-center">
                  {/* Timeline Dot */}
                  <div className="absolute left-6 md:left-1/2 w-6 h-6 rounded-full bg-primary border-4 border-background shadow-lg transform md:-translate-x-1/2 z-10">
                    <div className="absolute inset-1 bg-primary rounded-full animate-pulse"></div>
                  </div>
                  
                  {/* Content */}
                  <div className="md:w-1/2 md:pr-12 pl-16 md:pl-0">
                    <div className="bg-background p-6 rounded-lg shadow-md border border-border">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-2xl font-bold text-primary">2018</span>
                        <div className="h-px bg-border flex-1"></div>
                      </div>
                      <h3 className="text-xl font-bold mb-3">The Beginning</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Melling WebStudios is founded by Alex Melling with a mission to create high-performance websites
                        for small businesses.
                      </p>
                    </div>
                  </div>
                  
                  {/* Image */}
                  <div className="md:w-1/2 md:pl-12 mt-6 md:mt-0 pl-16 md:pl-12">
                    <div className="relative overflow-hidden rounded-lg shadow-lg">
                      <Image
                        src="/placeholder.svg?height=250&width=400&query=startup office space"
                        alt="Founding of Melling WebStudios"
                        width={400}
                        height={250}
                        className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* 2020 */}
              <Reveal delay={0.1}>
                <div className="relative flex flex-col md:flex-row md:items-center">
                  {/* Timeline Dot */}
                  <div className="absolute left-6 md:left-1/2 w-6 h-6 rounded-full bg-primary border-4 border-background shadow-lg transform md:-translate-x-1/2 z-10">
                    <div className="absolute inset-1 bg-primary rounded-full animate-pulse"></div>
                  </div>
                  
                  {/* Image - Left on desktop */}
                  <div className="md:w-1/2 md:pr-12 md:order-1 order-2 pl-16 md:pl-0 mt-6 md:mt-0">
                    <div className="relative overflow-hidden rounded-lg shadow-lg">
                      <Image
                        src="/placeholder.svg?height=250&width=400&query=team growth office expansion"
                        alt="Team expansion"
                        width={400}
                        height={250}
                        className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                  
                  {/* Content - Right on desktop */}
                  <div className="md:w-1/2 md:pl-12 md:order-2 order-1 pl-16 md:pl-0">
                    <div className="bg-background p-6 rounded-lg shadow-md border border-border">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-2xl font-bold text-primary">2020</span>
                        <div className="h-px bg-border flex-1"></div>
                      </div>
                      <h3 className="text-xl font-bold mb-3">Growing Strong</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        The team grows to 5 people and we move into our first dedicated office space. We complete our
                        25th client project.
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* 2022 */}
              <Reveal delay={0.2}>
                <div className="relative flex flex-col md:flex-row md:items-center">
                  {/* Timeline Dot */}
                  <div className="absolute left-6 md:left-1/2 w-6 h-6 rounded-full bg-primary border-4 border-background shadow-lg transform md:-translate-x-1/2 z-10">
                    <div className="absolute inset-1 bg-primary rounded-full animate-pulse"></div>
                  </div>
                  
                  {/* Content */}
                  <div className="md:w-1/2 md:pr-12 pl-16 md:pl-0">
                    <div className="bg-background p-6 rounded-lg shadow-md border border-border">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-2xl font-bold text-primary">2022</span>
                        <div className="h-px bg-border flex-1"></div>
                      </div>
                      <h3 className="text-xl font-bold mb-3">Innovation Launch</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Launch of our Free Website Redesign program, helping small businesses see the potential impact
                        of performance improvements.
                      </p>
                    </div>
                  </div>
                  
                  {/* Image */}
                  <div className="md:w-1/2 md:pl-12 mt-6 md:mt-0 pl-16 md:pl-12">
                    <div className="relative overflow-hidden rounded-lg shadow-lg">
                      <Image
                        src="/placeholder.svg?height=250&width=400&query=website redesign presentation"
                        alt="Launch of Free Redesign program"
                        width={400}
                        height={250}
                        className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* Today */}
              <Reveal delay={0.3}>
                <div className="relative flex flex-col md:flex-row md:items-center">
                  {/* Timeline Dot - Special for current */}
                  <div className="absolute left-6 md:left-1/2 w-6 h-6 rounded-full bg-gradient-to-r from-primary to-primary/80 border-4 border-background shadow-lg transform md:-translate-x-1/2 z-10">
                    <div className="absolute inset-1 bg-gradient-to-r from-primary to-primary/80 rounded-full animate-pulse"></div>
                    <div className="absolute -inset-2 rounded-full border-2 border-primary/20 animate-ping"></div>
                  </div>
                  
                  {/* Image - Left on desktop */}
                  <div className="md:w-1/2 md:pr-12 md:order-1 order-2 pl-16 md:pl-0 mt-6 md:mt-0">
                    <div className="relative overflow-hidden rounded-lg shadow-lg">
                      <Image
                        src="/placeholder.svg?height=250&width=400&query=modern web development team celebration"
                        alt="Today"
                        width={400}
                        height={250}
                        className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                  
                  {/* Content - Right on desktop */}
                  <div className="md:w-1/2 md:pl-12 md:order-2 order-1 pl-16 md:pl-0">
                    <div className="bg-background p-6 rounded-lg shadow-md border border-border relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary/60"></div>
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-2xl font-bold text-primary">Today</span>
                        <div className="h-px bg-border flex-1"></div>
                      </div>
                      <h3 className="text-xl font-bold mb-3">Leading the Way</h3>
                      <p className="text-muted-foreground leading-relaxed">
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
          <div className="flex flex-col items-center justify-center text-center max-w-2xl mx-auto">
            <Reveal>
              <h2 className="mb-6">Join Our Newsletter</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-white/80 mb-8">
                Stay updated with the latest web development trends, performance tips, and insights from our team.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="px-4 py-3 rounded-md text-fg-dark focus:outline-none focus:ring-2 focus:ring-white flex-1"
                />
                <Button className="bg-white text-primary hover:bg-white/90 whitespace-nowrap">Subscribe</Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background">
        <div className="container-wide">
          <div className="flex flex-col items-center justify-center text-center max-w-2xl mx-auto">
            <Reveal>
              <h2 className="mb-6">Ready to work with us?</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-muted-foreground mb-8">
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
        </div>
      </section>
    </>
  )
}
