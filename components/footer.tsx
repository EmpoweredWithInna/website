"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { CONSULTATION_URL } from "../lib/site";

const navigation = [
  ["About", "/#about"],
  ["Services", "/#services"],
  ["Central Texas", "/central-texas-functional-nutrition"],
  ["Contact", "/contact"],
  ["Client stories", "/#testimonials"],
  ["Resources", "/#resources"],
  ["FAQ", "/#faq"],
];

const support = [
  "1:1 nutrition coaching",
  "RESTART® Sugar Detox",
  "Functional lab testing",
  "Root-cause nutrition",
];

export function Footer() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function submitNewsletter(event: React.FormEvent) {
    event.preventDefault();
    setIsSubmitting(true);
    setMessage("");

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, intent: "newsletter" }),
      });
      const data = await response.json();
      setMessage(
        response.ok ? data.message : data.error || "Please try again.",
      );
      if (response.ok) setEmail("");
    } catch {
      setMessage("Please try again in a moment.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <footer className="site-footer">
      <div className="footer-monogram" aria-hidden="true">
        EW
      </div>
      <div className="section-wrap">
        <div className="footer-lead">
          <div>
            <Link
              href="/"
              className="footer-logo"
              aria-label="Empowered Wellness with Inna homepage"
            >
              <Image
                src="/Empowered_SQ_logo_white.png"
                width={170}
                height={58}
                alt="Empowered Wellness with Inna"
              />
            </Link>
            <p>
              Personalized functional nutrition for women ready to understand
              their symptoms and move forward with clarity.
            </p>
          </div>
          <div className="footer-newsletter">
            <span>Notes from Inna</span>
            <h2>Practical wellness, thoughtfully delivered.</h2>
            <form onSubmit={submitNewsletter}>
              <label htmlFor="footer-email">Email address</label>
              <div>
                <input
                  id="footer-email"
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="you@example.com"
                  required
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  aria-label="Subscribe to the newsletter"
                >
                  {isSubmitting ? "…" : <ArrowRight size={19} />}
                </button>
              </div>
            </form>
            {message && (
              <p className="footer-message" role="status">
                {message}
              </p>
            )}
          </div>
        </div>

        <div className="footer-grid">
          <div>
            <span className="footer-label">Explore</span>
            <nav aria-label="Footer navigation">
              {navigation.map(([label, href]) => (
                <Link href={href} key={label}>
                  {label}
                </Link>
              ))}
            </nav>
          </div>
          <div>
            <span className="footer-label">Ways to work together</span>
            <ul>
              {support.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="footer-contact">
            <span className="footer-label">Get in touch</span>
            <a href="mailto:healthy@empoweredwithinna.com">
              <Mail size={16} /> healthy@empoweredwithinna.com
            </a>
            <a href="tel:+13124044675">
              <Phone size={16} /> (312) 404-4675
            </a>
            <p>
              <MapPin size={16} /> Serving Buda, Kyle, Austin, San Marcos, and Central Texas virtually
            </p>
            <Link href={CONSULTATION_URL} target="_blank" rel="noreferrer">
              Book a clarity call <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Empowered Wellness with Inna. All
            rights reserved.
          </p>
          <div>
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
            <Link href="/medical-disclaimer">Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
