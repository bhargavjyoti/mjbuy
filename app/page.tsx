'use client'

import React, { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navigation from '../components/Navigation'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Testimonials from '../components/Testimonials'
import HowItWorks from '../components/HowItWorks'
import CTABanner from '../components/CTABanner'
// import Portfolio from '../components/Portfolio' // Moved to separate page
import WhyChooseUs from '../components/WhyChooseUs'
import About from '../components/About'
import FAQ from '../components/FAQ'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function Home() {
  useEffect(() => {
    // Simple initialization without problematic animations
    console.log('Page loaded successfully')
  }, [])

  return (
    <main className="relative">
      <Navigation />
      <Hero />
      <Services />
      <Testimonials />
      <HowItWorks />
      <CTABanner 
        title="Ready to Sell Your House Fast?"
        subtitle="Get your no-obligation cash offer today. We buy houses in any condition, close quickly, and handle all the paperwork."
        buttonText="Get Your Cash Offer"
        variant="primary"
      />
      <WhyChooseUs />
      <CTABanner 
        title="Need to Sell Your House Quickly?"
        subtitle="Whether you're facing foreclosure, divorce, or just need to move fast - we're here to help with a fair cash offer."
        buttonText="Get Started Now"
        variant="secondary"
      />
      <About />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  )
}