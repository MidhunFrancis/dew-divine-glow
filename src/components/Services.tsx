import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Home, Building2, Sparkles, Scissors, Heart, Hand, Palette, Star } from "lucide-react";

const homeServices = {
  title: "Home Services",
  subtitle: "Women Only",
  icon: Home,
  categories: [
    {
      name: "Facials & Skin Care",
      icon: Sparkles,
      items: [
        "Korean Facial",
        "Vitamin C Facial",
        "Anti-Aging Facial",
        "Skin Tightening Facial",
        "Whitening & Brightening Facial",
        "Pearl, Diamond, Gold Facial",
        "Charcoal, Coffee, Fruit Facial",
        "Peel-Off Mask",
      ],
    },
    {
      name: "Hair Treatments",
      icon: Scissors,
      items: [
        "Keratin",
        "Smoothening",
        "Blow Dry",
        "Curl & Wave",
        "Anti-Dandruff Treatment",
        "Protein Spa",
        "Hair Spa",
        "Head Massage",
      ],
    },
    {
      name: "Massage & Wellness",
      icon: Heart,
      items: [
        "Head Massage",
        "Face Massage",
        "Hand Massage",
        "Leg Massage",
      ],
    },
    {
      name: "Nail Care",
      icon: Hand,
      items: [
        "Manicure",
        "Pedicure",
        "Nail Art",
        "Nail Extensions",
      ],
    },
    {
      name: "Extra Beauty Services",
      icon: Palette,
      items: [
        "Clean-up",
        "D-Tan",
        "Bleach",
        "Milk Pack",
        "Threading",
        "Waxing",
        "Wart Removal",
      ],
    },
  ],
};

const salonServices = {
  title: "Salon Services",
  subtitle: "Men & Women",
  icon: Building2,
  categories: [
    {
      name: "Haircuts & Styling",
      icon: Scissors,
      items: ["Precision Cuts", "Layered Cuts", "Styling", "Blow Dry"],
    },
    {
      name: "Hair Colouring",
      icon: Palette,
      items: ["Global Colour", "Highlights", "Balayage", "Root Touch-up"],
    },
    {
      name: "Hair Treatments",
      icon: Sparkles,
      items: ["Keratin", "Smoothening", "Hair Spa", "Protein Treatment"],
    },
    {
      name: "Facials & Skin Care",
      icon: Star,
      items: ["Classic Facial", "Anti-Aging", "Brightening", "Deep Cleansing"],
    },
    {
      name: "Grooming & Wellness",
      icon: Heart,
      items: ["Beard Styling", "Clean-up", "Threading", "Waxing"],
    },
  ],
};

export const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState<"home" | "salon">("home");

  const currentServices = activeTab === "home" ? homeServices : salonServices;

  return (
    <section id="services" className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            Discover our range of premium beauty and wellness services
          </p>

          {/* Tabs */}
          <div className="flex justify-center gap-4 mb-12">
            <button
              onClick={() => setActiveTab("home")}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all ${
                activeTab === "home"
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-card text-foreground hover:bg-accent"
              }`}
            >
              <Home className="w-5 h-5" />
              Home Services
              <span className="text-xs opacity-80">(Women Only)</span>
            </button>
            <button
              onClick={() => setActiveTab("salon")}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all ${
                activeTab === "salon"
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-card text-foreground hover:bg-accent"
              }`}
            >
              <Building2 className="w-5 h-5" />
              Salon Services
              <span className="text-xs opacity-80">(Men & Women)</span>
            </button>
          </div>
        </motion.div>

        {/* Service Categories */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {currentServices.categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="service-card bg-card p-6 rounded-2xl"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-foreground">
                  {category.name}
                </h3>
              </div>
              <ul className="space-y-2">
                {category.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-muted-foreground"
                  >
                    <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Service Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8 text-center"
        >
          <h3 className="text-xl font-serif font-semibold text-foreground mb-4">
            Service Availability
          </h3>
          <div className="flex flex-col md:flex-row justify-center gap-6 text-muted-foreground">
            <div className="flex items-center justify-center gap-2">
              <Home className="w-5 h-5 text-primary" />
              <span><strong>Home Services:</strong> Only for Women</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Building2 className="w-5 h-5 text-primary" />
              <span><strong>Salon Services:</strong> Men & Women</span>
            </div>
          </div>
          <p className="mt-4 text-muted-foreground">
            📍 Locations Covered: <strong>Trivandrum & Kollam</strong>
          </p>
        </motion.div>
      </div>
    </section>
  );
};
