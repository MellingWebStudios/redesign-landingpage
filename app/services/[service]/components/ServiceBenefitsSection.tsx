import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/reveal-animation";
import { getServiceBenefits, type ServiceBenefit } from "../data";

interface ServiceBenefitsSectionProps {
  service: string;
  serviceDisplay: string;
}

export default function ServiceBenefitsSection({ service, serviceDisplay }: ServiceBenefitsSectionProps) {
  const benefits = getServiceBenefits(service);

  return (
    <Reveal delay={0.5}>
      <div className="mt-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-8">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            What's Included
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-black mb-8">
            {serviceDisplay} <span className="text-primary">Solutions</span>
          </h2>
        </div>

        {/* Visual Benefits Flow */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {benefits.map((benefit, index) => (
            <div key={index} className="relative">
              {/* Section Background & Frame */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-50/60 via-white/80 to-gray-100/40 rounded-[2rem] -m-6 opacity-50"></div>
              <div className="absolute inset-0 bg-white/90 rounded-[1.5rem] -m-4 backdrop-blur-sm border border-gray-100/80"></div>
              
              {/* Flow connector with enhanced graphics */}
              {index > 0 && (
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-10">
                  {/* Connecting line with gradient */}
                  <div className="w-0.5 h-8 bg-gradient-to-b from-gray-200 via-primary/50 to-transparent relative">
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-gray-300 rounded-full"></div>
                    <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-primary rounded-full animate-pulse shadow-md"></div>
                  </div>
                  
                  {/* Flowing dots */}
                  <div className="flex gap-1 mt-1">
                    <div className="w-1 h-1 bg-primary/30 rounded-full animate-pulse" style={{animationDelay: '0s'}}></div>
                    <div className="w-1 h-1 bg-primary/50 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                    <div className="w-1 h-1 bg-primary/30 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                  </div>
                </div>
              )}
              
              {/* Main Content Container with Enhanced Sectioning */}
              <div className="relative z-10 bg-white/95 backdrop-blur-sm rounded-2xl p-6 lg:p-10 shadow-xl shadow-gray-900/8 border border-gray-200/60">
                
                {/* Section Number & Category Badge */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className={`bg-gradient-to-r ${benefit.color} text-white px-3 py-1.5 rounded-full text-xs font-semibold shadow-md`}>
                    Solution {index + 1}
                  </div>
                </div>

                {/* Benefit Section */}
                <div className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-12 xl:gap-16 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''} justify-center mt-6`}>
                  
                  {/* Enhanced Visual Element with Graphics */}
                  <div className="w-full lg:flex-1 flex justify-center relative">
                    
                    {/* Background graphics for visual element - mobile responsive */}
                    <div className="absolute inset-0 -m-3 lg:-m-6">
                      {/* Geometric background patterns - positioned relative to card */}
                      <div className={`absolute top-2 right-2 w-8 h-8 lg:w-12 lg:h-12 bg-gradient-to-br ${benefit.color} rounded-full opacity-20 animate-pulse`} style={{animationDelay: '0s'}}></div>
                      <div className={`absolute bottom-4 left-1 w-6 h-6 lg:w-8 lg:h-8 bg-gradient-to-br ${benefit.color} rounded-lg opacity-25 animate-pulse`} style={{animationDelay: '1s'}}></div>
                      <div className={`absolute top-8 left-4 w-3 h-3 lg:w-4 lg:h-4 bg-gradient-to-br ${benefit.color} rounded-full opacity-30 animate-pulse`} style={{animationDelay: '2s'}}></div>
                    </div>

                    <Reveal delay={0.6 + (index * 0.2)}>
                      <div className="relative group w-[340px] z-10 mx-auto">
                        {/* Enhanced Main visual container */}
                        <div className={`relative bg-gradient-to-br ${benefit.color} p-6 lg:p-8 rounded-xl shadow-xl group-hover:shadow-2xl transition-all duration-500 transform group-hover:scale-[1.02] border-2 border-white/40 backdrop-blur-sm h-[520px] flex flex-col w-[340px] mx-auto`}>
                        
                          {/* Top accent bar */}
                          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-white/30 via-white/50 to-white/30 rounded-t-xl"></div>
                        
                          {/* Enhanced icon display with graphic elements */}
                          <div className="text-center mb-6 relative flex-shrink-0">
                            {/* Icon background effects */}
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="w-20 h-20 bg-white/8 rounded-2xl animate-pulse" style={{animationDelay: '0.5s'}}></div>
                            </div>
                            
                            <div className="relative inline-flex items-center justify-center w-20 h-20 bg-white/25 backdrop-blur-lg rounded-2xl mb-4 text-4xl shadow-xl border border-white/40 group-hover:scale-105 transition-transform duration-300">
                              {benefit.icon}
                              
                              {/* Floating particles around icon */}
                              <div className="absolute -top-1 -right-1 w-2 h-2 bg-white/50 rounded-full animate-bounce" style={{animationDelay: '0s'}}></div>
                              <div className="absolute -bottom-0.5 -left-0.5 w-1.5 h-1.5 bg-white/40 rounded-full animate-bounce" style={{animationDelay: '0.7s'}}></div>
                              <div className="absolute top-1/2 -right-2 w-1 h-1 bg-white/60 rounded-full animate-bounce" style={{animationDelay: '1.4s'}}></div>
                            </div>
                            
                            {/* Benefit Title */}
                            <div className="mb-4">
                              <h3 className="text-white font-bold text-lg text-center leading-tight">
                                {benefit.title}
                              </h3>
                            </div>
                            
                            <div className="bg-white/20 backdrop-blur-sm rounded-xl px-4 py-2 inline-block shadow-md border border-white/20">
                              <div className="text-white font-bold text-lg mb-0.5">
                                {benefit.metric}
                              </div>
                              <div className="text-white/80 text-xs font-medium">
                                Key Metric
                              </div>
                            </div>
                          </div>

                          {/* Enhanced Visual metrics display */}
                          <div className="space-y-3 relative flex-grow flex flex-col justify-end">
                            {/* Features header */}
                            <div className="text-center mb-4">
                              <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-1.5 inline-block">
                                <span className="text-white/90 font-semibold text-xs">Key Features</span>
                              </div>
                            </div>
                            
                            <div className="space-y-3">
                              {benefit.features.slice(0, 3).map((feature, featureIndex) => (
                                <div key={featureIndex} className="flex items-center gap-3 text-white/90 justify-center sm:justify-start bg-white/10 backdrop-blur-sm rounded-lg p-2.5 hover:bg-white/15 transition-colors duration-200">
                                  <div className="w-2 h-2 bg-white/70 rounded-full flex-shrink-0 shadow-sm relative">
                                    <div className="absolute inset-0 bg-white/30 rounded-full animate-ping opacity-75"></div>
                                  </div>
                                  <span className="font-medium text-xs text-center sm:text-left">{feature}</span>
                                  
                                  {/* Feature accent */}
                                  <div className="ml-auto w-4 h-4 bg-white/15 rounded-md flex items-center justify-center">
                                    <div className="w-1.5 h-1.5 bg-white/50 rounded-full"></div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Enhanced Decorative elements */}
                          <div className="absolute top-4 right-4 w-8 h-8 bg-white/8 rounded-xl opacity-60 flex items-center justify-center">
                            <div className="w-4 h-4 bg-white/20 rounded-full"></div>
                          </div>
                          <div className="absolute bottom-4 left-4 w-6 h-6 bg-white/12 rounded-lg opacity-40 flex items-center justify-center">
                            <div className="w-2 h-2 bg-white/30 rounded-full"></div>
                          </div>
                          
                          {/* Corner accents */}
                          <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-white/20 rounded-tr-xl"></div>
                          <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-white/20 rounded-bl-xl"></div>
                        </div>

                        {/* Enhanced Number indicator with graphics */}
                        <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white rounded-xl flex items-center justify-center font-bold text-lg shadow-xl z-20 border-2 border-white">
                          {index + 1}
                          
                          {/* Number indicator accents */}
                          <div className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                            <div className="w-1 h-1 bg-white rounded-full"></div>
                          </div>
                        </div>
                        
                        {/* Connecting line to content */}
                        <div className={`absolute top-1/2 ${index % 2 === 1 ? '-left-6 lg:-right-6' : '-right-6 lg:-left-6'} w-12 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent hidden lg:block`}>
                          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></div>
                        </div>
                      </div>
                    </Reveal>
                  </div>

                  {/* Enhanced Content Section */}
                  <div className="flex-1 max-w-xl text-center lg:text-left relative">
                    
                    {/* Content background graphics - mobile responsive */}
                    <div className="absolute inset-0 -m-2 lg:-m-4">
                      <div className={`absolute top-0 right-0 w-6 h-6 lg:w-10 lg:h-10 bg-gradient-to-br ${benefit.color} rounded-full opacity-15 animate-pulse`} style={{animationDelay: '1s'}}></div>
                      <div className={`absolute bottom-2 left-2 w-4 h-4 lg:w-6 lg:h-6 bg-gradient-to-br ${benefit.color} rounded-lg opacity-10 animate-pulse`} style={{animationDelay: '2s'}}></div>
                      <div className={`absolute top-1/3 right-4 w-2 h-2 lg:w-3 lg:h-3 bg-gradient-to-br ${benefit.color} rounded-full opacity-20 animate-pulse`} style={{animationDelay: '3s'}}></div>
                    </div>

                    <Reveal delay={0.7 + (index * 0.2)}>
                      {/* Content header with graphics */}
                      <div className="relative mb-6">
                        <div className="absolute -left-3 top-0 w-0.5 h-12 bg-gradient-to-b from-primary to-primary/40 rounded-full"></div>
                        <h3 className="text-2xl lg:text-3xl font-bold text-black mb-3 leading-tight relative z-10">
                          {benefit.title}
                          
                          {/* Title accent */}
                          <div className="absolute -top-1 -right-2 w-2 h-2 bg-primary/25 rounded-full animate-pulse hidden lg:block"></div>
                        </h3>
                        
                        {/* Decorative line under title */}
                        <div className={`w-16 h-0.5 bg-gradient-to-r ${benefit.color} rounded-full mb-3 mx-auto lg:mx-0`}></div>
                      </div>
                      
                      <div className="relative">
                        {/* Text accent quotes */}
                        <div className="absolute -left-2 top-0 text-2xl text-primary/15 font-serif hidden lg:block">"</div>
                        <div className="absolute -right-1 bottom-0 text-2xl text-primary/15 font-serif hidden lg:block">"</div>
                        
                        <p className="text-lg text-gray-600 leading-relaxed mb-8">
                          {benefit.description}
                        </p>
                      </div>
                      
                      {/* Enhanced Key benefits list */}
                      <div className="relative">
                        <div className="text-center lg:text-left mb-4">
                          <span className="inline-flex items-center gap-2 bg-gray-100 text-gray-700 px-3 py-1.5 rounded-full text-xs font-semibold">
                            <div className={`w-1.5 h-1.5 bg-gradient-to-br ${benefit.color} rounded-full`}></div>
                            Included Benefits
                          </span>
                        </div>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {benefit.features.slice(0, 4).map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center gap-3 text-gray-700 justify-center lg:justify-start bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-md hover:shadow-lg transition-all duration-200 border border-gray-100/80 group">
                              <div className={`w-3 h-3 bg-gradient-to-br ${benefit.color} rounded-full flex-shrink-0 shadow-sm relative group-hover:scale-105 transition-transform`}>
                                <div className="absolute inset-0 bg-white/25 rounded-full"></div>
                              </div>
                              <span className="font-medium text-sm text-center lg:text-left group-hover:text-gray-900 transition-colors">{feature}</span>
                              
                              {/* Feature completion indicator */}
                              <div className="ml-auto w-5 h-5 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-150 transition-colors">
                                <svg className="w-2.5 h-2.5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                              </div>
                            </div>
                          ))}
                        </div>
                        
                        {/* Benefits summary stats */}
                        <div className="mt-6 p-4 bg-gradient-to-r from-gray-50 to-white rounded-xl border border-gray-200/80">
                          <div className="flex items-center justify-center lg:justify-start gap-4 text-sm">
                            <div className="text-center lg:text-left">
                              <div className="text-xl font-bold text-primary">{benefit.features.length}</div>
                              <div className="text-xs text-gray-600 font-medium">Features</div>
                            </div>
                            <div className="w-px h-6 bg-gray-300"></div>
                            <div className="text-center lg:text-left">
                              <div className="text-xl font-bold text-green-600">100%</div>
                              <div className="text-xs text-gray-600 font-medium">Included</div>
                            </div>
                            <div className="w-px h-6 bg-gray-300"></div>
                            <div className="text-center lg:text-left">
                              <div className="text-xl font-bold text-orange-600">0</div>
                              <div className="text-xs text-gray-600 font-medium">Extra Costs</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Reveal>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <Reveal delay={1.2}>
          <div className="text-center mt-24 px-4">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-3xl lg:text-4xl font-bold text-black mb-6">
                Ready to Transform Your Business?
              </h3>
              <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
                Let's discuss how these solutions can drive real results for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Link href="/free-redesign">
                  <Button className="btn btn-primary btn-lg text-lg px-8 py-4">
                    Get Free Analysis
                    <ArrowRight className="ml-3 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" className="btn-lg text-lg px-8 py-4 border-gray-300 text-gray-700 hover:bg-gray-50">
                    Schedule a Call
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </Reveal>
  );
}
