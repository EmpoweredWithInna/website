import { Header } from "../components/header";
import { Hero } from "../components/hero";
import { SocialProof } from "../components/SocialProof";
import { HowWeHelp } from "../components/HowWeHelp";
import { Services } from "../components/Services";
import { MyStory } from "../components/MyStory";
import { Testimonials } from "../components/Testimonials";
import { QuickTips } from "../components/QuickTips";
import { BlogPreview } from "../components/BlogPreview";
import { LeadMagnet } from "../components/LeadMagnet";
import { FAQ } from "../components/FAQ";
import { FinalCTA } from "../components/FinalCTA";
import { ChatWidget } from "../components/ChatWidget";
import { ScrollProgress } from "../components/ScrollProgress";
import { BackToTop } from "../components/BackToTop";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Header />
      <main className="overflow-x-hidden">
        <Hero />
        <SocialProof />
        <HowWeHelp />
        <Services />
        <MyStory />
        <Testimonials />
        <QuickTips />
        <BlogPreview />
        <LeadMagnet />
        <FAQ />
        <FinalCTA />
      </main>
      <ChatWidget />
      <BackToTop />
    </>
  );
}