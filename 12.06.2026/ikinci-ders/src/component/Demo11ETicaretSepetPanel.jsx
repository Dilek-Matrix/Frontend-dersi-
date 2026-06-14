import { useState } from "react";
import UrunListesi from "./UrunListesi";
import Sepet from "./Sepet";

// Data (ürün verileri) dizisi
const URUNLER = [
  { id: 1, ad: "Yedek Kablosuz Klavye", kategori: "Aksesuar", fiyat: 750, stok: 12 },
  { id: 2, ad: "Kablosuz Oyuncu Mouse", kategori: "Aksesuar", fiyat: 600, stok: 5 },
  { id: 3, ad: "4K Oyuncu Monitörü", kategori: "Ekran", fiyat: 8500, stok: 3 },
  { id: 4, ad: "Bluetooth Kulaklık", kategori: "Ses", fiyat: 1200, stok: 8 },
  { id: 5, ad: "1 TB Taşınabilir SSD", kategori: "Depolama", fiyat: 2400, stok: 15 }
];

const kategoriler = ["Tumu", "Aksesuar", "Ekran", "Ses", "Depolama"];

const Demo11ETicaretSepeti = () => {
  {/* State (durum) tanımlamaları yapıyoruz */}
  const [aramaMetni, setAramaMetni] = useState("");
  const [seciliKategori, setSeciliKategori] = useState("Tumu");
  const [sepet, setSepet] = useState([]);

  {/* 1. MANTIK: Canlı Filtreleme Fonksiyonu */}
  const filtrelenmisUrunler = URUNLER.filter((urun) => {
    const kategoriUyumlu = seciliKategori === "Tumu" || urun.kategori === seciliKategori;
    const isimUyumlu = urun.ad.toLowerCase().includes(aramaMetni.toLowerCase());
    return kategoriUyumlu && isimUyumlu;
  });

  {/* 2. MANTIK: Sepete Ürün Ekleme (Stok Kontrollü) */}
  const sepeteEkle = (urun) => {
    const sepettekiUrun = sepet.find((item) => item.id === urun.id);

    if (sepettekiUrun) {
      // Eğer sepetteki adet, ürünün toplam stoğuna ulaştıysa daha fazla ekletme
      if (sepettekiUrun.adet >= urun.stok) {
        alert(`Üzgünüz, bu üründen stokta sadece ${urun.stok} adet var.`);
        return;
      }
      // Stok elveriyorsa adedi 1 artır
      setSepet(
        sepet.map((item) =>
          item.id === urun.id ? { ...item, adet: item.adet + 1 } : item
        )
      );
    } else {
      // Sepette yoksa adedi 1 olacak şekilde yeni nesne olarak sepet dizisine fırlat
      setSepet([...sepet, { ...urun, adet: 1 }]);
    }
  };

  {/* 3. MANTIK: Sepetten Adet Azaltma */}
  const sepettenAzalt = (id) => {
    const sepettekiUrun = sepet.find((item) => item.id === id);
    
    if (sepettekiUrun.adet === 1) {
      // Adet 1 iken eksiye basılırsa ürünü sepetten tamamen sil
      setSepet(sepet.filter((item) => item.id !== id));
    } else {
      // 1'den büyükse adedi 1 azalt
      setSepet(
        sepet.map((item) =>
          item.id === id ? { ...item, adet: item.adet - 1 } : item
        )
      );
    }
  };

  {/* 4. MANTIK: Ürünü Sepetten Doğrudan Silme */}
  const urunSil = (id) => {
    setSepet(sepet.filter((item) => item.id !== id));
  };

  {/* 5. MANTIK: Sepet Toplam Tutar Hesaplama */}
  const toplamTutar = sepet.reduce((toplam, item) => toplam + item.fiyat * item.adet, 0);

  return (
    <div className="p-4 max-w-6xl mx-auto font-sans">
      {/* Başlık bölümü */}
      <div className="mb-4">
        <h1 className="text-2xl font-bold text-gray-800">
          Demo 11: E-Ticaret Sepet Paneli
        </h1>
        <p className="text-sm text-gray-600 mt-1">
          Bu projede JSX, props, eventler, listeler ve koşullu rendering
          konularını tek bir yapıda birleştiriyoruz.
        </p>
      </div>

      {/* Arama ve Filtreleme Kartı */}
      <div className="border rounded-lg p-4 bg-gray-50 mb-6 shadow-sm">
        <h2 className="font-semibold text-gray-700 mb-2 text-lg">
          Ürün Ara ve Filtrele
        </h2>

        {/* Arama Inputu */}
        <input
          type="text"
          value={aramaMetni}
          onChange={(e) => setAramaMetni(e.target.value)}
          placeholder="Ürün adı ara..."
          className="w-full p-2 border rounded-md bg-white mb-3 shadow-sm focus:outline-blue-500"
        />

        {/* Kategori Butonları */}
        <div className="flex gap-2 flex-wrap">
          {kategoriler.map((kat) => (
            <button
              key={kat}
              onClick={() => setSeciliKategori(kat)}
              className={`px-4 py-1.5 rounded-md border text-sm font-medium transition-all
              ${seciliKategori === kat
                ? "bg-blue-600 text-white border-blue-600 shadow-sm"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
              }`}
            >
              {kat}
            </button>
          ))}
        </div>
      </div>

      {/* Yan yana 3 adet sanal sütuna bölündü (2 Sütun Liste, 1 Sütun Sepet) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* SOL TARAF: ÜRÜN LİSTESİ COMPONENTİ */}
        <UrunListesi 
          urunlerListesi={filtrelenmisUrunler} 
          SepeteEkle={sepeteEkle} 
        />

        {/* SAĞ TARAF: SEPET COMPONENTİ */}
        <Sepet 
          sepetListesi={sepet}
          sepeteEkle={sepeteEkle}
          sepettenAzalt={sepettenAzalt}
          urunSil={urunSil}
          sepetiTemizle={() => setSepet([])}
          toplamTutar={toplamTutar}
        />

      </div> {/* Grid Kapanış */}
    </div> // Ana Div Kapanış
  );
};

export default Demo11ETicaretSepeti;