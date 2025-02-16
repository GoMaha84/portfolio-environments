import { useState } from "react";
import { Link, Image, Briefcase, ChevronLeft, ChevronRight } from "lucide-react";

const projects = [
  {
    title: "AutoMapGenie",
    description: "A full-stack API field mapping solution with React and Tailwind",
    image: "/images/automapgenie.png",
    link: "https://fieldmapper.netlify.app/",
    prdLink: "/images/PRD/AutoMapGenie-PRD.pdf"
  },
  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution with React and Node.js",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    link: "#",
  },
  {
    title: "Task Management App",
    description: "React-based task management application with real-time updates",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    link: "#",
  },
  {
    title: "Portfolio Website",
    description: "Responsive portfolio website built with modern technologies",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    link: "#",
  },
];

const PortfolioGrid = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const projectsPerPage = 3;
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  const nextSlide = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevSlide = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <section id="portfolio" className="py-20 bg-[var(--color-pine-dark)]">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-center gap-3 mb-12">
          <Briefcase className="w-6 h-6 text-[var(--color-accent)]" />
          <h2 className="text-3xl font-bold text-[var(--color-text-primary)]">
            Portfolio Projects
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-10 p-2 rounded-full bg-[var(--color-pine-medium)] text-[var(--color-text-primary)] hover:bg-[var(--color-accent)] transition-colors"
            aria-label="Previous projects"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-10 p-2 rounded-full bg-[var(--color-pine-medium)] text-[var(--color-text-primary)] hover:bg-[var(--color-accent)] transition-colors"
            aria-label="Next projects"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Projects Container */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentPage * 100}%)` }}
            >
              {Array.from({ length: totalPages }).map((_, pageIndex) => (
                <div key={pageIndex} className="grid grid-cols-3 gap-8 min-w-full">
                  {projects
                    .slice(
                      pageIndex * projectsPerPage,
                      (pageIndex + 1) * projectsPerPage
                    )
                    .map((project, index) => (
                      <div
                        key={index}
                        className="bg-[var(--color-pine-medium)] rounded-lg overflow-hidden shadow-lg border border-[var(--color-border)] hover:border-[var(--color-accent)] transition-all"
                      >
                        <div className="relative h-48">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-6">
                          <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-2">
                            {project.title}
                          </h3>
                          <p className="text-[var(--color-text-secondary)] mb-4">{project.description}</p>
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-[var(--color-accent)] hover:text-[var(--color-text-primary)] transition-colors"
                          >
                            <Link className="w-4 h-4 mr-2" />
                            Try the product here
                          </a>
                          <br />
                          <a
                            href={project.prdLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[var(--color-accent)] hover:text-[var(--color-text-primary)] transition-colors"
                          >
                            View PRD
                          </a>
                        </div>
                      </div>
                    ))}
                </div>
              ))}
            </div>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentPage
                    ? "bg-[var(--color-accent)]"
                    : "bg-[var(--color-pine-medium)]"
                }`}
                aria-label={`Go to page ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* View All Link */}
        <div className="text-center mt-8">
          <Link
            to="/portfolio/all"
            className="inline-flex items-center text-[var(--color-accent)] hover:text-[var(--color-text-primary)] transition-colors"
          >
            View All Projects
            <ChevronRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PortfolioGrid;