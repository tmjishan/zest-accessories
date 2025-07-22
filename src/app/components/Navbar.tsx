"use client";
import { lazy, useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import HeaderInfo from "./HeaderInfo";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

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
    <>
      <nav
        className={`fixed w-screen top-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/80 shadow-md backdrop-blur" : "bg-transparent "
        }`}
      >
        <HeaderInfo />

        <div className="max-w-7xl  mx-auto flex items-center justify-between px-4 py-3">
          {/* ✅ Left: Logo with Image + Text */}
          <Link href="/" className="flex items-center">
            <Image
              src="/ZestLogo.png"
              alt="Zest Accessories Logo"
              width={100}
              height={100}
              priority
              className="w-[48px]"
            />
            <span className="text-xl font-bold text-black pl-2">
              Zest Accessories
            </span>
          </Link>

          {/* ✅ Desktop Menu */}
          <div className="hidden md:flex gap-6 text-sm font-bold text-black">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`transition-colors hover:text-[#843C1C] ${
                  pathname === link.href ? "text-[#843C1C]" : ""
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* ✅ Right: Button */}
          <div className="hidden md:block">
            <Link
              href="/get-quote"
              className="bg-[#A0522D] hover:bg-[#843C1C] text-white px-4 py-2 rounded-xl text-sm font-semibold"
            >
              Get a Quote
            </Link>
          </div>

          {/* ✅ Mobile Menu Icon */}
          <div className="md:hidden text-black">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* ✅ Mobile Menu Items */}
        {isMobileMenuOpen && (
          <div className="md:hidden px-4 pb-4 flex flex-col gap-3 bg-white text-sm font-bold text-black">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`transition-colors hover:text-[#843C1C] ${
                  pathname === link.href ? "text-[#843C1C]" : ""
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/get-quote"
              className="mt-2 bg-[#A0522D] hover:bg-[#843C1C] text-white px-4 py-2 rounded-xl text-sm font-semibold text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get a Quote
            </Link>
          </div>
        )}
      </nav>
    </>
  );
}
