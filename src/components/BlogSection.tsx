import { BookOpen, ArrowRight, Linkedin, FileText, Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

export const articles = [
  {
    platform: "LinkedIn",
    title: "Global Freight Management System (GFMS): The Backbone of Modern Logistics 🚛🌍📦",
    date: "Feb 8, 2024",
    description: "An in-depth exploration of how GFMS is revolutionizing the logistics industry, discussing its components, benefits, and future implications for global supply chains.",
    link: "https://www.linkedin.com/pulse/global-freight-management-system-gfms-backbone-modern-gowri-rajagopal-znn1c",
    image: "/images/gfms-article.jpg",
    readTime: "4 min read",
    tags: ["Logistics", "GFMS", "Supply Chain", "Technology"]
  },
  {
    platform: "LinkedIn",
    title: "Product Management Life Cycle Vs Product Life Cycle Management",
    date: "Dec 1, 2024",
    description: "A comprehensive comparison between PMLC and PLM, using a smart fridge example to illustrate the key differences and how they work together in product development.",
    link: "https://www.linkedin.com/pulse/product-management-life-cycle-vs-gowri-rajagopal-79vgc",
    image: "/images/pmlc-plm-comparison.jpg",
    readTime: "4 min read",
    tags: ["Product Management", "PMLC", "PLM", "Strategy", "Product Development"]
  },
  {
    platform: "LinkedIn",
    title: "Product Life Cycle Management",
    date: "Oct 29, 2024",
    description: "An analysis of Product Life Cycle stages through the lens of Orkut and Facebook, exploring how different approaches to innovation and customer needs led to vastly different outcomes.",
    link: "https://www.linkedin.com/pulse/product-life-cycle-management-gowri-rajagopal-diaqc",
    image: "/images/plc-comparison.jpg",
    readTime: "5 min read",
    tags: ["Product Management", "PLC", "Social Media", "Strategy", "Innovation"]
  },
  {
    platform: "LinkedIn",
    title: "Product Management Life Cycle",
    date: "Oct 26, 2024",
    description: "A deep dive into the Product Management Life Cycle, exploring its stages and importance in successful product development and management.",
    link: "https://www.linkedin.com/pulse/product-management-life-cycle-gowri-rajagopal-rlaic",
    image: "/images/pmlc-article.jpg",
    readTime: "5 min read",
    tags: ["Product Management", "PMLC", "Strategy", "Development"]
  },
  {
    platform: "LinkedIn",
    title: "Techsploring napkin.ai - Create high-quality content and stunning infographics in seconds. 🌟📊",
    date: "Oct 20, 2024",
    description: "Exploring napkin.ai's capabilities in transforming content into visually appealing infographics, making content creation and visualization effortless.",
    link: "https://www.linkedin.com/pulse/techsploring-napkinai-create-high-quality-content-gowri-rajagopal-yezoc",
    image: "/images/napkinai-article.jpg",
    readTime: "4 min read",
    tags: ["AI Tools", "Content Creation", "Productivity", "Design"]
  },
  {
    platform: "LinkedIn",
    title: "Sailing the AI-First wave",
    date: "Jul 24, 2024",
    description: "An exploration of the AI-first approach in business, discussing its benefits, challenges, and how to implement it effectively while maintaining a human-centric focus.",
    link: "https://www.linkedin.com/pulse/sailing-ai-first-wave-gowri-rajagopal-2drbc",
    image: "/images/ai-first-article.jpg",
    readTime: "6 min read",
    tags: ["AI", "Digital Transformation", "Innovation", "Strategy"]
  },
  {
    platform: "LinkedIn",
    title: "Know your emissions - reduce your Carbon footprint",
    date: "Mar 13, 2024",
    description: "A comprehensive look at environmental impact in logistics, explaining carbon emissions, green supply chain management, and strategies for reducing carbon footprint.",
    link: "https://www.linkedin.com/pulse/know-your-emissions-reduce-carbon-footprint-gowri-rajagopal-shscc",
    image: "/images/carbon-footprint-article.jpg",
    readTime: "5 min read",
    tags: ["Sustainability", "Logistics", "Environment", "Supply Chain"]
  }
];

const BlogSection = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const articlesPerPage = 3;
  const totalPages = Math.ceil(articles.length / articlesPerPage);

  const nextSlide = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevSlide = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const goToPage = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <section id="blog" className="py-20 bg-[var(--color-pine-dark)]">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <div className="flex flex-col items-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <BookOpen className="w-6 h-6 text-[var(--color-accent)]" />
            <h2 className="text-3xl font-bold text-[var(--color-text-primary)]">My Articles</h2>
          </div>
          <p className="text-[var(--color-text-secondary)] text-center max-w-2xl">
            Sharing insights and experiences on Product Management, AI, Technology, and Logistics
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-10 p-2 rounded-full bg-[var(--color-pine-medium)] text-[var(--color-text-primary)] hover:bg-[var(--color-accent)] transition-colors"
            aria-label="Previous articles"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-10 p-2 rounded-full bg-[var(--color-pine-medium)] text-[var(--color-text-primary)] hover:bg-[var(--color-accent)] transition-colors"
            aria-label="Next articles"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Articles Container */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentPage * 100}%)` }}
            >
              {Array.from({ length: totalPages }).map((_, pageIndex) => (
                <div key={pageIndex} className="grid grid-cols-3 gap-8 min-w-full">
                  {articles
                    .slice(
                      pageIndex * articlesPerPage,
                      (pageIndex + 1) * articlesPerPage
                    )
                    .map((article, articleIndex) => (
                      <div key={articleIndex} className="w-full">
                        <a
                          href={article.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block bg-[var(--color-pine-medium)] rounded-lg overflow-hidden shadow-lg border border-[var(--color-border)] hover:border-[var(--color-accent)] transition-all h-[420px]"
                        >
                          <div className="relative h-48 overflow-hidden">
                            <img
                              src={article.image}
                              alt={article.title}
                              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                          </div>
                          <div className="p-6 flex flex-col h-[calc(420px-192px)]">
                            <div className="flex items-center justify-between mb-3">
                              <div className="flex items-center gap-2">
                                <Linkedin className="w-4 h-4 text-[var(--color-accent)]" />
                                <span className="text-xs font-medium text-[var(--color-text-secondary)]">
                                  {article.platform}
                                </span>
                              </div>
                              <div className="flex items-center gap-2 text-[var(--color-text-secondary)]">
                                <Calendar className="w-4 h-4" />
                                <span className="text-xs">{article.date}</span>
                              </div>
                            </div>
                            <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-3 line-clamp-2">
                              {article.title}
                            </h3>
                            <p className="text-sm text-[var(--color-text-secondary)] mb-4 line-clamp-3 flex-grow">
                              {article.description}
                            </p>
                            <div className="flex flex-wrap gap-2 mt-auto">
                              {article.tags.map((tag, tagIndex) => (
                                <span
                                  key={tagIndex}
                                  className="px-2 py-1 text-xs font-medium rounded-full bg-[var(--color-pine-dark)] text-[var(--color-accent)] border border-[var(--color-border)]"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        </a>
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
                onClick={() => goToPage(index)}
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
            to="/articles"
            className="inline-flex items-center text-[var(--color-accent)] hover:text-[var(--color-text-primary)] transition-colors"
          >
            View All Articles
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;