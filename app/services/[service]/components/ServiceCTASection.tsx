import Link from "next/link";
import { ArrowRight, CheckCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/reveal-animation";

interface ServiceCTASectionProps {
  serviceDisplay: string;
}

export default function ServiceCTASection({ serviceDisplay }: ServiceCTASectionProps) {
  return (
    <section className="py-20 bg-white">
      <div className="container-wide">
        <Reveal>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="mb-6 text-3xl lg:text-4xl font-bold text-black">
              Ready to Get Started with {serviceDisplay}?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              Get a free consultation and see how our {serviceDisplay.toLowerCase()} services 
              can help your business succeed online with proven strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link href="/free-redesign">
                <Button className="btn btn-primary btn-lg">
                  Get Free Website Audit
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" className="btn btn-lg border-gray-300 text-gray-700 hover:bg-gray-50">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Us Today
                </Button>
              </Link>
            </div>
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                Free consultation
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                No obligation
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                Expert advice
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
