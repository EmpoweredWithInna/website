'use client';

import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

export default function CorporateWellness() {
  return (
    <>
      <Head>
        <title>Corporate Wellness Spotlight: How Gut Health Programs Boost Productivity and Reduce Costs | Empowered Nutrition with Inna</title>
        <meta name="description" content="Discover how digestive disorders impact workplace productivity and costs, plus evidence-based strategies for implementing gut health programs in corporate settings." />
      </Head>
      <div className="min-h-screen bg-white text-gray-800 font-sans pt-32">

        {/* Breadcrumbs */}
        <nav className="bg-gray-50 border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-4 py-4">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Link href="/" className="hover:text-[#41ab5d] transition-colors">Home</Link>
              <span>&gt;</span>
              <Link href="/blogs" className="hover:text-[#41ab5d] transition-colors">Blogs</Link>
              <span>&gt;</span>
              <span className="text-gray-900">Corporate Wellness: Gut Health Programs</span>
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
                    const text = 'Corporate Wellness Spotlight: How Gut Health Programs Boost Productivity and Reduce Costs';
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
                    const text = 'Corporate Wellness Spotlight: How Gut Health Programs Boost Productivity and Reduce Costs';
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
                    const text = 'Corporate Wellness Spotlight: How Gut Health Programs Boost Productivity and Reduce Costs';
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
                <span className="bg-[#41ab5d]/10 text-[#41ab5d] px-3 py-1 rounded-full text-sm font-medium">Corporate Wellness</span>
                <span className="bg-[#41ab5d]/10 text-[#41ab5d] px-3 py-1 rounded-full text-sm font-medium">Workplace Health</span>
                <span className="bg-[#41ab5d]/10 text-[#41ab5d] px-3 py-1 rounded-full text-sm font-medium">Productivity</span>
              </div>
              <div className="text-sm text-gray-500 flex gap-4">
                <span>By Inna</span>
                <span>January 2, 2025</span>
                <span>10 min read</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#183B10] mb-6 leading-tight">
              Corporate Wellness Spotlight: How Gut Health Programs Boost Productivity and Reduce Costs
            </h1>
          </header>

          {/* Table of Contents */}
          <aside className="bg-gray-50 rounded-lg p-6 mb-8 border border-gray-200">
            <h3 className="text-lg font-semibold text-[#183B10] mb-4">In This Article</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#cost" className="text-[#41ab5d] hover:underline">The Hidden Cost of Poor Gut Health</a></li>
              <li><a href="#issues" className="text-[#41ab5d] hover:underline">Common Digestive Issues Affecting Workforce</a></li>
              <li><a href="#connection" className="text-[#41ab5d] hover:underline">The Gut-Brain Connection & Performance</a></li>
              <li><a href="#implementation" className="text-[#41ab5d] hover:underline">Implementing a Successful Program</a></li>
              <li><a href="#case-study" className="text-[#41ab5d] hover:underline">Case Study: Tech Company Transformation</a></li>
            </ul>
          </aside>

          {/* Featured Image */}
          {/* <div className="mb-12">
            <Image
              src="/blog-images/corporate-wellness.jpg"
              alt="Corporate wellness and gut health"
              width={800}
              height={400}
              className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-lg"
            />
          </div> */}

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8 rounded-r-lg">
              <p className="text-blue-800 font-medium">
                <strong>Business Impact:</strong> Companies with comprehensive gut health programs see a 25% reduction in sick days,
                30% improvement in employee satisfaction, and an average ROI of $3.27 for every dollar invested in digestive wellness initiatives.
              </p>
            </div>

            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              While most corporate wellness programs focus on fitness challenges and mental health resources,
              forward-thinking companies are discovering that gut health might be the missing piece in their
              employee wellness puzzle. With digestive disorders affecting up to 70% of the workforce and
              costing billions in lost productivity, it's time to give gut health the attention it deserves.
            </p>

            <h2 id="cost" className="text-3xl font-bold text-[#183B10] mt-12 mb-6">The Hidden Cost of Poor Gut Health in the Workplace</h2>

            <p className="mb-6">
              Digestive issues don't just affect employees at home—they follow them to work, impacting everything
              from concentration and energy levels to absenteeism and healthcare costs.
            </p>

            <div className="bg-red-50 p-8 rounded-xl mb-8">
              <h3 className="text-xl font-bold text-red-900 mb-4">The Productivity Drain:</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-red-800 mb-2">Direct Costs</h4>
                  <ul className="space-y-2 text-red-700">
                    <li>• $142 billion annually in healthcare costs</li>
                    <li>• 3.5x higher absenteeism rates</li>
                    <li>• 40% more emergency room visits</li>
                    <li>• $1,200+ per employee in additional medical expenses</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-red-800 mb-2">Indirect Costs</h4>
                  <ul className="space-y-2 text-red-700">
                    <li>• 23% reduction in cognitive performance</li>
                    <li>• 35% increase in workplace accidents</li>
                    <li>• Higher turnover rates</li>
                    <li>• Decreased team morale and collaboration</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 id="issues" className="text-3xl font-bold text-[#183B10] mt-12 mb-6">Common Digestive Issues Affecting Your Workforce</h2>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-xl">
                <h4 className="font-bold text-gray-900 mb-3">Irritable Bowel Syndrome (IBS)</h4>
                <p className="text-gray-700 text-sm mb-3">
                  Affects 10-15% of adults globally, causing unpredictable symptoms that can disrupt work schedules.
                </p>
                <div className="text-xs text-gray-600">
                  <strong>Impact:</strong> 2.5x more sick days, reduced focus during flare-ups
                </div>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <h4 className="font-bold text-gray-900 mb-3">Acid Reflux/GERD</h4>
                <p className="text-gray-700 text-sm mb-3">
                  Affects 20% of the population, often worsened by workplace stress and irregular eating patterns.
                </p>
                <div className="text-xs text-gray-600">
                  <strong>Impact:</strong> Sleep disruption, afternoon energy crashes
                </div>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <h4 className="font-bold text-gray-900 mb-3">Food Sensitivities</h4>
                <p className="text-gray-700 text-sm mb-3">
                  Often undiagnosed, causing brain fog, fatigue, and digestive discomfort after meals.
                </p>
                <div className="text-xs text-gray-600">
                  <strong>Impact:</strong> Post-lunch productivity dips, frequent bathroom breaks
                </div>
              </div>
            </div>

            <h2 id="connection" className="text-3xl font-bold text-[#183B10] mt-12 mb-6">The Gut-Brain Connection: Why It Matters for Performance</h2>

            <p className="mb-6">
              The gut produces 90% of the body's serotonin and houses 70% of the immune system. When gut health
              is compromised, it directly affects:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-blue-50 p-6 rounded-xl">
                <h4 className="font-bold text-blue-900 mb-3">Cognitive Function</h4>
                <ul className="text-blue-800 space-y-2 text-sm">
                  <li>• Memory and concentration</li>
                  <li>• Decision-making abilities</li>
                  <li>• Problem-solving skills</li>
                  <li>• Creative thinking</li>
                </ul>
              </div>
              <div className="bg-green-50 p-6 rounded-xl">
                <h4 className="font-bold text-green-900 mb-3">Emotional Regulation</h4>
                <ul className="text-green-800 space-y-2 text-sm">
                  <li>• Stress management</li>
                  <li>• Mood stability</li>
                  <li>• Anxiety levels</li>
                  <li>• Team collaboration</li>
                </ul>
              </div>
            </div>

            <h2 id="implementation" className="text-3xl font-bold text-[#183B10] mt-12 mb-6">Implementing a Successful Gut Health Program</h2>

            <div className="bg-green-50 border border-green-200 p-8 rounded-xl mb-8">
              <h3 className="text-xl font-bold text-green-900 mb-6">Phase 1: Assessment and Education (Months 1-2)</h3>

              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-green-800 mb-2">Employee Health Screening</h4>
                  <ul className="text-green-700 space-y-1 ml-4 text-sm">
                    <li>• Anonymous digestive health surveys</li>
                    <li>• Optional comprehensive stool testing</li>
                    <li>• Food sensitivity assessments</li>
                    <li>• Stress and sleep quality evaluations</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-green-800 mb-2">Educational Workshops</h4>
                  <ul className="text-green-700 space-y-1 ml-4 text-sm">
                    <li>• "Gut Health 101: The Foundation of Wellness"</li>
                    <li>• "Eating for Energy: Workplace Nutrition Strategies"</li>
                    <li>• "The Stress-Gut Connection"</li>
                    <li>• "Reading Your Body's Signals"</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 p-8 rounded-xl mb-8">
              <h3 className="text-xl font-bold text-blue-900 mb-6">Phase 2: Environment and Policy Changes (Months 2-3)</h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-blue-800 mb-3">Workplace Environment</h4>
                  <ul className="text-blue-700 space-y-2 text-sm">
                    <li>• Improve cafeteria offerings</li>
                    <li>• Install water filtration systems</li>
                    <li>• Create quiet eating spaces</li>
                    <li>• Provide refrigeration for healthy meals</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-blue-800 mb-3">Policy Updates</h4>
                  <ul className="text-blue-700 space-y-2 text-sm">
                    <li>• Flexible lunch schedules</li>
                    <li>• Walking meeting options</li>
                    <li>• Stress management protocols</li>
                    <li>• Ergonomic workspace assessments</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 border border-purple-200 p-8 rounded-xl mb-8">
              <h3 className="text-xl font-bold text-purple-900 mb-6">Phase 3: Ongoing Support and Monitoring (Months 3+)</h3>

              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-purple-800 mb-2">Individual Support</h4>
                  <ul className="text-purple-700 space-y-1 ml-4 text-sm">
                    <li>• One-on-one consultations with functional nutritionists</li>
                    <li>• Personalized meal planning services</li>
                    <li>• Supplement guidance and group purchasing</li>
                    <li>• Regular progress check-ins</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-purple-800 mb-2">Group Activities</h4>
                  <ul className="text-purple-700 space-y-1 ml-4 text-sm">
                    <li>• Monthly "Gut Health Challenges"</li>
                    <li>• Healthy cooking demonstrations</li>
                    <li>• Stress management workshops</li>
                    <li>• Peer support groups</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Measuring Success: Key Performance Indicators</h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-xl">
                <h4 className="font-bold text-gray-900 mb-3">Health Metrics</h4>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li>• Reduction in digestive-related sick days</li>
                  <li>• Improved employee energy levels</li>
                  <li>• Decreased healthcare claims</li>
                  <li>• Better sleep quality scores</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <h4 className="font-bold text-gray-900 mb-3">Business Metrics</h4>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li>• Increased productivity scores</li>
                  <li>• Higher employee satisfaction</li>
                  <li>• Reduced turnover rates</li>
                  <li>• Improved team collaboration</li>
                </ul>
              </div>
            </div>

            <h2 id="case-study" className="text-3xl font-bold text-[#183B10] mt-12 mb-6">Case Study: Tech Company Transformation</h2>

            <div className="bg-yellow-50 p-8 rounded-xl mb-8">
              <h3 className="text-xl font-bold text-yellow-900 mb-4">Company Profile:</h3>
              <p className="text-yellow-800 mb-4">
                Mid-sized software company (500 employees) implemented a comprehensive gut health program after
                noticing high rates of afternoon fatigue and frequent sick days.
              </p>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-bold text-gray-900 mb-2">Before Program</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• 45% reported digestive issues</li>
                    <li>• 8.2 sick days per employee/year</li>
                    <li>• 62% satisfaction score</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-bold text-gray-900 mb-2">After 12 Months</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• 18% reported digestive issues</li>
                    <li>• 4.1 sick days per employee/year</li>
                    <li>• 84% satisfaction score</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-bold text-gray-900 mb-2">ROI Calculation</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Program cost: $125,000</li>
                    <li>• Savings: $410,000</li>
                    <li>• ROI: 328%</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-[#183B10] mt-12 mb-6">Getting Started: Implementation Checklist</h2>

            <div className="bg-gray-50 p-8 rounded-xl mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Phase 1 Checklist (First 30 Days):</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-gray-800 mb-3">Assessment</h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      Conduct employee health survey
                    </li>
                    <li className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      Review current healthcare costs
                    </li>
                    <li className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      Analyze absenteeism patterns
                    </li>
                    <li className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      Evaluate current wellness offerings
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-3">Planning</h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      Identify key stakeholders
                    </li>
                    <li className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      Set program goals and KPIs
                    </li>
                    <li className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      Research qualified practitioners
                    </li>
                    <li className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      Develop communication strategy
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-[#183B10] mt-12 mb-6">The Future of Corporate Wellness</h2>

            <p className="mb-6">
              As we move toward a more holistic understanding of employee health, gut health programs represent
              the next evolution in corporate wellness. Companies that invest in comprehensive digestive health
              initiatives today will see the benefits in improved productivity, reduced healthcare costs, and
              higher employee satisfaction for years to come.
            </p>

          </div>

          {/* Author Bio */}
          <aside className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 mb-12 border border-gray-200 shadow-sm">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="relative w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-lg">
                  <Image
                    src="/Inna_shot.png"
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
                <a href="/blogs/gut-brain-connection" className="text-[#41ab5d] hover:underline text-sm">Read Article →</a>
              </article>
              <article className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <span className="bg-[#E88074]/20 text-[#E88074] px-2 py-1 rounded text-xs font-medium">Women's Health</span>
                <h4 className="text-xl font-semibold text-[#183B10] mt-2 mb-2">When Standard Healthcare Fails Women</h4>
                <a href="/blogs/healthcare-fails-women" className="text-[#41ab5d] hover:underline text-sm">Read Article →</a>
              </article>
              <article className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <span className="bg-[#53A107]/10 text-[#53A107] px-2 py-1 rounded text-xs font-medium">Nutrition</span>
                <h4 className="text-xl font-semibold text-[#183B10] mt-2 mb-2">Root-Cause Nutrition vs. Quick Fixes</h4>
                <a href="/blogs/root-cause-nutrition" className="text-[#41ab5d] hover:underline text-sm">Read Article →</a>
              </article>
            </div>
          </section>

          {/* CTA */}
          <div className="bg-gradient-to-br from-[#41ab5d] to-[#183B10] text-white rounded-2xl p-8 mb-12 text-center shadow-xl">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Transform Your Workplace Wellness?</h3>
              <p className="text-lg mb-6 opacity-90">Let's discuss how a customized gut health program can benefit your organization. I work with companies of all sizes to implement evidence-based wellness strategies that deliver real results.</p>
              <Link href="https://calendly.com/inna-ntp/free-15-minutes-discovery-call-via-phone" target="_blank" className="inline-flex items-center gap-2 bg-[#FCAF15] text-[#183B10] px-8 py-4 rounded-xl hover:bg-yellow-300 transition-all duration-300 text-lg font-semibold shadow-lg hover:shadow-xl hover:scale-105">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Schedule a Corporate Consultation
              </Link>
            </div>
          </div>
        </article>
      </div>
    </>
  );
}
