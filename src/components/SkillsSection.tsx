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
    <section id="skills" className="py-20 bg-portfolio-lightGray">
      <div className="container mx-auto px-6">
        {/* Main Section Title */}
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Skills & Expertise
        </h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto mb-12">
          {skills.map((skillSet, index) => {
            const IconComponent = skillSet.icon;
            return (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-center mb-3">
                  <IconComponent className="w-5 h-5 text-portfolio-blue mr-2" />
                  <h3 className="text-lg font-semibold text-gray-800">
                    {skillSet.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {skillSet.items.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-portfolio-lightBlue text-portfolio-blue hover:bg-portfolio-blue hover:text-white transition-colors cursor-pointer"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Certifications Section */}
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-6">
            <ScrollText className="w-6 h-6 text-portfolio-blue" />
            <h3 className="text-3xl font-bold text-gray-800">Certifications</h3>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-4">
            <div className="max-h-[400px] overflow-y-auto pr-4 custom-scrollbar">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="p-4 border border-portfolio-lightBlue/20 rounded-lg hover:border-portfolio-blue/40 transition-colors"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">
                          {cert.title}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {cert.issuer}
                          {cert.type && ` • ${cert.type}`}
                        </p>
                      </div>
                      <span className="text-sm font-medium text-portfolio-blue bg-portfolio-lightBlue px-2 py-1 rounded-full">
                        {cert.year}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #94a3b8;
        }
      `}</style>
    </section>
  );
};

export default SkillsSection;