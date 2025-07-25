import React from "react";
import Image from "next/image";
import Button from "./Button";

const Data = [
  {
    icon: "/box-svgrepo-com.svg",
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
    <div className="w-full mx-auto text-center">
      <div className="flex flex-col md:flex-row gap-8 md:gap-20 justify-center items-stretch">
        {Data.map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md flex-1 w-full max-w-sm md:max-w-none transform transition-transform duration-300 hover:scale-105
                       flex flex-col justify-between items-center text-center"
          >
            <Image
              src={item.icon}
              alt={item.title}
              width={48}
              height={48}
              className="mb-4"
            />

            <h3 className="font-bold tracking-wide text-xl text-gray-900 mb-2">
              {item.title}
            </h3>
            <p className="font-normal text-black/70 text-base">
              {item.description}
            </p>
          </div>
        ))}
      </div>
      <div className="pt-10 sm:pt-16 md:pt-20 text-center">
        <Button
          btnText="See More Aligns"
          href="/"
          height="py-3 sm:py-4" // responsive button height
          width="px-6 sm:px-8" // responsive button width
        />
      </div>
    </div>
  );
}
