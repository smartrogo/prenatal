
import { Button } from "@/components/ui/button";
import { Heart, Shield, Users, Sparkles, Star, Baby } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero flex items-center justify-center overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-secondary rounded-full animate-pulse delay-300 opacity-40"></div>
        <div className="absolute bottom-32 left-1/4 w-1 h-1 bg-accent rounded-full animate-pulse delay-700 opacity-50"></div>
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-primary/30 rounded-full animate-pulse delay-1000"></div>
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-br from-background/20 via-background/10 to-transparent" />
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          
          {/* Content */}
          <div className="space-y-6 text-center lg:text-left animate-fade-in">
            <div className="space-y-4">
              {/* Enhanced Badge */}
              <div className="inline-flex items-center gap-2 bg-gradient-card px-4 py-2 rounded-full border border-border shadow-glow hover:shadow-primary/20 transition-all duration-300">
                <div className="relative">
                  <Shield className="w-4 h-4 text-primary" />
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                </div>
                <span className="text-sm font-medium text-foreground">Secured by Hedera Blockchain</span>
                <Sparkles className="w-3 h-3 text-accent animate-pulse" />
              </div>
              
              {/* Enhanced Heading */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Your Pregnancy,
                <br />
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-pulse"> 
                  Perfectly Protected
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
                Experience the most <span className="font-semibold text-primary">secure pregnancy journey</span> ever created. 
                Your health data stays private, your connections remain confidential, and your peace of mind is guaranteed.
              </p>
            </div>

            {/* Enhanced CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start pt-2">
              <Button variant="hero" size="lg" className="text-base px-8 py-3 group relative overflow-hidden">
                <span className="relative z-10 flex items-center">
                  Begin Your Safe Journey
                  <Baby className="w-4 h-4 ml-2 group-hover:animate-bounce" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              </Button>
              <Button variant="soft" size="lg" className="text-base px-8 py-3 group">
                Watch Demo
                <Star className="w-4 h-4 ml-2 group-hover:text-primary transition-colors" />
              </Button>
            </div>

            {/* Enhanced Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6 max-w-sm mx-auto lg:mx-0">
              <div className="text-center group cursor-pointer">
                <div className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent group-hover:scale-110 transition-transform">15K+</div>
                <div className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">Happy Mothers</div>
              </div>
              <div className="text-center group cursor-pointer">
                <div className="text-2xl font-bold bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent group-hover:scale-110 transition-transform">750+</div>
                <div className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">Healthcare Partners</div>
              </div>
              <div className="text-center group cursor-pointer">
                <div className="text-2xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent group-hover:scale-110 transition-transform">100%</div>
                <div className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">Privacy Guaranteed</div>
              </div>
            </div>
          </div>

          {/* Enhanced Hero Image */}
          <div className="relative animate-fade-in delay-300">
            <div className="relative group">
              {/* Enhanced Glow Effect */}
              <div className="absolute -inset-6 bg-gradient-to-r from-primary via-secondary to-accent rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition-all duration-700 animate-pulse"></div>
              
              {/* Main Image */}
              <div className="relative">
                <img 
                  src={heroImage} 
                  alt="Prenatal App - Your Secure Pregnancy Companion" 
                  className="relative w-full max-w-lg mx-auto rounded-3xl shadow-2xl transform transition-all duration-700 hover:scale-105 hover:rotate-1"
                />
                
                {/* Image Overlay with Icons */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              </div>
            </div>
            
            {/* Enhanced Floating Elements */}
            <div className="absolute -top-4 -left-4 bg-gradient-to-br from-primary to-secondary p-3 rounded-2xl shadow-glow border border-white/20 animate-float">
              <Heart className="w-5 h-5 text-white animate-pulse" />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-gradient-to-br from-accent to-primary p-3 rounded-2xl shadow-glow border border-white/20 animate-float delay-500">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <div className="absolute top-1/2 -right-3 bg-gradient-to-br from-secondary to-accent p-3 rounded-xl shadow-glow border border-white/20 animate-float delay-1000">
              <Users className="w-4 h-4 text-white" />
            </div>
            
            {/* Pregnancy Progress Indicator */}
            <div className="absolute top-6 left-6 bg-white/10 backdrop-blur-sm p-3 rounded-xl border border-white/20">
              <div className="flex items-center gap-2 text-white">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Week 24</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
