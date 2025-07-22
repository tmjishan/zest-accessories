import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "Premium Packaging Solutions for Apparel & Accessories | ZEST ACCESSORIES",

  description:
    "Discover high-quality, customizable packaging solutions tailored for garments, apparel, and accessories. Enhance your brand with ZEST's reliable and stylish packaging options.",

  openGraph: {
    title: "Custom Packaging for Apparel & Accessories | ZEST",
    description:
      "Boost your brand presence with ZEST's premium packaging designed for garments, buying houses, and fashion products.",
    url: "https://zestaccessories.netlify.app/", // ✅ Your real live domain
    siteName: "ZEST Accessories",
    images: [
      {
        url: "https://zestaccessories.netlify.app/og-image.png", // ✅ Remove double slash
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
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased md:px-12">{children}</body>
    </html>
  );
}
