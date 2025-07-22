"use client";

import React from "react";

export default function HeaderInfo() {
  return (
    <div className="bg-black text-white text-sm">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center px-4 py-2 gap-2">
        <div className="flex items-center gap-2">
          <span className="font-medium">Email:</span>
          <a
            href="mailto:your@email.com"
            className="hover:underline text-gray-300"
          >
            your@email.com
          </a>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-medium">Phone:</span>
          <a href="tel:+155132135221" className="hover:underline text-gray-300">
            +1 551 321 35221
          </a>
        </div>
      </div>
    </div>
  );
}
