import { Briefcase, ChevronDown } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const experiences = [
  {
    title: "Product Manager (AI, TMS Integrations)",
    company: "Freightify Solutions India Pvt. Ltd.",
    period: "Since Jun'22",
    description: [
      "Spearheading the sophisticated integration of TMS like OTM and CargoWiseOne with our platform for Booking, shipment and Rates using both SOAP and REST APIs.",
      "Leading development of Freightify RateGPT, the industry's first AI-powered freight rate search platform utilizing OpenAI's API.",
      "Lead the API Integrations of Carrier rates, Air rates and Air Booking, from envisioning and strategizing to GTM.",
    ],
    highlights: [
      "Pioneering the integration of platform with the acclaimed TMS software like CargoWise One, Oracle OTM, orchestrating a substantial deal valued at $9K to $12K with a noteworthy Monthly Recurring Revenue (MRR) per integration.",
      "Championed the seamless incorporation of CargoAi, a prominent air rates and booking provider, into our SaaS platform. This strategic integration yielded a remarkable 13.82% augmentation of the overall customer base.",
      "Proactively identified growth opportunity in carbon emissions tracking, leading integration efforts and securing a 4X (344%) increase in API capacity through strategic vendor negotiation, all within budget.",
    ],
  },
  {
    title: "Product Management Executive",
    company: "Rapid Acceleration Partners Pvt. Ltd.",
    period: "Dec'20 – Jun'22",
    description: [
      "Spearheaded the creation of RAPBot, an automation platform, and ensured its user-friendly design and robust functionality.",
      "Conducted thorough market research, monitoring competitor products, and engaging with RPA communities.",
      "Engaged with internal and external stakeholders to understand needs, suggestions, and pain points.",
    ],
    highlights: [
      "Strategically increased the modules of RAPBot by 136% in just 2 months.",
      "Achieved a rapid MVP delivery within 3 months by implementing Agile methodologies.",
      "Collaborated with diverse teams, including JS and Python development teams, testing, design, and frontend teams.",
    ],
  },
  {
    title: "Research Scholar",
    company: "Anna University, CEG, Guindy",
    period: "Jan'15 – Feb'19",
    description: [
      "Analyzed the human triggers risks in the VUCCA industry of petroleum drilling.",
      "Taught Supply Chain Management, Facility Layout, and Productivity Management.",
      "Published in seven international publications in journals and conferences.",
    ],
    highlights: [
      "Formulated mitigation strategies through extensive interactions with industry professionals nationwide.",
      "Guided engineering student's projects in Risk and SCM.",
    ],
  },
  {
    title: "Assistant Professor",
    company: "Meenakshi College of Engineering",
    period: "Jul'10 – Mar'11",
    description: [
      "Lectured on Fuzzy Logic and Neural Networks, Robotics and Automation, Transducer Engineering, and Analog and Digital Communication for B.E. students.",
    ],
    highlights: [
      "Achieved a 100% pass rate in Robotics and Automation, with 1 university rank & 98% pass rate in Fuzzy Logic/Neural Networks.",
    ],
  },
  {
    title: "Software Engineer",
    company: "Infosys technologies Ltd.",
    period: "Sep'08 – Feb'09",
    description: [
      "Handled internal project on digitizing the process flow for a local transport service.",
      "Developed user-centric web pages and features using Java, HTML, CSS, and SQL.",
    ],
    highlights: [],
  },
];

const ExperienceTimeline = () => {
  return (
    <section id="experience" className="py-20 bg-[var(--color-pine-dark)]">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-[var(--color-text-primary)]">
          Professional Experience
        </h2>
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 pb-8">
              <div className="absolute left-0 top-0 h-full w-0.5 bg-[var(--color-accent)]"></div>
              <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-[var(--color-accent)]"></div>
              <div className="bg-[var(--color-pine-medium)] rounded-lg shadow-lg border border-[var(--color-border)]">
                <Accordion type="single" collapsible>
                  <AccordionItem value={`item-${index}`} className="border-none">
                    <AccordionTrigger className="px-6 py-4 hover:no-underline">
                      <div className="flex-1 text-left">
                        <div className="flex items-center mb-2">
                          <Briefcase className="w-5 h-5 text-[var(--color-accent)] mr-2" />
                          <h3 className="text-xl font-semibold text-[var(--color-text-primary)]">
                            {exp.title}
                          </h3>
                        </div>
                        <p className="text-[var(--color-text-secondary)] mb-1">{exp.company}</p>
                        <p className="text-sm text-[var(--color-text-secondary)] opacity-75">{exp.period}</p>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4">
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-[var(--color-text-primary)] mb-2">Key Responsibilities</h4>
                          <ul className="list-disc pl-5 space-y-2 text-[var(--color-text-secondary)]">
                            {exp.description.map((item, idx) => (
                              <li key={idx}>{item}</li>
                            ))}
                          </ul>
                        </div>
                        {exp.highlights.length > 0 && (
                          <div>
                            <h4 className="font-semibold text-[var(--color-text-primary)] mb-2">Significant Highlights</h4>
                            <ul className="list-disc pl-5 space-y-2 text-[var(--color-text-secondary)]">
                              {exp.highlights.map((highlight, idx) => (
                                <li key={idx}>{highlight}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;