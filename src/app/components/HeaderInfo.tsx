"use client";
import { Mail, Phone } from "lucide-react";
import React from "react";

export default function HeaderInfo() {
  return (
    <div className="bg-black text-white text-md">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center px-4 py-2 gap-2">
        <div className="flex items-center gap-2">
          <Mail size={20} />
          <a
            href="mailto:your@email.com"
            className="hover:underline text-gray-300"
          >
            zestfashionbd@gmail.com
          </a>
        </div>
        <div className="flex items-center gap-2">
          <Phone size={20} />
          <a
            href="tel:+8801859508663"
            className="hover:underline text-gray-300"
          >
            +88018-59508663
          </a>
          or
          <a
            href="tel:+8801752533233"
            className="hover:underline text-gray-300"
          >
            +88017-52533233
          </a>
        </div>
      </div>
    </div>
  );
}
