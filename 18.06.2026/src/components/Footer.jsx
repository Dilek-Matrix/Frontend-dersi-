import React, { useState } from 'react';

export default function Footer({ onViewChange }) {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      alert("Bültene başarıyla abone oldunuz! Güncel kampanya bilgileri e-postanıza gönderilecektir.");
      setEmail('');
    }
  };

  return (
    <footer className="bg-dark text-light pt-5 pb-4 mt-auto">
      <div className="container">
        <div className="row g-4 mb-4">
          
          {/* Brand Info */}
          <div className="col-12 col-lg-4">
            <h5 className="fw-bold text-primary mb-3">
              <i className="bi bi-lightning-charge-fill text-warning me-2"></i>
              GigaMarket
            </h5>
            <p className="text-muted small">
              GigaMarket, güvenli ve hızlı alışverişin adresidir. Binlerce kaliteli ürün, uygun fiyatlar ve koşulsuz iade güvencesiyle sadece bir tık uzağınızda.
            </p>
            <div className="d-flex gap-3 fs-5 mt-3">
              <a href="#" onClick={(e) => e.preventDefault()} className="text-muted hover-text-primary transition-all"><i className="bi bi-facebook"></i></a>
              <a href="#" onClick={(e) => e.preventDefault()} className="text-muted hover-text-primary transition-all"><i className="bi bi-instagram"></i></a>
              <a href="#" onClick={(e) => e.preventDefault()} className="text-muted hover-text-primary transition-all"><i className="bi bi-twitter-x"></i></a>
              <a href="#" onClick={(e) => e.preventDefault()} className="text-muted hover-text-primary transition-all"><i className="bi bi-linkedin"></i></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-6 col-lg-2">
            <h6 className="fw-bold mb-3 text-uppercase text-white small">Kurumsal</h6>
            <ul className="list-unstyled d-flex flex-column gap-2 small">
              <li>
                <a 
                  href="#" 
                  onClick={(e) => { e.preventDefault(); onViewChange('about'); }}
                  className="text-muted text-decoration-none hover-text-primary"
                >
                  Hakkımızda
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  onClick={(e) => { e.preventDefault(); onViewChange('help'); }}
                  className="text-muted text-decoration-none hover-text-primary"
                >
                  Destek & FAQ
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => e.preventDefault()} className="text-muted text-decoration-none hover-text-primary">Kariyer</a>
              </li>
              <li>
                <a href="#" onClick={(e) => e.preventDefault()} className="text-muted text-decoration-none hover-text-primary">İletişim</a>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="col-6 col-lg-2">
            <h6 className="fw-bold mb-3 text-uppercase text-white small">Alışveriş Hizmeti</h6>
            <ul className="list-unstyled d-flex flex-column gap-2 small">
              <li>
                <a 
                  href="#" 
                  onClick={(e) => { e.preventDefault(); onViewChange('tracking'); }}
                  className="text-muted text-decoration-none hover-text-primary"
                >
                  Sipariş Takibi
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  onClick={(e) => { e.preventDefault(); onViewChange('returns'); }}
                  className="text-muted text-decoration-none hover-text-primary"
                >
                  İade ve Geri Ödeme
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => e.preventDefault()} className="text-muted text-decoration-none hover-text-primary">Kargo Bilgileri</a>
              </li>
              <li>
                <a href="#" onClick={(e) => e.preventDefault()} className="text-muted text-decoration-none hover-text-primary">Güvenlik Politikası</a>
              </li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div className="col-12 col-lg-4">
            <h6 className="fw-bold mb-3 text-uppercase text-white small">E-Bültene Abone Olun</h6>
            <p className="text-muted small mb-3">En yeni ürünler, indirimler ve fırsatlardan ilk siz haberdar olmak için e-bültene kaydolun.</p>
            <form onSubmit={handleSubscribe}>
              <div className="input-group input-group-sm mb-3">
                <input 
                  type="email" 
                  className="form-control bg-secondary text-white border-0 py-2 ps-3" 
                  placeholder="E-posta adresiniz..." 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  style={{ borderRadius: '20px 0 0 20px' }}
                />
                <button 
                  className="btn btn-primary px-4 fw-bold" 
                  type="submit"
                  style={{ borderRadius: '0 20px 20px 0' }}
                >
                  Kaydol
                </button>
              </div>
            </form>
          </div>

        </div>

        <hr className="text-muted my-4" />

        {/* Bottom copyright and payment icons */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
          <p className="mb-0 text-muted small">
            &copy; 2026 GigaMarket. Tüm Hakları Saklıdır. Designed with Bootstrap 5.
          </p>
          <div className="d-flex gap-2 fs-4 text-muted">
            <i className="bi bi-credit-card-2-front" title="Kredi Kartı"></i>
            <i className="bi bi-wallet2" title="Dijital Cüzdan"></i>
            <i className="bi bi-shield-lock" title="Güvenli Ödeme"></i>
          </div>
        </div>

      </div>
    </footer>
  );
}
