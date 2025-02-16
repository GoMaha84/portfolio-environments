import { Link, Briefcase } from "lucide-react";

const projects = [
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
  {
    title: "AutoMapGenie",
    description: "A full-stack API field mapping solution with React and Tailwind",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    link: "https://fieldmapper.netlify.app/",
    prdLink: "/images/PRD/AutoMapGenie-PRD.pdf"
  },
];

const AllProducts = () => {
  return (
    <section id="all-products" className="py-20 bg-[var(--color-pine-dark)]">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-center gap-3 mb-12">
          <Briefcase className="w-6 h-6 text-[var(--color-accent)]" />
          <h2 className="text-3xl font-bold text-[var(--color-text-primary)]">
            All Products
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
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
                {project.prdLink && (
                  <a
                    href={project.prdLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--color-accent)] hover:text-[var(--color-text-primary)] transition-colors"
                  >
                    View PRD
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllProducts; 