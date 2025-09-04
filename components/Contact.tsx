'use client';
// NOTE for developers:
// - Update phone/email/location in `contactInfo` array.
// - WhatsApp button uses wa.me link; replace the number if needed.
// - Form submission currently simulated; integrate backend if required.

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    propertyType: '',
    sellingReason: '',
    timeline: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  // Country code and combined full phone captured for Web3Forms
  const [countryCode, setCountryCode] = useState<string>('+1');
  const [fullPhone, setFullPhone] = useState<string>('');

  // Web3Forms integration: We're no longer handling submit in JS.
  // The form will POST directly to Web3Forms API.
  // Keep state here for any future client UX if needed.
  const handleSubmit = (e: React.FormEvent) => {
    // Set submitting state so users see feedback until redirect occurs
    setIsSubmitted(true)
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    const next = { ...formData, [name]: value } as typeof formData;
    setFormData(next);
    if (name === 'phone') {
      setFullPhone(`${countryCode} ${value}`);
    }
  };

  // Update contact information shown at left side of the contact section
  const contactInfo = [
    {
      icon: '📞',
      title: 'Call Us',
      info: '+1 (431) 788-4009',
      subInfo: 'Mon-Fri 9AM-6PM EST'
    },
    {
      icon: '✉️',
      title: 'Email Us',
      info: 'mjbuyhouses1@gmail.com',
      subInfo: 'We reply within 24 hours'
    },
    {
      icon: '📍',
      title: 'Visit Us',
      info: 'Click to View Location',
      subInfo: 'Google Maps'
    },
    {
      icon: '🕒',
      title: 'Office Hours',
      info: 'Mon-Fri: 9AM-6PM',
      subInfo: 'Sat: 10AM-4PM'
    }
  ];

  const propertyTypes = [
    'Single Family Home',
    'Townhouse',
    'Condo/Apartment',
    'Multi-Family',
    'Mobile Home',
    'Other'
  ];

  const sellingReasons = [
    'Need to Sell Quickly',
    'Avoiding Foreclosure',
    'Divorce/Separation',
    'Job Relocation',
    'Inherited Property',
    'Financial Hardship',
    'Downsizing',
    'Property Needs Repairs',
    'Other'
  ];

  return (
    <section id="contact" className="relative py-20 bg-gray-900 dark:bg-black text-white">
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
          <div className="inline-flex items-center gap-2 bg-blue-600/20 text-blue-300 px-6 py-3 rounded-full font-semibold text-sm border border-blue-600/30 mb-6">
            💬 Get In Touch
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 max-w-4xl mx-auto">
            Get Your <span className="text-blue-400">Cash Offer</span> Today
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to sell your house fast? Fill out the form below or give us a call. 
            We'll provide you with a no-obligation cash offer within 24 hours.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-blue-400/50 transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="text-3xl mb-4">{item.icon}</div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  {item.title === 'Visit Us' ? (
                    <a 
                      href="https://maps.app.goo.gl/jBpeKoV8XMqJMPJZ9?g_st=iw" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-300 font-medium hover:text-blue-300 transition-colors underline"
                    >
                      {item.info}
                    </a>
                  ) : item.title === 'Email Us' ? (
                    <a 
                      href={`mailto:${item.info}`}
                      className="text-gray-300 font-medium hover:text-blue-300 transition-colors underline"
                    >
                      {item.info}
                    </a>
                  ) : (
                    <p className="text-gray-300 font-medium">{item.info}</p>
                  )}
                  <p className="text-gray-400 text-sm">{item.subInfo}</p>
                </motion.div>
              ))}
            </div>

            {/* Testimonial */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10"
            >
              <div className="flex items-center gap-1 mb-4 text-yellow-400">
                ⭐⭐⭐⭐⭐
              </div>
              <blockquote className="text-gray-300 italic mb-4">
                "MJ Buy Houses transformed our outdated property into a stunning modern home. Their attention 
                to detail and commitment to quality exceeded our expectations."
              </blockquote>
              <div className="flex items-center gap-3">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face"
                  alt="Client"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold">John Martinez</div>
                  <div className="text-gray-400 text-sm">Property Investor</div>
                </div>
              </div>
            </motion.div>

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              {/* WhatsApp chat button using provided number */}
              <a
                href="https://wa.me/14317884009"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-white/10 backdrop-blur-sm text-white p-4 rounded-xl font-semibold flex items-center justify-center gap-2 border border-white/20 hover:bg-white/20 transition-all"
              >
                {/* Simple WhatsApp SVG icon */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.74 0 .62 5.11.62 11.41c0 2.01.52 3.95 1.51 5.68L0 24l7.1-2.07a11.4 11.4 0 0 0 4.96 1.12h.01c6.31 0 11.44-5.11 11.44-11.41 0-3.05-1.19-5.92-3.49-8.16ZM12.06 21.2h-.01a9.9 9.9 0 0 1-4.86-1.33l-.35-.2-4.21 1.23 1.25-4.06-.23-.33a9.9 9.9 0 0 1-1.58-5.1c0-5.47 4.47-9.93 9.98-9.93 2.66 0 5.16 1.03 7.04 2.9a9.77 9.77 0 0 1 2.93 7.02c0 5.47-4.47 9.93-9.96 9.93Zm5.77-7.43c-.32-.16-1.9-.93-2.19-1.04-.29-.11-.5-.16-.71.16-.21.32-.81 1.04-.99 1.25-.18.21-.37.24-.68.08-.32-.16-1.33-.49-2.53-1.56-.93-.8-1.56-1.78-1.74-2.08-.18-.32 0-.48.16-.64.16-.16.37-.4.53-.61.16-.21.21-.32.32-.53.1-.21.05-.4-.03-.56-.08-.16-.71-1.68-.98-2.31-.26-.64-.53-.53-.71-.53-.18 0-.4-.03-.61-.03-.21 0-.56.08-.85.4-.29.32-1.12 1.08-1.12 2.63s1.15 3.05 1.31 3.26c.16.21 2.24 3.42 5.41 4.79.76.33 1.35.53 1.81.69.76.24 1.45.21 2 .13.61-.08 1.9-.77 2.17-1.52.27-.77.27-1.43.18-1.56-.08-.13-.29-.21-.61-.37Z"/>
                </svg>
                <span>WhatsApp Chat</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold mb-6">Get Your Cash Offer</h3>
              
              {/*
                Web3Forms Integration
                - action: Web3Forms endpoint
                - method: POST
                - access_key: Provided public key (safe to be public per docs)
                - botcheck: Honeypot field for spam protection
                - redirect: URL to navigate after successful submission
                Docs: https://web3forms.com/#start | https://docs.web3forms.com/
              */}
              <form
                action="https://api.web3forms.com/submit"
                method="POST"
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                {/* Required Web3Forms hidden fields */}
                <input type="hidden" name="access_key" value="83c38226-ec80-4a06-bee2-c71d7b180272" />
                {/* Optional redirect to a Thank You page after success */}
                <input type="hidden" name="redirect" value="/thanks" />
                {/* Honeypot field: Keep hidden to catch bots */}
                <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />
                {/* Capture combined phone including country code for convenience in submissions */}
                <input type="hidden" name="full_phone" value={fullPhone} />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:bg-white/20 transition-all"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:bg-white/20 transition-all"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                {/* Put phone and timeline on separate lines to prevent overlap */}
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Phone Number
                    </label>
                    {/* Country code + phone input */}
                    <div className="flex gap-2">
                      <select
                        name="country_code"
                        value={countryCode}
                        onChange={(e) => {
                          const code = e.target.value;
                          setCountryCode(code);
                          setFullPhone(`${code} ${formData.phone}`);
                        }}
                        className="w-56 bg-white/10 border border-white/20 rounded-xl pl-3 pr-9 py-3 text-white focus:outline-none focus:border-blue-400 focus:bg-white/20 transition-all appearance-none relative"
                        style={{
                          backgroundImage: "url('data:image/svg+xml;utf8,<svg xmlns=\\'http://www.w3.org/2000/svg\\' viewBox=\\'0 0 20 20\\' fill=\\'none\\'><path d=\\'M6 8l4 4 4-4\\' stroke=\\'%23cbd5e1\\' stroke-width=\\'2\\' stroke-linecap=\\'round\\' stroke-linejoin=\\'round\\'/></svg>')",
                          backgroundRepeat: 'no-repeat',
                          backgroundPosition: 'right 0.6rem center',
                          backgroundSize: '1rem 1rem'
                        }}
                      >
                        <option value="+1" className="bg-gray-800 text-white">+1 (Canada)</option>
                        <option value="+1" className="bg-gray-800 text-white">+1 (United States)</option>
                        <option value="+44" className="bg-gray-800 text-white">+44 (United Kingdom)</option>
                        <option value="+61" className="bg-gray-800 text-white">+61 (Australia)</option>
                        <option value="+64" className="bg-gray-800 text-white">+64 (New Zealand)</option>
                        <option value="+91" className="bg-gray-800 text-white">+91 (India)</option>
                        <option value="+81" className="bg-gray-800 text-white">+81 (Japan)</option>
                        <option value="+49" className="bg-gray-800 text-white">+49 (Germany)</option>
                        <option value="+33" className="bg-gray-800 text-white">+33 (France)</option>
                        <option value="+971" className="bg-gray-800 text-white">+971 (UAE)</option>
                        <option value="+52" className="bg-gray-800 text-white">+52 (Mexico)</option>
                        <option value="+55" className="bg-gray-800 text-white">+55 (Brazil)</option>
                        <option value="+34" className="bg-gray-800 text-white">+34 (Spain)</option>
                        <option value="+39" className="bg-gray-800 text-white">+39 (Italy)</option>
                      </select>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="flex-1 bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:bg-white/20 transition-all"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      When do you need to sell?
                    </label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 pr-10 text-white focus:outline-none focus:border-blue-400 focus:bg-white/20 transition-all appearance-none"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`,
                        backgroundPosition: 'right 0.75rem center',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: '1.5em 1.5em'
                      }}
                    >
                      <option value="" className="bg-gray-800">Select timeline</option>
                      <option value="ASAP" className="bg-gray-800">ASAP (Within 30 days)</option>
                      <option value="1-3 months" className="bg-gray-800">1-3 months</option>
                      <option value="3-6 months" className="bg-gray-800">3-6 months</option>
                      <option value="6+ months" className="bg-gray-800">6+ months</option>
                      <option value="Just exploring" className="bg-gray-800">Just exploring options</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Property Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:bg-white/20 transition-all"
                    placeholder="Enter your property address"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Property Type
                    </label>
                    <select
                      name="propertyType"
                      value={formData.propertyType}
                      onChange={handleInputChange}
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 pr-10 text-white focus:outline-none focus:border-blue-400 focus:bg-white/20 transition-all appearance-none"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`,
                        backgroundPosition: 'right 0.75rem center',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: '1.5em 1.5em'
                      }}
                    >
                      <option value="" className="bg-gray-800">Select property type</option>
                      {propertyTypes.map((type) => (
                        <option key={type} value={type} className="bg-gray-800">{type}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Reason for Selling
                    </label>
                    <select
                      name="sellingReason"
                      value={formData.sellingReason}
                      onChange={handleInputChange}
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 pr-10 text-white focus:outline-none focus:border-blue-400 focus:bg-white/20 transition-all appearance-none"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`,
                        backgroundPosition: 'right 0.75rem center',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: '1.5em 1.5em'
                      }}
                    >
                      <option value="" className="bg-gray-800">Select reason</option>
                      {sellingReasons.map((reason) => (
                        <option key={reason} value={reason} className="bg-gray-800">{reason}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Additional Details
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:bg-white/20 transition-all resize-none"
                    placeholder="Tell us about your property condition, any repairs needed, or other details that might help us provide a better offer..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitted}
                  className="w-full bg-green-600 text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-green-700 transition-all disabled:opacity-60"
                >
                  {isSubmitted ? (
                    <>
                      {/* Spinner */}
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                      </svg>
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <>
                      <span>📤</span>
                      <span>Send Message</span>
                      <span>→</span>
                    </>
                  )}
                </button>
              </form>

              <p className="text-gray-400 text-sm mt-4 text-center">
                We'll get back to you within 24 hours with a no-obligation cash offer for your property.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;