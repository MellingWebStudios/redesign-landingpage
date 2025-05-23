import Link from "next/link"
import type { LucideIcon } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

interface ServiceCardProps {
  title: string
  description: string
  icon: LucideIcon
  href: string
}

export default function ServiceCard({ title, description, icon: Icon, href }: ServiceCardProps) {
  return (
    <Card className="border border-border hover:border-primary transition-all duration-300 h-full">
      <CardHeader className="pb-2">
        <div className="mb-4 text-muted-foreground group-hover:text-primary transition-colors">
          <Icon className="h-8 w-8 text-muted-foreground group-hover:text-primary transition-colors" />
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base mb-4">{description}</CardDescription>
        <Link href={href} className="inline-flex items-center text-primary hover:underline">
          Learn more <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </CardContent>
    </Card>
  )
}
