import React, { useState } from 'react';

export default function AddProductForm({ onAddProduct, categories, onBack }) {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Elektronik');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [featureInput, setFeatureInput] = useState('');
  const [featuresList, setFeaturesList] = useState([]);
  const [ratingRate, setRatingRate] = useState(5);

  const handleAddFeature = () => {
    if (featureInput.trim()) {
      setFeaturesList([...featuresList, featureInput.trim()]);
      setFeatureInput('');
    }
  };

  const handleRemoveFeature = (idx) => {
    setFeaturesList(featuresList.filter((_, i) => i !== idx));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim() || !price || !description.trim()) {
      alert("Lütfen gerekli tüm alanları doldurun.");
      return;
    }

    const parsedPrice = parseFloat(price);
    if (isNaN(parsedPrice) || parsedPrice <= 0) {
      alert("Lütfen geçerli bir fiyat girin.");
      return;
    }

    const defaultImages = {
      "Elektronik": "https://images.unsplash.com/photo-1526738549149-8e07eca6c147?w=500&auto=format&fit=crop&q=60",
      "Giyim": "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=500&auto=format&fit=crop&q=60",
      "Kitap": "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=500&auto=format&fit=crop&q=60",
      "Spor": "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=500&auto=format&fit=crop&q=60",
      "Kozmetik": "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=500&auto=format&fit=crop&q=60"
    };

    const finalImage = imageUrl.trim() || defaultImages[category] || "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=500&auto=format&fit=crop&q=60";

    const newProduct = {
      id: Date.now(), // Generate a unique ID
      title: title.trim(),
      price: parsedPrice,
      description: description.trim(),
      category: category,
      image: finalImage,
      rating: {
        rate: ratingRate,
        count: 1 // Initial rating count
      },
      features: featuresList.length > 0 ? featuresList : ["Premium Kalite", "GigaMarket Güvencesi"]
    };

    onAddProduct(newProduct);
    alert("Ürün başarıyla eklendi!");
    
    // Clear form
    setTitle('');
    setCategory('Elektronik');
    setPrice('');
    setDescription('');
    setImageUrl('');
    setFeaturesList([]);
    setRatingRate(5);
    
    // Return to store page
    onBack();
  };

  return (
    <div className="container my-5 page-fade-in" style={{ maxWidth: '800px' }}>
      <button className="btn btn-outline-secondary rounded-pill mb-4 btn-hover-scale" onClick={onBack}>
        <i className="bi bi-arrow-left me-2"></i>
        Mağazaya Geri Dön
      </button>

      <div className="card shadow border-0 p-5 rounded-4 bg-white">
        <h3 className="fw-bold mb-4 text-center">
          <i className="bi bi-plus-circle-fill text-primary me-2"></i>
          Yeni Ürün Ekle
        </h3>
        <p className="text-muted text-center mb-5">
          Mağaza kataloğuna yeni bir ürün eklemek için aşağıdaki formu doldurun.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="row g-4">
            {/* Title */}
            <div className="col-12">
              <label htmlFor="productTitle" className="form-label fw-semibold">Ürün Adı *</label>
              <input 
                type="text" 
                id="productTitle"
                className="form-control form-control-lg rounded-3 bg-light border-0 shadow-sm"
                placeholder="Örn: Kablosuz Oyuncu Mouse"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>

            {/* Category & Price */}
            <div className="col-12 col-md-6">
              <label htmlFor="productCategory" className="form-label fw-semibold">Kategori *</label>
              <select 
                id="productCategory"
                className="form-select form-select-lg rounded-3 bg-light border-0 shadow-sm text-dark font-weight-medium"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                style={{ cursor: 'pointer' }}
              >
                {categories.filter(c => c !== 'Tümü').map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>

            <div className="col-12 col-md-6">
              <label htmlFor="productPrice" className="form-label fw-semibold">Satış Fiyatı (TL) *</label>
              <input 
                type="number" 
                id="productPrice"
                step="0.01"
                min="0.1"
                className="form-control form-control-lg rounded-3 bg-light border-0 shadow-sm"
                placeholder="Örn: 499.90"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
              />
            </div>

            {/* Image URL */}
            <div className="col-12">
              <label htmlFor="productImage" className="form-label fw-semibold">Ürün Görsel URL'si</label>
              <input 
                type="url" 
                id="productImage"
                className="form-control form-control-lg rounded-3 bg-light border-0 shadow-sm"
                placeholder="Boş bırakılırsa kategoriye göre otomatik görsel atanır"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
              />
            </div>

            {/* Description */}
            <div className="col-12">
              <label htmlFor="productDesc" className="form-label fw-semibold">Ürün Açıklaması *</label>
              <textarea 
                id="productDesc"
                rows="4"
                className="form-control rounded-3 bg-light border-0 shadow-sm"
                placeholder="Ürünü detaylı bir şekilde açıklayın..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              ></textarea>
            </div>

            {/* Features (Dynamic adding) */}
            <div className="col-12">
              <label className="form-label fw-semibold">Öne Çıkan Özellikler</label>
              <div className="input-group mb-3 shadow-sm rounded-3 overflow-hidden">
                <input 
                  type="text" 
                  className="form-control bg-light border-0" 
                  placeholder="Örn: 2 Yıl Garanti"
                  value={featureInput}
                  onChange={(e) => setFeatureInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      handleAddFeature();
                    }
                  }}
                />
                <button className="btn btn-primary px-4" type="button" onClick={handleAddFeature}>
                  Ekle
                </button>
              </div>

              {/* Badges of features */}
              <div className="d-flex flex-wrap gap-2 mt-2">
                {featuresList.map((feature, idx) => (
                  <span key={idx} className="badge bg-secondary text-white rounded-pill px-3 py-2 d-flex align-items-center gap-2">
                    {feature}
                    <button 
                      type="button" 
                      className="btn-close btn-close-white p-0" 
                      style={{ fontSize: '0.65rem' }}
                      onClick={() => handleRemoveFeature(idx)}
                    ></button>
                  </span>
                ))}
              </div>
            </div>

            {/* Initial Rating Star Picker */}
            <div className="col-12">
              <label className="form-label fw-semibold d-block">Başlangıç Puanı</label>
              <div className="stars-selection rating-stars d-flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <i 
                    key={star}
                    className={`bi ${star <= ratingRate ? 'bi-star-fill text-warning' : 'bi-star text-muted'}`}
                    onClick={() => setRatingRate(star)}
                  ></i>
                ))}
              </div>
            </div>
          </div>

          <hr className="text-black-50 my-5" />

          {/* Form Actions */}
          <div className="d-flex gap-3 justify-content-end">
            <button 
              type="button" 
              className="btn btn-outline-secondary rounded-pill px-4"
              onClick={onBack}
            >
              Vazgeç
            </button>
            <button 
              type="submit" 
              className="btn btn-primary rounded-pill px-5 btn-hover-scale fw-bold"
            >
              Ürünü Yayınla
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
