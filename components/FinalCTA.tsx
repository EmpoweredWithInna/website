'use client';

import { useState, useEffect } from 'react';
import { downloadMealPlanGuide } from '../utils/downloadUtils';

export function FinalCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('final-cta');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="final-cta"
      className="relative py-24 bg-gradient-to-br from-white via-primary/5 to-primary/10 text-gray-900 overflow-hidden"
    >
      {/* Sophisticated Background Elements */}
      <div className="absolute inset-0">
        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-primary/10 to-primary/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-primary/8 to-primary/12 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        {/* Geometric patterns */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23059669' fill-opacity='0.03'%3E%3Cpath d='M50 50m-20 0a20 20 0 1 1 40 0a20 20 0 1 1 -40 0'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '100px 100px'
          }} />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="inline-flex items-center bg-primary/10 border border-primary/20 text-primary px-6 py-3 rounded-full text-sm font-semibold mb-8">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Your Transformation Awaits
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-bold mb-8 leading-tight">
            Ready to 
            <span className="text-primary"> Transform</span>
            <br />Your Health?
          </h2>
          
          <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
            Stop guessing and start healing. Join hundreds of women who have discovered 
            the root causes of their symptoms and reclaimed their energy, vitality, and joy.
          </p>
        </div>

        {/* Main CTA Section */}
        <div className={`transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="bg-white/60 backdrop-blur-lg border border-primary/10 rounded-3xl p-12 mb-12 shadow-xl">
            <div className="text-center">
              <h3 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-900">
                Start Your Healing Journey Today
              </h3>
              <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
                Schedule your free 15-minute discovery call to learn how functional testing 
                can reveal the root causes of your symptoms and create your personalized path to wellness.
              </p>
            </div>
            
            <div className="flex flex-col lg:flex-row gap-6 justify-center items-center mb-8">
              <button className="group bg-primary text-white px-12 py-5 rounded-2xl font-bold text-xl transition-all duration-300 hover:bg-primary/90 hover:scale-105 shadow-2xl hover:shadow-primary/25">
                <span className="flex items-center">
                  <svg className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  Schedule Free Discovery Call
                </span>
              </button>
              
              <button 
                onClick={downloadMealPlanGuide}
                className="group bg-white/80 backdrop-blur-sm text-primary border-2 border-primary/20 px-12 py-5 rounded-2xl font-bold text-xl transition-all duration-300 hover:bg-white hover:scale-105 shadow-xl"
              >
                <span className="flex items-center">
                  <svg className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                  </svg>
                  Download Free Guide
                </span>
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="grid md:grid-cols-3 gap-8 text-center text-gray-700">
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                No obligation • 100% free
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                Privacy protected
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                15-minute call
              </div>
            </div>
          </div>
        </div>

        {/* Urgency Section */}
        <div className={`transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="bg-primary/5 p-6 rounded-2xl backdrop-blur-sm border border-primary/10">
            <div className="text-center">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-3 text-gray-900">Limited Availability</h4>
                  <p className="text-gray-600">Exclusive spots available for personalized health transformation programs.</p>
                </div>
              </div>
              <p className="text-lg mb-4 text-gray-700">
                Due to the personalized nature of our programs and commitment to quality care, 
                we maintain a limited client roster. Don't wait - your health transformation starts with one conversation.
              </p>
            </div>
          </div>
        </div>

        {/* Final Guarantee */}
        <div className={`text-center transition-all  duration-1000 delay-900 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="inline-flex mt-6 items-center bg-white/80 backdrop-blur-sm border border-primary/20 rounded-2xl px-8 py-6 shadow-lg">
            <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mr-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div className="text-left">
              <div className="font-bold text-xl mb-1 text-gray-900">100% Satisfaction Guarantee</div>
              <div className="text-gray-600">Risk-free discovery call • No pressure • No obligation</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
