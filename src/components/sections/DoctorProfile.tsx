import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Award, BookOpen, GraduationCap } from "lucide-react";

export function DoctorProfile() {
  return (
    <SectionWrapper id="doctor-profile" className="bg-secondary/20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Content */}
        <div className="lg:col-span-7 space-y-8 pl-6 sm:pl-10 md:pl-0">
          <div>
            <h2 className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Meet Your Doctor</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-6">Dr. Pooja Reddy</h3>
            <p className="text-xl text-primary font-medium mb-6">MBBS, MD (Dermatology)</p>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                With over a decade of clinical experience, Dr. Pooja is a leading voice in evidence-based dermatology. Their philosophy revolves around treating skin conditions at their root cause while enhancing natural beauty.
              </p>
              <p>
                Specializing in complex pigmentation issues, advanced acne management, and cutting-edge anti-aging therapies, she brings an artist's eye and a scientist's rigor to every consultation.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-border/50">
            <div className="flex flex-col items-start gap-3">
              <GraduationCap className="w-8 h-8 text-primary" />
              <h4 className="font-semibold text-lg">Top Tier Education</h4>
              <p className="text-sm text-muted-foreground">MD from prestigious institute with gold medal.</p>
            </div>
            <div className="flex flex-col items-start gap-3">
              <Award className="w-8 h-8 text-primary" />
              <h4 className="font-semibold text-lg">Award Winning</h4>
              <p className="text-sm text-muted-foreground">Recognized for excellence in clinical research.</p>
            </div>
            <div className="flex flex-col items-start gap-3">
              <BookOpen className="w-8 h-8 text-primary" />
              <h4 className="font-semibold text-lg">Published Author</h4>
              <p className="text-sm text-muted-foreground">Numerous papers in international journals.</p>
            </div>
          </div>
        </div>

        {/* Image Side - Minimalist */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
          <div className="relative w-64 h-64 md:w-80 md:h-80 mb-8">
            <div className="absolute inset-0 bg-primary/20 rounded-full translate-x-4 translate-y-4 blur-sm" />
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-background shadow-2xl z-10">
              <img 
                src="/doctor-profile.jfif" 
                alt="Dr. Pooja Reddy" 
                className="w-full h-full object-cover object-top" 
              />
            </div>
          </div>
          <div className="text-center max-w-xs relative z-20">
            <p className="text-xl font-serif italic text-muted-foreground">"Healthy skin is a journey, and I am here to guide you every step of the way."</p>
          </div>
          {/* Decorative element */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl z-[-1]" />
        </div>
      </div>
    </SectionWrapper>
  );
}
