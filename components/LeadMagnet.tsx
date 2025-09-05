'use client';

import { useState, useEffect } from 'react';

export function LeadMagnet() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const leadMagnets = [
    {
      title: "Root-Cause Symptom Tracker",
      subtitle: "Connect the Dots Between Your Symptoms",
      description: "Discover hidden patterns and connections that your doctor might miss with this comprehensive tracking system.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
      benefits: [
        "Comprehensive symptom tracking template",
        "Food and mood connection guide", 
        "Red flag symptoms checklist",
        "When to seek functional testing guide",
        "Bonus: 5 quick wins for better digestion"
      ],
      value: "$47 Value - Yours FREE"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
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

  return (
    <>
      {/* Trigger Button - Fixed Position */}
      <div className="fixed bottom-8 right-8 z-50">
        <button
          onClick={() => setIsOpen(true)}
          className="group bg-gradient-to-r from-emerald-500 to-teal-500 text-white p-4 rounded-2xl shadow-2xl hover:from-emerald-400 hover:to-teal-400 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
        >
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
              </svg>
            </div>
            <div className="hidden sm:block text-left">
              <div className="font-bold text-sm">Free Guide</div>
              <div className="text-xs opacity-90">Symptom Tracker</div>
            </div>
          </div>
          
          {/* Pulse animation */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 animate-ping opacity-20"></div>
        </button>
      </div>

      {/* Modal Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className={`bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[95vh] overflow-y-auto relative transition-all duration-500 ${
            isVisible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-8'
          }`}>
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors z-10 group"
            >
              <svg className="w-5 h-5 text-gray-600 group-hover:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {!isSubmitted ? (
              <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
                {/* Left Side - Visual/Benefits */}
                <div className="bg-gradient-to-br from-emerald-500 to-teal-500 p-8 lg:p-12 text-white rounded-l-3xl lg:rounded-r-none rounded-t-3xl lg:rounded-t-3xl">
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
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Get Instant Access
                    </h3>
                    <p className="text-gray-600">
                      Enter your email below and I'll send you the complete symptom tracker immediately.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-3">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="your.email@example.com"
                        className="w-full px-6 py-4 rounded-2xl border-2 border-gray-200 focus:border-emerald-400 focus:outline-none text-gray-800 placeholder-gray-500 transition-colors duration-300"
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:from-emerald-400 hover:to-teal-400 hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                      Send Me The Free Tracker
                    </button>

                    <div className="text-center">
                      <p className="text-xs text-gray-500 mb-4">
                        🔒 Your privacy is protected. No spam, ever. Unsubscribe with one click.
                      </p>
                    </div>
                  </form>

                  {/* Social Proof */}
                  <div className="mt-8 pt-8 border-t border-gray-200">
                    <div className="text-center">
                      <p className="text-sm text-gray-600 mb-4">Trusted by 5,000+ women worldwide</p>
                      <div className="flex justify-center items-center space-x-6">
                        <div className="flex -space-x-2">
                          {[1, 2, 3, 4, 5].map((i) => (
                            <div key={i} className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-full border-2 border-white shadow-md"></div>
                          ))}
                        </div>
                        <div className="flex items-center">
                          <div className="flex text-yellow-400 mr-2">
                            {[1, 2, 3, 4, 5].map((i) => (
                              <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                              </svg>
                            ))}
                          </div>
                          <span className="text-gray-600 text-sm font-medium">4.9/5 rating</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="p-12 text-center min-h-[400px] flex flex-col justify-center">
                <div className="w-24 h-24 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-8">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Success! 🎉</h2>
                <p className="text-xl text-gray-600 mb-4">
                  Your Root-Cause Symptom Tracker is on its way!
                </p>
                <p className="text-gray-500 mb-8">
                  Check your email (and spam folder) for your free download link.
                </p>
                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 max-w-md mx-auto">
                  <p className="text-emerald-800 font-medium">
                    💡 Pro Tip: Add our email to your contacts to ensure you receive all our health insights!
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
