'use client';

import { useState, useEffect } from 'react';

export function BlogPreview() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const blogPosts = [
    {
      title: "5 Signs Your Gut Health is Affecting Your Mood",
      excerpt: "Discover the gut-brain connection and how digestive issues might be the root cause of anxiety, depression, and mood swings.",
      date: "March 15, 2024",
      readTime: "8 min read",
      category: "Gut Health",
      tags: ["Gut-Brain Axis", "Mental Health", "Microbiome"],
      featured: true,
      slug: "gut-health-mood-connection",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      title: "The Hidden Hormone Disruptors in Your Home",
      excerpt: "Identify common household products that could be sabotaging your hormonal balance and simple swaps to make today.",
      date: "February 28, 2024",
      readTime: "6 min read", 
      category: "Hormones",
      tags: ["Endocrine Disruptors", "Toxins", "Home Health"],
      featured: false,
      slug: "hormone-disruptors-home",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2 2v0" />
        </svg>
      )
    },
    {
      title: "Why Your Standard Blood Work Isn't Telling the Whole Story",
      excerpt: "Understanding the limitations of conventional lab testing and why functional ranges reveal more about your health.",
      date: "February 20, 2024",
      readTime: "10 min read",
      category: "Testing",
      tags: ["Lab Testing", "Functional Ranges", "Biomarkers"],
      featured: false,
      slug: "standard-blood-work-limitations",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      title: "Healing Your Metabolism After Years of Dieting",
      excerpt: "Learn how chronic dieting damages your metabolic rate and the functional nutrition approach to restoration.",
      date: "February 12, 2024",
      readTime: "14 min read",
      category: "Metabolism",
      tags: ["Metabolic Health", "Diet Recovery", "Thyroid"],
      featured: true,
      slug: "healing-metabolism-after-dieting",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "The Complete Guide to Supporting Your Adrenals Naturally",
      excerpt: "Practical strategies to heal adrenal fatigue through nutrition, lifestyle changes, and targeted supplementation.",
      date: "February 5, 2024",
      readTime: "11 min read",
      category: "Hormones",
      tags: ["Adrenal Health", "Stress Management", "HPA Axis"],
      featured: false,
      slug: "supporting-adrenals-naturally",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    }
  ];

  const categories = ["All", "Gut Health", "Testing", "Hormones", "Metabolism"];
  
  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative py-24 bg-gradient-to-br from-slate-50 via-white to-[#41ab5d]/10 overflow-hidden" id="blog">
      {/* Background Elements */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-bl from-[#41ab5d]/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-gradient-to-tr from-[#41ab5d]/15 to-transparent rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-[#41ab5d]/10 text-[#41ab5d] rounded-full text-sm font-medium mb-6">
            📚 Latest Insights
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Health <span className="text-primary">Knowledge Hub</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Evidence-based insights on functional nutrition, root-cause healing, and women's health optimization
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

        {/* Featured Post */}
        {featuredPost && selectedCategory === "All" && (
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} mb-16`}>
            <div className="bg-gradient-to-br from-[#41ab5d] to-[#41ab5d] rounded-3xl p-8 lg:p-12 text-white shadow-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      {featuredPost.icon}
                    </div>
                    <div>
                      <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Featured Article
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="text-3xl lg:text-4xl font-bold mb-4 leading-tight">
                    {featuredPost.title}
                  </h3>
                  
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

                  <button className="bg-white text-[#41ab5d] px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:bg-gray-50 hover:scale-105 shadow-xl">
                    Read Full Article
                  </button>
                </div>

                <div className="relative">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    <h4 className="text-lg font-bold mb-4">What You'll Learn:</h4>
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
          </div>
        )}

        {/* Regular Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {regularPosts.slice(0, 3).map((post, index) => (
            <article 
              key={index}
              className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-gray-100/50 group"
            >
              {/* Header */}
              <div className="p-6 pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#41ab5d] to-[#41ab5d] rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                    {post.icon}
                  </div>
                  <span className="bg-[#41ab5d]/10 text-[#41ab5d] px-3 py-1 rounded-full text-xs font-medium">
                    {post.category}
                  </span>
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
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.slice(0, 2).map((tag, tagIndex) => (
                    <span key={tagIndex} className="bg-gray-100 text-gray-600 px-2 py-1 rounded-lg text-xs">
                      {tag}
                    </span>
                  ))}
                </div>

                <button className="inline-flex items-center text-[#41ab5d] font-semibold hover:text-[#1a4a2a] transition-colors duration-300 group">
                  Read Article
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mb-16">
          <button className="bg-gradient-to-r from-[#41ab5d] to-[#41ab5d] text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:from-[#1a4a2a] hover:to-[#41ab5d] hover:scale-105 shadow-lg hover:shadow-xl">
            View More Articles
          </button>
        </div>

        {/* Blog CTA */}
        <div className="text-center">
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-12 shadow-xl border border-gray-100/50">
            <div className="w-20 h-20 bg-gradient-to-br from-[#41ab5d] to-[#41ab5d] rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Want More Health Insights?
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Explore our complete library of articles on functional nutrition, testing protocols, and women's health optimization
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="gradient-bg text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:from-[#1a4a2a] hover:to-[#41ab5d] hover:scale-105 shadow-xl hover:shadow-2xl">
                Visit Our Blog
              </button>
              <button className="border-2 border-[#41ab5d] text-[#41ab5d] px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:bg-[#41ab5d] hover:text-white hover:scale-105">
                Subscribe to Updates
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
