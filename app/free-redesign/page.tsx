"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  website: z.string().url({ message: "Please enter a valid website URL." }),
  goals: z
    .string()
    .min(10, { message: "Please tell us a bit more about your goals." })
    .max(500, { message: "Goals must be less than 500 characters." }),
})

type FormValues = z.infer<typeof formSchema>

export default function FreeRedesignPage() {
  const [step, setStep] = useState(1)
  const { toast } = useToast()

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      website: "",
      goals: "",
    },
  })

  const onSubmit = (data: FormValues) => {
    console.log(data)
    toast({
      title: "Success!",
      description:
        "Your redesign request has been submitted. We'll be in touch soon!",
    })
    setStep(3)
  }

  return (
    <section className="py-20 bg-background">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column: Form Wizard */}
          <div>
            {/* Step Indicator */}
            <div className="flex items-center mb-12">
              {[1, 2, 3].map((i, idx) => (
                <span key={i} className="flex items-center">
                  <div
                    className={`rounded-full h-10 w-10 flex items-center justify-center ${
                      step >= i
                        ? "bg-primary text-white"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {i}
                  </div>
                  {idx < 2 && (
                    <div
                      className={`h-1 w-12 ${
                        step >= i + 1 ? "bg-primary" : "bg-muted"
                      }`}
                    />
                  )}
                </span>
              ))}
            </div>

            {/* STEP 1 */}
            {step === 1 && (
              <div>
                <h2 className="text-2xl font-bold mb-6">
                  Tell us about your website
                </h2>
                <p className="mb-8 text-muted-foreground">
                  Fill out the form below to get started with your free website
                  redesign consultation.
                </p>
                <Form {...form}>
                  <form className="space-y-6">
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
                    <Button
                      type="button"
                      className="btn btn-primary w-full"
                      onClick={async () => {
                        // only validate these two fields
                        const valid = await form.trigger(["name", "email"]);
                        if (valid) setStep(2);
                      }}
                    >
                      Continue
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </Form>
              </div>
            )}

            {/* STEP 2 */}
            {step === 2 && (
              <div>
                <h2 className="text-2xl font-bold mb-6">Website Details</h2>
                <p className="mb-8 text-muted-foreground">
                  Tell us about your current website and what you're looking to
                  improve.
                </p>
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                  >
                    <FormField
                      control={form.control}
                      name="website"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Your Website URL</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="https://example.com"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="goals"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                            What are your goals for the redesign?
                          </FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="E.g., improve conversions, faster load times..."
                              className="min-h-[120px]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <div className="flex gap-4">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => setStep(1)}
                        className="flex-1"
                      >
                        Back
                      </Button>
                      <Button type="submit" className="btn btn-primary flex-1">
                        Submit Request
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </form>
                </Form>
              </div>
            )}

            {/* STEP 3 */}
            {step === 3 && (
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
                  <CheckCircle className="h-8 w-8" />
                </div>
                <h2 className="text-2xl font-bold mb-4">Thank You!</h2>
                <p className="mb-8 text-muted-foreground">
                  Your redesign request has been submitted successfully. We'll
                  review it and get back to you in 1–2 business days.
                </p>
                <p className="text-sm text-muted-foreground">
                  Meanwhile, check out our{" "}
                  <a href="/insights" className="text-primary hover:underline">
                    insights
                  </a>{" "}
                  for tips on improving your site.
                </p>
              </div>
            )}
            <div className="bg-primary/10 p-6 rounded-lg">
              <h4 className="font-bold mb-2">No Obligation, High Value</h4>
              <p className="text-sm">
                This free consultation comes with no strings attached. Whether
                you work with us or not, you’ll get actionable insights you can
                implement right away.
              </p>
            </div>
          </div>

          {/* Right Column: Benefits Panel */}
          <div className="bg-bg-light p-8 rounded-lg border border-border">
            <h3 className="text-xl font-bold mb-6">What You’ll Get</h3>
            <ul className="space-y-4 mb-8">
              {[
                {
                  title: "Comprehensive Website Audit",
                  desc: "We'll analyze your current website's performance, UX, and conversion potential.",
                },
                {
                  title: "Redesign Mockup",
                  desc: "Get a preview of what your website could look like with our redesign approach.",
                },
                {
                  title: "Performance Recommendations",
                  desc: "Specific technical suggestions to improve your site's speed and responsiveness.",
                },
                {
                  title: "Conversion Optimization Tips",
                  desc: "Actionable advice to increase your conversion rates and user engagement.",
                },
                {
                  title: "Custom Implementation Plan",
                  desc: "A roadmap for implementing the recommended changes to achieve your goals.",
                },
              ].map((item) => (
                <li key={item.title} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold">{item.title}</h4>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
