import React from 'react'
import { FaunaTopik } from './FaunaTopik'

export const TopikHangat = () => {
  return (
    <div className='p-15 gap-17 bg-[#FAFAFA]'>
        <div>
            <h1 className='bg-gradient-to-r from-[#4CAF50] via-[#4CAF50] to-[#FFA000] inline-block text-5xl font-bold text-transparent bg-clip-text'>Fauna Hari Ini 
                <span className='text-xl font-bold px-6 mt-4'>Lihat Lebih Banyak
                </span>
     
            </h1>
        </div>

        <div className='text-2xl font-bold py-4 max-w-[800px]'>
            <h2>Lihat apa yang sedang ramai dibahas oleh para penjelajah dan pecinta fauna. Diskusi seru yang lagi naik daun — jangan sampai ketinggalan!</h2>
        </div>

        <div>
            <FaunaTopik/>
        </div>

    </div>
  )
}
