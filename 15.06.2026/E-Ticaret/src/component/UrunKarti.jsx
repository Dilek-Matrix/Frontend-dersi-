import React from 'react'

const UrunKarti = ({ urun, SepeteEkle }) => {
const tukendiMi = urun.stok === 0;

return (
    <div className="border border-gray-200 rounded-lg p-5 mb-4 bg-gray-50 w-full max-w-md shadow-sm font-sans">
      <h3 className="text-gray-800 text-lg font-semibold mb-1">{urun.ad}</h3>
      <p className="text-gray-500 text-sm mb-1">Kategori: {urun.kategori}</p>
      <p className="text-blue-600 font-bold text-base mb-3">Fiyat: {urun.fiyat} TL</p>
      <div className="mb-4">
        <span className={`text-xs font-medium px-2.5 py-1 rounded ${
          tukendiMi ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'
        }`}>
          {tukendiMi ? 'Tükendi' : `Stok: ${urun.stok} adet`}
        </span>
      </div>
      
      {/* Sepete Ekle Butonu */}
      <button 
        disabled={tukendiMi}
        onClick={() => SepeteEkle(urun)}
        className={`px-5 py-2 rounded-md font-bold text-sm transition-colors ${
          tukendiMi 
            ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
            : 'bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800'
        }`}
      >
        {tukendiMi ? 'Stokta Yok' : 'Sepete Ekle'}
      </button>
    </div>
  )
}

export default UrunKarti