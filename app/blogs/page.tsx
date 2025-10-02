'use client';

import { useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const blogPosts = [
    {
      title: "The Gut-Brain Connection: Why Your Anxiety Might Start in Your Stomach",
      excerpt: "Explore the science behind the gut-brain axis and how it influences anxiety and digestion. Discover actionable strategies for balance.",
      date: "January 15, 2025",
      readTime: "8 min read",
      category: "Gut Health",
      tags: ["Anxiety", "Microbiome", "Gut Health"],
      featured: true,
      url: "/blogs/gut-brain-connection",
      slug: "gut-brain-connection",
      image: "/blog-images/gut-brain-connection.jpg",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      title: "When Standard Healthcare Fails Women: Why Many Are Misdiagnosed and How to Advocate for Yourself",
      excerpt: "Understand gender bias in medical care, why women face higher misdiagnosis rates, and learn how to advocate for yourself in the healthcare system.",
      date: "January 5, 2025",
      readTime: "12 min read",
      url: "/blogs/healthcare-fails-women",
      category: "Women's Health",
      tags: ["Healthcare Advocacy", "Gender Bias", "Self-Advocacy"],
      featured: false,
      slug: "healthcare-fails-women",
      image: "/blog-images/healthcare-fails-women.jpg",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      title: "Corporate Wellness Spotlight: How Gut Health Programs Boost Productivity and Reduce Costs",
      excerpt: "Discover how digestive disorders impact workplace productivity and costs, plus evidence-based strategies for implementing gut health programs in corporate settings.",
      date: "January 2, 2025",
      readTime: "10 min read",
      url: "/blogs/corporate-wellness",
      category: "Corporate Wellness",
      tags: ["Workplace Health", "Productivity", "ROI"],
      featured: false,
      slug: "corporate-wellness",
      image: "/blog-images/corporate-wellness.jpg",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      title: "Perimenopause and Gut Health: What Most Doctors Overlook",
      excerpt: "Explore the vital connection between perimenopause, estrogen, and your gut microbiome. Learn how gut imbalances fuel symptoms.",
      date: "January 12, 2025",
      readTime: "7 min read",
      category: "Hormones",
      url: "/blogs/perimenopause-gut-health",
      tags: ["Perimenopause", "Estrogen", "Microbiome"],
      featured: false,
      slug: "perimenopause-gut-health",
      image: "/blog-images/perimenopause-gut-health.jpg",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      )
    },
    {
      title: "Root-Cause Nutrition vs. Quick Fixes: Why Personalization Matters",
      excerpt: "Discover why personalized nutrition strategies lead to better, more sustainable changes than generic advice.",
      date: "July 10, 2025",
      readTime: "6 min read",
      url: "/blogs/root-cause-nutrition",
      category: "Nutrition",
      tags: ["Personalized Nutrition", "Testing", "Functional Medicine"],
      featured: false,
      slug: "root-cause-nutrition",
      image: "/blog-images/root-cause-nutrition.jpg",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: "The Hidden Link Between Stress & Gut Issues (Polyvagal Theory Explained)",
      excerpt: "Explore the science behind stress and gut health through Polyvagal Theory. Learn tools to restore balance and heal your nervous system.",
      date: "August 8, 2025",
      readTime: "9 min read",
      url: "/blogs/stress-gut-polyvagal",
      category: "Gut Health",
      tags: ["Stress", "Polyvagal Theory", "Gut Barrier"],
      featured: false,
      slug: "stress-gut-polyvagal",
      image: "/blog-images/stress-gut-polyvagal.jpg",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    }
  ];

  const categories = ["All", "Gut Health", "Women's Health", "Corporate Wellness", "Hormones", "Nutrition"];
  
  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <>
      <Head>
        <title>Health Blog | Empowered Nutrition with Inna</title>
        <meta name="description" content="Evidence-based insights on functional nutrition, root-cause healing, and women's health optimization from certified nutritionist Inna." />
      </Head>
      
      <div className="min-h-screen bg-white pt-32">
        {/* Header Section */}
        <section className="relative py-16 bg-gradient-to-br from-slate-50 via-white to-[#41ab5d]/10 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-bl from-[#41ab5d]/10 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-gradient-to-tr from-[#41ab5d]/15 to-transparent rounded-full blur-3xl"></div>
          
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            {/* Breadcrumbs */}
            <nav className="mb-8">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Link href="/" className="hover:text-[#41ab5d] transition-colors">Home</Link>
                <span>&gt;</span>
                <span className="text-gray-900">Blogs</span>
              </div>
            </nav>

            {/* Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-4 py-2 bg-[#41ab5d]/10 text-[#41ab5d] rounded-full text-sm font-medium mb-6">
                📚 Health Knowledge Hub
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Evidence-Based <span className="text-[#41ab5d]">Health Insights</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Discover functional nutrition strategies, root-cause healing approaches, and women's health optimization tips from certified nutritionist Inna.
              </p>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-[#41ab5d] to-[#41ab5d] text-white shadow-lg scale-105'
                      : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200 hover:border-[#41ab5d]/20'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Post */}
        {featuredPost && selectedCategory === "All" && (
          <section className="max-w-7xl mx-auto px-6 mb-16">
            <div className="bg-gradient-to-br from-[#41ab5d] to-[#41ab5d] rounded-3xl p-8 lg:p-12 text-white shadow-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      {featuredPost.icon}
                    </div>
                    <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured Article
                    </span>
                  </div>
                  
                  <h2 className="text-3xl lg:text-4xl font-bold mb-4 leading-tight">
                    {featuredPost.title}
                  </h2>
                  
                  <p className="text-xl mb-6 opacity-90 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="flex items-center gap-4 mb-8 text-white/80">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="text-sm">{featuredPost.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-sm">{featuredPost.readTime}</span>
                    </div>
                  </div>

                  <Link 
                    href={featuredPost.url} 
                    className="inline-block bg-white text-[#41ab5d] px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:bg-gray-50 hover:scale-105 shadow-xl"
                  >
                    Read Full Article
                  </Link>
                </div>

                <div className="relative">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    <h3 className="text-lg font-bold mb-4">What You'll Learn:</h3>
                    <div className="space-y-3">
                      {featuredPost.tags.map((tag, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                          <span className="text-white/90">{tag}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Blog Posts Grid */}
        <section className="max-w-7xl mx-auto px-6 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(selectedCategory === "All" ? regularPosts : filteredPosts).map((post, index) => (
              <article 
                key={index}
                className="bg-white rounded-3xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-gray-100/50 group"
              >
                {/* Image placeholder */}
                <div className="h-48 bg-gradient-to-br from-[#41ab5d]/20 to-[#41ab5d]/10 flex items-center justify-center">
                  <div className="w-16 h-16 bg-[#41ab5d] rounded-2xl flex items-center justify-center text-white">
                    {post.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-[#41ab5d]/10 text-[#41ab5d] px-3 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-[#41ab5d] transition-colors duration-300">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span>{post.date}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 2).map((tag, tagIndex) => (
                      <span key={tagIndex} className="bg-gray-100 text-gray-600 px-2 py-1 rounded-lg text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link 
                    href={post.url} 
                    className="inline-flex items-center text-[#41ab5d] font-semibold hover:text-[#1a4a2a] transition-colors duration-300 group"
                  >
                    Read Article
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="max-w-7xl mx-auto px-6 mb-16">
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 border border-gray-200 rounded-3xl p-12 text-center">
            <div className="w-16 h-16 bg-[#41ab5d] rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Never Miss a Health Insight
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Get weekly evidence-based nutrition tips, functional health insights, and exclusive content delivered straight to your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="https://calendly.com/inna-ntp/free-15-minutes-discovery-call-via-phone" 
                className="border-2 border-[#41ab5d] text-[#41ab5d] px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:bg-[#41ab5d] hover:text-white hover:scale-105"
              >
                Schedule Free Consultation
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
