import { User, Mail } from "lucide-react";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [snowflakes, setSnowflakes] = useState<Array<{ id: number; left: string; animationDelay: string }>>([]);

  useEffect(() => {
    setIsVisible(true);
    
    // Generate random snowflakes
    const flakes = Array.from({ length: 50 }, (_, index) => ({
      id: index,
      left: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 5}s`
    }));
    setSnowflakes(flakes);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative h-screen overflow-hidden bg-[#1A1F2C]">
      {/* Mountain Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1519681393784-d120267933ba')",
          filter: "brightness(0.7)"
        }}
      />
      
      {/* Moving Clouds */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="cloud cloud-1"></div>
        <div className="cloud cloud-2"></div>
        <div className="cloud cloud-3"></div>
      </div>

      {/* Animated Snow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {snowflakes.map(flake => (
          <div
            key={flake.id}
            className="snow"
            style={{
              left: flake.left,
              animationDelay: flake.animationDelay,
            }}
          />
        ))}
      </div>

      {/* Content Container */}
      <div className="relative container mx-auto px-6 h-full flex items-center">
        <div 
          className="backdrop-blur-md bg-white/10 rounded-2xl p-8 md:p-12 w-full max-w-3xl mx-auto transform transition-all duration-700 ease-out shadow-2xl border border-white/20"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
          }}
        >
          <div className="text-center md:text-left space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Gowri Rajagopal
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-200 mb-6">
              AI-Driven Product Innovator | Building the Future of AI & SaaS
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Transforming ideas into innovative solutions at the intersection of artificial intelligence and software development.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
              <button
                onClick={() => scrollToSection('contact')}
                className="inline-flex items-center px-6 py-3 bg-[#8B5CF6] text-white rounded-lg hover:bg-[#7C3AED] transition-colors"
              >
                <Mail className="mr-2 h-5 w-5" />
                Contact Me
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="inline-flex items-center px-6 py-3 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors backdrop-blur-sm"
              >
                <User className="mr-2 h-5 w-5" />
                About Me
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;