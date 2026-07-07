"use client";

import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { useState } from "react";
import { motion } from "framer-motion";

const cases = [
  { 
    id: 1, 
    category: "Acne Scarring", 
    before: "/acne-before.png", 
    after: "/acne-after.png" 
  },
  { 
    id: 2, 
    category: "Pigmentation", 
    before: "/pigment-before.png", 
    after: "/pigment-after.png" 
  },
  { 
    id: 3, 
    category: "Hair Restoration", 
    before: "/hair-before.png", 
    after: "/hair-after.png" 
  },
];

export function Gallery() {
  const [activeTab, setActiveTab] = useState(cases[0].category);
  const [sliderPosition, setSliderPosition] = useState(50);

  return (
    <SectionWrapper id="gallery" className="bg-secondary/20">
      <div className="text-center max-w-3xl mx-auto mb-10">
        <h2 className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">Clinical Results</h2>
        <h3 className="text-4xl md:text-5xl font-light leading-tight mb-6">
          Real Patients. <span className="font-bold">Real Transformations.</span>
        </h3>
        <p className="text-muted-foreground text-lg font-light leading-relaxed mb-8">
          Browse our gallery of authentic results achieved through personalized, evidence-based treatment plans.
        </p>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {cases.map((c) => (
            <button
              key={c.id}
              onClick={() => setActiveTab(c.category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === c.category
                  ? "bg-primary text-primary-foreground shadow-[0_0_15px_rgba(212,175,55,0.3)]"
                  : "bg-background border border-border/50 text-muted-foreground hover:border-primary/50"
              }`}
            >
              {c.category}
            </button>
          ))}
        </div>
      </div>

      {/* Comparison Slider */}
      <div className="max-w-4xl mx-auto">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative aspect-square md:aspect-video rounded-[2rem] overflow-hidden bg-background border border-border/50 shadow-2xl group"
        >
          {/* After Image (Base) */}
          <img 
            src={cases.find(c => c.category === activeTab)?.after} 
            className="absolute inset-0 w-full h-full object-cover" 
            alt="After" 
          />
          <span className="absolute bottom-4 right-4 bg-background/80 backdrop-blur-md px-4 py-1.5 rounded-full text-sm font-semibold z-10 shadow-sm pointer-events-none">
            After
          </span>

          {/* Before Image (Clipped) */}
          <div 
            className="absolute inset-0 z-10" 
            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
          >
            <img 
              src={cases.find(c => c.category === activeTab)?.before} 
              className="absolute inset-0 w-full h-full object-cover" 
              alt="Before" 
            />
            <span className="absolute bottom-4 left-4 bg-background/80 backdrop-blur-md px-4 py-1.5 rounded-full text-sm font-semibold z-10 shadow-sm pointer-events-none">
              Before
            </span>
          </div>
          
          {/* Range Input for dragging */}
          <input
            type="range"
            min="0"
            max="100"
            value={sliderPosition}
            onChange={(e) => setSliderPosition(Number(e.target.value))}
            className="absolute inset-0 z-20 w-full h-full opacity-0 cursor-ew-resize appearance-none"
          />

          {/* Slider handle indicator */}
          <div 
            className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] z-10 pointer-events-none"
            style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white border-2 border-primary rounded-full shadow-xl flex items-center justify-center transition-transform group-hover:scale-110">
              <div className="flex gap-1">
                <div className="w-1 h-4 bg-gray-300 rounded-full" />
                <div className="w-1 h-4 bg-gray-300 rounded-full" />
              </div>
            </div>
          </div>
        </motion.div>
        
        <p className="text-center text-sm text-muted-foreground mt-6 italic">
          *Disclaimer: Results vary by individual. Photographs are of actual patients and have not been altered.
        </p>
      </div>
    </SectionWrapper>
  );
}
