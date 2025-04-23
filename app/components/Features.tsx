"use client";
import { motion } from "framer-motion";
import FeatureCard from "./FeatureCard";

const features = [
  {
    title: "AI-Powered Scoring",
    desc: "Machine-learning risk-score for every RWA token updated in real time.",
    icon: "🧠",
  },
  {
    title: "Deep On-Chain Analytics",
    desc: "Trace capital flows, collateral ratios, and protocol health at a glance.",
    icon: "📊",
  },
  {
    title: "Yield Optimiser",
    desc: "Compare APY across protocols and construct optimal portfolios instantly.",
    icon: "💹",
  },
  {
    title: "Reg-Tech Reports",
    desc: "One-click PDF reports that satisfy compliance and audit teams.",
    icon: "📄",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 w-full max-w-7xl px-4 mx-auto">
      <motion.h2
        className="text-4xl md:text-5xl font-semibold text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Key&nbsp;Features
      </motion.h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f) => (
          <FeatureCard key={f.title} {...f} />
        ))}
      </div>
    </section>
  );
}
