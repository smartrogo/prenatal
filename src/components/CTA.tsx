import { Button } from "@/components/ui/button";
import { Heart, ArrowRight, Shield } from "lucide-react";

export const CTA = () => {
  return (
    <section className="py-24 bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background/10 via-transparent to-background/10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-gradient-card px-6 py-3 rounded-full border border-border shadow-soft">
              <Shield className="w-5 h-5 text-primary" />
              <span className="font-medium text-foreground">Ready to Start Your Secure Journey?</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
              Join the Future of 
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                {" "}Maternal Health
              </span>
            </h2>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Take control of your pregnancy journey with the most secure, private, and 
              comprehensive maternal health platform powered by blockchain technology.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button variant="hero" size="lg" className="text-xl px-12 py-8 font-bold">
              Start Free Today
              <Heart className="w-6 h-6 ml-3" />
            </Button>
            <Button variant="soft" size="lg" className="text-xl px-12 py-8">
              Schedule Demo
              <ArrowRight className="w-6 h-6 ml-3" />
            </Button>
          </div>

          <div className="pt-8 space-y-4">
            <p className="text-muted-foreground">
              ✓ No credit card required  ✓ Complete data ownership  ✓ HIPAA compliant
            </p>
            
            <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <span>99.9% Uptime</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                <span>Bank-level Security</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                <span>24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};