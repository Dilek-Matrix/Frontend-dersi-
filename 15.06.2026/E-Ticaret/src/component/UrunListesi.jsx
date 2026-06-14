import UrunKarti from "./UrunKarti";

const UrunListesi = ({ urunlerListesi, SepeteEkle }) => {
  return (
    <div className="col-span-2">
      <h3 className="font-bold text-gray-800 mb-3 border-b pb-1 text-lg">
        Ürün Listesi ({urunlerListesi.length})
      </h3>
      
      {/* Ürün Kartlarının Listeleneceği Kutu */}
      <div className="flex flex-col gap-3">
        {urunlerListesi.length === 0 ? (
          <p className="text-gray-500 text-sm italic p-4 border border-dashed rounded-lg bg-gray-50 text-center">
            Aradığınız kriterlere uygun ürün bulunamadı.
          </p>
        ) : (
          urunlerListesi.map((urun) => (
            
            <UrunKarti 
              key={urun.id} 
              urun={urun} 
              SepeteEkle={SepeteEkle} 
            />
          ))
        )}
      </div>
    </div>
  );
};

export default UrunListesi;