import { BookOpen, ArrowRight } from "lucide-react";
import { useState } from "react";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  tags: string[];
  image?: string;
}

// This would typically come from your CMS or API
const blogs: BlogPost[] = [
  {
    id: "1",
    title: "The Future of AI in Product Management",
    excerpt: "Exploring how artificial intelligence is revolutionizing product management and decision-making processes...",
    content: "Full article content would be loaded from CMS...",
    date: "Mar 15, 2024",
    readTime: "5 min read",
    tags: ["AI", "Product Management", "Technology"],
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
  },
  {
    id: "2",
    title: "Building Effective API Integration Strategies",
    excerpt: "A comprehensive guide to planning and implementing successful API integrations in modern software...",
    content: "Full article content would be loaded from CMS...",
    date: "Mar 10, 2024",
    readTime: "8 min read",
    tags: ["API", "Integration", "Development"],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
  },
  {
    id: "3",
    title: "Product Analytics: Data-Driven Decision Making",
    excerpt: "Learn how to leverage product analytics to make informed decisions and drive product success...",
    content: "Full article content would be loaded from CMS...",
    date: "Mar 5, 2024",
    readTime: "6 min read",
    tags: ["Analytics", "Product Management", "Data"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
  },
];

const BlogSection = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const handlePostClick = (post: BlogPost) => {
    // In a real application, this would navigate to the blog post page
    // or open a modal with the full content
    setSelectedPost(post);
    window.location.href = `/blog/${post.id}`;
  };

  return (
    <section id="blog" className="py-20 bg-portfolio-lightGray">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <div className="flex flex-col items-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <BookOpen className="w-6 h-6 text-portfolio-blue" />
            <h2 className="text-3xl font-bold text-gray-800">Latest Articles</h2>
          </div>
          <a
            href="/blog"
            className="text-portfolio-blue hover:text-blue-700 flex items-center gap-2"
          >
            View All
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all cursor-pointer"
              onClick={() => handlePostClick(blog)}
            >
              {blog.image && (
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <BookOpen className="w-5 h-5 text-portfolio-blue mr-2" />
                  <span className="text-sm text-portfolio-gray">{blog.date}</span>
                  <span className="mx-2 text-portfolio-gray">•</span>
                  <span className="text-sm text-portfolio-gray">
                    {blog.readTime}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3 hover:text-portfolio-blue transition-colors">
                  {blog.title}
                </h3>
                <p className="text-gray-600 mb-4">{blog.excerpt}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {blog.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 bg-portfolio-lightBlue text-portfolio-blue rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePostClick(blog);
                  }}
                  className="text-portfolio-blue hover:text-blue-700 font-medium flex items-center gap-2"
                >
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;