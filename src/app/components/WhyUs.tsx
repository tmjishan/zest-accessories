import React from "react";
import Image from "next/image";
const Data = [
  {
    icon: "/package-svgrepo-com.svg",
    title: "Garment-Grade Customization",
    description: "Perfect fit for shirts, pants, accessories & bulk garments",
  },
  {
    icon: "/price-in-euro-euro-pricing-svgrepo-com.svg",
    title: "Bulk Pricing for Businesses",
    description: "Wholesale rates to maximize your margins",
  },
  {
    icon: "/delivery-svgrepo-com.svg",
    title: "Consistent Delivery",
    description: "Timely delivery for your supply chain, every time",
  },
];

export default function WhyUs() {
  return (
    <div className="w-full md:max-w-7xl mx-auto px-6 md:px-10 py-8">
      <div className="flex flex-col md:flex-row gap-8 md:gap-20 justify-center items-stretch">
        {Data.map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md flex-1 w-full max-w-sm md:max-w-none transform transition-transform duration-300 hover:scale-105
                       flex flex-col justify-between items-center text-center"
          >
            <div className="mb-4 flex justify-center">
              <Image src={item.icon} alt={item.title} width={48} height={48} />
            </div>
            <h3 className="font-bold tracking-wide text-xl text-gray-900 mb-2">
              {item.title}
            </h3>
            <p className="font-normal text-black/70 text-base">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
