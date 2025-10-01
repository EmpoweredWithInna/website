'use client';

import Image from 'next/image';
import Link from 'next/link';

export function MyStory() {

  return (
    <section className="relative py-24 bg-gradient-to-br from-slate-50 via-white to-[#41ab5d]/5 overflow-hidden" id="about">
      {/* Background Elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#41ab5d]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-[#41ab5d]/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-[#41ab5d]/10 text-[#41ab5d] rounded-full text-sm font-medium mb-6">
            👩‍⚕️ Meet Your Practitioner
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            My Journey to <span className="text-[#41ab5d]">Functional Healing</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Image Side */}
          <div className="relative order-2 lg:order-1">
            <div className="relative group">
              {/* Main Image Container */}
              <div className="relative bg-[#41ab5d]/5 rounded-3xl p-8 shadow-2xl">
                <img
                  src="/Inna_image_standing.png"
                  alt="Inna Topiler, Functional Nutritionist"
                  width={400}
                  height={500}
                  className="rounded-2xl w-full shadow-xl"
                />

                {/* Floating Achievement Badges */}
                <div className="absolute -top-4 -right-4 bg-[#41ab5d] text-white px-4 py-2 rounded-xl font-bold shadow-xl">
                  <div className="text-lg">500+</div>
                  <div className="text-xs opacity-90">Clients</div>
                </div>

                <div className="absolute -bottom-4 -left-4 gradient-bg text-white px-4 py-2 rounded-xl font-bold shadow-xl">
                  <div className="text-lg">NTP</div>
                  <div className="text-xs opacity-90">Certified</div>
                </div>
              </div>

              {/* Background Glow */}
              <div className="absolute -inset-4 bg-[#41ab5d] rounded-3xl blur-2xl opacity-10 group-hover:opacity-15 transition-opacity duration-500 -z-10"></div>
            </div>
          </div>

          {/* Content Side */}
          <div className="order-1 lg:order-2">
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="text-xl font-medium text-gray-900">
                <span className="text-[#41ab5d] font-bold">Our journey began when my daughter Nicole was 11 and complained her heart hurt.</span> Specialists found nothing, but by 14, she battled depression, and was placed on psychiatric medications—nine in one year—with no relief. At 15 AND 16, she attempted suicide. We felt hopeless and helpless until a functional medicine doctor in Austin identified the real issues: chronic Lyme and mold illness causing brain inflammation.
              </p>

              <p className="text-lg">
                Through targeted protocols, Nicole regained her health and is now thriving, studying psychology to help others. Along the way, I realized I had to care for myself too, which led me to nutrition school. That knowledge allowed me to advocate for Nicole and opened my eyes to how lifestyle and nutrition shape health.
              </p>

              <div className="bg-[#41ab5d]/5 rounded-2xl p-6 border border-[#41ab5d]/10">
                <p className="text-lg font-medium text-[#41ab5d]">
                  "Today, I empower women in their 40s–60s who struggle with fatigue, gut issues, brain fog, and low confidence, guiding them with root-cause testing and personalized nutrition so they can reclaim energy, clarity, and vibrant living."
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8">
              <Link target="_blank" href="https://calendly.com/inna-ntp/free-15-minutes-discovery-call-via-phone">
                <button className="group gradient-bg text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl">
                  <span className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    Start Your Journey With Me
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
