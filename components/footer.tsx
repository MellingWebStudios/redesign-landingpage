import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Github, Twitter, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-background text-foreground">
      <div className="container-wide py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-12">
          {/* Column 1: Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services" className="hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/work" className="hover:text-primary transition-colors">
                  Our Work
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/insights" className="hover:text-primary transition-colors">
                  Insights
                </Link>
              </li>
              <li>
                <Link href="/free-redesign" className="hover:text-primary transition-colors">
                  Free Redesign
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-3 text-primary mt-1" />
                <span>hello@mellingwebstudios.com</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-3 text-primary mt-1" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-primary mt-1" />
                <span>
                  123 Web Dev Lane
                  <br />
                  San Francisco, CA 94103
                </span>
              </li>
            </ul>
          </div>

          {/* Column 3: Social & Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-6">Connect With Us</h3>
            <div className="flex space-x-4 mb-8">
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </div>

            <h4 className="text-lg font-bold mb-4">Stay Updated</h4>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="bg-background border border-border rounded-l-md px-4 py-2 w-full focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <Button className="rounded-l-none">Subscribe</Button>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center text-sm text-muted-1">
          <p>© {new Date().getFullYear()} Melling WebStudios. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
