import Logo from "../assets/icons/LogoJamOrange.svg";
import Search from "../assets/icons/Search.svg";
import NavigationButtons from "./NavigationButtons";

function Navbar() {
  return (
    <section className="flex justify-between items-center px-4 laptop:px-20 py-2 w-full">
      <div className="w-12 h-12 laptop:w-24 laptop:h-24 flex justify-center items-center">
        <img src={Logo} alt="Logo JAM" />
      </div>
      <div className="flex items-center gap-2 laptop:gap-4 laptop:justify-end laptop:w-1/2">
        <NavigationButtons />
        <div className="relative w-auto">
          <input
            type="text"
            placeholder="Rechercher"
            className="rounded-xl pl-8 py-[2px] h-[30px] w-48 laptop:w-96 focus:outline focus:outline-2 focus:outline-offset-0 focus:outline-secondary-100 font-text"
          />
          <img
            src={Search}
            alt="Icon Search"
            className="absolute top-[7px] left-[8px] w-[15px] h-[15px] laptop:top-[5px] laptop:w-[20px] laptop:h-[20px]"
          />
        </div>
      </div>
    </section>
  );
}

export default Navbar;
