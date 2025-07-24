import Button from "./Button";
import React from "react";
export default function Hero() {
  return (
    <section
      aria-label="Hero Section"
      className="min-h-screen flex items-center justify-center text-gray-900 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-3xl text-center space-y-6 md:space-y-8 md:pt-12">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight sm:tracking-normal lg:tracking-wide">
          Smart Packaging for Garments & Beyond
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
          We specialize in delivering custom cartons to Garments, Buying Houses,
          and other fast-moving industries.
        </p>
        <div className="pt-4 sm:pt-6 md:pt-8">
          <Button
            btnText="Let's Talk"
            href="/contact"
            height="py-3 sm:py-4"
            width="px-6 sm:px-8"
          />
        </div>
      </div>
    </section>
  );
}
