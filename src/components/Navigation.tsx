import { Button } from "@/components/ui/button";
import { Heart, Menu, X, Shield } from "lucide-react";
import { useState } from "react";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { label: "Features", href: "#features" },
    { label: "Security", href: "#security" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Support", href: "#support" }
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="relative">
              <Heart className="w-8 h-8 text-primary group-hover:animate-pulse transition-all duration-300" />
              <div className="absolute -inset-1 bg-primary/20 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <span className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
              Prenatal
            </span>
            <div className="hidden md:flex items-center gap-2 ml-2 bg-gradient-card px-3 py-1 rounded-full">
              <Shield className="w-4 h-4 text-accent" />
              <span className="text-xs font-medium text-muted-foreground">Hedera Secured</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-muted-foreground hover:text-primary font-medium transition-colors duration-300 relative group"
              >
                {item.label}
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></div>
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <SignedOut>
              <Button 
                variant="ghost" 
                className="font-medium text-foreground hover:text-primary"
                onClick={() => navigate("/sign-in")}
              >
                Sign In
              </Button>
              <Button 
                className="bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90 shadow-soft"
                onClick={() => navigate("/sign-up")}
              >
                Sign Up
                <Heart className="w-4 h-4 ml-2" />
              </Button>
            </SignedOut>
            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-6 border-t border-border bg-background/95 backdrop-blur-xl">
            <div className="space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block py-2 text-muted-foreground hover:text-primary font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-4 space-y-3">
                <SignedOut>
                  <Button 
                    variant="ghost" 
                    className="w-full text-foreground hover:text-primary"
                    onClick={() => {
                      setIsMenuOpen(false);
                      navigate("/sign-in");
                    }}
                  >
                    Sign In
                  </Button>
                  <Button 
                    className="w-full bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90"
                    onClick={() => {
                      setIsMenuOpen(false);
                      navigate("/sign-up");
                    }}
                  >
                    Sign Up
                    <Heart className="w-4 h-4 ml-2" />
                  </Button>
                </SignedOut>
                <SignedIn>
                  <div className="flex justify-center pt-2">
                    <UserButton afterSignOutUrl="/" />
                  </div>
                </SignedIn>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};