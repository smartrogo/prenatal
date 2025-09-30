import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Security } from "@/components/Security";
import { HowItWorks } from "@/components/HowItWorks";
import { Testimonials } from "@/components/Testimonials";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { ChatBot } from "@/components/ChatBot";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-20">
        <Hero />
        <div id="features">
          <Features />
        </div>
        <div id="security">
          <Security />
        </div>
        <div id="how-it-works">
          <HowItWorks />
        </div>
        <div id="testimonials">
          <Testimonials />
        </div>
        <CTA />
        <div id="support">
          <Footer />
        </div>
      </div>
      <ChatBot />
    </div>
  );
};

export default Index;
