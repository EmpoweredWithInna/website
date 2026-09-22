"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  Clock3,
  HeartPulse,
  Leaf,
  Mail,
  Quote,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import {
  CONSULTATION_URL,
  FULLSCRIPT_URL,
  RESTART_CONSULTATION_URL,
} from "../lib/site";
import { downloadMealPlanGuide } from "../utils/downloadUtils";

function SectionIntro({
  number,
  eyebrow,
  title,
  copy,
  light = false,
}: {
  number: string;
  eyebrow: string;
  title: React.ReactNode;
  copy: string;
  light?: boolean;
}) {
  return (
    <div className={`editorial-intro ${light ? "editorial-intro-light" : ""}`}>
      <div className="editorial-kicker">
        <span>{number}</span>
        {eyebrow}
      </div>
      <h2>{title}</h2>
      <p>{copy}</p>
    </div>
  );
}

const achievements = [
  ["500+", "Women supported"],
  ["92%", "Reported success rate"],
  ["6+", "Years of experience"],
  ["Nationwide", "Virtual support"],
];

const certifications = [
  ["CNTP", "Certified Nutritional Therapy Practitioner"],
  ["RESTART®", "Sugar Detox Program"],
  ["IRH Certified", "Institute of Restorative Health"],
  ["Synergistic Muscle Testing", "Identifying Imbalances In Your Body"],
];

