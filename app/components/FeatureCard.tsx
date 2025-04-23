"use client";
import { motion } from "framer-motion";

interface FeatureProps { title: string; desc: string; icon: string; }

export default function FeatureCard({ title, desc, icon }: FeatureProps) {
  return (
    <motion.div className="rounded-2xl p-6 border border-white/10 backdrop-blur-md bg-white/5 hover:bg-white/10 transition-colors h-full"
      initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
      <div className="text-4xl mb-4 select-none">{icon}</div>
      <h3 className="text-2xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-300 leading-relaxed text-base">{desc}</p>
    </motion.div>
  );
}
