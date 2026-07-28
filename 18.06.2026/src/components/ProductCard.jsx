import React from 'react';

export default function ProductCard({ product, onAddToCart, onViewDetail }) {
  const { title, price, category, image, rating } = product;

  // Generate stars based on rating
  const renderStars = (rate) => {
    const stars = [];
    const fullStars = Math.floor(rate);
    const hasHalf = rate % 1 >= 0.5;

    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<i key={i} className="bi bi-star-fill text-warning me-1"></i>);
      } else if (i === fullStars + 1 && hasHalf) {
        stars.push(<i key={i} className="bi bi-star-half text-warning me-1"></i>);
      } else {
        stars.push(<i key={i} className="bi bi-star text-muted me-1"></i>);
      }
    }
    return stars;
  };

  // Format currency to Turkish style (e.g. 1.234,56 TL)
  const formatPrice = (val) => {
    return new Intl.NumberFormat('tr-TR', { style: 'currency', currency: 'TRY' }).format(val);
  };

  return (
    <div className="card product-card">
      {/* Product Image Container */}
      <div className="product-image-container">
        <span className="product-category-badge">{category}</span>
        <img 
          src={image} 
          alt={title} 
          className="product-image p-3" 
          loading="lazy"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=500&auto=format&fit=crop&q=60";
          }}
        />
      </div>

      {/* Card Body */}
      <div className="card-body">
        {/* Title */}
        <h5 className="product-title" title={title}>
          {title}
        </h5>

        {/* Rating */}
        <div className="d-flex align-items-center mb-3">
          <div className="rating-stars me-2">
            {renderStars(rating.rate)}
          </div>
          <span className="small text-muted">({rating.count})</span>
        </div>

        {/* Price & Actions */}
        <div className="mt-auto">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <span className="product-price">{formatPrice(price)}</span>
          </div>

          <div className="d-grid gap-2">
            <button 
              className="btn btn-outline-primary btn-sm rounded-pill btn-hover-scale fw-semibold"
              onClick={() => onViewDetail(product)}
            >
              <i className="bi bi-eye me-1"></i>
              Detayları Gör
            </button>
            <button 
              className="btn btn-primary btn-sm rounded-pill btn-hover-scale fw-semibold"
              onClick={() => onAddToCart(product)}
            >
              <i className="bi bi-cart-plus me-1"></i>
              Sepete Ekle
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
