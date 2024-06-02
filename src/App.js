import React from 'react';
import './App.css';
import FormSection from './components/FormSection';
import InfoSection from './components/InfoSection';
import CertificateSection from './components/CertificateSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <FormSection />
      <InfoSection />
      <CertificateSection />
      <Footer />
    </div>
  );
}

export default App;
