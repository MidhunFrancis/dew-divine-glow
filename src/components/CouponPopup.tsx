import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Gift, Tag } from "lucide-react";
import { toast } from "sonner";

export const CouponPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [couponCode, setCouponCode] = useState("");

  useEffect(() => {
    // Check if popup was already shown in this session
    const hasShownPopup = sessionStorage.getItem("couponPopupShown");
    
    if (!hasShownPopup) {
      // Show popup after 3 seconds or on first scroll
      const timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem("couponPopupShown", "true");
      }, 3000);

      const handleScroll = () => {
        if (!isOpen) {
          setIsOpen(true);
          sessionStorage.setItem("couponPopupShown", "true");
          window.removeEventListener("scroll", handleScroll);
        }
      };

      window.addEventListener("scroll", handleScroll, { once: true });

      return () => {
        clearTimeout(timer);
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [isOpen]);

  const handleApply = () => {
    if (!couponCode.trim()) {
      toast.error("Please enter a coupon code");
      return;
    }

    // Format message for WhatsApp with coupon
    const message = encodeURIComponent(
      `🎉 *Coupon Code Booking - Dew & Divine*\n\n` +
      `I'd like to book with coupon code: *${couponCode.trim()}*\n\n` +
      `Please share the available discounts and help me with my booking.`
    );

    window.open(`https://wa.me/919746396988?text=${message}`, "_blank");
    setIsOpen(false);
    toast.success("Redirecting to WhatsApp!");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/50 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative bg-card rounded-3xl p-8 md:p-10 max-w-md w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 p-2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Close popup"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Gift className="w-8 h-8 text-primary" />
              </div>

              <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-2">
                🎉 Special Offer
              </h3>
              <p className="text-muted-foreground mb-6">
                Get exclusive discounts on your first booking
              </p>

              <div className="flex gap-2 mb-6">
                <div className="relative flex-1">
                  <Tag className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="text"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value.toUpperCase())}
                    placeholder="Enter Coupon Code"
                    className="w-full pl-12 pr-4 py-4 rounded-xl bg-background border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all uppercase"
                  />
                </div>
              </div>

              <button
                onClick={handleApply}
                className="w-full bg-primary text-primary-foreground py-4 rounded-xl font-medium hover:bg-primary/90 transition-all hover:shadow-lg"
              >
                Apply & Book
              </button>

              <button
                onClick={() => setIsOpen(false)}
                className="mt-4 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Maybe later
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
