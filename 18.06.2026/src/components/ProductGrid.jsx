import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';

export default function ProductGrid({
  products,
  searchQuery,
  selectedCategory,
  priceRange,
  minRating,
  onAddToCart,
  onViewDetail,
  onResetFilters
}) {
  const [sortBy, setSortBy] = useState('default');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Reset page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedCategory, priceRange, minRating, sortBy]);

  // 1. Filter products
  const filteredProducts = products.filter((product) => {
    // Category match
    const categoryMatch = selectedCategory === 'Tümü' || product.category === selectedCategory;

    // Search query match (title, description or category)
    const searchLower = searchQuery.toLowerCase().trim();
    const searchMatch = !searchQuery || 
      product.title.toLowerCase().includes(searchLower) ||
      product.description.toLowerCase().includes(searchLower) ||
      product.category.toLowerCase().includes(searchLower);

    // Price range match
    const priceMatch = product.price >= priceRange[0] && product.price <= priceRange[1];

    // Rating match
    const ratingMatch = product.rating.rate >= minRating;

    return categoryMatch && searchMatch && priceMatch && ratingMatch;
  });

  // 2. Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-asc') {
      return a.price - b.price;
    }
    if (sortBy === 'price-desc') {
      return b.price - a.price;
    }
    if (sortBy === 'rating-desc') {
      return b.rating.rate - a.rating.rate;
    }
    // Default (by ID or default)
    return a.id - b.id;
  });

  // 3. Paginate
  const totalItems = sortedProducts.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortedProducts.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="page-fade-in">
      {/* Header controls: Results Count and Sorting */}
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3 mb-4">
        <div>
          <h4 className="fw-bold mb-1">
            {selectedCategory === 'Tümü' ? 'Tüm Ürünler' : selectedCategory}
          </h4>
          <p className="text-muted mb-0 small">
            Toplam {totalItems} sonuç listeleniyor.
          </p>
        </div>
        
        <div className="d-flex align-items-center gap-2">
          <label className="text-nowrap small text-muted fw-semibold" htmlFor="sortSelect">Sırala:</label>
          <select 
            id="sortSelect" 
            className="form-select bg-white border border-light-subtle rounded-pill py-2 px-3 shadow-sm text-dark font-weight-medium"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            style={{ width: '220px', cursor: 'pointer' }}
          >
            <option value="default">Önerilen (Varsayılan)</option>
            <option value="price-asc">Fiyat: Düşükten Yükseğe</option>
            <option value="price-desc">Fiyat: Yüksekten Düşüğe</option>
            <option value="rating-desc">Puan: En Yüksek</option>
          </select>
        </div>
      </div>

      {/* Grid or Empty Message */}
      {currentItems.length === 0 ? (
        <div className="text-center py-5 bg-white rounded-3 shadow-sm border border-light-subtle">
          <i className="bi bi-search-heart text-muted" style={{ fontSize: '4rem' }}></i>
          <h5 className="fw-bold mt-3">Aradığınız kriterlere uygun ürün bulunamadı.</h5>
          <p className="text-muted mb-4">Filtreleri sıfırlayarak aramayı genişletebilirsiniz.</p>
          <button className="btn btn-primary rounded-pill px-4" onClick={onResetFilters}>
            Filtreleri Sıfırla
          </button>
        </div>
      ) : (
        <>
          <div className="row g-4">
            {currentItems.map((product) => (
              <div className="col-12 col-md-6 col-lg-4" key={product.id}>
                <ProductCard 
                  product={product} 
                  onAddToCart={onAddToCart} 
                  onViewDetail={onViewDetail}
                />
              </div>
            ))}
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <nav className="d-flex justify-content-center mt-5">
              <ul className="pagination shadow-sm rounded-pill overflow-hidden border-0">
                <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                  <button 
                    className="page-link py-2 px-3 border-0" 
                    onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                  >
                    <i className="bi bi-chevron-left"></i>
                  </button>
                </li>
                
                {Array.from({ length: totalPages }).map((_, idx) => (
                  <li key={idx} className={`page-item ${currentPage === idx + 1 ? 'active' : ''}`}>
                    <button 
                      className="page-link py-2 px-3 border-0" 
                      onClick={() => setCurrentPage(idx + 1)}
                    >
                      {idx + 1}
                    </button>
                  </li>
                ))}

                <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                  <button 
                    className="page-link py-2 px-3 border-0" 
                    onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
                  >
                    <i className="bi bi-chevron-right"></i>
                  </button>
                </li>
              </ul>
            </nav>
          )}
        </>
      )}
    </div>
  );
}
