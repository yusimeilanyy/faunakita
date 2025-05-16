import { NavLink } from "react-router-dom";
import Komodo from "../../assets/komodo.png";

export const Banner = () => {
  return (
    <div className="relative">
      <img src={Komodo} alt=""/>
        <div className="absolute bottom-10 left-10">
          <h1 className="text-7xl font-bold text-white">Eksplorasi.</h1>
          <h1 className="text-7xl font-bold text-white">Edukasi.</h1>
          <h1 className="text-7xl font-bold text-white">Inspirasi.</h1>
              <p className="text-white text-xl">Temukan keunikan fauna endemik Indonesia, <br></br>pelajari kisah di baliknya, dan biarkan rasa <br></br> ingin tahu menginspirasi langkah untuk peduli.</p>
              <NavLink to="/glossarium"><button className="bg-[#4CAF50] text-white">Eksplorasi Sekarang</button></NavLink>
        </div>
    </div>
  )
}
