import React, { useState } from 'react';

export default function ProductDetail({ product, onAddToCart, onBack }) {
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');

  const { title, price, category, image, rating, description, features } = product;

  // Format currency
  const formatPrice = (val) => {
    return new Intl.NumberFormat('tr-TR', { style: 'currency', currency: 'TRY' }).format(val);
  };

  const renderStars = (rate) => {
    const stars = [];
    const fullStars = Math.floor(rate);
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <i key={i} className={`bi ${i <= fullStars ? 'bi-star-fill text-warning' : 'bi-star text-muted'} me-1`}></i>
      );
    }
    return stars;
  };

  const handleAddToCart = () => {
    onAddToCart(product, quantity);
    // Visual alert feedback
    alert(`${quantity} adet ${title} sepete eklendi!`);
  };

  // Mock Reviews
  const mockReviews = [
    { id: 1, author: "Ahmet Y.", rate: 5, date: "24.07.2026", comment: "Ürün harika, beklentilerimi fazlasıyla karşıladı. Kesinlikle tavsiye ederim." },
    { id: 2, author: "Elif K.", rate: 4, date: "15.07.2026", comment: "Kargo hızlıydı. Paketleme çok özenliydi. Ürün kalitesi güzel." },
    { id: 3, author: "Mehmet S.", rate: 5, date: "02.07.2026", comment: "Çok kullanışlı ve kaliteli. Fiyat/performans ürünü diyebilirim." }
  ];

  return (
    <div className="container my-5 page-fade-in">
      {/* Back button */}
      <button className="btn btn-outline-secondary rounded-pill mb-4 btn-hover-scale" onClick={onBack}>
        <i className="bi bi-arrow-left me-2"></i>
        Alışverişe Geri Dön
      </button>

      <div className="row g-5">
        {/* Left Column: Image */}
        <div className="col-12 col-lg-6">
          <div className="product-detail-img-container">
            <img 
              src={image} 
              alt={title} 
              className="product-detail-img img-fluid"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=500&auto=format&fit=crop&q=60";
              }}
            />
          </div>
        </div>

        {/* Right Column: Actions and Basics */}
        <div className="col-12 col-lg-6 d-flex flex-column">
          <div className="mb-3">
            <span className="badge bg-primary text-uppercase px-3 py-2 rounded-pill fs-7">{category}</span>
          </div>
          <h2 className="fw-bold mb-3">{title}</h2>
          
          <div className="d-flex align-items-center mb-4">
            <div className="rating-stars me-2">
              {renderStars(rating.rate)}
            </div>
            <span className="fw-bold text-dark me-2">{rating.rate}</span>
            <span className="text-muted">({rating.count} Değerlendirme)</span>
          </div>

          <h3 className="fw-bold text-primary mb-4 fs-2">{formatPrice(price)}</h3>

          <p className="text-muted mb-4">{description}</p>

          <hr className="text-black-50 my-4" />

          {/* Add to Cart Controls */}
          <div className="row g-3 align-items-center">
            <div className="col-auto">
              <label className="fw-bold text-muted me-2" htmlFor="qtySelect">Adet:</label>
              <div className="input-group" style={{ width: '130px' }}>
                <button 
                  className="btn btn-outline-secondary" 
                  type="button" 
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                >
                  <i className="bi bi-dash"></i>
                </button>
                <input 
                  type="number" 
                  className="form-control text-center bg-white" 
                  id="qtySelect"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  min="1"
                />
                <button 
                  className="btn btn-outline-secondary" 
                  type="button" 
                  onClick={() => setQuantity(q => q + 1)}
                >
                  <i className="bi bi-plus"></i>
                </button>
              </div>
            </div>

            <div className="col">
              <button 
                className="btn btn-primary btn-lg w-100 rounded-pill btn-hover-scale fw-bold d-flex align-items-center justify-content-center gap-2"
                onClick={handleAddToCart}
              >
                <i className="bi bi-cart-plus-fill fs-5"></i>
                Sepete Ekle
              </button>
            </div>
          </div>

          {/* Shipping guarantee */}
          <div className="mt-4 p-3 bg-light rounded-3 d-flex align-items-center gap-3">
            <i className="bi bi-truck text-primary fs-3"></i>
            <div>
              <p className="mb-0 fw-semibold">Hızlı & Güvenli Teslimat</p>
              <small className="text-muted">150 TL üzeri siparişlerde kargo ücretsiz!</small>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="mt-5">
        <ul className="nav nav-tabs border-bottom border-light-subtle" role="tablist">
          <li className="nav-item" role="presentation">
            <button 
              className={`nav-link py-3 px-4 border-0 fw-bold ${activeTab === 'description' ? 'active border-bottom border-primary text-primary' : 'text-secondary'}`} 
              onClick={() => setActiveTab('description')}
            >
              Ürün Açıklaması
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button 
              className={`nav-link py-3 px-4 border-0 fw-bold ${activeTab === 'features' ? 'active border-bottom border-primary text-primary' : 'text-secondary'}`} 
              onClick={() => setActiveTab('features')}
            >
              Özellikler
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button 
              className={`nav-link py-3 px-4 border-0 fw-bold ${activeTab === 'reviews' ? 'active border-bottom border-primary text-primary' : 'text-secondary'}`} 
              onClick={() => setActiveTab('reviews')}
            >
              Kullanıcı Yorumları ({mockReviews.length})
            </button>
          </li>
        </ul>

        <div className="tab-content bg-white p-4 rounded-bottom shadow-sm border border-top-0 border-light-subtle">
          {activeTab === 'description' && (
            <div className="tab-pane fade show active">
              <p className="text-muted leading-relaxed">{description}</p>
            </div>
          )}

          {activeTab === 'features' && (
            <div className="tab-pane fade show active">
              {features && features.length > 0 ? (
                <ul className="list-group list-group-flush">
                  {features.map((feature, idx) => (
                    <li key={idx} className="list-group-item px-0 py-3 border-light-subtle d-flex align-items-center gap-2">
                      <i className="bi bi-patch-check-fill text-success"></i>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-muted">Bu ürün için ek teknik özellik tanımlanmamış.</p>
              )}
            </div>
          )}

          {activeTab === 'reviews' && (
            <div className="tab-pane fade show active">
              <div className="d-flex flex-column gap-4">
                {mockReviews.map((review) => (
                  <div key={review.id} className="pb-4 border-bottom border-light-subtle last-border-0">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span className="fw-bold">{review.author}</span>
                      <span className="small text-muted">{review.date}</span>
                    </div>
                    <div className="rating-stars mb-2">
                      {renderStars(review.rate)}
                    </div>
                    <p className="text-muted mb-0">{review.comment}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
