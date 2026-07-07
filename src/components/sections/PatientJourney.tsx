"use client";

import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Camera, MousePointerClick, FileQuestion, Sparkles, CalendarCheck, Stethoscope } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    icon: Camera,
    title: "Discovery",
    description: "Follow our educational content on social media to understand your skin better.",
  },
  {
    icon: MousePointerClick,
    title: "Visit Website",
    description: "Explore our comprehensive list of treatments and evidence-based solutions.",
  },
  {
    icon: FileQuestion,
    title: "Select Concern",
    description: "Identify your specific skin or hair concern from our detailed guides.",
  },
  {
    icon: Sparkles,
    title: "Learn & Prepare",
    description: "Read about potential treatment options and realistic expectations.",
  },
  {
    icon: CalendarCheck,
    title: "Book Appointment",
    description: "Easily schedule your consultation through our seamless online booking system.",
  },
  {
    icon: Stethoscope,
    title: "In-Clinic Consultation",
    description: "Meet the doctor for a personalized, thorough diagnosis and treatment plan.",
  },
];

export function PatientJourney() {
  return (
    <SectionWrapper id="journey">
      <div className="text-center max-w-3xl mx-auto mb-10">
        <h2 className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">Your Journey</h2>
        <h3 className="text-4xl md:text-5xl font-light leading-tight mb-6">
          From Screen to <span className="font-bold">Healthy Skin</span>
        </h3>
        <p className="text-muted-foreground text-lg font-light leading-relaxed">
          We've designed a seamless experience to guide you from initial discovery to your first in-clinic consultation.
        </p>
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* Vertical Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border/50 -translate-x-1/2 hidden md:block" />

        <div className="space-y-12 relative z-10">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 ${
                idx % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Content Box */}
              <div className={`w-full md:w-1/2 flex ${idx % 2 === 0 ? "md:justify-start" : "md:justify-end"}`}>
                <div className={`bg-card/50 backdrop-blur-sm p-6 rounded-2xl border border-border/50 max-w-sm w-full shadow-lg text-center md:text-left ${idx % 2 === 0 ? "md:text-left" : "md:text-right"}`}>
                  <h4 className="text-xl font-semibold mb-2">{step.title}</h4>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>

              {/* Icon / Node */}
              <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-background border-2 border-primary text-primary shadow-[0_0_15px_rgba(212,175,55,0.3)] hidden md:flex z-20">
                <step.icon className="w-5 h-5" />
              </div>

              {/* Spacer for layout */}
              <div className="hidden md:block w-1/2" />
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
