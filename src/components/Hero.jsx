import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/Hero.css';
import bg1 from '../assets/1.jpg';
import bg2 from '../assets/2.jpg';
import bg3 from '../assets/3.jpg';
import bg4 from '../assets/4.jpg';
import bg5 from '../assets/5.jpg';

const Hero = () => {
  const [currentBg, setCurrentBg] = useState(0);
  const location = useLocation();
  
  const backgrounds = [
    bg1,
    bg2,
    bg3,
    bg4,
    bg5
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg(prev => (prev + 1) % backgrounds.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  const handleNavigation = (e, path) => {
    e.preventDefault();
    
    // If we're not on the home page, navigate to home first
    if (location.pathname !== '/') {
      window.location.href = path;
      return;
    }
    
    // For hash links, scroll to the element
    const hash = path.split('#')[1];
    const element = document.getElementById(hash);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <section id="home" className="hero">
      <div className="hero-bg-container">
        {backgrounds.map((bg, index) => (
          <div 
            key={index}
            className={`hero-bg ${index === currentBg ? 'active' : ''}`}
            style={{ backgroundImage: `url(${bg})` }}
          />
        ))}
      </div>
      
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1>Terapiva Akademi & Danışmanlık</h1>
        <p>Profesyonel danışmanlık ve eğitim hizmetleriyle yanınızdayız</p>
        <p className="hero-subtitle">Bireylerin akademik ve psikolojik gelişimlerine destek olarak geleceğe yön veriyoruz</p>
        <div className="hero-buttons">
          <a 
            href="/#services" 
            className="btn btn-primary"
            onClick={(e) => handleNavigation(e, '/#services')}
          >
            Hizmetlerimiz
          </a>
          <a 
            href="/#contact" 
            className="btn btn-secondary"
            onClick={(e) => handleNavigation(e, '/#contact')}
          >
            İletişime Geçin
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero; 