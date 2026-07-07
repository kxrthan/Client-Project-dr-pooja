import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const articles = [
  {
    category: "Skin Health",
    title: "Understanding Adult Acne: Causes and Evidence-Based Solutions",
    excerpt: "Breakouts aren't just for teenagers. Discover the hormonal and environmental triggers behind adult acne.",
    readTime: "5 min read",
  },
  {
    category: "Prevention",
    title: "The Ultimate Guide to Daily Sun Protection",
    excerpt: "Why SPF is your most powerful anti-aging tool, and how to choose the right one for your skin type.",
    readTime: "4 min read",
  },
  {
    category: "Hair Care",
    title: "Unraveling the Mystery of Sudden Hair Fall",
    excerpt: "Stress, diet, or genetics? A medical perspective on identifying the root causes of hair thinning.",
    readTime: "6 min read",
  },
];

export function BlogPreview() {
  return (
    <SectionWrapper id="education">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div className="max-w-2xl">
          <h2 className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">Education</h2>
          <h3 className="text-4xl md:text-5xl font-light leading-tight mb-6">
            Dermatology <span className="font-bold">Insights</span>
          </h3>
          <p className="text-muted-foreground text-lg font-light leading-relaxed">
            Stay informed with our latest articles on skincare science, treatment updates, and clinical advice.
          </p>
        </div>
        <Link href="#" className="flex items-center gap-2 text-primary font-medium hover:underline hover:underline-offset-4 transition-all">
          View All Articles <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {articles.map((article, idx) => (
          <div key={idx} className="group cursor-pointer">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-secondary mb-6 border border-border/50">
              <div className="absolute inset-0 bg-muted-foreground/10 group-hover:bg-transparent transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/40">
                [Image]
              </div>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-semibold text-primary uppercase tracking-wider">{article.category}</span>
                <span className="w-1 h-1 rounded-full bg-border" />
                <span className="text-xs text-muted-foreground">{article.readTime}</span>
              </div>
              <h4 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{article.title}</h4>
              <p className="text-muted-foreground line-clamp-2">{article.excerpt}</p>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
