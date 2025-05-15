import React from 'react';
import '../styles/About.css';
import sedaImage from '../assets/seda.jpg';
import fundaImage from '../assets/funda.jpg';

const About = () => {
  const founders = [
    {
      id: 1,
      name: 'Seda Mazı',
      position: 'Terapiva Danışmanlık Kurucusu | Psikolojik Danışman',
      image: sedaImage,
      description: "Uzun yıllardır öğrenci koçluğu ve eğitim danışmanlığı alanında çalışmalar yürüten bir uzman olarak Terapiva Danışmanlık'ı kurdum. Hacettepe Üniversitesi Psikolojik Danışmanlık ve Rehberlik Bölümünden mezun oldum. Yaklaşık 7 yıldır öğrenci koçluğu ve eğitim danışmanlığı alanlarında aktif olarak çalışıyor, öğrencilerin hem akademik hem de kişisel gelişim süreçlerine eşlik ediyorum. Öğrenci koçluğu, psikoterapi, aile danışmanlığı, stres ve kaygı yönetimi, sınav stresiyle başa çıkma, NLP teknikleri, oyun ve kum terapisi, filial terapi, yaşam koçluğu ve nefes koçluğu gibi alanlarda uzmanım. Özellikle sınav sistemleri, etkili öğrenme stratejileri ve öğrenci motivasyonu konularında derinlemesine bilgi sahibiyim ve bu alanlarda pek çok öğrencinin hedeflerine ulaşmasını sağladım. Her öğrencinin farklı ihtiyaçlara sahip olduğunu bilerek, süreci bireye özel yapılandırıyor; güçlü yönleri ön plana çıkaran, motivasyonu destekleyen ve sürdürülebilir başarıyı hedefleyen stratejilerle ilerliyorum."
    },
    {
      id: 2,
      name: 'Funda Girgin',
      position: 'Terapiva Danışmanlık Kurucusu | Psikolojik Danışman',
      image: fundaImage,
      description: "Uludağ Üniversitesi Psikolojik Danışmanlık ve Rehberlik bölümünden mezun olduktan sonra, İstanbul ve Bursa'daki çeşitli özel kurumlarda her yaş grubuna yönelik danışmanlık ve rehberlik hizmetleri verdim. Eğitim koçluğu, çocuk ve ergen danışmanlığı, grup çalışmaları, psikoeğitim programları ve yetişkin psikoterapisi alanlarında kapsamlı bir saha deneyimi edindim. Akademik gelişimin; sağlıklı bir psikolojik altyapı, doğru yönlendirme ve bireysel farkındalıkla sürdürülebilir olduğuna inanıyorum. Bu yaklaşım doğrultusunda Terapiva Akademi ve Danışmanlık çatısı altında, öğrenci koçluğu ve bireysel danışmanlık hizmetleri sunuyoruz. Danışanlarımla kurduğum ilişki, sadece bir süreç değil; dönüşümün mümkün olduğuna inanan, güvene dayalı bir iş birliği. Yıllar içinde gördüm ki, her birey doğru destekle kendi potansiyeline ulaşabilir. Bu inanç, mesleğimi tutkuyla ve sorumlulukla sürdürmemin en temel sebebi."
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
        
        <div className="founders-grid">
          {founders.map((founder) => (
            <div key={founder.id} className="founder-card">
              <div className="founder-image-wrapper">
                <img src={founder.image} alt={founder.name} className="founder-image" />
              </div>
              <div className="founder-content">
                <h3 className="founder-name">{founder.name}</h3>
                <span className="founder-position">{founder.position}</span>
                <div className="founder-description">
                  {founder.description.split('. ').map((paragraph, index) => (
                    <p key={index}>{paragraph}.</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="values-section">
          <div className="mission-vision-grid">
            <div className="value-card mission">
              <h3>Misyonumuz</h3>
              <p>
                Terapiva Akademi & Danışmanlık olarak, bireylerin akademik, duygusal ve psikolojik gelişimlerine 
                destek olmak için kaliteli ve profesyonel hizmetler sunmayı amaçlıyoruz. Uzman kadromuzla 
                öğrencilerin potansiyellerini en üst düzeye çıkarmalarına, ailelerin sağlıklı iletişim kurabilmelerine 
                ve bireylerin kişisel gelişimlerine katkıda bulunuyoruz.
              </p>
            </div>
            
            <div className="value-card vision">
              <h3>Vizyonumuz</h3>
              <p>
                Alanında lider, yenilikçi yaklaşımlarla eğitim ve danışmanlık hizmetleri sunan, 
                toplumsal farkındalık ve bilinç düzeyini artıran bir kurum olmayı hedefliyoruz. 
                Her yaştan bireyin, kendi potansiyelini keşfetmesine ve gerçekleştirmesine 
                yardımcı olarak, mutlu ve başarılı bir toplumun oluşmasına katkıda bulunmak istiyoruz.
              </p>
            </div>
          </div>
        </div>
        
        <div className="stats-section">
          <div className="stat-card">
            <span className="stat-number">15+</span>
            <span className="stat-text">Yıllık Deneyim</span>
          </div>
          
          <div className="stat-card">
            <span className="stat-number">500+</span>
            <span className="stat-text">Mutlu Danışan</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 