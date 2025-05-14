import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Services.css';

const Services = () => {
  const serviceList = [
    {
      id: 1,
      title: 'YKS Öğrenci Koçluğu',
      description: 'YKS öğrencilerine özel planlama, motivasyon ve hedef odaklı koçluk hizmetleri.',
      icon: 'school',
      link: 'yks-coaching'
    },
    {
      id: 2,
      title: 'LGS Öğrenci Koçluğu',
      description: 'LGS öğrencilerine özel planlama, motivasyon ve hedef odaklı koçluk hizmetleri.',
      icon: 'school',
      link: 'lgs-coaching'
    },
    {
      id: 3,
      title: 'Online Bireysel Danışmanlık',
      description: 'Uzaktan erişimle profesyonel danışmanlık hizmetleri.',
      icon: 'support_agent',
      link: 'online-counseling'
    },
    {
      id: 4,
      title: 'Ergen/Yetişkin Psikoterapi',
      description: 'Ergen ve yetişkinler için profesyonel psikoterapi seansları.',
      icon: 'psychology',
      link: 'psychotherapy'
    },
    {
      id: 5,
      title: 'Oyun Terapisi',
      description: 'Çocuklar için oyun üzerinden terapi seansları.',
      icon: 'toys',
      link: 'play-therapy'
    },
    {
      id: 6,
      title: 'Aile Danışmanlığı',
      description: 'Aile içi iletişim problemleri, ebeveynlik becerileri ve çatışma çözümü konularında danışmanlık.',
      icon: 'family_restroom',
      link: 'family-counseling'
    }
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header">
          <h2>Hizmetlerimiz</h2>
          <p>Terapiva Akademi & Danışmanlık olarak sunduğumuz profesyonel hizmetler</p>
        </div>
        
        <div className="services-grid">
          {serviceList.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-icon">
                <span className="material-icons">{service.icon}</span>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <Link to={`/services/${service.link}`} className="service-link">Detaylı Bilgi</Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 