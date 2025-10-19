import { motion } from 'motion/react';

export function Logo({ className = "" }: { className?: string }) {
  return (
    <motion.div 
      className={`flex items-center gap-3 ${className}`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Heart + Brain in Chat Bubble Logo */}
      <div className="relative">
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Chat bubble with gradient */}
          <defs>
            <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00BFA5" />
              <stop offset="100%" stopColor="#0F2D5F" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {/* Chat bubble background */}
          <motion.path
            d="M38 8H10C7.79086 8 6 9.79086 6 12V30C6 32.2091 7.79086 34 10 34H16L24 42L32 34H38C40.2091 34 42 32.2091 42 30V12C42 9.79086 40.2091 8 38 8Z"
            fill="url(#logoGradient)"
            filter="url(#glow)"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
          
          {/* Heart (left side) */}
          <motion.path
            d="M17 16C15 16 14 17.5 14 19C14 22 17 24 19 26C21 24 24 22 24 19C24 17.5 23 16 21 16C20 16 19 16.5 19 17.5C19 16.5 18 16 17 16Z"
            fill="white"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, duration: 0.4 }}
          />
          
          {/* Brain (right side) */}
          <motion.path
            d="M28 17C27 17 26 17.8 26 19V24C26 25.2 27 26 28 26H30C31 26 32 25.2 32 24V19C32 17.8 31 17 30 17H28ZM27.5 19H28.5V21H27.5V19ZM29.5 19H30.5V21H29.5V19ZM27.5 22H28.5V24H27.5V22ZM29.5 22H30.5V24H29.5V22Z"
            fill="white"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.4, duration: 0.4 }}
          />
        </svg>
      </div>
      
      {/* Text logo */}
      <div className="flex flex-col leading-tight">
        <span className="bg-gradient-to-r from-[#00BFA5] to-[#0F2D5F] bg-clip-text text-transparent">
          HealthMate
        </span>
        <span className="text-sm text-gray-600">Sehat ka Smart Dost</span>
      </div>
    </motion.div>
  );
}
