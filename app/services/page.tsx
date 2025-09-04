import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import Contact from '../../components/Contact';
import ServicesContent from './ServicesContent';

export const metadata = {
  title: 'Our Services - We Buy Houses Fast For Cash',
  description: 'Explore our comprehensive house buying services. We help with foreclosure, divorce sales, inherited properties, and houses needing repairs.',
};

export default function ServicesPage() {
  return (
    <>
      <Navigation />
      <main className="pt-32">
        <ServicesContent />
        <Contact />
      </main>
      <Footer />
    </>
  );
}