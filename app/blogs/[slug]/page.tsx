// app/blogs/[slug]/page.tsx
import { notFound } from 'next/navigation';
import GutBrainConnection from '../../../components/blogs/gut-brain-connection';
import PerimenopauseGutHealth from '../../../components/blogs/perimenopause-gut-health';
import RootCauseNutritionPage from '../../../components/blogs/root-cause-nutrition';
import StressGutPolyvagalPage from '../../../components/blogs/stress-gut-polyvagal';

// Map slugs to their corresponding components
const blogComponents = {
  'gut-brain-connection': GutBrainConnection,
  'perimenopause-gut-health': PerimenopauseGutHealth,
  'root-cause-nutrition': RootCauseNutritionPage,
  'stress-gut-polyvagal': StressGutPolyvagalPage,
};

// This component dynamically renders a blog post based on the slug
export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const BlogComponent = blogComponents[slug as keyof typeof blogComponents];

  // If the slug doesn't match any component, show a 404 page
  if (!BlogComponent) {
    notFound();
  }

  return <BlogComponent />;
}

// This function tells Next.js which blog slugs to pre-render at build time
export async function generateStaticParams() {
  const slugs = Object.keys(blogComponents);

  return slugs.map((slug) => ({
    slug,
  }));
}