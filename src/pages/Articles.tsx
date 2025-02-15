import { BookOpen, ArrowLeft, Linkedin, FileText, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

// Import articles data
import { articles } from "@/components/BlogSection";

const Articles = () => {
  return (
    <div className="min-h-screen bg-[var(--color-pine-dark)]">
      <div className="container mx-auto px-6 py-20">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-3">
            <BookOpen className="w-8 h-8 text-[var(--color-accent)]" />
            <h1 className="text-4xl font-bold text-[var(--color-text-primary)]">My Articles</h1>
          </div>
          <Link 
            to="/"
            className="flex items-center gap-2 text-[var(--color-accent)] hover:text-[var(--color-text-primary)] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <a
              key={index}
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-[var(--color-pine-medium)] rounded-lg overflow-hidden shadow-lg border border-[var(--color-border)] hover:border-[var(--color-accent)] transition-all"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    {article.platform === "LinkedIn" ? (
                      <Linkedin className="w-5 h-5 text-[var(--color-accent)]" />
                    ) : (
                      <FileText className="w-5 h-5 text-[var(--color-accent)]" />
                    )}
                    <span className="text-sm font-medium text-[var(--color-text-secondary)]">
                      {article.platform}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-[var(--color-text-secondary)]">
                    <span className="text-sm flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {article.date}
                    </span>
                    <span className="text-sm">{article.readTime}</span>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-3 line-clamp-2">
                  {article.title}
                </h3>

                <p className="text-[var(--color-text-secondary)] mb-4 line-clamp-3">
                  {article.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-[var(--color-pine-dark)] text-[var(--color-accent)] border border-[var(--color-border)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Articles; 