import React from 'react'
import Utan from '../../assets/image 4.png'
import Elang from '../../assets/image (3).png'
import Anoa from '../../assets/image (4).png'
import { CircleUserRound } from 'lucide-react'
import { MessageCircleHeart } from 'lucide-react'
import { MessageSquareText } from 'lucide-react'
import { Send } from 'lucide-react'
import { Bookmark } from 'lucide-react'

const TopikContent = [
    {
        image: Utan,
        topik: "Bagaimana perkembangan program konservasi Orangutan di Kalimantan?",
        user: "pikarrr23",
        date: "12 Maret, 2025",
        tags: "Kalimantan",
        description: "Saya membaca kabar terbaru soal rehabilitasi, tapi belum jelas hasilnya. Ada yang punya insight dari lapangan?",
        hastag: "#SaveOrangutan #ReforestKalimantan #FaunaIndonesia",
        interaction: ["72", "12", "7", "15"]
    },
    {
        image: Elang,
        topik: "Elang yang mengintai saat matahari terbenam",
        user: "shapaww",
        date: "12 Maret, 2025",
        tags: "Jawa",
        description: "Elang ini hanya muncul menjelang senja. Diam di puncak pohon cukup lama sebelum terbang ke arah jurang.",
        hastag: "#SenjaDiHutan #ElangJawa #WildlifeMoment",
        interaction: ["43", "9", "3", "15"]
    },
    {
        image: Anoa,
        topik: "Anoa dan Masa Depannya: Apakah Breeding Center Cukup?",
        user: "aurelleee",
        date: "12 Maret, 2025",
        tags: "Sulawesi",
        description: "Apa menurutmu pengembangbiakan di penangkaran bisa menggantikan pelestarian di habitat alami?",
        hastag: "#Anoa #Konservasi",
        interaction: ["107", "46", "35", "15"]
    }
]

export const FaunaTopik = () => {
  return (
    <div>
        {TopikContent.map((content,index)=>(
            <div className='flex gap-6 shadow-xl max-w-345 rounded-2xl p-10'>
            <img src={content.image} alt="" />
            <div>
                <h1 className='text-2xl font-bold text-[#4CAF50]'>{content.topik}</h1>
                <div className='flex gap-2 py-2'>
                    <CircleUserRound/>
                    <h4>{content.user}</h4>
                    <h4 className='text-[#9E9E9E] text-xs mt-1'>{content.date}</h4>
                    
                    <div>
                        <span className='bg-[#d4ecd5] text-[#4caf50] rounded-sm px-1.5 border-1 border-[#4caf50] text-[10px] font-semibold'>{content.tags}</span>
                    </div>
                </div>
                <p className='font-semibold'>{content.description}</p>
                <p className='font-semibold text-[#FFA000]'>{content.hastag}</p>
                <div className='flex text-[10px] gap-5 items-center'>
                    <MessageCircleHeart className='text-[#bdbdbd] w-4 '/>
                    <p>{content.interaction[0]}</p>
                    <MessageSquareText className='text-[#bdbdbd] w-4'/>
                    <p>{content.interaction[1]}</p>
                    <Send className='text-[#bdbdbd] w-4'/> 
                    <p>{content.interaction[2]}</p>
                    <Bookmark className='text-[#bdbdbd] w-4'/>
                    <p>{content.interaction[3]}</p>
                </div>
            </div>
        </div>
        )
        )}
        
    </div>
  )
}
