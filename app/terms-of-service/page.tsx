import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

export const metadata = {
  title: 'Terms of Service - Our Service Agreement',
  description: 'Read our terms of service to understand the agreement between you and our house buying services.',
};

export default function TermsOfServicePage() {
  return (
    <>
      <Navigation />
      <main className="pt-32 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-neutral-50 to-white dark:from-gray-900 dark:to-black">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
              Terms of <span className="text-accent-600">Service</span>
            </h1>
            <p className="text-xl text-neutral-600 dark:text-gray-300 leading-relaxed">
              Please read these terms carefully before using our services. 
              By using our services, you agree to these terms.
            </p>
            <div className="mt-8 text-sm text-neutral-500 dark:text-gray-400">
              Last updated: January 1, 2024
            </div>
          </div>
        </section>

        {/* Terms Content */}
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="max-w-4xl mx-auto px-6">
            <div className="prose prose-lg max-w-none prose-headings:text-neutral-900 dark:prose-headings:text-white prose-p:text-neutral-600 dark:prose-p:text-gray-300 prose-li:text-neutral-600 dark:prose-li:text-gray-300">
              
              <h2 className="text-3xl font-bold mb-6 text-neutral-900 dark:text-white">Acceptance of Terms</h2>
              <div className="mb-8">
                <p className="text-neutral-600 dark:text-gray-300 mb-4">
                  By accessing and using our website and services, you accept and agree to be bound by the terms 
                  and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-neutral-900 dark:text-white">Our Services</h2>
              <div className="mb-8">
                <p className="text-neutral-600 dark:text-gray-300 mb-4">
                  We provide real estate investment services, including:
                </p>
                <ul className="list-disc pl-6 text-neutral-600 dark:text-gray-300 space-y-2">
                  <li>Cash offers for residential properties</li>
                  <li>Property evaluation and consultation</li>
                  <li>Fast closing services</li>
                  <li>As-is property purchases</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-neutral-900 dark:text-white">Property Offers</h2>
              <div className="mb-8">
                <p className="text-neutral-600 dark:text-gray-300 mb-4">
                  All offers made by us are:
                </p>
                <ul className="list-disc pl-6 text-neutral-600 dark:text-gray-300 space-y-2">
                  <li>Non-binding until a purchase agreement is signed</li>
                  <li>Subject to property inspection and verification</li>
                  <li>Valid for the time period specified in the offer</li>
                  <li>Based on current market conditions and property condition</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-neutral-900 dark:text-white">User Responsibilities</h2>
              <div className="mb-8">
                <p className="text-neutral-600 dark:text-gray-300 mb-4">
                  When using our services, you agree to:
                </p>
                <ul className="list-disc pl-6 text-neutral-600 dark:text-gray-300 space-y-2">
                  <li>Provide accurate and complete information about your property</li>
                  <li>Allow reasonable access for property inspection</li>
                  <li>Disclose any known defects or issues with the property</li>
                  <li>Comply with all applicable laws and regulations</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-neutral-900 dark:text-white">Limitation of Liability</h2>
              <div className="mb-8">
                <p className="text-neutral-600 dark:text-gray-300 mb-4">
                  Our liability is limited to the extent permitted by law. We are not responsible for:
                </p>
                <ul className="list-disc pl-6 text-neutral-600 dark:text-gray-300 space-y-2">
                  <li>Market fluctuations affecting property values</li>
                  <li>Delays caused by third parties (title companies, banks, etc.)</li>
                  <li>Undisclosed property defects or issues</li>
                  <li>Changes in local regulations or zoning</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-neutral-900 dark:text-white">Contact Information</h2>
              <div className="mb-8">
                <p className="text-neutral-600 dark:text-gray-300 mb-4">
                  For questions about these terms, please contact us:
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