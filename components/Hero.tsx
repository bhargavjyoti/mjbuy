'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-dark-900 dark:to-dark-800 pt-32 pb-16">
      {/* Background Grid */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(120, 53, 15, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(120, 53, 15, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        {/* Cash Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 px-6 py-3 rounded-full font-semibold text-sm border border-primary-200 dark:border-primary-700">
            💰 We Buy Houses Fast For Cash
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight text-gray-900 dark:text-gray-100 max-w-6xl mx-auto">
            Sell Your House
            <span className="text-primary-600"> Fast For Cash</span>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed"
        >
          Get your no-obligation cash offer from a trusted cash home buyer. 
          No Realtors, No Fees, No Repairs needed. We buy houses as-is!
        </motion.p>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-8 mb-8 text-center"
        >
          <div className="flex items-center gap-2">
            <span className="text-2xl">💰</span>
            <span className="text-gray-700 dark:text-gray-300 font-semibold">Cash Offers</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">⚡</span>
            <span className="text-gray-700 dark:text-gray-300 font-semibold">24 Hour Response</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">🚫</span>
            <span className="text-gray-700 dark:text-gray-300 font-semibold">No Obligation</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">💬</span>
            <span className="text-gray-700 dark:text-gray-300 font-semibold">Free Consultation</span>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8"
        >
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-accent-600 text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-accent-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Get Your Cash Offer
          </button>
          <a 
            href="tel:+14317884009"
            className="border-2 border-primary-600 text-primary-600 px-10 py-4 rounded-full font-semibold text-lg hover:bg-primary-600 hover:text-white transition-all duration-300"
          >
            Call Now
          </a>
        </motion.div>

        {/* Key Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto"
        >
          <div className="bg-white/80 dark:bg-dark-800/80 backdrop-blur-sm rounded-2xl p-4 border border-primary-100 dark:border-primary-800">
            <div className="text-2xl mb-2">🏠</div>
            <h3 className="font-bold text-base text-gray-800 dark:text-gray-200 mb-1">We Buy Houses As-Is</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">No need to make repairs</p>
          </div>
          <div className="bg-white/80 dark:bg-dark-800/80 backdrop-blur-sm rounded-2xl p-4 border border-primary-100 dark:border-primary-800">
            <div className="text-2xl mb-2">⚡</div>
            <h3 className="font-bold text-base text-gray-800 dark:text-gray-200 mb-1">Quick Closing</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Close in as little as 7 days</p>
          </div>
          <div className="bg-white/80 dark:bg-dark-800/80 backdrop-blur-sm rounded-2xl p-4 border border-primary-100 dark:border-primary-800">
            <div className="text-2xl mb-2">💸</div>
            <h3 className="font-bold text-base text-gray-800 dark:text-gray-200 mb-1">No Fees or Commissions</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Save thousands on fees</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;