"use server";

import Header from "./components/Header";
import SectionTitle from "./components/SectionTitle";
import WhyUs from "./components/WhyUs";

<metadata />;

export default async function Home() {
  return (
    <div>
      <Header />
      <SectionTitle title="Why Us?" content={<WhyUs />} />
    </div>
  );
}
