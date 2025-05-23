import { Input } from "@/components/ui/input"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Reveal from "@/components/reveal-animation"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

// This would typically come from a CMS or database
const blogPosts = {
  "nextjs-14-game-changer": {
    title: "Why Next.js 14 is a Game-Changer for Business Websites",
    date: "April 15, 2023",
    author: "Alex Melling",
    readTime: "8 min read",
    tag: "Development",
    content: `
      <p>Next.js 14 represents a significant leap forward for business websites, offering a suite of features that can dramatically improve performance, developer experience, and user satisfaction.</p>
      
      <h2>The Evolution of Next.js</h2>
      
      <p>Since its initial release, Next.js has been steadily evolving to address the needs of modern web development. Version 14 builds upon this foundation with several key improvements that make it an even more compelling choice for business websites.</p>
      
      <p>The React framework has become the go-to solution for businesses looking to create fast, scalable, and SEO-friendly websites. With the release of Next.js 14, the platform has taken another significant step forward.</p>
      
      <h2>Key Features in Next.js 14</h2>
      
      <p>Let's explore the standout features that make Next.js 14 a game-changer for business websites:</p>
      
      <h3>1. Improved App Router</h3>
      
      <p>The App Router, introduced in Next.js 13, has been refined and optimized in version 14. This routing system provides a more intuitive way to structure your application, with improved support for layouts, loading states, and error handling.</p>
      
      <p>For businesses, this means a more organized codebase that's easier to maintain and extend as your website grows.</p>
      
      <h3>2. Server Components</h3>
      
      <p>React Server Components are now fully supported in Next.js 14, allowing developers to render components on the server without sending JavaScript to the client. This results in smaller bundle sizes and faster page loads—critical factors for business websites where performance directly impacts conversion rates.</p>
      
      <p>Studies have shown that even a 100ms improvement in load time can increase conversion rates by 1%, making this feature particularly valuable for e-commerce and lead generation websites.</p>
      
      <h3>3. Enhanced Image Optimization</h3>
      
      <p>Next.js 14 builds upon the already impressive image optimization capabilities with improved caching strategies and more efficient processing. Images often account for the majority of a webpage's size, so these optimizations can significantly improve loading times and Core Web Vitals scores.</p>
      
      <p>For businesses, this means better SEO rankings and a more engaging user experience, particularly on mobile devices where bandwidth may be limited.</p>
      
      <h2>Performance Improvements</h2>
      
      <p>Performance is perhaps the most compelling reason for businesses to adopt Next.js 14. The framework's focus on speed and efficiency translates directly to business metrics:</p>
      
      <ul>
        <li>Faster page loads lead to lower bounce rates</li>
        <li>Improved Core Web Vitals scores boost SEO rankings</li>
        <li>Better performance on mobile devices expands your potential audience</li>
        <li>Reduced server costs through more efficient rendering</li>
      </ul>
      
      <p>In our client projects, we've seen page load times decrease by up to 40% after migrating to Next.js 14, with corresponding improvements in user engagement and conversion rates.</p>
      
      <h2>SEO Benefits</h2>
      
      <p>Search engine optimization is a critical concern for business websites, and Next.js 14 offers several features that can improve your rankings:</p>
      
      <p>Server-side rendering ensures that search engines can easily crawl and index your content, while the improved metadata API makes it simple to implement SEO best practices across your site.</p>
      
      <p>The framework's focus on performance also aligns perfectly with Google's Core Web Vitals, which are now a ranking factor for search results.</p>
      
      <h2>Developer Experience</h2>
      
      <p>While end-user performance is crucial, Next.js 14 also brings significant improvements to the developer experience. Features like:</p>
      
      <ul>
        <li>Faster refresh times during development</li>
        <li>Improved error messages and debugging tools</li>
        <li>Better TypeScript integration</li>
        <li>Enhanced documentation and examples</li>
      </ul>
      
      <p>These improvements translate to faster development cycles, fewer bugs, and ultimately a better product for your business.</p>
      
      <h2>Conclusion</h2>
      
      <p>Next.js 14 represents a significant step forward for business websites, offering improvements in performance, SEO, and developer experience that can directly impact your bottom line.</p>
      
      <p>Whether you're building a new website or considering a migration from an older platform, Next.js 14 provides a compelling set of features that can help your business succeed online.</p>
      
      <p>At Melling WebStudios, we've already begun implementing Next.js 14 in our client projects, and the results have been impressive. If you're interested in learning more about how this technology could benefit your business, don't hesitate to get in touch.</p>
    `,
    imageUrl: "/placeholder.svg?key=6f7ra",
    relatedPosts: ["react-server-components", "business-case-performance", "core-web-vitals-seo"],
  },
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = blogPosts[params.slug as keyof typeof blogPosts]

  if (!post) {
    return {
      title: "Post Not Found",
    }
  }

  return {
    title: `${post.title} | Melling WebStudios`,
    description: post.content.substring(0, 160).replace(/<[^>]*>/g, ""),
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts[params.slug as keyof typeof blogPosts]

  if (!post) {
    notFound()
  }

  // This would typically come from a database or CMS
  const relatedPostsData = post.relatedPosts.map((slug) => ({
    slug,
    title: "Related article title", // In a real app, you'd fetch these details
    excerpt: "Brief excerpt of the related article would go here.",
    imageUrl: "/placeholder.svg?height=200&width=300&query=related article thumbnail",
  }))

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-background">
        <div className="container-wide">
          <Reveal>
            <Link href="/insights" className="inline-flex items-center text-primary hover:underline mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to all insights
            </Link>
          </Reveal>
          <Reveal delay={0.1}>
            <Badge className="mb-4">{post.tag}</Badge>
            <h1 className="mb-6">{post.title}</h1>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-8">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                <time dateTime={post.date}>{post.date}</time>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                <span>{post.readTime}</span>
              </div>
              <div>
                <span>By {post.author}</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Featured Image */}
      <section className="pb-12 bg-background">
        <div className="container-wide">
          <Reveal>
            <div className="rounded-lg overflow-hidden">
              <Image
                src={post.imageUrl || "/placeholder.svg"}
                alt={post.title}
                width={1200}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 bg-background">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-8">
              <Reveal>
                <article className="prose max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
              </Reveal>

              <Reveal delay={0.1}>
                <div className="mt-12 pt-8 border-t border-border">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold">Share this article</h3>
                    <div className="flex space-x-4">
                      <Button variant="outline" size="icon">
                        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                        </svg>
                      </Button>
                      <Button variant="outline" size="icon">
                        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                        </svg>
                      </Button>
                      <Button variant="outline" size="icon">
                        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                        </svg>
                      </Button>
                      <Button variant="outline" size="icon">
                        <Share2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4">
              <Reveal delay={0.2}>
                <div className="bg-bg-light p-6 rounded-lg border border-border sticky top-24">
                  <h3 className="text-xl font-bold mb-6">Related Articles</h3>
                  <div className="space-y-6">
                    {relatedPostsData.map((relatedPost, index) => (
                      <div key={index} className="flex gap-4">
                        <Image
                          src={relatedPost.imageUrl || "/placeholder.svg"}
                          alt={relatedPost.title}
                          width={80}
                          height={60}
                          className="rounded-md object-cover w-20 h-16"
                        />
                        <div>
                          <Link href={`/insights/${relatedPost.slug}`} className="font-medium hover:text-primary">
                            {relatedPost.title}
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 pt-6 border-t border-border">
                    <h3 className="text-xl font-bold mb-4">Subscribe</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Get the latest insights delivered to your inbox
                    </p>
                    <div className="space-y-2">
                      <Input placeholder="Your email" />
                      <Button className="w-full">Subscribe</Button>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="container-wide text-center">
          <Reveal>
            <h2 className="mb-6">Ready to improve your website?</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-white/80 max-w-2xl mx-auto mb-8 text-lg">
              Let's discuss how we can help you implement these strategies to achieve better performance and higher
              conversion rates.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <Button className="btn btn-lg bg-white text-primary hover:bg-white/90">Contact Us</Button>
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
