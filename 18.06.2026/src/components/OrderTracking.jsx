import React, { useState } from 'react';
import { ORDER_STATUSES } from '../data/products';

export default function OrderTracking() {
  const [orderIdInput, setOrderIdInput] = useState('');
  const [trackedOrder, setTrackedOrder] = useState(null);
  const [searched, setSearched] = useState(false);

  const handleTrack = (e) => {
    e.preventDefault();
    const id = parseInt(orderIdInput.trim());
    if (ORDER_STATUSES[id]) {
      setTrackedOrder(ORDER_STATUSES[id]);
    } else {
      setTrackedOrder(null);
    }
    setSearched(true);
  };

  // Determine active step index based on status name
  const getStepIndex = (status) => {
    switch (status) {
      case 'Hazırlanıyor': return 1;
      case 'Kargoya Verildi': return 2;
      case 'Teslim Edildi': return 3;
      default: return 0;
    }
  };

  // Steps definition
  const steps = [
    { label: "Sipariş Alındı", icon: "bi-check-circle-fill" },
    { label: "Hazırlanıyor", icon: "bi-gear-fill" },
    { label: "Kargoya Verildi", icon: "bi-truck" },
    { label: "Teslim Edildi", icon: "bi-house-check-fill" }
  ];

  return (
    <div className="container my-5 page-fade-in" style={{ maxWidth: '750px' }}>
      <div className="card shadow border-0 p-5 rounded-4 bg-white">
        <h3 className="fw-bold mb-3 text-center">
          <i className="bi bi-box-seam-fill text-primary me-2"></i>
          Sipariş Takip Sistemi
        </h3>
        <p className="text-muted text-center mb-5">
          Siparişinizin durumunu öğrenmek için 4 haneli sipariş numaranızı girin.
        </p>

        {/* Search Input */}
        <form onSubmit={handleTrack} className="mb-5">
          <div className="input-group input-group-lg shadow-sm rounded-pill overflow-hidden">
            <span className="input-group-text bg-light border-0 ps-4">
              <i className="bi bi-hash text-muted"></i>
            </span>
            <input 
              type="text" 
              className="form-control bg-light border-0" 
              placeholder="Sipariş Numarası (Örn: 1001, 1002, 1003)"
              value={orderIdInput}
              onChange={(e) => setOrderIdInput(e.target.value)}
              required
            />
            <button className="btn btn-primary px-5 fw-bold" type="submit">
              Sorgula
            </button>
          </div>
        </form>

        {/* Tracking Details Results */}
        {searched && (
          <div className="animate__animated animate__fadeIn">
            {trackedOrder ? (
              <div>
                <hr className="text-black-50 my-4" />
                
                {/* Meta Summary */}
                <div className="row g-3 justify-content-between mb-5 bg-light p-4 rounded-3">
                  <div className="col-6 col-md-3">
                    <span className="text-muted small d-block">Sipariş No</span>
                    <strong className="text-dark">#{trackedOrder.id}</strong>
                  </div>
                  <div className="col-6 col-md-3">
                    <span className="text-muted small d-block">Tarih</span>
                    <strong className="text-dark">{trackedOrder.date}</strong>
                  </div>
                  <div className="col-6 col-md-3">
                    <span className="text-muted small d-block">Kargo Firması</span>
                    <strong className="text-dark">{trackedOrder.carrier}</strong>
                  </div>
                  <div className="col-6 col-md-3">
                    <span className="text-muted small d-block">Takip Kodu</span>
                    <strong className="text-dark">{trackedOrder.trackingNo}</strong>
                  </div>
                </div>

                {/* Progress bar line */}
                <div className="position-relative mb-5 py-4">
                  <div 
                    className="position-absolute top-50 start-0 translate-middle-y w-100 bg-secondary-subtle" 
                    style={{ height: '4px', zIndex: 1 }}
                  ></div>
                  <div 
                    className="position-absolute top-50 start-0 translate-middle-y bg-primary" 
                    style={{ 
                      height: '4px', 
                      width: `${(getStepIndex(trackedOrder.status) / (steps.length - 1)) * 100}%`,
                      zIndex: 2,
                      transition: 'width 0.5s ease-out'
                    }}
                  ></div>

                  {/* Step Nodes */}
                  <div className="d-flex justify-content-between position-relative" style={{ zIndex: 3 }}>
                    {steps.map((step, idx) => {
                      const isActive = idx <= getStepIndex(trackedOrder.status);
                      return (
                        <div key={idx} className="text-center" style={{ width: '100px', marginLeft: idx === 0 ? '-20px' : '0px', marginRight: idx === steps.length - 1 ? '-20px' : '0px' }}>
                          <div 
                            className={`rounded-circle d-flex align-items-center justify-content-center mx-auto mb-2 shadow-sm ${
                              isActive ? 'bg-primary text-white' : 'bg-white text-muted border border-light-subtle'
                            }`}
                            style={{ width: '45px', height: '45px', transition: 'all 0.3s ease' }}
                          >
                            <i className={`bi ${step.icon} fs-5`}></i>
                          </div>
                          <span className={`small fw-bold d-block ${isActive ? 'text-primary' : 'text-muted'}`}>
                            {step.label}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Box details */}
                <div className="alert alert-info rounded-3 d-flex align-items-center gap-3">
                  <i className="bi bi-info-circle-fill fs-4"></i>
                  <div>
                    <h6 className="fw-bold mb-1">Durum Bilgisi: {trackedOrder.status}</h6>
                    <small className="text-muted">
                      Siparişinizdeki {trackedOrder.items} adet ürün için toplam {new Intl.NumberFormat('tr-TR', { style: 'currency', currency: 'TRY' }).format(trackedOrder.total)} ödeme yapılmıştır.
                    </small>
                  </div>
                </div>

              </div>
            ) : (
              <div className="text-center py-4 bg-danger-subtle text-danger rounded-3">
                <i className="bi bi-exclamation-triangle-fill fs-3 mb-2 d-block"></i>
                <h6 className="fw-bold">Sipariş bulunamadı!</h6>
                <p className="mb-0 small">Lütfen sipariş numaranızı kontrol edip tekrar deneyin. (Örn: 1001, 1002, 1003)</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
