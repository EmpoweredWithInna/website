'use client';

export function Services() {
  const services = [
    {
      title: "Coaching",
      subtitle: "Evidence-Based Habit Transformation for Lasting Results",
      description: "Discover what's really causing your fatigue, anxiety, and gut issues through advanced functional testing—then build sustainable habits that address the root causes. No guesswork, no generic protocols, just personalized coaching based on YOUR body's unique needs.",
      features: [
        "Comprehensive functional lab testing (GI-MAP stool analysis, DUTCH hormone panels)",
        "Personal health roadmap based on test results",
        "Weekly coaching sessions on habit formation & behavior change",
        "Root-cause identification for chronic symptoms",
        "Sustainable lifestyle modifications",
        "Progress tracking without overwhelming protocols"
      ],
      perfectFor: "Women 30-55 who want answers first, then sustainable changes",
      popular: false,
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      gradient: "from-green-700 to-emerald-700",
      bgGradient: "from-green-50 to-emerald-50"
    },
    {
      title: "Group Coaching",
      subtitle: "Community Support for Midlife Health Challenges",
      description: "Join other women navigating perimenopause, chronic fatigue, and gut issues in a supportive group setting. Share experiences, learn together, and build lasting habits with expert guidance and peer accountability.",
      features: [
        "Bi-weekly group coaching calls (maximum 8 participants)",
        "Shared functional testing insights & interpretation",
        "Group habit-building challenges",
        "Private online community for 24/7 support",
        "Expert guest sessions (sleep specialists, stress management)",
        "Personalized action plans within group framework"
      ],
      perfectFor: "Women seeking community support and cost-effective transformation",
      popular: true,
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      gradient: "from-emerald-500 to-teal-500",
      bgGradient: "from-emerald-50 to-teal-50"
    },
    {
      title: "Wellness Programs",
      subtitle: "Comprehensive Root-Cause Transformation",
      description: "Our most intensive program for women ready to completely transform their energy, mood, and gut health. Combines advanced testing, targeted supplementation, personalized nutrition, and ongoing support for maximum results.",
      features: [
        "Complete functional testing panel (GI-MAP, DUTCH, micronutrient analysis)",
        "Personalized supplement protocols with practitioner-grade products",
        "Custom nutrition plans based on your unique imbalances",
        "Weekly 1:1 sessions with trauma-informed care",
        "Health progress tracking with objective metrics",
        "24/7 support portal and emergency guidance",
        "Mind-gut resilience coaching using polyvagal theory"
      ],
      perfectFor: "Women 40+ with multiple symptoms seeking comprehensive solutions",
      popular: false,
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      gradient: "from-green-800 to-emerald-800",
      bgGradient: "from-green-50 to-emerald-50"
    }
  ];

  return (
    <section className="relative py-24 bg-gradient-to-br from-gray-50 via-white to-slate-50 overflow-hidden" id="services">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-100/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-100/20 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium mb-6">
            🌿 Services
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Choose Your <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Health Journey</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Evidence-based programs designed to address your unique health challenges through advanced functional testing and personalized nutrition protocols.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`group relative ${service.popular ? 'lg:scale-105 lg:-mt-4' : ''}`}
            >
              {/* Popular Badge */}
              {service.popular && (
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-xl">
                    ⭐ MOST POPULAR
                  </div>
                </div>
              )}

              {/* Card */}
              <div className={`relative bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100/50 overflow-hidden ${
                service.popular ? 'ring-2 ring-emerald-200' : ''
              }`}>
                {/* Header Section */}
                <div className={`bg-gradient-to-br ${service.bgGradient} p-8 text-center relative`}>
                  {/* Icon */}
                  <div className={`w-20 h-20 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 font-medium mb-4">
                    {service.subtitle}
                  </p>
                </div>

                {/* Content Section */}
                <div className="p-8">
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <svg className="w-5 h-5 text-emerald-500 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Perfect For */}
                  <div className="mb-8 p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">Perfect for:</h4>
                    <p className="text-gray-600 text-sm">{service.perfectFor}</p>
                  </div>

                  {/* CTA Button */}
                  <button className={`w-full py-4 px-6 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl ${
                    service.popular
                      ? `bg-gradient-to-r ${service.gradient} text-white hover:shadow-emerald-500/25`
                      : `border-2 border-gray-300 text-gray-700 hover:border-emerald-500 hover:text-emerald-600 hover:bg-emerald-50`
                  }`}>
                    <span className="flex items-center justify-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                      Get Started Today
                    </span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Why Functional Testing Section */}
        <div className="bg-gradient-to-r from-green-800 to-emerald-800 rounded-3xl p-12 text-white text-center relative overflow-hidden mb-16">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative z-10">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6-6L9 3l-2 2-4-4" />
              </svg>
            </div>
            <h3 className="text-3xl font-bold mb-4">
              Why Functional Testing Changes Everything
            </h3>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto mb-6">
              <strong>92% of our clients find root causes where standard blood work appears "normal."</strong> Stop guessing—start healing with data-driven solutions for midlife wellness challenges.
            </p>
            <div className="bg-white/10 rounded-2xl p-6 max-w-4xl mx-auto">
              <p className="text-emerald-100 text-lg">
                <strong>All Programs Include:</strong> HIPAA-compliant virtual care • Science-backed protocols • Certified FDN-P expertise • Specialized focus on gut-brain axis
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-xl border border-gray-100/50 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Start Your Transformation?
            </h3>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Schedule a complimentary consultation to discuss your health goals and find the perfect program for your needs.
            </p>
            <button className="group bg-gradient-to-r from-green-700 to-emerald-700 text-white px-10 py-5 rounded-2xl font-semibold text-lg transition-all duration-300 hover:from-green-600 hover:to-emerald-600 hover:scale-105 shadow-xl hover:shadow-2xl">
              <span className="flex items-center gap-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Get Started Today
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
