'use client';

import { useState, useEffect } from 'react';
import { downloadMealPlanGuide } from '../utils/downloadUtils';

interface LeadMagnetProps {
  autoOpen?: boolean;
}

export function LeadMagnet({ autoOpen = false }: LeadMagnetProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const leadMagnets = [
    {
      title: "The Gut-Brain Reset: 7-Day Meal Plan",
      subtitle: "Nourish Your Gut. Balance Your Mind.",
      description: "Discover how simple food swaps can reduce inflammation, support digestion, and boost emotional wellness with this 7-day, gut-friendly plan.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      benefits: [
        "7-day step-by-step gut-friendly meal plan",
        "Recipes packed with prebiotics, probiotics & brain-supporting nutrients", 
        "Easy shopping list for stress-free prep",
        "Tips to boost mood and energy naturally",
        "Bonus: Quick lifestyle hacks for better digestion"
      ],
      value: "💡 $47 Value – Yours FREE"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    
    // Trigger the download immediately after form submission
    downloadMealPlanGuide();
    
    setTimeout(() => {
      setIsOpen(false);
      setIsSubmitted(false);
      setEmail('');
    }, 3000);
  };

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    }
  }, [isOpen]);

  // Auto-open popup when component mounts if autoOpen is true
  useEffect(() => {
    if (autoOpen) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 15000); // Show popup after 15 seconds
      
      return () => clearTimeout(timer);
    }
  }, [autoOpen]);

  return (
    <>
      {/* Modal Overlay - No trigger button needed for auto-popup */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className={`bg-white shadow-2xl max-w-4xl w-full max-h-[95vh] relative transition-all duration-500 ${
            isVisible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-8'
          }`}>
            {/* Close Button - Fixed outside scrollable area */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors z-20 group"
            >
              <svg className="w-5 h-5 text-gray-600 group-hover:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="max-h-[95vh] overflow-y-auto">
              {!isSubmitted ? (
                <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
                  {/* Left Side - Visual/Benefits */}
                  <div className="bg-gradient-to-br from-[#41ab5d] to-[#41ab5d] p-8 lg:p-12 text-white ">
                    <div className="h-full flex flex-col justify-center">
                      <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                        {leadMagnets[0].icon}
                      </div>
                      
                      <h2 className="text-3xl lg:text-4xl font-bold mb-4 leading-tight">
                        {leadMagnets[0].title}
                      </h2>
                      
                      <h3 className="text-xl mb-6 opacity-90">
                        {leadMagnets[0].subtitle}
                      </h3>
                      
                      <p className="text-lg mb-8 opacity-90 leading-relaxed">
                        {leadMagnets[0].description}
                      </p>

                      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-6">
                        <h4 className="text-lg font-bold mb-4">What's Inside:</h4>
                        <ul className="space-y-3">
                          {leadMagnets[0].benefits.map((benefit, index) => (
                            <li key={index} className="flex items-start">
                              <svg className="w-5 h-5 text-white mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              <span className="text-white/90">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-white/20 rounded-xl px-4 py-2 inline-block">
                        <span className="font-bold text-sm">{leadMagnets[0].value}</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Side - Form */}
                  <div className="p-8 lg:p-12 flex flex-col justify-center rounded-r-3xl lg:rounded-l-none rounded-b-3xl lg:rounded-b-3xl bg-white">
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        Get Instant Access
                      </h3>
                      <p className="text-gray-600">
                        Enter your email below and I'll send you the full 7-day gut-brain reset meal plan right away.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#41ab5d] focus:border-transparent transition-all duration-200 text-gray-900"
                          placeholder="Enter your email address"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-[#41ab5d] to-[#41ab5d] text-white py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:from-[#1a7a39] hover:to-[#41ab5d] hover:scale-105 shadow-lg hover:shadow-xl"
                      >
                        Send Me The Free Guide
                      </button>

                      <p className="text-xs text-gray-500 text-center mt-4">
                        🔒 Your privacy is protected. No spam, ever. Unsubscribe anytime.
                      </p>
                    </form>
                  </div>
                </div>
              ) : (
                <div className="p-12 text-center min-h-[400px] flex flex-col justify-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-[#41ab5d] to-[#41ab5d] rounded-full flex items-center justify-center mx-auto mb-8">
                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h2 className="text-4xl font-bold text-gray-900 mb-6">Success! 🎉</h2>
                  <p className="text-xl text-gray-600 mb-4">
                    Your 7-Day Gut-Brain Reset Meal Plan is on its way!
                  </p>
                  <p className="text-gray-500 mb-8">
                    Check your email (and spam folder) for your free download link.
                  </p>
                  <div className="bg-[#41ab5d]/5 border border-[#41ab5d]/20 rounded-2xl p-6 max-w-md mx-auto">
                    <p className="text-[#41ab5d] font-medium">
                      💡 Pro Tip: Add our email to your contacts to ensure you receive all health insights!
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
