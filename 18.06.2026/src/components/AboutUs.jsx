import React from 'react';

export default function AboutUs() {
  const teamMembers = [
    { name: "Dilek Y.", role: "Kurucu & CEO", bio: "GigaMarket'i e-ticarete yeni bir soluk getirmek ve müşterilere en iyi deneyimi sunmak amacıyla kurdu." },
    { name: "Can D.", role: "Teknoloji Direktörü (CTO)", bio: "Web platformunun geliştirilmesi, güvenliği ve yeni teknolojilerin entegrasyonundan sorumludur." },
    { name: "Merve K.", role: "Müşteri İlişkileri Yöneticisi", bio: "Müşterilerimizin tüm sorularını yanıtlamak ve en iyi destek deneyimini sağlamak için çalışır." }
  ];

  return (
    <div className="container my-5 page-fade-in" style={{ maxWidth: '950px' }}>
      
      {/* Intro section */}
      <div className="row align-items-center mb-5 g-5">
        <div className="col-12 col-md-6">
          <h2 className="fw-bold mb-4 text-primary">GigaMarket Hikayesi</h2>
          <p className="lead text-muted">E-ticarette güven, kalite ve hızın buluştuğu nokta.</p>
          <p className="text-muted">
            2026 yılında kurulan GigaMarket, binlerce kaliteli ürünü en uygun fiyatlarla müşterilerine ulaştırmayı hedefleyen yenilikçi bir e-ticaret platformudur. Elektronikten giyime, kozmetikten kitaba kadar geniş ürün yelpazemiz ile alışverişi kolay ve keyifli hale getiriyoruz.
          </p>
          <p className="text-muted">
            Müşterilerimizin memnuniyeti bizim en büyük önceliğimizdir. Güvenli ödeme sistemlerimiz, 14 gün koşulsuz iade garantimiz ve 7/24 destek ekibimiz ile sorunsuz bir alışveriş deneyimi sunmak için sürekli çalışıyoruz.
          </p>
        </div>
        <div className="col-12 col-md-6">
          <div className="position-relative">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&auto=format&fit=crop&q=60" 
              alt="GigaMarket Ekibi" 
              className="img-fluid rounded-4 shadow"
            />
            <div className="position-absolute bottom-0 end-0 bg-primary text-white p-3 rounded-start-4 shadow d-none d-lg-block">
              <h5 className="fw-bold mb-0">5+ Yıllık Tecrübe</h5>
              <small className="text-white-50">Sektörde güvenilir hizmet</small>
            </div>
          </div>
        </div>
      </div>

      <hr className="text-black-50 my-5" />

      {/* Core Values */}
      <div className="my-5 text-center">
        <h3 className="fw-bold mb-5">Değerlerimiz</h3>
        <div className="row g-4 justify-content-center">
          <div className="col-12 col-md-4">
            <div className="p-4 bg-white rounded-4 shadow-sm border border-light-subtle h-100">
              <div className="bg-primary-subtle text-primary rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: '60px', height: '60px' }}>
                <i className="bi bi-shield-fill-check fs-3"></i>
              </div>
              <h5 className="fw-bold mb-3">Güvenli Alışveriş</h5>
              <p className="text-muted small mb-0">256-bit SSL güvenlik sertifikası ile tüm kart bilgileriniz ve işlemleriniz koruma altındadır.</p>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="p-4 bg-white rounded-4 shadow-sm border border-light-subtle h-100">
              <div className="bg-success-subtle text-success rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: '60px', height: '60px' }}>
                <i className="bi bi-truck fs-3"></i>
              </div>
              <h5 className="fw-bold mb-3">Hızlı Teslimat</h5>
              <p className="text-muted small mb-0">Verdiğiniz siparişler aynı gün kargoya hazırlanır ve en kısa sürede kapınıza kadar ulaştırılır.</p>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="p-4 bg-white rounded-4 shadow-sm border border-light-subtle h-100">
              <div className="bg-warning-subtle text-warning rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: '60px', height: '60px' }}>
                <i className="bi bi-people-fill fs-3"></i>
              </div>
              <h5 className="fw-bold mb-3">%100 Memnuniyet</h5>
              <p className="text-muted small mb-0">Satış öncesi ve sonrasında tüm soru, görüş ve talepleriniz için müşteri destek ekibimiz yanınızda.</p>
            </div>
          </div>
        </div>
      </div>

      <hr className="text-black-50 my-5" />

      {/* Team profiles */}
      <div className="my-5">
        <h3 className="fw-bold text-center mb-5">Ekibimizle Tanışın</h3>
        <div className="row g-4">
          {teamMembers.map((member, idx) => (
            <div key={idx} className="col-12 col-md-4">
              <div className="card border-0 shadow-sm text-center p-4 bg-white rounded-4 h-100">
                <div 
                  className="rounded-circle bg-secondary text-white d-flex align-items-center justify-content-center mx-auto mb-3"
                  style={{ width: '80px', height: '80px' }}
                >
                  <span className="fs-3 fw-bold">{member.name.split(' ')[0][0]}{member.name.split(' ')[1]?.[0] || ''}</span>
                </div>
                <h5 className="fw-bold mb-1">{member.name}</h5>
                <span className="text-primary small fw-semibold d-block mb-3">{member.role}</span>
                <p className="text-muted small mb-0">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
