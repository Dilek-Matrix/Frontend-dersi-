import React from 'react';

export default function Sidebar({
  categories,
  selectedCategory,
  onSelectCategory,
  priceRange,
  onPriceRangeChange,
  minRating,
  onMinRatingChange,
  onResetFilters
}) {
  return (
    <div className="card shadow-sm border-0 p-4 sidebar-sticky rounded-3 bg-white">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h5 className="fw-bold mb-0">Filtrele</h5>
        <button 
          className="btn btn-link btn-sm text-decoration-none text-danger p-0"
          onClick={onResetFilters}
        >
          Sıfırla
        </button>
      </div>

      {/* Category Filter */}
      <div className="mb-4">
        <h6 className="fw-bold text-uppercase text-muted small mb-3">Kategoriler</h6>
        <div className="d-flex flex-column gap-2">
          {categories.map((category) => (
            <button
              key={category}
              className={`btn btn-sm text-start py-2 px-3 rounded-3 border-0 transition-all ${
                selectedCategory === category
                  ? 'btn-primary shadow-sm'
                  : 'btn-light hover-bg-light text-dark'
              }`}
              onClick={() => onSelectCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <hr className="text-black-50 my-3" />

      {/* Price Filter */}
      <div className="mb-4">
        <h6 className="fw-bold text-uppercase text-muted small mb-3">Fiyat Aralığı</h6>
        <div className="px-2">
          <input
            type="range"
            className="form-range"
            min="0"
            max="6000"
            step="50"
            value={priceRange[1]}
            onChange={(e) => onPriceRangeChange([priceRange[0], parseInt(e.target.value)])}
          />
          <div className="d-flex justify-content-between align-items-center mt-2 small text-muted">
            <span>{priceRange[0]} TL</span>
            <span className="fw-bold text-primary">{priceRange[1]} TL</span>
          </div>
        </div>
      </div>

      <hr className="text-black-50 my-3" />

      {/* Rating Filter */}
      <div className="mb-4">
        <h6 className="fw-bold text-uppercase text-muted small mb-3">Minimum Puan</h6>
        <div className="d-flex flex-column gap-2">
          {[4, 3, 2].map((stars) => (
            <button
              key={stars}
              onClick={() => onMinRatingChange(stars)}
              className={`btn btn-sm text-start py-2 px-3 rounded-3 border-0 d-flex align-items-center justify-content-between ${
                minRating === stars
                  ? 'btn-primary'
                  : 'btn-light text-dark'
              }`}
            >
              <span className="rating-stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <i 
                    key={i} 
                    className={`bi ${i < stars ? 'bi-star-fill text-warning' : 'bi-star text-muted'} me-1`}
                  ></i>
                ))}
              </span>
              <span className="small text-muted">& Üzeri</span>
            </button>
          ))}
          <button
            onClick={() => onMinRatingChange(0)}
            className={`btn btn-sm text-start py-2 px-3 rounded-3 border-0 ${
              minRating === 0 ? 'btn-primary' : 'btn-light text-dark'
            }`}
          >
            Tüm Puanlar
          </button>
        </div>
      </div>
    </div>
  );
}
