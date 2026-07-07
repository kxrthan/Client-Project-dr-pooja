"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface SectionWrapperProps {
  children: ReactNode;
  id?: string;
  className?: string;
  containerClassName?: string;
}

export function SectionWrapper({ children, id, className = "", containerClassName = "" }: SectionWrapperProps) {
  return (
    <section id={id} className={`py-12 md:py-16 ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${containerClassName}`}
      >
        {children}
      </motion.div>
    </section>
  );
}
