import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

export const metadata = {
  title: 'Privacy Policy - How We Protect Your Information',
  description: 'Learn how we collect, use, and protect your personal information when you use our house buying services.',
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navigation />
      <main className="pt-32">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-black">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
              Privacy <span className="text-blue-600 dark:text-blue-400">Policy</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Your privacy is important to us. This policy explains how we collect, 
              use, and protect your personal information.
            </p>
            <div className="mt-8 text-sm text-gray-500 dark:text-gray-400">
              Last updated: January 1, 2024
            </div>
          </div>
        </section>

        {/* Privacy Policy Content */}
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="max-w-4xl mx-auto px-6">
            <div className="prose prose-lg max-w-none">
              
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Information We Collect</h2>
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Personal Information</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  When you contact us about selling your house, we may collect:
                </p>
                <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2">
                  <li>Your name and contact information (phone, email)</li>
                  <li>Property address and details</li>
                  <li>Reason for selling and timeline</li>
                  <li>Property condition and repair needs</li>
                  <li>Financial situation (if relevant to the sale)</li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Automatically Collected Information</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  When you visit our website, we automatically collect:
                </p>
                <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2">
                  <li>IP address and browser information</li>
                  <li>Pages visited and time spent on site</li>
                  <li>Referring website information</li>
                  <li>Device and operating system details</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">How We Use Your Information</h2>
              <div className="mb-8">
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  We use your information to:
                </p>
                <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2">
                  <li>Evaluate your property and provide cash offers</li>
                  <li>Communicate with you about the selling process</li>
                  <li>Schedule property visits and inspections</li>
                  <li>Process the sale transaction</li>
                  <li>Improve our services and website</li>
                  <li>Send relevant market updates (with your consent)</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Information Sharing</h2>
              <div className="mb-8">
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  We do not sell, trade, or rent your personal information to third parties. 
                  We may share your information only in these limited circumstances:
                </p>
                <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2">
                  <li>With service providers who help us operate our business (title companies, inspectors)</li>
                  <li>When required by law or legal process</li>
                  <li>To protect our rights or the safety of others</li>
                  <li>In connection with a business transfer or sale</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Contact Information</h2>
              <div className="mb-8">
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  If you have questions about this privacy policy, please contact us:
                </p>
                <div className="bg-blue-50 dark:bg-blue-900/30 rounded-xl p-6">
                  <div className="space-y-2 text-gray-700 dark:text-gray-300">
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