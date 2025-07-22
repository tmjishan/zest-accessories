"use client";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname(); // for active route detection

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "Industries", href: "/industries" },
    { name: "Why Us", href: "/why-us" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 shadow-md backdrop-blur" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl flex items-center justify-between px-4 py-3">
        {/* ✅ Left: Logo with Image + Text */}
        <a href="/">
          <div className="flex items-center">
            <Image
              src="/ZestLogo.png" // logo path (inside public folder)
              alt="Zest Accessories Logo"
              width={48}
              height={48}
              priority
            />
            <span className="text-xl font-bold text-gray-800 pl-2">
              Zest Accessories
            </span>
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 text-sm font-bold text-gray-700">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`transition-colors hover:text-[#843C1C] ${
                pathname === link.href ? "text-[#843C1C]" : ""
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right: Button */}
        <div className="hidden md:block">
          <a
            href="#"
            className="bg-[#A0522D] hover:bg-[#843C1C] text-white px-4 py-2 rounded-xl text-sm font-semibold"
          >
            Get a Quote
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden text-gray-800">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Items */}
      {isMobileMenuOpen && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-3 bg-white text-sm font-bold text-gray-800">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`transition-colors hover:text-[#843C1C] ${
                pathname === link.href ? "text-[#843C1C]" : ""
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#"
            className="mt-2 bg-[#A0522D] hover:bg-[#843C1C] text-white px-4 py-2 rounded-xl text-sm font-semibold text-center"
          >
            Get a Quote
          </a>
        </div>
      )}
    </nav>
  );
}
