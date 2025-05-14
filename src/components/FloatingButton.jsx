import React from 'react';
import '../styles/FloatingButton.css';
import instagramIcon from '../assets/instagram.png';

const FloatingButton = () => {
  return (
    <a 
      href="https://www.instagram.com/bursaterapiva/" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="floating-button"
      aria-label="Hemen Bilgi Al"
    >
      <div className="floating-button-content">
        <img src={instagramIcon} alt="Instagram" className="floating-button-icon" />
        <span className="floating-button-text">Hemen Bilgi Al</span>
      </div>
    </a>
  );
};

export default FloatingButton; 