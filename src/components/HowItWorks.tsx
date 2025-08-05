import { Card } from "@/components/ui/card";
import { UserPlus, Smartphone, Shield, Heart } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    step: "01",
    title: "Create Your Account",
    description: "Sign up securely with blockchain-based identity verification. Your private keys are generated and stored safely on your device.",
    color: "from-primary to-secondary"
  },
  {
    icon: Smartphone,
    step: "02", 
    title: "Start Tracking",
    description: "Begin logging your pregnancy journey with our intuitive interface. All data is encrypted and stored on the Hedera network.",
    color: "from-secondary to-accent"
  },
  {
    icon: Shield,
    step: "03",
    title: "Connect Safely",
    description: "Join our private community and connect with healthcare providers. Your privacy is protected by zero-knowledge protocols.",
    color: "from-accent to-primary"
  },
  {
    icon: Heart,
    step: "04",
    title: "Enjoy Peace of Mind",
    description: "Focus on your pregnancy knowing your health data is secure, private, and always under your complete control.",
    color: "from-primary to-accent"
  }
];

export const HowItWorks = () => {
  return (
    <section className="py-24 bg-gradient-feature">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            How 
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> Prenatal </span>
            Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Getting started with secure, decentralized maternal health care is simple and straightforward
          </p>
        </div>

        <div className="relative">
          {/* Connection Lines */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-accent opacity-30 transform -translate-y-1/2" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <Card 
                  key={index}
                  className="group relative p-8 bg-gradient-card border border-border hover:shadow-glow transition-all duration-500 hover:-translate-y-2 text-center"
                >
                  {/* Step Number */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white text-sm font-bold shadow-soft`}>
                      {step.step}
                    </div>
                  </div>

                  <div className="space-y-6 pt-4">
                    <div className="mx-auto">
                      <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${step.color} p-4 shadow-soft group-hover:shadow-glow transition-shadow duration-300`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {step.description}
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