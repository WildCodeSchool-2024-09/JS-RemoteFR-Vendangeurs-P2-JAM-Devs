import { useState } from "react";
import { NavLink } from "react-router-dom";
import Home from "../assets/icons/Home.svg";
import Logo from "../assets/icons/LogoJamOrange.svg";
import type { SearchResult } from "../types/type";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";

function Navbar() {
  const [result, setResult] = useState<SearchResult>({
    artists: [],
    albums: [],
    playlists: [],
    tracks: [],
  });

  const [inputFocus, setInputFocus] = useState(false);

  const clearSearch = () => {
    setResult({ artists: [], albums: [], playlists: [], tracks: [] });
  };
  return (
    <section className="flex justify-between items-center px-4 py-2 w-full">
      <div className="laptop:w-full laptop:pl-20">
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
        <div className="flex flex-col">
          <SearchBar setResult={setResult} setInputFocus={setInputFocus} />
          <SearchResults
            results={result}
            clearSearch={clearSearch}
            inputFocus={inputFocus}
          />
        </div>
      </article>
    </section>
  );
}

export default Navbar;
