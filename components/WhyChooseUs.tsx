import React from 'react';
// NOTE for developers:
// This component renders a promotional section explaining why to choose the company.
// To update text, change the strings in headings, paragraphs, and feature items below.
// To add/remove features, edit the `features` array and corresponding JSX.

const WhyChooseUs = () => {
  const features = [
    {
      icon: '💰',
      title: 'Fair Cash Offers',
      description: 'We provide competitive cash offers based on current market value.',
      stats: 'Market Value'
    },
    {
      icon: '⚡',
      title: 'Fast Closing',
      description: 'Close in as little as 7 days on your preferred timeline.',
      stats: '7 Day Close'
    },
    {
      icon: '🚫',
      title: 'No Fees or Repairs',
      description: 'No realtor commissions, closing costs, or repair requirements.',
      stats: 'Zero Fees'
    },
    {
      icon: '🤝',
      title: 'Trusted Buyers',
      description: 'Local, trusted cash home buyers with proven track record.',
      stats: 'Trusted Local'
    }
  ];

  const achievements = [
    { number: '200+', label: 'Houses Purchased', icon: '🏠' },
    { number: '98%', label: 'Client Satisfaction', icon: '😊' },
    { number: '10+', label: 'Years Experience', icon: '📅' },
    { number: '24hr', label: 'Response Time', icon: '⚡' }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 px-6 py-3 rounded-full font-semibold text-sm border border-primary-200 dark:border-primary-700 mb-6">
            ⭐ Why Choose Us
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Why Sell To <span className="text-primary-600 dark:text-primary-400">Cash Buyers</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover the advantages of selling your house for cash vs traditional methods.
          </p>
        </div>

        {/* Achievement Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <div key={index} className="bg-white dark:bg-gray-700 rounded-2xl p-6 text-center shadow-lg border border-primary-100 dark:border-gray-600">
              <div className="text-4xl mb-3">{achievement.icon}</div>
              <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">{achievement.number}</div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">{achievement.label}</div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg border border-primary-100 dark:border-gray-600 text-center flex flex-col h-full">
              <div className="text-6xl mb-6">{feature.icon}</div>
              <h3 className="text-xl font-bold text-primary-700 dark:text-primary-400 mb-4">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 flex-grow">{feature.description}</p>
              <div className="bg-primary-600 dark:bg-primary-500 text-white px-4 py-2 rounded-full text-sm font-bold mt-auto">
                {feature.stats}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;