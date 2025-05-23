"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import Reveal from "@/components/reveal-animation"

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
})

type FormValues = z.infer<typeof formSchema>

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  })

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    console.log(data)

    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    })

    form.reset()
    setIsSubmitting(false)
  }

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-background">
        <div className="container-wide">
          <Reveal>
            <h1 className="text-center mb-6">Contact Us</h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-center text-muted-foreground text-xl max-w-3xl mx-auto">
              Have a project in mind or want to learn more about our services? Get in touch with our team.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-background">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left Column - Contact Form */}
            <Reveal>
              <div>
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Your Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <Input placeholder="john@example.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Subject</FormLabel>
                          <FormControl>
                            <Input placeholder="Project Inquiry" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Tell us about your project or inquiry..."
                              className="min-h-[150px]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" className="btn btn-primary w-full" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <span className="flex items-center">
                          <svg
                            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center">
                          Send Message
                          <Send className="ml-2 h-4 w-4" />
                        </span>
                      )}
                    </Button>
                  </form>
                </Form>
              </div>
            </Reveal>

            {/* Right Column - Contact Info & Map */}
            <div>
              <Reveal delay={0.2}>
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-6 mb-10">
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Email</h3>
                      <p className="text-muted-foreground">hello@mellingwebstudios.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Phone</h3>
                      <p className="text-muted-foreground">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Office</h3>
                      <p className="text-muted-foreground">
                        123 Web Dev Lane
                        <br />
                        San Francisco, CA 94103
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.3}>
                <div className="rounded-lg overflow-hidden h-[300px] border border-border">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50470.77791667087!2d-122.43149379509717!3d37.77492951312436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1651234567890!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-bg-light">
        <div className="container-wide">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="mb-4">Frequently Asked Questions</h2>
              <p className="text-muted-foreground">Here are answers to some common questions about working with us.</p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Reveal delay={0.1}>
              <div className="bg-background p-6 rounded-lg border border-border">
                <h3 className="text-lg font-bold mb-2">How long does a typical project take?</h3>
                <p className="text-muted-foreground">
                  Most website projects take 4-8 weeks from kickoff to launch, depending on complexity. Web applications
                  typically take 8-12 weeks or more.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="bg-background p-6 rounded-lg border border-border">
                <h3 className="text-lg font-bold mb-2">What's your pricing structure?</h3>
                <p className="text-muted-foreground">
                  We provide custom quotes based on project requirements. We offer both fixed-price projects and
                  retainer arrangements depending on your needs.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="bg-background p-6 rounded-lg border border-border">
                <h3 className="text-lg font-bold mb-2">Do you offer ongoing maintenance?</h3>
                <p className="text-muted-foreground">
                  Yes, we offer maintenance packages to keep your site secure, up-to-date, and performing optimally. We
                  can also provide content updates and feature additions.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.4}>
              <div className="bg-background p-6 rounded-lg border border-border">
                <h3 className="text-lg font-bold mb-2">What makes you different from other agencies?</h3>
                <p className="text-muted-foreground">
                  Our obsessive focus on performance and conversion optimization sets us apart. We don't just build
                  websites that look good—we build websites that perform and drive business results.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
