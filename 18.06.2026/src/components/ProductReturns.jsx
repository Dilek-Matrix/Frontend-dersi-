import React, { useState } from 'react';

export default function ProductReturns() {
  const [orderId, setOrderId] = useState('');
  const [fullName, setFullName] = useState('');
  const [reason, setReason] = useState('Beden/Ölçü Uymadı');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!orderId || !fullName) {
      alert("Lütfen Sipariş Numarasını ve Adınızı girin.");
      return;
    }
    // Simulate return submission
    setSubmitted(true);
    alert("İade talebiniz başarıyla alınmıştır. İnceleme sonrası e-posta ile bilgilendirme yapılacaktır.");
  };

  const handleReset = () => {
    setOrderId('');
    setFullName('');
    setReason('Beden/Ölçü Uymadı');
    setNotes('');
    setSubmitted(false);
  };

  return (
    <div className="container my-5 page-fade-in" style={{ maxWidth: '850px' }}>
      <div className="row g-4">
        
        {/* Left Side: Return Policy */}
        <div className="col-12 col-md-5">
          <div className="card shadow-sm border-0 p-4 rounded-4 bg-primary text-white h-100">
            <h5 className="fw-bold mb-4">
              <i className="bi bi-shield-check me-2"></i>
              Kolay İade Koşulları
            </h5>
            
            <ul className="list-unstyled d-flex flex-column gap-4 mb-0 small">
              <li className="d-flex align-items-start gap-3">
                <i className="bi bi-clock-history fs-5 mt-1"></i>
                <div>
                  <h6 className="fw-bold mb-1">14 Gün İade Hakkı</h6>
                  <p className="mb-0 text-white-50">Teslim aldığınız tarihten itibaren 14 gün içinde ücretsiz iade edebilirsiniz.</p>
                </div>
              </li>
              <li className="d-flex align-items-start gap-3">
                <i className="bi bi-box-seam fs-5 mt-1"></i>
                <div>
                  <h6 className="fw-bold mb-1">Orijinal Kutu ve Ambalaj</h6>
                  <p className="mb-0 text-white-50">İadelerin orijinal kutusunda, ambalajı zarar görmemiş ve tekrar satılabilir durumda olması gerekir.</p>
                </div>
              </li>
              <li className="d-flex align-items-start gap-3">
                <i className="bi bi-cash-stack fs-5 mt-1"></i>
                <div>
                  <h6 className="fw-bold mb-1">Anında Para İadesi</h6>
                  <p className="mb-0 text-white-50">İade onaylandıktan sonra ödemeniz 3-5 iş günü içinde kartınıza iade edilir.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Side: Return Form */}
        <div className="col-12 col-md-7">
          <div className="card shadow-sm border-0 p-4 rounded-4 bg-white h-100">
            <h5 className="fw-bold mb-4">
              <i className="bi bi-arrow-left-right text-primary me-2"></i>
              İade Talep Formu
            </h5>

            {submitted ? (
              <div className="text-center py-5">
                <i className="bi bi-patch-check-fill text-success" style={{ fontSize: '4rem' }}></i>
                <h5 className="fw-bold mt-3">İade Talebi Alındı</h5>
                <p className="text-muted small mb-4">
                  İade talep kaydınız #{Math.floor(100000 + Math.random() * 900000)} numara ile oluşturulmuştur.
                </p>
                <button className="btn btn-outline-primary rounded-pill px-4" onClick={handleReset}>
                  Yeni Talep Oluştur
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="d-flex flex-column gap-3">
                  <div>
                    <label htmlFor="returnOrderId" className="form-label small fw-semibold text-muted">Sipariş Numarası *</label>
                    <input 
                      type="text" 
                      id="returnOrderId"
                      className="form-control bg-light border-0 py-2 rounded-3" 
                      placeholder="Örn: 1001"
                      value={orderId}
                      onChange={(e) => setOrderId(e.target.value)}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="returnName" className="form-label small fw-semibold text-muted">Adınız Soyadınız *</label>
                    <input 
                      type="text" 
                      id="returnName"
                      className="form-control bg-light border-0 py-2 rounded-3" 
                      placeholder="Ahmet Yılmaz"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="returnReason" className="form-label small fw-semibold text-muted">İade Nedeni *</label>
                    <select 
                      id="returnReason"
                      className="form-select bg-light border-0 py-2 rounded-3 text-dark" 
                      value={reason}
                      onChange={(e) => setReason(e.target.value)}
                      style={{ cursor: 'pointer' }}
                    >
                      <option value="Beden/Ölçü Uymadı">Beden/Ölçü Uymadı</option>
                      <option value="Beklediğim Gibi Değil">Beklediğim Gibi Değil</option>
                      <option value="Hasarlı/Kusurlu Ürün">Hasarlı/Kusurlu Ürün (Kargo veya Üretim Hatalı)</option>
                      <option value="Yanlış Ürün Gönderildi">Yanlış Ürün Gönderildi</option>
                      <option value="Diğer">Diğer (Lütfen açıklama girin)</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="returnNotes" className="form-label small fw-semibold text-muted">Açıklama</label>
                    <textarea 
                      id="returnNotes"
                      rows="3"
                      className="form-control bg-light border-0 rounded-3" 
                      placeholder="Talebinize ilişkin detayları ekleyin..."
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary w-100 rounded-pill btn-hover-scale fw-bold py-2 mt-3">
                    İade Talebi Gönder
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
