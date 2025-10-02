'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';

export function Testimonials() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [slideDirection, setSlideDirection] = useState<'left' | 'right'>('right');

  const testimonials = [
    {
      name: "Sarah M.",
      location: "Austin, TX",
      condition: "IBS & Chronic Fatigue",
      quote: "After 3 years of seeing specialists with no answers, Inna's functional testing revealed the root causes of my digestive issues and fatigue. Within 6 months, I had my energy back and my gut symptoms were 90% improved.",
      result: "90% reduction in IBS symptoms",
      beforeAfter: {
        before: "Constant bloating, brain fog, exhausted by 2pm daily",
        after: "Clear thinking, sustained energy, digestive freedom"
      },
      timeline: "6 months",
      rating: 5
    },
    {
      name: "Jennifer L.",
      location: "Dallas, TX",
      condition: "Hormonal Imbalances",
      quote: "The DUTCH hormone test revealed imbalances that my regular doctor missed completely. Inna's protocol helped regulate my cycles and eliminated the mood swings that were affecting my relationships and work.",
      result: "Balanced hormones naturally",
      beforeAfter: {
        before: "Irregular cycles, severe PMS, mood swings",
        after: "Regular 28-day cycles, stable mood, increased libido"
      },
      timeline: "4 months",
      rating: 5
    },
    {
      name: "Emily T.",
      location: "San Antonio, TX",
      condition: "Digestive & Energy Issues",
      quote: "After years of feeling exhausted and dealing with constant bloating, Inna's comprehensive approach helped identify the root causes of my symptoms. Her personalized protocol transformed my gut health and energy levels completely.",
      result: "Restored digestion and energy",
      beforeAfter: {
        before: "Chronic bloating, low energy, sugar cravings",
        after: "Comfortable digestion, stable energy, no cravings"
      },
      timeline: "5 months",
      rating: 5
    }
  ];

  // Navigation functions with animation
  const nextTestimonial = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setSlideDirection('right');
    setTimeout(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
      setTimeout(() => setIsTransitioning(false), 50);
    }, 300);
  }, [testimonials.length, isTransitioning]);

  const prevTestimonial = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setSlideDirection('left');
    setTimeout(() => {
      setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      setTimeout(() => setIsTransitioning(false), 50);
    }, 300);
  }, [testimonials.length, isTransitioning]);

  const goToTestimonial = useCallback((index: number) => {
    if (isTransitioning || index === activeTestimonial) return;
    setIsTransitioning(true);
    setSlideDirection(index > activeTestimonial ? 'right' : 'left');
    setTimeout(() => {
      setActiveTestimonial(index);
      setTimeout(() => setIsTransitioning(false), 50);
    }, 300);
  }, [activeTestimonial, isTransitioning]);

  // Auto-rotation effect
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(nextTestimonial, 5000); // Change every 5 seconds
      return () => clearInterval(interval);
    }
  }, [nextTestimonial, isPaused]);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative py-24 bg-gradient-to-br from-slate-50 via-white to-emerald-50/20 overflow-hidden" id="testimonials">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-gradient-to-br from-[#41ab5d]/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-gradient-to-tl from-[#41ab5d]/5 to-transparent rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-[#41ab5d]/10 text-[#41ab5d] rounded-full text-sm font-medium mb-6">
            💬 Client Success Stories
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Real Women, <span className="text-[#41ab5d]">Real Results</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover how functional testing and personalized nutrition have transformed the lives of women just like you
          </p>
        </div>

        {/* Main Testimonial Display - Carousel Container */}
        <div className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center text-gray-600 hover:text-[#41ab5d] hover:scale-110 border border-gray-200/50"
            aria-label="Previous testimonial"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextTestimonial}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center text-gray-600 hover:text-[#41ab5d] hover:scale-110 border border-gray-200/50"
            aria-label="Next testimonial"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div
            className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 lg:p-12 mb-12 border border-gray-100/50 overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-all duration-300 ease-in-out ${isTransitioning
                ? slideDirection === 'right'
                  ? 'transform translate-x-full opacity-0'
                  : 'transform -translate-x-full opacity-0'
                : 'transform translate-x-0 opacity-100'
              }`}>
              {/* Client Info & Quote */}
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-[#41ab5d] rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {testimonials[activeTestimonial].name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {testimonials[activeTestimonial].name}
                    </h3>
                    <p className="text-gray-600">{testimonials[activeTestimonial].location}</p>
                    <div className="flex items-center gap-1 mt-1">
                      {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="relative mb-6">
                  <svg className="w-8 h-8 text-[#41ab5d]/20 absolute -top-2 -left-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                  </svg>
                  <blockquote className="text-lg lg:text-xl text-gray-700 leading-relaxed italic pl-6">
                    "{testimonials[activeTestimonial].quote}"
                  </blockquote>
                </div>

                <div className="bg-[#41ab5d]/5 rounded-2xl p-4 border border-[#41ab5d]/10">
                  <div className="flex items-center gap-2 text-[#41ab5d] font-semibold mb-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {testimonials[activeTestimonial].result}
                  </div>
                  <div className="text-sm text-gray-600">
                    Transformation timeline: {testimonials[activeTestimonial].timeline}
                  </div>
                </div>
              </div>

              {/* Before/After Comparison */}
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-100">
                <h4 className="text-lg font-bold text-gray-900 mb-6 text-center">Transformation Journey</h4>

                <div className="space-y-6">
                  <div className="bg-red-50 border border-red-100 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <span className="font-semibold text-red-800">Before</span>
                    </div>
                    <p className="text-red-700 text-sm">{testimonials[activeTestimonial].beforeAfter.before}</p>
                  </div>

                  <div className="flex justify-center">
                    <svg className="w-8 h-8 text-[#41ab5d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>

                  <div className="bg-[#41ab5d]/5 border border-[#41ab5d]/10 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-3 h-3 bg-[#41ab5d] rounded-full"></div>
                      <span className="font-semibold text-[#41ab5d]">After</span>
                    </div>
                    <p className="text-[#41ab5d] text-sm">{testimonials[activeTestimonial].beforeAfter.after}</p>
                  </div>
                </div>

                <div className="text-center mt-6">
                  <div className="inline-flex items-center px-3 py-1 bg-[#41ab5d]/10 text-[#41ab5d] rounded-full text-sm font-medium">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {testimonials[activeTestimonial].condition}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Navigation & Progress Indicators */}
        <div className="flex flex-col items-center gap-6 mb-16">
          {/* Dot Indicators */}
          <div className="flex justify-center gap-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  goToTestimonial(index);
                  setIsPaused(true);
                  setTimeout(() => setIsPaused(false), 3000); // Resume auto-rotation after 3 seconds
                }}
                disabled={isTransitioning}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === activeTestimonial
                    ? 'bg-[#41ab5d] scale-125'
                    : 'bg-gray-300 hover:bg-gray-400'
                  } ${isTransitioning ? 'opacity-50 cursor-not-allowed' : ''}`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Avatar Navigation */}
          <div className="flex justify-center gap-4">
            {testimonials.map((testimonial, index) => (
              <button
                key={index}
                onClick={() => {
                  goToTestimonial(index);
                  setIsPaused(true);
                  setTimeout(() => setIsPaused(false), 3000); // Resume auto-rotation after 3 seconds
                }}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                disabled={isTransitioning}
                className={`group relative transition-all duration-300 ${index === activeTestimonial ? 'scale-110' : 'hover:scale-105'
                  } ${isTransitioning ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-white transition-all duration-300 ${index === activeTestimonial
                    ? 'bg-[#41ab5d] shadow-lg'
                    : 'bg-gray-300 group-hover:bg-gray-400'
                  }`}>
                  {testimonial.name.charAt(0)}
                </div>
                <div className={`absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs font-medium transition-opacity duration-300 ${index === activeTestimonial ? 'opacity-100' : 'opacity-0'
                  }`}>
                  {testimonial.name.split(' ')[0]}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-[#41ab5d] rounded-3xl p-12 text-white shadow-2xl">
            <h3 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Write Your Success Story?
            </h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join hundreds of women who have discovered their root causes and reclaimed their health through functional testing
            </p>
            <Link href="https://calendly.com/inna-ntp/free-15-minutes-discovery-call-via-phone">
              <button className="group bg-gradient-to-r from-[#E88074] to-[#FCAF15] text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl">
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  Start Your Transformation Today
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
