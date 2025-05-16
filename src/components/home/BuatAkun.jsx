import React from 'react'
import Bro from "../../assets/bro.png";

export const BuatAkun = () => {
  return (
    <div className='p-15 bg-[#FAFAFA]'>
        <div className="flex flex-row items-center">
            <div className="w-3/4">
                <h1 className="text-[44px] font-bold text-green-600">Jadi Bagian dari Fauna<span className="text-[#FFC107]">Kita</span>!</h1>
                <p className="text-[25px] font-bold">Buat akun FaunaKita untuk mendapatkan akses penuh ke semua fitur seru! Kamu bisa memposting temuan fauna, menulis entri pengetahuan, menyimpan hewan favorit,  berinteraksi dengan pengguna lain, dan masih banyak lagi! <span> Jadi bagian dari komunitas yang peduli dan cinta pada keanekaragaman hayati Indonesia. Yuk, mulai petualanganmu hari ini!</span></p>
                <button className="bg-[#4CAF50] text-white w-[192px] h-[48px]">Daftar Akun</button>
            </div>
            <div>
                <img src={Bro} alt="" className=""/> 
            </div>
        </div>
    </div>
  )
}
