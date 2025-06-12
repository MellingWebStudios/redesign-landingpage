"use client"

import { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { ArrowRight, CheckCircle, User, Mail, Globe, Target, Sparkles, Gift, Shield, Clock, Star, Award, Zap } from "lucide-react"
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
  const [isAnimating, setIsAnimating] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [formProgress, setFormProgress] = useState(0)
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

  // Update progress based on form completion
  useEffect(() => {
    const values = form.getValues()
    let completed = 0
    if (values.name) completed += 25
    if (values.email) completed += 25
    if (values.website) completed += 25
    if (values.goals) completed += 25
    setFormProgress(completed)
  }, [form.watch()])

  const onSubmit = (data: FormValues) => {
    console.log(data)
    setIsAnimating(true)
    
    setTimeout(() => {
      toast({
        title: "Success!",
        description:
          "Your redesign request has been submitted. We'll be in touch soon!",
      })
      setStep(3)
      setShowSuccess(true)
      setIsAnimating(false)
    }, 1500)
  }

  const nextStep = async () => {
    setIsAnimating(true)
    setTimeout(() => {
      setStep(2)
      setIsAnimating(false)
    }, 300)
  }

  const prevStep = () => {
    setIsAnimating(true)
    setTimeout(() => {
      setStep(1)
      setIsAnimating(false)
    }, 300)
  }

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-8 -left-8 w-72 h-72 bg-gradient-to-r from-pink-400 to-red-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="container-wide py-20 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-primary/20 mb-6 shadow-lg">
            <Sparkles className="h-4 w-4 text-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">Free Website Redesign Consultation</span>
            <Gift className="h-4 w-4 text-primary animate-bounce" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-6 leading-tight">
            Transform Your Website Into a<br />
            <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              Conversion Machine
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Get a professional website audit, custom redesign mockup, and actionable optimization plan — 
            completely free, with no strings attached.
          </p>
          
          {/* Trust Indicators */}
          <div className="flex justify-center items-center gap-8 mt-8 flex-wrap">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Clock className="h-4 w-4 text-green-500" />
              <span>1-2 Day Turnaround</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Shield className="h-4 w-4 text-blue-500" />
              <span>No Obligation</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Award className="h-4 w-4 text-purple-500" />
              <span>Expert Analysis</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
          {/* Left Column: Enhanced Form Wizard */}
          <div className="bg-white/90 backdrop-blur-sm p-8 rounded-3xl border border-white/50 shadow-2xl shadow-blue-500/10">
            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span>Progress</span>
                <span>{formProgress}% complete</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-primary to-purple-500 h-2 rounded-full transition-all duration-700 ease-out"
                  style={{ width: `${formProgress}%` }}
                ></div>
              </div>
            </div>

            {/* Enhanced Step Indicator */}
            <div className="flex items-center justify-between mb-12 relative">
              <div className="absolute top-6 left-0 right-0 h-0.5 bg-gray-200 z-0"></div>
              <div 
                className="absolute top-6 left-0 h-0.5 bg-gradient-to-r from-primary to-purple-500 z-10 transition-all duration-700 ease-out"
                style={{ width: `${((step - 1) / 2) * 100}%` }}
              ></div>
              
              {[
                { num: 1, label: "Your Info", icon: User, color: "from-blue-500 to-cyan-500" },
                { num: 2, label: "Website Details", icon: Globe, color: "from-purple-500 to-pink-500" },
                { num: 3, label: "Complete", icon: CheckCircle, color: "from-green-500 to-emerald-500" }
              ].map((item, idx) => (
                <div key={item.num} className="flex flex-col items-center relative z-20">
                  <div
                    className={`rounded-full h-12 w-12 flex items-center justify-center transition-all duration-500 ${
                      step >= item.num
                        ? `bg-gradient-to-r ${item.color} text-white shadow-lg scale-110 animate-pulse`
                        : "bg-white text-gray-400 border-2 border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <item.icon className="h-5 w-5" />
                  </div>
                  <span className={`mt-3 text-xs font-medium transition-colors duration-300 ${
                    step >= item.num ? "text-primary" : "text-gray-400"
                  }`}>
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Form Content with Animation */}
            <div className={`transition-all duration-300 ${isAnimating ? 'opacity-0 transform translate-x-4' : 'opacity-100 transform translate-x-0'}`}>
              {/* STEP 1 - Enhanced */}
              {step === 1 && (
                <div className="space-y-8">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full text-white mb-4 shadow-lg">
                      <User className="h-8 w-8" />
                    </div>
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent mb-4">
                      Let's get to know you
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                      Tell us a bit about yourself so we can personalize your redesign consultation.
                    </p>
                  </div>
                  
                  <Form {...form}>
                    <form className="space-y-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                              <User className="h-4 w-4 text-blue-500" />
                              Your Name
                            </FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Enter your full name" 
                                className="h-12 bg-white/50 border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 rounded-xl"
                                {...field} 
                              />
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
                            <FormLabel className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                              <Mail className="h-4 w-4 text-blue-500" />
                              Email Address
                            </FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="your.email@company.com" 
                                className="h-12 bg-white/50 border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 rounded-xl"
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button
                        type="button"
                        className="w-full h-12 bg-gradient-to-r from-primary to-purple-500 hover:from-primary/90 hover:to-purple-500/90 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                        onClick={async () => {
                          const valid = await form.trigger(["name", "email"]);
                          if (valid) nextStep();
                        }}
                      >
                        Continue to Website Details
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </form>
                  </Form>
                </div>
              )}

              {/* STEP 2 - Enhanced */}
              {step === 2 && (
                <div className="space-y-8">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white mb-4 shadow-lg">
                      <Globe className="h-8 w-8" />
                    </div>
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-purple-900 bg-clip-text text-transparent mb-4">
                      About your website
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                      Share your current website and goals so we can create the perfect redesign strategy.
                    </p>
                  </div>
                  
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
                            <FormLabel className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                              <Globe className="h-4 w-4 text-purple-500" />
                              Your Website URL
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="https://yourwebsite.com"
                                className="h-12 bg-white/50 border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 rounded-xl"
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
                            <FormLabel className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                              <Target className="h-4 w-4 text-purple-500" />
                              What are your redesign goals?
                            </FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="E.g., increase conversions, improve user experience, modernize design, boost mobile performance, enhance site speed..."
                                className="min-h-[120px] bg-white/50 border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 resize-none rounded-xl"
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
                          onClick={prevStep}
                          className="flex-1 h-12 border-gray-200 hover:border-primary hover:text-primary transition-all duration-200 rounded-xl"
                        >
                          Back
                        </Button>
                        <Button 
                          type="submit" 
                          className="flex-1 h-12 bg-gradient-to-r from-primary to-purple-500 hover:from-primary/90 hover:to-purple-500/90 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                          disabled={isAnimating}
                        >
                          {isAnimating ? (
                            <div className="flex items-center gap-2">
                              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                              Processing...
                            </div>
                          ) : (
                            <>
                              Get My Free Redesign
                              <Zap className="ml-2 h-5 w-5" />
                            </>
                          )}
                        </Button>
                      </div>
                    </form>
                  </Form>
                </div>
              )}

              {/* STEP 3 - Enhanced Success State */}
              {step === 3 && (
                <div className="text-center space-y-8">
                  <div className={`transition-all duration-1000 ${showSuccess ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}>
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 text-white mb-6 shadow-lg animate-pulse">
                      <CheckCircle className="h-10 w-10" />
                    </div>
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-4">
                      🎉 Thank You!
                    </h2>
                    <div className="space-y-6 max-w-md mx-auto">
                      <p className="text-gray-600 leading-relaxed">
                        Your redesign request has been submitted successfully! Our expert team will analyze your website and create a custom redesign proposal.
                      </p>
                      
                      {/* Timeline */}
                      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-2xl border border-blue-200">
                        <h3 className="font-semibold text-gray-900 mb-4">What happens next?</h3>
                        <div className="space-y-3 text-sm text-left">
                          <div className="flex items-center gap-3">
                            <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold">1</div>
                            <span>Website audit & analysis (24 hours)</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-xs font-bold">2</div>
                            <span>Custom redesign mockup creation</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs font-bold">3</div>
                            <span>Personalized consultation call</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-yellow-50 p-4 rounded-xl border border-yellow-200">
                        <p className="text-sm text-yellow-800">
                          <strong>Pro tip:</strong> Check out our{" "}
                          <a href="/insights" className="font-semibold text-yellow-700 hover:text-yellow-900 transition-colors underline">
                            insights blog
                          </a>{" "}
                          for immediate optimization tips while you wait!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Trust Badge */}
            {step !== 3 && (
              <div className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-2xl border border-blue-100">
                <div className="flex items-start gap-3">
                  <Shield className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">💯 No Obligation, High Value Promise</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      This free consultation comes with no strings attached. Whether you work with us or not, 
                      you'll receive actionable insights and a custom redesign mockup that you can implement right away.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Enhanced Benefits Panel */}
          <div className="bg-white/90 backdrop-blur-sm p-8 rounded-3xl border border-white/50 shadow-2xl shadow-purple-500/10">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-pink-100 px-4 py-2 rounded-full border border-purple-200 mb-4">
                <Star className="h-4 w-4 text-purple-600" />
                <span className="text-sm font-medium text-purple-600">Worth $2,500+ Value</span>
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-purple-900 bg-clip-text text-transparent mb-4">
                What You'll Receive
              </h3>
              <p className="text-gray-600">
                A comprehensive website transformation package, completely free.
              </p>
            </div>
            
            <ul className="space-y-6 mb-8">
              {[
                {
                  title: "Comprehensive Website Audit",
                  desc: "Deep-dive analysis of your current website's performance, UX, conversion potential, and technical health.",
                  icon: Globe,
                  color: "text-blue-500",
                  bgColor: "bg-blue-50"
                },
                {
                  title: "Custom Redesign Mockup",
                  desc: "Professional mockup showing exactly how your website could look with our redesign approach and recommendations.",
                  icon: Sparkles,
                  color: "text-purple-500",
                  bgColor: "bg-purple-50"
                },
                {
                  title: "Performance Optimization Plan",
                  desc: "Specific technical recommendations to dramatically improve your site's speed, mobile experience, and SEO.",
                  icon: Zap,
                  color: "text-yellow-500",
                  bgColor: "bg-yellow-50"
                },
                {
                  title: "Conversion Rate Strategy",
                  desc: "Actionable tactics to increase your conversion rates, user engagement, and overall business results.",
                  icon: Target,
                  color: "text-green-500",
                  bgColor: "bg-green-50"
                },
                {
                  title: "Implementation Roadmap",
                  desc: "Step-by-step plan for implementing all recommended changes to achieve your specific business goals.",
                  icon: Award,
                  color: "text-red-500",
                  bgColor: "bg-red-50"
                },
              ].map((item) => (
                <li key={item.title} className="group hover:scale-105 transition-transform duration-200">
                  <div className="flex items-start gap-4 p-4 rounded-2xl hover:bg-gray-50/50 transition-colors duration-200">
                    <div className={`${item.bgColor} p-3 rounded-xl ${item.color} flex-shrink-0 group-hover:scale-110 transition-transform duration-200`}>
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            
            {/* Social Proof */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-2xl border border-green-200">
              <div className="flex items-center gap-2 mb-3">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-sm font-semibold text-gray-700">5.0 Average Rating</span>
              </div>
              <p className="text-sm text-gray-600 italic">
                "The free redesign consultation exceeded our expectations. We implemented their recommendations 
                and saw a 40% increase in conversions within the first month!"
              </p>
              <p className="text-xs text-gray-500 mt-2">— Sarah M., E-commerce Business Owner</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
