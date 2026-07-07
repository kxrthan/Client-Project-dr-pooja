import { SectionWrapper } from "@/components/ui/SectionWrapper";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How do I know which treatment is right for me?",
    answer: "During your initial consultation, the doctor will conduct a thorough skin analysis, discuss your concerns and medical history, and recommend a customized, evidence-based treatment plan tailored specifically to your needs.",
  },
  {
    question: "Are the treatments painful?",
    answer: "Patient comfort is our priority. Most treatments involve minimal to no discomfort. For procedures that might be sensitive, we use medical-grade topical numbing creams and advanced cooling technologies to ensure a pain-free experience.",
  },
  {
    question: "How soon will I see results?",
    answer: "Result timelines vary based on the treatment and individual skin response. While some procedures offer immediate radiance, others like acne or pigmentation protocols require consistency over several weeks or months. We set realistic expectations during your consult.",
  },
  {
    question: "Do you offer virtual consultations?",
    answer: "Yes, we offer online video consultations for preliminary assessments and follow-ups. However, for certain diagnostic and procedural treatments, an in-clinic visit is required.",
  },
  {
    question: "What should I do to prepare for my first visit?",
    answer: "Please come with a clean, makeup-free face if possible. Bring a list of your current skincare products, any medications you are taking, and past medical records related to your skin concerns.",
  },
];

export function FAQ() {
  return (
    <SectionWrapper id="faq" className="bg-secondary/20 !py-12 md:!py-16">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">FAQ</h2>
          <h3 className="text-3xl md:text-4xl font-light leading-tight mb-6">
            Frequently <span className="font-bold">Asked Questions</span>
          </h3>
          <p className="text-muted-foreground text-base md:text-lg font-light leading-relaxed">
            Find answers to common questions about our clinic, consultations, and treatments.
          </p>
        </div>

        <Accordion className="w-full space-y-3">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border border-border/50 bg-background/50 backdrop-blur-sm rounded-xl px-6 data-[state=open]:border-primary/50 transition-colors">
              <AccordionTrigger className="text-left text-base md:text-lg font-medium hover:text-primary py-4">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </SectionWrapper>
  );
}
