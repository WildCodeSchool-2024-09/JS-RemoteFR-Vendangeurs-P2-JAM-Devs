import { useState } from "react";
import Logo from "../assets/icons/LogoJamOrange.svg";
import type { SearchResult } from "../types/type";
import NavigationButtons from "./NavigationButtons";
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
    <section className="flex justify-between items-center px-4 laptop:px-20 py-2 w-full">
      <div className="w-12 h-12 laptop:w-24 laptop:h-24 flex justify-center items-center">
        <img src={Logo} alt="Logo JAM" />
      </div>
      <article className="flex items-center gap-2 laptop:gap-4 laptop:justify-center laptop:w-1/2">
        <NavigationButtons />
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
