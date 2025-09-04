import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

export const metadata = {
  title: 'Cookie Policy - How We Use Cookies',
  description: 'Learn about how we use cookies and similar technologies on our website.',
};

export default function CookiePolicyPage() {
  return (
    <>
      <Navigation />
      <main className="pt-32 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-neutral-50 to-white dark:from-gray-900 dark:to-black">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
              Cookie <span className="text-accent-600">Policy</span>
            </h1>
            <p className="text-xl text-neutral-600 dark:text-gray-300 leading-relaxed">
              This policy explains how we use cookies and similar technologies 
              to improve your experience on our website.
            </p>
            <div className="mt-8 text-sm text-neutral-500 dark:text-gray-400">
              Last updated: January 1, 2024
            </div>
          </div>
        </section>

        {/* Cookie Policy Content */}
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="max-w-4xl mx-auto px-6">
            <div className="prose prose-lg max-w-none prose-headings:text-neutral-900 dark:prose-headings:text-white prose-p:text-neutral-600 dark:prose-p:text-gray-300 prose-li:text-neutral-600 dark:prose-li:text-gray-300">
              
              <h2 className="text-3xl font-bold mb-6 text-neutral-900 dark:text-white">What Are Cookies?</h2>
              <div className="mb-8">
                <p className="text-neutral-600 dark:text-gray-300 mb-4">
                  Cookies are small text files that are stored on your device when you visit our website. 
                  They help us provide you with a better experience by remembering your preferences and 
                  understanding how you use our site.
                </p>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-neutral-900 dark:text-white">Types of Cookies We Use</h2>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-neutral-800 dark:text-gray-200">Essential Cookies</h3>
                <p className="text-neutral-600 dark:text-gray-300 mb-4">
                  These cookies are necessary for the website to function properly:
                </p>
                <ul className="list-disc pl-6 text-neutral-600 dark:text-gray-300 space-y-2">
                  <li>Session management and security</li>
                  <li>Form submission and contact functionality</li>
                  <li>Basic website navigation</li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-neutral-800 dark:text-gray-200">Analytics Cookies</h3>
                <p className="text-neutral-600 dark:text-gray-300 mb-4">
                  These help us understand how visitors use our website:
                </p>
                <ul className="list-disc pl-6 text-neutral-600 dark:text-gray-300 space-y-2">
                  <li>Page views and user behavior</li>
                  <li>Traffic sources and referrals</li>
                  <li>Popular content and features</li>
                  <li>Website performance metrics</li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-neutral-800 dark:text-gray-200">Functional Cookies</h3>
                <p className="text-neutral-600 dark:text-gray-300 mb-4">
                  These enhance your experience on our website:
                </p>
                <ul className="list-disc pl-6 text-neutral-600 dark:text-gray-300 space-y-2">
                  <li>Remembering your preferences</li>
                  <li>Language and region settings</li>
                  <li>Form auto-fill information</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-neutral-900 dark:text-white">Managing Cookies</h2>
              <div className="mb-8">
                <p className="text-neutral-600 dark:text-gray-300 mb-4">
                  You can control cookies through your browser settings:
                </p>
                <ul className="list-disc pl-6 text-neutral-600 dark:text-gray-300 space-y-2">
                  <li>Block all cookies (may affect website functionality)</li>
                  <li>Delete existing cookies from your device</li>
                  <li>Set preferences for specific websites</li>
                  <li>Receive notifications when cookies are set</li>
                </ul>
                <p className="text-neutral-600 dark:text-gray-300 mt-4">
                  Please note that disabling cookies may limit some features of our website.
                </p>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-neutral-900 dark:text-white">Third-Party Cookies</h2>
              <div className="mb-8">
                <p className="text-neutral-600 dark:text-gray-300 mb-4">
                  We may use third-party services that set their own cookies:
                </p>
                <ul className="list-disc pl-6 text-neutral-600 dark:text-gray-300 space-y-2">
                  <li>Google Analytics for website analytics</li>
                  <li>Social media platforms for sharing features</li>
                  <li>Customer support chat services</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-neutral-900 dark:text-white">Updates to This Policy</h2>
              <div className="mb-8">
                <p className="text-neutral-600 dark:text-gray-300 mb-4">
                  We may update this cookie policy from time to time. Any changes will be posted on this page 
                  with an updated revision date.
                </p>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-neutral-900 dark:text-white">Contact Us</h2>
              <div className="mb-8">
                <p className="text-neutral-600 dark:text-gray-300 mb-4">
                  If you have questions about our use of cookies, please contact us:
                </p>
                <div className="bg-accent-50 dark:bg-green-900/20 rounded-xl p-6">
                  <div className="space-y-2 text-neutral-700 dark:text-gray-300">
                    <div><strong>Email:</strong> mjbuyhouses1@gmail.com</div>
                    <div><strong>Phone:</strong> (416) 555-0123</div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}