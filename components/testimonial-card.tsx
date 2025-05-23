import { Star } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

interface TestimonialCardProps {
  quote: string
  author: string
  company: string
  rating: number
}

export default function TestimonialCard({ quote, author, company, rating }: TestimonialCardProps) {
  return (
    <Card className="bg-background border-border h-full">
      <CardContent className="pt-6">
        <div className="flex mb-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className={`h-5 w-5 ${i < rating ? "text-primary fill-primary" : "text-muted-1"}`} />
          ))}
        </div>
        <blockquote className="text-lg mb-6 italic">"{quote}"</blockquote>
      </CardContent>
      <CardFooter className="border-t border-border pt-4">
        <div>
          <p className="font-semibold">{author}</p>
          <p className="text-sm text-muted-1">{company}</p>
        </div>
      </CardFooter>
    </Card>
  )
}
