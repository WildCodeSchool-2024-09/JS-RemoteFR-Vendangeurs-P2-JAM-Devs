import { useState } from "react";
import Search from "../assets/icons/Search.svg";
import cross from "../assets/icons/cross.svg";
import type { SearchResult } from "../types/type";

function SearchBar({
  setResult,
  setInputFocus,
}: {
  setResult: (data: SearchResult) => void;
  setInputFocus: (value: boolean) => void;
}) {
  const [input, setInput] = useState("");

  const fetchData = async (query: string) => {
    if (!query.trim()) {
      setResult({ artists: [], albums: [], playlists: [], tracks: [] });
      return;
    }

    try {
      const [artistResponse, albumResponse, playlistResponse, trackResponse] =
        await Promise.all([
          fetch(`/api/search/artist?q=${query}`),
          fetch(`/api/search/album?q=${query}`),
          fetch(`/api/search/playlist?q=${query}`),
          fetch(`/api/search/track?q=${query}`),
        ]);

      const [artistData, albumData, playlistData, trackData] =
        await Promise.all([
          artistResponse.json(),
          albumResponse.json(),
          playlistResponse.json(),
          trackResponse.json(),
        ]);

      const results = {
        artists: artistData.data || [],
        albums: albumData.data || [],
        playlists: playlistData.data || [],
        tracks: trackData.data || [],
      };

      setResult(results);
    } catch (error) {
      console.error("Erreur lors de la recherche :", error);
      setResult({ artists: [], albums: [], playlists: [], tracks: [] });
    }
  };

  const handleChange = (value: string) => {
    setInput(value);
    fetchData(value);
  };

  const clearInput = () => {
    setInput("");
    setResult({ artists: [], albums: [], playlists: [], tracks: [] });
  };

  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Rechercher"
        value={input}
        onChange={(e) => handleChange(e.target.value)}
        onFocus={() => setInputFocus(true)}
        onClick={() => setInputFocus(true)}
        onBlur={() => setInputFocus(false)}
        className="rounded-xl pl-8 py-[2px] h-[30px] w-48 laptop:w-96 focus:outline focus:outline-2 focus:outline-offset-0 focus:outline-secondary-100 font-text bg-primary"
      />
      <img
        src={Search}
        alt="Icon Search"
        className="absolute top-[7px] left-[8px] w-[15px] h-[15px] laptop:top-[5px] laptop:w-[20px] laptop:h-[20px]"
      />
      {input && (
        <button
          type="button"
          onClick={clearInput}
          className="absolute right-[8px] top-[7px] laptop:top-[5px]"
          aria-label="Effacer la recherche"
        >
          <img
            src={cross}
            alt="Clear"
            className="w-[15px] h-[15px] laptop:w-[20px] laptop:h-[20px]"
          />
        </button>
      )}
    </div>
  );
}

export default SearchBar;
