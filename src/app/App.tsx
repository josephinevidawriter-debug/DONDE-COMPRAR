import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { StickyNav } from './components/StickyNav';
import { FloatingContact } from './components/FloatingContact';
import { ChannelSelector } from './components/ChannelSelector';
import { ExportSection } from './components/ExportSection';
import { CertificationsSection } from './components/CertificationsSection';
import { ConcessionairesSection } from './components/ConcessionairesSection';
import { SupermarketsSection } from './components/SupermarketsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <StickyNav />

      <main>
        <Hero />
        <ChannelSelector />
        <ExportSection />
        <CertificationsSection />
        <ConcessionairesSection />
        <SupermarketsSection />
        <ContactSection />
      </main>

      <Footer />
      <FloatingContact />
    </div>
  );
}