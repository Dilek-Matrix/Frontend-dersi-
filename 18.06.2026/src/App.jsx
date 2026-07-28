import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import CategoriesList from './components/CategoriesList';
import ProductGrid from './components/ProductGrid';
import ProductDetail from './components/ProductDetail';
import CartDrawer from './components/CartDrawer';
import AddProductForm from './components/AddProductForm';
import LoginModal from './components/LoginModal';
import OrderTracking from './components/OrderTracking';
import ProductReturns from './components/ProductReturns';
import HelpCenter from './components/HelpCenter';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import { INITIAL_PRODUCTS, CATEGORIES, ORDER_STATUSES } from './data/products';
import './App.css';

export default function App() {
  // Global States
  const [products, setProducts] = useState(INITIAL_PRODUCTS);
  const [cart, setCart] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('Tümü');
  const [priceRange, setPriceRange] = useState([0, 6000]);
  const [minRating, setMinRating] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeView, setActiveView] = useState('home');
  const [selectedProduct, setSelectedProduct] = useState(null);
  
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  // Cart Handlers
  const handleAddToCart = (product, quantity = 1) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [...prevCart, { ...product, quantity }];
    });
  };

  const handleUpdateQuantity = (productId, newQty) => {
    if (newQty <= 0) {
      handleRemoveItem(productId);
      return;
    }
    setCart((prevCart) =>
      prevCart.map((item) => (item.id === productId ? { ...item, quantity: newQty } : item))
    );
  };

  const handleRemoveItem = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const handleCheckout = () => {
    if (cart.length === 0) return;

    const newOrderId = Math.floor(1004 + Math.random() * 9000);
    const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const shippingThreshold = 150;
    const shippingFee = subtotal >= shippingThreshold ? 0 : 29.99;
    const totalAmount = subtotal + shippingFee;
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

    // Save checkout dynamically in local session lookup
    ORDER_STATUSES[newOrderId] = {
      id: newOrderId,
      status: "Hazırlanıyor",
      carrier: "Yurtiçi Kargo",
      trackingNo: "YK" + Math.floor(100000000 + Math.random() * 900000000),
      date: new Date().toLocaleDateString('tr-TR'),
      items: totalItems,
      total: totalAmount
    };

    alert(`Tebrikler! Alışverişiniz başarıyla tamamlandı.\nSipariş Numaranız: #${newOrderId}\nSiparişinizin durumunu "Sipariş Takibi" sayfasından sorgulayabilirsiniz.`);
    
    setCart([]);
    setIsCartOpen(false);
    setActiveView('tracking');
  };

  // Filter Handlers
  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
    setActiveView('home');
  };

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('Tümü');
    setPriceRange([0, 6000]);
    setMinRating(0);
  };

  const handleAddProduct = (newProduct) => {
    setProducts([newProduct, ...products]);
  };

  const handleViewDetail = (product) => {
    setSelectedProduct(product);
    setActiveView('productDetail');
  };

  const handleViewChange = (view) => {
    setActiveView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="d-flex flex-column min-vh-100 bg-light">
      
      {/* Navbar */}
      <Navbar 
        cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)}
        onOpenCart={() => setIsCartOpen(true)}
        activeView={activeView}
        onViewChange={handleViewChange}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        currentUser={currentUser}
        onOpenLogin={() => setIsLoginOpen(true)}
        onLogout={() => {
          setCurrentUser(null);
          alert("Başarıyla çıkış yapıldı.");
          handleViewChange('home');
        }}
      />

      {/* Hero Header on home view */}
      {activeView === 'home' && !searchQuery && (
        <Header onSelectCategory={handleSelectCategory} />
      )}

      {/* Main View Router */}
      <main className="flex-grow-1 py-4">
        {activeView === 'home' && (
          <div className="container">
            {/* Quick badges category view */}
            <CategoriesList 
              categories={CATEGORIES}
              selectedCategory={selectedCategory}
              onSelectCategory={handleSelectCategory}
            />

            <div className="row g-4">
              {/* Left filters sidebar */}
              <div className="col-12 col-lg-3">
                <Sidebar 
                  categories={CATEGORIES}
                  selectedCategory={selectedCategory}
                  onSelectCategory={handleSelectCategory}
                  priceRange={priceRange}
                  onPriceRangeChange={setPriceRange}
                  minRating={minRating}
                  onMinRatingChange={setMinRating}
                  onResetFilters={handleResetFilters}
                />
              </div>

              {/* Right products grid */}
              <div className="col-12 col-lg-9">
                <ProductGrid 
                  products={products}
                  searchQuery={searchQuery}
                  selectedCategory={selectedCategory}
                  priceRange={priceRange}
                  minRating={minRating}
                  onAddToCart={handleAddToCart}
                  onViewDetail={handleViewDetail}
                  onResetFilters={handleResetFilters}
                />
              </div>
            </div>
          </div>
        )}

        {activeView === 'productDetail' && selectedProduct && (
          <ProductDetail 
            product={selectedProduct}
            onAddToCart={handleAddToCart}
            onBack={() => handleViewChange('home')}
          />
        )}

        {activeView === 'addProduct' && (
          <AddProductForm 
            onAddProduct={handleAddProduct}
            categories={CATEGORIES}
            onBack={() => handleViewChange('home')}
          />
        )}

        {activeView === 'about' && <AboutUs />}
        
        {activeView === 'help' && <HelpCenter />}

        {activeView === 'tracking' && <OrderTracking />}

        {activeView === 'returns' && <ProductReturns />}
      </main>

      {/* Sliding Drawer Cart */}
      <CartDrawer 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onCheckout={handleCheckout}
      />

      {/* Authenticate Login Dialog Modal */}
      <LoginModal 
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        onLoginSuccess={(user) => {
          setCurrentUser(user);
        }}
      />

      {/* Footer */}
      <Footer onViewChange={handleViewChange} />

    </div>
  );
}
