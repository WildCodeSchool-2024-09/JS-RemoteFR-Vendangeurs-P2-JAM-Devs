import { NavLink } from "react-router-dom";
import Home from "../assets/icons/Home.svg";
import Infos from "../assets/icons/Infos.svg";
import Logo from "../assets/icons/LogoJamOrange.svg";
import Search from "../assets/icons/Search.svg";

function Navbar() {
  return (
    <section className="flex justify-between laptop:justify-center items-center px-4 py-2 w-full">
      <div>
        <img
          src={Logo}
          alt="Logo JAM"
          className="w-12 h-12 laptop:w-24 laptop:h-24"
        />
      </div>
      <article className="flex items-center gap-2 laptop:gap-4 laptop:justify-center laptop:w-1/2">
        <NavLink to="/">
          <img
            src={Home}
            alt="Icon Home"
            className="h-[30px] w-[30px] laptop:w-[40px] laptop:h-[40px] "
          />
        </NavLink>
        <div className="relative">
          <input
            type="text"
            placeholder="Rechercher"
            className="rounded-xl pl-8 py-[2px] w-48 laptop:w-96 focus:outline focus:outline-2 focus:outline-offset-0 focus:outline-secondary-100 font-text"
          />
          <img
            src={Search}
            alt="Icon Search"
            className="absolute top-[7px] left-[8px] w-[15px] h-[15px] laptop:top-[5px] laptop:w-[20px] laptop:h-[20px]"
          />
        </div>
        <button type="button">
          <img
            src={Infos}
            alt="Icon Infos"
            className="h-[25px] w-[25px] laptop:w-[30px] laptop:h-[30px] "
          />
        </button>
      </article>
    </section>
  );
}

export default Navbar;
