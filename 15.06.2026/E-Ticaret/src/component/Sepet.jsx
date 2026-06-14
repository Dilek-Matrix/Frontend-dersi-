const Sepet = ({ sepetListesi, sepettenAzalt, sepeteEkle, urunSil, sepetiTemizle, toplamTutar }) => {
  return (
    <div className="col-span-1">
      <h3 className="font-bold text-gray-800 border-b pb-2 text-lg">Sepetiniz</h3>

      <div className="border rounded-lg p-4 bg-gray-50 shadow-sm min-h-[200px] flex flex-col justify-between mt-3">
        {sepetListesi.length === 0 ? (
          <p className="text-gray-500 text-sm italic text-center my-auto">Sepetiniz henüz boş.</p>
        ) : (
          <>
            {/* Sepetteki Ürünlerin Listesi */}
            <div className="flex flex-col gap-3 mb-4 max-h-[350px] overflow-y-auto pr-1">
              {sepetListesi.map((item) => (
                <div key={item.id} className="border-b pb-2 last:border-0 flex flex-col gap-1.5">
                  <div className="flex justify-between items-start">
                    <span className="font-semibold text-gray-800 text-sm">{item.ad}</span>
                    <span className="text-xs text-gray-500 font-medium">{item.fiyat * item.adet} TL</span>
                  </div>

                  {/* Adet Sayaçları ve Sil Butonu */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center border bg-white rounded">
                      <button
                        onClick={() => sepettenAzalt(item.id)}
                        className="px-2 py-0.5 text-gray-600 hover:bg-gray-100 font-bold"
                      >
                        -
                      </button>
                      <span className="px-3 py-0.5 text-sm font-semibold bg-gray-50 border-x">
                        {item.adet}
                      </span>
                      <button
                        onClick={() => sepeteEkle(item)}
                        className="px-2 py-0.5 text-gray-600 hover:bg-gray-100 font-bold"
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={() => urunSil(item.id)}
                      className="text-xs font-semibold text-red-600 hover:text-red-700 bg-red-50 hover:bg-red-100 px-2 py-1 rounded"
                    >
                      Sil
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Alt Toplam ve Satın Al Grubu */}
            <div className="border-t pt-3 mt-auto">
              <div className="flex justify-between items-center mb-3">
                <span className="font-bold text-gray-700">Toplam Tutar:</span>
                <span className="font-extrabold text-blue-600 text-lg">{toplamTutar} TL</span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={sepetiTemizle}
                  className="w-full bg-white hover:bg-gray-100 text-gray-700 font-semibold py-2 px-3 text-sm rounded border border-gray-300 transition-colors"
                >
                  Temizle
                </button>
                <button
                  onClick={() => {
                    alert("Siparişiniz başarıyla alındı!");
                    sepetiTemizle();
                  }}
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-3 text-sm rounded shadow-sm transition-colors"
                >
                  Satın Al
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Sepet;