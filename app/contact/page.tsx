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
        <div className="container-wide flex justify-center">
          <div className="w-full max-w-2xl">
            <Reveal>
              <div className="bg-white/90 dark:bg-background border border-border rounded-2xl shadow-lg p-10 flex flex-col gap-6">
                <h2 className="text-3xl font-extrabold mb-2 text-primary">Send Us a Message</h2>
                <p className="text-muted-foreground mb-2 text-base">
                  We'd love to hear from you! Fill out the form and our team will get back to you soon.
                </p>
                <div className="mb-6 flex items-center gap-2 text-base">
                  <Mail className="h-5 w-5 text-primary" />
                  <span className="font-medium">Email us directly:</span>
                  <a
                    href="mailto:hello@mellingwebstudios.com"
                    className="text-primary underline hover:text-primary/80"
                  >
                    hello@mellingwebstudios.com
                  </a>
                </div>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Your Name</FormLabel>
                            <FormControl>
                              <div className="relative">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-primary">
                                  <svg
                                    width="18"
                                    height="18"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                                  </svg>
                                </span>
                                <Input className="pl-10" placeholder="John Doe" {...field} />
                              </div>
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
                              <div className="relative">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-primary">
                                  <Mail className="h-4 w-4" />
                                </span>
                                <Input className="pl-10" placeholder="john@example.com" {...field} />
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
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
                    <Button
                      type="submit"
                      className="btn btn-primary w-full text-lg py-6 rounded-xl"
                      disabled={isSubmitting}
                    >
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
