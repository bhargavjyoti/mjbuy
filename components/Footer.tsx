'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
// Simple inline SVG icons for social links
const FacebookIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M22 12.06C22 6.49 17.52 2 11.94 2 6.37 2 1.88 6.49 1.88 12.06c0 4.95 3.6 9.06 8.31 9.93v-7.03H7.88v-2.9h2.31V9.39c0-2.28 1.36-3.54 3.44-3.54.99 0 2.02.18 2.02.18v2.23h-1.14c-1.12 0-1.47.7-1.47 1.42v1.7h2.5l-.4 2.9h-2.1v7.03c4.7-.88 8.31-4.98 8.31-9.93Z"/>
    </svg>
);
const InstagramIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.5A5.5 5.5 0 1 1 6.5 13 5.5 5.5 0 0 1 12 7.5Zm0 2A3.5 3.5 0 1 0 15.5 13 3.5 3.5 0 0 0 12 9.5Zm5.75-3.25a1.25 1.25 0 1 1-1.25 1.25 1.25 1.25 0 0 1 1.25-1.25Z"/>
    </svg>
);

// NOTE for developers:
// - Edit company blurb text under the brand section.
// - Update phone/email/location inside the contact info rows.
// - Manage social links in `socialLinks` array (icons and hrefs).
// - Modify footer navigation link targets inline where `Link` components are defined.
// - Newsletter section has been removed per requirements.
const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Footer link labels are informational only; direct link URLs are defined inline below for clarity
    const footerLinks = {
        company: [
            'About Us',
            'How It Works',
            'Our Process',
            'Locate Us',
            'Contact Us'
        ],
        services: [
            'Sell House As-Is',
            'Stop Foreclosure',
            'Divorce Sale',
            'Inherited Property'
        ],
        resources: [
            'Blog',
            'Video Guides',
            'FAQ',
            'Reviews'
        ],
        legal: [
            'Privacy Policy',
            'Terms of Service',
            'Cookie Policy'
        ]
    };

    // Social links with real icons
    const socialLinks = [
        { icon: <FacebookIcon />, href: 'https://www.facebook.com/share/1AvS2eEmns/?mibextid=wwXIfr', label: 'Facebook' },
        { icon: <InstagramIcon />, href: 'https://www.instagram.com', label: 'Instagram' }
    ];

    return (
        <footer className="relative bg-gray-900 dark:bg-black text-white overflow-hidden">
            {/* Background Pattern */}
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

            <div className="relative z-10">
                {/* Main Footer Content */}
                <div className="max-w-7xl mx-auto px-6 py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
                        {/* Brand Section */}
                        <div className="lg:col-span-2 space-y-6">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                                className="flex items-center gap-3"
                            >
                                <Image src="/logo/main_logo.png" alt="MJ Buy Houses" width={72} height={72} priority />
                                <span className="text-2xl font-bold text-blue-400">MJ Buy Houses</span>
                            </motion.div>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                viewport={{ once: true }}
                                className="text-gray-300 dark:text-gray-400 leading-relaxed max-w-md"
                            >
                                We are a real estate solutions and investment firm that specializes in helping homeowners
                                get rid of burdensome houses fast. We are investors and problem solvers who
                                can buy your house fast with a fair all cash offer.
                            </motion.p>

                            {/* Contact Info */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                viewport={{ once: true }}
                                className="space-y-3"
                            >
                                <div className="flex items-center gap-3 text-gray-300 dark:text-gray-400">
                                    <span className="text-blue-400">📞</span>
                                    <span>+1 (431) 788-4009</span>
                                </div>
                                <div className="flex items-center gap-3 text-gray-300 dark:text-gray-400">
                                    <span className="text-blue-400">✉️</span>
                                    <span>mjbuyhouses1@gmail.com</span>
                                </div>
                                <div className="flex items-center gap-3 text-gray-300 dark:text-gray-400">
                                    <span className="text-blue-400">📍</span>
                                    <a href="https://maps.app.goo.gl/jBpeKoV8XMqJMPJZ9?g_st=iw" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition-colors">Click to View Our Location</a>
                                </div>
                            </motion.div>

                            {/* Social Links */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                viewport={{ once: true }}
                                className="flex gap-4"
                            >
                                {socialLinks.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.href}
                                        className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center text-gray-300 hover:text-white hover:bg-blue-600 transition-all duration-300"
                                        aria-label={social.label}
                                    >
                                        <span className="text-lg">{social.icon}</span>
                                    </a>
                                ))}
                            </motion.div>
                        </div>

                        {/* Services */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-lg font-semibold mb-4">Services</h3>
                            <ul className="space-y-2">
                                <li>
                                    <Link
                                        href="/services#sell-as-is"
                                        className="text-gray-300 dark:text-gray-400 hover:text-blue-300 transition-colors duration-200 text-sm"
                                    >
                                        Sell House As-Is
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/services#stop-foreclosure"
                                        className="text-gray-300 dark:text-gray-400 hover:text-blue-300 transition-colors duration-200 text-sm"
                                    >
                                        Stop Foreclosure
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/services#divorce-sale"
                                        className="text-gray-300 dark:text-gray-400 hover:text-blue-300 transition-colors duration-200 text-sm"
                                    >
                                        Divorce Sale
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/services#inherited-property"
                                        className="text-gray-300 dark:text-gray-400 hover:text-blue-300 transition-colors duration-200 text-sm"
                                    >
                                        Inherited Property
                                    </Link>
                                </li>
                            </ul>
                        </motion.div>

                        {/* Company */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-lg font-semibold mb-4">Company</h3>
                            <ul className="space-y-2">
                                <li>
                                    <Link
                                        href="/about"
                                        className="text-gray-300 dark:text-gray-400 hover:text-blue-300 transition-colors duration-200 text-sm"
                                    >
                                        About Us
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/how-it-works"
                                        className="text-gray-300 dark:text-gray-400 hover:text-blue-300 transition-colors duration-200 text-sm"
                                    >
                                        How It Works
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/#services"
                                        className="text-gray-300 dark:text-gray-400 hover:text-blue-300 transition-colors duration-200 text-sm"
                                    >
                                        Our Process
                                    </Link>
                                </li>
                                <li>
                                    <a
                                        href="https://maps.app.goo.gl/jBpeKoV8XMqJMPJZ9?g_st=iw"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-300 dark:text-gray-400 hover:text-blue-300 transition-colors duration-200 text-sm"
                                    >
                                        Locate Us
                                    </a>
                                </li>
                                <li>
                                    <Link
                                        href="/contact"
                                        className="text-gray-300 dark:text-gray-400 hover:text-blue-300 transition-colors duration-200 text-sm"
                                    >
                                        Contact Us
                                    </Link>
                                </li>
                            </ul>
                        </motion.div>

                        {/* Resources */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-lg font-semibold mb-4">Resources</h3>
                            <ul className="space-y-2">
                                <li>
                                    <Link
                                        href="/blog"
                                        className="text-gray-300 dark:text-gray-400 hover:text-blue-300 transition-colors duration-200 text-sm"
                                    >
                                        Blog
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/video-guides"
                                        className="text-gray-300 dark:text-gray-400 hover:text-blue-300 transition-colors duration-200 text-sm"
                                    >
                                        Video Guides
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/#faq"
                                        className="text-gray-300 dark:text-gray-400 hover:text-blue-300 transition-colors duration-200 text-sm"
                                    >
                                        FAQ
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/#testimonials"
                                        className="text-gray-300 dark:text-gray-400 hover:text-blue-300 transition-colors duration-200 text-sm"
                                    >
                                        Reviews
                                    </Link>
                                </li>
                            </ul>
                        </motion.div>

                        {/* Legal */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-lg font-semibold mb-4">Legal</h3>
                            <ul className="space-y-2">
                                <li>
                                    <Link
                                        href="/privacy-policy"
                                        className="text-gray-300 dark:text-gray-400 hover:text-blue-300 transition-colors duration-200 text-sm"
                                    >
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/terms-of-service"
                                        className="text-gray-300 dark:text-gray-400 hover:text-blue-300 transition-colors duration-200 text-sm"
                                    >
                                        Terms of Service
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/cookie-policy"
                                        className="text-gray-300 dark:text-gray-400 hover:text-blue-300 transition-colors duration-200 text-sm"
                                    >
                                        Cookie Policy
                                    </Link>
                                </li>
                            </ul>
                        </motion.div>
                    </div>

                    {/* Newsletter removed as requested */}
                </div>

                {/* Bottom Bar removed as requested */}

                {/* Floating actions: Scroll to Top and WhatsApp */}
                {/* WhatsApp floating button */}
                <a
                    href="https://wa.me/14317884009"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="fixed bottom-24 right-8 w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-all z-50 hover:-translate-y-1 animate-pulse"
                    aria-label="WhatsApp Chat"
                >
                    {/* WhatsApp icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                      <path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.74 0 .62 5.11.62 11.41c0 2.01.52 3.95 1.51 5.68L0 24l7.1-2.07a11.4 11.4 0 0 0 4.96 1.12h.01c6.31 0 11.44-5.11 11.44-11.41 0-3.05-1.19-5.92-3.49-8.16ZM12.06 21.2h-.01a9.9 9.9 0 0 1-4.86-1.33l-.35-.2-4.21 1.23 1.25-4.06-.23-.33a9.9 9.9 0 0 1-1.58-5.1c0-5.47 4.47-9.93 9.98-9.93 2.66 0 5.16 1.03 7.04 2.9a9.77 9.77 0 0 1 2.93 7.02c0 5.47-4.47 9.93-9.96 9.93Zm5.77-7.43c-.32-.16-1.9-.93-2.19-1.04-.29-.11-.5-.16-.71.16-.21.32-.81 1.04-.99 1.25-.18.21-.37.24-.68.08-.32-.16-1.33-.49-2.53-1.56-.93-.8-1.56-1.78-1.74-2.08-.18-.32 0-.48.16-.64.16-.16.37-.4.53-.61.16-.21.21-.32.32-.53.1-.21.05-.4-.03-.56-.08-.16-.71-1.68-.98-2.31-.26-.64-.53-.53-.71-.53-.18 0-.4-.03-.61-.03-.21 0-.56.08-.85.4-.29.32-1.12 1.08-1.12 2.63s1.15 3.05 1.31 3.26c.16.21 2.24 3.42 5.41 4.79.76.33 1.35.53 1.81.69.76.24 1.45.21 2 .13.61-.08 1.9-.77 2.17-1.52.27-.77.27-1.43.18-1.56-.08-.13-.29-.21-.61-.37Z"/>
                    </svg>
                </a>
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-green-700 transition-all z-50 hover:-translate-y-1"
                >
                    <span className="text-lg">↑</span>
                </button>
            </div>
        </footer>
    );
};

export default Footer;