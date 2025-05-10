import React from 'react'
import Cenderawasih from '../assets/image.png'
import Kuskus from '../assets/image (1).png'
import Komodo from '../assets/image (2).png'
import Logo from '../assets/Logo.png'
import { BadgeCheck } from 'lucide-react'
import { ArrowRight } from 'lucide-react'

const FaunaContent = [
    {
        image: Cenderawasih, 
        name: "Cenderawasih botak",
        species: "Cicinnurus respublica",
        description:"Cenderawasih botak atau 'Wilson Birds of Paradise'  adalah spesies burung dari keluarga paradisaeidae yang termasuk satwa endemik langka di Indonesia dengan ciri khas keunikan warnanya yang terang. Cenderawasih botak termasuk",
        tags:["Burung","Papua"]
    },
    {
        image: Kuskus, 
        name: "Kuskus beruang",
        species: "Ailurops ursinus",
        description:"Kuskus Beruang atau bubutu adalah anggota dari genus Ailurops. Kuskus Beruang adalah hewan marsupial dan dari keluarga Phalangeridae. Bubutu adalah marsupial arboreal yang hidup di kanopi hutan hujan tropis. Hampir tidak diketahui status dan keadaan ekologinya.",
        tags:["Mamalia","Sulawesi"]
    },
    {
        image: Komodo, 
        name: "Komodo",
        species: "Varanus komodoensis",
        description:"Komodo (Varanus komodoensis) adalah kadal terbesar di dunia yang hanya ditemukan di beberapa pulau di Nusa Tenggara Timur. Predator tangguh ini memiliki lidah bercabang untuk melacak mangsa, gigi tajam, dan racun ringan pada air liurnya. Hidup soliter dan menjadi ikon satwa endemik Indonesia yang kini berstatus rentan punah.",
        tags:["Reptil","NTT"]
    }
]

export const FaunaCard = () => {
  return (
    <div className='flex gap-8'>
        {FaunaContent.map((content,index)=>(
            <div className='flex flex-col shadow-xl max-w-120 rounded-2xl p-4 gap-2'>
            <div className='flex gap-4'>
                <img src={content.image} alt="" />
                <div>
                    <h1 className='text-2xl font-semibold text-[#4CAF50] max-w-1'>{content.name}</h1>
                    <h2 className='italic font-normal text-[#FFA000] max-w-1'>{content.species}</h2>
                </div>
            </div>
            <p>{content.description}</p>
            <div className='flex gap-2 justify-between items-center'>
                <div className='flex gap-1'>
                    <img className='w-[28px]' src={Logo} alt="" />
                    <h3 className='font-semibold'>FaunaKita</h3>
                    <BadgeCheck className='w-4.5 text-[#66bb6a]'/>
                </div>
                <div className='text-[8px] flex gap-2 font-bold'>
                    <span
                    className='bg-[#e8f4fe] text-[#64b5f6] rounded-sm px-2 border-1 border-[#64b5f6]'>
                        {content.tags[0]}
                        </span>
                    <span className='bg-[#bfc3df] text-[#283593] rounded-sm px-2 border-1 border-[#283593]'>
                        {content.tags[1]}
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
        ))
            
        }
        
    </div>
  )
}
