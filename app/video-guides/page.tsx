import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

export const metadata = {
  title: 'Video Guides - Step-by-step Help',
  description: 'Watch helpful videos about selling your house fast and our process.',
};

export default function VideoGuidesPage() {
  return (
    <>
      <Navigation />
      <main className="pt-32">
        {/* Hero */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-black text-center">
          <div className="max-w-4xl mx-auto px-6">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gray-900 dark:text-white">Video Guides</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">Short videos to walk you through our process.</p>
          </div>
        </section>

        {/* Placeholder video embed */}
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="max-w-4xl mx-auto px-6">
            <div className="aspect-video w-full rounded-2xl overflow-hidden bg-black">
              {/* Replace the src with any YouTube link */}
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}


