import React from 'react'
import Cat from "../assets/paws.png";
import Komodo from "../assets/komodo.png";

export const Banner = () => {
  return (
    <div className="relative">
      <img className='w-screen' src={Komodo} alt=""/>
        <div className="absolute bottom-10 left-10">
          <h1 className="text-7xl font-bold text-white">Eksplorasi.</h1>
          <h1 className="text-7xl font-bold text-white">Edukasi.</h1>
          <h1 className="text-7xl font-bold text-white">Inspirasi.</h1>
              <p className="text-white text-xl">Temukan keunikan fauna endemik Indonesia, <br></br>pelajari kisah di baliknya, dan biarkan rasa <br></br> ingin tahu menginspirasi langkah untuk peduli.</p>
              <button className="bg-[#4CAF50] text-white">Eksplorasi Sekarang</button>
        </div>
    </div>
  )
}
