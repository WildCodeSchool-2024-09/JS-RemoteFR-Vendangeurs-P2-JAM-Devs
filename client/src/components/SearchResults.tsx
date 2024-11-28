import { Link } from "react-router-dom";
import type { SearchResult, Track } from "../types/type";
import { truncateText } from "../utils/truncateText";
import PlayButton from "./PlayButton";

interface SearchResultsProps {
  tracks?: Track[];
  clearSearch: () => void;
  results: SearchResult;
  inputFocus: boolean;
}

function SearchResults({
  results,
  clearSearch,
  inputFocus,
}: SearchResultsProps) {
  if (
    results.artists.length === 0 &&
    results.albums.length === 0 &&
    results.playlists.length === 0 &&
    results.tracks.length === 0
  ) {
    return null;
  }
  return (
    <div className="absolute left-0 top-16 laptop:top-28 z-30 w-full bg-background text-primary p-4 laptop:gap-2">
      {/* Section des artistes */}
      {results.artists.length > 0 && (
        <div className="border-b-2 border-secondary-150 m-auto w-full h-auto p-6">
          <h3 className="text-lg font-bold laptop:text-4xl laptop:my-4 text-accent ">
            Artistes
          </h3>
          <div className="grid grid-cols-1 laptop:grid-cols-3 grid-flow-row w-full gap-6">
            {results.artists.map((artist) => (
              <div
                key={artist.id}
                className="text-lg p-4 border-r-2 border-b-2 border-primary/5 rounded-lg shadow-secondary-100/80 shadow-sm laptop:hover:shadow-md laptop:hover:shadow-secondary-100 laptop:hover:text-accent"
              >
                <Link
                  to={`/artist/${artist.id}`}
                  onClick={clearSearch}
                  className="flex items-center justify-between"
                >
                  <img
                    src={artist.picture_small}
                    alt={artist.name}
                    className="rounded-full"
                  />
                  <p className="laptop:pr-12 ">
                    {truncateText(artist.name, 15)}
                  </p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Section des albums */}
      {results.albums.length > 0 && (
        <div className="border-b-2 border-secondary-150 m-auto w-full h-auto p-6">
          <h3 className="text-lg font-bold laptop:text-4xl laptop:my-4 text-accent">
            Albums
          </h3>
          <div className="grid grid-cols-1 laptop:grid-cols-3 grid-flow-row w-full gap-6">
            {results.albums.map((album) => (
              <div
                key={album.id}
                className="text-lg p-4 border-r-2 border-b-2 border-primary/5 rounded-lg shadow-secondary-100/80 shadow-sm laptop:hover:shadow-md laptop:hover:shadow-secondary-100 laptop:hover:text-accent"
              >
                <Link
                  to={`/album/${album.id}`}
                  onClick={clearSearch}
                  className="flex items-center justify-between"
                >
                  <img
                    src={album.cover_small}
                    alt={album.title}
                    className="rounded-lg"
                  />{" "}
                  <p className="laptop:pr-12">
                    {truncateText(album.title, 15)}
                  </p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Section des playlists */}
      {results.playlists.length > 0 && (
        <div className="border-b-2 border-secondary-150 m-auto w-full h-auto p-6">
          <h3 className="text-lg font-bold laptop:text-4xl laptop:my-4 text-accent">
            Playlists
          </h3>
          <div className="grid grid-cols-1 laptop:grid-cols-3 grid-flow-row w-full gap-6">
            {results.playlists.map((playlist) => (
              <div
                key={playlist.id}
                className="text-lg p-4 border-r-2 border-b-2 border-primary/5 rounded-lg shadow-secondary-100/80 shadow-sm laptop:hover:shadow-md laptop:hover:shadow-secondary-100 laptop:hover:text-accent"
              >
                <Link
                  to={`/playlist/${playlist.id}`}
                  onClick={clearSearch}
                  className="flex items-center justify-between"
                >
                  <img
                    src={playlist.picture_small}
                    alt={playlist.title}
                    className="rounded-full"
                  />
                  <p className="laptop:pr-12">
                    {truncateText(playlist.title, 15)}
                  </p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Section des tracks */}
      {results.tracks.length > 0 && (
        <div className="border-b-2 border-secondary-150 m-auto w-full h-auto p-6">
          <h3 className="text-lg font-bold laptop:text-4xl laptop:my-4 text-accent">
            Titres
          </h3>
          <div className="grid grid-cols-1 laptop:grid-cols-3 grid-flow-row w-full gap-6">
            {results.tracks.map((track) => (
              <div
                key={track.id}
                className="text-lg p-4 border-r-2 border-b-2 border-primary/5 rounded-lg shadow-secondary-100/80 shadow-sm laptop:hover:shadow-md laptop:hover:shadow-secondary-100 laptop:hover:text-accent group"
              >
                <div className="relative w-14 h-14 flex justify-center items-center">
                  <img
                    src={track.album?.cover_small}
                    alt={track.title}
                    className="rounded-full group-hover:hidden"
                  />{" "}
                  <div className="absolute hidden group-hover:flex">
                    <PlayButton trackSearchId={track.id ?? 0} />
                  </div>
                </div>
                <p className="laptop:pr-12">{truncateText(track.title, 15)}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Si aucun résultat */}
      {inputFocus &&
        results.artists.length &&
        results.albums.length &&
        results.playlists.length &&
        results.tracks.length &&
        results.artists.length === 0 &&
        results.albums.length === 0 &&
        results.playlists.length === 0 &&
        results.tracks.length === 0 && (
          <p className="text-center text-sm">Aucun résultat trouvé</p>
        )}
    </div>
  );
}

export default SearchResults;
