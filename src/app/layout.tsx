import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "Premium Packaging Solutions for Apparel & Accessories | ZEST ACCESSORIES",

  description:
    "Discover high-quality, customizable packaging solutions tailored for garments, apparel, and accessories. Enhance your brand with ZEST's reliable and stylish packaging options.",

  openGraph: {
    title: "Custom Carton & Packaging Solutions for Apparel & Accessories",
    description:
      "Get high-quality packaging, cartons, corrugated boxes, and gift wrapping paper. We serve garments, food, and e-commerce industries. Custom sizes available!",
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
    alternateLocale: "en-US",
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
      <body className="antialiased">{children}</body>
    </html>
  );
}
