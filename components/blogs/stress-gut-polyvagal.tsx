'use client';

import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

export default function StressGutPolyvagal() {
  return (
    <>
      <Head>
        <title>The Hidden Link Between Stress & Gut Issues (Polyvagal Theory Explained) | Empowered Nutrition with Inna</title>
        <meta name="description" content="Explore the science behind stress and gut health through Polyvagal Theory. Learn tools to restore balance and heal your nervous system." />
      </Head>
      <div className="min-h-screen bg-white text-gray-800 pt-32">

        {/* Breadcrumbs */}
        <nav className="bg-gray-50 border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-4 py-4">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Link href="/" className="hover:text-[#41ab5d] transition-colors">Home</Link>
              <span>&gt;</span>
              <Link href="/blog" className="hover:text-[#41ab5d] transition-colors">Blog</Link>
              <span>&gt;</span>
              <span className="text-gray-900">The Hidden Link Between Stress & Gut Issues</span>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="max-w-4xl mx-auto px-4 py-8">
          {/* Social Share */}
          <div className="flex justify-end mb-4">
            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-600 font-medium">Share:</span>
              <div className="flex gap-2">
                <button
                  onClick={() => {
                    const url = window.location.href;
                    const text = 'The Hidden Link Between Stress & Gut Issues (Polyvagal Theory Explained)';
                    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank', 'width=600,height=400');
                  }}
                  className="flex items-center justify-center w-10 h-10 bg-[#1877F2] hover:bg-[#166FE5] text-white rounded-full transition-colors duration-200 shadow-md hover:shadow-lg"
                  title="Share on Facebook"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </button>
                <button
                  onClick={() => {
                    const url = window.location.href;
                    const text = 'The Hidden Link Between Stress & Gut Issues (Polyvagal Theory Explained)';
                    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank', 'width=600,height=400');
                  }}
                  className="flex items-center justify-center w-10 h-10 bg-[#0A66C2] hover:bg-[#004182] text-white rounded-full transition-colors duration-200 shadow-md hover:shadow-lg"
                  title="Share on LinkedIn"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </button>
                <button
                  onClick={() => {
                    const url = window.location.href;
                    const text = 'The Hidden Link Between Stress & Gut Issues (Polyvagal Theory Explained)';
                    // Instagram doesn't have a direct share URL, so we copy the link
                    navigator.clipboard.writeText(`${text} ${url}`);
                    alert('Link copied for Instagram! You can now paste it in your Instagram story or post.');
                  }}
                  className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-[#E4405F] to-[#FCAF45] hover:from-[#D73447] hover:to-[#F09433] text-white rounded-full transition-all duration-200 shadow-md hover:shadow-lg"
                  title="Share on Instagram"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </button>
                <button
                  onClick={() => {
                    const url = window.location.href;
                    const text = 'The Hidden Link Between Stress & Gut Issues (Polyvagal Theory Explained)';
                    if (navigator.share) {
                      navigator.share({ title: text, url: url });
                    } else {
                      navigator.clipboard.writeText(url);
                      alert('Link copied to clipboard!');
                    }
                  }}
                  className="flex items-center justify-center w-10 h-10 bg-[#41ab5d] hover:bg-[#183B10] text-white rounded-full transition-colors duration-200 shadow-md hover:shadow-lg"
                  title="Copy Link"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <article>
            {/* Article Header */}
            <header className="mb-8">
              <div className="flex flex-wrap items-center gap-2 mb-6">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[#41ab5d]/10 text-[#41ab5d]">Gut Health</span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[#FCAF15]/10 text-[#FCAF15]">Stress</span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[#53A107]/10 text-[#53A107]">Polyvagal Theory</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-[#183B10] mb-6 leading-tight">
                The Hidden Link Between Stress & Gut Issues (Polyvagal Theory Explained)
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-8">
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  By Inna
                </span>
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 4v10m6-10v10m-6-4h6" />
                  </svg>
                  August 8, 2025
                </span>
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  9 min read
                </span>
              </div>
            </header>

            {/* Table of Contents */}
            <aside className="bg-gradient-to-br from-[#41ab5d]/5 to-[#41ab5d]/10 rounded-2xl p-6 mb-8 border border-[#41ab5d]/20">
              <h3 className="text-lg font-semibold text-[#183B10] mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-[#41ab5d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                In This Article
              </h3>
              <ul className="space-y-3">
                <li><a href="#polyvagal-theory" className="text-[#41ab5d] hover:text-[#183B10] transition-colors flex items-center gap-2 text-sm">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Understanding Polyvagal Theory
                </a></li>
                <li><a href="#stress-to-leakage" className="text-[#41ab5d] hover:text-[#183B10] transition-colors flex items-center gap-2 text-sm">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  From Stress to Leakage: The Science
                </a></li>
                <li><a href="#restore-balance" className="text-[#41ab5d] hover:text-[#183B10] transition-colors flex items-center gap-2 text-sm">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Restore Balance: Tools That Help
                </a></li>
                <li><a href="#why-matters" className="text-[#41ab5d] hover:text-[#183B10] transition-colors flex items-center gap-2 text-sm">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Why This Matters
                </a></li>
              </ul>
            </aside>

            {/* Intro */}
            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-lg leading-relaxed text-gray-700">
                Have you ever noticed how your digestion changes when you're stressed? Maybe you feel nauseous before a big presentation, or your stomach "knots up" during conflict. This isn't just in your head — it's your nervous system and gut having a very real conversation. Understanding this connection through Polyvagal Theory can transform how you approach both stress and digestive health.
              </p>
            </div>

            {/* Key Research Finding */}
            <div className="bg-gradient-to-r from-[#FCAF15]/10 to-[#FCAF15]/5 border-l-4 border-[#FCAF15] p-6 mb-8 rounded-r-2xl">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0">
                  <svg className="w-6 h-6 text-[#FCAF15]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-[#183B10] mb-2">Key Research Finding</h4>
                  <p className="text-gray-700">Studies show that chronic stress can increase intestinal permeability (leaky gut) by up to 70%, while vagus nerve stimulation can restore gut barrier function and reduce inflammation within weeks.</p>
                </div>
              </div>
            </div>

            {/* Understanding Polyvagal Theory */}
            <section id="polyvagal-theory" className="mb-12">
              <h2 className="text-3xl font-bold text-[#183B10] mb-6">Understanding Polyvagal Theory</h2>
              <p className="prose prose-lg max-w-none mb-6">
                Polyvagal Theory, developed by Dr. Stephen Porges, explains how our autonomic nervous system responds to safety and threat. The vagus nerve — the longest cranial nerve — plays a crucial role in this system, connecting your brain to your heart, lungs, and digestive tract.
              </p>
              <p className="prose prose-lg max-w-none mb-6">
                When you feel safe and connected, your vagus nerve promotes a "rest and digest" state. But when you perceive threat (whether real or imagined), your nervous system shifts into survival mode, dramatically affecting digestion and gut health.
              </p>
              
              {/* Insight Box */}
              <div className="bg-[#53A107]/10 border-l-4 border-[#53A107] p-6 mb-6 rounded-r-lg">
                <h4 className="font-semibold text-[#183B10] mb-2">Clinical Insight</h4>
                <p className="text-gray-700">Many digestive issues aren't just about what you eat, but about your nervous system state when you eat. A dysregulated nervous system can impair digestion even with the perfect diet.</p>
              </div>
            </section>

            {/* From Stress to Leakage */}
            <section id="stress-to-leakage" className="mb-12">
              <h2 className="text-3xl font-bold text-[#183B10] mb-6">From Stress to Leakage: The Science</h2>
              <p className="prose prose-lg max-w-none mb-6">
                When your nervous system perceives threat, it redirects resources away from digestion to fuel your fight-or-flight response. This process:
              </p>
              
              <div className="space-y-6 mb-6">
                <div className="border-l-4 border-[#41ab5d] pl-4">
                  <h3 className="text-xl font-semibold text-[#183B10] mb-2">Reduces Digestive Function</h3>
                  <p className="text-gray-700">Blood flow to the digestive tract decreases by up to 50%, reducing enzyme production and nutrient absorption.</p>
                </div>
                <div className="border-l-4 border-[#41ab5d] pl-4">
                  <h3 className="text-xl font-semibold text-[#183B10] mb-2">Increases Gut Permeability</h3>
                  <p className="text-gray-700">Stress hormones like cortisol weaken the tight junctions between intestinal cells, creating "leaky gut."</p>
                </div>
                <div className="border-l-4 border-[#41ab5d] pl-4">
                  <h3 className="text-xl font-semibold text-[#183B10] mb-2">Triggers Inflammation</h3>
                  <p className="text-gray-700">Chronic stress activates inflammatory pathways that can damage the gut lining and disrupt the microbiome.</p>
                </div>
              </div>
            </section>

            {/* Restore Balance Section */}
            <section id="restore-balance" className="mb-12">
              <h2 className="text-3xl font-bold text-[#183B10] mb-6">Restore Balance: Tools That Help</h2>
              <p className="prose prose-lg max-w-none mb-6">
                The good news? You can actively support your vagus nerve and nervous system regulation. Here are evidence-based strategies:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="border-l-4 border-[#41ab5d] pl-4">
                  <h3 className="text-xl font-semibold text-[#183B10] mb-2">Breathing Techniques</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>4-7-8 breathing (inhale 4, hold 7, exhale 8)</li>
                    <li>Box breathing (4-4-4-4 pattern)</li>
                    <li>Diaphragmatic breathing for 5-10 minutes daily</li>
                  </ul>
                </div>
                <div className="border-l-4 border-[#41ab5d] pl-4">
                  <h3 className="text-xl font-semibold text-[#183B10] mb-2">Vagus Nerve Stimulation</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>Cold water face immersion</li>
                    <li>Humming, singing, or gargling</li>
                    <li>Gentle neck stretches and massage</li>
                  </ul>
                </div>
                <div className="border-l-4 border-[#41ab5d] pl-4">
                  <h3 className="text-xl font-semibold text-[#183B10] mb-2">Mindful Eating</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>Eat in a calm, relaxed environment</li>
                    <li>Chew thoroughly (20-30 times per bite)</li>
                    <li>Practice gratitude before meals</li>
                  </ul>
                </div>
                <div className="border-l-4 border-[#41ab5d] pl-4">
                  <h3 className="text-xl font-semibold text-[#183B10] mb-2">Connection & Safety</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>Prioritize supportive relationships</li>
                    <li>Create predictable routines</li>
                    <li>Spend time in nature regularly</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <div className="bg-gradient-to-br from-[#41ab5d] to-[#183B10] text-white rounded-2xl p-8 mb-12 text-center shadow-xl">
              <div className="max-w-2xl mx-auto">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Break the Stress-Gut Cycle?</h3>
                <p className="text-lg mb-6 opacity-90">Book a complimentary 15-minute discovery call to learn how nervous system regulation and gut barrier support can transform your health.</p>
                <Link href="https://calendly.com/inna-ntp/free-15-minutes-discovery-call-via-phone" target="_blank" className="inline-flex items-center gap-2 bg-[#FCAF15] text-[#183B10] px-8 py-4 rounded-xl hover:bg-yellow-300 transition-all duration-300 text-lg font-semibold shadow-lg hover:shadow-xl hover:scale-105">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  Book Your Free Consultation
                </Link>
              </div>
            </div>

            {/* Author Bio */}
            <aside className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 mb-12 border border-gray-200 shadow-sm">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="relative w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-lg">
                    <Image
                      src="/inna_shot.png"
                      alt="Inna - Certified Nutritional Therapy Practitioner"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="mb-3">
                    <h3 className="text-xl font-bold text-[#183B10] mb-1">Inna</h3>
                    <p className="text-sm font-medium text-[#41ab5d] bg-[#41ab5d]/10 px-3 py-1 rounded-full inline-block">Certified Nutritional Therapy Practitioner (NTP)</p>
                  </div>
                  <p className="text-gray-700 leading-relaxed">Inna specializes in the connection between nervous system health and digestive function, helping clients heal from chronic stress and gut issues through trauma-informed, root-cause approaches.</p>
                </div>
              </div>
            </aside>

            {/* Related Articles */}
            <section className="mb-12">
              <h3 className="text-2xl font-bold text-[#183B10] mb-6">Related Articles</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <article className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <span className="bg-[#41ab5d]/10 text-[#41ab5d] px-2 py-1 rounded text-xs font-medium">Gut Health</span>
                  <h4 className="text-xl font-semibold text-[#183B10] mt-2 mb-2">The Gut-Brain Connection: Why Your Anxiety Might Start in Your Stomach</h4>
                  <Link href="/blogs/gut-brain-connection" className="text-[#41ab5d] hover:underline text-sm">Read Article →</Link>
                </article>
                <article className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <span className="bg-[#FCAF15]/10 text-[#FCAF15] px-2 py-1 rounded text-xs font-medium">Hormones</span>
                  <h4 className="text-xl font-semibold text-[#183B10] mt-2 mb-2">Perimenopause and Gut Health: What Most Doctors Overlook</h4>
                  <Link href="/blogs/perimenopause-gut-health" className="text-[#41ab5d] hover:underline text-sm">Read Article →</Link>
                </article>
                <article className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <span className="bg-[#53A107]/10 text-[#53A107] px-2 py-1 rounded text-xs font-medium">Nutrition</span>
                  <h4 className="text-xl font-semibold text-[#183B10] mt-2 mb-2">Root-Cause Nutrition vs. Quick Fixes</h4>
                  <Link href="/blogs/root-cause-nutrition" className="text-[#41ab5d] hover:underline text-sm">Read Article →</Link>
                </article>
              </div>
            </section>
          </article>
        </main>
      </div>
    </>
  );
}
