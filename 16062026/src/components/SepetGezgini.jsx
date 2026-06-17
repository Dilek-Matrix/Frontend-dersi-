import { useMemo } from "react";

//sepet: Sepetteki ürünlerin listesi (her ürünün id, ad, fiyat, adet gibi bilgileri var
//isOpen: Sepet panelinin açık mı kapalı mı olduğunu belirleyen boolean (true/false) değer.
//onClose: Paneli kapatmaya yarayan fonksiyon (arka plana veya çarpı butonuna basınca çalışır).
//onAdetGuncelle: Ürün adetini artırıp azaltan fonksiyon.
//onUrunCikar: Ürünü sepetten tamamen silen fonksiyon.

export default function SepetGezgini({
  sepet,
  isOpen,
  onClose,
  onAdetGuncelle,
  onUrunCikar
}) {




  // useMemo kullanılarak sepetin toplam fiyatı hesaplanıyor. sepet dizisi değişmediği sürece bu hesaplama gereksiz yere tekrar çalışmaz, böylece performans korunur
  // reduce fonksiyonu, her ürünün fiyatı ile adetini çarpıp toplam değerine ekler.
  const toplamFiyat = useMemo(() => {
    return sepet.reduce((toplam, item) => toplam + item.fiyat * item.adet, 0);
  }, [sepet]);



// kargoLimit: Bedava kargo için sınır 1500 TL olarak belirlenmiş.
// kargoUcreti: Eğer sepet tutarı 1500 TL'den büyükse veya sepet boşsa kargo 0 TL, aksi halde 50 TL.
// kalanTutar: Bedava kargoya ulaşmak için ne kadar daha harcama yapılması gerektiğini hesaplar (Math.max ile değerin eksiye düşmesi engellenir).
// ilerlemeYuzdesi: Üst sınır %100 olacak şekilde, kullanıcının bedava kargoya ne kadar yaklaştığını gösteren ilerleme çubuğu yüzdesi.

  const kargoLimit = 1500;
  const kargoUcreti = toplamFiyat >= kargoLimit || toplamFiyat === 0 ? 0 : 50;
  const kalanTutar = Math.max(0, kargoLimit - toplamFiyat);
  const ilerlemeYuzdesi = Math.min((toplamFiyat / kargoLimit) * 100, 100);



// Eğer isOpen değeri false ise bileşen ekrana hiçbir şey basmaz (return null). true olduğunda ise CSS sınıfları aracılığıyla paneli görünür hale getirir. 
  const drawerClass = `sepet-drawer ${isOpen ? "sepet-drawer-visible" : "sepet-drawer-hidden"}`;

  if (!isOpen) return null;

  return (
    <>

{/* Bileşen temelde 3 ana bölümden oluşuyor:

A. Üst Kısım (Header & Kargo Barı)
Arka Plan (drawer-arka-plan): Sepet açıldığında arkada kalan flu/koyu alan. Tıklanınca sepeti kapatır (onClose).

Başlık: Toplam ürün sayısını dinamik olarak gösterir (sepet.reduce(...)).

Bedava Kargo İlerleme Çubuğu: Eğer sepet 1500 TL'nin altındaysa "Kargo bedava için X TL daha ekleyin!" der ve style={{ width: ${ilerlemeYuzdesi}% }} ile doluluk oranını gösteren bir bar çizer. 1500 TL geçilince "🎉 Kargonuz Bedava!" mesajı belirir. 

B. Orta Kısım (Ürün Listesi)
Sepet boşsa (sepet.length === 0), ekrana "Sepetiniz şu anda boş." yazar.

Sepet doluysa, sepet.map(...) ile her bir ürün döngüye alınarak listelenir:

Ürün adı ve birim fiyatı gösterilir.

Adet Kontrolü: - butonuna basıldığında onAdetGuncelle(item.id, item.adet - 1), + butonuna basıldığında ise item.adet + 1 tetiklenir.

Sil Butonu: onUrunCikar(item.id) fonksiyonu ile ürün sepetten kaldırılır.


C. Alt Kısım (Özet ve Ödeme Paneli)
Sepette en az 1 ürün varsa burası görünür:

Ara Toplam: Ürünlerin yalın toplam fiyatı.

Kargo Ücreti: Duruma göre "Bedava" ya da "50.00 TL".

Genel Toplam: toplamFiyat + kargoUcreti formülü ile kullanıcının ödeyeceği son miktar.

Alışverişi Tamamla Butonu: Şimdilik gerçek bir ödeme sistemine bağlı olmadığından, tıklandığında ekrana bir simülasyon uyarısı (alert) verir.
*/}
      <div onClick={onClose} className="drawer-arka-plan"></div>

      <div className={drawerClass}>
        <div>
          <div className="drawer-ust">
            <h3 className="app-card-title">Sepetim ({sepet.reduce((sum, item) => sum + item.adet, 0)} Ürün)</h3>
            <button onClick={onClose} className="drawer-kapat-btn">✕</button>
          </div>

          {sepet.length > 0 && (
            <div className="sepet-kargo-ilerleme-kutusu">
              {toplamFiyat >= kargoLimit ? (
                <span className="sepet-kargo-ilerleme-metni">🎉 Kargonuz Bedava!</span>
              ) : (
                <span className="sepet-kargo-ilerleme-metni">
                  🚚 Kargo bedava için <strong>{kalanTutar.toFixed(2)} TL</strong> daha ekleyin!
                </span>
              )}
              <div className="ilerleme-bar-yolu">
                <div
                  className="ilerleme-bar-doluluk"
                  style={{ width: `${ilerlemeYuzdesi}%` }}
                ></div>
              </div>
            </div>
          )}

          <div className="sepet-liste-alani">
            {sepet.length === 0 ? (
              <div className="sepet-bos-etiket">
                <span>Sepetiniz şu anda boş.</span>
              </div>
            ) : (
              sepet.map((item) => (
                <div key={item.id} className="sepet-urun-satir">
                  <div className="sepet-eleman-bilgi">
                    <span className="sepet-urun-ad">{item.ad}</span>
                    <span className="sepet-urun-fiyat">{item.fiyat.toFixed(2)} TL</span>
                    
                    <div className="sepet-adet-kontrolleri">
                      <button
                        onClick={() => onAdetGuncelle(item.id, item.adet - 1)}
                        className="sepet-adet-btn"
                      >
                        -
                      </button>
                      <span className="sepet-adet-yazi">{item.adet}</span>
                      <button
                        onClick={() => onAdetGuncelle(item.id, item.adet + 1)}
                        className="sepet-adet-btn"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="sepet-satir-sag">
                    <span className="sepet-satir-toplam-fiyat">
                      {(item.fiyat * item.adet).toFixed(2)} TL
                    </span>
                    <button
                      onClick={() => onUrunCikar(item.id)}
                      className="sepet-satir-sil-btn"
                    >
                      Sil
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {sepet.length > 0 && (
          <div className="sepet-alt-odeme-paneli">
            <div className="odeme-detay-satiri">
              <span className="detail-meta-label">Ara Toplam</span>
              <span className="detail-meta-val font-mono">{toplamFiyat.toFixed(2)} TL</span>
            </div>
            <div className="odeme-detay-satiri">
              <span className="detail-meta-label">Kargo Ücreti</span>
              <span className="detail-meta-val font-mono">
                {kargoUcreti === 0 ? "Bedava" : `${kargoUcreti.toFixed(2)} TL`}
              </span>
            </div>
            <div className="odeme-detay-satiri border-t border-slate-100 pt-3">
              <span className="app-card-title">Genel Toplam</span>
              <span className="odeme-genel-toplam">
                {(toplamFiyat + kargoUcreti).toFixed(2)} TL
              </span>
            </div>
            <div className="terminal-header">
              <button
                onClick={() => alert("Siparişiniz başarıyla alındı! (Simülasyon)")}
                className="btn btn-primary w-full"
              >
                Alışverişi Tamamla
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
