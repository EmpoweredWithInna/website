'use client';

import Link from "next/link";

export function Services() {
  const orderedServices = [
    {
      title: "1:1 Coaching Programs",
      subtitle: "Personalized Transformation Programs",
      description: "Personalized 3-12 month programs featuring weekly sessions, custom nutrition plans, and ongoing support for sustainable transformation.",
      features: [
        "Weekly virtual consultations",
        "Personalized meal plans",
        "Supplement protocols",
        "Progress tracking & adjustments",
        "24/7 support portal access"
      ],
      perfectFor: "Individuals seeking personalized, one-on-one guidance",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      gradient: "from-[#41ab5d] to-[#41ab5d]",
      bgGradient: "from-[#41ab5d]/5 to-[#41ab5d]/10"
    },
    {
      title: "Group Program – RESTART® Sugar Detox",
      subtitle: "Reset Your Relationship with Sugar",
      description: "A guided 5-week small-group program designed to help you eliminate sugar cravings, balance energy, and create sustainable eating habits. Enjoy community support and expert coaching while you learn how food impacts your body and mood.",
      features: [
        "Weekly group coaching sessions",
        "Educational modules on nutrition and sugar's effects",
        "Whole-food meal guidance",
        "Accountability and community support",
        "Recipes and shopping lists included"
      ],
      perfectFor: "Individuals looking to kickstart their health journey in a supportive, group setting.",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      gradient: "from-[#41ab5d] to-[#41ab5d]",
      bgGradient: "from-[#41ab5d]/5 to-[#41ab5d]/10",
      cta: "Join the Next Group",
      popular: true
    },
    {
      title: "Functional Lab Testing",
      subtitle: "Comprehensive Root-Cause Analysis",
      description: "Comprehensive testing packages including GI-MAP stool analysis and DUTCH hormone panels to uncover root causes.",
      features: [
        "GI-MAP comprehensive stool analysis",
        "DUTCH hormone testing",
        "Detailed results interpretation",
        "Personalized action plan",
        "Follow-up consultations included"
      ],
      perfectFor: "Those seeking to understand the root causes of their health issues",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      gradient: "from-[#41ab5d] to-[#41ab5d]",
      bgGradient: "from-[#41ab5d]/5 to-[#41ab5d]/10"
    }
  ];


  return (
    <section className="relative py-24 bg-gradient-to-br from-gray-50 via-white to-slate-50 overflow-hidden" id="services">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#41ab5d]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#41ab5d]/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-[#41ab5d]/10 text-[#41ab5d] rounded-full text-sm font-medium mb-6">
            🌿 Services
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Choose Your <span className="text-[#41ab5d]">Health Journey</span>
          </h2>
          <p className="max-w-3xl mx-auto text-xl text-gray-600">
            Evidence-based programs designed to address your unique health challenges through advanced functional testing and personalized nutrition protocols.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 items-stretch">
          {orderedServices.map((service, index) => (
            <div key={index} className={`relative rounded-2xl p-8 bg-white shadow-lg transform hover:-translate-y-2 transition-transform duration-300 border-t-4 ${service.popular ? 'border-[#41ab5d]' : 'border-transparent'} flex flex-col`}>
              {service.popular && (
                <div className="absolute top-0 right-1/2 transform translate-x-1/2 -translate-y-1/2">
                  <div className="bg-yellow-400 text-gray-800 text-xs font-bold px-4 py-1 rounded-full shadow-md whitespace-nowrap">
                    Most Popular
                  </div>
                </div>
              )}
              <div className={`bg-gradient-to-br ${service.bgGradient} p-8 text-center -m-4 mb-6 rounded-t-lg`}>
                <div className={`w-20 h-20 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 font-medium mb-1">
                  {service.subtitle}
                </p>
              </div>

              <div className="flex-grow flex flex-col">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="mb-6">
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <svg className="w-5 h-5 text-[#41ab5d] mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-8 p-4 bg-gray-50 rounded-xl border border-gray-100 mt-auto">
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm">Perfect for:</h4>
                  <p className="text-gray-600 text-sm">{service.perfectFor}</p>
                </div>

                <Link href="https://calendly.com/inna-ntp/free-15-minutes-discovery-call-via-phone" className="w-full">
                  <button className="w-full py-4 px-6 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl border-2 border-gray-300 text-gray-700 hover:border-[#41ab5d] hover:text-[#41ab5d] hover:bg-[#41ab5d]/5">
                    <span className="flex items-center justify-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                      {service.cta || 'Get Started Today'}
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          ))}
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
            <Link target="_blank" href="https://calendly.com/inna-ntp/free-15-minutes-discovery-call-via-phone">
              <button className="group gradient-bg text-white px-10 py-5 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl">
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

            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
