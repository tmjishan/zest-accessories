import React from "react";
import Button from "./Button";

const ContactSection: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Input Field: Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-gray-700 text-base font-medium mb-2"
            >
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brown-500 bg-gray-100 placeholder-gray-500"
              placeholder=""
            />
          </div>

          {/* Input Field: Phone Number */}
          <div>
            <label
              htmlFor="phone"
              className="block text-gray-700 text-base font-medium mb-2"
            >
              Phone Number:
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brown-500 bg-gray-100 placeholder-gray-500"
              placeholder=""
            />
          </div>

          {/* Input Field: Company */}
          <div>
            <label
              htmlFor="company"
              className="block text-gray-700 text-base font-medium mb-2"
            >
              Company:
            </label>
            <input
              type="text"
              id="company"
              name="company"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brown-500 bg-gray-100 placeholder-gray-500"
              placeholder=""
            />
          </div>

          {/* Input Field: Carton Type / Size */}
          <div>
            <label
              htmlFor="cartonType"
              className="block text-gray-700 text-base font-medium mb-2"
            >
              Carton Type / Size:
            </label>
            <input
              type="text"
              id="cartonType"
              name="cartonType"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brown-500 bg-gray-100 placeholder-gray-500"
              placeholder=""
            />
          </div>

          {/* Input Field: Quantity */}
          <div>
            <label
              htmlFor="quantity"
              className="block text-gray-700 text-base font-medium mb-2"
            >
              Quantity:
            </label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brown-500 bg-gray-100 placeholder-gray-500"
              aria-placeholder="Quantity:"
              placeholder=""
            />
          </div>

          {/* Send Request Button */}
          <div className=" md:col-span-1 flex items-end justify-center">
            <Button
              btnText="Send Request"
              height="py-3"
              width="px-7"
              href="/"
            />
          </div>
        </form>

        <p className="text-center text-gray-800 text-lg font-semibold my-8">
          OR
        </p>

        {/* Call Button */}
        <div className="flex justify-center">
          <a
            href="tel:+8801859508663"
            className="inline-flex items-center bg-[#a0522d] text-white py-4 px-8 rounded-md hover:bg-[#843c1c] transition duration-300 focus:outline-none focus:ring-2 focus:ring-opacity-50 tracking-wide font-semibold"
          >
            Call : +88018-59508663
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
