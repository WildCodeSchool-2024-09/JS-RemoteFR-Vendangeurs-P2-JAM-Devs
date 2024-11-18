// import carre from "../assets/icons/who.jpeg";
import type { Playlist } from "../types/type";

interface PlaylistsProps {
  dataPlaylist: Playlist[];
}

function Playlists({ dataPlaylist }: PlaylistsProps) {
  return (
    <section className="mb-8 w-full laptop:my-20">
      <h2 className="font-title text-primary mb-6 text-3xl text-center laptop:text-6xl">
        Playlists
      </h2>
      <div className="w-full px-2 laptop:px-10 ">
        <div className="flex justify-start gap-4 w-full laptop:gap-11 overflow-x-scroll">
          {dataPlaylist.map((playlist) => {
            return (
              <article key={playlist.id} className="ml-10">
                <div className="justify-center items-center flex flex-col gap-2 flex-shrink-0">
                  <div className="bg-secondary-100 w-[136px] h-[136px] rounded-full justify-center items-center flex laptop:w-[135px] laptop:h-[135px]">
                    <img
                      src={playlist.picture}
                      alt="playlist"
                      className="w-32 h-32 rounded-full border-4 border-accent laptop:w-30 laptop:h-30"
                    />
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
