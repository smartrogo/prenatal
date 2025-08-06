
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Shield, Lock, Key, Globe, CheckCircle } from "lucide-react";

const securityFeatures = [
  {
    icon: Shield,
    title: "Hedera Blockchain",
    description: "Built on the most secure and energy-efficient distributed ledger technology"
  },
  {
    icon: Lock,
    title: "End-to-End Encryption",
    description: "Your data is encrypted at every step, ensuring complete privacy and security"
  },
  {
    icon: Key,
    title: "You Own Your Keys",
    description: "Complete control over your health data with private key ownership"
  },
  {
    icon: Globe,
    title: "Decentralized Storage",
    description: "No single point of failure with distributed data storage across the network"
  }
];

export const Security = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-gradient-card px-3 py-2 rounded-full border border-border shadow-soft">
                <Shield className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-muted-foreground">Enterprise-Grade Security</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
                Your Health Data,
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> 
                  {" "}Truly Secure
                </span>
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Unlike traditional apps that store your sensitive health information on centralized servers, 
                Prenatal uses Hedera's cutting-edge blockchain technology to ensure your data remains private, 
                secure, and under your complete control.
              </p>
            </div>

            <div className="space-y-3">
              {[
                "Your data is never shared without explicit consent",
                "Immutable health records you can trust",
                "Zero-knowledge privacy protection",
                "Compliance with global healthcare standards"
              ].map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>

            <Button variant="hero" size="lg" className="text-base px-6 py-3">
              Learn About Our Security
              <Lock className="w-4 h-4 ml-2" />
            </Button>
          </div>

          {/* Security Features Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {securityFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card 
                  key={index}
                  className="group p-5 bg-gradient-card border border-border hover:shadow-soft transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary p-2 shadow-soft group-hover:shadow-glow transition-shadow duration-300">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
