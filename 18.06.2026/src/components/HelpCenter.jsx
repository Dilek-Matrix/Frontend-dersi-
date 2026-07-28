import React, { useState } from 'react';

export default function HelpCenter() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [ticketSent, setTicketSent] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  const handleContactSubmit = (e) => {
    e.preventDefault();
    if (!email || !message) {
      alert("Lütfen gerekli alanları doldurun.");
      return;
    }
    setTicketSent(true);
    alert("Destek talebiniz başarıyla iletildi. En kısa sürede geri dönüş yapacağız.");
  };

  const faqs = [
    {
      id: 1,
      q: "Siparişimi nasıl iptal edebilirim?",
      a: "Siparişiniz kargoya verilmeden önce 'Siparişlerim' sayfasından veya müşteri hizmetlerimizle iletişime geçerek kolayca iptal edebilirsiniz. Kargolanan siparişlerde ise kapıda iade veya teslim aldıktan sonra iade talebi oluşturabilirsiniz."
    },
    {
      id: 2,
      q: "Hangi ödeme yöntemlerini kabul ediyorsunuz?",
      a: "Tüm bankaların kredi kartlarını, banka kartlarını, havale/EFT seçeneklerini ve BKM Express gibi popüler dijital cüzdanları kabul etmekteyiz."
    },
    {
      id: 3,
      q: "Kargo ücreti ne kadar?",
      a: "Mağazamızda 150 TL ve üzeri alışverişlerinizde kargo tamamen ücretsizdir! 150 TL altındaki siparişleriniz için ise sabit kargo ücreti 29,99 TL'dir."
    },
    {
      id: 4,
      q: "İade gönderilerinde kargo ücreti kime ait?",
      a: "Anlaşmalı kargo firmalarımız (Yurtiçi Kargo, MNG Kargo, Aras Kargo) ile gönderilen tüm iadelerde kargo ücreti GigaMarket tarafından karşılanmaktadır. Müşterilerimizden kargo ücreti talep edilmez."
    }
  ];

  return (
    <div className="container my-5 page-fade-in" style={{ maxWidth: '900px' }}>
      <h3 className="fw-bold mb-4 text-center">
        <i className="bi bi-question-circle-fill text-primary me-2"></i>
        Yardım & Destek Merkezi
      </h3>
      <p className="text-muted text-center mb-5">
        Merak ettiğiniz soruların cevaplarını bulabilir veya bize doğrudan destek talebi iletebilirsiniz.
      </p>

      <div className="row g-5">
        
        {/* Left Side: FAQs */}
        <div className="col-12 col-lg-7">
          <h5 className="fw-bold mb-4">Sıkça Sorulan Sorular</h5>
          
          <div className="accordion d-flex flex-column gap-3">
            {faqs.map((faq) => {
              const isOpen = activeFaq === faq.id;
              return (
                <div key={faq.id} className="accordion-item border border-light-subtle rounded-3 overflow-hidden shadow-sm">
                  <h2 className="accordion-header">
                    <button 
                      className={`accordion-button border-0 py-3 fw-bold d-flex justify-content-between align-items-center w-100 text-start ${
                        isOpen ? 'bg-primary-subtle text-primary' : 'bg-white text-dark'
                      }`}
                      type="button"
                      onClick={() => setActiveFaq(isOpen ? null : faq.id)}
                      style={{ outline: 'none', boxShadow: 'none' }}
                    >
                      <span>{faq.q}</span>
                      <i className={`bi ${isOpen ? 'bi-chevron-up' : 'bi-chevron-down'} ms-2`}></i>
                    </button>
                  </h2>
                  {isOpen && (
                    <div className="accordion-collapse collapse show">
                      <div className="accordion-body bg-light-subtle p-3 text-muted border-top border-light-subtle">
                        {faq.a}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="col-12 col-lg-5">
          <div className="card shadow-sm border-0 p-4 rounded-4 bg-white">
            <h5 className="fw-bold mb-4">Destek Ekibine Yazın</h5>
            
            {ticketSent ? (
              <div className="text-center py-4">
                <i className="bi bi-envelope-check-fill text-success fs-2 mb-2 d-block"></i>
                <h6 className="fw-bold">Mesajınız Gönderildi</h6>
                <p className="text-muted small mb-3">Talebiniz kaydedilmiştir. Destek ekibimiz 24 saat içinde yanıt verecektir.</p>
                <button className="btn btn-outline-primary rounded-pill btn-sm" onClick={() => setTicketSent(false)}>
                  Yeni Mesaj Gönder
                </button>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit}>
                <div className="d-flex flex-column gap-3">
                  <div>
                    <label htmlFor="supportEmail" className="form-label small fw-semibold text-muted">E-posta Adresiniz *</label>
                    <input 
                      type="email" 
                      id="supportEmail"
                      className="form-control bg-light border-0 py-2 rounded-3" 
                      placeholder="mail@ornek.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="supportMsg" className="form-label small fw-semibold text-muted">Mesajınız *</label>
                    <textarea 
                      id="supportMsg"
                      rows="4"
                      className="form-control bg-light border-0 rounded-3" 
                      placeholder="Sorunuzu veya talebinizi buraya yazın..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary w-100 rounded-pill btn-hover-scale fw-bold py-2 mt-2">
                    Mesajı Gönder
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
