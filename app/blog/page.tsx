import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

export const metadata = {
  title: 'Blog - Resources and Guides',
  description: 'Read helpful articles and tips related to selling your house fast for cash.',
};

export default function BlogPage() {
  return (
    <>
      <Navigation />
      <main className="pt-32">
        {/* Hero */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-black text-center">
          <div className="max-w-4xl mx-auto px-6">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gray-900 dark:text-white">Blog</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">Insights, tips, and guides to help you sell your house fast.</p>
          </div>
        </section>

        {/* Placeholder posts */}
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 6 }).map((_, i) => (
              <article key={i} className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700">
                <div className="h-40 bg-gray-100 dark:bg-gray-700 rounded-xl mb-4" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Sample Blog Post #{i + 1}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">This is placeholder content. Replace with a real article later.</p>
                <span className="text-primary-600 dark:text-primary-400 font-semibold">Read more →</span>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}


