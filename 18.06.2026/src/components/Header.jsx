import React, { useState, useEffect } from 'react';

const SLIDES = [
  {
    id: 1,
    title: "Geleceğin Teknolojisi Bugün Kapınızda",
    subtitle: "Premium Elektronik Ürünlerde %25'e Varan İndirimler",
    badge: "TEKNOLOJİ HAFTASI",
    category: "Elektronik",
    buttonText: "Elektronikleri İncele",
    gradient: "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)",
    icon: "bi-laptop"
  },
  {
    id: 2,
    title: "Tarzınızı Yeniden Keşfedin",
    subtitle: "Sezonun En Trend Giyim Ürünleri ve Kombin Seçenekleri",
    badge: "YAZ SEZONU",
    category: "Giyim",
    buttonText: "Yeni Sezonu Keşfet",
    gradient: "linear-gradient(135deg, #ed4264 0%, #ffedbc 100%)",
    icon: "bi-sunglasses",
    darkText: true
  },
  {
    id: 3,
    title: "Zihnini Besle, Ruhunu Dinlendir",
    subtitle: "En Çok Satan Kitaplar ve Kişisel Gelişim Eserlerinde Fırsatlar",
    badge: "OKUMA ŞENLİĞİ",
    category: "Kitap",
    buttonText: "Kitaplığa Göz At",
    gradient: "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)",
    icon: "bi-book-half"
  }
];

export default function Header({ onSelectCategory }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const slide = SLIDES[currentSlide];

  return (
    <header className="container my-4">
      <div 
        className="hero-banner p-5 rounded-4 text-white position-relative overflow-hidden transition-all duration-500"
        style={{ 
          background: slide.gradient, 
          transition: 'background 0.5s ease',
          minHeight: '320px',
          color: slide.darkText ? '#212529' : '#ffffff'
        }}
      >
        {/* Background glowing circle relative to dark/light design */}
        <div 
          className="position-absolute rounded-circle"
          style={{
            width: '300px',
            height: '300px',
            background: 'rgba(255,255,255,0.1)',
            top: '-50px',
            right: '-50px',
            filter: 'blur(30px)',
            pointerEvents: 'none'
          }}
        ></div>

        <div className="row align-items-center h-100 position-relative z-3">
          <div className="col-lg-8 py-3">
            <span 
              className={`badge mb-3 px-3 py-2 fs-7 fw-semibold rounded-pill ${
                slide.darkText ? 'bg-dark text-white' : 'bg-white text-dark'
              }`}
            >
              {slide.badge}
            </span>
            <h1 className="display-4 fw-bold mb-3 animate__animated animate__fadeInDown">
              {slide.title}
            </h1>
            <p className="lead mb-4 animate__animated animate__fadeInUp">
              {slide.subtitle}
            </p>
            <button 
              className={`btn btn-lg rounded-pill px-4 py-2 fw-semibold btn-hover-scale ${
                slide.darkText ? 'btn-dark' : 'btn-light'
              }`}
              onClick={() => onSelectCategory(slide.category)}
            >
              <i className={`bi ${slide.icon} me-2`}></i>
              {slide.buttonText}
            </button>
          </div>
          <div className="col-lg-4 text-center d-none d-lg-block">
            <i 
              className={`bi ${slide.icon} text-white-50`} 
              style={{ 
                fontSize: '12rem', 
                opacity: 0.15,
                color: slide.darkText ? '#212529' : '#ffffff' 
              }}
            ></i>
          </div>
        </div>

        {/* Carousel indicators */}
        <div className="position-absolute bottom-0 start-50 translate-middle-x mb-4 d-flex gap-2">
          {SLIDES.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className="border-0 rounded-circle"
              style={{
                width: '12px',
                height: '12px',
                backgroundColor: index === currentSlide 
                  ? (slide.darkText ? '#212529' : '#ffffff') 
                  : (slide.darkText ? 'rgba(0,0,0,0.2)' : 'rgba(255,255,255,0.4)'),
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              aria-label={`Slayt ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </header>
  );
}
