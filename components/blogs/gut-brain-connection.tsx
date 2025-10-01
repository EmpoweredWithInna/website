'use client';

import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

export default function GutBrainConnection() {
  return (
    <>
      <Head>
        <title>The Gut-Brain Connection: Why Your Anxiety Might Start in Your Stomach | Empowered Nutrition with Inna</title>
        <meta name="description" content="Explore the science behind the gut-brain axis and how it influences anxiety and digestion. Discover actionable strategies for balance." />
      </Head>
      <div className="min-h-screen bg-white text-gray-800 font-sans pt-32">

        {/* Breadcrumbs */}
        <nav className="bg-gray-50 border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-4 py-4">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Link href="/" className="hover:text-[#41ab5d] transition-colors">Home</Link>
              <span>&gt;</span>
              <Link href="/blog" className="hover:text-[#41ab5d] transition-colors">Blog</Link>
              <span>&gt;</span>
              <span className="text-gray-900">The Gut-Brain Connection</span>
            </div>
          </div>
        </nav>

        {/* Social Share & Article Header */}
        <article className="container mx-auto px-4 py-8 max-w-4xl">
          {/* Social Share */}
          <div className="flex justify-end mb-4">
            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-600 font-medium">Share:</span>
              <div className="flex gap-2">
                <button
                  onClick={() => {
                    const url = window.location.href;
                    const text = 'The Gut-Brain Connection: Why Your Anxiety Might Start in Your Stomach';
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
                    const text = 'The Gut-Brain Connection: Why Your Anxiety Might Start in Your Stomach';
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
                    const text = 'The Gut-Brain Connection: Why Your Anxiety Might Start in Your Stomach';
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
                    const text = 'The Gut-Brain Connection: Why Your Anxiety Might Start in Your Stomach';
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
          
          <header className="mb-8">
            <div className="flex flex-wrap items-center justify-between mb-4">
              <div className="flex flex-wrap gap-2 mb-2 md:mb-0">
                <span className="bg-[#41ab5d]/10 text-[#41ab5d] px-3 py-1 rounded-full text-sm font-medium">Gut Health</span>
                <span className="bg-[#41ab5d]/10 text-[#41ab5d] px-3 py-1 rounded-full text-sm font-medium">Anxiety</span>
                <span className="bg-[#41ab5d]/10 text-[#41ab5d] px-3 py-1 rounded-full text-sm font-medium">Microbiome</span>
              </div>
              <div className="text-sm text-gray-500 flex gap-4">
                <span>By Inna</span>
                <span>January 15, 2025</span>
                <span>8 min read</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#183B10] mb-6 leading-tight">
              The Gut-Brain Connection: Why Your Anxiety Might Start in Your Stomach
            </h1>
          </header>

          {/* Table of Contents */}
          <aside className="bg-gray-50 rounded-lg p-6 mb-8 border border-gray-200">
            <h3 className="text-lg font-semibold text-[#183B10] mb-4">In This Article</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#science" className="text-[#41ab5d] hover:underline">The Science Behind the Gut-Brain Axis</a></li>
              <li><a href="#stress" className="text-[#41ab5d] hover:underline">Stress, the Vagus Nerve & Gut Disruption</a></li>
              <li><a href="#strategies" className="text-[#41ab5d] hover:underline">Empowering, Actionable Strategies</a></li>
              <li><a href="#why-matters" className="text-[#41ab5d] hover:underline">Why This Matters</a></li>
            </ul>
          </aside>

          {/* Intro */}
          <section className="prose prose-lg max-w-none mb-8">
            <p>
              You've likely experienced that queasy sensation before a big meeting, or felt your digestion tighten when you're overwhelmed. That gut intuition isn't imaginary — it's biology. The pathways between your brain and gut are dynamic, bidirectional, and deeply influential on mood, immunity and resilience. If your anxiety and digestion seem tangled, you're not imagining it. Let's unpack the science and empower you with tools to restore balance.
            </p>
          </section>

          {/* Key Statistic Box */}
          <div id="science" className="bg-[#FCAF15]/10 border-l-4 border-[#FCAF15] p-6 mb-8 rounded-r-lg">
            <h4 className="font-semibold text-[#183B10] mb-2">Key Statistic</h4>
            <p className="text-gray-700">Recent research shows that people with anxiety or depression often have significantly different gut microbiome compositions compared to healthy individuals, with higher levels of inflammatory bacteria and lower levels of beneficial, anti-inflammatory microbes.</p>
          </div>

          {/* Science Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#183B10] mb-6">The Science Behind the Gut-Brain Axis</h2>
            <p className="prose prose-lg max-w-none mb-6">
              Your gastrointestinal tract hosts trillions of microbes that do much more than digest food. These microbes influence neurotransmitter production (such as serotonin and GABA), immune signalling and inflammation — all of which feed back into the brain.
            </p>
            <p className="prose prose-lg max-w-none mb-6">
              A recent systematic review of gut microbiota in depression and anxiety found that people with anxiety or depression often have higher levels of pro-inflammatory bacteria and lower levels of short-chain fatty acid-producing, anti-inflammatory bacteria compared with healthy controls. Another meta-analysis of case-control studies across psychiatric diagnoses showed a consistent depletion of butyrate-producing bacteria and enrichment of pro-inflammatory genera in people with anxiety and depression.
            </p>
            {/* Research Insight Box */}
            <div className="bg-[#53A107]/10 border-l-4 border-[#53A107] p-6 mb-6 rounded-r-lg">
              <h4 className="font-semibold text-[#183B10] mb-2">Research Insight</h4>
              <p className="text-gray-700">Preclinical studies further strengthen causality: when microbiota from subjects with depression are transferred to animals, the recipients also exhibit depressive or anxious behaviours. This demonstrates a direct causal link between gut microbiome composition and mood.</p>
            </div>
          </section>

          {/* Ad Box */}
          <div className="bg-[#41ab5d]/10 border border-[#41ab5d]/20 rounded-lg p-8 mb-12 text-center">
            <h3 className="text-xl font-semibold text-[#183B10] mb-4">Struggling with Unexplained Anxiety or Gut Issues?</h3>
            <p className="text-gray-700 mb-6">Discover how functional testing can reveal the root causes of your symptoms. Book a free 15-minute consultation to learn about personalized gut-brain healing.</p>
            <a href="/book-consultation" className="bg-[#41ab5d] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#183B10] transition-colors inline-block">Book Free Consultation</a>
          </div>

          {/* Stress Section */}
          <section id="stress" className="mb-12">
            <h2 className="text-3xl font-bold text-[#183B10] mb-6">Stress, the Vagus Nerve & Gut Disruption</h2>
            <p className="prose prose-lg max-w-none mb-6">
              The vagus nerve acts as a communication superhighway between your brain and gut. Chronic stress can throttle that line. A human study showed that mild psychological stress increased paracellular permeability ("leaky gut") and modulated mucosal immunity in healthy volunteers.
            </p>
            <p className="prose prose-lg max-w-none mb-6">
              Chronic stress also raises cortisol, inflames the gut lining and disrupts tight junctions, creating a vicious cycle of leaky gut, systemic inflammation and mood disruption.
            </p>
            {/* Quick Tip Box */}
            <div className="bg-[#FCAF15]/10 border-l-4 border-[#FCAF15] p-6 rounded-r-lg">
              <h4 className="font-semibold text-[#183B10] mb-2">Quick Tip</h4>
              <p className="text-gray-700">Notice how your digestion changes during stressful periods? This is your gut-brain axis in action. Simple breathing exercises can help activate your vagus nerve and improve both stress response and digestion.</p>
            </div>
          </section>

          {/* Strategies Section */}
          <section id="strategies" className="mb-12">
            <h2 className="text-3xl font-bold text-[#183B10] mb-6">Empowering, Actionable Strategies</h2>
            <p className="prose prose-lg max-w-none mb-6">
              Understanding the gut-brain connection empowers you to take targeted action. Here are evidence-based strategies to support both your mental wellbeing and digestive health:
            </p>
            <ol className="space-y-6 mb-6">
              <li className="border-l-4 border-[#41ab5d] pl-4">
                <h3 className="text-xl font-semibold text-[#183B10] mb-2">Nervous System Regulation</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Diaphragmatic breathing: Practice slow, deep breathing for 5-10 minutes daily to activate the vagus nerve</li>
                  <li>Gentle cold exposure: Cold showers or face plunging can stimulate vagal tone</li>
                  <li>Humming or chanting: These vibrations naturally stimulate the vagus nerve</li>
                </ul>
              </li>
              <li className="border-l-4 border-[#41ab5d] pl-4">
                <h3 className="text-xl font-semibold text-[#183B10] mb-2">Feed the Microbiome</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Fiber-rich foods: Aim for 25-35 grams daily from diverse plant sources</li>
                  <li>Prebiotics: Include garlic, onions, asparagus, and artichokes</li>
                  <li>Fermented foods: Add kefir, sauerkraut, kimchi, or miso to your daily routine</li>
                  <li>Strain-specific probiotics: Consider targeted probiotic supplementation based on testing</li>
                </ul>
              </li>
              <li className="border-l-4 border-[#41ab5d] pl-4">
                <h3 className="text-xl font-semibold text-[#183B10] mb-2">Test and Personalize</h3>
                <p className="text-gray-700">Functional tests such as comprehensive stool analysis (GI-MAP) or zonulin assays can reveal hidden imbalances and guide personalized nutrition protocols. This takes the guesswork out of healing and helps you target your specific imbalances.</p>
              </li>
              <li className="border-l-4 border-[#41ab5d] pl-4">
                <h3 className="text-xl font-semibold text-[#183B10] mb-2">Support Gut Integrity</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Key nutrients: Emphasize glutamine, zinc, and collagen for gut lining repair</li>
                  <li>Limit disruptors: Reduce excess sugar, refined carbs, and chronic NSAID use</li>
                  <li>Anti-inflammatory foods: Include omega-3 rich fish, leafy greens, and colorful vegetables</li>
                </ul>
              </li>
            </ol>
          </section>

          {/* Why Matters Section */}
          <section id="why-matters" className="mb-12">
            <h2 className="text-3xl font-bold text-[#183B10] mb-6">Why This Matters</h2>
            <p className="prose prose-lg max-w-none mb-6">
              If you've tried standard anxiety treatments alone and still feel stuck, it's likely because your gut-brain axis remains out of balance. You deserve a model of healing that sees the root — not just the symptom.
            </p>
            <p className="prose prose-lg max-w-none mb-6">
              At Empowered Nutrition with Inna, we blend advanced functional testing, nervous system regulation and targeted nutrition to help you restore calm, clarity and digestion. Your gut and brain are partners in healing — when you support both, transformation becomes possible.
            </p>
            {/* Remember Box */}
            <div className="bg-[#53A107]/10 border-l-4 border-[#53A107] p-6 rounded-r-lg">
              <h4 className="font-semibold text-[#183B10] mb-2">Remember</h4>
              <p className="text-gray-700">Healing the gut-brain connection isn't about perfection — it's about understanding your unique biology and giving your body the support it needs to thrive. Small, consistent changes can create profound shifts in both your mental and digestive health.</p>
            </div>
          </section>

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
                <p className="text-gray-700 leading-relaxed">Inna specializes in the gut-brain axis and women's health, helping clients aged 30-55 overcome chronic fatigue, anxiety, and digestive issues through root-cause functional nutrition. Her approach combines advanced lab testing with compassionate, trauma-informed care.</p>
              </div>
            </div>
          </aside>

          {/* Related Articles */}
          <section className="mb-12">
            <h3 className="text-2xl font-bold text-[#183B10] mb-6">Related Articles</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <article className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <span className="bg-[#FCAF15]/20 text-[#FCAF15] px-2 py-1 rounded text-xs font-medium">Hormones</span>
                <h4 className="text-xl font-semibold text-[#183B10] mt-2 mb-2">Perimenopause and Gut Health: What Most Doctors Overlook</h4>
                <a href="/blog/perimenopause-gut-health" className="text-[#41ab5d] hover:underline text-sm">Read Article →</a>
              </article>
              <article className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <span className="bg-[#41ab5d]/10 text-[#41ab5d] px-2 py-1 rounded text-xs font-medium">Gut Health</span>
                <h4 className="text-xl font-semibold text-[#183B10] mt-2 mb-2">The Hidden Link Between Stress & Gut Issues</h4>
                <a href="/blog/stress-gut-issues" className="text-[#41ab5d] hover:underline text-sm">Read Article →</a>
              </article>
              <article className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <span className="bg-[#53A107]/10 text-[#53A107] px-2 py-1 rounded text-xs font-medium">Nutrition</span>
                <h4 className="text-xl font-semibold text-[#183B10] mt-2 mb-2">Root-Cause Nutrition vs. Quick Fixes</h4>
                <a href="/blog/root-cause-nutrition" className="text-[#41ab5d] hover:underline text-sm">Read Article →</a>
              </article>
            </div>
          </section>

          {/* CTA */}
          <div className="bg-gradient-to-br from-[#41ab5d] to-[#183B10] text-white rounded-2xl p-8 mb-12 text-center shadow-xl">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Heal Your Gut-Brain Connection?</h3>
              <p className="text-lg mb-6 opacity-90">Book a complimentary 15-minute discovery call to discuss your symptoms and learn how functional nutrition can transform your health.</p>
              <Link href="https://calendly.com/inna-ntp/free-15-minutes-discovery-call-via-phone" target="_blank" className="inline-flex items-center gap-2 bg-[#FCAF15] text-[#183B10] px-8 py-4 rounded-xl hover:bg-yellow-300 transition-all duration-300 text-lg font-semibold shadow-lg hover:shadow-xl hover:scale-105">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Book Your Free Consultation
              </Link>
            </div>
          </div>
        </article>
      </div>
    </>
  );
}