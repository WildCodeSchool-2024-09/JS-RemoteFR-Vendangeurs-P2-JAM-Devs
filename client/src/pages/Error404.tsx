import { Link } from "react-router-dom";
import Home from "../assets/icons/Home.svg";
import BreakDisc from "../assets/images/BreakDisc.svg";

export default function Error404() {
  return (
    <div className="flex justify-center items-center text-center ">
      <div className="w-full h-screen flex flex-col gap-10 justify-center items-center">
        <h2 className="font-title text-5xl uppercase text-primary animate-pulse">
          La page que vous recherchez est introuvable...
        </h2>
        <img src={BreakDisc} alt="" className="w-72 h-72" />
        <Link to="/">
          <button
            type="button"
            className="p-2 bg-accent/90 rounded-full hover:bg-accent"
          >
            <img src={Home} alt="" className="w-10 h-10" />
          </button>
        </Link>
      </div>
    </div>
  );
}
