import React from 'react';
// NOTE for developers:
// - Update testimonial entries in the `testimonials` array (name, location, text, rating, situation).
// - Section id is `testimonials` for anchor navigation from footer.
// - Styling uses Tailwind; adjust classes as needed.

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      location: 'Winnipeg, MB',
      text: 'They made selling my house so easy! Got a fair cash offer in 24 hours and closed in just 10 days. No repairs, no showings, no stress!',
      rating: 5,
      situation: 'Job Relocation'
    },
    {
      name: 'Mike Rodriguez',
      location: 'Brandon, MB',
      text: 'I inherited my parents\' house and didn\'t know what to do. These guys handled everything and gave me a fair price. Couldn\'t be happier!',
      rating: 5,
      situation: 'Inherited Property'
    },
    {
      name: 'Jennifer Chen',
      location: 'Steinbach, MB',
      text: 'Facing foreclosure was scary, but they helped me avoid it with a quick cash sale. Professional, honest, and genuinely caring.',
      rating: 5,
      situation: 'Foreclosure Help'
    },
    {
      name: 'David Thompson',
      location: 'Portage la Prairie, MB',
      text: 'My house needed major repairs I couldn\'t afford. They bought it as-is for a fair price. No hassle, no fees, just a smooth transaction.',
      rating: 5,
      situation: 'House Needed Repairs'
    },
    {
      name: 'Lisa Martinez',
      location: 'Selkirk, MB',
      text: 'Going through a divorce and needed to sell quickly. They understood my situation and made the process stress-free. Highly recommend!',
      rating: 5,
      situation: 'Divorce Sale'
    },
    {
      name: 'Robert Wilson',
      location: 'Morden, MB',
      text: 'Best decision I made! No realtor fees, no waiting for buyers, no repairs. Just a fair cash offer and quick closing. Amazing service!',
      rating: 5,
      situation: 'Quick Sale Needed'
    }
  ];

  // Duplicate testimonials for seamless loop
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16">
        {/* Section Header */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-6 py-3 rounded-full font-semibold text-sm border border-blue-200 dark:border-blue-700 mb-6">
            ⭐ What Our Clients Say
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Real Stories From <span className="text-blue-600 dark:text-blue-400">Real Homeowners</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            See how we've helped hundreds of homeowners sell their houses quickly and fairly.
          </p>
        </div>
      </div>

      {/* Testimonials Ticker */}
      <div className="relative">
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-white dark:from-black to-transparent z-10"></div>
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-white dark:from-black to-transparent z-10"></div>
        
        {/* Scrolling Container */}
        <div className="flex animate-scroll">
          {duplicatedTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-96 mx-4 bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-blue-100 dark:border-gray-700"
            >
              {/* Rating Stars */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">⭐</span>
                ))}
              </div>
              
              {/* Testimonial Text */}
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4 text-sm">
                "{testimonial.text}"
              </p>
              
              {/* Client Info */}
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</div>
                  <div className="text-gray-500 dark:text-gray-400 text-sm">{testimonial.location}</div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-blue-600 dark:text-blue-400 font-medium bg-blue-50 dark:bg-blue-900/30 px-2 py-1 rounded-full">
                    {testimonial.situation}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-6 mt-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">200+</div>
            <div className="text-gray-600 dark:text-gray-300">Happy Homeowners</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">98%</div>
            <div className="text-gray-600 dark:text-gray-300">Satisfaction Rate</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">24hr</div>
            <div className="text-gray-600 dark:text-gray-300">Average Response</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">7 Days</div>
            <div className="text-gray-600 dark:text-gray-300">Average Closing</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;