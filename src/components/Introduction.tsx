import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles, Home, Users } from "lucide-react";

export const Introduction = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-8">
            Welcome to <span className="text-primary">Dew & Divine</span>
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10">
            Dew & Divine offers premium salon and spa services designed with comfort, 
            hygiene, and trust at the core.
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center gap-3 bg-secondary px-6 py-4 rounded-2xl"
            >
              <Home className="w-6 h-6 text-primary" />
              <span className="font-medium text-foreground">
                Home services exclusively for women
              </span>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-center gap-3 bg-secondary px-6 py-4 rounded-2xl"
            >
              <Users className="w-6 h-6 text-primary" />
              <span className="font-medium text-foreground">
                Salon services for both men and women
              </span>
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-muted-foreground leading-relaxed flex items-center justify-center gap-2"
          >
            <Sparkles className="w-5 h-5 text-primary" />
            Our certified professionals use sterilized tools and high-quality products 
            to deliver a calm, refined beauty experience.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};
