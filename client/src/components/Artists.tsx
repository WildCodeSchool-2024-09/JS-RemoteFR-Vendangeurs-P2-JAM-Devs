import { Link } from "react-router-dom";
import type { Artist } from "../types/type";

interface ArtistProps {
  dataArtist: Artist[];
}
function Artists({ dataArtist }: ArtistProps) {
  return (
    <section className="mb-8 w-full my-10 laptop:my-20 space-y-10 laptop:space-y-20">
      <h2 className="font-title text-primary mb-6 text-3xl laptop:text-start text-center laptop:pl-20 laptop:text-6xl">
        Artistes à la une
      </h2>
      <div className="w-full px-2 laptop:px-10 ">
        <div className="flex laptop:justify-evenly gap-4 w-full laptop:gap-11 overflow-x-scroll scrollbar-hide">
          {dataArtist.map((artist) => {
            return (
              artist && (
                <article key={artist.id} className="ml-10">
                  <div className="justify-center items-center flex flex-col gap-2 flex-shrink-0">
                    <div className="bg-secondary-100 w-[136px] h-[136px] rounded-full justify-center items-center flex laptop:w-[135px] laptop:h-[135px]">
                      <Link to={`/artist/${artist.id}`}>
                        <img
                          src={artist.picture}
                          alt="coup de coeur"
                          className="w-32 h-32 rounded-full border-4 border-accent laptop:w-30 laptop:h-30"
                        />
                      </Link>
                    </div>
                    <span className="text-primary laptop:text-lg font-text max-w-36 text-center">
                      {artist.name}
                    </span>
                  </div>
                </article>
              )
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Artists;
