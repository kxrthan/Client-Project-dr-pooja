"use client";

import { motion } from "framer-motion";

export function InfiniteMarquee() {
  const items = [
    "Expert Dermatology", 
    "✦", 
    "Luxury Aesthetics", 
    "✦", 
    "Laser Hair Removal", 
    "✦", 
    "Anti-Aging Treatments", 
    "✦", 
    "Acne Scar Solutions", 
    "✦", 
    "Skin Rejuvenation", 
    "✦",
    "Clinical Excellence",
    "✦"
  ];

  return (
    <div className="w-full bg-secondary/10 border-y border-border/50 py-5 overflow-hidden flex relative">
      <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
      
      <motion.div
        className="flex whitespace-nowrap w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
      >
        {/* Render identical blocks to create the seamless infinite loop */}
        {[...Array(4)].map((_, arrayIndex) => (
          <div key={arrayIndex} className="flex items-center justify-center gap-12 px-6">
            {items.map((item, idx) => (
              <span 
                key={idx} 
                className={`text-sm md:text-base uppercase tracking-[0.2em] ${
                  item === "✦" ? "text-primary/40 text-xs" : "text-foreground/80 font-medium"
                }`}
              >
                {item}
              </span>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
