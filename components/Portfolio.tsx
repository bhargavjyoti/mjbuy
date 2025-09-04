'use client';

import React, { useState, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';

const Portfolio = () => {
  const [activeProject, setActiveProject] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      id: 1,
      title: 'Family Home Quick Sale',
      location: 'Winnipeg, MB',
      year: '2024',
      purchasePrice: '$180K',
      condition: 'As-Is',
      beforeImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
      afterImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop',
      description: 'Purchased this family home in as-is condition. Owners needed to sell quickly due to job relocation.',
      features: ['Bought As-Is', '7-Day Closing', 'No Repairs Required', 'Fair Cash Offer']
    },
    {
      id: 2,
      title: 'Inherited Property Sale',
      location: 'Brandon, MB',
      year: '2024',
      purchasePrice: '$145K',
      condition: 'Needs Work',
      beforeImage: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop',
      afterImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop',
      description: 'Helped family sell inherited property without the stress of repairs or showings.',
      features: ['Inherited Property', 'No Showings', 'Cash Purchase', 'Quick Process']
    },
    {
      id: 3,
      title: 'Foreclosure Prevention',
      location: 'Steinbach, MB',
      year: '2024',
      purchasePrice: '$165K',
      condition: 'Distressed',
      beforeImage: 'https://images.unsplash.com/photo-1560448075-bb485b067938?w=800&h=600&fit=crop',
      afterImage: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop',
      description: 'Helped homeowner avoid foreclosure with a fast cash purchase, allowing them to move forward.',
      features: ['Foreclosure Help', 'Fast Cash', 'Debt Relief', 'Fresh Start']
    }
  ];

  const handleMouseMove = useCallback((e: React.MouseEvent | MouseEvent) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    setIsDragging(true);
    handleMouseMove(e);
    
    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
      setSliderPosition(percentage);
    };

    const handleGlobalMouseUp = () => {
      setIsDragging(false);
      document.removeEventListener('mousemove', handleGlobalMouseMove);
      document.removeEventListener('mouseup', handleGlobalMouseUp);
    };

    document.addEventListener('mousemove', handleGlobalMouseMove);
    document.addEventListener('mouseup', handleGlobalMouseUp);
  }, []);

  const handleMouseUp = () => setIsDragging(false);

  const nextProject = () => {
    setActiveProject((prev) => (prev + 1) % projects.length);
    setSliderPosition(50);
  };

  const prevProject = () => {
    setActiveProject((prev) => (prev - 1 + projects.length) % projects.length);
    setSliderPosition(50);
  };

  return (
    <section id="portfolio" className="relative py-20 bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-accent-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent-600/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
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
            className="inline-flex items-center gap-2 bg-gradient-to-r from-accent-600/20 to-accent-500/20 text-accent-300 px-8 py-4 rounded-full font-semibold text-sm border border-accent-500/30 mb-8 backdrop-blur-sm"
          >
            ✨ Portfolio Showcase
          </motion.div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 max-w-5xl mx-auto">
            <span className="bg-gradient-to-r from-white via-accent-200 to-white bg-clip-text text-transparent">
              Houses We've
            </span>
            <br />
            <span className="text-accent-400">Purchased</span>
          </h2>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed">
            Real stories from real homeowners who sold their houses to us for cash. See how we helped them move forward quickly.
          </p>
        </motion.div>

        {/* Interactive Before/After Slider */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              {/* Before/After Image Slider */}
              <div className="lg:col-span-3">
                <div 
                  ref={containerRef}
                  className="relative aspect-[4/3] rounded-2xl overflow-hidden cursor-col-resize select-none"
                  onMouseMove={!isDragging ? handleMouseMove : undefined}
                  onMouseDown={handleMouseDown}
                >
                  {/* After Image (Background) */}
                  <img
                    src={projects[activeProject].afterImage}
                    alt="After renovation"
                    className="absolute inset-0 w-full h-full object-cover"
                    draggable={false}
                  />
                  
                  {/* Before Image (Clipped) */}
                  <div 
                    className="absolute inset-0 overflow-hidden"
                    style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                  >
                    <img
                      src={projects[activeProject].beforeImage}
                      alt="Before renovation"
                      className="w-full h-full object-cover"
                      draggable={false}
                    />
                  </div>

                  {/* Slider Line */}
                  <div 
                    className="absolute top-0 bottom-0 w-1 bg-white shadow-lg cursor-col-resize z-10"
                    style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
                  >
                    {/* Slider Handle */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center cursor-col-resize">
                      <div className="flex gap-1">
                        <div className="w-1 h-4 bg-neutral-400 rounded"></div>
                        <div className="w-1 h-4 bg-neutral-600 rounded"></div>
                        <div className="w-1 h-4 bg-neutral-400 rounded"></div>
                      </div>
                    </div>
                  </div>

                  {/* Labels */}
                  <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                    Before
                  </div>
                  <div className="absolute top-4 right-4 bg-accent-600/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                    After
                  </div>
                </div>

                {/* Navigation */}
                <div className="flex justify-between mt-6">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={prevProject}
                    className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-accent-600/50 transition-all duration-300 border border-white/20"
                  >
                    ←
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={nextProject}
                    className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-accent-600/50 transition-all duration-300 border border-white/20"
                  >
                    →
                  </motion.button>
                </div>
              </div>

              {/* Project Details */}
              <div className="lg:col-span-2 space-y-6">
                <motion.div
                  key={activeProject}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-3xl font-bold text-white mb-3">
                    {projects[activeProject].title}
                  </h3>
                  <p className="text-neutral-300 leading-relaxed mb-6">
                    {projects[activeProject].description}
                  </p>
                </motion.div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-accent-400 text-lg">📍</span>
                      <span className="text-xs text-neutral-400 uppercase tracking-wide">Location</span>
                    </div>
                    <div className="text-white font-bold">{projects[activeProject].location}</div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-accent-400 text-lg">📅</span>
                      <span className="text-xs text-neutral-400 uppercase tracking-wide">Year</span>
                    </div>
                    <div className="text-white font-bold">{projects[activeProject].year}</div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-accent-400 text-lg">💰</span>
                      <span className="text-xs text-neutral-400 uppercase tracking-wide">Purchase Price</span>
                    </div>
                    <div className="text-white font-bold">{projects[activeProject].purchasePrice}</div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-accent-400 text-lg">🏠</span>
                      <span className="text-xs text-neutral-400 uppercase tracking-wide">Condition</span>
                    </div>
                    <div className="text-accent-400 font-bold text-lg">{projects[activeProject].condition}</div>
                  </div>
                </div>

                {/* Features */}
                <div>
                  <h4 className="text-lg font-semibold text-white mb-4">Key Features</h4>
                  <div className="space-y-3">
                    {projects[activeProject].features.map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center gap-3 text-neutral-300"
                      >
                        <div className="w-2 h-2 bg-accent-400 rounded-full"></div>
                        <span className="text-sm">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Project Thumbnails */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group cursor-pointer"
              onClick={() => setActiveProject(index)}
            >
              <div className={`relative rounded-2xl overflow-hidden transition-all duration-500 ${
                activeProject === index 
                  ? 'ring-2 ring-accent-400 shadow-2xl shadow-accent-400/25' 
                  : 'hover:shadow-xl'
              }`}>
                <div className="aspect-square relative">
                  <img
                    src={project.afterImage}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <h4 className="text-white font-bold mb-1 text-sm">{project.title}</h4>
                      <p className="text-neutral-300 text-xs">{project.location}</p>
                    </div>
                  </div>
                  {activeProject === index && (
                    <div className="absolute top-3 right-3 w-3 h-3 bg-accent-400 rounded-full animate-pulse"></div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;