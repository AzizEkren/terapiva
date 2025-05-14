import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleServicesDropdown = () => {
    setIsServicesDropdownOpen(!isServicesDropdownOpen);
  };

  const handleNavigation = (e, path) => {
    e.preventDefault();
    
    // If we're not on the home page, navigate to home first
    if (location.pathname !== '/') {
      window.location.href = path;
      return;
    }
    
    // We're on the home page, handle smooth scrolling
    if (path === '/#home') {
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

  const servicesList = [
    { title: 'YKS Öğrenci Koçluğu', link: 'yks-coaching' },
    { title: 'LGS Öğrenci Koçluğu', link: 'lgs-coaching' },
    { title: 'Online Bireysel Danışmanlık', link: 'online-counseling' },
    { title: 'Ergen/Yetişkin Psikoterapi', link: 'psychotherapy' },
    { title: 'Oyun Terapisi', link: 'play-therapy' },
    { title: 'Aile Danışmanlığı', link: 'family-counseling' }
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link 
          to="/" 
          className="navbar-logo-link"
          onClick={(e) => handleNavigation(e, '/#home')}
        >
          <div className="navbar-logo">
            <h1>Terapiva</h1>
            <p>Akademi & Danışmanlık</p>
          </div>
        </Link>
        
        <div className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <ul className="navbar-links">
            <li>
              <a 
                href="/#home" 
                onClick={(e) => handleNavigation(e, '/#home')}
              >
                Ana Sayfa
              </a>
            </li>
            <li>
              <a 
                href="/#about"
                onClick={(e) => handleNavigation(e, '/#about')}
              >
                Hakkımızda
              </a>
            </li>
            <li className="services-dropdown-container">
              <a 
                href="/#services" 
                className="services-dropdown-trigger"
                onClick={(e) => {
                  if (window.innerWidth > 768) {
                    e.preventDefault();
                  }
                  handleNavigation(e, '/#services');
                }}
                onMouseEnter={() => window.innerWidth > 768 && setIsServicesDropdownOpen(true)}
                onMouseLeave={() => window.innerWidth > 768 && setIsServicesDropdownOpen(false)}
              >
                Hizmetlerimiz <i className="material-icons dropdown-icon">expand_more</i>
              </a>
              <ul 
                className={`services-dropdown ${isServicesDropdownOpen ? 'show' : ''}`}
                onMouseEnter={() => window.innerWidth > 768 && setIsServicesDropdownOpen(true)}
                onMouseLeave={() => window.innerWidth > 768 && setIsServicesDropdownOpen(false)}
              >
                {servicesList.map((service, index) => (
                  <li key={index}>
                    <Link to={`/services/${service.link}`}>{service.title}</Link>
                  </li>
                ))}
              </ul>
            </li>
            <li>
              <a 
                href="/#faq"
                onClick={(e) => handleNavigation(e, '/#faq')}
              >
                S.S.S.
              </a>
            </li>
            <li>
              <a 
                href="/#contact"
                onClick={(e) => handleNavigation(e, '/#contact')}
              >
                İletişim
              </a>
            </li>
          </ul>
        </div>
        
        <div className="hamburger-menu" onClick={toggleMenu}>
          <div className={`bar ${isMenuOpen ? 'active' : ''}`}></div>
          <div className={`bar ${isMenuOpen ? 'active' : ''}`}></div>
          <div className={`bar ${isMenuOpen ? 'active' : ''}`}></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;