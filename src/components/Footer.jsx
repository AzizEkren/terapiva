import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Footer.css';
import instagramIcon from '../assets/instagram.png';

const Footer = () => {
  const location = useLocation();
  
  const serviceLinks = [
    { title: 'YKS/LGS Öğrenci Koçluğu', path: '/services/yks-coaching' },
    { title: 'Aile Danışmanlığı', path: '/services/family-counseling' },
    { title: 'Online Bireysel Danışmanlık', path: '/services/online-counseling' },
    { title: 'Ergen/Yetişkin Psikoterapi', path: '/services/psychotherapy' },
    { title: 'Oyun Terapisi', path: '/services/play-therapy' }
  ];

  const quickLinks = [
    { title: 'Ana Sayfa', path: '/#home' },
    { title: 'Hakkımızda', path: '/#about' },
    { title: 'Hizmetlerimiz', path: '/#services' },
    { title: 'S.S.S.', path: '/#faq' },
    { title: 'İletişim', path: '/#contact' }
  ];

  const handleNavigation = (e, path) => {
    e.preventDefault();
    
    // If we're not on the home page, navigate there first
    if (location.pathname !== '/') {
      window.location.href = path;
      return;
    }
    
    // We're on the home page, handle smooth scrolling
    if (path === '/#home') {
      // Scroll to top smoothly
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      return;
    }
    
    // For other hash links, scroll to the element
    const hash = path.split('#')[1];
    const element = document.getElementById(hash);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <h2>Terapiva</h2>
            <p>Akademi & Danışmanlık</p>
          </div>
          
          <div className="footer-links">
            <div className="footer-section">
              <h3>Hızlı Erişim</h3>
              <ul>
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.path}
                      onClick={(e) => handleNavigation(e, link.path)}
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="footer-section">
              <h3>Hizmetlerimiz</h3>
              <ul>
                {serviceLinks.map((service, index) => (
                  <li key={index}>
                    <Link to={service.path}>{service.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="footer-section">
              <h3>İletişim</h3>
              <ul className="contact-info">
                <li><i className="material-icons">location_on</i> Bursa, Türkiye</li>
                <li className="instagram-footer-item">
                  <img src={instagramIcon} alt="Instagram" className="instagram-footer-icon" />
                  <a href="https://www.instagram.com/bursaterapiva/" target="_blank" rel="noopener noreferrer">
                    @bursaterapiva
                  </a>
                </li>
              </ul>
              <p className="footer-contact-text">Hizmetlerimiz hakkında bilgi almak için bize Instagram üzerinden ulaşabilirsiniz.</p>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Terapiva Akademi & Danışmanlık. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 