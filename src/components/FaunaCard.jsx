import React from 'react'
import Cenderawasih from '../assets/image.png'
import Logo from '../assets/Logo.png'
import { BadgeCheck } from 'lucide-react'
import { ArrowRight } from 'lucide-react'

export const FaunaCard = () => {
  return (
    <div className='flex flex-col shadow-xl max-w-120 rounded-2xl p-4 gap-2'>
        <div className='flex gap-4'>
            <img src={Cenderawasih} alt="" />
            <div>
                <h1 className='text-2xl font-semibold text-[#4CAF50] max-w-1'>Cenderawasih botak</h1>
                <h2 className='italic font-normal text-[#FFA000] max-w-1'>Cicinnurus respublica</h2>
            </div>
        </div>
        <p>Cenderawasih botak atau 'Wilson Birds of Paradise'  adalah spesies burung dari keluarga paradisaeidae yang termasuk satwa endemik langka di Indonesia dengan ciri khas keunikan warnanya yang terang. Cenderawasih botak termasuk</p>

        <div className='flex gap-2 justify-between items-center'>
            <div className='flex gap-1'>
                <img className='w-[28px]' src={Logo} alt="" />
                <h3 className='font-semibold'>FaunaKita</h3>
                <BadgeCheck className='w-4.5 text-[#66bb6a]'/>
            </div>
            <div className='text-[8px] flex gap-2 font-bold'>
                <span
                className='bg-[#e8f4fe] text-[#64b5f6] rounded-sm px-2 border-1 border-[#64b5f6]'>
                    Burung
                    </span>
                <span className='bg-[#bfc3df] text-[#283593] rounded-sm px-2 border-1 border-[#283593]'>
                    Papua
                    </span>
                <span className='bg-[#d4ecd5] text-[#4caf50] rounded-sm px-1 border-1 border-[#4caf50]'>
                    +2
                    </span>
            </div>
            <button className='bg-[#4CAF50] text-white rounded-md p-1 w-10 flex justify-center'>
                <ArrowRight className='w-4'/>
            </button>
        </div>
    </div>
  )
}
