import type { Metadata } from "next"
import WorkPageClient from "./WorkPageClient"

export const metadata: Metadata = {
  title: "Our Work | Melling WebStudios",
  description: "Explore our portfolio of high-performance websites and web applications built with React and Next.js.",
}

export default function WorkPage() {
  return <WorkPageClient />
}
