import { motion } from "framer-motion";

export default function Logo({ className = "w-32 h-10" }: { className?: string }) {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 160 40"
      className={className}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#50ccff" />
          <stop offset="100%" stopColor="#b950ff" />
        </linearGradient>
      </defs>
      <text
        x="0"
        y="28"
        fill="url(#grad)"
        fontFamily="Marcellus, serif"
        fontSize="32"
        letterSpacing="2"
      >
        RWA&nbsp;AI
      </text>
    </motion.svg>
  );
}
