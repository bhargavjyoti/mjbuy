'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      icon: '🏠',
      title: 'We Buy Houses As-Is',
      description: 'No need to make repairs or improvements. We buy your house in its current condition, saving you time and money.',
      features: ['Any Condition', 'No Repairs Needed', 'Fast Process']
    },
    {
      icon: '💰',
      title: 'Fair Cash Offers',
      description: 'Get a competitive cash offer within 24 hours based on current market value and property condition.',
      features: ['Market Value Based', '24 Hour Response', 'No Obligation']
    },
    {
      icon: '⚡',
      title: 'Quick Closing',
      description: 'Close on your timeline, often within 7 days. No waiting for buyer financing or lengthy approval processes.',
      features: ['7 Day Closing', 'Your Timeline', 'No Financing Delays']
    },
    {
      icon: '🚫',
      title: 'No Fees or Commissions',
      description: 'Save thousands on realtor commissions, closing costs, and other fees. What we offer is what you get.',
      features: ['No Realtor Fees', 'No Closing Costs', 'No Hidden Charges']
    },
    {
      icon: '👥',
      title: 'No Showings Required',
      description: 'Skip the hassle of open houses, showings, and dealing with multiple potential buyers.',
      features: ['No Open Houses', 'No Showings', 'Private Process']
    },
    {
      icon: '🔧',
      title: 'We Handle Everything',
      description: 'We take care of all paperwork, repairs, and renovations after we buy your house. Completely hassle-free.',
      features: ['All Paperwork', 'Post-Sale Repairs', 'Hassle-Free Process']
    }
  ];

  return (
    <section id="services" className="relative py-20 bg-white dark:bg-gray-900">
      {/* Background Grid */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-6 py-3 rounded-full font-semibold text-sm border border-blue-200 dark:border-blue-700 mb-6">
            💰 How It Works
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 max-w-4xl mx-auto">
            The Easiest Way To <span className="text-blue-600 dark:text-blue-400">Sell Your House Fast</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Want to sell your house fast? We buy houses as-is! No agents, no fees, no repairs, 
            and it's completely FREE! Learn how our home buying process works.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-blue-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-600 transition-all duration-300 hover:shadow-lg group"
            >
              {/* Icon */}
              <div className="text-4xl mb-6">{service.icon}</div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-green-600 text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Get Your Cash Offer Today
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;