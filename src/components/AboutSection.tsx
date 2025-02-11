import { User } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-6">
            <User className="w-6 h-6 text-portfolio-blue" />
            <h2 className="text-3xl font-bold text-gray-800">About Me</h2>
          </div>
          <div className="bg-portfolio-lightGray p-8 rounded-lg shadow-sm">
            <p className="text-lg leading-relaxed text-gray-700">
              An accomplished Product Manager with extensive experience in Product Management and Business Analysis. Proficient in optimizing 
              AI, SaaS, and API products, leading cross-functional teams to enhance product features using data analytics, Agile methodologies, and 
              Design Thinking within strict time and budget constraints.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;