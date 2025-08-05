import { Button } from "@/components/ui/button";
import { Heart, Shield, Users } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background/20 via-background/10 to-transparent" />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-gradient-card px-4 py-2 rounded-full border border-border shadow-soft">
                <Shield className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-muted-foreground">Secured by Hedera Blockchain</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
                Your Journey,
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent"> 
                  Secured
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl">
                Track your pregnancy, connect with experts, and join a private community—all with 
                <span className="font-semibold text-foreground"> complete data ownership</span> on the most secure blockchain.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="lg" className="text-lg px-8 py-6">
                Start Your Journey
                <Heart className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="soft" size="lg" className="text-lg px-8 py-6">
                Learn More
              </Button>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">10K+</div>
                <div className="text-sm text-muted-foreground">Expecting Mothers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Healthcare Providers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">99.9%</div>
                <div className="text-sm text-muted-foreground">Data Security</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary via-secondary to-accent rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
              <img 
                src={heroImage} 
                alt="Prenatal App - Secure Pregnancy Journey" 
                className="relative w-full max-w-lg mx-auto rounded-2xl shadow-2xl transform transition-transform duration-500 hover:scale-105"
              />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -left-4 bg-gradient-card p-4 rounded-xl shadow-glow border border-border animate-pulse">
              <Users className="w-6 h-6 text-primary" />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-gradient-card p-4 rounded-xl shadow-glow border border-border animate-pulse delay-75">
              <Shield className="w-6 h-6 text-accent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};