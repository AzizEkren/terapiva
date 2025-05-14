import React, { useState } from 'react';
import '../styles/FAQ.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqItems = [
    {
      id: 1,
      question: "Danışmanlık seansları ne kadar sürüyor?",
      answer: "Danışmanlık seanslarımız genellikle 45-50 dakika sürmektedir. İlk görüşme ise tanışma ve değerlendirme amacıyla 60 dakika olarak planlanabilir."
    },
    {
      id: 2,
      question: "Öğrenci koçluğu hizmetinizi hangi sıklıkla almalıyım?",
      answer: "Öğrenci koçluğu hizmetimiz, öğrencinin ihtiyaçlarına göre haftalık ya da iki haftada bir şeklinde planlanabilir. Sınav dönemlerine yaklaştıkça görüşme sıklığının artırılması daha faydalı olabilir."
    },
    {
      id: 3,
      question: "Online seanslar nasıl gerçekleşiyor?",
      answer: "Online seanslar, Zoom veya benzer görüntülü görüşme platformları üzerinden güvenli bir şekilde gerçekleştirilmektedir. Görüşme için size özel bir link ve şifre gönderilir. Seanslar yüz yüze seanslara benzer şekilde ilerler."
    },
    {
      id: 4,
      question: "Çocuğum için hangi yaştan itibaren oyun terapisi alabilirim?",
      answer: "Oyun terapisi genellikle 3-12 yaş arası çocuklar için uygundur. Çocuğun gelişim düzeyi ve ihtiyaçları doğrultusunda farklı oyun terapi teknikleri kullanılmaktadır."
    },
    {
      id: 5,
      question: "Aile danışmanlığı seanslarına tüm aile üyeleri katılmalı mı?",
      answer: "İdeal olan tüm aile üyelerinin katılmasıdır, ancak her durumda mümkün olmayabilir. Öncelikle aile içindeki temel sorunla ilgili aile üyelerinin katılımı önemlidir. Süreç içerisinde gerekli görülen aile üyeleri farklı seanslara davet edilebilir."
    },
    {
      id: 6,
      question: "Psikoterapi süreci ne kadar devam eder?",
      answer: "Psikoterapi süreci kişinin ihtiyaçlarına, sorunun türüne ve çalışılacak alanlara göre değişkenlik gösterir. Kısa süreli terapiler 8-12 seans sürebilirken, daha kapsamlı sorunlar için uzun süreli terapi gerekebilir. Her danışan için bireyselleştirilmiş bir plan oluşturulur."
    },
    {
      id: 7,
      question: "Ücretlendirme politikanız nasıldır?",
      answer: "Hizmetlerimizin ücretleri, alınan danışmanlık türüne ve süresine göre değişiklik göstermektedir. Güncel fiyat bilgileri için bizimle iletişime geçebilirsiniz. Öğrenciler ve düzenli seans alan danışanlarımız için özel paketlerimiz bulunmaktadır."
    },
    {
      id: 8,
      question: "Randevu iptal politikanız nedir?",
      answer: "Randevularınızı 24 saat öncesinden iptal etmeniz durumunda herhangi bir ücret yansıtılmaz. 24 saatten daha kısa sürede yapılan iptallerde, acil durumlar hariç, seans ücretinin bir kısmı tahsil edilebilir."
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq">
      <div className="container">
        <div className="section-header">
          <h2>Sıkça Sorulan Sorular</h2>
          <p>Danışmanlık hizmetlerimizle ilgili merak edilenler</p>
        </div>
        
        <div className="faq-container">
          {faqItems.map((item, index) => (
            <div 
              key={item.id} 
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
              onClick={() => toggleAccordion(index)}
            >
              <div className="faq-question">
                <h3>{item.question}</h3>
                <span className="faq-icon">
                  <i className="material-icons">
                    {activeIndex === index ? 'remove' : 'add'}
                  </i>
                </span>
              </div>
              <div className={`faq-answer ${activeIndex === index ? 'active' : ''}`}>
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ; 