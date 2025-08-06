
import { Button } from "@/components/ui/button";
import { Heart, ArrowRight, Shield, Sparkles, Star, Crown } from "lucide-react";

export const CTA = () => {
  return (
    <section className="py-16 bg-gradient-hero relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background/10 via-transparent to-background/10" />
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          
          <div className="space-y-6 animate-fade-in">
            {/* Enhanced Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-card px-6 py-3 rounded-full border border-border shadow-glow hover:shadow-primary/30 transition-all duration-500 group">
              <Crown className="w-5 h-5 text-primary group-hover:animate-bounce" />
              <span className="font-semibold text-foreground">Join 15,000+ Mothers Who Trust Prenatal</span>
              <Sparkles className="w-4 h-4 text-accent animate-pulse" />
            </div>
            
            {/* Enhanced Heading */}
            <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
              Your Pregnancy Journey
              <br />
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-pulse">
                Deserves the Best Protection
              </span>
            </h2>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Join the revolution in maternal health. Experience pregnancy tracking that's 
              <span className="font-bold text-primary"> truly yours</span>, 
              <span className="font-bold text-secondary"> completely private</span>, and 
              <span className="font-bold text-accent"> absolutely secure</span>.
            </p>
          </div>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-2">
            <Button variant="hero" size="lg" className="text-lg px-12 py-6 font-bold group relative overflow-hidden hover:scale-105 transition-all duration-300">
              <span className="relative z-10 flex items-center">
                Start Your Journey Free
                <Heart className="w-5 h-5 ml-3 group-hover:animate-pulse text-white" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            </Button>
            <Button variant="soft" size="lg" className="text-lg px-12 py-6 group hover:scale-105 transition-all duration-300">
              Book Personal Demo
              <Star className="w-5 h-5 ml-3 group-hover:text-primary transition-colors" />
            </Button>
          </div>

          {/* Enhanced Trust Indicators */}
          <div className="pt-8 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-base font-medium text-muted-foreground">
              <div className="flex items-center justify-center gap-2 group hover:text-foreground transition-colors">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span>No Credit Card Required</span>
              </div>
              <div className="flex items-center justify-center gap-2 group hover:text-foreground transition-colors">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse delay-300"></div>
                <span>Your Data, Your Control</span>
              </div>
              <div className="flex items-center justify-center gap-2 group hover:text-foreground transition-colors">
                <div className="w-2 h-2 rounded-full bg-secondary animate-pulse delay-700"></div>
                <span>HIPAA & SOC 2 Compliant</span>
              </div>
            </div>
            
            {/* Enhanced Status Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-base">
              <div className="flex items-center gap-2 bg-gradient-card px-4 py-2 rounded-full border border-border shadow-soft hover:shadow-glow transition-all duration-300 group">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                <span className="font-semibold text-foreground group-hover:text-primary transition-colors">99.99% Uptime</span>
              </div>
              <div className="flex items-center gap-2 bg-gradient-card px-4 py-2 rounded-full border border-border shadow-soft hover:shadow-glow transition-all duration-300 group">
                <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse delay-300"></div>
                <span className="font-semibold text-foreground group-hover:text-primary transition-colors">Enterprise Security</span>
              </div>
              <div className="flex items-center gap-2 bg-gradient-card px-4 py-2 rounded-full border border-border shadow-soft hover:shadow-glow transition-all duration-300 group">
                <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse delay-600"></div>
                <span className="font-semibold text-foreground group-hover:text-primary transition-colors">24/7 Expert Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
