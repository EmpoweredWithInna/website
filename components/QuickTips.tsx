'use client';

import { useEffect, useState } from 'react';
import { downloadMealPlanGuide } from '../utils/downloadUtils';

export function QuickTips() {
  const [activeTip, setActiveTip] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const tips = [
    {
      title: "Start Your Day with Lemon Water",
      description: "Add fresh lemon juice to warm water first thing in the morning to support digestion and liver detoxification. This simple ritual kickstarts your metabolism and provides vitamin C.",
      category: "Morning Ritual",
      benefit: "Supports liver detox & digestion",
      difficulty: "Easy",
      time: "2 minutes",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    },
    {
      title: "Eat the Rainbow Daily",
      description: "Include 5-7 different colored vegetables and fruits to ensure diverse antioxidants, phytonutrients, and fiber. Each color provides unique health compounds.",
      category: "Nutrition",
      benefit: "Boosts antioxidants & nutrients",
      difficulty: "Moderate",
      time: "Throughout day",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      )
    },
    {
      title: "Practice Box Breathing",
      description: "Use the 4-4-4-4 technique: inhale for 4, hold for 4, exhale for 4, hold for 4. This activates your parasympathetic nervous system and reduces cortisol.",
      category: "Stress Management",
      benefit: "Reduces stress & improves digestion",
      difficulty: "Easy",
      time: "5 minutes",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      title: "Optimize Your Sleep Environment",
      description: "Keep your bedroom between 65-68°F, use blackout curtains, and avoid screens 1 hour before bed. Quality sleep is when your body repairs and detoxifies.",
      category: "Sleep Hygiene",
      benefit: "Improves recovery & hormone balance",
      difficulty: "Moderate",
      time: "Evening routine",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      )
    },
    {
      title: "Move for Lymphatic Flow",
      description: "Try dry brushing, rebounding, or gentle yoga to stimulate lymphatic drainage. Your lymphatic system doesn't have a pump like your heart, so movement is essential.",
      category: "Movement",
      benefit: "Supports detoxification & immunity",
      difficulty: "Easy",
      time: "10-15 minutes",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Prioritize Mineral Balance",
      description: "Focus on magnesium, zinc, and potassium through whole foods. Add sea salt to water, eat pumpkin seeds, and include leafy greens daily for optimal cellular function.",
      category: "Minerals",
      benefit: "Supports 300+ enzyme reactions",
      difficulty: "Moderate",
      time: "With meals",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    }
  ];

  const categories = ["All", "Morning Ritual", "Nutrition", "Stress Management", "Sleep Hygiene", "Movement", "Minerals"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredTips = selectedCategory === "All" 
    ? tips 
    : tips.filter(tip => tip.category === selectedCategory);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    if (filteredTips.length > 0 && activeTip >= filteredTips.length) {
      setActiveTip(0);
    }
  }, [selectedCategory, filteredTips.length, activeTip]);

  return (
    <section className="relative py-24 bg-gradient-to-br from-[#41ab5d]/5 via-white to-[#41ab5d]/10 overflow-hidden" id="tips">
      {/* Background Elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-br from-[#41ab5d]/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-tl from-[#41ab5d]/15 to-transparent rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-[#41ab5d]/10 text-[#41ab5d] rounded-full text-sm font-medium mb-6">
            💡 Science-Backed Tips
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Daily <span className="bg-primary bg-clip-text text-transparent">Wellness Hacks</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Simple, evidence-based strategies you can implement today to optimize your health and energy
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

        {/* Main Tip Display */}
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} mb-16`}>
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 lg:p-12 border border-gray-100/50">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
              {/* Tip Content */}
              <div className="lg:col-span-2">
                <div className="flex items-start gap-6 mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#41ab5d] to-[#41ab5d] rounded-2xl flex items-center justify-center text-white shadow-xl flex-shrink-0">
                    {filteredTips[activeTip]?.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-3 py-1 bg-[#41ab5d]/10 text-[#41ab5d] rounded-full text-sm font-medium">
                        {filteredTips[activeTip]?.category}
                      </span>
                      <span className="px-3 py-1 bg-[#41ab5d]/15 text-[#41ab5d] rounded-full text-sm font-medium">
                        {filteredTips[activeTip]?.difficulty}
                      </span>
                    </div>
                    <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                      {filteredTips[activeTip]?.title}
                    </h3>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      {filteredTips[activeTip]?.description}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-r from-[#41ab5d]/5 to-[#41ab5d]/10 rounded-2xl p-6 border border-[#41ab5d]/10">
                    <div className="flex items-center gap-2 text-[#41ab5d] font-semibold mb-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Key Benefit
                    </div>
                    <p className="text-gray-700">{filteredTips[activeTip]?.benefit}</p>
                  </div>

                  <div className="bg-gradient-to-r from-[#41ab5d]/10 to-[#41ab5d]/5 rounded-2xl p-6 border border-[#41ab5d]/15">
                    <div className="flex items-center gap-2 text-[#41ab5d] font-semibold mb-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Time Needed
                    </div>
                    <p className="text-gray-700">{filteredTips[activeTip]?.time}</p>
                  </div>
                </div>
              </div>

              {/* Tip Navigation */}
              <div className="space-y-4">
                <h4 className="text-lg font-bold text-gray-900 mb-4">More Tips</h4>
                {filteredTips.map((tip, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTip(index)}
                    className={`w-full p-4 rounded-2xl text-left transition-all duration-300 ${
                      index === activeTip
                        ? 'bg-gradient-to-r from-[#41ab5d] to-[#41ab5d] text-white shadow-lg scale-105'
                        : 'bg-gray-50 hover:bg-gray-100 text-gray-700 hover:shadow-md'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                        index === activeTip ? 'bg-white/20' : 'bg-white'
                      }`}>
                        <div className={`${index === activeTip ? 'text-white' : 'text-[#41ab5d]'}`}>
                          {tip.icon}
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className={`text-xs font-medium uppercase tracking-wide mb-1 ${
                          index === activeTip ? 'text-white/80' : 'text-gray-500'
                        }`}>
                          {tip.category}
                        </div>
                        <div className={`font-semibold text-sm ${
                          index === activeTip ? 'text-white' : 'text-gray-900'
                        }`}>
                          {tip.title}
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-br from-[#41ab5d] to-[#41ab5d] rounded-3xl shadow-2xl p-12 text-white text-center">
          <div className="max-w-4xl mx-auto">
            <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            
            <h3 className="text-3xl lg:text-4xl font-bold mb-6">
              Get Weekly Wellness Tips & Insights
            </h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join 5,000+ women receiving science-backed nutrition tips, functional health insights, and exclusive content every Tuesday
            </p>
            
            <div className="max-w-lg mx-auto">
              <div className="flex flex-col sm:flex-row gap-4 mb-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-4 rounded-2xl text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-white/30 shadow-lg"
                />
                <button 
                  onClick={downloadMealPlanGuide}
                  className="gradient-bg text-[#fff] px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:bg-gray-50 hover:scale-105 shadow-xl hover:shadow-2xl whitespace-nowrap"
                >
                  Get Free Tips
                </button>
              </div>
              <p className="text-sm opacity-75">
                ✨ No spam, ever. Unsubscribe anytime with one click. Privacy protected.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
