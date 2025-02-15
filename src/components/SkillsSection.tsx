import { 
  Target, 
  Rocket, 
  Users, 
  FileText, 
  Brain,
  Code,
  Database,
  Monitor,
  Bot,
  Languages,
  Award,
  Megaphone,
  ScrollText
} from "lucide-react";

const skills = [
  {
    category: "Key Impact Areas",
    icon: Target,
    items: [
      "AI and API Product Management",
      "Product Requirement Gathering",
      "Strategic Planning & Implementation",
      "Product Roadmap & Prioritization",
      "Sprint Planning / Backlog Grooming",
      "Reporting & Documentation",
      "Wireframing / PRD and FRDs",
      "Go-to-Market Strategy",
      "Product Life Cycle Management",
      "Team Building & Leadership",
      "Feature & Price Negotiation",
      "Product Data Analysis"
    ],
  },
  {
    category: "Technical Skills",
    icon: Code,
    items: [
      "RPA: Uipath, Power Automate, RAPbot",
      "Data Handling & Visualization: Excel, databricks, bigquery, athena, PowerBI",
      "Product Management: Jira, Aha!, clickup, Mixpannel, Miro, Tango",
      "Programming Languages: Python, SQL, Matlab",
      "API: Postman",
      "Prompting: Chat-GPT, Huggingface, Perplexity, Gemini",
      "Image Generation: Midjourney, Bluewillow, Leonardo"
    ],
  },
  {
    category: "Leadership & Community",
    icon: Users,
    items: [
      "TechsploratorSpeaks: Created & manage LinkedIn Micro Blogs",
      "IronLady Championship Volunteer",
      "Corporate Coordinator: VOX Management",
      "DoMS Bytes: Student Tabloid Initiative"
    ],
  },
  {
    category: "Languages",
    icon: Languages,
    items: [
      "English (Professional)",
      "Tamil (Native)",
      "Hindi (Proficient)",
      "Telugu (Conversational)",
      "French (Basic)"
    ],
  }
];

const certifications = [
  {
    title: "The Product Management for AI & Data Science Course",
    issuer: "Udemy",
    year: "2024"
  },
  {
    title: "Product-Led Growth Fundamentals Certification",
    issuer: "Product Led",
    year: "2024"
  },
  {
    title: "Prompt Engineering with ChatGPT",
    issuer: "LinkedIn Learning",
    year: "2024"
  },
  {
    title: "Becoming an AI-First Product Leader",
    issuer: "LinkedIn Learning",
    year: "2024"
  },
  {
    title: "Technical Product Management",
    issuer: "LinkedIn Learning",
    year: "2022"
  },
  {
    title: "Advanced Product Marketing",
    issuer: "LinkedIn Learning",
    year: "2021"
  },
  {
    title: "UiPath AI Center Overview",
    issuer: "UiPath",
    year: "2021",
    type: "Diploma of completion"
  },
  {
    title: "RPA Business Analyst Foundation",
    issuer: "UiPath",
    year: "2021",
    type: "Diploma of completion"
  },
  {
    title: "Introduction to RPA and Automation",
    issuer: "UiPath",
    year: "2021",
    type: "Diploma of completion"
  },
  {
    title: "Innovation Through Design: Think, Make, Break, Repeat",
    issuer: "University of Sydney",
    year: "2021"
  }
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 bg-[var(--color-pine-dark)]">
      <div className="container mx-auto px-6">
        {/* Main Section Title */}
        <h2 className="text-3xl font-bold text-center mb-12 text-[var(--color-text-primary)]">
          Skills & Expertise
        </h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto mb-12">
          {skills.map((skillSet, index) => {
            const IconComponent = skillSet.icon;
            return (
              <div
                key={index}
                className="bg-[var(--color-pine-medium)] p-4 rounded-lg shadow-lg border border-[var(--color-border)] hover:border-[var(--color-accent)] transition-colors"
              >
                <div className="flex items-center justify-center mb-3">
                  <IconComponent className="w-5 h-5 text-[var(--color-accent)] mr-2" />
                  <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">
                    {skillSet.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {skillSet.items.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-[var(--color-pine-dark)] text-[var(--color-text-secondary)] border border-[var(--color-border)] hover:border-[var(--color-accent)] hover:text-[var(--color-text-primary)] transition-colors cursor-pointer"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Modified Certifications Section */}
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-6">
            <ScrollText className="w-6 h-6 text-[var(--color-accent)]" />
            <h3 className="text-3xl font-bold text-[var(--color-text-primary)]">Certifications</h3>
          </div>
          <div className="bg-[var(--color-pine-medium)] rounded-lg shadow-lg border border-[var(--color-border)] p-4">
            <div className="max-h-[400px] overflow-y-auto pr-4 custom-scrollbar space-y-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="p-4 border border-[var(--color-border)] rounded-lg hover:border-[var(--color-accent)] transition-colors bg-[var(--color-pine-dark)]"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="font-semibold text-[var(--color-text-primary)] mb-1">
                        {cert.title}
                      </h4>
                      <p className="text-sm text-[var(--color-text-secondary)]">
                        {cert.issuer}
                        {cert.type && ` • ${cert.type}`}
                      </p>
                    </div>
                    <span className="text-sm font-medium text-[var(--color-accent)] bg-[var(--color-pine-medium)] px-2 py-1 rounded-full border border-[var(--color-border)] ml-4 whitespace-nowrap">
                      {cert.year}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: var(--color-pine-medium);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: var(--color-pine-light);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: var(--color-accent);
        }
      `}</style>
    </section>
  );
};

export default SkillsSection;