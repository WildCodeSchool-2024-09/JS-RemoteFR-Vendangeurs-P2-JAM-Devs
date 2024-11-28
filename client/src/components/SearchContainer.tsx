import { useState } from "react";
import type { SearchResult } from "../types/type";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";

function SearchContainer() {
  const [results, setResults] = useState<SearchResult>({
    artists: [],
    albums: [],
    playlists: [],
    tracks: [],
  });
  const [isVisible, setIsVisible] = useState(true);
  const [inputFocus, setInputFocus] = useState(false);

  const handleClearSearch = () => {
    setIsVisible(false);
  };

  const handleSetResults = (data: SearchResult) => {
    setResults(data);
    setIsVisible(true);
  };

  return (
    <div className="relative">
      <SearchBar setResult={handleSetResults} setInputFocus={setInputFocus} />
      {isVisible && (
        <SearchResults
          results={results}
          clearSearch={handleClearSearch}
          inputFocus={inputFocus}
        />
      )}
    </div>
  );
}

export default SearchContainer;
