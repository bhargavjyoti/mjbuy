import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

export const metadata = {
  title: 'Thank You - Submission Received',
  description: 'We have received your message and will get back to you soon.',
};

export default function ThanksPage() {
  return (
    <>
      <Navigation />
      <main className="pt-32">
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-black text-center">
          <div className="max-w-3xl mx-auto px-6">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gray-900 dark:text-white">Thank You!</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">Your submission has been received. Our team will contact you within 24 hours.</p>
            <a href="/" className="inline-block bg-accent-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-accent-700 transition">Go back home</a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}


