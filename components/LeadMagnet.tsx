"use client";

import { useEffect, useState } from "react";
import {
  ArrowRight,
  BookOpen,
  Check,
  Leaf,
  LockKeyhole,
  Mail,
  Sparkles,
  X,
} from "lucide-react";

interface LeadMagnetProps {
  autoOpen?: boolean;
}

const benefits = [
  "A complete 7-day gut-friendly meal plan",
  "Prebiotic, probiotic, and brain-supporting recipes",
  "A practical shopping list for easier preparation",
  "Simple habits to support mood, energy, and digestion",
];

export function LeadMagnet({ autoOpen = false }: LeadMagnetProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  function closeModal() {
    setIsOpen(false);
  }

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setIsSubmitting(true);
    setMessage("");

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, intent: "guide" }),
      });
      const data = await response.json();

      if (response.ok) {
        setIsSubmitted(true);
        setMessage("Your guide is on its way.");
        setEmail("");
      } else {
        setMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setMessage("Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  useEffect(() => {
    if (!autoOpen || window.sessionStorage.getItem("lead-magnet-shown")) return;

    const timer = window.setTimeout(() => {
      window.sessionStorage.setItem("lead-magnet-shown", "true");
      setIsOpen(true);
    }, 20000);

    return () => window.clearTimeout(timer);
  }, [autoOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeModal();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="lead-modal-backdrop" onMouseDown={closeModal}>
      <section
        className="lead-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="lead-modal-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button
          className="lead-modal-close"
          type="button"
          onClick={closeModal}
          aria-label="Close free guide dialog"
        >
          <X size={19} aria-hidden="true" />
        </button>

        {!isSubmitted ? (
          <div className="lead-modal-layout">
            <div className="lead-guide-panel">
              <div className="lead-guide-orbit" aria-hidden="true" />
              <div className="lead-guide-label">
                <Leaf size={15} aria-hidden="true" /> Complimentary guide
              </div>

              <div
                className="lead-guide-cover"
                aria-label="Preview of the 7-Day Gut-Hormones Reset Meal Plan"
              >
                <div className="lead-guide-cover-top">
                  <span>Empowered Wellness</span>
                  <BookOpen size={21} aria-hidden="true" />
                </div>
                <div className="lead-guide-cover-copy">
                  <small>The</small>
                  <strong>
                    Gut–Hormones
                    <br />
                    Reset
                  </strong>
                  <span>7-Day Meal Plan</span>
                </div>
                <div className="lead-guide-days" aria-hidden="true">
                  {[1, 2, 3, 4, 5, 6, 7].map((day) => (
                    <i key={day}>{day}</i>
                  ))}
                </div>
                <p>
                  Nourish your gut.
                  <br />
                  Balance your mind.
                </p>
              </div>

              <div className="lead-guide-value">
                <span>$47 value</span>
                <strong>Yours complimentary</strong>
              </div>
            </div>

            <div className="lead-modal-content">
              <div className="lead-modal-kicker">
                <Sparkles size={14} aria-hidden="true" /> A better week starts
                here
              </div>
              <h2 id="lead-modal-title">
                The Gut-Hormones Reset: <em>7-Day Meal Plan</em>
              </h2>
              <p className="lead-modal-intro">
                Discover how thoughtful food choices can support digestion,
                hormone health, and steady energy with a practical plan created
                to make starting feel simple.
              </p>

              <div className="lead-modal-includes">
                <span>Inside the guide</span>
                <ul>
                  {benefits.map((benefit) => (
                    <li key={benefit}>
                      <Check size={15} aria-hidden="true" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              <form className="lead-modal-form" onSubmit={handleSubmit}>
                <label htmlFor="lead-magnet-email">
                  Where should we send your guide?
                </label>
                <div>
                  <Mail size={17} aria-hidden="true" />
                  <input
                    id="lead-magnet-email"
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="you@example.com"
                    autoComplete="email"
                    required
                    autoFocus
                  />
                  <button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? (
                      "Sending…"
                    ) : (
                      <>
                        Send my guide{" "}
                        <ArrowRight size={17} aria-hidden="true" />
                      </>
                    )}
                  </button>
                </div>
              </form>

              {message && (
                <p
                  className="lead-modal-message lead-modal-message-error"
                  role="status"
                >
                  {message}
                </p>
              )}
              <p className="lead-modal-privacy">
                <LockKeyhole size={13} aria-hidden="true" /> Your privacy is
                protected. Unsubscribe at any time.
              </p>
            </div>
          </div>
        ) : (
          <div className="lead-modal-success">
            <span>
              <Check size={24} aria-hidden="true" />
            </span>
            <p>One more step</p>
            <h2 id="lead-modal-title">
              Your reset is <em>on its way.</em>
            </h2>
            <div className="lead-success-rule" />
            <p>
              Check your inbox—and your spam folder—for the 7-Day Gut-Hormones
              Reset Meal Plan.
            </p>
            <button type="button" onClick={closeModal}>
              Continue exploring <ArrowRight size={17} aria-hidden="true" />
            </button>
            <small>
              Add healthy@empoweredwithinna.com to your contacts so future
              wellness notes reach you.
            </small>
          </div>
        )}
      </section>
    </div>
  );
}
