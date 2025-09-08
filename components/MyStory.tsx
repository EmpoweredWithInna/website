'use client';

import Image from 'next/image';

export function MyStory() {

  return (
    <section className="relative py-24 bg-gradient-to-br from-slate-50 via-white to-[#256439]/5 overflow-hidden" id="about">
      {/* Background Elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#256439]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-[#256439]/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-[#256439]/10 text-[#256439] rounded-full text-sm font-medium mb-6">
            👩‍⚕️ Meet Your Practitioner
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            My Journey to <span className="text-[#256439]">Functional Healing</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Image Side */}
          <div className="relative order-2 lg:order-1">
            <div className="relative group">
              {/* Main Image Container */}
              <div className="relative bg-[#256439]/5 rounded-3xl p-8 shadow-2xl">
                <img
                  src="/Inna.jpg"
                  alt="Inna Topiler, Functional Nutritionist"
                  width={400}
                  height={500}
                  className="rounded-2xl w-full shadow-xl"
                />
                
                {/* Floating Achievement Badges */}
                <div className="absolute -top-4 -right-4 bg-[#256439] text-white px-4 py-2 rounded-xl font-bold shadow-xl">
                  <div className="text-lg">500+</div>
                  <div className="text-xs opacity-90">Clients</div>
                </div>
                
                <div className="absolute -bottom-4 -left-4 gradient-bg text-white px-4 py-2 rounded-xl font-bold shadow-xl">
                  <div className="text-lg">FDN-P</div>
                  <div className="text-xs opacity-90">Certified</div>
                </div>
              </div>

              {/* Background Glow */}
              <div className="absolute -inset-4 bg-[#256439] rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
            </div>
          </div>

          {/* Content Side */}
          <div className="order-1 lg:order-2">
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="text-xl font-medium text-gray-900">
                <span className="text-[#256439] font-bold">Hi, I'm Inna,</span> and I know exactly what it feels like to have your symptoms dismissed, your concerns minimized, and your hope slowly fading.
              </p>

              <p className="text-lg">
                My journey into functional nutrition wasn't planned—it was born out of desperation. After years of debilitating fatigue, digestive issues, and hormonal chaos, I'd seen countless doctors who told me my labs were "normal" and my symptoms were "just stress."
              </p>

              <p className="text-lg">
                Everything changed when I discovered functional testing. For the first time, I had real answers. HTMA revealed severe mineral imbalances. GI-MAP showed hidden infections. DUTCH testing uncovered hormone disruption that standard labs had missed completely.
              </p>

              <p className="text-lg">
                Within months of addressing these root causes, I felt like myself again. The transformation was so profound that I knew I had to dedicate my life to helping other women experience the same breakthrough.
              </p>

              <div className="bg-[#256439]/5 rounded-2xl p-6 border border-[#256439]/10">
                <p className="text-lg font-medium text-[#256439]">
                  "I don't just treat symptoms—I uncover the hidden imbalances that create them. Because you deserve answers, not band-aids."
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8">
              <button className="group gradient-bg text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl">
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  Start Your Journey With Me
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
