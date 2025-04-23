"use client";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#features", label: "Features" },
  { href: "#pricing", label: "Pricing" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full backdrop-blur-md bg-black/30 border-b border-white/10 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <Link href="/">
          <Logo className="w-36 h-auto" />
        </Link>
        <nav className="hidden md:flex gap-8 text-lg">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="transition-colors hover:text-primary-400">
              {link.label}
            </a>
          ))}
        </nav>
        {/* mobile menu button */}
        <button className="md:hidden p-2 rounded-lg border border-white/20" onClick={() => setOpen(!open)}>
          <span className="sr-only">Toggle navigation</span>
          <div className="space-y-1">
            <span className="block h-0.5 w-6 bg-white"></span>
            <span className="block h-0.5 w-6 bg-white"></span>
            <span className="block h-0.5 w-6 bg-white"></span>
          </div>
        </button>
      </div>
      {/* mobile panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            className="overflow-hidden md:hidden backdrop-blur-md bg-black/80 border-t border-white/10"
          >
            <div className="px-6 py-4 flex flex-col gap-4 text-lg">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="transition-colors hover:text-primary-400"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
