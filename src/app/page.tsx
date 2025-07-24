"use server";

import Header from "./components/Header";
import IndustriesWeServe from "./components/IndustriesWeServe";
import OurProduct from "./components/OurProduct";
import SectionTitle from "./components/SectionTitle";
import WhyUs from "./components/WhyUs";

<metadata />;

export default async function Home() {
  return (
    <div>
      <Header />
      <SectionTitle title="Why Us?" content={<WhyUs />} />
      <SectionTitle title="Our Products" content={<OurProduct />} />
      <SectionTitle
        title="Industries We Serve"
        content={<IndustriesWeServe />}
      />
    </div>
  );
}
