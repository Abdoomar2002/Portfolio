import React from 'react';
import { motion } from 'framer-motion';

const Blog = () => {
  const blogPosts = [
    {
      title: "SOLID Principles in Practice",
      description: "A comprehensive guide to implementing SOLID principles in your codebase",
      date: "2024-03-15",
      category: "Software Design"
    },
    {
      title: "Design Patterns: A Developer's Guide",
      description: "Understanding and implementing common design patterns in modern applications",
      date: "2024-03-10",
      category: "Software Architecture"
    },
    {
      title: "Building Scalable React Applications",
      description: "Best practices and patterns for creating maintainable React applications",
      date: "2024-03-05",
      category: "Frontend Development"
    }
  ];

  return (
    <main className="container mx-auto px-4 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-8 gradient-text">Blog & Content</h1>
        <p className="text-gray-300 mb-12 max-w-3xl">
          Sharing my knowledge and experiences through articles and video content.
          Follow my journey in software development and learn from my insights.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm hover:bg-gray-800/70 transition-colors"
            >
              <span className="text-primary text-sm font-medium">{post.category}</span>
              <h2 className="text-xl font-semibold mt-2 mb-3 text-white">{post.title}</h2>
              <p className="text-gray-300 mb-4">{post.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-gray-400 text-sm">{post.date}</span>
                <a
                  href="#"
                  className="text-primary hover:text-primary/80 transition-colors"
                >
                  Read More →
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-8 gradient-text">YouTube Channel</h2>
          <div className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-primary"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">Abdelrahman Omar</h3>
                <p className="text-gray-300">Software Development Tutorials</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6">
              Subscribe to my YouTube channel for in-depth tutorials on software development,
              design patterns, and best practices. New content every week!
            </p>
            <a
              href="https://youtube.com/@abdelrahmanomar"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
            >
              Subscribe to Channel
            </a>
          </div>
        </div>
      </motion.div>
    </main>
  );
};

export default Blog; 