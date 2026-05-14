import "./globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Franchir",
    template: "%s | Franchir",
  },
  description:
    "Real-time franchise operations cockpit and SOP apps for multi-location restaurant owners.",
  keywords: [
    "franchise management",
    "restaurant operations",
    "multi-location",
    "SOP",
    "franchise software",
  ],
  authors: [{ name: "Franchir" }],
  creator: "Franchir",
  metadataBase: new URL("https://franchir.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Franchir",
    title: "Franchir - Franchise Operations Cockpit",
    description:
      "Real-time franchise operations cockpit and SOP apps for multi-location restaurant owners.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Franchir - Franchise Operations Cockpit",
    description:
      "Real-time franchise operations cockpit and SOP apps for multi-location restaurant owners.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}


