import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Shield, Home, Users, Sparkles, Clock } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Certified Professionals",
    description: "Trained and certified beauty experts",
  },
  {
    icon: Shield,
    title: "Hygienic & Sterilized",
    description: "All equipment properly sanitized",
  },
  {
    icon: Home,
    title: "Women-Only Home Services",
    description: "Safe and private home experience",
  },
  {
    icon: Users,
    title: "Unisex Salon Services",
    description: "Professional care for everyone",
  },
  {
    icon: Sparkles,
    title: "Premium Experience",
    description: "Calm and refined beauty care",
  },
  {
    icon: Clock,
    title: "Flexible Booking",
    description: "Book at your convenience",
  },
];

export const WhyChooseUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
            Why Choose <span className="text-primary">Dew & Divine</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Experience the difference of professional beauty care
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="service-card bg-card p-8 rounded-2xl text-center hover-lift"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
