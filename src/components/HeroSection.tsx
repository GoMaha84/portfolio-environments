import { User, Mail, Leaf } from "lucide-react";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [leaves, setLeaves] = useState<Array<{ id: number; style: React.CSSProperties }>>([]);
  const [clouds, setClouds] = useState<Array<{ id: number; style: React.CSSProperties }>>([]);

  useEffect(() => {
    setIsVisible(true);

    // Generate leaves
    const newLeaves = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      style: {
        left: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 15}s`,
      }
    }));
    setLeaves(newLeaves);

    // Generate clouds
    const newClouds = Array.from({ length: 5 }, (_, i) => ({
      id: i,
      style: {
        animationDelay: `${Math.random() * 40}s`,
        opacity: 0.4 + (Math.random() * 0.3), // Varying opacity between 0.4 and 0.7
        transform: `scale(${0.8 + Math.random() * 0.4}) translateY(${-20 + Math.random() * 40}px)`, // Random size and slight vertical variation
      }
    }));
    setClouds(newClouds);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/images/hero-autumn.png')",
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          width: '100%',
          height: '100%'
        }}
      />

      {/* Clouds Container */}
      <div className="absolute inset-0 overflow-hidden">
        {clouds.map(cloud => (
          <div
            key={cloud.id}
            className={`cloud cloud-${cloud.id + 1}`}
            style={cloud.style}
          />
        ))}
      </div>

      {/* Autumn Leaves */}
      {leaves.map(leaf => (
        <div
          key={leaf.id}
          className="leaf"
          style={leaf.style}
        />
      ))}

      {/* Subtle Overlay */}
      <div 
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to bottom, rgba(10, 31, 28, 0.2), rgba(10, 31, 28, 0.3))"
        }}
      />

      {/* Content Container */}
      <div className="relative container mx-auto px-6 h-full flex items-center justify-center">
        <div 
          className="backdrop-blur-sm bg-[#0A1F1C]/30 rounded-3xl p-12 w-full max-w-2xl transform transition-all duration-700 ease-out border border-white/10"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
          }}
        >
          <div className="text-center space-y-6">
            <div className="flex items-center justify-center gap-3">
              <Leaf className="w-6 h-6 text-[#E67E22]" />
              <h1 className="text-5xl font-bold text-white">
                Gowri Rajagopal
              </h1>
            </div>
            <h2 className="text-2xl text-white">
              AI-Driven Product Innovator | Building the Future of AI & SaaS
            </h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              Transforming ideas into innovative solutions at the intersection of artificial intelligence and software development, 
              with a passion for nature, art, and music.
            </p>
            <div className="flex gap-4 justify-center mt-8">
              <button
                onClick={() => scrollToSection('contact')}
                className="inline-flex items-center px-6 py-3 bg-[#E67E22] text-white rounded-lg hover:bg-[#D35400] transition-colors"
              >
                <Mail className="mr-2 h-5 w-5" />
                Contact Me
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="inline-flex items-center px-6 py-3 bg-black/20 text-white rounded-lg hover:bg-[#E67E22] transition-colors backdrop-blur-sm"
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