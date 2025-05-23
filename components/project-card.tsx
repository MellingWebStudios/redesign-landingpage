import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"

interface ProjectCardProps {
  title: string
  slug: string
  imageUrl: string
  tags: string[]
}

export default function ProjectCard({ title, slug, imageUrl, tags }: ProjectCardProps) {
  return (
    <Link href={`/work/${slug}`} className="group block">
      <div className="relative overflow-hidden rounded-lg">
        <div className="aspect-video relative">
          <Image
            src={imageUrl || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
          <h3 className="text-fg-light text-xl font-bold">{title}</h3>
          <div className="flex flex-wrap gap-2 mt-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="outline" className="bg-bg-dark/50 text-fg-light border-border-dark">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </Link>
  )
}
