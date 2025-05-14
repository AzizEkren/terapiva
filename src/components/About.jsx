import React from 'react';
import '../styles/About.css';

const About = () => {
  const founders = [
    {
      id: 1,
      name: 'Funda Girgin',
      position: 'Kurucu & Klinik Psikolog',
      image: 'https://placehold.co/400x500',
      description: 'Uzun yıllar çocuk ve ergen psikolojisi üzerine çalışmalar yürütmüş, alanında deneyimli bir uzman olarak Terapiva Akademi & Danışmanlığı kurmuştur. İstanbul Üniversitesi Psikoloji Bölümünden mezun olduktan sonra aynı üniversitede klinik psikoloji alanında yüksek lisans ve doktora eğitimini tamamlamıştır. Özellikle travma, kaygı bozuklukları ve depresyon konularında uzmanlaşmıştır.'
    },
    {
      id: 2,
      name: 'Seda Mazı',
      position: 'Kurucu & Eğitim Danışmanı',
      image: 'https://placehold.co/400x500',
      description: 'Eğitim alanında 15 yılı aşkın deneyimiyle öğrenci koçluğu ve kariyer danışmanlığı hizmetleri sunmaktadır. Boğaziçi Üniversitesi Eğitim Bilimleri Bölümünden mezun olduktan sonra, Eğitim Yönetimi ve Politikası alanında yüksek lisansını tamamlamıştır. Sınav sistemleri, öğrenme stratejileri ve öğrenci motivasyonu konularında uzmanlaşmıştır.'
    }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2>Hakkımızda</h2>
          <p>Terapiva Akademi & Danışmanlık Kimdir?</p>
        </div>
        
        <div className="about-intro">
          <p>
            Terapiva Akademi & Danışmanlık, iki değerli uzmanın mesleki tecrübelerini, bilimsel yaklaşımlarını 
            ve eğitim tutkularını birleştirerek kurdukları bir merkezdir. Kurucu ekibimiz, 
            danışanlarımızın akademik, psikolojik ve sosyal gelişimlerine katkıda bulunmak için çalışmaktadır.
          </p>
        </div>
        
        <div className="founders-profiles">
          {founders.map((founder) => (
            <div key={founder.id} className="founder-profile">
              <div className="founder-image">
                <img src={founder.image} alt={founder.name} />
              </div>
              <div className="founder-info">
                <h3>{founder.name}</h3>
                <span className="founder-position">{founder.position}</span>
                <p className="founder-description">{founder.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mission-vision">
          <div className="mission">
            <h3>Misyonumuz</h3>
            <p>
              Terapiva Akademi & Danışmanlık olarak, bireylerin akademik, duygusal ve psikolojik gelişimlerine 
              destek olmak için kaliteli ve profesyonel hizmetler sunmayı amaçlıyoruz. Uzman kadromuzla 
              öğrencilerin potansiyellerini en üst düzeye çıkarmalarına, ailelerin sağlıklı iletişim kurabilmelerine 
              ve bireylerin kişisel gelişimlerine katkıda bulunuyoruz.
            </p>
          </div>
          
          <div className="vision">
            <h3>Vizyonumuz</h3>
            <p>
              Alanında lider, yenilikçi yaklaşımlarla eğitim ve danışmanlık hizmetleri sunan, 
              toplumsal farkındalık ve bilinç düzeyini artıran bir kurum olmayı hedefliyoruz. 
              Her yaştan bireyin, kendi potansiyelini keşfetmesine ve gerçekleştirmesine 
              yardımcı olarak, mutlu ve başarılı bir toplumun oluşmasına katkıda bulunmak istiyoruz.
            </p>
          </div>
        </div>
        
        <div className="about-stats">
          <div className="stat-item">
            <span className="stat-number">5+</span>
            <span className="stat-text">Yıllık Deneyim</span>
          </div>
          
          <div className="stat-item">
            <span className="stat-number">500+</span>
            <span className="stat-text">Mutlu Danışan</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 