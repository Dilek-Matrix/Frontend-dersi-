export const INITIAL_PRODUCTS = [
  // ELEKTRONİK (5 Ürün)
  {
    id: 1,
    title: "Premium GPS Akıllı Saat (44mm, Siyah)",
    price: 8499.00,
    description: "Metal gövdesi ve şık silikon kordonu ile hem günlük hayatta hem de spor yaparken yanınızda. Adımsayar, nabız ölçümü, uyku analizi, dahili GPS ve 7 güne kadar pil ömrü sunar.",
    category: "Elektronik",
    image: "/images/smartwatch.png",
    rating: { rate: 4.8, count: 142 },
    features: ["Dahili GPS", "Nabız & SpO2 Takibi", "50m Su Geçirmezlik", "AMOLED Ekran"]
  },
  {
    id: 2,
    title: "Aktif Gürültü Engelleyici Kablosuz Kulaklık",
    price: 4999.00,
    description: "Gelişmiş Aktif Gürültü Engelleme (ANC) teknolojisi ile dış dünyayı unutun. Yüksek çözünürlüklü ses kalitesi, derin baslar ve 40 saate varan pil ömrü ile kesintisiz müzik deneyimi.",
    category: "Elektronik",
    image: "/images/headphones.png",
    rating: { rate: 4.7, count: 95 },
    features: ["Aktif Gürültü Engelleme (ANC)", "40 Saat Çalma Süresi", "Bluetooth 5.2", "Ergonomik Kulak Yastıkları"]
  },
  {
    id: 3,
    title: "Mekanik RGB Oyuncu Klavyesi (Kırmızı Switch)",
    price: 2450.00,
    description: "Kırmızı anahtarlı (Red Switch) ultra hızlı tepki süresi. Her tuşa atanabilir RGB aydınlatma ve dayanıklı alüminyum üst gövde ile oyun performansınızı zirveye taşıyın.",
    category: "Elektronik",
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&auto=format&fit=crop&q=60",
    rating: { rate: 4.6, count: 212 },
    features: ["Red Switch Mekanik Tuşlar", "16.8 Milyon Renk RGB", "%100 Anti-Ghosting", "Alüminyum Kasa"]
  },
  {
    id: 4,
    title: "Ergonomik Dikey Kablosuz Mouse",
    price: 1190.00,
    description: "Uzun saatler bilgisayar başında çalışanlar için ideal dikey tasarım. Bilek ağrılarını önlemeye yardımcı olur. Ayarlanabilir DPI ve sessiz tıklama özelliği mevcuttur.",
    category: "Elektronik",
    image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500&auto=format&fit=crop&q=60",
    rating: { rate: 4.4, count: 88 },
    features: ["Ergonomik Dikey Tasarım", "Ayarlanabilir DPI (800-1600-2400)", "Sessiz Tuşlar", "Şarj Edilebilir Pil"]
  },
  {
    id: 5,
    title: "Full HD Android Taşınabilir Projeksiyon Cihazı",
    price: 15499.00,
    description: "Ev sinemasını her yere taşıyın. Dahili Android işletim sistemi ile Netflix, YouTube doğrudan çalıştırılabilir. Wi-Fi ve Bluetooth bağlantısı mevcuttur.",
    category: "Elektronik",
    image: "https://images.unsplash.com/photo-1535016120720-40c646be5580?w=500&auto=format&fit=crop&q=60",
    rating: { rate: 4.5, count: 64 },
    features: ["1080p Full HD Çözünürlük", "Dahili Android TV", "Wi-Fi & Bluetooth", "300 ANSI Lümen Parlaklık"]
  },

  // GİYİM (5 Ürün)
  {
    id: 6,
    title: "Klasik Denim Kot Ceket (Mavi)",
    price: 1699.90,
    description: "Eskimeyen tarzı ve dayanıklı yapısıyla gardırobunuzun vazgeçilmezi olacak. %100 pamuklu denim kumaştan üretilmiştir. Rahat kesim ve şık metal düğmeler.",
    category: "Giyim",
    image: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=500&auto=format&fit=crop&q=60",
    rating: { rate: 4.5, count: 320 },
    features: ["%100 Pamuklu Denim", "Düğmeli Ön Kapama", "Yan ve Göğüs Cepleri", "Makinede Yıkanabilir"]
  },
  {
    id: 7,
    title: "Oversize Unisex Pamuklu Sweatshirt",
    price: 899.90,
    description: "Yumuşacık şardonlu iç yapısı ve rahat oversize kesimiyle serin günlerin kurtarıcısı. Unisex kullanıma uygundur. Canlı ve dayanıklı renk kalitesi.",
    category: "Giyim",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&auto=format&fit=crop&q=60",
    rating: { rate: 4.7, count: 415 },
    features: ["Pamuklu Karışım Kumaş", "Şardonlu Yumuşak İç Astar", "Oversize Unisex Kalıp", "Büzgülü Kapüşon"]
  },
  {
    id: 8,
    title: "Slim Fit Keten Erkek Gömlek",
    price: 1149.00,
    description: "Yaz aylarında hem şık hem de serin kalmak isteyenler için nefes alabilen keten-pamuk karışımlı gömlek. Slim fit kesimiyle modern bir görünüm sağlar.",
    category: "Giyim",
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500&auto=format&fit=crop&q=60",
    rating: { rate: 4.3, count: 180 },
    features: ["Keten & Pamuk Karışımı", "Slim Fit Kalıp", "Düğmeli Yaka", "Nefes Alabilir Hafif Kumaş"]
  },
  {
    id: 9,
    title: "Klasik Kesim Kanvas Erkek Pantolon",
    price: 1399.90,
    description: "Ofiste veya günlük hayatta rahatlıkla tercih edebileceğiniz, hafif esnek yapıda pamuklu kanvas pantolon. Dayanıklı dikiş yapısı ve şık duruş.",
    category: "Giyim",
    image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=500&auto=format&fit=crop&q=60",
    rating: { rate: 4.4, count: 110 },
    features: ["%98 Pamuk, %2 Elastan", "Hafif Esnek Kumaş", "Düz Paça Klasik Kesim", "Fermuarlı & Düğmeli Kapama"]
  },
  {
    id: 10,
    title: "Çizgili Yazlık Kadın Elbise",
    price: 1549.90,
    description: "Sıcak yaz günlerinde tiril tiril dokusuyla rahatlık sunan çizgili elbise. Bele oturan kesimi ve uçuş uçuş eteği ile şık bir hava katar.",
    category: "Giyim",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500&auto=format&fit=crop&q=60",
    rating: { rate: 4.6, count: 154 },
    features: ["Viskon Karışımlı Dökümlü Kumaş", "İnce Ayarlanabilir Askılar", "Kuşaklı Bel Detayı", "Astar Gerekmez"]
  },

  // KİTAP (5 Ürün)
  {
    id: 11,
    title: "Gece Yarısı Kütüphanesi - Matt Haig",
    price: 185.00,
    description: "Yaşam ile ölüm arasında, milyonlarca farklı hayatınızı yaşayabileceğiniz bir kütüphane olsaydı ne yapardınız? Matt Haig'den pişmanlıklar ve yaşama dair büyüleyici bir roman.",
    category: "Kitap",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500&auto=format&fit=crop&q=60",
    rating: { rate: 4.9, count: 850 },
    features: ["Yazar: Matt Haig", "Yayınevi: Domingo Yayınevi", "Sayfa Sayısı: 296", "Karton Kapak"]
  },
  {
    id: 12,
    title: "Simyacı - Paulo Coelho",
    price: 135.00,
    description: "Endülüslü çoban Santiago'nun Mısır Piramitleri'ne giden kişisel menkıbesinin öyküsü. Dünyaca ünlü yazar Paulo Coelho'nun zamansız felsefi başyapıtı.",
    category: "Kitap",
    image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=500&auto=format&fit=crop&q=60",
    rating: { rate: 4.8, count: 1250 },
    features: ["Yazar: Paulo Coelho", "Yayınevi: Can Yayınları", "Sayfa Sayısı: 184", "Çevirmen: Özdemir İnce"]
  },
  {
    id: 13,
    title: "Sapiens: Hayvanlardan Tanrılara",
    price: 260.00,
    description: "İnsan türünün kısa bir tarihi. Yuval Noah Harari, yüz bin yıl önce dünyada en az altı insan türü varken, bugün neden sadece Homo sapiens'in kaldığını sorguluyor.",
    category: "Kitap",
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=500&auto=format&fit=crop&q=60",
    rating: { rate: 4.7, count: 980 },
    features: ["Yazar: Yuval Noah Harari", "Yayınevi: Kolektif Kitap", "Sayfa Sayısı: 412", "Konu: Popüler Bilim / Tarih"]
  },
  {
    id: 14,
    title: "Atomik Alışkanlıklar - James Clear",
    price: 210.00,
    description: "Küçük alışkanlıkların şaşırtıcı gücü! İyi alışkanlıklar edinmek ve kötü olanlardan kurtulmak için pratik ve bilimsel olarak kanıtlanmış bir rehber.",
    category: "Kitap",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=500&auto=format&fit=crop&q=60",
    rating: { rate: 4.9, count: 620 },
    features: ["Yazar: James Clear", "Yayınevi: Pegasus Yayınları", "Sayfa Sayısı: 352", "Konu: Kişisel Gelişim"]
  },
  {
    id: 15,
    title: "Dune (1. Kitap) - Frank Herbert",
    price: 245.00,
    description: "Bilimkurgu tarihinin en büyük başyapıtı. Çöl gezegeni Arrakis'teki güç mücadeleleri, inançlar ve genç Paul Atreides'in mesihlik yolundaki destansı hikayesi.",
    category: "Kitap",
    image: "https://images.unsplash.com/photo-1618666012174-83b441c0bc76?w=500&auto=format&fit=crop&q=60",
    rating: { rate: 4.8, count: 480 },
    features: ["Yazar: Frank Herbert", "Yayınevi: İthaki Yayınları", "Sayfa Sayısı: 712", "Konu: Bilimkurgu Klasikleri"]
  },

  // SPOR (5 Ürün)
  {
    id: 16,
    title: "Ortopedik Performans Koşu Ayakkabısı",
    price: 3499.00,
    description: "Hafif ve esnek örgü saya yapısıyla maksimum nefes alabilirlik. Adımlarınızı destekleyen köpük taban teknolojisi ile uzun koşularda bile yüksek konfor sağlar.",
    category: "Spor",
    image: "/images/sneakers.png",
    rating: { rate: 4.5, count: 120 },
    features: ["Esnek Öpücük Taban", "Nefes Alabilir Örgü Saya", "Kaymaz Karbon Kauçuk Taban", "Gece Görüşü İçin Reflektörler"]
  },
  {
    id: 17,
    title: "Klasik Hakiki Deri Spor Sırt Çantası",
    price: 2190.00,
    description: "Spor salonuna giderken veya hafta sonu seyahatlerinde şıklığınızdan ödün vermeyin. Dayanıklı suni deri yapısı, geniş iç hacmi ve özel ayakkabı bölmesi mevcuttur.",
    category: "Spor",
    image: "/images/backpack.png",
    rating: { rate: 4.6, count: 68 },
    features: ["Su Geçirmez Suni Deri", "Özel Ayakkabı Gözü", "Laptop Bölmesi (15.6\")", "Destekli Omuz Askıları"]
  },
  {
    id: 18,
    title: "Kaymaz TPE Yoga & Pilates Matı (6mm)",
    price: 649.90,
    description: "6mm ideal kalınlığı ile eklemlerinizi korur. TPE malzemeden üretilmiştir, çevre dostudur ve koku yapmaz. Çift taraflı kaydırmaz doku maksimum güvenlik sunar.",
    category: "Spor",
    image: "https://images.unsplash.com/photo-1592432678016-e910b452f9a2?w=500&auto=format&fit=crop&q=60",
    rating: { rate: 4.7, count: 145 },
    features: ["6mm Kalınlık", "TPE Geri Dönüştürülebilir Malzeme", "Çift Yönlü Kaymaz Yüzey", "Taşıma Askısı Dahil"]
  },
  {
    id: 19,
    title: "Çift Duvarlı Vakumlu Paslanmaz Çelik Termos (500ml)",
    price: 799.00,
    description: "500ml kapasiteli, gıda ile temasa uygun paslanmaz çelik. Sıcak içeceklerinizi 12 saat sıcak, soğuk içeceklerinizi 24 saat soğuk tutma kapasitesine sahiptir.",
    category: "Spor",
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&auto=format&fit=crop&q=60",
    rating: { rate: 4.8, count: 215 },
    features: ["304 Paslanmaz Çelik", "Çift Duvar Yalıtımı", "Sızdırmaz Emniyet Kilidi", "BPA İçermez"]
  },
  {
    id: 20,
    title: "Ayarlanabilir Dambıl Ağırlık Seti (20kg)",
    price: 2299.00,
    description: "Evde kendi spor salonunuzu kurun. Plaka ağırlıkları ekleyip çıkararak istediğiniz seviyede çalışabilirsiniz. Kaymaz neopren kaplı tutma barı ile güvenli antrenman.",
    category: "Spor",
    image: "https://images.unsplash.com/photo-1638536532686-d610adfc8e5c?w=500&auto=format&fit=crop&q=60",
    rating: { rate: 4.4, count: 52 },
    features: ["Toplam 20 kg Ağırlık Plakası", "Çelik Bağlantı Barı", "Kaymaz Kavrama Alanı", "Yıldız Sıkıştırma Vidaları"]
  },

  // KOZMETİK (4 Ürün)
  {
    id: 21,
    title: "Yoğun Nemlendirici Yüz Bakım Kremi",
    price: 489.90,
    description: "Hyaluronik asit ve seramid içeriğiyle cildi 48 saat boyunca neme doyurur. Hızlı emilen yağsız formülü sayesinde makyaj altına da uygulamak için harika bir bazdır.",
    category: "Kozmetik",
    image: "https://images.unsplash.com/photo-1608248597481-496100c8c836?w=500&auto=format&fit=crop&q=60",
    rating: { rate: 4.7, count: 320 },
    features: ["Hyaluronik Asit & Seramidler", "Paraben ve Parfüm İçermez", "Tüm Cilt Tiplerine Uygun", "48 Saat Nem Kilidi"]
  },
  {
    id: 22,
    title: "Aydınlatıcı C Vitamini & Gözenek Serumu",
    price: 599.00,
    description: "%10 saf C vitamini içeren formülü ile cilt tonunu eşitlemeye ve leke görünümünü azaltmaya yardımcı olur. Gözeneklerin sıkılaşmasını ve cildin aydınlık görünmesini sağlar.",
    category: "Kozmetik",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500&auto=format&fit=crop&q=60",
    rating: { rate: 4.6, count: 189 },
    features: ["%10 Saf C Vitamini", "Salisilik Asit (BHA)", "Leke ve Gözenek Karşıtı Etki", "Vegan Formül"]
  },
  {
    id: 23,
    title: "Doğal Hindistan Cevizli Dudak Nemlendiricisi",
    price: 149.00,
    description: "Kurumuş ve çatlamış dudakları anında onarır ve yumuşatır. Doğal shea yağı, hindistan cevizi özü ve balmumu içerir. Hafif tatlı hindistan cevizi kokuludur.",
    category: "Kozmetik",
    image: "https://images.unsplash.com/photo-1617897903246-719242758050?w=500&auto=format&fit=crop&q=60",
    rating: { rate: 4.8, count: 420 },
    features: ["Doğal Hindistan Cevizi Yağı", "Shea Yağı ile Yoğun Besleme", "Koruyucu Madde İçermez", "Kompakt Cep Boyu"]
  },
  {
    id: 24,
    title: "Saç Besleyici Saf Organik Argan Yağı (100ml)",
    price: 379.00,
    description: "Yıpranmış saç uçlarını onarır, elektriklenmeyi önler ve saçlara doğal bir parlaklık kazandırır. Nemli veya kuru saça uygulanabilir, ağırlık hissi bırakmaz.",
    category: "Kozmetik",
    image: "https://images.unsplash.com/photo-1608248597481-496100c8c836?w=500&auto=format&fit=crop&q=60",
    rating: { rate: 4.5, count: 245 },
    features: ["%100 Organik Argan Yağı", "Isıya Karşı Koruma Sağlar", "Elektriklenme Karşıtı", "Durulama Gerektirmez"]
  }
];

export const CATEGORIES = ["Tümü", "Elektronik", "Giyim", "Kitap", "Spor", "Kozmetik"];
export const ORDER_STATUSES = {
  1001: { id: 1001, status: "Kargoya Verildi", carrier: "Yurtiçi Kargo", trackingNo: "YK123456789", date: "28.07.2026", items: 2, total: 13498.00 },
  1002: { id: 1002, status: "Hazırlanıyor", carrier: "Aras Kargo", trackingNo: "Bekleniyor", date: "28.07.2026", items: 1, total: 185.00 },
  1003: { id: 1003, status: "Teslim Edildi", carrier: "MNG Kargo", trackingNo: "MN987654321", date: "25.07.2026", items: 3, total: 1729.00 }
};
