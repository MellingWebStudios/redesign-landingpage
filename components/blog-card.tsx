import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "lucide-react"

interface BlogCardProps {
  title: string
  slug: string
  excerpt: string
  date: string
  imageUrl: string
  tag: string
}

export default function BlogCard({ title, slug, excerpt, date, imageUrl, tag }: BlogCardProps) {
  return (
    <article className="group">
      <Link href={`/insights/${slug}`} className="block">
        <div className="relative overflow-hidden rounded-lg mb-4">
          <div className="aspect-video relative">
            <Image
              src={imageUrl || "/placeholder.svg"}
              alt={title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>
        <Badge className="mb-2">{tag}</Badge>
        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{title}</h3>
        <p className="text-muted-foreground mb-3 line-clamp-2">{excerpt}</p>
        <div className="flex items-center text-sm text-muted-foreground">
          <Calendar className="h-4 w-4 mr-2" />
          <time dateTime={date}>{date}</time>
        </div>
      </Link>
    </article>
  )
}
