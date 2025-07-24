import React from "react";
import {
  Factory,
  Home,
  Package,
  ShoppingBag,
  Building,
  Tag,
} from "lucide-react";
import Image from "next/image";

const nicheData = [
  {
    name: "Garments Manufacturers",
    icon: <Factory size={24} />,
  },
  {
    name: "Buying Houses",
    icon: <Building size={24} />,
  },
  {
    name: "Exporters",
    icon: <Package size={24} />,
  },
  {
    name: "E-commerce Packaging",
    icon: <ShoppingBag size={24} />,
  },
  {
    name: "Local Manufacturers",
    icon: <Home size={24} />,
  },
  {
    name: "Accessories & Fashion Items",
    icon: <Tag size={24} />,
  },
];

export default function IndustriesWeServe() {
  return (
    <div>
      <h5 className="pb-5 font-semibold text-[#a0522d]">
        Trusted by Top Industries!
      </h5>
      <div className="grid grid-cols-3 md:grid-cols-4 grid-flow-cols-dense overflow-hidden gap-3 md:gap-5  items-center text-center">
        {nicheData.map((item, index) => (
          <div key={index} className="flex justify-center items-center">
            <div className="text-lg px-2 sm:text-xl font-bold text-gray-800 leading-loose">
              {item.icon}
            </div>
            <div className="relative rounded-lg overflow-hidden group text-sm tracking-wider">
              {item.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
