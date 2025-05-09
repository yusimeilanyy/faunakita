import React from 'react'
import { FaunaCard } from './FaunaCard'
import { ArrowRight } from 'lucide-react'

export const FaunaHariIni = () => {
  return (
    <div className='p-15 bg-[#FAFAFA]'>
        <div className=''>
            <h1 className='bg-gradient-to-r from-[#4CAF50] via-[#4CAF50] to-[#FFA000] inline-block text-4xl font-semibold text-transparent bg-clip-text'>Fauna Hari Ini 
                <span className='text-xl font-bold px-6 mt-4'>Lihat Lebih Banyak
                </span>
                <ArrowRight/>
            </h1>
        </div>
        <div className='text-3xl font-semibold py-4'>
            <h2>Yuk, kenalan dengan fauna unik pilihan hari ini.</h2>
            <h2>Siapa tahu jadi favoritmu!</h2>
        </div>

        <div>
            <FaunaCard/>
        </div>
    </div>
  )
}
