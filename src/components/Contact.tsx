import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Phone, MapPin, Instagram, Send, Home, Building2, Lock } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";

const bookingSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100, "Name is too long"),
  place: z.string().trim().min(2, "Place must be at least 2 characters").max(100, "Place is too long"),
  phone: z.string().trim().regex(/^[0-9]{10}$/, "Please enter a valid 10-digit phone number"),
  date: z.string().min(1, "Please select a date"),
  time: z.string().min(1, "Please select a time"),
  serviceType: z.enum(["home", "salon"], { required_error: "Please select service type" }),
  category: z.string().min(1, "Please select a service category"),
});

type BookingForm = z.infer<typeof bookingSchema>;

const serviceCategories = {
  home: [
    "Facials & Skin Care",
    "Hair Treatments",
    "Massage & Wellness",
    "Nail Care",
    "Extra Beauty Services",
  ],
  salon: [
    "Haircuts & Styling",
    "Hair Colouring",
    "Hair Treatments",
    "Facials & Skin Care",
    "Grooming & Wellness",
  ],
};

export const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState<Partial<BookingForm>>({
    serviceType: "home",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const result = bookingSchema.safeParse(formData);
    
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as string] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }
    
    setErrors({});
    
    // Format message for WhatsApp
    const message = encodeURIComponent(
      `🌸 *New Booking Request - Dew & Divine*\n\n` +
      `*Name:* ${result.data.name}\n` +
      `*Place:* ${result.data.place}\n` +
      `*Phone:* ${result.data.phone}\n` +
      `*Date:* ${result.data.date}\n` +
      `*Time:* ${result.data.time}\n` +
      `*Service Type:* ${result.data.serviceType === "home" ? "Home Service" : "Salon Service"}\n` +
      `*Category:* ${result.data.category}`
    );
    
    window.open(`https://wa.me/919746396988?text=${message}`, "_blank");
    toast.success("Redirecting to WhatsApp for booking confirmation!");
  };

  const handleChange = (field: keyof BookingForm, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
    
    // Reset category when service type changes
    if (field === "serviceType") {
      setFormData((prev) => ({ ...prev, category: "" }));
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
            Book Your <span className="text-primary">Appointment</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Let beauty and grooming come to you
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-serif font-semibold text-foreground mb-6">
                Get in Touch
              </h3>
              
              <div className="space-y-4">
                <a
                  href="tel:+919746396988"
                  className="flex items-center gap-4 p-4 bg-secondary rounded-xl hover:bg-accent transition-colors group"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone / WhatsApp</p>
                    <p className="font-semibold text-foreground">9746396988</p>
                  </div>
                </a>

                <a
                  href="https://www.instagram.com/dew_and_divine"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-secondary rounded-xl hover:bg-accent transition-colors group"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Instagram className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Instagram</p>
                    <p className="font-semibold text-foreground">@dew_and_divine</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 bg-secondary rounded-xl">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Service Area</p>
                    <p className="font-semibold text-foreground">Trivandrum & Kollam, Kerala</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 bg-primary/5 border border-primary/20 rounded-2xl">
              <h4 className="font-semibold text-foreground mb-3">Service Notes</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Home className="w-4 h-4 text-primary" />
                  <span>Home Services: <strong>Women Only</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-primary" />
                  <span>Salon Services: <strong>Men & Women</strong></span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Booking Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="service-card bg-card p-8 rounded-2xl space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    value={formData.name || ""}
                    onChange={(e) => handleChange("name", e.target.value)}
                    className={`w-full px-4 py-3 rounded-xl bg-background border ${
                      errors.name ? "border-destructive" : "border-border"
                    } focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all`}
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="text-destructive text-sm mt-1">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Place *
                  </label>
                  <input
                    type="text"
                    value={formData.place || ""}
                    onChange={(e) => handleChange("place", e.target.value)}
                    className={`w-full px-4 py-3 rounded-xl bg-background border ${
                      errors.place ? "border-destructive" : "border-border"
                    } focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all`}
                    placeholder="Your location"
                  />
                  {errors.place && (
                    <p className="text-destructive text-sm mt-1">{errors.place}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  value={formData.phone || ""}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  className={`w-full px-4 py-3 rounded-xl bg-background border ${
                    errors.phone ? "border-destructive" : "border-border"
                  } focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all`}
                  placeholder="10-digit phone number"
                />
                {errors.phone && (
                  <p className="text-destructive text-sm mt-1">{errors.phone}</p>
                )}
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    value={formData.date || ""}
                    onChange={(e) => handleChange("date", e.target.value)}
                    min={new Date().toISOString().split("T")[0]}
                    className={`w-full px-4 py-3 rounded-xl bg-background border ${
                      errors.date ? "border-destructive" : "border-border"
                    } focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all`}
                  />
                  {errors.date && (
                    <p className="text-destructive text-sm mt-1">{errors.date}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Preferred Time *
                  </label>
                  <input
                    type="time"
                    value={formData.time || ""}
                    onChange={(e) => handleChange("time", e.target.value)}
                    className={`w-full px-4 py-3 rounded-xl bg-background border ${
                      errors.time ? "border-destructive" : "border-border"
                    } focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all`}
                  />
                  {errors.time && (
                    <p className="text-destructive text-sm mt-1">{errors.time}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Service Type *
                </label>
                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={() => handleChange("serviceType", "home")}
                    className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl border transition-all ${
                      formData.serviceType === "home"
                        ? "bg-primary text-primary-foreground border-primary"
                        : "bg-background border-border hover:border-primary"
                    }`}
                  >
                    <Home className="w-5 h-5" />
                    Home
                  </button>
                  <button
                    type="button"
                    onClick={() => handleChange("serviceType", "salon")}
                    className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl border transition-all ${
                      formData.serviceType === "salon"
                        ? "bg-primary text-primary-foreground border-primary"
                        : "bg-background border-border hover:border-primary"
                    }`}
                  >
                    <Building2 className="w-5 h-5" />
                    Salon
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Service Category *
                </label>
                <select
                  value={formData.category || ""}
                  onChange={(e) => handleChange("category", e.target.value)}
                  className={`w-full px-4 py-3 rounded-xl bg-background border ${
                    errors.category ? "border-destructive" : "border-border"
                  } focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all`}
                >
                  <option value="">Select a category</option>
                  {serviceCategories[formData.serviceType || "home"].map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
                {errors.category && (
                  <p className="text-destructive text-sm mt-1">{errors.category}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground py-4 rounded-xl font-medium hover:bg-primary/90 transition-all hover:shadow-lg"
              >
                <Send className="w-5 h-5" />
                Book Now via WhatsApp
              </button>

              <p className="text-center text-xs text-muted-foreground flex items-center justify-center gap-1">
                <Lock className="w-3 h-3" />
                Your details are safe and used only for booking confirmation
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
