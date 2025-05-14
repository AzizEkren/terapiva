import React from 'react';
import '../styles/Contact.css';
import instagramIcon from '../assets/instagram.png';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <h2>İletişim</h2>
          <p>Bize Instagram üzerinden ulaşabilirsiniz</p>
        </div>

        <div className="contact-content instagram-contact">
          <div className="instagram-info">
            <div className="instagram-icon">
              <img src={instagramIcon} alt="Instagram" className="instagram-img-icon" />
            </div>
            <h3>Bizimle İletişime Geçin</h3>
            <p>Hizmetlerimiz hakkında detaylı bilgi almak, randevu oluşturmak veya sorularınızı sormak için bize Instagram üzerinden yazabilirsiniz.</p>
            <p className="instagram-handle">@bursaterapiva</p>
            <a href="https://www.instagram.com/bursaterapiva/" target="_blank" rel="noopener noreferrer" className="instagram-button">
              <i className="material-icons">open_in_new</i> Instagram Profilimizi Ziyaret Et
            </a>
            <p className="response-info">Mesajlarınıza en kısa sürede yanıt vereceğiz.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 