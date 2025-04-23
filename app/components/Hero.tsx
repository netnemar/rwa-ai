"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen w-full items-center justify-center text-center px-4" id="about">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-3xl"
      >
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight">
          Analyse&nbsp;
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-purple-500">
            Real-World&nbsp;Assets
          </span>
          <br /> with&nbsp;AI Precision
        </h1>
        <p className="mt-6 text-xl md:text-2xl text-gray-300">
          RWA AI gives you institutional-grade insights into tokenised real-world
          assets, credit risk, yield, and on-chain health in seconds.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="#pricing"
            className="px-8 py-3 rounded-2xl text-lg font-medium bg-gradient-to-r from-primary-500 to-purple-500 hover:opacity-90 transition-opacity"
          >
            Get&nbsp;Started
          </Link>
          <a
            href="#features"
            className="px-8 py-3 rounded-2xl text-lg font-medium border border-white/20 hover:bg-white/5 transition-colors"
          >
            Learn&nbsp;More
          </a>
        </div>
      </motion.div>
    </section>
  );
}
