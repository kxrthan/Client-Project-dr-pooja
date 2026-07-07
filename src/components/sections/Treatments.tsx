import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, Activity, Sun, Scissors, Heart, Zap } from "lucide-react";

const treatments = [
  {
    title: "Acne Management",
    description: "Clear skin solutions targeting active breakouts and preventing future ones.",
    icon: Activity,
  },
  {
    title: "Pigmentation Correction",
    description: "Advanced treatments to even out skin tone and fade dark spots.",
    icon: Sun,
  },
  {
    title: "Hair Loss Solutions",
    description: "Evidence-based protocols to restore hair density and scalp health.",
    icon: Scissors,
  },
  {
    title: "Laser Treatments",
    description: "State-of-the-art laser technology for various skin concerns.",
    icon: Zap,
  },
  {
    title: "Anti-Aging Protocols",
    description: "Personalized therapies to minimize fine lines and improve skin elasticity.",
    icon: Heart,
  },
  {
    title: "Skin Rejuvenation",
    description: "Holistic treatments to restore your natural, youthful glow.",
    icon: Sparkles,
  },
];

export function Treatments() {
  return (
    <SectionWrapper id="treatments" className="bg-secondary/20">
      <div className="text-center max-w-3xl mx-auto mb-10">
        <h2 className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">Our Expertise</h2>
        <h3 className="text-4xl md:text-5xl font-light leading-tight mb-6">
          Comprehensive <span className="font-bold">Dermatological Care</span>
        </h3>
        <p className="text-muted-foreground text-lg font-light leading-relaxed">
          We combine medical expertise with aesthetic precision to deliver personalized treatments for all your skin and hair concerns.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {treatments.map((treatment, idx) => (
          <Card key={idx} className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 group cursor-pointer overflow-hidden rounded-[1.5rem]">
            <CardHeader className="relative z-10 pb-4">
              <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                <treatment.icon className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="text-xl font-semibold">{treatment.title}</CardTitle>
            </CardHeader>
            <CardContent className="relative z-10">
              <CardDescription className="text-base text-muted-foreground">
                {treatment.description}
              </CardDescription>
            </CardContent>
            {/* Subtle hover gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
