import { Link } from "react-router-dom";
import type { Playlist } from "../types/type";
import PlayButton from "./PlayButton";

interface PlaylistsProps {
  dataPlaylist: Playlist[];
}

function Playlists({ dataPlaylist }: PlaylistsProps) {
  return (
    <section className="mb-8 w-full my-10 laptop:my-20 space-y-10 laptop:space-y-20 ">
      <h2 className="font-title text-primary mb-6 text-3xl text-center laptop:text-start laptop:pl-20 laptop:text-6xl">
        Playlists à la une
      </h2>
      <div className="w-full px-2 laptop:px-10 ">
        <div className="flex laptop:grid laptop:grid-cols-4 desktop:grid-cols-5 gap-4 w-full laptop:gap-8 overflow-x-auto  scrollbar-hide">
          {dataPlaylist.map((playlist) => {
            return (
              <article key={playlist.id} className="ml-10 group">
                <div className="justify-center items-center flex flex-col gap-2 flex-shrink-0">
                  <div className="relative bg-secondary-100 w-[136px] h-[136px] rounded-full justify-center items-center flex laptop:w-[135px] laptop:h-[135px]">
                    <Link to={`/playlist/${playlist.id}`}>
                      <img
                        src={playlist.picture}
                        alt="playlist"
                        className="w-32 h-32 rounded-full border-4 border-accent laptop:w-30 laptop:h-30"
                      />
                    </Link>
                    <div className="absolute bottom-0 right-0 hidden group-hover:flex">
                      <PlayButton playlistId={playlist.id} />
                    </div>
                  </div>
                  <span className="text-primary laptop:text-lg font-text max-w-36 text-center">
                    {playlist.title}
                  </span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Playlists;
