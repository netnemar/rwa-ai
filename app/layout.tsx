import "./globals.css";
import type { Metadata } from "next";
import { ReactNode } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "RWA AI – Analyse Real-World Asset Tokens with AI",
  description: "Powerful AI toolkit for analysing tokenised real-world assets.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="relative bg-black text-gray-100 overflow-x-hidden">
        {/* glowing radial background */}
        <div className="pointer-events-none fixed inset-0 -z-10 bg-radial-gradient" />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