export function SocialProof() {
  return (
    <section className="proof-section" aria-labelledby="proof-title">
      <div className="section-wrap">
        <div className="proof-heading">
          <div>
            <span className="section-index">01</span>
            <p>Built on attentive, personalized care</p>
          </div>
          <h2 id="proof-title">A practice shaped around the whole person.</h2>
        </div>
        <div className="proof-stats">
          {achievements.map(([value, label]) => (
            <div key={label}>
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
        <div className="credential-band">
          <div>
            <ShieldCheck aria-hidden="true" />
            <span>Training & credentials</span>
          </div>
          <ul>
            {certifications.map(([name, detail]) => (
              <li key={name}>
                <strong>{name}</strong>
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

const processSteps = [
  [
    "Listen",
    "Comprehensive assessment",
    "A deep-dive health history and symptom review reveals patterns unique to you.",
  ],
  [
    "Investigate",
    "Advanced functional testing",
    "GI-MAP, DUTCH hormones, food sensitivities, mycotoxins, and nutrient panels can add useful context.",
  ],
  [
    "Personalize",
    "Precision protocol design",
    "Your nutrition, supplement, and lifestyle plan is built around your findings and daily life.",
  ],
  [
    "Refine",
    "Continuous optimization",
    "Progress is reviewed over time so recommendations can evolve with your needs.",
  ],
];

export function HowWeHelp() {
  return (
    <section className="process-section" id="how-we-help">
      <div className="section-wrap">
        <SectionIntro
          number="02"
          eyebrow="The approach"
          title={
            <>
              From symptoms to a <em>clearer path forward.</em>
            </>
          }
          copy="A four-part process brings your health history, functional testing, and personalized nutrition into one thoughtful plan."
        />
        <ol className="process-grid">
          {processSteps.map(([verb, title, copy], index) => (
            <li key={verb}>
              <span className="process-number">0{index + 1}</span>
              <p>{verb}</p>
              <h3>{title}</h3>
              <span>{copy}</span>
            </li>
          ))}
        </ol>
        <div className="process-callout">
          <div>
            <Sparkles aria-hidden="true" />
            <span>One starting point</span>
          </div>
          <p>
            You do not need to arrive with every answer. The first conversation
            is about understanding what you have tried, what you are
            experiencing, and whether this approach fits.
          </p>
          <Link href={CONSULTATION_URL} target="_blank" rel="noreferrer">
            Start with a clarity call <ArrowUpRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}

const services = [
  {
    number: "01",
    title: "1:1 Coaching Programs",
    subtitle: "Personalized transformation programs",
    description:
      "Personalized 3–12 month programs featuring regular sessions, custom nutrition plans, and ongoing support for sustainable change.",
    features: [
      "Virtual consultations",
      "Personalized meal plans",
      "Supplement protocols",
      "Progress reviews",
    ],
    ctaHref: CONSULTATION_URL,
    ctaLabel: "Explore this option",
  },
  {
    number: "02",
    title: "RESTART® Sugar Detox",
    subtitle: "A guided five-week group program",
    description:
      "A supportive program designed to help you understand sugar cravings, balance energy, and build sustainable whole-food habits.",
    features: [
      "Weekly group coaching",
      "Nutrition education",
      "Meal guidance",
      "Recipes and shopping lists",
    ],
    featured: true,
    ctaHref: RESTART_CONSULTATION_URL,
    ctaLabel: "RESTART Sugar Detox 5-week Program info call",
  },
  {
    number: "03",
    title: "Functional Lab Testing",
    subtitle: "More context for your next step",
    description:
      "Testing packages may include GI-MAP stool analysis and DUTCH hormone panels, paired with a detailed interpretation and action plan.",
    features: [
      "GI-MAP analysis",
      "DUTCH hormone testing",
      "Results interpretation",
      "Follow-up consultation",
    ],
    ctaHref: CONSULTATION_URL,
    ctaLabel: "Explore this option",
  },
];

export function Services() {
  return (
    <section className="services-section" id="services">
      <div className="section-wrap">
        <SectionIntro
          light
          number="03"
          eyebrow="Ways to work together"
          title={
            <>
              Support designed for <em>your season of health.</em>
            </>
          }
          copy="Choose a personalized coaching relationship, a focused group reset, or functional testing with expert guidance."
        />
        <div className="service-grid">
          {services.map((service) => (
            <article
              className={
                service.featured
                  ? "service-card service-card-featured"
                  : "service-card"
              }
              key={service.title}
            >
              <div className="service-top">
                <span>{service.number}</span>
                {service.featured && <small>Group program</small>}
              </div>
              <p>{service.subtitle}</p>
              <h3>{service.title}</h3>
              <div className="service-rule" />
              <p className="service-description">{service.description}</p>
              <ul>
                {service.features.map((feature) => (
                  <li key={feature}>
                    <Check size={15} />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link href={service.ctaHref} target="_blank" rel="noreferrer">
                {service.ctaLabel} <ArrowUpRight size={16} />
              </Link>
            </article>
          ))}
        </div>
        <div className="fullscript-row">
          <div>
            <Leaf aria-hidden="true" />
          </div>
          <div>
            <span>For current clients</span>
            <h3>Your supplement dispensary, in one place.</h3>
            <p>
              Access practitioner-recommended supplements through Inna’s
              Fullscript dispensary.
            </p>
          </div>
          <Link href={FULLSCRIPT_URL} target="_blank" rel="noreferrer">
            Visit Fullscript <ArrowUpRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}

export function MyStory() {
  return (
    <section className="story-section" id="about">
      <div className="section-wrap story-layout">
        <div className="story-image-wrap">
          <div className="story-image">
            <Image
              src="/Inna_image_standing.png"
              alt="Inna Benyukhis, Certified Nutritional Therapy Practitioner"
              fill
              sizes="(max-width: 900px) 92vw, 42vw"
            />
          </div>
          <span className="story-seal">
            Root-cause
            <br />
            nutrition
          </span>
        </div>
        <div className="story-copy">
          <SectionIntro
            number="04"
            eyebrow="Meet your practitioner"
            title={
              <>
                A personal journey into <em>functional healing.</em>
              </>
            }
            copy="Inna’s work began with a family health crisis that changed how she understood symptoms, advocacy, and the role of nutrition."
          />
          <p>
            When my daughter Nicole was 11, she complained that her heart hurt.
            Years of escalating symptoms and unanswered questions eventually led
            our family to a functional medicine doctor who identified chronic
            Lyme, co-infections, and mold illness.
          </p>
          <p>
            Through targeted protocols, Nicole regained her health. Along the
            way, I realized I had to care for myself too, which led me to
            nutrition school and a new understanding of how lifestyle and
            nutrition shape health.
          </p>
          <blockquote>
            “Today, I empower women in their 40s–60s who struggle with fatigue,
            gut issues, brain fog, and low confidence so they can reclaim
            energy, clarity, and vibrant living.”
          </blockquote>
          <div className="story-signature">
            <strong>Inna Benyukhis</strong>
            <span>Certified Nutritional Therapy Practitioner</span>
          </div>
          <Link href={CONSULTATION_URL} target="_blank" rel="noreferrer">
            Start your journey with me <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}

const testimonials = [
  {
    initials: "SM",
    name: "Sarah M.",
    location: "Austin, TX",
    condition: "IBS & chronic fatigue",
    quote:
      "After three years of seeing specialists with no answers, Inna’s functional testing revealed the root causes of my digestive issues and fatigue. Within six months, I had my energy back and my gut symptoms were 90% improved.",
    result: "Clearer thinking, sustained energy, digestive freedom",
  },
  {
    initials: "JL",
    name: "Jennifer L.",
    location: "Dallas, TX",
    condition: "Hormonal imbalances",
    quote:
      "The DUTCH hormone test revealed imbalances that my regular doctor missed. Inna’s protocol helped regulate my cycles and eased the mood swings affecting my relationships and work.",
    result: "More regular cycles, steadier mood, renewed confidence",
  },
  {
    initials: "ET",
    name: "Emily T.",
    location: "San Antonio, TX",
    condition: "Digestive & energy issues",
    quote:
      "Inna’s comprehensive approach helped identify the root causes of symptoms I had lived with for years. Her personalized protocol transformed my gut health and energy levels.",
    result: "Comfortable digestion, stable energy, fewer cravings",
  },
];

export function Testimonials() {
  return (
    <section className="testimonials-section" id="testimonials">
      <div className="section-wrap">
        <SectionIntro
          number="05"
          eyebrow="Client perspectives"
          title={
            <>
              Real stories of feeling <em>heard and supported.</em>
            </>
          }
          copy="Every health journey is individual. These clients share what changed when their care became more personal and investigative."
        />
        <div className="testimonial-grid">
          {testimonials.map((item, index) => (
            <article
              key={item.name}
              className={
                index === 1
                  ? "testimonial-card testimonial-card-accent"
                  : "testimonial-card"
              }
            >
              <Quote aria-hidden="true" />
              <blockquote>{item.quote}</blockquote>
              <div className="testimonial-result">
                <span>What changed</span>
                <p>{item.result}</p>
              </div>
              <footer>
                <span>{item.initials}</span>
                <div>
                  <strong>{item.name}</strong>
                  <small>
                    {item.location} · {item.condition}
                  </small>
                </div>
              </footer>
            </article>
          ))}
        </div>
        <p className="testimonial-disclaimer">
          Individual experiences vary. Testimonials do not guarantee specific
          outcomes.
        </p>
      </div>
    </section>
  );
}

const tips = [
  [
    "Morning ritual",
    "Start Your Day with Lemon Water",
    "Add fresh lemon juice to warm water as a simple hydration ritual.",
    "2 minutes",
  ],
  [
    "Nutrition",
    "Eat the Rainbow Daily",
    "Include varied vegetables and fruits to bring more fiber and phytonutrients to your meals.",
    "Throughout the day",
  ],
  [
    "Stress support",
    "Practice Box Breathing",
    "Try a steady 4–4–4–4 breathing rhythm to create a deliberate moment of calm.",
    "5 minutes",
  ],
  [
    "Sleep hygiene",
    "Optimize Your Sleep Environment",
    "Use a cool, dark room and create an hour of screen-free wind-down time.",
    "Evening routine",
  ],
  [
    "Movement",
    "Move for Lymphatic Flow",
    "Gentle yoga, walking, or rebounding can add restorative movement to your day.",
    "10–15 minutes",
  ],
  [
    "Minerals",
    "Prioritize Mineral-Rich Foods",
    "Build meals around leafy greens, pumpkin seeds, and other mineral-rich whole foods.",
    "With meals",
  ],
];

export function QuickTips() {
  const [activeTip, setActiveTip] = useState(0);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const submit = async (event: React.FormEvent) => {
    event.preventDefault();
    setStatus("Sending…");
    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, intent: "newsletter" }),
      });
      const data = await response.json();
      setStatus(response.ok ? data.message : data.error);
      if (response.ok) setEmail("");
    } catch {
      setStatus("Please try again in a moment.");
    }
  };
  const tip = tips[activeTip];
  return (
    <section className="tips-section" id="tips">
      <div className="section-wrap">
        <SectionIntro
          number="06"
          eyebrow="Everyday foundations"
          title={
            <>
              Small rituals that make wellness feel <em>more approachable.</em>
            </>
          }
          copy="Explore practical habits for nourishment, rest, stress support, and steady energy."
        />
        <div className="tips-layout">
          <div className="tip-picker">
            {tips.map(([category, title], index) => (
              <button
                className={index === activeTip ? "active" : ""}
                onClick={() => setActiveTip(index)}
                key={title}
              >
                <span>0{index + 1}</span>
                <div>
                  <small>{category}</small>
                  <strong>{title}</strong>
                </div>
                <ArrowRight size={17} />
              </button>
            ))}
          </div>
          <article className="tip-feature">
            <div className="tip-feature-icon">
              <HeartPulse />
            </div>
            <span>{tip[0]}</span>
            <h3>{tip[1]}</h3>
            <p>{tip[2]}</p>
            <div>
              <Clock3 size={16} />
              {tip[3]}
            </div>
          </article>
          <aside className="newsletter-card" id="subscribe">
            <Mail />
            <span>A thoughtful note, weekly</span>
            <h3>Wellness insights for your inbox.</h3>
            <p>
              Receive nutrition tips, functional-health insights, and new
              resources from Inna.
            </p>
            <form onSubmit={submit}>
              <label htmlFor="tips-email">Email address</label>
              <div>
                <input
                  id="tips-email"
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="you@example.com"
                  required
                />
                <button>
                  Join the list <ArrowRight size={16} />
                </button>
              </div>
            </form>
            {status && (
              <p className="form-status" role="status">
                {status}
              </p>
            )}
          </aside>
        </div>
      </div>
    </section>
  );
}

const articles = [
  [
    "Gut Health",
    "The Gut-Brain Connection: Why Your Anxiety Might Start in Your Stomach",
    "Explore the science behind the gut-brain axis and how it influences anxiety and digestion.",
    "January 15, 2025",
    "8 min",
    "/blogs/gut-brain-connection",
  ],
  [
    "Hormones",
    "Perimenopause and Gut Health: What Most Doctors Overlook",
    "Explore the connection between perimenopause, estrogen, and your gut microbiome.",
    "January 12, 2025",
    "7 min",
    "/blogs/perimenopause-gut-health",
  ],
  [
    "Nutrition",
    "Root-Cause Nutrition vs. Quick Fixes",
    "Discover why personalized nutrition strategies can support more sustainable change than generic advice.",
    "July 10, 2025",
    "6 min",
    "/blogs/root-cause-nutrition",
  ],
  [
    "Stress",
    "The Hidden Link Between Stress & Gut Issues",
    "Explore stress and gut health through Polyvagal Theory and practical tools for balance.",
    "August 8, 2025",
    "9 min",
    "/blogs/stress-gut-polyvagal",
  ],
];

export function BlogPreview() {
  return (
    <section className="resources-section" id="resources">
      <div className="section-wrap">
        <SectionIntro
          number="07"
          eyebrow="The knowledge hub"
          title={
            <>
              Clear guidance for a more <em>informed health journey.</em>
            </>
          }
          copy="Explore practical, evidence-aware insights on gut health, hormones, stress, and personalized nutrition."
        />
        <div className="article-grid">
          {articles.map(
            ([category, title, excerpt, date, time, url], index) => (
              <article
                className={
                  index === 0 ? "article-card article-featured" : "article-card"
                }
                key={title}
              >
                <div className="article-art">
                  <span>0{index + 1}</span>
                  <Leaf />
                </div>
                <div className="article-content">
                  <div className="article-meta">
                    <span>{category}</span>
                    <span>
                      {date} · {time}
                    </span>
                  </div>
                  <h3>{title}</h3>
                  <p>{excerpt}</p>
                  <Link href={url}>
                    Read the article <ArrowRight size={16} />
                  </Link>
                </div>
              </article>
            ),
          )}
        </div>
        <Link className="all-articles-link" href="/blogs">
          Explore all articles <ArrowUpRight size={17} />
        </Link>
      </div>
    </section>
  );
}

const faqs = [
  [
    "What is functional testing?",
    "Functional testing looks at patterns and markers that may add context to your health history. Tests such as GI-MAP and DUTCH are interpreted alongside your symptoms and goals.",
  ],
  [
    "How long does it take to see results?",
    "Timelines vary with your health history, the complexity of your concerns, and how recommendations fit your life. Progress is reviewed and the plan is adjusted over time.",
  ],
  [
    "Do I need to follow a restrictive diet?",
    "The focus is on sustainable nourishment, not blanket restriction. Recommendations are personalized to your findings, preferences, and practical needs.",
  ],
  [
    "What if I have already tried many approaches?",
    "Your history matters. The process begins by reviewing what you have tried, what helped, and where questions remain before recommending a next step.",
  ],
  [
    "How much do supplements cost?",
    "Costs depend on individual needs. Recommendations are prioritized and discussed with your budget in mind; supplements are never treated as one-size-fits-all.",
  ],
  [
    "Do you work with people outside Texas?",
    "Yes. Virtual consultations are available nationwide, and eligible functional lab testing can be completed from home in the United States.",
  ],
  [
    "What happens after the initial program?",
    "Some clients transition to periodic maintenance check-ins, while others feel equipped to continue independently. The next step depends on your progress and preferences.",
  ],
  [
    "Is functional nutrition covered by insurance?",
    "Services are typically self-pay. Some HSA or FSA plans may reimburse eligible testing; clients can request detailed receipts for their records.",
  ],
];

export function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section className="faq-section" id="faq">
      <div className="section-wrap faq-layout">
        <div>
          <SectionIntro
            number="08"
            eyebrow="Frequently asked"
            title={
              <>
                What to know before <em>we begin.</em>
              </>
            }
            copy="Straightforward answers about the process, timing, testing, virtual care, and investment."
          />
          <Link href={CONSULTATION_URL} target="_blank" rel="noreferrer">
            Still have a question? Book a call <ArrowUpRight size={16} />
          </Link>
        </div>
        <div className="faq-list">
          {faqs.map(([question, answer], index) => (
            <article className={open === index ? "open" : ""} key={question}>
              <button
                onClick={() => setOpen(open === index ? -1 : index)}
                aria-expanded={open === index}
              >
                <span>0{index + 1}</span>
                <strong>{question}</strong>
                <ChevronDown size={18} />
              </button>
              <div>
                <p>{answer}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FinalCTA() {
  return (
    <section className="closing-section" id="final-cta">
      <div className="closing-orbit" aria-hidden="true" />
      <div className="section-wrap closing-inner">
        <span>Begin with one conversation</span>
        <h2>
          Your health story deserves <em>closer attention.</em>
        </h2>
        <p>
          Schedule a complimentary 15-minute Wellness Clarity Call to share what
          you are experiencing and explore whether personalized functional
          nutrition is the right next step.
        </p>
        <div>
          <Link href={CONSULTATION_URL} target="_blank" rel="noreferrer">
            Book your Wellness Clarity Call <ArrowUpRight size={18} />
          </Link>
          <button onClick={downloadMealPlanGuide}>
            Download the free guide <ArrowRight size={18} />
          </button>
        </div>
        <ul>
          <li>
            <Check size={15} /> No obligation
          </li>
          <li>
            <Check size={15} /> Private conversation
          </li>
          <li>
            <Check size={15} /> 15 minutes
          </li>
        </ul>
      </div>
    </section>
  );
}
