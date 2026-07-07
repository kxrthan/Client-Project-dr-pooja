"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, CheckCircle2, ChevronRight, User, Phone, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function BookingModal({ children }: { children: React.ReactNode }) {
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  // Demo dates (Next 5 days)
  const getDemoDates = () => {
    const dates = [];
    for (let i = 1; i <= 5; i++) {
      const d = new Date();
      d.setDate(d.getDate() + i);
      dates.push({
        full: d.toISOString(),
        dayStr: d.toLocaleDateString('en-US', { weekday: 'short' }),
        dateNum: d.getDate(),
        monthStr: d.toLocaleDateString('en-US', { month: 'short' })
      });
    }
    return dates;
  };
  const demoDates = getDemoDates();

  const timeSlots = ["10:00 AM", "11:30 AM", "02:00 PM", "03:45 PM", "05:15 PM"];

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    if (!open) {
      // Reset state after closing animation
      setTimeout(() => {
        setStep(1);
        setSelectedDate(null);
        setSelectedTime(null);
      }, 300);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="w-[95vw] max-h-[90vh] sm:max-w-[550px] p-0 bg-background border-border overflow-y-auto overflow-x-hidden rounded-3xl sm:rounded-[2rem]">
        
        {/* Subtle decorative background */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 pointer-events-none" />

        <div className="relative p-6 sm:p-8 z-10">
          <DialogHeader className="mb-8">
            <DialogTitle className="text-2xl font-bold tracking-tight flex items-center gap-2">
              <Calendar className="w-6 h-6 text-primary" />
              Book Consultation
            </DialogTitle>
          </DialogHeader>

          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="space-y-8"
              >
                {/* Date Selection */}
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground mb-4 flex items-center gap-2">
                    <Calendar className="w-4 h-4" /> Select Date
                  </h4>
                  <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide" style={{ scrollbarWidth: 'none' }}>
                    {demoDates.map((date, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedDate(date.full)}
                        className={`flex-shrink-0 flex flex-col items-center justify-center w-[72px] h-[88px] rounded-2xl border transition-all duration-300 ${
                          selectedDate === date.full
                            ? "bg-primary text-primary-foreground border-primary shadow-[0_0_15px_rgba(212,175,55,0.4)]"
                            : "bg-secondary/30 border-border/50 text-foreground hover:border-primary/50"
                        }`}
                      >
                        <span className="text-xs font-medium uppercase tracking-wider opacity-80 mb-1">{date.dayStr}</span>
                        <span className="text-2xl font-bold">{date.dateNum}</span>
                        <span className="text-[10px] uppercase font-medium mt-0.5">{date.monthStr}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Time Selection */}
                <div className={`transition-opacity duration-300 ${selectedDate ? "opacity-100" : "opacity-40 pointer-events-none"}`}>
                  <h4 className="text-sm font-medium text-muted-foreground mb-4 flex items-center gap-2">
                    <Clock className="w-4 h-4" /> Select Time
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {timeSlots.map((time, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedTime(time)}
                        className={`py-3 rounded-xl border text-sm font-medium transition-all duration-300 ${
                          selectedTime === time
                            ? "bg-primary text-primary-foreground border-primary shadow-[0_0_15px_rgba(212,175,55,0.4)]"
                            : "bg-secondary/30 border-border/50 text-foreground hover:border-primary/50"
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Continue Action */}
                <div className="pt-4 flex justify-end">
                  <Button 
                    onClick={() => setStep(2)} 
                    disabled={!selectedDate || !selectedTime}
                    className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 h-12 shadow-xl shadow-primary/20"
                  >
                    Continue <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-10 flex flex-col items-center justify-center text-center space-y-6"
              >
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-2">
                  <CheckCircle2 className="w-10 h-10 text-primary" />
                </div>
                
                <h3 className="text-2xl font-bold tracking-tight">Booking Initiated</h3>
                
                <div className="bg-secondary/30 border border-border/50 p-6 rounded-2xl max-w-sm text-sm text-muted-foreground leading-relaxed shadow-sm">
                  <p className="mb-3 font-medium text-foreground">
                    You selected {selectedTime} on {selectedDate && new Date(selectedDate).toLocaleDateString()}.
                  </p>
                  <p className="italic text-primary/80">
                    "This is a design prototype. Appointment booking will be integrated with your preferred system after project approval."
                  </p>
                </div>

                <Button 
                  onClick={() => handleOpenChange(false)}
                  variant="outline"
                  className="rounded-full mt-4 h-12 px-8 border-border/50 hover:bg-secondary/50"
                >
                  Close Prototype
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </DialogContent>
    </Dialog>
  );
}
