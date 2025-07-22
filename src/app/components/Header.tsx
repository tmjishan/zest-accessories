"use client";
import Navbar from "./Navbar";
import Hero from "./Hero";

export default function Header() {
  return (
    <div className="bg-img relative min-h-screen max-h-screen w-full overflow-hidden">
      {/* Blur Overlay */}
      <div className="absolute inset-0 backdrop-blur-[3px] bg-white/40 z-0"></div>

      {/* Foreground Content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
      </div>
    </div>
  );
}
