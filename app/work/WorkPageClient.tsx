"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ExternalLink, Github, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Reveal from "@/components/reveal-animation"

// Example project data - replace with your actual projects
const projects = [
  {
    id: 1,
    title: "BitPay Redesign",
    slug: "bitpay-redesign",
    imageUrl: "/placeholder.svg?key=ii9zv",
    thumbnailUrl: "/placeholder.svg?key=nfre9",
    description:
      "A complete redesign of BitPay's cryptocurrency payment platform, focusing on improved user experience and conversion rates.",
    tags: ["Website", "E-commerce", "Fintech"],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    category: "Websites",
    featured: true,
    completionDate: "April 2023",
    clientName: "BitPay Inc.",
    liveSiteUrl: "https://example.com/bitpay",
    githubUrl: "https://github.com/example/bitpay",
    highlights: ["43% faster load times", "27% increase in conversion rate", "35% increase in mobile engagement"],
  },
  {
    id: 2,
    title: "Crypto Dashboard",
    slug: "crypto-dashboard",
    imageUrl: "/placeholder.svg?key=rqn5v",
    thumbnailUrl: "/placeholder.svg?key=w0kvr",
    description:
      "An interactive dashboard for cryptocurrency traders to monitor market trends, portfolio performance, and execute trades.",
    tags: ["Web App", "Dashboard", "Fintech"],
    technologies: ["React", "D3.js", "Node.js", "Express", "MongoDB"],
    category: "Apps",
    featured: true,
    completionDate: "January 2023",
    clientName: "CryptoTrack LLC",
    liveSiteUrl: "https://example.com/cryptodash",
    githubUrl: "https://github.com/example/crypto-dashboard",
    highlights: [
      "Real-time data visualization",
      "Portfolio tracking across multiple exchanges",
      "Customizable alerts and notifications",
    ],
  },
  {
    id: 3,
    title: "BlockChain Ventures",
    slug: "blockchain-ventures",
    imageUrl: "/placeholder.svg?key=pfe1h",
    thumbnailUrl: "/placeholder.svg?height=600&width=800&query=blockchain company website thumbnail",
    description:
      "Corporate website for a blockchain investment firm, showcasing their portfolio, team, and investment strategy.",
    tags: ["Website", "Corporate", "Blockchain"],
    technologies: ["Next.js", "Framer Motion", "Sanity CMS", "Vercel"],
    category: "Websites",
    featured: false,
    completionDate: "November 2022",
    clientName: "BlockChain Ventures Capital",
    liveSiteUrl: "https://example.com/bcv",
    githubUrl: null,
    highlights: [
      "Interactive portfolio showcase",
      "Team member profiles with dynamic content",
      "Integrated blog and news section",
    ],
  },
  {
    id: 4,
    title: "NFT Marketplace",
    slug: "nft-marketplace",
    imageUrl: "/placeholder.svg?height=600&width=800&query=NFT marketplace website",
    thumbnailUrl: "/placeholder.svg?height=600&width=800&query=NFT marketplace website thumbnail",
    description:
      "A marketplace for creating, buying, and selling NFTs with wallet integration and auction functionality.",
    tags: ["Web App", "Marketplace", "NFT"],
    technologies: ["React", "Solidity", "Ethers.js", "IPFS", "Firebase"],
    category: "Apps",
    featured: false,
    completionDate: "August 2022",
    clientName: "NFT Collective",
    liveSiteUrl: "https://example.com/nftmarket",
    githubUrl: "https://github.com/example/nft-marketplace",
    highlights: ["Secure wallet integration", "Gasless minting process", "Real-time auction system"],
  },
  {
    id: 5,
    title: "Crypto News Portal",
    slug: "crypto-news",
    imageUrl: "/placeholder.svg?height=600&width=800&query=cryptocurrency news website",
    thumbnailUrl: "/placeholder.svg?height=600&width=800&query=cryptocurrency news website thumbnail",
    description:
      "News aggregation platform focused on cryptocurrency and blockchain technology with personalized content feeds.",
    tags: ["Website", "Content", "News"],
    technologies: ["Next.js", "GraphQL", "Apollo", "PostgreSQL"],
    category: "Websites",
    featured: false,
    completionDate: "May 2022",
    clientName: "CryptoNews Network",
    liveSiteUrl: "https://example.com/cryptonews",
    githubUrl: null,
    highlights: [
      "Personalized news feed algorithm",
      "Content categorization and tagging system",
      "Newsletter integration with subscriber analytics",
    ],
  },
  {
    id: 6,
    title: "DeFi Platform",
    slug: "defi-platform",
    imageUrl: "/placeholder.svg?height=600&width=800&query=decentralized finance platform",
    thumbnailUrl: "/placeholder.svg?height=600&width=800&query=decentralized finance platform thumbnail",
    description:
      "Decentralized finance platform offering lending, borrowing, and yield farming services across multiple blockchains.",
    tags: ["Web App", "Finance", "DeFi"],
    technologies: ["React", "Solidity", "Web3.js", "The Graph", "AWS"],
    category: "Apps",
    featured: false,
    completionDate: "February 2022",
    clientName: "DeFi Innovations",
    liveSiteUrl: "https://example.com/defiplatform",
    githubUrl: "https://github.com/example/defi-platform",
    highlights: ["Cross-chain asset management", "Automated yield optimization", "Risk assessment dashboard"],
  },
]

