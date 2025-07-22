import type { Metadata } from "next";
import "./globals.css";

// page.js বা layout.js
export const metadata = {
  title:
    "Premium Packaging Solutions for Apparel & Accessories | ZEST ACCESSORIES",

  description:
    "Discover high-quality, customizable packaging solutions tailored for garments, apparel, and accessories. Enhance your brand with ZEST's reliable and stylish packaging options.",

  openGraph: {
    title: "Custom Packaging for Apparel & Accessories | ZEST",

    description:
      "Boost your brand presence with ZEST's premium packaging designed for garments, buying houses, and fashion products.",

    url: "http://localhost:3000/", // Replace with your real domain

    siteName: "ZEST Accessories",

    images: [
      {
        url: "http://localhost:3000//og-image.png", // Replace with your real image
        width: 1200,
        height: 630,
        alt: "Packaging Boxes for Garments - ZEST Accessories",
      },
    ],
    locale: "bn_BD",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased md:px-12`}>{children}</body>
    </html>
  );
}
