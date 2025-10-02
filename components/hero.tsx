'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export function Hero() {
  const [currentSymptom, setCurrentSymptom] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  const symptoms = [
    'anxiety',
    'fatigue',
    'bloating',
    'brain fog',
    'mood swings',
    'sleep issues',
    'gut problems'
  ];

  // Typewriter effect
  useEffect(() => {
    const currentWord = symptoms[currentSymptom];
    let currentIndex = 0;

    const typeInterval = setInterval(() => {
      if (currentIndex <= currentWord.length) {
        setDisplayText(currentWord.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typeInterval);
        setIsTyping(false);

        // Wait before starting next word
        setTimeout(() => {
          setIsTyping(true);
          setCurrentSymptom((prev) => (prev + 1) % symptoms.length);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, [currentSymptom]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" id="home">
      {/* Sophisticated Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-green-50 to-[#238b45]/20">
        {/* Floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-[#238b45]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-[#238b45]/8 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-[#238b45]/15 rounded-full blur-2xl animate-pulse delay-500"></div>

        {/* Animated particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-[#238b45]/20 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-green-50/20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 pt-28 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-[#238b45]/10 border border-[#238b45]/20 rounded-full backdrop-blur-sm">
                <span className="highlighted-symptom uppercase text-sm font-medium">✨ Certified nutritional Therapy practitioner</span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                <span className="text-gray-900 block mb-2">Root-Cause</span>
                <span className="text-gray-900 block mb-2">Nutrition for</span>
                <span className="highlighted-symptom lg:text-7xl text-5xl block min-h-[1.2em]">
                  {displayText}
                  <span className={`inline-block w-1 h-12 bg-[#E88074] ml-2 ${isTyping ? 'animate-pulse' : 'opacity-0'}`}></span>
                </span>
              </h1>

              <p className="text-xl text-gray-700 leading-relaxed max-w-xl">
                Discover the root causes of your symptoms through advanced functional testing and personalized nutrition protocols designed for lasting transformation.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group relative px-8 py-4 bg-[#238b45] text-white font-semibold rounded-2xl transition-all duration-300 hover:bg-[#238b45]/90 hover:scale-105 hover:shadow-2xl hover:shadow-[#238b45]/25">
                <span className="relative z-10 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  Start Free Consultation
                </span>
                <div className="absolute inset-0 bg-[#238b45]/90 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 pt-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#238b45]/20 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#238b45]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <div>
                  <div className="text-gray-900 font-semibold">Science-Based</div>
                  <div className="text-gray-600 text-sm">Evidence-Driven</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#238b45]/20 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#238b45]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <div className="text-gray-900 font-semibold">Fast Results</div>
                  <div className="text-gray-600 text-sm">30-Day Protocol</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative">
            <div className="relative z-10">
              {/* Main image container */}
              <div className="relative group">
                <div className="absolute -inset-4 bg-[#238b45] rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                <div className="relative bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50">
                  <img
                    src="/Inna.jpg"
                    alt="Inna, Functional Nutritionist"
                    width={400}
                    height={400}
                    className="rounded-2xl w-full"
                  />

                  {/* Floating stats */}
                  <div className="absolute -top-4 -right-4 bg-[#238b45] text-white px-4 py-2 rounded-xl font-bold shadow-xl">
                    <div className="text-2xl">92%</div>
                    <div className="text-xs opacity-90">Success Rate</div>
                  </div>

                  <div className="absolute -bottom-4 -left-4 gradient-bg text-white px-4 py-2 rounded-xl font-bold shadow-xl">
                    <div className="text-2xl">500+</div>
                    <div className="text-xs opacity-90">Clients Helped</div>
                  </div>
                </div>
              </div>

              {/* Certification badges */}
              <div className="flex justify-center gap-4 mt-8">
                <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-primary/70">
                  <span className="text-primary text-sm font-medium">NTP Certified</span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-primary/70">
                  <span className="text-primary text-sm font-medium">10+ Years Experience</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-10px) rotate(1deg); }
          66% { transform: translateY(5px) rotate(-1deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}