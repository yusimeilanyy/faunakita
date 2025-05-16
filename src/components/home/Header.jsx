import Logo from "../../assets/LogoFauna.svg";
import Search from "../../assets/search.png";
import Community from "../../assets/community.png";
import Info from "../../assets/info.png";

export const Header = () => {
  return (
    <header className="bg-white text-green-600">
        <nav className="text-sm flex justify-between px-20 py-4 space-x-0.5 items-center">
          <div className="flex flex-row items-center">
              <a href="#"><img src={Logo} alt="" className="w-10 h-10"/></a>
              <h1 className="text-xl font-bold">Fauna<span className="text-[#FFC107]">Kita</span></h1>
          </div>
          <div className="flex w-70 justify-between">
              <a href="#" className="flex flex-row"><img src={Search} alt="" className="h-5 w-5"/>Jelajahi</a>
              <a href="#" className="flex flex-row"><img src={Community} alt="" className="h-5 w-5"/>Komunitas</a>
              <a href="#" className="flex flex-row"><img src={Info} alt="" className="h-5 w-5"/>Tentang</a>
          </div>
            <button className=" bg-[#4CAF50] text-white">Masuk</button>
        </nav>
    </header>
  )
}
