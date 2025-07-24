import Image from "next/image"; // Image component import করা হয়েছে
import React from "react"; // React import করা ভালো অভ্যাস

const Data = [
  {
    imgURL: "/boxes-3883980_640.jpg",
    title: "Garments Carton Box",
  },
  {
    imgURL: "/carton-3767762_1280.jpg",
    title: "5Ply Carton Box",
  },
  {
    imgURL: "/packages-6153947_640.jpg",
    title: "E-Commerse Carton Box",
  },
  {
    imgURL: "/moving-box-4115066_640.png",
    title: "Custom Carton Box",
  },
];

export default function OurProduct() {
  return (
    // Outer container for the grid. Added responsive padding and max-width for overall layout.
    <div className="w-full text-center">
      {/* Grid container for responsive layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
        {" "}
        {/* Adjusted gap to standard Tailwind scale */}
        {Data.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl p-4 sm:p-6" // Card styling with responsive padding
          >
            {/* Image container: Relative for fill prop, overflow-hidden for zoom effect clipping */}
            <div className="relative w-full h-80 sm:h-80 md:h-64 rounded-lg overflow-hidden group">
              {" "}
              {/* Added 'group' class for hover effect */}
              <Image
                src={item.imgURL}
                alt={item.title}
                fill // `fill` prop makes the image take up 100% width and height of its parent
                className="object-cover object-center transition-transform duration-350 ease-in-out group-hover:scale-110 rounded-lg border-2 border-black/50" // Image zoom effect
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Responsive image sizes for optimization
              />
            </div>
            {/* Content area */}
            <div className="p-4 text-center">
              {" "}
              {/* Padding around title, adjust as needed */}
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 leading-tight">
                {" "}
                {/* Changed to h3 for semantic clarity */}
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
