import { useState, useEffect } from "react";
//useState:Veri deposu.Bileşen içinde dedeğişebilecek verileri (örneğin ekran genişliğini) hafızada tutmak için kullanılır.
//useEffect: Bileşen ekrana geldiğinde, ekrandan gittiğinde ya da belirli veriler değiştiğinde yapılacak yan etkileri (Event Listener eklemek gibi) yönetir.



//export default function Baslik({ env, sepetAdedi, onSepetAc, searchVal, onSearchChange }) {
//Burada Baslik adında bir fonksiyonel bileşen tanımlıyoruz. Parantez içindeki süslü parantezler ({ ... }), bu bileşenin üst bileşenden (yani App.jsx'ten) hangi Props (özellikleri) aldığını gösterir:

//env: Aktif olan kategoriyi veya ortam bilgisini taşır.
//sepetAdedi: Sepette o an kaç ürün olduğunu gösteren sayı (Sepet ikonunun üzerinde "3" yazması için).
//onSepetAc: Sepet butonuna tıklandığında sepet menüsünü açacak olan fonksiyon.
//searchVal: Arama çubuğuna yazılan mevcut metin.
//onSearchChange: Kullanıcı arama çubuğuna yeni bir harf yazdığında bu değişikliği üst bileşene bildiren fonksiyon.
export default function Baslik({ env, sepetAdedi, onSepetAc, searchVal, onSearchChange }) {
  

//windowSize adında bir state (durum) tanımlanmış. İlk değer olarak o anki tarayıcı penceresinin genişlik (window.innerWidth) ve yükseklik (window.innerHeight) değerleri bir obje olarak atanmış. Bu sayede sitenin o an mobilde mi, tablette mi yoksa masaüstünde mi olduğunu takip edebiliriz.

  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });



//useEffect(() => { ... }, []);
//handleResize: Ekran her değiştiğinde çalışacak bir fonksiyon tanımlanmış. Bu fonksiyon setWindowSize kullanarak state'i güncelliyor ve yeni ekran boyutlarını kaydediyor.
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

//window.addEventListener: Tarayıcıya "Ekran boyutu her değiştiğinde (resize), git handleResize fonksiyonunu çalıştır" talimatı veriliyor.
// return () => { ... }): Cleanup (Temizlik) fonksiyonudur.
// []: Bağımlılık dizisi (dependency array) boş bırakıldığı için bu useEffect bloğu sadece ve sadece bileşen ilk kez ekrana yüklendiğinde (Mount olduğunda) bir kez çalışır.
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);





//const getEnvName = (cat) => { ... } Yardımcı bir fonksiyondur. Gelen kategori metnine (cat) göre ekranda ne yazacağını belirler:
//Yani, Kategoriye göre Ortam İsmini Getir(kategori)
//1. adım: Eğer gelen kategori "all" ise ekrana büyük harflerle "TÜM KATEGORİLER" yazar.
//2. adım: (else) Başka bir kategori ismi gelirse ("elektronik", "giyim" vb.), JavaScript'in .toUpperCase() fonksiyonunu kullanarak gelen metnin tüm harflerini büyütür (Örn: "giyim" $\rightarrow$ "GİYİM" olur).
  const getEnvName = (cat) => {
    if (cat === "all") return "TÜM KATEGORİLER";
    return cat.toUpperCase();
  };



//return (yani ekrana basılan JSX/HTML) kısmı

  return (
    <header className="eticaret-header">
      <div className="header-ust-alan">
        <div className="logo-alani">
          <div className="site-logo-link">HEPSİAL</div>
          <span className="site-logo-badge">STORE</span>
        </div>

        <div className="arama-alani">
          <input
            type="text"
            placeholder="Ürün, kategori veya marka ara..."
            //value={searchVal}: Arama kutusunun içinde ne yazacağını doğrudan üst bileşenden (App.jsx) gelen searchVal değişkenine bağlıyor. Yani arama kutusu kafasına göre dolmuyor, React kontrolünde çalışıyor.
            value={searchVal}
            //onChange={(e) => onSearchChange(e.target.value)}: Kullanıcı klavyeden her yeni harfe bastığında bu olay (onChange) tetiklenir. e.target.value ifadesi, kutunun içine yazılan en güncel metni alır. Bu metni hemen onSearchChange fonksiyonuna parametre olarak göndererek App.jsx'teki ana arama kelimesini günceller. Böylece siz yazdıkça ürün listesi anında filtrelenebilir.
            onChange={(e) => onSearchChange(e.target.value)}
            className="arama-input"
          />
          <button className="arama-butonu">Ara</button>
        </div>

        <div className="kullanici-kontrolleri">
          <div className="menu-linki">Giriş Yap</div>
          <div className="menu-linki">Siparişlerim</div>
          

        {/*onClick={onSepetAc}: Kullanıcı "🛒 Sepetim" butonuna tıkladığı an, App.jsx'ten gelen onSepetAc fonksiyonu çalışır.
         Bu fonksiyon muhtemelen ana sayfadaki sepet yan menüsünü (SepetGezgini.jsx) görünür hale getiren bir state'i true yapar.*/}
        {/* {sepetAdedi > 0 && (...)} (Koşullu Render): Burası çok kritik! Eğer sepette ürün yoksa (sepetAdedi = 0),
         sepetteki sayı rozeti ekranda hiç görünmez. Ne zaman ki sepete en az 1 ürün eklenir ve sepetAdedi 0'dan büyük olur,
        işte o zaman sağ taraftaki <span> devreye girerek butonun üzerinde kırmızı/turuncu bir daire içinde ürün sayısını
        ({sepetAdedi}) gösterir.  */}
          <button onClick={onSepetAc} className="sepet-tetikleyici">
            <span>🛒 Sepetim</span>
            {sepetAdedi > 0 && (
              <span className="sepet-sayac-rozet">{sepetAdedi}</span>
            )}
          </button>
        </div>
      </div>


    {/*{getEnvName(env)}:*/}
    {/* Bir önceki adımda incelediğimiz fonksiyon burada çağrılıyor. Üst bileşenden gelen env değeri (örneğin "all")
     bu fonksiyona giriyor ve ekrana büyük harflerle "TÜM KATEGORİLER" yazısı basılıyor.  */}

    {/* {windowSize.width}px: Bileşenin başında useEffect ve window.addEventListener ile sürekli dinlediğimiz ekran genişliği
     buraya yazdırılıyor. Tarayıcının sağından solundan tutup ekranı daralttığınızda veya genişlettiğinizde, buradaki piksel
    değerinin canlı olarak (sayfa yenilenmeden) değiştiğini görebilirsiniz. Responsive (mobil uyumluluk)
    testlerini rahat yapabilmeniz için bu özellik eklemiş.    */}
      <div className="kategori-seridi">
        <span className="badge badge-gray">{getEnvName(env)}</span>
        <span className="detail-meta-label">| Çözünürlük: {windowSize.width}px</span>
      </div>
    </header>
  );
}
