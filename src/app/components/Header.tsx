"use client";
import Navbar from "./Navbar";
import Hero from "./Hero";

export default function Header() {
  return (
    <div className="bg-img relative min-h-screen max-h-screen w-full overflow-hidden">
      <div className="absolute inset-0 backdrop-blur-[1px] bg-gradient-to-b from-white to-black/40 z-0"></div>

      <div className="relative z-10">
        <Navbar />
        <Hero />
      </div>
    </div>
  );
}
