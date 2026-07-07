"use client";

import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export function EducationalReels() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const reels = [
    {
      title: "Your Skin Only Needs 3 Things",
      category: "Skincare Basics",
      video: "/reels/skincare-basics.mp4"
    },
    {
      title: "Does Kumkumadi Oil Brighten Skin?",
      category: "Ingredient Spotlight",
      video: "/reels/kumkumadi-oil.mp4"
    },
    {
      title: "Before You Sign Up for Hair Therapy...",
      category: "Hair Care",
      video: "/reels/hair-therapy.mp4"
    },
    {
      title: "4 Foods to Avoid in the Morning",
      category: "Diet & Skin",
      video: "/reels/foods-to-avoid.mp4"
    },
    {
      title: "The Truth About Protein Supplements",
      category: "Nutrition",
      video: "/reels/protein.mp4"
    },
    {
      title: "Refreshment vs Hydration",
      category: "Skin Hydration",
      video: "/reels/hydration.mp4"
    },
    {
      title: "Veggies, Proteins, Carbs: The Right Order",
      category: "Diet Hacks",
      video: "/reels/diet-order.mp4"
    }
  ];

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(Math.ceil(scrollLeft) < scrollWidth - clientWidth - 5);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current && scrollContainerRef.current.children.length > 0) {
      // Scroll by exactly one card width + gap (gap is 24px)
      const firstCard = scrollContainerRef.current.children[0] as HTMLElement;
      const cardWidthWithGap = firstCard.clientWidth + 24;
      
      const scrollAmount = direction === "left" ? -cardWidthWithGap : cardWidthWithGap;
      
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <SectionWrapper id="reels" className="bg-secondary/10 border-t border-border/50 overflow-hidden" containerClassName="w-full max-w-[1400px]">
      {/* Increased padding to give arrows plenty of room */}
      <div className="relative px-4 md:px-24">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">Educational Content</h2>
          <h3 className="text-4xl md:text-5xl font-light leading-tight mb-6">
            Expert Skin <span className="font-bold">Reels</span>
          </h3>
          <p className="text-muted-foreground text-lg font-light leading-relaxed">
            Watch Dr. Pooja Reddy break down complex dermatology topics into simple, actionable skincare advice. Hover to play.
          </p>
        </div>

        {/* Carousel Wrapper */}
        <div className="relative group/carousel">
          
          {/* Floating Left Arrow (Pushed far away from the video cards) */}
          <Button 
            variant="outline" 
            size="icon" 
            className={`absolute left-[-16px] md:-left-20 top-1/2 -translate-y-1/2 z-20 rounded-full w-12 h-12 md:w-14 md:h-14 border-border/50 bg-background/80 shadow-xl backdrop-blur-md transition-all hover:scale-110 hidden sm:flex ${!canScrollLeft ? 'opacity-0 pointer-events-none' : ''}`}
            onClick={() => scroll("left")}
          >
            <ChevronLeft className="w-6 h-6 md:w-8 md:h-8 text-foreground" />
          </Button>

          {/* Floating Right Arrow (Pushed far away from the video cards) */}
          <Button 
            variant="outline" 
            size="icon" 
            className={`absolute right-[-16px] md:-right-20 top-1/2 -translate-y-1/2 z-20 rounded-full w-12 h-12 md:w-14 md:h-14 border-border/50 bg-background/80 shadow-xl backdrop-blur-md transition-all hover:scale-110 hidden sm:flex ${!canScrollRight ? 'opacity-0 pointer-events-none' : ''}`}
            onClick={() => scroll("right")}
          >
            <ChevronRight className="w-6 h-6 md:w-8 md:h-8 text-foreground" />
          </Button>

          {/* Reels Container */}
          <div 
            ref={scrollContainerRef}
            onScroll={checkScroll}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-8 scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {reels.map((reel, index) => (
              <ReelItem key={index} reel={reel} />
            ))}
          </div>
        </div>
        
        {/* Mobile Navigation Arrows (Visible only on very small screens where floating arrows are hidden) */}
        <div className="flex items-center justify-center gap-4 mt-2 sm:hidden">
            <Button 
              variant="outline" 
              size="icon" 
              className={`rounded-full w-12 h-12 border-border/50 hover:bg-white/10 ${!canScrollLeft ? 'opacity-50 pointer-events-none' : ''}`}
              onClick={() => scroll("left")}
            >
              <ChevronLeft className="w-6 h-6 text-foreground" />
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              className={`rounded-full w-12 h-12 border-border/50 hover:bg-white/10 ${!canScrollRight ? 'opacity-50 pointer-events-none' : ''}`}
              onClick={() => scroll("right")}
            >
              <ChevronRight className="w-6 h-6 text-foreground" />
            </Button>
        </div>

      </div>
    </SectionWrapper>
  );
}

function ReelItem({ reel }: { reel: { title: string, category: string, video: string } }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div 
      // 1 item on mobile, 2 on tablet, exactly 4 on desktop (with gap-6 = 24px)
      className="relative aspect-[9/16] w-[85vw] sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] shrink-0 snap-start rounded-3xl overflow-hidden group cursor-pointer border border-border/50 shadow-lg bg-black"
      onMouseEnter={() => videoRef.current?.play()}
      onMouseLeave={() => {
        if (videoRef.current) {
          videoRef.current.pause();
          videoRef.current.currentTime = 0;
        }
      }}
    >
      {/* Video Player */}
      <video 
        ref={videoRef}
        src={`${reel.video}#t=0.001`}
        preload="metadata"
        muted 
        loop 
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
      />
      
      {/* Gradient Overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-90 group-hover:opacity-70 transition-opacity" />
      
      {/* Content */}
      <div className="absolute inset-0 p-5 md:p-6 flex flex-col justify-between z-10 pointer-events-none">
        <div className="self-end bg-black/40 backdrop-blur-md rounded-full px-4 py-1.5 text-[10px] uppercase tracking-widest text-white/90 border border-white/10 shadow-sm">
          {reel.category}
        </div>
        
        <div>
          <h3 className="text-white font-medium text-lg md:text-xl leading-tight drop-shadow-md">
            {reel.title}
          </h3>
        </div>
      </div>
    </div>
  );
}
