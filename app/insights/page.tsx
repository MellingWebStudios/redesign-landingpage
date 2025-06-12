import type { Metadata } from "next"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Search } from "lucide-react"
import BlogCard from "@/components/blog-card"
import Reveal from "@/components/reveal-animation"

export const metadata: Metadata = {
  title: "Insights | Melling WebStudios",
  description: "Web development insights, tips, and best practices from the Melling WebStudios team.",
}

// This would typically come from a CMS or database
const blogPosts = [
  {
    id: 1,
    title: "Why Next.js 14 is a Game-Changer for Business Websites",
    slug: "nextjs-14-game-changer",
    excerpt:
      "Discover how Next.js 14's new features can dramatically improve your website's performance and user experience.",
    date: "April 15, 2023",
    imageUrl: "/placeholder.svg?key=h88sv",
    tag: "Development",
  },
  {
    id: 2,
    title: "5 Ways to Improve Your Website's Conversion Rate",
    slug: "improve-website-conversion",
    excerpt:
      "Learn practical strategies to turn more of your website visitors into paying customers with these proven techniques.",
    date: "March 28, 2023",
    imageUrl: "/placeholder.svg?height=400&width=800&query=conversion rate optimization chart",
    tag: "Marketing",
  },
  {
    id: 3,
    title: "The Impact of Core Web Vitals on SEO",
    slug: "core-web-vitals-seo",
    excerpt: "How Google's Core Web Vitals affect your search rankings and what you can do to improve your scores.",
    date: "March 10, 2023",
    imageUrl: "/placeholder.svg?height=400&width=800&query=website performance metrics dashboard",
    tag: "SEO",
  },
  {
    id: 4,
    title: "Building Accessible Websites: A Complete Guide",
    slug: "accessible-websites-guide",
    excerpt: "Why accessibility matters and how to ensure your website is usable by everyone, regardless of abilities.",
    date: "February 22, 2023",
    imageUrl: "/placeholder.svg?height=400&width=800&query=web accessibility illustration",
    tag: "Accessibility",
  },
  {
    id: 5,
    title: "React Server Components Explained",
    slug: "react-server-components",
    excerpt: "A deep dive into React Server Components and how they're changing the way we build web applications.",
    date: "February 5, 2023",
    imageUrl: "/placeholder.svg?height=400&width=800&query=react code on computer screen",
    tag: "Development",
  },
  {
    id: 6,
    title: "The Business Case for Website Performance",
    slug: "business-case-performance",
    excerpt:
      "How investing in website speed and performance directly impacts your bottom line and customer satisfaction.",
    date: "January 18, 2023",
    imageUrl: "/placeholder.svg?height=400&width=800&query=business growth chart with website",
    tag: "Business",
  },
]

const tags = ["All", "Development", "Marketing", "SEO", "Accessibility", "Business"]

export default function InsightsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-background">
        <div className="container-wide">
          <Reveal>
            <h1 className="text-center mb-6">Insights</h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-center text-muted-foreground text-xl max-w-3xl mx-auto">
              Web development insights, tips, and best practices from the Melling WebStudios team.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="py-8 bg-background border-y border-border">
        <div className="container-wide">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input placeholder="Search articles..." className="pl-10" />
            </div>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <Badge
                  key={tag}
                  variant={tag === "All" ? "default" : "outline"}
                  className={tag === "All" ? "bg-primary" : "hover:bg-primary/10 cursor-pointer"}
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 bg-background">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Reveal key={post.id} delay={index * 0.1}>
                <BlogCard
                  title={post.title}
                  slug={post.slug}
                  excerpt={post.excerpt}
                  date={post.date}
                  imageUrl={post.imageUrl}
                  tag={post.tag}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-primary text-white">
        <div className="container-wide">
          <div className="flex flex-col items-center justify-center text-center max-w-2xl mx-auto">
            <Reveal>
              <h2 className="mb-6">Subscribe to Our Newsletter</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-white/80 mb-8">
                Get the latest web development insights, tips, and best practices delivered straight to your inbox.
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
    </>
  )
}
