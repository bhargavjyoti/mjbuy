'use client'
// NOTE for developers:
// - Service sections are defined in the `services` array with `id` values used as anchors (e.g., /services#sell-as-is).
// - Edit titles, descriptions, and lists inside this array to change content.
// - Bottom highlight section styling is at the end of this file.

import { useRouter } from 'next/navigation';

export default function ServicesContent() {
  const router = useRouter();

  const services = [
    {
      id: 'sell-as-is',
      title: 'Sell House As-Is',
      icon: '🏠',
      description: 'No need to spend money on repairs or renovations. We buy houses in any condition.',
      benefits: [
        'No repairs or renovations needed',
        'Save thousands on contractor costs',
        'Avoid the stress of managing repairs',
        'Quick evaluation and fair offer'
      ],
      process: [
        'Contact us with your property details',
        'We schedule a quick property visit',
        'Receive your cash offer within 24 hours',
        'Close in as little as 7 days'
      ],
      situations: [
        'Major structural issues',
        'Outdated electrical or plumbing',
        'Water damage or mold',
        'Fire damage',
        'Hoarding situations',
        'Tenant damage'
      ]
    },
    {
      id: 'stop-foreclosure',
      title: 'Stop Foreclosure',
      icon: '⚖️',
      description: 'Facing foreclosure? We can help you avoid it with a quick cash sale.',
      benefits: [
        'Stop foreclosure proceedings',
        'Protect your credit score',
        'Avoid deficiency judgments',
        'Get cash to start fresh'
      ],
      process: [
        'Contact us immediately - time is critical',
        'We review your situation and timeline',
        'Fast-track property evaluation',
        'Close before foreclosure date'
      ],
      situations: [
        'Behind on mortgage payments',
        'Received foreclosure notice',
        'Job loss or income reduction',
        'Medical bills affecting payments',
        'Divorce impacting finances',
        'Adjustable rate mortgage increases'
      ]
    },
    {
      id: 'divorce-sale',
      title: 'Divorce Sale',
      icon: '💔',
      description: 'Going through a divorce? We make selling your shared property quick and fair.',
      benefits: [
        'Fast resolution for both parties',
        'No need to agree on repairs',
        'Avoid lengthy listing process',
        'Fair market value offer'
      ],
      process: [
        'Both parties contact us together or separately',
        'We provide neutral property evaluation',
        'Present fair cash offer to both parties',
        'Handle all paperwork and closing details'
      ],
      situations: [
        'Contested divorce proceedings',
        'Need quick property division',
        'Cannot agree on listing price',
        'Want to avoid realtor fees',
        'Emotional attachment to property',
        'Need cash for legal fees'
      ]
    },
    {
      id: 'inherited-property',
      title: 'Inherited Property',
      icon: '👴',
      description: 'Inherited a house you don\'t want or can\'t maintain? We provide a simple solution.',
      benefits: [
        'No maintenance responsibilities',
        'Avoid property taxes and insurance',
        'Quick cash without hassle',
        'Handle all legal requirements'
      ],
      process: [
        'Contact us with inheritance details',
        'We verify ownership and legal status',
        'Property evaluation and cash offer',
        'Handle probate and closing process'
      ],
      situations: [
        'Out-of-state inherited property',
        'Property in poor condition',
        'Multiple heirs need to sell',
        'Cannot afford upkeep costs',
        'Emotional difficulty managing property',
        'Need cash for estate settlement'
      ]
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-700 dark:from-primary-800 dark:to-primary-900 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 text-white px-6 py-3 rounded-full font-semibold text-sm border border-white/30 mb-8">
            🏠 Our Services
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            We Buy Houses in <span className="text-primary-200">Any Situation</span>
          </h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto leading-relaxed">
            No matter what situation you're facing, we have the experience and resources 
            to help you sell your house quickly and fairly.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div key={service.id} id={service.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="text-6xl">{service.icon}</div>
                    <h2 className="text-4xl font-bold text-gray-900 dark:text-white">{service.title}</h2>
                  </div>
                  
                  <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Benefits */}
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Key Benefits</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {service.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <span className="text-primary-600 dark:text-primary-400 text-lg">✓</span>
                          <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button 
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="bg-accent-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-accent-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    Get Your Cash Offer
                  </button>
                </div>

                {/* Process & Situations */}
                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8">
                    {/* Process */}
                    <div className="mb-8">
                      <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-gray-900 dark:text-white">
                        <span className="text-primary-600 dark:text-primary-400">📋</span>
                        Our Process
                      </h3>
                      <div className="space-y-3">
                        {service.process.map((step, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <div className="w-6 h-6 bg-primary-600 dark:bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                              {idx + 1}
                            </div>
                            <span className="text-gray-700 dark:text-gray-300">{step}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Common Situations */}
                    <div>
                      <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-gray-900 dark:text-white">
                        <span className="text-primary-600 dark:text-primary-400">🎯</span>
                        Common Situations
                      </h3>
                      <div className="grid grid-cols-1 gap-2">
                        {service.situations.map((situation, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <span className="text-primary-600 dark:text-primary-400 text-sm">•</span>
                            <span className="text-gray-600 dark:text-gray-400 text-sm">{situation}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us - bottom highlight section */}
      <section className="py-20 bg-neutral-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">Why Choose Our Services?</h2>
            <p className="text-xl text-neutral-600 dark:text-gray-300 max-w-3xl mx-auto">
              We've helped hundreds of homeowners across Manitoba with our proven approach.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
              <div className="text-4xl mb-4">⚡</div>
              <div className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-2">24 Hours</div>
              <div className="text-neutral-600 dark:text-gray-300">Average response time for cash offers</div>
            </div>
            
            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
              <div className="text-4xl mb-4">💰</div>
              <div className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-2">$0 Fees</div>
              <div className="text-neutral-600 dark:text-gray-300">No realtor commissions or closing costs</div>
            </div>
            
            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
              <div className="text-4xl mb-4">🏠</div>
              <div className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-2">Any Condition</div>
              <div className="text-neutral-600 dark:text-gray-300">We buy houses as-is, no repairs needed</div>
            </div>
            
            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
              <div className="text-4xl mb-4">📅</div>
              <div className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-2">7-30 Days</div>
              <div className="text-neutral-600 dark:text-gray-300">Typical closing timeline</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}