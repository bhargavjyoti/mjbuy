'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface CTABannerProps {
  title: string;
  subtitle: string;
  buttonText: string;
  variant?: 'primary' | 'secondary';
}

const CTABanner: React.FC<CTABannerProps> = ({ 
  title, 
  subtitle, 
  buttonText, 
  variant = 'primary' 
}) => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className={`relative py-20 overflow-hidden ${
      variant === 'primary' 
        ? 'bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 dark:from-blue-800 dark:via-blue-900 dark:to-black' 
        : 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 dark:from-black dark:via-gray-900 dark:to-black'
    }`}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className={`absolute top-10 right-10 w-64 h-64 rounded-full blur-3xl ${
            variant === 'primary' ? 'bg-white/10' : 'bg-accent-500/10'
          }`}
        />
        <motion.div
          animate={{ 
            rotate: -360,
            scale: [1.2, 1, 1.2],
          }}
          transition={{ 
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className={`absolute bottom-10 left-10 w-80 h-80 rounded-full blur-3xl ${
            variant === 'primary' ? 'bg-white/5' : 'bg-blue-400/5'
          }`}
        />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-2 h-2 rounded-full ${
              variant === 'primary' ? 'bg-white/20' : 'bg-blue-400/30'
            }`}
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 2) * 40}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 ${
              variant === 'primary' ? 'text-white' : 'text-white'
            }`}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {title}
          </motion.h2>
          
          <motion.p 
            className={`text-xl md:text-2xl mb-10 max-w-3xl mx-auto leading-relaxed ${
              variant === 'primary' ? 'text-white/90' : 'text-neutral-300'
            }`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.button
              onClick={scrollToContact}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(0,0,0,0.2)"
              }}
              whileTap={{ scale: 0.95 }}
              className={`px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 ${
                variant === 'primary'
                  ? 'bg-green-600 text-white hover:bg-green-700 shadow-2xl'
                  : 'bg-green-600 text-white hover:bg-green-700 shadow-2xl shadow-green-600/25'
              }`}
            >
              {buttonText}
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className={`absolute top-1/4 left-10 w-1 h-20 rounded-full ${
              variant === 'primary' ? 'bg-white/20' : 'bg-blue-400/30'
            }`}
            animate={{ scaleY: [1, 1.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.div
            className={`absolute bottom-1/4 right-10 w-1 h-16 rounded-full ${
              variant === 'primary' ? 'bg-white/20' : 'bg-blue-400/30'
            }`}
            animate={{ scaleY: [1.5, 1, 1.5] }}
            transition={{ duration: 2.5, repeat: Infinity }}
          />
        </div>
      </div>
    </section>
  );
};

export default CTABanner;