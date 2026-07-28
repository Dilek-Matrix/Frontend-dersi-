import React from 'react';

export default function Navbar({
  cartCount,
  onOpenCart,
  activeView,
  onViewChange,
  searchQuery,
  onSearchChange,
  currentUser,
  onOpenLogin,
  onLogout
}) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow-sm py-3">
      <div className="container">
        {/* Brand Logo */}
        <a 
          className="navbar-brand d-flex align-items-center fw-bold fs-3 text-primary" 
          href="#"
          onClick={(e) => { e.preventDefault(); onViewChange('home'); }}
        >
          <i className="bi bi-lightning-charge-fill me-2 text-warning"></i>
          GigaMarket
        </a>

        {/* Responsive Toggle */}
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarSupportedContent" 
          aria-controls="navbarSupportedContent" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible Content */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {/* Main Navigation Links */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
            <li className="nav-item">
              <a 
                className={`nav-link px-3 ${activeView === 'home' ? 'text-primary fw-bold' : 'text-light-50'}`} 
                href="#"
                onClick={(e) => { e.preventDefault(); onViewChange('home'); }}
              >
                Ana Sayfa
              </a>
            </li>
            <li className="nav-item">
              <a 
                className={`nav-link px-3 ${activeView === 'about' ? 'text-primary fw-bold' : 'text-light-50'}`} 
                href="#"
                onClick={(e) => { e.preventDefault(); onViewChange('about'); }}
              >
                Hakkımızda
              </a>
            </li>
            <li className="nav-item">
              <a 
                className={`nav-link px-3 ${activeView === 'help' ? 'text-primary fw-bold' : 'text-light-50'}`} 
                href="#"
                onClick={(e) => { e.preventDefault(); onViewChange('help'); }}
              >
                Yardım Merkezi
              </a>
            </li>
            <li className="nav-item">
              <a 
                className={`nav-link px-3 ${activeView === 'tracking' ? 'text-primary fw-bold' : 'text-light-50'}`} 
                href="#"
                onClick={(e) => { e.preventDefault(); onViewChange('tracking'); }}
              >
                Sipariş Takibi
              </a>
            </li>
            <li className="nav-item">
              <a 
                className={`nav-link px-3 ${activeView === 'returns' ? 'text-primary fw-bold' : 'text-light-50'}`} 
                href="#"
                onClick={(e) => { e.preventDefault(); onViewChange('returns'); }}
              >
                İade Talebi
              </a>
            </li>
          </ul>

          {/* Search Bar - only show when view is home or products related */}
          {activeView === 'home' && (
            <form className="d-flex mx-lg-4 my-2 my-lg-0 flex-grow-1" style={{ maxWidth: '350px' }} onSubmit={(e) => e.preventDefault()}>
              <div className="input-group">
                <input 
                  type="text" 
                  className="form-control bg-secondary text-white border-0" 
                  placeholder="Ürün veya kategori ara..." 
                  value={searchQuery}
                  onChange={(e) => onSearchChange(e.target.value)}
                  style={{ borderRadius: '20px 0 0 20px' }}
                />
                <button 
                  className="btn btn-primary border-0" 
                  type="button"
                  style={{ borderRadius: '0 20px 20px 0' }}
                >
                  <i className="bi bi-search"></i>
                </button>
              </div>
            </form>
          )}

          {/* Right Side Buttons: Add Product, Cart, User Profile */}
          <div className="d-flex align-items-center gap-3 ms-auto mt-2 mt-lg-0">
            {/* Add Product Button */}
            <button 
              className={`btn btn-outline-warning rounded-pill d-flex align-items-center gap-2 ${activeView === 'addProduct' ? 'active' : ''}`}
              onClick={() => onViewChange('addProduct')}
            >
              <i className="bi bi-plus-circle"></i>
              <span className="d-none d-xl-inline">Yeni Ürün Ekle</span>
            </button>

            {/* Shopping Cart Button */}
            <button 
              type="button" 
              className="btn btn-primary position-relative rounded-pill px-3 py-2 btn-hover-scale d-flex align-items-center gap-2"
              onClick={onOpenCart}
            >
              <i className="bi bi-cart3 fs-5"></i>
              <span className="d-none d-md-inline">Sepetim</span>
              {cartCount > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger border border-light">
                  {cartCount}
                </span>
              )}
            </button>

            {/* User Profile / Login */}
            {currentUser ? (
              <div className="dropdown">
                <button 
                  className="btn btn-secondary dropdown-toggle rounded-pill d-flex align-items-center gap-2" 
                  type="button" 
                  id="userDropdown" 
                  data-bs-toggle="dropdown" 
                  aria-expanded="false"
                >
                  <i className="bi bi-person-circle"></i>
                  <span>{currentUser.name}</span>
                </button>
                <ul className="dropdown-menu dropdown-menu-end shadow" aria-labelledby="userDropdown">
                  <li><a className="dropdown-item py-2" href="#" onClick={(e) => { e.preventDefault(); onViewChange('tracking'); }}><i className="bi bi-box-seam me-2"></i>Siparişlerim</a></li>
                  <li><a className="dropdown-item py-2 text-danger" href="#" onClick={(e) => { e.preventDefault(); onLogout(); }}><i className="bi bi-box-arrow-right me-2"></i>Çıkış Yap</a></li>
                </ul>
              </div>
            ) : (
              <button 
                className="btn btn-outline-light rounded-pill px-3 d-flex align-items-center gap-2"
                onClick={onOpenLogin}
              >
                <i className="bi bi-box-arrow-in-right"></i>
                Giriş Yap
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
