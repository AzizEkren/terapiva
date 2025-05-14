import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import '../styles/ServiceDetail.css';
import instagramIcon from '../assets/instagram.png';

const serviceDetails = [
  {
    id: 'yks-coaching',
    title: 'YKS Öğrenci Koçluğu',
    description: 'YKS öğrencilerine özel planlama, motivasyon ve hedef odaklı koçluk hizmetleri.',
    icon: 'school',
    content: `
      <h2>YKS Öğrenci Koçluğu Nedir?</h2>
      <p>YKS (Yükseköğretim Kurumları Sınavı) Öğrenci Koçluğu, üniversiteye hazırlanan öğrencilerin sınav sürecini en verimli şekilde geçirmelerini sağlamak için tasarlanmış profesyonel bir destek hizmetidir.</p>
      
      <h3>YKS Koçluğu Kapsamında Sunulanlar:</h3>
      <ul>
        <li>Kişiye özel çalışma programı oluşturma</li>
        <li>Düzenli takip ve motivasyon desteği</li>
        <li>Verimli çalışma teknikleri eğitimi</li>
        <li>Zaman yönetimi becerileri geliştirme</li>
        <li>Sınav kaygısıyla başa çıkma stratejileri</li>
        <li>Hedef belirleme ve hedefe yönelik planlama</li>
        <li>Güçlü ve zayıf yönlerin analizi</li>
        <li>Düzenli deneme sınavları ve analizi</li>
      </ul>
      
      <h3>YKS Koçluğunun Faydaları:</h3>
      <p>Öğrencilerin akademik performansını artırır, motivasyonunu yüksek tutar, sınav kaygısını azaltır ve doğru tercihlerde bulunmalarına yardımcı olur. Planlı ve disiplinli bir çalışma alışkanlığı kazandırarak öğrencinin potansiyelini en üst düzeyde kullanmasını sağlar.</p>
      
      <h3>Kimler İçin Uygundur?</h3>
      <p>YKS'ye hazırlanan tüm öğrenciler, çalışma disiplini geliştirmek isteyenler, sınav kaygısıyla baş etmekte zorlananlar ve hedeflerine odaklanmak isteyenler için uygundur.</p>
    `,
    image: 'https://placehold.co/800x500'
  },
  {
    id: 'lgs-coaching',
    title: 'LGS Öğrenci Koçluğu',
    description: 'LGS öğrencilerine özel planlama, motivasyon ve hedef odaklı koçluk hizmetleri.',
    icon: 'school',
    content: `
      <h2>LGS Öğrenci Koçluğu Nedir?</h2>
      <p>LGS (Liselere Geçiş Sistemi) Öğrenci Koçluğu, ortaokul öğrencilerinin LGS sürecini başarıyla tamamlamaları için tasarlanmış özel bir destek programıdır.</p>
      
      <h3>LGS Koçluğu Kapsamında Sunulanlar:</h3>
      <ul>
        <li>Yaşa ve seviyeye uygun çalışma planı hazırlama</li>
        <li>Verimli ders çalışma alışkanlıkları kazandırma</li>
        <li>Düzenli deneme sınavları ve analizleri</li>
        <li>Bireysel gelişim takibi ve raporlama</li>
        <li>Sınav kaygısıyla başa çıkma teknikleri</li>
        <li>Motivasyon ve özgüven geliştirme çalışmaları</li>
        <li>Aile eğitim seminerleri</li>
      </ul>
      
      <h3>LGS Koçluğunun Faydaları:</h3>
      <p>Öğrencilerin akademik başarısını artırır, planlı çalışma alışkanlığı kazandırır, sınav stresini azaltır ve doğru liseyi seçmelerine yardımcı olur. Eğitim hayatının önemli bir geçiş döneminde öğrenciye rehberlik ederek geleceğe en iyi şekilde hazırlanmasını sağlar.</p>
      
      <h3>Kimler İçin Uygundur?</h3>
      <p>LGS'ye hazırlanan tüm ortaokul öğrencileri, akademik başarısını artırmak isteyenler, çalışma disiplini oluşturmakta zorlananlar ve doğru liseyi seçmek isteyenler için idealdir.</p>
    `,
    image: 'https://placehold.co/800x500'
  },
  {
    id: 'online-counseling',
    title: 'Online Bireysel Danışmanlık',
    description: 'Uzaktan erişimle profesyonel danışmanlık hizmetleri.',
    icon: 'support_agent',
    content: `
      <h2>Online Bireysel Danışmanlık Nedir?</h2>
      <p>Online Bireysel Danışmanlık, yüz yüze görüşme imkanı olmayan ya da online görüşmeyi tercih eden danışanlarımıza profesyonel psikolojik danışmanlık hizmetidir.</p>
      
      <h3>Online Danışmanlık Kapsamında Sunulanlar:</h3>
      <ul>
        <li>Video konferans yoluyla birebir görüşmeler</li>
        <li>Esnek seans saatleri</li>
        <li>Kişiye özel terapi yöntemleri</li>
        <li>Güvenli ve gizli görüşme ortamı</li>
        <li>Periyodik ilerleme değerlendirmeleri</li>
        <li>Seans arası destek ve takip</li>
      </ul>
      
      <h3>Online Danışmanlığın Faydaları:</h3>
      <p>Zamandan ve mekandan bağımsız olarak profesyonel destek almanızı sağlar. Ev ya da ofis ortamında kendinizi daha rahat hissederek terapiden daha fazla verim alabilirsiniz. Ulaşım sorunu yaşamadan, trafik stresi olmadan danışmanlık hizmeti alabilirsiniz.</p>
      
      <h3>Kimler İçin Uygundur?</h3>
      <p>Yoğun iş temposuna sahip olanlar, farklı şehir veya ülkelerde yaşayanlar, fiziksel erişim sorunu yaşayanlar, ev ortamında danışmanlık almayı tercih edenler için idealdir.</p>
    `,
    image: 'https://placehold.co/800x500'
  },
  {
    id: 'psychotherapy',
    title: 'Ergen/Yetişkin Psikoterapi',
    description: 'Ergen ve yetişkinler için profesyonel psikoterapi seansları.',
    icon: 'psychology',
    content: `
      <h2>Ergen/Yetişkin Psikoterapi Nedir?</h2>
      <p>Ergen ve yetişkin bireylere yönelik, psikolojik sorunların çözümünde profesyonel destek sağlayan terapi hizmetidir. Bireyin içsel dünyasını keşfetmesine, davranış ve düşünce kalıplarını anlamasına ve psikolojik zorlukların üstesinden gelmesine yardımcı olur.</p>
      
      <h3>Psikoterapi Kapsamında Sunulanlar:</h3>
      <ul>
        <li>Bireysel terapi seansları</li>
        <li>Bilişsel davranışçı terapi</li>
        <li>Şema terapi</li>
        <li>EMDR (Göz Hareketleriyle Duyarsızlaştırma ve Yeniden İşleme)</li>
        <li>Mindfulness temelli yaklaşımlar</li>
        <li>Kişiye özel terapi planı</li>
        <li>Düzenli ilerleme değerlendirmeleri</li>
      </ul>
      
      <h3>Psikoterapinin Faydaları:</h3>
      <p>Depresyon, anksiyete, stres, travma sonrası stres bozukluğu, kişilik bozuklukları gibi psikolojik sorunların üstesinden gelmeye yardımcı olur. Kendinizi daha iyi tanımanızı, duygularınızı yönetmenizi ve sağlıklı ilişkiler kurmanızı sağlar. Yaşam kalitenizi ve psikolojik dayanıklılığınızı artırır.</p>
      
      <h3>Kimler İçin Uygundur?</h3>
      <p>Psikolojik sorunlar yaşayan ergen ve yetişkinler, kendini daha iyi tanımak isteyenler, duygusal zorluklar yaşayanlar, ilişki problemleri olanlar ve travmatik deneyimleri olanlar için uygundur.</p>
    `,
    image: 'https://placehold.co/800x500'
  },
  {
    id: 'play-therapy',
    title: 'Oyun Terapisi',
    description: 'Çocuklar için oyun üzerinden terapi seansları.',
    icon: 'toys',
    content: `
      <h2>Oyun Terapisi Nedir?</h2>
      <p>Oyun Terapisi, çocukların duygusal ve davranışsal sorunlarının çözümünde oyunu bir iletişim ve tedavi aracı olarak kullanan, çocuğa özel bir terapi yöntemidir.</p>
      
      <h3>Oyun Terapisi Kapsamında Sunulanlar:</h3>
      <ul>
        <li>Çocuğa özel oyun terapisi seansları</li>
        <li>Özel olarak tasarlanmış terapi odası ve oyuncaklar</li>
        <li>Gelişimsel değerlendirmeler</li>
        <li>Ebeveyn görüşmeleri ve rehberlik</li>
        <li>İlerleme raporları</li>
        <li>Okul ve öğretmenlerle iş birliği</li>
      </ul>
      
      <h3>Oyun Terapisinin Faydaları:</h3>
      <p>Çocuğun kendini ifade etmesini kolaylaştırır, duygusal ve davranışsal sorunların çözümüne yardımcı olur. Travmatik deneyimlerin üstesinden gelmeyi sağlar, özgüven ve öz düzenleme becerilerini geliştirir. Sosyal becerilerin ve iletişimin güçlenmesine katkıda bulunur.</p>
      
      <h3>Kimler İçin Uygundur?</h3>
      <p>Duygusal zorluklar yaşayan çocuklar, davranış problemleri gösteren çocuklar, travma yaşamış çocuklar, iletişim sorunları olan çocuklar, uyum problemleri yaşayan çocuklar için idealdir.</p>
    `,
    image: 'https://placehold.co/800x500'
  },
  {
    id: 'family-counseling',
    title: 'Aile Danışmanlığı',
    description: 'Aile içi iletişim problemleri, ebeveynlik becerileri ve çatışma çözümü konularında danışmanlık.',
    icon: 'family_restroom',
    content: `
      <h2>Aile Danışmanlığı Nedir?</h2>
      <p>Aile Danışmanlığı, aile içi ilişkileri güçlendirmek, çatışmaları çözmek ve daha sağlıklı bir aile ortamı oluşturmak amacıyla profesyonel destek sağlayan bir danışmanlık hizmetidir.</p>
      
      <h3>Aile Danışmanlığı Kapsamında Sunulanlar:</h3>
      <ul>
        <li>Aile görüşmeleri ve seansları</li>
        <li>Ebeveyn eğitimleri</li>
        <li>Çift terapisi</li>
        <li>İletişim becerilerini geliştirme çalışmaları</li>
        <li>Çatışma çözme teknikleri</li>
        <li>Aile içi rol ve sorumlulukların düzenlenmesi</li>
        <li>Kriz yönetimi desteği</li>
      </ul>
      
      <h3>Aile Danışmanlığının Faydaları:</h3>
      <p>Aile içi iletişimi güçlendirir, çatışmaların sağlıklı bir şekilde çözülmesini sağlar. Ebeveynlik becerilerini geliştirir, aile üyeleri arasında empati ve anlayışı artırır. Kriz dönemlerinde aileye destek olur ve daha güçlü aile bağları oluşturur.</p>
      
      <h3>Kimler İçin Uygundur?</h3>
      <p>İletişim sorunları yaşayan aileler, ebeveynlik konusunda zorlanan anne-babalar, boşanma sürecindeki veya sonrasındaki aileler, aile içi çatışmalar yaşayan aileler ve yeni bir aile düzenine geçiş yapan aileler için idealdir.</p>
    `,
    image: 'https://placehold.co/800x500'
  }
];

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const service = serviceDetails.find(s => s.id === serviceId);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceId]);
  
  if (!service) {
    return (
      <div className="service-detail">
        <div className="container">
          <div className="service-not-found">
            <h2>Hizmet bulunamadı!</h2>
            <Link to="/#services" className="btn btn-primary">Hizmetlerimize Dön</Link>
          </div>
        </div>
      </div>
    );
  }

  // Parse the content into sections
  const contentWithoutFirstH2 = service.content.trim().replace(/<h2>.*?<\/h2>/, '').trim();
  const contentSections = contentWithoutFirstH2.split(/<h3>/g);
  const introSection = contentSections[0];
  const detailSections = contentSections.slice(1).map(section => '<h3>' + section);
  
  // Find section titles
  const sectionTitles = [];
  detailSections.forEach(section => {
    const titleMatch = section.match(/<h3>(.*?)<\/h3>/);
    if (titleMatch) {
      sectionTitles.push(titleMatch[1]);
    }
  });

  return (
    <section className="service-detail">
      <div className="service-detail-banner">
        <div className="container">
          <div className="service-icon-large">
            <span className="material-icons">{service.icon}</span>
          </div>
          <h1>{service.title}</h1>
          <p className="service-subtitle">{service.description}</p>
        </div>
      </div>

      <div className="service-detail-content">
        <div className="container">
          <div className="service-detail-grid">
            <div className="service-detail-main">
              <div 
                dangerouslySetInnerHTML={{ 
                  __html: `<h2>${service.title} Nedir?</h2>${introSection}` 
                }}
              />
              
              {detailSections.map((section, index) => (
                <div 
                  key={index}
                  id={`section-${index}`}
                  className="service-detail-section"
                  dangerouslySetInnerHTML={{ __html: section }}
                />
              ))}
              
              <div className="service-detail-nav-buttons">
                <Link to="/" className="nav-arrow prev" onClick={() => {
                  setTimeout(() => {
                    const servicesSection = document.getElementById('services');
                    if (servicesSection) {
                      servicesSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }, 100);
                }}>
                  <span className="material-icons">arrow_back</span>
                  Tüm Hizmetlerimiz
                </Link>
                
                <div className="service-navigation">
                  {serviceId !== 'yks-coaching' && (
                    <Link 
                      to={`/services/${serviceId === 'family-counseling' ? 'play-therapy' : 
                          serviceId === 'play-therapy' ? 'psychotherapy' : 
                          serviceId === 'psychotherapy' ? 'online-counseling' : 
                          serviceId === 'online-counseling' ? 'lgs-coaching' : 
                          serviceId === 'lgs-coaching' ? 'yks-coaching' : ''}`} 
                      className="nav-arrow prev"
                    >
                      <span className="material-icons">arrow_back</span>
                      Önceki Hizmet
                    </Link>
                  )}
                  
                  {serviceId !== 'family-counseling' && (
                    <Link 
                      to={`/services/${serviceId === 'yks-coaching' ? 'lgs-coaching' : 
                          serviceId === 'lgs-coaching' ? 'online-counseling' : 
                          serviceId === 'online-counseling' ? 'psychotherapy' : 
                          serviceId === 'psychotherapy' ? 'play-therapy' : 
                          serviceId === 'play-therapy' ? 'family-counseling' : ''}`} 
                      className="nav-arrow next"
                    >
                      Sonraki Hizmet
                      <span className="material-icons">arrow_forward</span>
                    </Link>
                  )}
                </div>
              </div>
            </div>
            
            <div className="service-detail-sidebar">
              <div className="service-detail-nav">
                <h3>İçerik</h3>
                {sectionTitles.map((title, index) => (
                  <a 
                    key={index}
                    href={`#section-${index}`}
                    className="section-nav-link"
                  >
                    {title}
                  </a>
                ))}
              </div>
              
              <div className="service-contact-card">
                <h3>Bu Hizmet Hakkında Bilgi Almak İster misiniz?</h3>
                <p>Daha detaylı bilgi almak ve sorularınızı sormak için Instagram üzerinden bizimle iletişime geçebilirsiniz.</p>
                <a 
                  href="https://www.instagram.com/bursaterapiva/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="instagram-contact-button"
                >
                  <img src={instagramIcon} alt="Instagram" className="instagram-button-icon" />
                  <span>İletişime Geç</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetail;