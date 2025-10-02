'use client';

import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

export default function HealthcareFailsWomen() {
  return (
    <>
      <Head>
        <title>When Standard Healthcare Fails Women: Why Many Are Misdiagnosed and How to Advocate for Yourself | Empowered Nutrition with Inna</title>
        <meta name="description" content="Understand gender bias in medical care, why women face higher misdiagnosis rates, and learn how to advocate for yourself in the healthcare system." />
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
              <span className="text-gray-900">When Standard Healthcare Fails Women</span>
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
                    const text = 'When Standard Healthcare Fails Women: Why Many Are Misdiagnosed and How to Advocate for Yourself';
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
                    const text = 'When Standard Healthcare Fails Women: Why Many Are Misdiagnosed and How to Advocate for Yourself';
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
                    const text = 'When Standard Healthcare Fails Women: Why Many Are Misdiagnosed and How to Advocate for Yourself';
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
                <span className="bg-[#41ab5d]/10 text-[#41ab5d] px-3 py-1 rounded-full text-sm font-medium">Women's Health</span>
                <span className="bg-[#41ab5d]/10 text-[#41ab5d] px-3 py-1 rounded-full text-sm font-medium">Healthcare Advocacy</span>
                <span className="bg-[#41ab5d]/10 text-[#41ab5d] px-3 py-1 rounded-full text-sm font-medium">Self-Advocacy</span>
              </div>
              <div className="text-sm text-gray-500 flex gap-4">
                <span>By Inna</span>
                <span>January 5, 2025</span>
                <span>12 min read</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#183B10] mb-6 leading-tight">
              When Standard Healthcare Fails Women: Why Many Are Misdiagnosed and How to Advocate for Yourself
            </h1>
          </header>

          {/* Table of Contents */}
          <aside className="bg-gray-50 rounded-lg p-6 mb-8 border border-gray-200">
            <h3 className="text-lg font-semibold text-[#183B10] mb-4">In This Article</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#scope" className="text-[#41ab5d] hover:underline">The Scope of the Problem</a></li>
              <li><a href="#causes" className="text-[#41ab5d] hover:underline">Why This Happens: The Root Causes</a></li>
              <li><a href="#conditions" className="text-[#41ab5d] hover:underline">Common Conditions Where Women Face Delays</a></li>
              <li><a href="#advocate" className="text-[#41ab5d] hover:underline">How to Advocate for Yourself</a></li>
              <li><a href="#functional" className="text-[#41ab5d] hover:underline">The Role of Functional Medicine</a></li>
            </ul>
          </aside>

          {/* Featured Image */}
          <div className="mb-12">
            <Image
              src="/blog-images/healthcare-fails-women.jpg"
              alt="Women's healthcare advocacy"
              width={800}
              height={400}
              className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-lg"
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-8 rounded-r-lg">
              <p className="text-red-800 font-medium">
                <strong>Shocking Reality:</strong> Women are 50% more likely to be misdiagnosed after a heart attack,
                and it takes an average of 4 years longer for women to receive an autoimmune disease diagnosis compared to men.
              </p>
            </div>

            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              If you've ever felt dismissed by a healthcare provider, told your symptoms are "just stress,"
              or left a doctor's appointment feeling unheard, you're not alone. The unfortunate reality is that
              our healthcare system has a documented gender bias problem that leaves millions of women
              misdiagnosed, undertreated, or dismissed entirely.
            </p>

            <h2 id="scope" className="text-3xl font-bold text-[#183B10] mt-12 mb-6">The Scope of the Problem</h2>

            <p className="mb-6">
              Gender bias in healthcare isn't a new phenomenon, but recent research has brought alarming statistics to light:
            </p>

            <div className="bg-blue-50 p-8 rounded-xl mb-8">
              <h3 className="text-xl font-bold text-blue-900 mb-4">By the Numbers:</h3>
              <ul className="space-y-3 text-blue-800">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <strong>Heart Disease:</strong> Women are 50% more likely to receive an incorrect initial diagnosis
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <strong>Autoimmune Conditions:</strong> Takes 4+ years longer for diagnosis in women
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <strong>Pain Management:</strong> Women wait 16 minutes longer in emergency rooms
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <strong>Mental Health:</strong> Women's physical symptoms are 2x more likely to be attributed to anxiety
                </li>
              </ul>
            </div>

            <h2 id="causes" className="text-3xl font-bold text-[#183B10] mt-12 mb-6">Why This Happens: The Root Causes</h2>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">1. Historical Medical Research Bias</h3>
            <p className="mb-6">
              Until 1993, women were largely excluded from clinical trials due to concerns about pregnancy and
              hormonal fluctuations. This means decades of medical knowledge is based primarily on male physiology.
              The result? Symptoms, dosages, and treatments that work for men are assumed to work the same way for women.
            </p>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">2. The "Hysteria" Legacy</h3>
            <p className="mb-6">
              The medical field has a long history of attributing women's physical symptoms to emotional or
              psychological causes. While we've moved past diagnosing "hysteria," the underlying bias persists.
              Women's pain is more likely to be dismissed as emotional, stress-related, or "all in their head."
            </p>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">3. Symptom Presentation Differences</h3>
            <p className="mb-8">
              Women often present symptoms differently than men, particularly for conditions like heart disease,
              autism, and ADHD. When healthcare providers are trained to recognize "typical" (male) presentations,
              atypical symptoms in women can be overlooked or misinterpreted.
            </p>

            <h2 id="conditions" className="text-3xl font-bold text-[#183B10] mt-12 mb-6">Common Conditions Where Women Face Diagnostic Delays</h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-xl">
                <h4 className="font-bold text-gray-900 mb-3">Cardiovascular Disease</h4>
                <p className="text-gray-700 text-sm">
                  Women's heart attack symptoms (fatigue, nausea, back pain) differ from the "classic" chest pain,
                  leading to delayed treatment and higher mortality rates.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <h4 className="font-bold text-gray-900 mb-3">Autoimmune Disorders</h4>
                <p className="text-gray-700 text-sm">
                  Conditions like lupus, rheumatoid arthritis, and thyroid disorders disproportionately affect women
                  but are often misdiagnosed as stress or depression.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <h4 className="font-bold text-gray-900 mb-3">Endometriosis</h4>
                <p className="text-gray-700 text-sm">
                  Takes an average of 7-12 years for diagnosis, with women often told that severe menstrual pain is "normal."
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <h4 className="font-bold text-gray-900 mb-3">ADHD & Autism</h4>
                <p className="text-gray-700 text-sm">
                  Underdiagnosed in girls and women due to different symptom presentations and masking behaviors.
                </p>
              </div>
            </div>

            <h2 id="advocate" className="text-3xl font-bold text-[#183B10] mt-12 mb-6">How to Advocate for Yourself: A Practical Guide</h2>

            <div className="bg-green-50 border border-green-200 p-8 rounded-xl mb-8">
              <h3 className="text-xl font-bold text-green-900 mb-6">Your Healthcare Advocacy Toolkit</h3>

              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-green-800 mb-2">1. Document Everything</h4>
                  <ul className="text-green-700 space-y-1 ml-4">
                    <li>• Keep a detailed symptom diary with dates, times, and triggers</li>
                    <li>• Track your menstrual cycle and how symptoms correlate</li>
                    <li>• Note what makes symptoms better or worse</li>
                    <li>• Record all medications and supplements you're taking</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-green-800 mb-2">2. Prepare for Appointments</h4>
                  <ul className="text-green-700 space-y-1 ml-4">
                    <li>• Write down your top 3 concerns before the visit</li>
                    <li>• Bring your symptom diary and any relevant family history</li>
                    <li>• Research your symptoms beforehand (but don't self-diagnose)</li>
                    <li>• Prepare specific questions about next steps</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-green-800 mb-2">3. Use Assertive Communication</h4>
                  <ul className="text-green-700 space-y-1 ml-4">
                    <li>• "I need you to document in my chart that you're refusing this test"</li>
                    <li>• "What else could be causing these symptoms besides stress?"</li>
                    <li>• "I'd like a second opinion before we conclude this is anxiety"</li>
                    <li>• "Can you explain why you think this is psychological?"</li>
                  </ul>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Red Flags: When to Seek a Second Opinion</h3>
            <div className="bg-red-50 p-6 rounded-xl mb-8">
              <ul className="space-y-2 text-red-800">
                <li>• Your doctor dismisses your symptoms without examination</li>
                <li>• You're told it's "just stress" without ruling out physical causes</li>
                <li>• Your concerns are attributed to your weight, age, or gender</li>
                <li>• You feel rushed or unheard during appointments</li>
                <li>• Your symptoms are getting worse but you're told to "wait and see"</li>
              </ul>
            </div>

            <h2 id="functional" className="text-3xl font-bold text-[#183B10] mt-12 mb-6">The Role of Functional Medicine</h2>

            <p className="mb-6">
              This is where functional medicine shines. Unlike conventional medicine's symptom-focused approach,
              functional medicine practitioners:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-green-600 font-bold text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Listen to Your Full Story</h4>
                    <p className="text-gray-600 text-sm">Take time to understand your complete health history and symptoms</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-green-600 font-bold text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Look for Root Causes</h4>
                    <p className="text-gray-600 text-sm">Investigate underlying imbalances rather than just treating symptoms</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-green-600 font-bold text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Use Advanced Testing</h4>
                    <p className="text-gray-600 text-sm">Comprehensive lab work that goes beyond standard panels</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-green-600 font-bold text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Personalized Approach</h4>
                    <p className="text-gray-600 text-sm">Treatments tailored to your unique biochemistry and lifestyle</p>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Taking Action: Your Next Steps</h2>

            <p className="mb-6">
              If you've been struggling with unexplained symptoms or feel like you're not being heard by your healthcare providers,
              you don't have to accept "it's just stress" as an answer. Here's what you can do:
            </p>

            <div className="bg-blue-50 p-8 rounded-xl mb-8">
              <h3 className="text-xl font-bold text-blue-900 mb-4">Immediate Action Steps:</h3>
              <ol className="space-y-3 text-blue-800">
                <li><strong>1.</strong> Start documenting your symptoms today</li>
                <li><strong>2.</strong> Research functional medicine practitioners in your area</li>
                <li><strong>3.</strong> Consider comprehensive testing to identify root causes</li>
                <li><strong>4.</strong> Join support groups for your specific symptoms or conditions</li>
                <li><strong>5.</strong> Don't give up - your symptoms are real and deserve investigation</li>
              </ol>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">The Bottom Line</h2>

            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              You know your body better than anyone else. If something feels wrong, trust that instinct.
              While the healthcare system has its flaws, there are practitioners who will listen, investigate,
              and work with you to find answers. Don't let anyone dismiss your symptoms or make you feel like
              you're "just being dramatic."
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
                <span className="bg-[#FCAF15]/20 text-[#FCAF15] px-2 py-1 rounded text-xs font-medium">Hormones</span>
                <h4 className="text-xl font-semibold text-[#183B10] mt-2 mb-2">Perimenopause and Gut Health: What Most Doctors Overlook</h4>
                <a href="/blogs/perimenopause-gut-health" className="text-[#41ab5d] hover:underline text-sm">Read Article →</a>
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
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Take Control of Your Health?</h3>
              <p className="text-lg mb-6 opacity-90">If you're tired of being dismissed and ready for a practitioner who will listen and investigate your symptoms thoroughly, I'm here to help.</p>
              <Link href="https://calendly.com/inna-ntp/free-15-minutes-discovery-call-via-phone" target="_blank" className="inline-flex items-center gap-2 bg-[#FCAF15] text-[#183B10] px-8 py-4 rounded-xl hover:bg-yellow-300 transition-all duration-300 text-lg font-semibold shadow-lg hover:shadow-xl hover:scale-105">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Schedule Your Discovery Call
              </Link>
            </div>
          </div>
        </article>
      </div>
    </>
  );
}
