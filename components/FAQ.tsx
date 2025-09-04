'use client';

import React, { useState } from 'react';
// NOTE for developers:
// - Update FAQ content by editing the `faqs` array below (question/answer pairs).
// - The section id is `faq` so footer and nav can scroll to it.
// - To change styles, adjust Tailwind classes on the containers.
import { motion, AnimatePresence } from 'framer-motion';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How quickly can you buy my house?",
      answer: "We can typically close in as little as 7 days, but we work on your timeline. Whether you need to close quickly or need more time to move, we're flexible. Most of our transactions close within 2-3 weeks from the initial contact."
    },
    {
      question: "Do you really buy houses in any condition?",
      answer: "Yes! We buy houses as-is, which means you don't need to make any repairs, clean up, or stage the property. Whether your house needs major repairs, has been damaged, or is in perfect condition, we'll make you a fair cash offer."
    },
    {
      question: "How do you determine your cash offer?",
      answer: "Our cash offers are based on current market value, property condition, location, and recent comparable sales in your area. We provide fair, competitive offers that reflect the true value of your property in its current condition."
    },
    {
      question: "Are there any fees or commissions?",
      answer: "No! There are no realtor commissions, closing costs, or hidden fees. The cash offer we make is the amount you'll receive at closing. We handle all the paperwork and closing costs ourselves."
    },
    {
      question: "What types of situations do you help with?",
      answer: "We help homeowners in various situations including foreclosure, divorce, job relocation, inherited properties, downsizing, financial hardship, or simply wanting to sell quickly without the hassle of traditional real estate."
    },
    {
      question: "Is there any obligation when you make an offer?",
      answer: "Absolutely not! Our cash offers come with no obligation. You can take time to consider our offer, get a second opinion, or simply decline if it's not right for you. There's no pressure and no commitment until you decide to accept."
    },
    {
      question: "How is this different from working with a realtor?",
      answer: "Unlike traditional real estate, there are no showings, no waiting for buyer financing, no repair negotiations, and no commission fees. We buy directly from you with cash, making the process much faster and simpler."
    },
    {
      question: "What paperwork is involved?",
      answer: "We handle all the paperwork! Our team manages the purchase agreement, title work, and closing documents. You'll just need to provide basic property information and sign the necessary documents at closing."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-20 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-black">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 px-6 py-3 rounded-full font-semibold text-sm border border-primary-200 dark:border-primary-700 mb-6"
          >
            ❓ Frequently Asked Questions
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 max-w-4xl mx-auto">
            Got Questions? <span className="text-primary-600 dark:text-primary-400">We've Got Answers</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Everything you need to know about our renovation process, timelines, and what to expect when working with ReNest.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-2xl border border-primary-100 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-primary-50 dark:hover:bg-gray-700 transition-colors duration-300"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white pr-4">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ 
                    duration: 0.4, 
                    ease: [0.04, 0.62, 0.23, 0.98]
                  }}
                  className="flex-shrink-0"
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${
                    openIndex === index ? 'bg-primary-600' : 'bg-primary-100 dark:bg-primary-900'
                  }`}>
                    <span className={`font-bold transition-colors duration-300 ${
                      openIndex === index ? 'text-white' : 'text-primary-600 dark:text-primary-400'
                    }`}>↓</span>
                  </div>
                </motion.div>
              </button>
              
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: 'auto' }}
                    exit={{ height: 0 }}
                    transition={{ 
                      duration: 0.4, 
                      ease: [0.04, 0.62, 0.23, 0.98]
                    }}
                    className="overflow-hidden"
                  >
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ 
                        duration: 0.3,
                        delay: 0.1,
                        ease: "easeOut"
                      }}
                      className="px-8 pb-6"
                    >
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-900/30 dark:to-primary-800/30 rounded-2xl p-8 border border-primary-200 dark:border-primary-700">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Still Have Questions?</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Our team is here to help you understand every aspect of your renovation journey.
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-accent-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-accent-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Get Your Questions Answered
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;