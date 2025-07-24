"use server";

import ContactSection from "./components/Contact";
import Header from "./components/Header";
import IndustriesWeServe from "./components/IndustriesWeServe";
import OurProduct from "./components/OurProduct";
import SectionTitle from "./components/SectionTitle";
import Testimonials from "./components/Testimonials";
import WhyUs from "./components/WhyUs";

<metadata />;

export default async function Home() {
  return (
    <div>
      <Header />
      <SectionTitle ID="whyus" title="Why Us?" content={<WhyUs />} />
      <SectionTitle
        ID="product"
        title="Our Products"
        content={<OurProduct />}
      />
      <SectionTitle
        ID="industry"
        title="Industries We Serve"
        content={<IndustriesWeServe />}
      />
      <SectionTitle
        ID="testimonials"
        title="Testimonials"
        content={<Testimonials />}
      />
      <SectionTitle ID="contact" title="Contact" content={<ContactSection />} />
    </div>
  );
}
