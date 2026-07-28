import React from 'react';

export default function CartDrawer({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout
}) {
  if (!isOpen) return null;

  // Format currency
  const formatPrice = (val) => {
    return new Intl.NumberFormat('tr-TR', { style: 'currency', currency: 'TRY' }).format(val);
  };

  // Calculations
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shippingThreshold = 150;
  const shippingFee = subtotal >= shippingThreshold || subtotal === 0 ? 0 : 29.99;
  const total = subtotal + shippingFee;

  const handleCheckoutSubmit = () => {
    onCheckout();
  };

  return (
    <>
      {/* Background Overlay */}
      <div className="cart-drawer-overlay" onClick={onClose}></div>

      {/* Drawer Container */}
      <div className="cart-drawer-container">
        {/* Header */}
        <div className="d-flex justify-content-between align-items-center p-4 border-bottom border-light-subtle bg-light">
          <h5 className="fw-bold mb-0 d-flex align-items-center gap-2">
            <i className="bi bi-cart3 text-primary"></i>
            Sepetim <span className="badge bg-secondary rounded-pill fs-7">{cartItems.length}</span>
          </h5>
          <button 
            type="button" 
            className="btn-close text-reset shadow-none" 
            onClick={onClose}
            aria-label="Kapat"
          ></button>
        </div>

        {/* Cart Items List */}
        <div className="flex-grow-1 overflow-y-auto p-4">
          {cartItems.length === 0 ? (
            <div className="text-center py-5">
              <i className="bi bi-cart-x text-muted" style={{ fontSize: '4rem' }}></i>
              <h6 className="fw-bold mt-3">Sepetiniz boş.</h6>
              <p className="text-muted small">Hemen alışverişe başlayıp sepetinizi doldurabilirsiniz!</p>
              <button className="btn btn-primary rounded-pill btn-sm mt-2 px-4" onClick={onClose}>
                Alışverişe Başla
              </button>
            </div>
          ) : (
            <div className="d-flex flex-column gap-3">
              {cartItems.map((item) => (
                <div key={item.id} className="d-flex align-items-center gap-3 p-3 bg-light rounded-3 shadow-sm position-relative">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="cart-item-img"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=500&auto=format&fit=crop&q=60";
                    }}
                  />
                  
                  <div className="flex-grow-1 min-w-0">
                    <h6 className="fw-bold text-truncate mb-1 small" title={item.title}>
                      {item.title}
                    </h6>
                    <span className="text-primary fw-bold small d-block mb-2">
                      {formatPrice(item.price)}
                    </span>
                    
                    {/* Quantity Controls */}
                    <div className="d-flex align-items-center gap-2">
                      <div className="input-group input-group-sm" style={{ width: '90px' }}>
                        <button 
                          className="btn btn-outline-secondary py-0" 
                          type="button"
                          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                        >
                          -
                        </button>
                        <span className="form-control text-center py-0 bg-white small">{item.quantity}</span>
                        <button 
                          className="btn btn-outline-secondary py-0" 
                          type="button"
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Remove Button */}
                  <button 
                    className="btn btn-link text-danger p-1 align-self-start ms-2"
                    onClick={() => onRemoveItem(item.id)}
                    title="Ürünü sepetten çıkar"
                  >
                    <i className="bi bi-trash"></i>
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer / Summary Area */}
        {cartItems.length > 0 && (
          <div className="p-4 border-top border-light-subtle bg-light">
            <div className="d-flex justify-content-between mb-2">
              <span className="text-muted">Ara Toplam:</span>
              <span className="fw-semibold">{formatPrice(subtotal)}</span>
            </div>
            <div className="d-flex justify-content-between mb-2">
              <span className="text-muted">Kargo Ücreti:</span>
              <span>{shippingFee === 0 ? <strong className="text-success">Ücretsiz</strong> : formatPrice(shippingFee)}</span>
            </div>
            
            {shippingFee > 0 && (
              <div className="alert alert-warning py-2 px-3 small rounded-3 mb-3 d-flex align-items-center gap-2">
                <i className="bi bi-info-circle-fill"></i>
                <span><strong>{formatPrice(shippingThreshold - subtotal)}</strong> daha ekleyin, kargo bedava olsun!</span>
              </div>
            )}

            <hr className="text-black-50 my-2" />

            <div className="d-flex justify-content-between align-items-center mb-4">
              <span className="fw-bold fs-5">Genel Toplam:</span>
              <span className="fw-bold fs-5 text-primary">{formatPrice(total)}</span>
            </div>

            <button 
              className="btn btn-primary btn-lg w-100 rounded-pill btn-hover-scale fw-bold py-3"
              onClick={handleCheckoutSubmit}
            >
              Alışverişi Tamamla ({formatPrice(total)})
            </button>
          </div>
        )}
      </div>
    </>
  );
}
