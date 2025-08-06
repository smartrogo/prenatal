
import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "First-time Mother",
    content: "Prenatal gave me the confidence I needed during my pregnancy. Knowing my health data was secure and private while still being able to connect with other moms was invaluable.",
    rating: 5,
    avatar: "SC"
  },
  {
    name: "Dr. Maria Rodriguez",
    role: "Gynecologist",
    content: "The integration with Hedera blockchain ensures patient data integrity like no other platform. My patients love the transparency and control they have over their health information.",
    rating: 5,
    avatar: "MR"
  },
  {
    name: "Jennifer Thompson",
    role: "Mother of Two",
    content: "Used Prenatal for both my pregnancies. The community support was amazing, and I never had to worry about my personal information being misused or sold to third parties.",
    rating: 5,
    avatar: "JT"
  }
];

export const Testimonials = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-3 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Trusted by 
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> Families </span>
            Worldwide
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of mothers and healthcare providers who trust Prenatal for their maternal health journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="group p-6 bg-gradient-card border border-border hover:shadow-glow transition-all duration-500 hover:-translate-y-2 relative"
            >
              <Quote className="absolute top-4 right-4 w-6 h-6 text-primary/20" />
              
              <div className="space-y-4">
                {/* Rating */}
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-foreground leading-relaxed">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-semibold shadow-soft">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
