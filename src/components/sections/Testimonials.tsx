"use client";

import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sarah M.",
    review: "I struggled with adult acne for years. Dr. Pooja was the first doctor who truly listened and created a plan that actually worked. My skin has never looked better.",
    rating: 5,
    treatment: "Acne Protocol"
  },
  {
    name: "Priya K.",
    review: "The clinic feels like a luxury spa, but the treatments are pure science. The laser protocol for my pigmentation was explained perfectly and the results exceeded my expectations.",
    rating: 5,
    treatment: "Laser Pigmentation"
  },
  {
    name: "James T.",
    review: "Professional, ethical, and incredibly knowledgeable. I went in for a hair loss consultation and received a comprehensive, honest plan without any pressure to buy unnecessary products.",
    rating: 5,
    treatment: "Hair Restoration"
  },
  {
    name: "Neha R.",
    review: "Finally found a dermatologist who understands Indian skin! The chemical peel was customized for me, and I saw a glowing, radiant difference in just one week.",
    rating: 5,
    treatment: "Chemical Peel"
  },
  {
    name: "Anjali S.",
    review: "I've been going here for laser hair removal. It's completely painless, highly effective, and the staff is so warm and welcoming. Can't recommend them enough.",
    rating: 5,
    treatment: "Laser Hair Removal"
  },
  {
    name: "Dr. Arun V.",
    review: "As a fellow physician, I can attest to Dr. Pooja's clinical brilliance. Her evidence-based approach is incredibly refreshing in the world of modern aesthetics.",
    rating: 5,
    treatment: "Anti-Aging Consultation"
  }
];

export function Testimonials() {
  // We duplicate the array twice to ensure a seamless infinite scrolling effect
  const loopedTestimonials = [...testimonials, ...testimonials];

  return (
    <SectionWrapper id="testimonials" className="bg-background overflow-hidden" containerClassName="max-w-[100vw] px-0 sm:px-0 lg:px-0">
      <div className="text-center max-w-3xl mx-auto mb-16 relative z-10 px-4">
        <h2 className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">Patient Stories</h2>
        <h3 className="text-4xl md:text-5xl font-light leading-tight mb-6">
          Words from <span className="font-bold">Our Patients</span>
        </h3>
        <p className="text-muted-foreground text-lg font-light leading-relaxed">
          Don't just take our word for it. Read about the experiences of those who entrusted us with their skin health.
        </p>
      </div>

      <div className="relative flex overflow-hidden group py-10">
        {/* Soft gradient fading masks on the left and right edges */}
        <div className="absolute inset-y-0 left-0 w-24 md:w-64 bg-gradient-to-r from-background to-transparent z-20 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 md:w-64 bg-gradient-to-l from-background to-transparent z-20 pointer-events-none" />

        <motion.div
          className="flex gap-6 w-max"
          // Animate from 0% to -50% of its own width.
          // Since the children are duplicated twice, moving -50% puts the exact same
          // elements into view as when it started at 0%, allowing an invisible, seamless reset.
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 45 }}
        >
          {loopedTestimonials.map((t, idx) => (
            <div 
              key={idx} 
              className="relative w-[320px] md:w-[400px] shrink-0 bg-secondary/30 backdrop-blur-md border border-border/50 rounded-3xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-primary/10 rotate-180 pointer-events-none" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              
              <p className="text-foreground/90 font-light text-lg leading-relaxed mb-8 flex-grow">
                "{t.review}"
              </p>
              
              <div className="flex items-center justify-between border-t border-border/50 pt-5">
                <div>
                  <p className="font-semibold text-base">{t.name}</p>
                  <p className="text-xs text-muted-foreground">Verified Patient</p>
                </div>
                <div className="bg-background/50 px-3 py-1 rounded-full text-xs font-medium text-primary border border-primary/20">
                  {t.treatment}
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
