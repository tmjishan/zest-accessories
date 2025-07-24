"use client";
import React, { useState, useEffect } from "react";

interface TestimonialItem {
  quote: string;
  name: string;
  designation: string;
}

const testimonialsData: TestimonialItem[] = [
  {
    quote:
      "Their innovative packaging solutions have significantly enhanced our product presentation and supply chain efficiency. A truly reliable partner!",
    name: "Arif Chowdhury",
    designation: "Smart Park",
  },
  {
    quote:
      "RJ Fashion relies on their timely and high-quality packaging. Their attention to detail ensures our garments are perfectly presented.",
    name: "Nabila Faridi",
    designation: "RJ Fashion",
  },
  {
    quote:
      "The custom packaging from Smart Tex International consistently meets our stringent quality standards. Excellent service and support.",
    name: "Asif Rahman",
    designation: "Smart Tex International",
  },
  {
    quote:
      "Feet Fashion's branding has been elevated by their unique and sturdy packaging designs. We're very happy with their creative approach.",
    name: "Zara Haque",
    designation: "Feet Fashion",
  },
  {
    quote:
      "Their professional team provides exceptional packaging solutions, perfectly aligning with our diverse product range and tight deadlines. Highly recommended!",
    name: "Fahim Miah",
    designation: "Global Sourcing Ltd.",
  },
  {
    quote:
      "Outstanding quality and commitment to sustainable packaging options. They truly understand the needs of the modern apparel industry.",
    name: "Shabnam Begum",
    designation: "Eco Garments Inc.",
  },
];

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % testimonialsData.length);
    }, 3000); // Slides change every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div>
      <div className="max-w-7xl mx-auto ">
        <div className="relative overflow-hidden w-full max-w-3xl mx-auto h-auto min-h-[250px] z-1">
          {testimonialsData.map((item, index) => (
            <div
              key={index}
              className={`absolute top-0 left-0 w-full
                          transition-opacity duration-700 ease-in-out
                          ${
                            index === currentSlide
                              ? "opacity-100 z-10"
                              : "opacity-0 pointer-events-none z-0"
                          }`}
            >
              <div className="single-testimonial-item p-6 sm:p-8 bg-white shadow-md rounded-lg relative text-left min-h-[200px] flex flex-col justify-between">
                <p className="text-gray-700 italic mb-4">{item.quote}</p>
                <h3 className="text-xl font-bold text-gray-900 mt-auto">
                  {item.name}
                  <span className="block text-sm font-normal text-gray-600 mt-1">
                    {item.designation}
                  </span>
                </h3>
                <div className="absolute left-6 top-1/2 -translate-y-1/2 text-3xl text-[#6aaf08] font-bold">
                  <i className="fas fa-quote-right"></i>
                </div>
                <div className="absolute bg-gray-300 w-px h-3/5 left-[72px] top-[15%]"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8 md:mt-1 space-x-3">
          {testimonialsData.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-.1 rounded-sm transition-all duration-300
                          ${
                            index === currentSlide
                              ? "bg-gray-800 w-8"
                              : "bg-[#6aaf08] w-5"
                          }`}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
}
