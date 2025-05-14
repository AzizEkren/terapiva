import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/main.css';

// Import Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import ServiceDetail from './components/ServiceDetail';
import About from './components/About';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingButton from './components/FloatingButton';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Services />
              <About />
              <FAQ />
              <Contact />
            </>
          } />
          <Route path="/services/:serviceId" element={<ServiceDetail />} />
        </Routes>
        <Footer />
        <FloatingButton />
      </div>
    </BrowserRouter>
  );
}

export default App;
