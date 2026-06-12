import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { StickyNav } from './components/StickyNav';
import { FloatingContact } from './components/FloatingContact';
import { ExportSection } from './components/ExportSection';
import { CertificationsSection } from './components/CertificationsSection';
import { ConcessionairesSection } from './components/ConcessionairesSection';
import { SupermarketsSection } from './components/SupermarketsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const [selectedJourney, setSelectedJourney] = useState<'sell' | 'buy' | null>(null);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <StickyNav />

      <main>
        <Hero onSelectJourney={setSelectedJourney} />

        {selectedJourney !== 'buy' && (
          <>
            <ExportSection />
            <CertificationsSection />
          </>
        )}

        {selectedJourney !== 'sell' && (
          <>
            <ConcessionairesSection />
            <SupermarketsSection />
          </>
        )}

        <ContactSection />
      </main>

      <hEADER />
      <FloatingContact />
    </div>
  );
}