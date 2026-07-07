"use client";

import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Button } from "@/components/ui/button";
import { MessageCircle, Calendar } from "lucide-react";
import { BookingModal } from "@/components/ui/BookingModal";

export function CTA() {
  return (
    <SectionWrapper id="cta" className="!py-12 md:!py-20" containerClassName="relative z-10">
      <div className="relative rounded-[2.5rem] overflow-hidden bg-[#0A0A0A] border border-white/10 shadow-2xl py-12 px-8 md:py-16 md:px-14 flex flex-col lg:flex-row items-center justify-between gap-10">
        
        {/* Modern Luxury Background Effects */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/15 blur-[120px] rounded-full translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-pink-500/10 blur-[100px] rounded-full -translate-x-1/2 translate-y-1/2" />
          {/* Subtle architectural grid lines */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        </div>

        {/* Text Content */}
        <div className="relative z-10 max-w-2xl text-left">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white tracking-tighter leading-tight">
            Start Your <br className="hidden lg:block"/>
            <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-primary font-medium tracking-wide">Skin Journey</span> Today.
          </h2>
          <p className="text-base md:text-lg text-white/60 font-light leading-relaxed max-w-lg mt-6">
            Take the first step towards healthy, radiant skin. Book a personalized consultation and let science reveal your best self.
          </p>
        </div>

        {/* Buttons */}
        <div className="relative z-10 flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-4 w-full lg:w-auto shrink-0">
          <BookingModal>
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-base font-medium h-14 px-8 rounded-full flex items-center gap-2 transition-all hover:scale-105 shadow-xl shadow-primary/20">
              <Calendar className="w-5 h-5" />
              Book Consultation
            </Button>
          </BookingModal>
          <Button size="lg" variant="outline" className="h-14 px-8 rounded-full border-white/10 hover:bg-white/10 text-white text-base font-medium flex items-center gap-2 bg-white/5 backdrop-blur-md transition-all hover:scale-105">
            <MessageCircle className="w-5 h-5 text-green-400" />
            WhatsApp
          </Button>
        </div>
        
      </div>
    </SectionWrapper>
  );
}
