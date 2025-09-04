'use client'

import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import Testimonials from '../../components/Testimonials';
import { useRouter } from 'next/navigation';



export default function TestimonialsPage() {
  const router = useRouter();

  return (
    <>
      <Navigation />
      <main className="pt-32">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-black">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-6 py-3 rounded-full font-semibold text-sm border border-blue-200 dark:border-blue-700 mb-8">
              ⭐ Client Reviews
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
              What Our <span className="text-blue-600 dark:text-blue-400">Clients Say</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Don't just take our word for it. Read real testimonials from homeowners 
              who sold their houses quickly and fairly with our help.
            </p>
          </div>
        </section>

        <Testimonials />

        {/* Call to Action */}
        <section className="py-20 bg-blue-600 dark:bg-blue-800 text-white">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Join Our Happy Clients?</h2>
            <p className="text-xl text-blue-100 dark:text-blue-200 mb-8 max-w-3xl mx-auto">
              Get your no-obligation cash offer today and experience the same great service 
              our clients rave about.
            </p>
            <button 
              onClick={() => router.push('/contact')}
              className="bg-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-700 transition-all duration-300"
            >
              Get Your Cash Offer
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}