"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, ArrowUpRight, Clock3, Leaf, Mail } from "lucide-react";
import { CONSULTATION_URL } from "../lib/site";

const posts = [
  {
    title:
      "The Gut-Brain Connection: Why Your Anxiety Might Start in Your Stomach",
    excerpt:
      "Explore the science behind the gut-brain axis and how it influences anxiety and digestion, with practical strategies for balance.",
    date: "January 15, 2025",
    readTime: "8 min read",
    category: "Gut Health",
    url: "/blogs/gut-brain-connection",
    tags: ["Anxiety", "Microbiome", "Gut health"],
  },
  {
    title: "Perimenopause and Gut Health: What Most Doctors Overlook",
    excerpt:
      "Explore the relationship between perimenopause, estrogen, and the gut microbiome—and why the connection matters.",
    date: "January 12, 2025",
    readTime: "7 min read",
    category: "Hormones",
    url: "/blogs/perimenopause-gut-health",
    tags: ["Perimenopause", "Estrogen", "Microbiome"],
  },
  {
    title: "When Standard Healthcare Fails Women",
    excerpt:
      "Understand gender bias in medical care, why women face delayed diagnoses, and how to advocate for more attentive support.",
    date: "January 5, 2025",
    readTime: "12 min read",
    category: "Women’s Health",
    url: "/blogs/healthcare-fails-women",
    tags: ["Advocacy", "Gender bias", "Women’s health"],
  },
  {
    title:
      "Corporate Wellness Spotlight: How Gut Health Programs Boost Productivity",
    excerpt:
      "A closer look at digestive health in the workplace and practical considerations for more supportive wellness programs.",
    date: "January 2, 2025",
    readTime: "10 min read",
    category: "Workplace",
    url: "/blogs/corporate-wellness",
    tags: ["Workplace health", "Productivity", "Wellness"],
  },
  {
    title: "Root-Cause Nutrition vs. Quick Fixes: Why Personalization Matters",
    excerpt:
      "Discover why individualized nutrition strategies can support more sustainable change than generic recommendations.",
    date: "July 10, 2025",
    readTime: "6 min read",
    category: "Nutrition",
    url: "/blogs/root-cause-nutrition",
    tags: ["Personalization", "Testing", "Nutrition"],
  },
  {
    title: "The Hidden Link Between Stress and Gut Issues",
    excerpt:
      "Explore stress and digestive health through Polyvagal Theory, with tools designed to support greater balance.",
    date: "August 8, 2025",
    readTime: "9 min read",
    category: "Gut Health",
    url: "/blogs/stress-gut-polyvagal",
    tags: ["Stress", "Polyvagal theory", "Gut barrier"],
  },
];

const categories = [
  "All",
  ...Array.from(new Set(posts.map((post) => post.category))),
];

export function BlogIndex() {
  const [category, setCategory] = useState("All");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const visiblePosts =
    category === "All"
      ? posts
      : posts.filter((post) => post.category === category);
  const featured = posts[0];

  async function subscribe(event: React.FormEvent) {
    event.preventDefault();
    setMessage("Sending…");
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
    }
  }

  return (
    <div className="blog-index-page">
      <section className="blog-index-hero">
        <div className="blog-index-orbit" aria-hidden="true" />
        <div className="section-wrap">
          <nav aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <span>Knowledge hub</span>
          </nav>
          <div className="blog-index-heading">
            <div>
              <span>Perspectives from Inna</span>
              <p>Functional nutrition, made clearer</p>
            </div>
            <h1>
              Knowledge for a more <em>informed health journey.</em>
            </h1>
          </div>
          <p className="blog-index-deck">
            Evidence-aware guidance on gut health, hormones, stress, nutrition,
            and self-advocacy—written to help you ask better questions about
            your health.
          </p>
        </div>
      </section>

      <main className="blog-index-main section-wrap">
        <section className="blog-featured" aria-labelledby="featured-article">
          <div className="blog-featured-art">
            <span>Editor’s pick</span>
            <Leaf aria-hidden="true" />
            <small>01</small>
          </div>
          <div className="blog-featured-copy">
            <div className="blog-post-meta">
              <span>{featured.category}</span>
              <span>
                {featured.date} · {featured.readTime}
              </span>
            </div>
            <h2 id="featured-article">{featured.title}</h2>
            <p>{featured.excerpt}</p>
            <ul>
              {featured.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
            <Link href={featured.url}>
              Read the featured article <ArrowRight size={17} />
            </Link>
          </div>
        </section>

        <section className="blog-library" aria-labelledby="article-library">
          <div className="blog-library-head">
            <div>
              <span>Explore the library</span>
              <h2 id="article-library">Notes for your next step.</h2>
            </div>
            <div className="blog-filters" aria-label="Filter articles by topic">
              {categories.map((item) => (
                <button
                  className={category === item ? "active" : ""}
                  onClick={() => setCategory(item)}
                  key={item}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <div className="blog-card-grid">
            {visiblePosts.map((post, index) => (
              <article className="blog-index-card" key={post.url}>
                <div className="blog-card-art">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <Leaf />
                </div>
                <div className="blog-card-copy">
                  <div className="blog-post-meta">
                    <span>{post.category}</span>
                    <span>
                      <Clock3 size={13} />
                      {post.readTime}
                    </span>
                  </div>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <time>{post.date}</time>
                  <Link href={post.url} aria-label={`Read ${post.title}`}>
                    Read article <ArrowRight size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="blog-subscribe">
          <div>
            <Mail aria-hidden="true" />
            <span>Notes from Inna</span>
            <h2>Thoughtful guidance, delivered with care.</h2>
            <p>
              Receive practical nutrition insights and new resources without the
              noise.
            </p>
          </div>
          <form onSubmit={subscribe}>
            <label htmlFor="blog-email">Email address</label>
            <div>
              <input
                id="blog-email"
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
            {message && <p role="status">{message}</p>}
          </form>
          <Link href={CONSULTATION_URL} target="_blank" rel="noreferrer">
            Prefer a conversation? Book a clarity call{" "}
            <ArrowUpRight size={16} />
          </Link>
        </section>
      </main>
    </div>
  );
}
