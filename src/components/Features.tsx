import { Card } from "@/components/ui/card";
import { Calendar, MessageCircle, Activity, Lock, Users, Bell } from "lucide-react";

const features = [
  {
    icon: Activity,
    title: "Pregnancy Tracking",
    description: "Track your baby's growth week by week with personalized insights and milestone notifications, all securely stored.",
    gradient: "from-primary to-secondary"
  },
  {
    icon: Calendar,
    title: "Expert Appointments",
    description: "Easily schedule and manage appointments with verified gynecologists and specialists.",
    gradient: "from-secondary to-accent"
  },
  {
    icon: Bell,
    title: "Daily Health Tips",
    description: "Get personalized, evidence-based health advice tailored to your current pregnancy week.",
    gradient: "from-accent to-primary"
  },
  {
    icon: Users,
    title: "Private Community",
    description: "Connect with other expecting mothers in a secure space where conversations remain completely private.",
    gradient: "from-primary to-accent"
  },
  {
    icon: Lock,
    title: "Data Ownership",
    description: "Your health data is yours. Secured on Hedera blockchain with full privacy and control.",
    gradient: "from-secondary to-primary"
  },
  {
    icon: MessageCircle,
    title: "24/7 Support",
    description: "Get help anytime from our maternal health specialists and AI assistant.",
    gradient: "from-accent to-secondary"
  }
];

export const Features = () => {
  return (
    <section className="py-24 bg-gradient-feature">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Everything for a 
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> Safe Journey</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Complete maternal health tools on secure blockchain technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index}
                className="group p-8 bg-gradient-card border border-border hover:shadow-glow transition-all duration-500 hover:-translate-y-2"
              >
                <div className="space-y-6">
                  <div className="relative">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} p-4 shadow-soft group-hover:shadow-glow transition-shadow duration-300`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};