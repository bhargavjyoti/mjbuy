'use client';

import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const stats = [
    { number: '200+', label: 'Houses Purchased' },
    { number: '10+', label: 'Years Experience' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '24hr', label: 'Response Time' }
  ];

  const team = [
    {
      name: 'Michael Johnson',
      role: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
      bio: 'With 10+ years in real estate investing, Michael leads our mission of helping homeowners sell quickly.',
      specialties: ['Real Estate Investment', 'Market Analysis', 'Client Solutions']
    },
    {
      name: 'Sarah Chen',
      role: 'Acquisitions Manager',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face',
      bio: 'Sarah evaluates properties and ensures fair cash offers for all our homeowner clients.',
      specialties: ['Property Evaluation', 'Market Pricing', 'Client Relations']
    },
    {
      name: 'David Rodriguez',
      role: 'Operations Director',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      bio: 'David manages the closing process and ensures smooth, fast transactions for our clients.',
      specialties: ['Transaction Management', 'Legal Compliance', 'Process Optimization']
    },
    {
      name: 'Emma Thompson',
      role: 'Client Relations Specialist',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
      bio: 'Emma guides homeowners through the selling process with compassion and expertise.',
      specialties: ['Client Support', 'Communication', 'Problem Solving']
    }
  ];

  const values = [
    {
      icon: '🤝',
      title: 'Integrity',
      description: 'We provide fair, honest cash offers and transparent communication throughout the process.'
    },
    {
      icon: '⚡',
      title: 'Speed',
      description: 'We understand urgency and can close in as little as 7 days when you need to sell fast.'
    },
    {
      icon: '💰',
      title: 'Fairness',
      description: 'Our cash offers are based on current market value and property condition - always fair.'
    },
    {
      icon: '🛡️',
      title: 'Reliability',
      description: 'When we make an offer, you can count on us to follow through with no surprises.'
    }
  ];

  return (
    <section id="about" className="relative py-20 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-black">
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
            👥 About Us
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 max-w-4xl mx-auto">
            Helping Homeowners <span className="text-blue-600 dark:text-blue-400">Sell Fast</span> Since 2014
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We are a real estate solutions and investment firm that specializes in helping homeowners 
            get rid of burdensome houses fast. We are investors and problem solvers who can buy your house fast with a fair all cash offer.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100 dark:border-gray-700">
                <div className="text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 dark:text-gray-300 font-medium">{stat.label}</div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20"
        >
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=400&fit=crop"
              alt="Our story"
              className="rounded-3xl shadow-lg"
            />
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
              <span className="text-3xl text-white">🏆</span>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white">Our Story</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Founded in 2014, we started with a simple mission: to help homeowners who need to sell their houses 
              quickly and fairly. We understand that life can throw unexpected challenges, and sometimes you need 
              to sell your house fast without the hassle of traditional real estate processes.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Today, we've helped over 200 homeowners sell their properties quickly and fairly. Whether facing 
              foreclosure, divorce, job relocation, or inherited property, we provide a straightforward solution 
              with fair cash offers and quick closings.
            </p>
            
            <div className="flex items-center gap-4">
              <div className="flex text-yellow-400">
                ⭐⭐⭐⭐⭐
              </div>
              <span className="text-gray-600 dark:text-gray-300 font-medium">4.9/5 Client Rating</span>
            </div>
          </div>
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Values</h3>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              The principles that guide every decision and drive our commitment to excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100 dark:border-gray-700 text-center group hover:-translate-y-2"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {value.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-16">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-6 py-3 rounded-full font-semibold text-sm border border-blue-200 dark:border-blue-700 mb-6"
            >
              👥 Our Team
            </motion.div>
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Meet Our Experts</h3>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              The passionate professionals who bring your renovation dreams to life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotateY: 45 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -10, 
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
                className="group perspective-1000"
              >
                <div className="relative bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-blue-100 dark:border-gray-700 text-center overflow-hidden">
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div 
                      className="w-full h-full"
                      style={{
                        backgroundImage: `
                          linear-gradient(45deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                          linear-gradient(-45deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
                        `,
                        backgroundSize: '20px 20px'
                      }}
                    />
                  </div>

                  {/* Floating Elements */}
                  <div className="absolute top-4 right-4 w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                  <div className="absolute bottom-4 left-4 w-2 h-2 bg-blue-300 rounded-full animate-pulse delay-500"></div>

                  <div className="relative z-10">
                    {/* Profile Image with Hover Effect */}
                    <motion.div 
                      className="relative mb-6"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="relative">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-28 h-28 rounded-full mx-auto object-cover shadow-2xl border-4 border-white dark:border-gray-700 group-hover:border-blue-200 dark:group-hover:border-blue-600 transition-all duration-300"
                        />
                        {/* Animated Ring */}
                        <div className="absolute inset-0 rounded-full border-2 border-blue-400 animate-ping opacity-0 group-hover:opacity-75"></div>
                        {/* Status Badge */}
                        <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                          <span className="text-white text-sm font-bold">✓</span>
                        </div>
                      </div>
                    </motion.div>
                    
                    {/* Name and Role */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                    >
                      <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors">
                        {member.name}
                      </h4>
                      <p className="text-blue-600 dark:text-blue-400 font-semibold mb-4 text-lg">{member.role}</p>
                    </motion.div>

                    {/* Bio */}
                    <motion.p 
                      className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6"
                      initial={{ opacity: 0.7 }}
                      whileHover={{ opacity: 1 }}
                    >
                      {member.bio}
                    </motion.p>
                    
                    {/* Specialties with Animation */}
                    <div className="space-y-3">
                      {member.specialties.map((specialty, specIndex) => (
                        <motion.div 
                          key={specIndex} 
                          className="flex items-center justify-center gap-3 text-sm text-gray-700 dark:text-gray-300 bg-blue-50 dark:bg-blue-900/30 rounded-full px-4 py-2 group-hover:bg-blue-100 dark:group-hover:bg-blue-800/50 transition-colors"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 + specIndex * 0.1 + 0.5 }}
                          whileHover={{ scale: 1.05 }}
                        >
                          <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                          <span className="font-medium">{specialty}</span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>


      </div>
    </section>
  );
};

export default About;