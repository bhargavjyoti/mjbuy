import React from 'react';

const HowItWorks = () => {
  const steps = [
    {
      step: '1',
      title: 'Tell us about your house',
      description: 'We\'ll get started today analyzing your property and understanding your situation.',
      icon: '🏠'
    },
    {
      step: '2', 
      title: 'We\'ll make you a fair offer',
      description: 'We\'ll make you a fair offer based on the market value and condition with no obligation.',
      icon: '💰'
    },
    {
      step: '3',
      title: 'Choose your closing date',
      description: 'Choose the day you\'d like to close and pick up your check. It\'s that easy!',
      icon: '📅'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 px-6 py-3 rounded-full font-semibold text-sm border border-primary-200 dark:border-primary-700 mb-6">
            📋 How To Sell Your House For Cash
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Simple <span className="text-primary-600 dark:text-primary-400">3-Step Process</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            To start, simply fill out our short information form on this site or give us a call. 
            We will present you with the highest cash offer possible within 24 hours.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="text-center relative">
              {/* Step Number */}
              <div className="w-16 h-16 bg-primary-600 dark:bg-primary-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 relative z-10">
                {step.step}
              </div>
              
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-primary-200 dark:bg-primary-700 -z-10"></div>
              )}
              
              {/* Icon */}
              <div className="text-6xl mb-4">{step.icon}</div>
              
              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                STEP {step.step}: {step.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-accent-600 text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-accent-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Start Step 1 - Tell Us About Your House
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;