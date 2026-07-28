import { useState, useEffect } from "react";

/* Durum (State) Yönetimi ve Başlangıç Değeri
Burada, geriye doğru sayacağımız toplam süreyi saniye cinsinden hafızada tutmak için secondsLeft adında bir state tanımlanmış.

Matematiksel Hesap: 3600 * 3 ifadesi 3 saati (çünkü 1 saat = 3600 saniye), 1200 ifadesi ise 20 dakikayı (1200 / 60) temsil eder.

Yani sayaç toplamda 3 saat 20 dakikadan (toplam 12.000 saniye) geriye doğru saymaya başlayacaktır. 

useEffect ile Canlı Zamanlayıcı (Timer) Kurulumu
Bileşen ekrana geldiği an zamanı saniye saniye akıtmamız gerekir. Bunun için bir useEffect bloğu açılmış:

setInterval(..., 1000): Tarayıcıya, her 1000 milisaniyede (yani her 1 saniyede) bir bu fonksiyonun içindeki kodları çalıştırmasını söyler.

setSecondsLeft((prev) => { ... }): State'i güncellerken bir önceki saniye değerini (prev) baz alır.

if (prev <= 1): Eğer kalan süre 1 saniyeye veya altına düştüyse (yani süre bittiyse), sayacı tekrar ilk günkü başlangıç değerine (3 saat 20 dakika) eşitler. Böylece sayaç sonsuz bir döngüde çalışır.

return prev - 1: Eğer henüz süre bitmediyse, mevcut saniyeden 1 çıkarır.

return () => { clearInterval(timer); };: Temizlik fonksiyonudur. Kullanıcı sitede başka bir sayfaya geçerse veya bu banner ekrandan kaybolursa, tarayıcının arkasında çalışan bu saniyelik saati durdurur. Bellek sızıntısını (Memory Leak) önler.

[] (Boş Bağımlılık Dizisi): Bu sayacın sayfa ilk açıldığında sadece 1 kez kurulmasını sağlar
*/

export default function KampanyaBanner() {
  const [secondsLeft, setSecondsLeft] = useState(3600 * 3 + 1200);

  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          return 3600 * 3 + 1200;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  /* Saniyeyi Saat/Dakika/Saniye Formatına Çeviren Fonksiyon
  Elimizde sadece ham bir saniye verisi var (Örn: 11950). Kullanıcıya bunu direkt gösterirsek hiçbir şey anlamaz. Kullanıcının 03:19:10 şeklinde görmesi için formatCountdown fonksiyonu yazılmış:

  hours = Math.floor(totalSecs / 3600): Toplam saniyeyi 3600'e bölüp aşağı yuvarlayarak kaç tam saat olduğunu bulur.

  minutes = Math.floor((totalSecs % 3600) / 60): Saatten arta kalan saniyeleri (% modu ile) bulur ve bunu 60'ına bölerek kaç dakika olduğunu hesaplar.

  seconds = totalSecs % 60: 60'a tam bölünmeyen, en sonda kalan artık saniyeleri bulur.

  .toString().padStart(2, "0"): Burası işin estetik kısmıdır! Eğer saat, dakika veya saniye tek haneli bir sayıysa (örneğin saat 5 ise), soluna "0" koyarak iki haneli formatta (05) görünmesini sağlar.

  En sonda bunları ${hours}:${minutes}:${seconds} şablonuyla birleştirip metin olarak dışarı verir.
  */
  const formatCountdown = (totalSecs) => {
    const hours = Math.floor(totalSecs / 3600);
    const minutes = Math.floor((totalSecs % 3600) / 60);
    const seconds = totalSecs % 60;
    return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  /* Arayüz / JSX Kısmı
  slider-bilgi: Kampanyanın başlığını ("Büyük Yaz İndirimleri Başladı!") ve açıklamasını içeren statik (sabit) reklam alanı.
  
  {formatCountdown(secondsLeft)}: İşte her saniye değişen sihirli yer burası! secondsLeft state'i her saniye azaldıkça, bu fonksiyon yeniden tetiklenir ve ekrandaki süre (örneğin 03:20:00 -> 03:19:59 -> 03:19:58) canlı olarak akar.
  */
  return (
    <div className="slider-banner">
      <div className="slider-bilgi">
        <span className="slider-etiket">GÜNÜN FIRSATI</span>
        <h2 className="slider-baslik">Büyük Yaz İndirimleri Başladı!</h2>
        <p className="slider-detay">
          Tüm Elektronik, Giyim ve Kitaplarda sepette anında %40'a varan indirimleri kaçırmayın.
        </p>
      </div>

      <div className="slider-sayac">
        <span>⏰ Kalan Süre:</span>
        <span>{formatCountdown(secondsLeft)}</span>
      </div>
    </div>
  );
}
