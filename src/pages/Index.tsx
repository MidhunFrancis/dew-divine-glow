import { Header } from "@/components/Header";
import { HeroSlider } from "@/components/HeroSlider";
import { Introduction } from "@/components/Introduction";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import { Gallery } from "@/components/Gallery";
import { Contact } from "@/components/Contact";
import { CouponPopup } from "@/components/CouponPopup";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSlider />
        <Introduction />
        <WhyChooseUs />
        <About />
        <Services />
        <Testimonials />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <CouponPopup />
    </div>
  );
};

export default Index;
