"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ExternalLink, Github, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Reveal from "@/components/reveal-animation"

// --- Your actual projects go here ---
const projects = [
	{
		id: 1,
		title: "Birmingham Boiler Repairs",
		slug: "birmingham-boiler-repairs",
		imageUrl: "/bbr-website.png",
		thumbnailUrl: "/bbr-website.png",
		description:
			"Complete redesign and rebuild for a leading boiler repair company. 3x more leads in 6 weeks with lightning-fast SEO-optimized pages, tailored for local search.",
		tags: ["Redesign", "Local SEO", "Trades"],
		technologies: ["Next.js", "React", "Tailwind CSS", "Vercel v0", "shadcn/ui"],
		category: "Websites",
		featured: false, // <-- Change to false so it appears in All Projects
		completionDate: "May 2025",
		clientName: "Birmingham Boiler Repairs",
		liveSiteUrl: "https://birminghamboilerrepairs.uk",
		highlights: [
			"PageSpeed 99+ on all pages",
			"Local landing pages with dynamic reviews",
			"First leads in under 7 days",
		],
	},
	// Add more real or anonymized projects here as you scale
]

// --- Components ---
type Project = {
	id: number
	title: string
	slug: string
	imageUrl: string
	thumbnailUrl: string
	description: string
	tags: string[]
	technologies: string[]
	category: string
	featured: boolean
	completionDate: string
	clientName: string
	liveSiteUrl?: string
	highlights: string[]
}

const FeaturedProjectCard = ({ project }: { project: Project }) => (
	<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-background rounded-xl overflow-hidden border border-border p-6 lg:p-0">
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
			<div className="mb-4 flex flex-wrap gap-2">
				{project.tags.map((tag: string) => (
					<Badge key={tag} variant="outline">
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
				<h4 className="text-sm font-semibold mb-2">Stack:</h4>
				<div className="flex flex-wrap gap-2">
					{project.technologies.map((tech: string) => (
						<Badge
							key={tech}
							variant="secondary"
							className="bg-primary/10 text-primary"
						>
							{tech}
						</Badge>
					))}
				</div>
			</div>
			<div className="mb-6">
				<h4 className="text-sm font-semibold mb-2">Results:</h4>
				<ul className="space-y-1">
					{project.highlights.map((highlight: string, i: number) => (
						<li key={i} className="flex items-start">
							<span className="text-primary mr-2">•</span>
							<span>{highlight}</span>
						</li>
					))}
				</ul>
			</div>
			<div className="flex flex-wrap gap-3 mt-auto">
				<Link href={`/work/${project.slug}`}>
					<Button>
						View Details{" "}
						<ArrowRight className="ml-2 h-4 w-4" />
					</Button>
				</Link>
				{project.liveSiteUrl && (
					<a
						href={project.liveSiteUrl}
						target="_blank"
						rel="noopener noreferrer"
					>
						<Button variant="outline">
							Live Site
							<ExternalLink className="ml-2 h-4 w-4" />
						</Button>
					</a>
				)}
			</div>
		</div>
	</div>
)

const ProjectGridCard = ({ project }: { project: Project }) => (
	<div className="group bg-background border border-border rounded-xl overflow-hidden transition-all duration-300 hover:border-primary hover:shadow-md h-full flex flex-col">
		<div className="relative aspect-video overflow-hidden">
			<Image
				src={project.thumbnailUrl || project.imageUrl}
				alt={project.title}
				fill
				className="object-cover transition-transform duration-500 group-hover:scale-105"
				sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
			/>
		</div>
		<div className="p-6 flex flex-col flex-grow">
			<div className="mb-3 flex flex-wrap gap-2">
				{project.tags.slice(0, 2).map((tag: string) => (
					<Badge key={tag} variant="outline">
						{tag}
					</Badge>
				))}
			</div>
			<h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
				{project.title}
			</h3>
			<p className="text-muted-foreground mb-4 line-clamp-2">
				{project.description}
			</p>
			<div className="mt-auto">
				<Link
					href={`/work/${project.slug}`}
					className="text-primary hover:underline flex items-center text-sm font-medium"
				>
					View Details{" "}
					<ArrowRight className="ml-1 h-3 w-3" />
				</Link>
			</div>
		</div>
	</div>
)

export default function WorkPageClient() {
	const [filter, setFilter] = useState("All")
	const featuredProjects = projects.filter((project) => project.featured)
	const filteredProjects =
		filter === "All"
			? projects.filter((project) => !project.featured)
			: projects.filter(
					(project) => project.category === filter && !project.featured
			  )

	return (
		<>
			{/* Hero Section */}
			<section className="pt-32 pb-20 bg-background">
				<div className="container-wide">
					<Reveal>
						<h1 className="mb-6 font-bold text-4xl md:text-5xl text-left">
							Results-Driven Web Design & Development
						</h1>
					</Reveal>
					<Reveal delay={0.1}>
						<p className="text-left text-muted-foreground text-xl max-w-3xl">
							Melling Web Studios builds lightning-fast, conversion-focused
							websites that drive real business results. Every project is
							designed, developed, and optimized in the UK by experts—never
							outsourced, never templated.
						</p>
					</Reveal>
				</div>
			</section>

			{/* Featured Projects */}
			{featuredProjects.length > 0 && (
				<section className="py-16 bg-background">
					<div className="container-wide">
						<Reveal>
							<h2 className="text-3xl font-bold mb-12">
								Featured Client Success
							</h2>
						</Reveal>
						<div className="space-y-16">
							{featuredProjects.map((project, i) => (
								<Reveal key={project.id} delay={i * 0.1}>
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
							<h2 className="text-3xl font-bold mb-6 md:mb-0">
								All Projects
							</h2>
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
						{filteredProjects.map((project, i) => (
							<Reveal key={project.id} delay={i * 0.1}>
								<ProjectGridCard project={project} />
							</Reveal>
						))}
					</div>
					{filteredProjects.length === 0 && (
						<div className="text-center py-16">
							<p className="text-muted-foreground">
								No projects found with the selected filter.
							</p>
						</div>
					)}
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-20 bg-primary text-white">
				<div className="container-wide flex flex-col items-center text-center">
					<Reveal>
						<h2 className="mb-6 text-3xl font-bold">
							Free Website Redesign Consultation
						</h2>
					</Reveal>
					<Reveal delay={0.1}>
						<p className="text-white/80 max-w-2xl mx-auto mb-8 text-lg">
							See how your site could look, convert, and perform. Book your free
							audit—no hard sell, just expert insight and a preview of what's
							possible.
						</p>
					</Reveal>
					<Reveal delay={0.2}>
						<Link href="/contact">
							<Button className="btn btn-lg bg-white text-primary hover:bg-white/90">
								Book Your Audit
							</Button>
						</Link>
					</Reveal>
				</div>
			</section>
		</>
	)
}
