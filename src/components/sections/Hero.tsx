"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-28 pb-12 overflow-hidden bg-background">
      <div className="max-w-[1400px] w-full mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Column: Typography & CTAs */}
        <div className="space-y-6 lg:space-y-8 relative z-10 pt-4 lg:pt-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium tracking-wide shadow-sm"
          >
            <Star className="w-4 h-4 fill-primary text-primary" />
            Top Rated Dermatologist
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-[4.5rem] font-bold tracking-tighter text-foreground leading-[1.05]"
          >
            Healthy Skin. <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-muted-foreground font-serif italic font-medium">Expert Care.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground font-light max-w-lg leading-relaxed"
          >
            Experience evidence-based dermatology and luxury cosmetic treatments personalized exclusively for your unique skin journey.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 pt-2"
          >
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-base font-medium h-12 px-8 rounded-full transition-all group shadow-xl shadow-primary/20 hover:shadow-primary/40">
              Book Consultation
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center gap-6 pt-6 border-t border-border/40"
          >
            <div>
              <p className="text-4xl font-light text-foreground tracking-tight">20k+</p>
              <p className="text-xs text-muted-foreground uppercase tracking-widest mt-1">Consultations</p>
            </div>
            <div className="w-px h-10 bg-border/50" />
            <div>
              <p className="text-4xl font-light text-foreground tracking-tight">15+</p>
              <p className="text-xs text-muted-foreground uppercase tracking-widest mt-1">Years Exp.</p>
            </div>
            <div className="w-px h-10 bg-border/50" />
            <div>
              <p className="text-4xl font-light text-foreground tracking-tight">100%</p>
              <p className="text-xs text-muted-foreground uppercase tracking-widest mt-1">Evidence-Based</p>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Image */}
        <div className="flex justify-center lg:justify-end w-full">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative h-[450px] lg:h-[550px] w-full max-w-[450px] rounded-[2.5rem] overflow-hidden group shadow-2xl border border-white/5"
          >
            <img 
              src="/doctor-profile.jfif" 
              alt="Dr. Pooja Reddy" 
              className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-105 filter contrast-[1.05]"
            />
            {/* Subtle gradient overlay for luxury feel */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-90" />
            
            <div className="absolute bottom-6 left-6 right-6 p-5 rounded-3xl bg-background/40 backdrop-blur-md border border-white/10 shadow-2xl flex items-center justify-between">
               <div>
                 <p className="text-foreground font-semibold text-base">Dr. Pooja Reddy</p>
                 <p className="text-muted-foreground text-xs font-light">Lead Dermatologist</p>
               </div>
               <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                 <Star className="w-5 h-5 text-primary fill-primary" />
               </div>
            </div>
          </motion.div>
        </div>

      </div>
      
      {/* Background ambient glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-pink-500/10 rounded-full blur-[150px] pointer-events-none" />
    </section>
  );
}