// Featured Project Card Component
const FeaturedProjectCard = ({ project }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-bg-light rounded-xl overflow-hidden border border-border p-6 lg:p-0">
      <div className="relative overflow-hidden rounded-lg lg:rounded-none lg:rounded-l-xl h-[300px] lg:h-full">
        <Image
          src={project.imageUrl || "/placeholder.svg"}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <div className="flex flex-col justify-center p-0 lg:p-8">
        <div className="mb-4">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="outline" className="mr-2 mb-2">
              {tag}
            </Badge>
          ))}
        </div>
        <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
        <p className="text-muted-foreground mb-4">{project.description}</p>

        <div className="flex items-center text-sm text-muted-foreground mb-6">
          <Calendar className="h-4 w-4 mr-2" />
          <span>Completed: {project.completionDate}</span>
        </div>

        <div className="mb-6">
          <h4 className="text-sm font-semibold mb-2">Technologies Used:</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="secondary" className="bg-primary/10 text-primary">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <h4 className="text-sm font-semibold mb-2">Key Highlights:</h4>
          <ul className="space-y-1">
            {project.highlights.map((highlight, index) => (
              <li key={index} className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap gap-3 mt-auto">
          <Link href={`/work/${project.slug}`}>
            <Button className="btn btn-primary">
              View Case Study
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          {project.liveSiteUrl && (
            <a href={project.liveSiteUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="outline">
                Live Site
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </a>
          )}
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="outline">
                <Github className="mr-2 h-4 w-4" />
                Code
              </Button>
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

// Project Grid Card Component
const ProjectGridCard = ({ project }) => {
  return (
    <div className="group bg-background border border-border rounded-xl overflow-hidden transition-all duration-300 hover:border-primary hover:shadow-md h-full flex flex-col">
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={project.thumbnailUrl || project.imageUrl}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <div className="flex gap-2">
            {project.liveSiteUrl && (
              <a
                href={project.liveSiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/40 transition-colors"
              >
                <ExternalLink className="h-4 w-4 text-white" />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/40 transition-colors"
              >
                <Github className="h-4 w-4 text-white" />
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="mb-3">
          {project.tags.slice(0, 2).map((tag) => (
            <Badge key={tag} variant="outline" className="mr-2">
              {tag}
            </Badge>
          ))}
        </div>
        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
        <p className="text-muted-foreground mb-4 line-clamp-2">{project.description}</p>
        <div className="mt-auto">
          <Link
            href={`/work/${project.slug}`}
            className="text-primary hover:underline flex items-center text-sm font-medium"
          >
            View Case Study
            <ArrowRight className="ml-1 h-3 w-3" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default function WorkPageClient() {
  const [filter, setFilter] = useState("All")

  // Get featured projects
  const featuredProjects = projects.filter((project) => project.featured)

  // Filter remaining projects
  const filteredProjects =
    filter === "All"
      ? projects.filter((project) => !project.featured)
      : projects.filter((project) => project.category === filter && !project.featured)

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-background">
        <div className="container-wide">
          <Reveal>
            <h1 className="text-left mb-6">
              Our Work
              </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-left text-muted-foreground text-xl max-w-3xl mx-auto">
              Explore our portfolio of high-performance websites and web applications built with React and Next.js.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Featured Projects */}
      {featuredProjects.length > 0 && (
        <section className="py-16 bg-background">
          <div className="container-wide">
            <Reveal>
              <h2 className="text-3xl font-bold mb-12">Featured Projects</h2>
            </Reveal>
            <div className="space-y-16">
              {featuredProjects.map((project, index) => (
                <Reveal key={project.id} delay={index * 0.1}>
                  <FeaturedProjectCard project={project} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Project Grid */}
      <section className="py-20 bg-background">
        <div className="container-wide">
          <Reveal>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
              <h2 className="text-3xl font-bold mb-6 md:mb-0">All Projects</h2>
              <div className="flex space-x-2 p-1 bg-muted/20 rounded-lg">
                {["All", "Websites", "Apps"].map((category) => (
                  <Button
                    key={category}
                    variant={filter === category ? "default" : "ghost"}
                    onClick={() => setFilter(category)}
                    className={filter === category ? "bg-primary text-white" : ""}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Reveal key={project.id} delay={index * 0.1}>
                <ProjectGridCard project={project} />
              </Reveal>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground">No projects found with the selected filter.</p>
            </div>
          )}
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
            <Link href="/contact">
              <Button className="btn btn-lg bg-white text-primary hover:bg-white/90">Get in Touch</Button>
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
