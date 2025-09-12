'use client';

export function HowWeHelp() {
  const steps = [
    {
      number: "01",
      title: "Comprehensive Assessment",
      description: "Deep-dive health history and symptom analysis to understand your unique biochemical patterns and health challenges.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      )
    },
    {
      number: "02", 
      title: "Advanced Functional Testing",
      description: "Cutting-edge lab work: HTMA, GI-MAP, DUTCH hormones, organic acids, and comprehensive nutrient panels to reveal hidden imbalances.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    },
    {
      number: "03",
      title: "Precision Protocol Design",
      description: "Data-driven nutrition plan with targeted therapeutic supplements and lifestyle interventions tailored to your genetic and metabolic profile.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
        </svg>
      )
    },
    {
      number: "04",
      title: "Continuous Optimization",
      description: "Ongoing monitoring, protocol refinements, and expert guidance with regular progress tracking and adjustments for sustained results.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    }
  ];

  return (
    <section className="relative py-24 bg-gradient-to-br from-slate-50 via-white to-[#41ab5d]/5 overflow-hidden" id="how-we-help">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#41ab5d]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#41ab5d]/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-[#41ab5d]/10 text-[#41ab5d] rounded-full text-sm font-medium mb-6">
            🎯 Our Proven Process
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            How We <span className="text-[#41ab5d]">Transform</span> Your Health
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our scientifically-backed 4-phase methodology combines advanced functional testing with precision nutrition 
            to identify and address the root causes of your symptoms—not just mask them.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-[#41ab5d]/20 transform -translate-y-1/2"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12 items-stretch">
            {steps.map((step, index) => (
              <div key={index} className="group relative flex">
                {/* Step Card */}
                <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100/50 group-hover:border-[#41ab5d]/20 flex flex-col w-full">
                  {/* Step Number */}
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#41ab5d] to-[#41ab5d] rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
                      {step.number}
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="text-center mb-6 pt-4">
                    <div className="w-20 h-20 bg-[#41ab5d]/10 rounded-2xl flex items-center justify-center mx-auto shadow-md group-hover:shadow-lg transition-all duration-300 text-[#41ab5d] group-hover:scale-105">
                      {step.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center flex-grow">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#41ab5d] transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {step.description}
                    </p>
                  </div>

                  {/* Hover Glow Effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#41ab5d] to-[#41ab5d] rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                </div>

                {/* Connection Dot for Desktop */}
                <div className="hidden lg:block absolute top-1/2 -right-6 w-4 h-4 bg-[#41ab5d] rounded-full transform -translate-y-1/2 shadow-lg"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Results Preview */}
        <div className="mt-20 bg-[#41ab5d] rounded-3xl p-12 text-white relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative z-10 text-center">
            <h3 className="text-3xl font-bold mb-6">
              What You Can Expect
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="text-4xl font-bold  mb-2">2-4 weeks</div>
                <div className="text-white/80">Initial improvements in energy and digestion</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold  mb-2">3-6 months</div>
                <div className="text-white/80">Significant symptom reduction and vitality</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold  mb-2">6+ months</div>
                <div className="text-white/80">Sustained health transformation</div>
              </div>
            </div>
            <button className="group gradient-bg text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl">
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Start Your Transformation Today
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
