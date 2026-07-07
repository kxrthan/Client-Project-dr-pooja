import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { CheckCircle2 } from "lucide-react";

const features = [
  {
    title: "Personalized Treatment Plans",
    description: "No cookie-cutter solutions. We design protocols specifically tailored to your unique skin profile and goals.",
  },
  {
    title: "Advanced Technology",
    description: "Equipped with FDA-approved, latest generation lasers and diagnostic tools for maximum efficacy and safety.",
  },
  {
    title: "Ethical Medical Practice",
    description: "We prioritize your health above all. Transparent consultations with realistic expectations and no unnecessary upselling.",
  },
  {
    title: "Experienced Dermatologist",
    description: "Led by a board-certified professional with years of specialized training in clinical and aesthetic dermatology.",
  },
  {
    title: "Long-Term Skin Health",
    description: "Focusing not just on immediate results, but on building sustainable routines for lifelong healthy skin.",
  },
];

export function WhyChooseUs() {
  return (
    <SectionWrapper id="why-choose-us" className="bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">Why Choose Us</h2>
          <h3 className="text-4xl md:text-5xl font-light leading-tight mb-6">
            Excellence in <span className="font-bold">Dermatological Science</span>
          </h3>
          <p className="text-muted-foreground text-lg font-light leading-relaxed">
            We bridge the gap between luxury aesthetics and rigorous medical science, providing an unparalleled patient experience.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Features - Left Side */}
          <div className="lg:col-span-4 space-y-12 order-2 lg:order-1">
            {features.slice(0, 3).map((feature, idx) => (
              <div key={idx} className="group pl-6 sm:pl-10 md:pl-0">
                <div className="mb-4">
                  <div className="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                </div>
                <h4 className="text-xl font-medium mb-3">{feature.title}</h4>
                <p className="text-muted-foreground font-light leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Video - Center Accent */}
          <div className="lg:col-span-4 order-1 lg:order-2 flex justify-center">
            <div className="relative w-full max-w-[280px] md:max-w-[320px] aspect-[4/5] rounded-full overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-4 border-background ring-1 ring-border/50 group">
              <video 
                src="/office-video.mp4" 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Features - Right Side */}
          <div className="lg:col-span-4 space-y-12 order-3 lg:order-3">
            {features.slice(3, 5).map((feature, idx) => (
              <div key={idx} className="group pl-6 sm:pl-10 md:pl-0">
                <div className="mb-4">
                  <div className="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                </div>
                <h4 className="text-xl font-medium mb-3">{feature.title}</h4>
                <p className="text-muted-foreground font-light leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
