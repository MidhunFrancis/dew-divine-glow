import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, Lock, Smile } from "lucide-react";
import hero2 from "@/assets/hero-2.jpg";

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={hero2}
                alt="Dew & Divine Salon Interior"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent" />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-accent/50 rounded-full -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
              About <span className="text-primary">Dew & Divine</span>
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Dew & Divine was created with the vision of delivering professional 
              beauty care with elegance, safety, and trust.
            </p>
            
            <p className="text-muted-foreground leading-relaxed mb-8">
              We understand that privacy and comfort matter — especially for home services. 
              That's why our home services are exclusively for women, ensuring peace of mind 
              and safety. Our salon services welcome both men and women, offering expert 
              grooming and beauty treatments in a clean, calm, and professional environment.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Lock className="w-6 h-6 text-primary" />
                </div>
                <p className="text-foreground font-medium">
                  Privacy and safety are our top priorities
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <p className="text-foreground font-medium">
                  Beauty that's personal and thoughtfully delivered
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Smile className="w-6 h-6 text-primary" />
                </div>
                <p className="text-foreground font-medium">
                  Experience that's never rushed
                </p>
              </div>
            </div>

            <blockquote className="border-l-4 border-primary pl-6 py-2 italic text-lg text-muted-foreground">
              "Beauty should never feel rushed. At Dew & Divine, it is personal, 
              professional, and thoughtfully delivered."
            </blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
