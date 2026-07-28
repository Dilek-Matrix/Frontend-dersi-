import React, { useState } from 'react';

export default function LoginModal({ isOpen, onClose, onLoginSuccess }) {
  const [isSignUp, setIsSignUp] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.trim() || !password.trim()) {
      alert("Lütfen e-posta ve şifrenizi girin.");
      return;
    }

    if (isSignUp && !name.trim()) {
      alert("Lütfen adınızı soyadınızı girin.");
      return;
    }

    // Simulate successful login
    const user = {
      name: isSignUp ? name.trim() : email.split('@')[0],
      email: email.trim()
    };

    onLoginSuccess(user);
    alert(isSignUp ? "Başarıyla kayıt olundu ve giriş yapıldı!" : "Başarıyla giriş yapıldı!");
    
    // Reset state
    setName('');
    setEmail('');
    setPassword('');
    onClose();
  };

  return (
    <>
      {/* Backdrop */}
      <div 
        className="modal-backdrop fade show" 
        style={{ zIndex: 1060 }}
        onClick={onClose}
      ></div>

      {/* Modal Container */}
      <div 
        className="modal fade show d-block" 
        tabIndex="-1" 
        style={{ zIndex: 1070 }}
        role="dialog"
      >
        <div className="modal-dialog modal-dialog-centered" style={{ maxWidth: '400px' }}>
          <div className="modal-content border-0 shadow-lg rounded-4 overflow-hidden">
            
            {/* Header */}
            <div className="modal-header border-0 bg-primary text-white p-4">
              <h5 className="modal-title fw-bold">
                <i className="bi bi-person-fill-lock me-2"></i>
                {isSignUp ? 'Kayıt Ol' : 'Giriş Yap'}
              </h5>
              <button 
                type="button" 
                className="btn-close btn-close-white" 
                onClick={onClose}
                aria-label="Kapat"
              ></button>
            </div>

            {/* Body */}
            <div className="modal-body p-4 bg-white">
              <form onSubmit={handleSubmit}>
                <div className="d-flex flex-column gap-3">
                  
                  {isSignUp && (
                    <div>
                      <label htmlFor="loginName" className="form-label small fw-semibold text-muted">Ad Soyad</label>
                      <div className="input-group">
                        <span className="input-group-text bg-light border-0"><i className="bi bi-person text-secondary"></i></span>
                        <input 
                          type="text" 
                          id="loginName"
                          className="form-control bg-light border-0" 
                          placeholder="Ahmet Yılmaz"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                  )}

                  <div>
                    <label htmlFor="loginEmail" className="form-label small fw-semibold text-muted">E-posta Adresi</label>
                    <div className="input-group">
                      <span className="input-group-text bg-light border-0"><i className="bi bi-envelope text-secondary"></i></span>
                      <input 
                        type="email" 
                        id="loginEmail"
                        className="form-control bg-light border-0" 
                        placeholder="orn@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="loginPass" className="form-label small fw-semibold text-muted">Şifre</label>
                    <div className="input-group">
                      <span className="input-group-text bg-light border-0"><i className="bi bi-key text-secondary"></i></span>
                      <input 
                        type="password" 
                        id="loginPass"
                        className="form-control bg-light border-0" 
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button 
                    type="submit" 
                    className="btn btn-primary w-100 rounded-pill btn-hover-scale fw-bold py-2 mt-2"
                  >
                    {isSignUp ? 'Hesap Oluştur & Giriş Yap' : 'Giriş Yap'}
                  </button>

                  <div className="text-center mt-3 small text-muted">
                    {isSignUp ? (
                      <span>
                        Zaten bir hesabınız var mı?{' '}
                        <button 
                          type="button" 
                          className="btn btn-link p-0 small text-decoration-none fw-bold"
                          onClick={() => setIsSignUp(false)}
                        >
                          Giriş Yapın
                        </button>
                      </span>
                    ) : (
                      <span>
                        Henüz hesabınız yok mu?{' '}
                        <button 
                          type="button" 
                          className="btn btn-link p-0 small text-decoration-none fw-bold"
                          onClick={() => setIsSignUp(true)}
                        >
                          Kayıt Olun
                        </button>
                      </span>
                    )}
                  </div>

                </div>
              </form>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
