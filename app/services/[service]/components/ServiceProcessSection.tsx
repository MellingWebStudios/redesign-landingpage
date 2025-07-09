import { getProcessSteps, type ProcessStep } from "../data";
import Reveal from "@/components/reveal-animation";
import { cn } from "@/lib/utils";

interface ServiceProcessSectionProps {
  service: string;
  serviceDisplay: string;
}

export default function ServiceProcessSection({ service, serviceDisplay }: ServiceProcessSectionProps) {
  const steps = getProcessSteps(service);

  return (
    <section className="py-20 bg-gradient-to-br from-white via-gray-50 to-blue-50/30 relative overflow-hidden">
      <div className="container-wide relative z-10">
        <Reveal>
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-3 bg-white/90 backdrop-blur-sm border border-gray-200/50 text-blue-600 px-6 py-3 rounded-full text-sm font-medium mb-8 shadow-lg">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <span className="font-semibold">Our Process</span>
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
            </div>
            <h2 className="mb-6 text-3xl lg:text-4xl font-bold text-black">
              How We Deliver <span className="text-primary">{serviceDisplay}</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our proven process ensures every project is delivered on time, on budget, and with outstanding results.
            </p>
          </div>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {steps.map((step, idx) => (
            <Reveal key={idx} delay={0.2 + idx * 0.1}>
              <div className="flex flex-col items-center text-center bg-white/90 rounded-2xl shadow-xl p-8 border border-gray-200/60 h-full">
                <div className={cn("w-16 h-16 flex items-center justify-center rounded-full mb-4 text-3xl", idx === 0 ? "bg-blue-100 text-blue-600" : idx === steps.length - 1 ? "bg-green-100 text-green-600" : "bg-primary/10 text-primary")}>{typeof step.icon === "string" ? step.icon : step.icon && <step.icon className="w-8 h-8" />}</div>
                <h3 className="text-xl font-bold text-black mb-2">{step.title}</h3>
                <p className="text-gray-600 mb-4">{step.description}</p>
                <div className="text-xs text-gray-500 font-medium">{step.duration}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
