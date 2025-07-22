"use client";
import { useEffect, useRef } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";

export default function Header() {
  const videoRef = useRef<HTMLVideoElement>(null); // ✅ Type added

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5; // ✅ Slow motion
    }
  }, []);

  return (
    <div className="relative min-h-screen max-h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-[-1] opacity-80"
      >
        <source src="/headerBgVideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Blur Overlay */}
      <div className="absolute inset-0 backdrop-blur-xs bg-white/10 z-0"></div>

      {/* Foreground Content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
      </div>
    </div>
  );
}
