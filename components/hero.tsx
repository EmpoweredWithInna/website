import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ArrowUpRight, Check, Sparkles } from "lucide-react";
import { CONSULTATION_URL } from "../lib/site";

export function Hero() {
  return (
    <section className="hero-shell" id="home" aria-labelledby="hero-heading">
      <div className="hero-grain" aria-hidden="true" />
      <div className="hero-orbit hero-orbit-one" aria-hidden="true" />
      <div className="hero-orbit hero-orbit-two" aria-hidden="true" />

      <div className="hero-layout">
        <div className="hero-copy">
          <p className="hero-eyebrow">
            <Sparkles aria-hidden="true" size={15} />
            100% virtual functional nutrition for women 40+
          </p>

          <h1 id="hero-heading" className="hero-title">
            Root-cause nutrition for your{" "}
            <span>gut, hormones, and energy.</span>
          </h1>

          <p className="hero-description">
            Work with Inna virtually from Buda, Kyle, Austin, San Marcos, or
            surrounding Central Texas communities. Explore the root causes of
            fatigue, bloating, brain fog, and hormone symptoms through
            personalized nutrition support.
          </p>

          <p className="hero-virtual-banner">
            Virtual appointments — expert support from the comfort of home
          </p>

          <div className="hero-actions">
            <Link
              className="hero-primary-action"
              href={CONSULTATION_URL}
              target="_blank"
              rel="noreferrer"
            >
              Book a complimentary clarity call
              <ArrowUpRight aria-hidden="true" size={18} />
            </Link>
            <Link className="hero-secondary-action" href="#how-we-help">
              See how it works
              <ArrowDownRight aria-hidden="true" size={18} />
            </Link>
          </div>

          <ul className="hero-assurances" aria-label="Practice highlights">
            <li>
              <Check aria-hidden="true" size={15} /> Personalized plans
            </li>
            <li>
              <Check aria-hidden="true" size={15} /> Functional testing
            </li>
            <li>
              <Check aria-hidden="true" size={15} /> Serving the
              Buda–Kyle–Austin–San Marcos corridor
            </li>
          </ul>
        </div>

        <div className="hero-visual">
          <div className="hero-image-frame">
            <Image
              src="/Inna.jpg"
              alt="Inna Benyukhis, Certified Nutritional Therapy Practitioner"
              fill
              priority
              sizes="(max-width: 1024px) 92vw, 44vw"
              className="hero-image"
            />
            <div className="hero-image-wash" aria-hidden="true" />
            <div className="hero-caption">
              <span>Inna Benyukhis</span>
              <small>Certified Nutritional Therapy Practitioner</small>
            </div>
          </div>

          <div className="hero-note hero-note-top">
            <span className="hero-note-number">6+</span>
            <span>
              years of
              <br />
              experience
            </span>
          </div>
          <div className="hero-note hero-note-bottom">
            <span className="hero-note-mark">01</span>
            <span>
              A personal path,
              <br />
              guided by your data.
            </span>
          </div>
        </div>
      </div>

      <div className="hero-symptoms" aria-label="Areas of focus">
        <span>Gut health</span>
        <span>Hormone balance</span>
        <span>Energy</span>
        <span>Brain fog</span>
        <span>Healthy aging</span>
      </div>
    </section>
  );
}
