"use server";

import Header from "./components/Header";
import SectionTitle from "./components/SectionTitle";

<metadata />;

export default async function Home() {
  return (
    <div>
      <Header />
      <SectionTitle title="Why Us?" />
    </div>
  );
}
