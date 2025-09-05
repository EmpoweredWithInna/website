'use client';

import Image from 'next/image';

export function MyStory() {
  const milestones = [
    { year: "2018", achievement: "Discovered Functional Medicine" },
    { year: "2019", achievement: "Became Certified FDN-P" },
    { year: "2020", achievement: "Helped First 100 Clients" },
    { year: "2024", achievement: "500+ Women Transformed" }
  ];

  const credentials = [
    {
      title: "Certified FDN-P",
      description: "Functional Diagnostic Nutrition Practitioner",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      )
    },
    {
      title: "Advanced Lab Training",
      description: "HTMA, GI-MAP, DUTCH Interpretation",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    },
    {
      title: "Holistic Nutrition",
      description: "Root-Cause Approach Specialist",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      title: "Continuing Education",
      description: "Latest Research & Protocols",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    }
  ];

  return (
    <section className="relative py-24 bg-gradient-to-br from-slate-50 via-white to-emerald-50/10 overflow-hidden" id="about">
      {/* Background Elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-bl from-emerald-100/30 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-gradient-to-tr from-teal-100/20 to-transparent rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium mb-6">
            👩‍⚕️ Meet Your Practitioner
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            My Journey to <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Functional Healing</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Image Side */}
          <div className="relative order-2 lg:order-1">
            <div className="relative group">
              {/* Main Image Container */}
              <div className="relative bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-8 shadow-2xl">
                <img
                  src="/Inna.jpg"
                  alt="Inna Topiler, Functional Nutritionist"
                  width={400}
                  height={500}
                  className="rounded-2xl w-full shadow-xl"
                />
                
                {/* Floating Achievement Badges */}
                <div className="absolute -top-4 -right-4 bg-green-700 text-white px-4 py-2 rounded-xl font-bold shadow-xl">
                  <div className="text-lg">500+</div>
                  <div className="text-xs opacity-90">Clients</div>
                </div>
                
                <div className="absolute -bottom-4 -left-4 bg-teal-500 text-white px-4 py-2 rounded-xl font-bold shadow-xl">
                  <div className="text-lg">FDN-P</div>
                  <div className="text-xs opacity-90">Certified</div>
                </div>
              </div>

              {/* Background Glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
            </div>
          </div>

          {/* Content Side */}
          <div className="order-1 lg:order-2">
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="text-xl font-medium text-gray-900">
                <span className="text-emerald-600 font-bold">Hi, I'm Inna Topiler,</span> and I know exactly what it feels like to have your symptoms dismissed, your concerns minimized, and your hope slowly fading.
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

              <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-6 border border-emerald-100">
                <p className="text-lg font-medium text-emerald-800">
                  "I don't just treat symptoms—I uncover the hidden imbalances that create them. Because you deserve answers, not band-aids."
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8">
              <button className="group bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:from-emerald-400 hover:to-teal-400 hover:scale-105 shadow-xl hover:shadow-2xl">
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

        {/* Journey Timeline */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">My Journey Timeline</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((milestone, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1 border border-gray-100">
                  <div className="text-3xl font-bold text-emerald-600 mb-2">{milestone.year}</div>
                  <div className="text-gray-700 font-medium">{milestone.achievement}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Credentials */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-xl border border-gray-100/50">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Credentials & Expertise</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {credentials.map((credential, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6 hover:from-emerald-100 hover:to-teal-100 transition-all duration-300 border border-emerald-200/50">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 transition-transform duration-300">
                    {credential.icon}
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">{credential.title}</h4>
                  <p className="text-sm text-gray-600">{credential.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
