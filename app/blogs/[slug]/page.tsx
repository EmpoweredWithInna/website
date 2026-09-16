// app/blogs/[slug]/page.tsx
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import GutBrainConnection from '../../../components/blogs/gut-brain-connection';
import PerimenopauseGutHealth from '../../../components/blogs/perimenopause-gut-health';
import RootCauseNutritionPage from '../../../components/blogs/root-cause-nutrition';
import StressGutPolyvagalPage from '../../../components/blogs/stress-gut-polyvagal';
import HealthcareFailsWomen from '../../../components/blogs/healthcare-fails-women';
import CorporateWellness from '../../../components/blogs/corporate-wellness';
import { BLOG_POSTS, getBlogPost } from '../../../lib/blogPosts';
import { SITE } from '../../../lib/site';

// Map slugs to their corresponding components
const blogComponents = {
  'gut-brain-connection': GutBrainConnection,
  'perimenopause-gut-health': PerimenopauseGutHealth,
  'root-cause-nutrition': RootCauseNutritionPage,
  'stress-gut-polyvagal': StressGutPolyvagalPage,
  'healthcare-fails-women': HealthcareFailsWomen,
  'corporate-wellness': CorporateWellness,
};

// This component dynamically renders a blog post based on the slug
export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const BlogComponent = blogComponents[slug as keyof typeof blogComponents];
  const post = getBlogPost(slug);

  // If the slug doesn't match any component, show a 404 page
  if (!BlogComponent || !post) {
    notFound();
  }

  const url = `${SITE.origin}/blogs/${post.slug}`;
  const articleData = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    mainEntityOfPage: url,
    image: `${SITE.origin}/opengraph-image`,
    author: {
      '@type': 'Person',
      '@id': `${SITE.origin}/#inna-benyukhis`,
      name: SITE.practitionerName,
    },
    publisher: { '@id': `${SITE.origin}/#organization` },
  };
  const breadcrumbData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.origin },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE.origin}/blogs` },
      { '@type': 'ListItem', position: 3, name: post.title, item: url },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
      <BlogComponent />
    </>
  );
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return { title: 'Article not found', robots: { index: false, follow: false } };
  }

  const path = `/blogs/${post.slug}`;
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: path },
    authors: [{ name: SITE.practitionerName }],
    openGraph: {
      title: post.title,
      description: post.description,
      url: path,
      type: 'article',
      publishedTime: post.publishedAt,
      tags: post.tags,
      images: ['/opengraph-image'],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: ['/opengraph-image'],
    },
  };
}

// This function tells Next.js which blog slugs to pre-render at build time
export async function generateStaticParams() {
  return BLOG_POSTS.map(({ slug }) => ({ slug }));
}
